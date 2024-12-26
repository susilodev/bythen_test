import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface UserCardProps {
  last_name: string;
  first_name: string;
  email: string;
  avatar: string;
  id: string;
  onEditClick: () => void;
}

export function UserCard(data: UserCardProps) {
  const { first_name, email, avatar, id, onEditClick } = data;

  return (
    <Card className="z-0 flex flex-col items-center p-4 hover:cursor-pointer hover:bg-slate-50">
      <CardContent className="flex flex-col items-center space-y-4">
        <Image alt="first_name" src={avatar} className="z-0 size-24 rounded-full" width={100} height={100} />
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold">{first_name}</h2>
          <p className="text-sm font-medium text-gray-500">{email}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="-mt-1 w-28 bg-slate-700 hover:bg-slate-900" size="sm" onClick={onEditClick}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
