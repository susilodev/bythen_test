import { UserCard } from "@/components/commons/UserCard";

const users = [
  { name: "John Doe", email: "john@example.com", avatarUrl: "/placeholder.svg?height=96&width=96" },
  { name: "Jane Smith", email: "jane@example.com", avatarUrl: "/placeholder.svg?height=96&width=96" },
  { name: "Bob Johnson", email: "bob@example.com", avatarUrl: "/placeholder.svg?height=96&width=96" },
  { name: "Alice Brown", email: "alice@example.com", avatarUrl: "/placeholder.svg?height=96&width=96" },
]


export default function Home() {
  return (
    <div className="w-full pt-7">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 outline-none hidden lg:flex h-10 px-4 rounded-md border border-slate-300 focus:outline-none focus:shadow-xl"
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {users.map((user) => (
          <UserCard key={user.email} {...user} />
        ))}
      </div>



    </div>
  );
}
