import Image from 'next/image'

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="glass rounded-2xl p-8 text-center mb-8">
          <Image
            src="/logo.png"
            alt="Maker STEAM Horizonte Cero"
            width={48}
            height={48}
            className="mx-auto rounded-xl mb-4"
          />
          <p className="font-serif italic text-lg text-foreground mb-2">
            Dra. Erika Corina Sánchez Pastrana
          </p>
          <p className="text-sm text-muted-foreground">
            Directora Académica &middot; Titular del Proyecto
          </p>
          <p className="text-xs text-muted-foreground/70 mt-0.5">
            Academic Director &middot; Project Lead
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Maker STEAM Horizonte Cero. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-foreground ios-transition">
              Inicio
            </a>
            <a href="#proyectos" className="hover:text-foreground ios-transition">
              Proyectos
            </a>
            <a href="#contacto" className="hover:text-foreground ios-transition">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
