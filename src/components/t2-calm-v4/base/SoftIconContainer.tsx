interface SoftIconContainerProps {
  children?: React.ReactNode
  variant?: 'green' | 'orange' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SoftIconContainer({
  children,
  variant = 'green',
  size = 'md',
  className = ''
}: SoftIconContainerProps) {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14',
  }

  const variantClasses = {
    green: 'bg-gradient-to-br from-calm4-green-soft to-calm4-green-soft/70',
    orange: 'bg-gradient-to-br from-calm4-orange-soft to-calm4-orange-soft/70',
    neutral: 'bg-gradient-to-br from-calm4-bone to-calm4-sand',
  }

  const accentClasses = {
    green: 'bg-calm4-green-deep',
    orange: 'bg-calm4-orange-deep',
    neutral: 'bg-calm4-clay',
  }

  return (
    <div
      className={`
        relative flex items-center justify-center rounded-2xl
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        shadow-[var(--shadow-calm4-sm)]
        ${className}
      `}
      style={{
        boxShadow: `
          var(--shadow-calm4-sm),
          inset 0 1px 2px rgba(255, 255, 255, 0.5),
          inset 0 -1px 2px rgba(42, 38, 34, 0.05)
        `
      }}
    >
      {/* Inner highlight */}
      <div className="absolute inset-0.5 rounded-xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

      {/* Symbol placeholder or children */}
      {children || (
        <div className={`h-2.5 w-2.5 rounded-full ${accentClasses[variant]}`} />
      )}
    </div>
  )
}
