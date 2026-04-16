'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'SEEC 2027' },
  { href: '#registro', label: 'Registro' },
  { href: '#logros', label: 'Logros' },
  { href: '#uniformes', label: 'Uniformes' },
  { href: '#directorio', label: 'Directorio' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ios-transition ${
        isScrolled ? 'glass py-3' : 'py-4'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 ios-button">
          <Image
            src="/logo.png"
            alt="Maker STEAM Horizonte Cero"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <span className="hidden sm:block text-sm font-medium text-foreground">
            Maker STEAM
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="ios-button px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/20"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden ios-button p-2 rounded-lg hover:bg-accent/20"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden ios-transition">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/20 ios-transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
