interface CalmContainerProps {
  children: React.ReactNode
  className?: string
}

export function CalmContainer({ children, className = '' }: CalmContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
