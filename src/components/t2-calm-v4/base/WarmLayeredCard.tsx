interface WarmLayeredCardProps {
  children: React.ReactNode
  className?: string
  rotation?: number
  elevated?: boolean
}

export function WarmLayeredCard({
  children,
  className = '',
  rotation = 0,
  elevated = false
}: WarmLayeredCardProps) {
  return (
    <div
      className={`
        relative rounded-3xl border border-calm4-border bg-calm4-bone
        transition-all duration-300 ease-out
        hover:translate-y-[-2px]
        ${elevated
          ? 'shadow-[var(--shadow-calm4-lg)] hover:shadow-[var(--shadow-calm4-card-hover)]'
          : 'shadow-[var(--shadow-calm4-card)] hover:shadow-[var(--shadow-calm4-lg)]'
        }
        ${className}
      `}
      style={{ transform: rotation !== 0 ? `rotate(${rotation}deg)` : undefined }}
    >
      {/* Top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-t-3xl" />

      {/* Inner shadow bevel */}
      <div className="absolute inset-0 rounded-3xl shadow-[var(--shadow-calm4-inner)] pointer-events-none" />

      {children}
    </div>
  )
}
