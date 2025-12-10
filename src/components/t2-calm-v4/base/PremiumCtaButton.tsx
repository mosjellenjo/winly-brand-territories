import Link from 'next/link'

interface PremiumCtaButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function PremiumCtaButton({ href, children, className = '' }: PremiumCtaButtonProps) {
  return (
    <Link
      href={href}
      className={`
        group relative inline-flex items-center gap-2.5 overflow-hidden
        rounded-full bg-gradient-to-b from-calm4-cta-from to-calm4-cta-to
        px-7 py-3.5 text-sm font-medium text-calm4-bone
        shadow-[0_6px_30px_rgba(0,0,0,0.12)]
        transition-all duration-200 ease-out
        hover:translate-y-[1px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]
        focus:outline-none focus:ring-2 focus:ring-calm4-green-soft/70 focus:ring-offset-2 focus:ring-offset-calm4-sand
        ${className}
      `}
    >
      {/* Top glare */}
      <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

      <span className="relative">{children}</span>

      <svg
        className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  )
}
