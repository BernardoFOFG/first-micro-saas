import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { LogOut, Rocket, Settings } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
type UserDropdownProps = {
  user: Session['user']
}

export function UserDropdown({ user }: UserDropdownProps) {
  if (!user) return
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 flex items-center w-full justify-between space-x-2 p-2"
        >
          <Avatar className="h-8 w-8 flex items-center justify-center bg-primary">
            {user.image && (
              <AvatarImage
                src={user.image as string}
                alt={user.name as string}
              />
            )}
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1 text-left space-y-1">
            {user.name && (
              <p className="text-sm font-medium leading-none">{user.name}</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="size-4" />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Rocket className="size-4" />
            Upgrade
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
