'use client';

import MobileNavbar from '@/components/commons/MobileNavbar';
import SkeletonUserCard from '@/components/commons/SkeletonUserCard';
import { UserCard } from '@/components/commons/UserCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { EditModal } from '@/components/commons/EditModal';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }): Promise<ApiResponse> => {
  const response = await axios.get('https://reqres.in/api/users', {
    params: {
      page: pageParam,
      per_page: 8,
    },
  });
  return response.data;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const { toast } = useToast();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam }) => fetchUsers({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
  });

  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Filter data based on search query
  useEffect(() => {
    if (data) {
      const allUsers = data.pages.flatMap((page) => page.data);
      const filtered = allUsers.filter((user) => {
        return (
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredData(filtered);
    }
  }, [data, searchQuery]);

  // Fetch data only when loaderRef appears in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage && hasNextPage) {
          console.log('Fetching next page...');
          fetchNextPage(); // Fetch the next page when loaderRef is in view
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0, // Only trigger when the loader is fully visible
      },
    );

    const loader = loaderRef.current;
    if (loader) {
      observer.observe(loader);
    }

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [fetchNextPage, isFetchingNextPage, hasNextPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleEditClick = useCallback((user: User) => {
    setEditingUser(user);
  }, []);

  const handleEditSave = useCallback(
    (editedUser: { first_name: string; email: string }) => {
      setFilteredData((prevData) =>
        prevData.map((user) => (user.id === editingUser?.id ? { ...user, ...editedUser } : user)),
      );
      toast({
        title: 'User Updated',
        description: 'The user information has been successfully updated.',
      });
    },
    [editingUser, toast],
  );

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <>
      <MobileNavbar value={searchQuery} onChange={handleSearchChange} />
      <div className="w-full pt-7">
        <input
          type="text"
          placeholder="Search..."
          className="hidden h-10 w-1/3 rounded-md border border-slate-300 px-4 outline-none focus:shadow-xl focus:outline-none md:flex"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {isLoading ? (
          <div className="mt-20 grid grid-cols-1 gap-6 px-3 sm:grid-cols-2   md:px-0 lg:mt-16 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonUserCard key={index} />
            ))}
          </div>
        ) : (
          <div className="mt-20 grid grid-cols-1 gap-6 px-3 sm:grid-cols-2   md:px-0 lg:mt-16 lg:grid-cols-4">
            {/* Display filtered data */}
            {filteredData.map((user) => (
              <UserCard key={user.email} {...user} id={user.id.toString()} onEditClick={() => handleEditClick(user)} />
            ))}
          </div>
        )}

        {/* Loader for fetching next page */}
        <div ref={loaderRef} className="mt-10 text-center">
          {isFetchingNextPage && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2   lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <SkeletonUserCard key={index} />
              ))}
            </div>
          )}
        </div>

        {!hasNextPage && !isLoading && (
          <div className="mt-10 pb-20 pt-5 text-center text-slate-300">No more data to load</div>
        )}
      </div>

      {editingUser && (
        <EditModal
          isOpen={!!editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleEditSave}
          user={editingUser}
        />
      )}
      <Toaster />
    </>
  );
}
