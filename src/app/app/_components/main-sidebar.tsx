'use client'

import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavFooter,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { House, SlidersHorizontal } from 'lucide-react'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/logo'
import { Session } from 'next-auth'
type MainSidebarProps = {
  user: Session['user']
}

export const DashboardMainSidebar = ({ user }: MainSidebarProps) => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  if (!user) return
  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive('/app')}>
              <House className="size-4" /> Tarefas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive('/settings')}
            >
              <SlidersHorizontal className="size-4" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/app/settings">
              Site
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarNavFooter>
        <UserDropdown user={user} />
      </DashboardSidebarNavFooter>
    </DashboardSidebar>
  )
}
