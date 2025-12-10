export function SoftDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-calm4-border to-transparent opacity-60 ${className}`}
    />
  )
}
