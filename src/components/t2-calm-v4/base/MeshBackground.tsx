interface MeshBackgroundProps {
  variant?: 'hero' | 'data' | 'cta'
  className?: string
}

export function MeshBackground({ variant = 'hero', className = '' }: MeshBackgroundProps) {
  const gradients = {
    hero: `
      radial-gradient(ellipse 80% 50% at 70% 40%, rgba(201, 215, 197, 0.12) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 30% 70%, rgba(228, 194, 164, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse 50% 50% at 50% 50%, rgba(241, 230, 218, 0.15) 0%, transparent 60%)
    `,
    data: `
      radial-gradient(ellipse 70% 60% at 20% 30%, rgba(201, 215, 197, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse 60% 50% at 80% 60%, rgba(184, 169, 154, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse 80% 40% at 50% 80%, rgba(228, 194, 164, 0.08) 0%, transparent 50%)
    `,
    cta: `
      radial-gradient(ellipse 100% 80% at 50% 20%, rgba(201, 215, 197, 0.2) 0%, transparent 50%),
      radial-gradient(ellipse 60% 60% at 30% 80%, rgba(228, 194, 164, 0.12) 0%, transparent 50%),
      radial-gradient(ellipse 50% 50% at 70% 70%, rgba(184, 169, 154, 0.1) 0%, transparent 50%)
    `,
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ backgroundImage: gradients[variant] }}
    />
  )
}
