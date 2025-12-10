interface SecondaryLinkProps {
  children: React.ReactNode
  href?: string
  className?: string
}

export function SecondaryLink({ children, href = '#', className = '' }: SecondaryLinkProps) {
  return (
    <a
      href={href}
      className={`text-sm font-medium text-calm-accent transition-colors hover:underline ${className}`}
    >
      {children}
    </a>
  )
}
