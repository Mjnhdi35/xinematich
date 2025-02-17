import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface IAlertBoxProps {
  children: ReactNode
  className?: string
}

export const AlertBox = ({ children, className }: IAlertBoxProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center py-12 bg-gray-100',
        className,
      )}
    >
      {children}
    </div>
  )
}
