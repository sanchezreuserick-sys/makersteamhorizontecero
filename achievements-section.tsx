'use client'

import { Award, Globe, Medal, Building2, ExternalLink } from 'lucide-react'

const achievements = [
  {
    year: '2026',
    title: 'Space Center Houston (NASA SEEC)',
    description: 'Ponente Tallerista - "Péndulo Gravitatorio: el juego de los dioses en el cosmos"',
    descriptionEn: 'Workshop Presenter at Space Center Houston',
    icon: Globe,
    color: 'primary',
    links: [
      {
        label: 'Nueva Imagen de Hidalgo',
        url: 'https://www.imagendehidalgo.com.mx/educadora-originaria-de-tula-imparte-taller-en-el-space-center-de-houston/',
      },
      {
        label: 'El Sol de Hidalgo',
        url: 'https://www.elsoldehidalgo.com.mx/local/maestros-de-tula-impartiran-un-taller-a-docentes-a-nivel-latinoamerica-de-habla-hispana-en-la-nasa',
      },
    ],
  },
  {
    year: '2026',
    title: 'Oro en Tailandia - World Youth STEM',
    description: 'Medalla de Oro en Bangkok con el proyecto "La Espiral Dorada de Pitágoras"',
    descriptionEn: 'Gold Medal in Bangkok - "The Golden Spiral of Pythagoras"',
    icon: Medal,
    color: 'secondary',
    links: [
      {
        label: 'El Sol de Hidalgo',
        url: 'https://www.elsoldehidalgo.com.mx/local/tula-estudiantes-ganan-medalla-de-oro-en-tailandia',
      },
      {
        label: 'Nueva Imagen de Hidalgo',
        url: 'https://www.imagendehidalgo.com.mx/obtuvo-medalla-de-oro-en-competencia-internacional-en-bangkok/',
      },
    ],
  },
  {
    year: '2025',
    title: 'Plata en Corea del Sur - KSEF/KUSEF',
    description: 'Medalla de Plata por el proyecto "Smartfarming-Home"',
    descriptionEn: 'Silver Medal - "Smartfarming-Home" Project',
    icon: Medal,
    color: 'accent',
  },
  {
    year: '2025',
    title: 'Mérito Científico NASA SEEC',
    description: 'Reconocimiento por soluciones sostenibles con mirada espacial',
    descriptionEn: 'Recognition for sustainable solutions with space perspective',
    icon: Award,
    color: 'primary',
  },
  {
    year: '2024',
    title: 'Plata en Londres - IGO',
    description: 'Medalla de Plata en International Greenwich Olympiad con "Anglo Bot"',
    descriptionEn: 'Silver Medal at International Greenwich Olympiad - "Anglo Bot"',
    icon: Medal,
    color: 'secondary',
    links: [
      {
        label: 'La Jornada Hidalgo',
        url: 'https://ljz.mx/hidalgo/',
      },
    ],
  },
  {
    year: '2024',
    title: 'Reconocimiento Senado de la República',
    description: 'Por el impulso a la ciencia y formación tecnológica en México',
    descriptionEn: 'Recognition for promoting science and technology education in Mexico',
    icon: Building2,
    color: 'primary',
    links: [
      {
        label: 'Nueva Imagen de Hidalgo',
        url: 'https://www.imagendehidalgo.com.mx/docentes-hidalguenses-que-impulsan-la-ciencia-fueron-reconocidos-en-el-senado/',
      },
    ],
  },
  {
    year: '2024',
    title: 'Mérito Científico Municipal',
    description: 'Otorgado por el municipio de Tula de Allende',
    descriptionEn: 'Awarded by the municipality of Tula de Allende',
    icon: Award,
    color: 'accent',
  },
]

export function AchievementsSection() {
  return (
    <section id="logros" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-2xl sm:text-3xl text-foreground mb-2">
            Trayectoria y Logros
          </h2>
          <p className="text-xs text-muted-foreground/70 mb-3">
            Track Record & Achievements
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Proyectos liderados por Dra. Erika Corina Sánchez Pastrana y el equipo Maker STEAM
          </p>
        </div>

        {/* Director Profile Card */}
        <div className="glass rounded-2xl p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif italic text-xl text-foreground mb-1">
                Dra. Erika Corina Sánchez Pastrana
              </h3>
              <p className="text-sm text-primary mb-3">
                Directora Académica - Titular del Proyecto
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                <p>Doctora en Administración de Negocios (TecMilenio)</p>
                <p>Especialidad en Calidad y Productividad</p>
                <p>Licenciada en Ingeniería Industrial y de Sistemas</p>
                <p>Licenciada Normalista - Especialidad Matemáticas</p>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-3">
                Más de 30 años en docencia, experta en metodologías activas (Design Thinking, ABP) y coordinación de proyectos aeroespaciales.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-5 ios-button hover:scale-[1.005]"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    achievement.color === 'primary'
                      ? 'bg-primary/10'
                      : achievement.color === 'secondary'
                      ? 'bg-secondary/10'
                      : 'bg-accent/20'
                  }`}
                >
                  <achievement.icon
                    className={`w-6 h-6 ${
                      achievement.color === 'primary'
                        ? 'text-primary'
                        : achievement.color === 'secondary'
                        ? 'text-secondary'
                        : 'text-accent-foreground'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-medium text-foreground text-sm">
                      {achievement.title}
                    </h4>
                    <span className="text-xs text-primary font-medium shrink-0">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mb-2">
                    {achievement.descriptionEn}
                  </p>
                  {achievement.links && achievement.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {achievement.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Team */}
        <div className="mt-10 glass-card rounded-2xl p-6">
          <h3 className="font-serif italic text-lg text-foreground mb-4 text-center">
            Equipo Presentador del Taller &ldquo;Péndulo Gravitatorio&rdquo;
          </h3>
          <p className="text-xs text-muted-foreground/70 text-center mb-4">
            Workshop Team - &ldquo;Gravitational Pendulum: The Game of the Gods in the Cosmos&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Dra. Erika Corina Sánchez Pastrana',
              'Lic. Ignacio Licona Jiménez',
              'Lic. Erick Arturo Sánchez Reus',
              'Lic. Claudia Elizabeth Rivera Jacinto',
              'Mtro. César Augusto Santamaría Vergara',
              'Ing. Roberto García Muñiz',
              'Dra. Karla Lorena Montoya Cisneros',
            ].map((name, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-primary/10 text-xs text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
