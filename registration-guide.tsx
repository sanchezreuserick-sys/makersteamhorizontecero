'use client'

import { 
  FileText, 
  CheckCircle2, 
  Mail, 
  BookOpen, 
  Camera, 
  Building2,
  ClipboardList,
  Plane,
  Share2,
  Award
} from 'lucide-react'

const registrationSteps = [
  {
    step: 1,
    icon: Mail,
    title: 'Enviar correo de interés',
    titleEn: 'Send interest email',
    description: 'Correo a makersteamhorizontecero@gmail.com con asunto: "REGISTRO DE INTERÉS DELEGACIÓN HOUSTON 2027 — [Nombre completo]"',
  },
  {
    step: 2,
    icon: FileText,
    title: 'Adjuntar documentación',
    titleEn: 'Attach documentation',
    description: 'Identificación oficial, constancia de adscripción laboral, y carta de intención (máx. una cuartilla).',
  },
  {
    step: 3,
    icon: CheckCircle2,
    title: 'Confirmación de integración',
    titleEn: 'Integration confirmation',
    description: 'Esperar confirmación por parte del Equipo de Coordinación.',
  },
  {
    step: 4,
    icon: BookOpen,
    title: 'Gestión de documentos',
    titleEn: 'Document processing',
    description: 'Iniciar trámite de pasaporte vigente y visa americana B1/B2 con orientación del equipo.',
  },
  {
    step: 5,
    icon: Plane,
    title: 'Consolidación de delegación',
    titleEn: 'Delegation consolidation',
    description: 'Hospedaje grupal, traslados y pasos finales de registro.',
  },
]

const requiredDocuments = [
  {
    icon: BookOpen,
    title: 'Pasaporte Mexicano',
    titleEn: 'Mexican Passport',
    description: 'Vigente (mínimo 6 meses posteriores al 7 de febrero de 2027)',
  },
  {
    icon: FileText,
    title: 'Visa Americana B1/B2',
    titleEn: 'US Visa B1/B2',
    description: 'Vigente o en proceso de trámite',
  },
  {
    icon: Building2,
    title: 'Identificación Oficial',
    titleEn: 'Official ID',
    description: 'INE/IFE o cédula profesional',
  },
  {
    icon: ClipboardList,
    title: 'Constancia Laboral',
    titleEn: 'Employment Certificate',
    description: 'Adscripción o nombramiento vigente',
  },
  {
    icon: FileText,
    title: 'Carta de Intención',
    titleEn: 'Letter of Intent',
    description: 'Máximo una cuartilla, en espanol o inglés',
  },
  {
    icon: Camera,
    title: 'Fotografía Digital',
    titleEn: 'Digital Photo',
    description: 'Reciente, fondo blanco, tipo pasaporte',
  },
]

const commitments = [
  {
    icon: CheckCircle2,
    title: 'Asistencia completa',
    description: 'Participar los tres días del evento (5-7 febrero 2027).',
  },
  {
    icon: Share2,
    title: 'Replicar experiencia',
    description: 'Impartir al menos un taller o experiencia derivada del evento en su institución.',
  },
  {
    icon: FileText,
    title: 'Informe de aprovechamiento',
    description: 'Elaborar informe y plan de implementación curricular al regresar.',
  },
  {
    icon: Share2,
    title: 'Difusión del proyecto',
    description: 'Participar en actividades de difusión en redes sociales y medios institucionales.',
  },
  {
    icon: Award,
    title: 'Representación digna',
    description: 'Representar con profesionalismo al Proyecto Maker STEAM Horizonte Cero y a México.',
  },
]

export function RegistrationGuide() {
  return (
    <section id="registro" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-2xl sm:text-3xl text-foreground mb-2">
            Proceso de Registro
          </h2>
          <p className="text-xs text-muted-foreground/70 mb-3">
            Registration Process
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Sigue estos pasos para formar parte de la Delegación Houston 2027
          </p>
        </div>

        {/* Registration Steps */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="font-medium text-foreground mb-6 text-center">
            Pasos para Registro de Interés / Steps to Register Interest
          </h3>
          <div className="space-y-4">
            {registrationSteps.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 glass-card rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className="w-4 h-4 text-primary" />
                    <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mb-1">{item.titleEn}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6 text-center">
            <a
              href="mailto:makersteamhorizontecero@gmail.com?subject=REGISTRO%20DE%20INTER%C3%89S%20DELEGACI%C3%93N%20HOUSTON%202027%20%E2%80%94%20%5BNombre%20completo%5D"
              className="ios-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90"
            >
              <Mail className="w-4 h-4" />
              Iniciar Registro por Correo
            </a>
          </div>
        </div>

        {/* Required Documents */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="font-medium text-foreground mb-6 text-center">
            Documentación Requerida / Required Documentation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {requiredDocuments.map((doc, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <doc.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{doc.title}</h4>
                    <p className="text-xs text-muted-foreground/70">{doc.titleEn}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{doc.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 glass-card rounded-xl p-4 border-l-4 border-primary">
            <p className="text-xs text-muted-foreground italic">
              <strong>Altamente recomendable:</strong> Se sugiere gestionar con la persona responsable del proyecto la documentación de los trámites migratorios, vuelos y hospedaje, con el fin de evitar contratiempos; esta coordinación no es obligatoria.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1 italic">
              <strong>Highly recommended:</strong> It is suggested to coordinate with the project manager regarding immigration documentation, flights, and accommodation to avoid complications; this coordination is not mandatory.
            </p>
          </div>
        </div>

        {/* Participant Commitments */}
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h3 className="font-medium text-foreground mb-6 text-center">
            Compromisos del Participante / Participant Commitments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 text-secondary" />
                  <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
