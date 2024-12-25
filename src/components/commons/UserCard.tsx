
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface UserCardProps {
  name: string
  email: string
  avatarUrl: string
}

export function UserCard({ name, email, avatarUrl }: UserCardProps) {
  return (
    <Card className="flex flex-col items-center p-6">
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Edit</Button>
      </CardFooter>
    </Card>
  )
}

