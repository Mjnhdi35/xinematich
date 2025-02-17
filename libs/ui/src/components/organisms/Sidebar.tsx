'use client'

import { Menu } from 'lucide-react'
import { useDialogState } from '@xilematich/util/hooks/dialog'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '../ui/sheet'
import { Button, buttonVariants } from '../ui/button'
import { useSession } from 'next-auth/react'
import { LogoutButton } from '../molecules/LogoutButton'
import { UserInfo } from '../molecules/UserInfo'

export interface INavSidebarProps {}

export function Sidebar() {
  const session = useSession()

  const id = session?.data?.user?.id

  const [open, setOpen] = useDialogState(false)

  if (!id) {
    return (
      <Link href="/login" className={buttonVariants({ variant: 'default' })}>
        Log In
      </Link>
    )
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <div className="flex flex-col gap-2 mt-4 mb-8">
          <UserInfo />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <LogoutButton />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
