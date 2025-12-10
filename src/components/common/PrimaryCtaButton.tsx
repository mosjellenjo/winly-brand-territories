interface PrimaryCtaButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
}

export function PrimaryCtaButton({ children, href = '#', className = '' }: PrimaryCtaButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-calm-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-calm-accent/90 focus:outline-none focus:ring-2 focus:ring-calm-accent/40 focus:ring-offset-2 ${className}`}
    >
      {children}
    </a>
  )
}
