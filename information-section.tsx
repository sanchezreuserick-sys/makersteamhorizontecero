import { Target, Award, Plane, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Misión',
    description:
      'Desarrollo de competencias STEAM mediante protocolos de alta dirección y aeronáutica.',
  },
  {
    icon: Plane,
    title: 'Red de Contactos',
    description:
      'Integración de principios aeronáuticos en el aprendizaje STEAM para una experiencia educativa única.',
  },
  {
    icon: GraduationCap,
    title: 'Alta Dirección',
    description:
      'Protocolos de liderazgo y gestión estratégica aplicados al ámbito educativo.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description:
      'Compromiso con los más altos estándares de calidad en la formación académica.',
  },
]

export function InformationSection() {
  return (
    <section id="informacion" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-2xl sm:text-3xl text-foreground mb-4">
            Nuestra Visión
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Formando líderes del mañana a través de la innovación educativa
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 ios-button hover:scale-[1.02] cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Card */}
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="font-serif italic text-xl text-foreground mb-2">
            Liderazgo Académico / Academic Leadership
          </h3>
          <p className="text-base font-medium text-foreground">
            Dra. Erika Corina Sánchez Pastrana
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Directora Académica &middot; Titular del Proyecto
          </p>
          <p className="text-xs text-muted-foreground/70 mt-0.5">
            Academic Director &middot; Project Lead
          </p>
        </div>
      </div>
    </section>
  )
}
