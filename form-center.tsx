'use client'

import { useState, type FormEvent } from 'react'
import { Send, FileText, Info, Handshake, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormData {
  nombre: string
  email: string
  institucion: string
  motivo: string
}

interface FormErrors {
  nombre?: string
  email?: string
  institucion?: string
  motivo?: string
}

const quickLinks = [
  {
    icon: FileText,
    label: 'Propuesta de Proyecto',
    subject: 'Propuesta de Proyecto',
    cc: 'academic',
  },
  {
    icon: Info,
    label: 'Más Información',
    subject: 'Solicitud de Información',
    cc: 'admin',
  },
  {
    icon: Handshake,
    label: 'Patrocinadores',
    subject: 'Propuesta de Patrocinio',
    cc: 'alliances',
  },
]

export function FormCenter() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    institucion: '',
    motivo: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'nombre':
        if (!value.trim()) return 'El nombre es requerido'
        if (value.trim().length < 3) return 'Mínimo 3 caracteres'
        return undefined
      case 'email':
        if (!value.trim()) return 'El email es requerido'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email inválido'
        return undefined
      case 'institucion':
        if (!value.trim()) return 'La institución es requerida'
        return undefined
      case 'motivo':
        if (!value.trim()) return 'El motivo es requerido'
        if (value.trim().length < 10) return 'Mínimo 10 caracteres'
        return undefined
      default:
        return undefined
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: FormErrors = {}
    let hasErrors = false

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) {
        newErrors[key as keyof FormErrors] = error
        hasErrors = true
      }
    })

    setErrors(newErrors)
    setTouched({ nombre: true, email: true, institucion: true, motivo: true })

    if (!hasErrors) {
      const subject = encodeURIComponent('Pre-Registro Delegación 2027')
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nInstitución: ${formData.institucion}\n\nMotivo:\n${formData.motivo}`
      )
      window.location.href = `mailto:makersteamhorizontecero@gmail.com?subject=${subject}&body=${body}`
    }
  }

  const getFieldStatus = (name: string) => {
    if (!touched[name]) return 'default'
    if (errors[name as keyof FormErrors]) return 'error'
    return 'valid'
  }

  return (
    <section id="delegacion" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-2xl sm:text-3xl text-foreground mb-4">
            Centro de Gestión
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Formularios y enlaces rápidos para la Delegación 2027
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Registration Form */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Pre-Registro Delegación 2027
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre Completo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ios-transition ${
                      getFieldStatus('nombre') === 'error'
                        ? 'ring-2 ring-destructive/50'
                        : getFieldStatus('nombre') === 'valid'
                          ? 'ring-2 ring-green-500/50'
                          : 'focus:ring-primary/50'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {getFieldStatus('nombre') === 'valid' && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                  )}
                  {getFieldStatus('nombre') === 'error' && (
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                  )}
                </div>
                {errors.nombre && touched.nombre && (
                  <p className="mt-1 text-xs text-destructive">{errors.nombre}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Correo Electrónico
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ios-transition ${
                      getFieldStatus('email') === 'error'
                        ? 'ring-2 ring-destructive/50'
                        : getFieldStatus('email') === 'valid'
                          ? 'ring-2 ring-green-500/50'
                          : 'focus:ring-primary/50'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {getFieldStatus('email') === 'valid' && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                  )}
                  {getFieldStatus('email') === 'error' && (
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                  )}
                </div>
                {errors.email && touched.email && (
                  <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Institution Field */}
              <div>
                <label
                  htmlFor="institucion"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Institución
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="institucion"
                    name="institucion"
                    value={formData.institucion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ios-transition ${
                      getFieldStatus('institucion') === 'error'
                        ? 'ring-2 ring-destructive/50'
                        : getFieldStatus('institucion') === 'valid'
                          ? 'ring-2 ring-green-500/50'
                          : 'focus:ring-primary/50'
                    }`}
                    placeholder="Nombre de tu institución"
                  />
                  {getFieldStatus('institucion') === 'valid' && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                  )}
                  {getFieldStatus('institucion') === 'error' && (
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                  )}
                </div>
                {errors.institucion && touched.institucion && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.institucion}
                  </p>
                )}
              </div>

              {/* Motive Field */}
              <div>
                <label
                  htmlFor="motivo"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Motivo de Interés
                </label>
                <div className="relative">
                  <textarea
                    id="motivo"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    className={`w-full glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ios-transition resize-none ${
                      getFieldStatus('motivo') === 'error'
                        ? 'ring-2 ring-destructive/50'
                        : getFieldStatus('motivo') === 'valid'
                          ? 'ring-2 ring-green-500/50'
                          : 'focus:ring-primary/50'
                    }`}
                    placeholder="¿Por qué te interesa formar parte de la delegación?"
                  />
                </div>
                {errors.motivo && touched.motivo && (
                  <p className="mt-1 text-xs text-destructive">{errors.motivo}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full ios-button bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Pre-Registro
              </button>
            </form>
          </div>

          {/* Quick Access */}
          <div className="space-y-6" id="contacto">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Acceso Rápido
              </h3>

              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={`mailto:makersteamhorizontecero@gmail.com?subject=${encodeURIComponent(link.subject)}&cc=${link.cc}@makersteamhorizontecero.org`}
                    className="flex items-center gap-4 glass-card rounded-xl p-4 ios-button hover:scale-[1.01] group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 ios-transition">
                      <link.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary ios-transition">
                        {link.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        CC: {link.cc.charAt(0).toUpperCase() + link.cc.slice(1)}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Contacto Directo
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                makersteamhorizontecero@gmail.com
              </p>
              <p className="text-xs text-muted-foreground">
                Tiempo de respuesta: 24-48 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
