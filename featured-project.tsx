import { Rocket, MapPin, Calendar, Users, GraduationCap, Globe2, Briefcase } from 'lucide-react'

export function FeaturedProject() {
  const objectives = [
    {
      title: 'Redes de Colaboración',
      titleEn: 'Collaboration Networks',
      description: 'Integración con educadores de América Latina, Norteamérica y otras regiones.',
    },
    {
      title: 'Orientación Previa',
      titleEn: 'Pre-Event Guidance',
      description: 'Preparación académica para eventos y actividades en escenarios internacionales.',
    },
    {
      title: 'Logística Grupal',
      titleEn: 'Group Logistics',
      description: 'Gestión de viaje con base en la experiencia operativa de SEEC 2026.',
    },
    {
      title: 'Proyección Internacional',
      titleEn: 'International Projection',
      description: 'Fortalecer la identidad y presencia de México en el ámbito educativo global.',
    },
  ]

  const participantProfiles = [
    'Docentes frente a grupo',
    'Directores y subdirectores',
    'Coordinaciones académicas',
    'Personal administrativo educativo',
    'Colaboradores del Proyecto',
  ]

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-2xl sm:text-3xl text-foreground mb-2">
            Programa de Acompañamiento Académico
          </h2>
          <p className="text-xs text-muted-foreground/70 mb-3">
            Academic Accompaniment Program
          </p>
        </div>

        {/* Main Project Card */}
        <div className="glass rounded-3xl overflow-hidden mb-8">
          <div className="p-8 sm:p-12">
            {/* Project Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                SEEC 2027
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
              Space Exploration Educators Conference
            </h3>

            {/* Project Subtitle */}
            <p className="font-serif italic text-lg sm:text-xl text-muted-foreground mb-8">
              Una experiencia transformadora en educación espacial
            </p>

            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Fechas</p>
                  <p className="text-sm font-medium text-foreground">5-7 febrero 2027</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Sede</p>
                  <p className="text-sm font-medium text-foreground">Space Center Houston</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Modalidad</p>
                  <p className="text-sm font-medium text-foreground">Presencial &middot; Bilingue</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Dirigido a</p>
                  <p className="text-sm font-medium text-foreground">Educadores STEAM</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h4 className="font-medium text-foreground mb-3">Objetivo General</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Acompanar a docentes, directivos y personal administrativo en su proceso de integración 
                a la Delegación Houston 2027, ofreciendo mentoría académica, soporte logístico y vinculación 
                internacional, con base en la experiencia del equipo participante en SEEC 2026.
              </p>
            </div>

            {/* Objectives Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {objectives.map((obj, index) => (
                <div key={index} className="glass-card rounded-xl p-4">
                  <h5 className="font-medium text-foreground text-sm mb-1">{obj.title}</h5>
                  <p className="text-xs text-muted-foreground/70 mb-2">{obj.titleEn}</p>
                  <p className="text-xs text-muted-foreground">{obj.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#registro"
                className="ios-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90"
              >
                <GraduationCap className="w-4 h-4" />
                Registrar Interés
              </a>
              <a
                href="#directorio"
                className="ios-button inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-xl font-medium text-sm hover:bg-secondary/20"
              >
                <Briefcase className="w-4 h-4" />
                Contactar Equipo
              </a>
            </div>
          </div>
        </div>

        {/* Participant Profile */}
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h4 className="font-serif italic text-lg text-foreground mb-1">
              Perfil del Participante
            </h4>
            <p className="text-xs text-muted-foreground/70">Participant Profile</p>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Se valorará especialmente el interés en educación STEAM, innovación pedagógica, 
            ensenanza interdisciplinaria y trabajo por proyectos.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {participantProfiles.map((profile, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium"
              >
                {profile}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
