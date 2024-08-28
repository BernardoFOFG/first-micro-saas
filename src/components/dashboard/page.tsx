import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export type DashboardPageGenericProps<T = unknown> = {
  children: ReactNode
  className?: string
} & T

export const DashboardPage = ({
  className,
  children,
}: DashboardPageGenericProps) => {
  return <section className={cn(['h-screen', className])}>{children}</section>
}

export const DashboardPageHeader = ({
  className,
  children,
}: DashboardPageGenericProps) => {
  return (
    <header
      className={cn([
        'px-6 py-5 border-b border-border flex items-center justify-between',
        className,
      ])}
    >
      {children}
    </header>
  )
}

export const DashboardPageHeaderTitle = ({
  className,
  children,
}: DashboardPageGenericProps) => {
  return (
    <h1 className={cn(['text-muted-foreground uppercase', className])}>
      {children}
    </h1>
  )
}

export const DashboardPageHeaderNav = ({
  className,
  children,
}: DashboardPageGenericProps) => {
  return <nav className={cn(['', className])}>{children}</nav>
}

export const DashboardPageMain = ({
  className,
  children,
}: DashboardPageGenericProps) => {
  return <main className={cn(['p-6', className])}>{children}</main>
}
