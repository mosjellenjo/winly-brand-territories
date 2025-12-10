interface NanoPlaceholderProps {
  name: string
  height?: string
  className?: string
}

export function NanoPlaceholder({ name, height = '200px', className = '' }: NanoPlaceholderProps) {
  return (
    <div
      className={`
        flex items-center justify-center
        rounded-2xl border-2 border-dashed border-calm4-clay/40
        bg-calm4-sand/30
        ${className}
      `}
      style={{ height }}
    >
      <p className="text-sm text-calm4-muted">
        Illustration placeholder: <span className="font-medium">{name}</span>
      </p>
    </div>
  )
}
