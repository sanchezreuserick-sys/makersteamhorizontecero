import { Rocket, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 ios-button">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            Delegación Académica 2027
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-balance">
          Maker STEAM{' '}
          <span className="text-primary">Horizonte Cero</span>
        </h1>

        {/* Georgia Subtitle */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 text-pretty leading-relaxed">
          Innovación Educativa y Excelencia Académica
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#delegacion"
            className="ios-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium text-sm hover:opacity-90"
          >
            <Rocket className="w-4 h-4" />
            Pre-Registro 2027
          </a>
          <a
            href="#proyectos"
            className="ios-button inline-flex items-center gap-2 glass-card text-foreground px-8 py-3 rounded-xl font-medium text-sm hover:bg-accent/30"
          >
            Conocer Proyectos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-foreground">2027</div>
            <div className="text-xs text-muted-foreground mt-1">Houston, TX</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-foreground">SEEC</div>
            <div className="text-xs text-muted-foreground mt-1">Conference</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-foreground">STEAM</div>
            <div className="text-xs text-muted-foreground mt-1">Education</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
