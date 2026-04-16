'use client'

import { Phone, Mail, Globe, Facebook, Instagram } from 'lucide-react'

const coreTeam = [
  {
    name: 'Dra. Erika Corina Sánchez Pastrana',
    role: 'Dirección Académica',
    roleEn: 'Academic Director',
    subtitle: 'Titular del Proyecto / Project Lead',
    whatsapp: '527731286570',
    whatsappDisplay: '+52 773 128 6570',
    email: 'erika.sanchez@anglocastellano.edu.mx',
  },
  {
    name: 'Lic. Erick Arturo Sánchez Reus',
    role: 'Gestión Logística y Administrativa',
    roleEn: 'Logistics & Administration',
    whatsapp: '528147062703',
    whatsappDisplay: '+52 814 706 2703',
    email: 'admin@makersteamhorizontecero.com',
  },
  {
    name: 'Dra. Karla Lorena Montoya Cisneros',
    role: 'Capacitación Educativa 2027',
    roleEn: 'Educational Training' ,
  },
  {
    name: 'Lic.Claudia Elizabeth Rivera Jacinto',
    role: 'Indumentaria Corporativa | Identidad y Presencia',
    roleEn: 'Corporate Apparel | Identity & Presence',
  },
]

const academicCollaborators = [
  {
    name: 'Mtro. César Augusto Santamaría Vergara',
    role: 'Vinculación UNAM',
    whatsapp: '5215505210',
    whatsappDisplay: '+52 55 1505 6210',
  },
  {
    name: 'Dra. Nashielly Yarzábal Coronel',
    role: 'Vinculación IPN',
    whatsapp: '5238942914',
    whatsappDisplay: '+52 55 3894 2914',
    email: 'nasyara@hotmail.com',
  },
  {
    name: 'Lic. Ignacio Licona Jiménez',
    role: 'Colaborador Académico',
    roleEn: 'Academic Collaborator',
    whatsapp: '5215555043373',
    whatsappDisplay: '+52 55 5504 3373',
    email: 'ignacio.licona@anglocastellano.edu.mx',
  },
  {
    name: 'Ing. Roberto García Muñiz',
    role: 'Colaborador Académico',
    roleEn: 'Academic Collaborator',
    whatsapp: '528442956602',
    whatsappDisplay: '+52 844 295 6602',
    email: 'rmuniz@aeronavestsm.com',
  },
]

const regionalCoordinators = [
  {
    name: 'Dra. Belén Aguilar Balderas',
    region: 'Universidad Tecnológica (UT)',
    whatsapp: '527731292577',
    whatsappDisplay: '+52 773 129 2577',
    email: 'baguilarbalderas@gmail.com',
  },
  {
    name: 'Ing. Jorge Luis Herrera Sida',
    region: 'Querétaro',
    whatsapp: '526564318901',
    whatsappDisplay: '+52 656 431 8901',
    email: '03.herrera.jorge@gmail.com',
  },
  {
    name: 'Dra. Verónica Elizabeth Sánchez Flores',
    region: 'Jalisco',
    whatsapp: '529511951743',
    whatsappDisplay: '+52 951 195 1743',
    email: 'coordinaciongdl27@gmail.com',
  },
  {
    name: 'Dra. Natalia Isabel Martínez Contreras',
    region: 'San Luis Potosí',
    whatsapp: '524831198505',
    whatsappDisplay: '+52 483 119 8505',
    email: 'psic.naisamc.ee@gmail.com',
  },
  {
    name: 'Mtra. Ana Cristina Ruiz Sánchez',
    region: 'Nuevo León',
    whatsapp: '528135686874',
    whatsappDisplay: '+52 81 3568 6874',
    email: 'crissolsanchez@gmail.com',
  },
    {
    name: 'Dr, Eli Husim Ruíz Cruz',
    region: 'Querétaro',
    whatsapp: '529511951743',
    email: 'jalapenhio@',
  },  {
    name: 'Mtra. Eva Consuelo Moralia López',
    region: 'Sinaloa',
    whatsapp: '524422704132',
  },
]

export function ContactDirectory() {
  return (
    <section id="directorio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-2xl sm:text-3xl text-foreground mb-2">
            Directorio de Contacto
          </h2>
          <p className="text-xs text-muted-foreground/70 mb-3">
            Contact Directory
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Canales oficiales de comunicación para la Delegación Houston 2027
          </p>
        </div>

        {/* Official Digital Channels */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <h3 className="font-medium text-foreground mb-4 text-center">
            Canales Digitales Oficiales / Official Digital Channels
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://makersteam.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 ios-button bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm"
            >
              <Globe className="w-4 h-4" />
             makersteamhorizontecero.com 
            </a>
            <a
              href="mailto:admin@makersteamhorizontecero.com"
              className="inline-flex items-center gap-2 ios-button bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm"
            >
              <Mail className="w-4 h-4" />
              Correo Institucional
            </a>
            <a
              href="https://www.facebook.com/share/1LMWeD1qvN/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 ios-button bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </a>
            <a
              href="https://instagram.com/makersteamhorizontecero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 ios-button bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm"
            >
              <Instagram className="w-4 h-4" />
              @makersteamhorizontecero
            </a>
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-8">
          <h3 className="font-serif italic text-lg text-foreground mb-4 text-center">
            Equipo Central / Core Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 ios-button hover:scale-[1.01]"
              >
                <h4 className="font-medium text-foreground text-sm mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-primary mb-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground/70 mb-2">
                  {member.roleEn}
                  {member.subtitle && ` · ${member.subtitle}`}
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground ios-transition"
                  >
                    <Phone className="w-3 h-3" />
                    {member.whatsappDisplay}
                  </a>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground ios-transition"
                    >
                      <Mail className="w-3 h-3" />
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Collaborators */}
        <div className="mb-8">
          <h3 className="font-serif italic text-lg text-foreground mb-4 text-center">
            Colaboración Académica / Academic Collaboration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academicCollaborators.map((member, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 ios-button hover:scale-[1.01]"
              >
                <h4 className="font-medium text-foreground text-sm mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-primary mb-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground/70 mb-2">
                  {member.roleEn}
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground ios-transition"
                  >
                    <Phone className="w-3 h-3" />
                    {member.whatsappDisplay}
                  </a>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground ios-transition"
                    >
                      <Mail className="w-3 h-3" />
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Coordinators */}
        <div>
          <h3 className="font-serif italic text-lg text-foreground mb-4 text-center">
            Coordinaciones Regionales / Regional Coordinators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionalCoordinators.map((coord, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 ios-button hover:scale-[1.01]"
              >
                <p className="text-xs text-primary font-medium mb-1">
                  {coord.region}
                </p>
                <h4 className="font-medium text-foreground text-sm mb-2">
                  {coord.name}
                </h4>
                <div className="flex flex-col gap-1">
                  <a
                    href={`https://wa.me/${coord.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground ios-transition"
                  >
                    <Phone className="w-3 h-3" />
                    {coord.whatsappDisplay}
                  </a>
                  {coord.email && (
                    <a
                      href={`mailto:${coord.email}`}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground ios-transition truncate"
                    >
                      <Mail className="w-3 h-3 shrink-0" />
                      <span className="truncate">{coord.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
