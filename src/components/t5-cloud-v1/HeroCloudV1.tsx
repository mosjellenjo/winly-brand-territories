'use client'

import { useEffect, useRef } from 'react'

export function HeroCloudV1() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated data clouds effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Cloud puff structure for realistic cloud shapes
    interface CloudPuff {
      offsetX: number
      offsetY: number
      radius: number
    }

    interface DataCloud {
      x: number
      y: number
      baseRadius: number
      opacity: number
      speed: number
      phase: number
      puffs: CloudPuff[]
    }

    interface RainDrop {
      x: number
      y: number
      speed: number
      opacity: number
      length: number
      thickness: number
    }

    interface SunRay {
      angle: number
      length: number
      width: number
    }

    const clouds: DataCloud[] = []
    const rainDrops: RainDrop[] = []

    // Track which clouds have sun behind them (indices)
    const cloudsWithSun: Set<number> = new Set([0, 2, 4]) // Every other cloud has sun

    // Generate realistic cloud shape with multiple puffs
    function generateCloudPuffs(baseRadius: number): CloudPuff[] {
      const puffs: CloudPuff[] = []

      // Main body - larger central puffs
      puffs.push({ offsetX: 0, offsetY: 0, radius: baseRadius * 0.9 })
      puffs.push({ offsetX: -baseRadius * 0.5, offsetY: baseRadius * 0.1, radius: baseRadius * 0.7 })
      puffs.push({ offsetX: baseRadius * 0.5, offsetY: baseRadius * 0.05, radius: baseRadius * 0.75 })

      // Top bumps - the fluffy top of cloud
      puffs.push({ offsetX: -baseRadius * 0.3, offsetY: -baseRadius * 0.4, radius: baseRadius * 0.55 })
      puffs.push({ offsetX: baseRadius * 0.2, offsetY: -baseRadius * 0.45, radius: baseRadius * 0.5 })
      puffs.push({ offsetX: baseRadius * 0.6, offsetY: -baseRadius * 0.25, radius: baseRadius * 0.45 })
      puffs.push({ offsetX: -baseRadius * 0.7, offsetY: -baseRadius * 0.2, radius: baseRadius * 0.4 })

      // Bottom flatness - clouds have flat bottoms
      puffs.push({ offsetX: -baseRadius * 0.6, offsetY: baseRadius * 0.35, radius: baseRadius * 0.5 })
      puffs.push({ offsetX: 0, offsetY: baseRadius * 0.4, radius: baseRadius * 0.6 })
      puffs.push({ offsetX: baseRadius * 0.55, offsetY: baseRadius * 0.3, radius: baseRadius * 0.5 })

      // Extra fluffy details
      puffs.push({ offsetX: -baseRadius * 0.9, offsetY: 0, radius: baseRadius * 0.35 })
      puffs.push({ offsetX: baseRadius * 0.85, offsetY: baseRadius * 0.1, radius: baseRadius * 0.4 })

      return puffs
    }

    // Initialize clouds with realistic shapes
    const numClouds = 6
    for (let i = 0; i < numClouds; i++) {
      const baseRadius = 50 + Math.random() * 40
      clouds.push({
        x: (i / numClouds) * canvas.width + Math.random() * 200 - 100,
        y: 60 + Math.random() * 120,
        baseRadius,
        opacity: 0.65 + Math.random() * 0.25, // Increased opacity for better visibility
        speed: 0.15 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
        puffs: generateCloudPuffs(baseRadius),
      })
    }

    // Draw sun peeking from behind a cloud
    function drawSunBehindCloud(cloudX: number, cloudY: number, baseRadius: number, wobbleY: number) {
      if (!ctx) return
      const sunX = cloudX + baseRadius * 0.6 // Sun peeks from the right side
      const sunY = cloudY + wobbleY - baseRadius * 0.3 // Sun is above center
      const sunRadius = baseRadius * 0.5

      // Sun glow (outer)
      const outerGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 2.5)
      outerGlow.addColorStop(0, 'rgba(255, 220, 100, 0.4)')
      outerGlow.addColorStop(0.5, 'rgba(255, 200, 50, 0.15)')
      outerGlow.addColorStop(1, 'rgba(255, 180, 0, 0)')
      ctx.fillStyle = outerGlow
      ctx.beginPath()
      ctx.arc(sunX, sunY, sunRadius * 2.5, 0, Math.PI * 2)
      ctx.fill()

      // Sun rays
      ctx.save()
      ctx.translate(sunX, sunY)
      const numRays = 8
      for (let i = 0; i < numRays; i++) {
        const angle = (i / numRays) * Math.PI * 2
        const rayLength = sunRadius * 1.8
        const rayWidth = sunRadius * 0.15

        ctx.save()
        ctx.rotate(angle)

        const rayGradient = ctx.createLinearGradient(sunRadius * 0.8, 0, sunRadius * 0.8 + rayLength, 0)
        rayGradient.addColorStop(0, 'rgba(255, 210, 80, 0.6)')
        rayGradient.addColorStop(1, 'rgba(255, 200, 50, 0)')

        ctx.fillStyle = rayGradient
        ctx.beginPath()
        ctx.moveTo(sunRadius * 0.8, -rayWidth / 2)
        ctx.lineTo(sunRadius * 0.8 + rayLength, 0)
        ctx.lineTo(sunRadius * 0.8, rayWidth / 2)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }
      ctx.restore()

      // Sun core (inner glow)
      const innerGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius)
      innerGlow.addColorStop(0, 'rgba(255, 245, 200, 0.95)')
      innerGlow.addColorStop(0.4, 'rgba(255, 220, 100, 0.85)')
      innerGlow.addColorStop(0.7, 'rgba(255, 190, 50, 0.6)')
      innerGlow.addColorStop(1, 'rgba(255, 160, 0, 0)')
      ctx.fillStyle = innerGlow
      ctx.beginPath()
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw a single cloud puff with soft edges
    function drawCloudPuff(
      centerX: number,
      centerY: number,
      radius: number,
      opacity: number
    ) {
      if (!ctx) return
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY - radius * 0.2,
        0,
        centerX,
        centerY,
        radius
      )
      // White/light gray cloud color with soft edges
      gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`)
      gradient.addColorStop(0.4, `rgba(248, 250, 252, ${opacity * 0.9})`)
      gradient.addColorStop(0.7, `rgba(226, 232, 240, ${opacity * 0.6})`)
      gradient.addColorStop(1, `rgba(203, 213, 225, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw a complete cloud
    function drawCloud(cloud: DataCloud, wobbleY: number) {
      if (!ctx) return
      // Sort puffs by Y to draw from back to front
      const sortedPuffs = [...cloud.puffs].sort((a, b) => a.offsetY - b.offsetY)

      // Draw shadow first (subtle)
      sortedPuffs.forEach((puff) => {
        const shadowGradient = ctx.createRadialGradient(
          cloud.x + puff.offsetX,
          cloud.y + wobbleY + puff.offsetY + puff.radius * 0.3,
          0,
          cloud.x + puff.offsetX,
          cloud.y + wobbleY + puff.offsetY + puff.radius * 0.3,
          puff.radius * 0.9
        )
        shadowGradient.addColorStop(0, `rgba(148, 163, 184, ${cloud.opacity * 0.15})`)
        shadowGradient.addColorStop(1, 'rgba(148, 163, 184, 0)')
        ctx.fillStyle = shadowGradient
        ctx.beginPath()
        ctx.arc(
          cloud.x + puff.offsetX,
          cloud.y + wobbleY + puff.offsetY + puff.radius * 0.3,
          puff.radius * 0.9,
          0,
          Math.PI * 2
        )
        ctx.fill()
      })

      // Draw cloud puffs
      sortedPuffs.forEach((puff) => {
        drawCloudPuff(
          cloud.x + puff.offsetX,
          cloud.y + wobbleY + puff.offsetY,
          puff.radius,
          cloud.opacity
        )
      })
    }

    // Draw blue raindrop as elongated shape
    function drawRainDrop(drop: RainDrop) {
      if (!ctx) return
      ctx.save()

      // Create gradient for the raindrop - blue colors
      const gradient = ctx.createLinearGradient(
        drop.x,
        drop.y - drop.length,
        drop.x,
        drop.y
      )
      gradient.addColorStop(0, `rgba(59, 130, 246, 0)`) // blue-500 faded
      gradient.addColorStop(0.3, `rgba(59, 130, 246, ${drop.opacity * 0.6})`)
      gradient.addColorStop(1, `rgba(96, 165, 250, ${drop.opacity})`) // blue-400

      ctx.strokeStyle = gradient
      ctx.lineWidth = drop.thickness
      ctx.lineCap = 'round'

      ctx.beginPath()
      ctx.moveTo(drop.x, drop.y - drop.length)
      ctx.lineTo(drop.x, drop.y)
      ctx.stroke()

      // Add a small glow at the tip
      const glowGradient = ctx.createRadialGradient(
        drop.x,
        drop.y,
        0,
        drop.x,
        drop.y,
        drop.thickness * 2
      )
      glowGradient.addColorStop(0, `rgba(147, 197, 253, ${drop.opacity * 0.5})`) // blue-300
      glowGradient.addColorStop(1, 'rgba(147, 197, 253, 0)')
      ctx.fillStyle = glowGradient
      ctx.beginPath()
      ctx.arc(drop.x, drop.y, drop.thickness * 2, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    let animationId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw clouds
      clouds.forEach((cloud, index) => {
        cloud.x += cloud.speed
        cloud.phase += 0.008

        // Reset position when cloud moves off screen
        const cloudWidth = cloud.baseRadius * 2.5
        if (cloud.x > canvas.width + cloudWidth) {
          cloud.x = -cloudWidth
        }

        // Gentle vertical wobble
        const wobbleY = Math.sin(cloud.phase) * 3

        // Draw sun behind certain clouds (before drawing the cloud)
        if (cloudsWithSun.has(index)) {
          drawSunBehindCloud(cloud.x, cloud.y, cloud.baseRadius, wobbleY)
        }

        drawCloud(cloud, wobbleY)

        // Calculate the actual bottom of the cloud (find the lowest puff)
        const cloudBottom = Math.max(...cloud.puffs.map(p => p.offsetY + p.radius * 0.8))

        // Release rain drops from the actual bottom of the cloud
        // Only rain from clouds without sun
        if (!cloudsWithSun.has(index) && Math.random() < 0.025) {
          const dropX = cloud.x + (Math.random() - 0.5) * cloud.baseRadius * 1.5
          rainDrops.push({
            x: dropX,
            y: cloud.y + wobbleY + cloudBottom, // Start from the actual bottom
            speed: 2 + Math.random() * 2.5,
            opacity: 0.6 + Math.random() * 0.3,
            length: 8 + Math.random() * 12,
            thickness: 1.5 + Math.random() * 1,
          })
        }
      })

      // Update and draw rain drops
      for (let i = rainDrops.length - 1; i >= 0; i--) {
        const drop = rainDrops[i]
        drop.y += drop.speed
        drop.speed += 0.05 // Slight acceleration (gravity)
        drop.opacity -= 0.006

        if (drop.opacity <= 0 || drop.y > canvas.height) {
          rainDrops.splice(i, 1)
          continue
        }

        drawRainDrop(drop)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--cloud-bg)]">
      {/* Animated canvas for data clouds */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 0.8) 100%)',
          zIndex: 2,
        }}
      />

      {/* Navigation */}
      <header className="relative z-20 px-6 py-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <span className="text-2xl font-semibold text-[var(--cloud-text)]">Winly</span>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[var(--cloud-text-muted)] hover:text-[var(--cloud-text)] transition-colors">
              Produkt
            </a>
            <a href="#" className="text-[var(--cloud-text-muted)] hover:text-[var(--cloud-text)] transition-colors">
              Priser
            </a>
            <a href="#" className="text-[var(--cloud-text-muted)] hover:text-[var(--cloud-text)] transition-colors">
              Om oss
            </a>
            <a
              href="#"
              className="px-5 py-2.5 bg-[var(--cloud-blue)] text-white rounded-lg hover:bg-[var(--cloud-blue-deep)] transition-colors"
            >
              Logg inn
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--cloud-text)] leading-tight">
            Norges første værkart for
            <br />
            <span className="text-[var(--cloud-blue)]">anbud og B2B-muligheter</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[var(--cloud-text-muted)] max-w-2xl mx-auto">
            Unngå overraskelser. Se hvor neste mulighet oppstår – før den offentliggjøres.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--cloud-blue)] text-white text-lg font-medium rounded-xl hover:bg-[var(--cloud-blue-deep)] transition-all shadow-lg hover:shadow-xl"
            >
              Se hvordan det fungerer
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--cloud-text)] text-lg font-medium rounded-xl border border-[var(--cloud-border)] hover:border-[var(--cloud-border-strong)] hover:bg-[var(--cloud-bg-alt)] transition-all"
            >
              Prøv gratis demo
            </a>
          </div>
        </div>
      </div>

      {/* Hero Visual Placeholder - Weather map preview */}
      <div className="relative z-10 px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--cloud-border)]">
            {/* Placeholder for animated weather map */}
            <div className="aspect-video bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <WeatherMapPlaceholder />
                <p className="mt-4 text-sm text-[var(--cloud-text-muted)]">
                  Video/animasjon: Dataskyer over Norgeskart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WeatherMapPlaceholder() {
  return (
    <div className="relative w-64 h-48">
      {/* Simplified Norway outline */}
      <svg viewBox="0 0 200 300" className="w-full h-full opacity-30" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M100,10 L120,30 L130,80 L140,120 L135,160 L140,200 L130,240 L100,280 L80,260 L70,220 L60,180 L65,140 L60,100 L70,60 L85,30 Z" />
      </svg>
      {/* Data cloud icons */}
      <div className="absolute top-8 left-12">
        <CloudIcon className="w-12 h-12 text-slate-400 animate-pulse" />
      </div>
      <div className="absolute top-16 right-12">
        <CloudIcon className="w-10 h-10 text-slate-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-16 left-20">
        <CloudIcon className="w-8 h-8 text-slate-400 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      {/* Data drops */}
      <div className="absolute top-24 left-16 w-2 h-2 rounded-full bg-[var(--cloud-orange)] animate-bounce" />
      <div className="absolute top-28 right-16 w-2 h-2 rounded-full bg-[var(--cloud-orange)] animate-bounce" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-20 left-24 w-2 h-2 rounded-full bg-[var(--cloud-orange)] animate-bounce" style={{ animationDelay: '0.6s' }} />
    </div>
  )
}

function CloudIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  )
}
