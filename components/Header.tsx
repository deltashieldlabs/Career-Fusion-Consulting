'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ContactForm } from '@/components/ContactForm'
import { assetPath } from '@/lib/assetPath'
import { routePath } from '@/lib/routePath'

const navItems = [
  { label: 'Home', href: '#home', section: '#home' },
  { label: 'Services', href: '#services', section: '#services' },
  { label: 'Expertise', href: '#industry-expertise', section: '#industry-expertise' },
  { label: 'Contact', href: '#contact', section: '#contact' },
]

export function Header() {
  const pathname = usePathname()
  const [hash, setHash] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const isActive = (href: string, section: string) => {
    const base = (process.env.NEXT_PUBLIC_BASE_PATH_DEPLOY?.trim() || '')
    const pathWithoutBase = base && pathname?.startsWith(base) ? pathname.slice(base.length) || '/' : pathname

    if (pathWithoutBase !== '/') return false
    if (section === '#home') {
      return hash === '' || hash === '#home'
    }
    return hash === section
  }

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return
    event.preventDefault()

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
    const base = '/Career-Fusion-Consulting'
    const pathWithoutBase = currentPath.startsWith(base) ? currentPath.slice(base.length) || '/' : currentPath

    if (pathWithoutBase !== '/') {
      // On a sub-page: navigate to homepage with the anchor
      const detectedBase = currentPath.startsWith(base) ? base : ''
      window.location.href = `${detectedBase}/${href}`
      return
    }

    // On homepage: scroll to the section directly — reliable across all environments
    const sectionId = href.slice(1)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', href)
    setHash(href)
  }

  return (
    <>
      <header className="bg-white/95 border border-[#00A4CC] shadow-md backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-0">
          <nav className="flex items-center justify-between h-24 pl-0 pr-4 sm:pr-6 lg:pl-0 lg:pr-8">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img
              src={assetPath('images/career-fusion-logo.png')}
              alt="Career Fusion Consulting"
              className="h-28 md:h-32 w-auto max-w-[260px] object-contain filter brightness-90 contrast-110 saturate-110"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={routePath(item.href)}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`inline-flex items-center justify-center min-w-[130px] px-6 py-3 text-sm font-semibold uppercase rounded-none transition ${
                  isActive(item.href, item.section)
                    ? 'bg-[#00A4CC] text-white shadow-sm ring-1 ring-[#00A4CC]'
                    : 'text-slate-700 hover:text-white hover:bg-[#00A4CC]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative group">
              <button className="inline-flex items-center gap-1 min-w-[130px] justify-center rounded-none px-6 py-3 text-sm font-semibold uppercase text-slate-700 hover:text-white hover:bg-[#00A4CC] transition">
                About Us
                <span className="text-[10px] leading-none">▾</span>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-3 w-52 rounded-none border border-[#00A4CC]/30 bg-white shadow-lg py-2">
                <Link href={routePath('#about')} onClick={(e) => handleNavClick(e, '#about')} className="block rounded-none px-4 py-3 text-sm font-semibold uppercase text-slate-700 hover:bg-[#00A4CC] hover:text-white transition">
                  About Career Fusion
                </Link>
                <Link href="/our-leadership" className="block rounded-none px-4 py-3 text-sm font-semibold uppercase text-slate-700 hover:bg-[#00A4CC] hover:text-white transition">
                  Our Leadership
                </Link>
                <Link href={routePath('#testimonials')} onClick={(e) => handleNavClick(e, '#testimonials')} className="block rounded-none px-4 py-3 text-sm font-semibold uppercase text-slate-700 hover:bg-[#00A4CC] hover:text-white transition">
                  Partner Testimonials
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00A4CC] hover:bg-[#0091B3] text-white px-6 py-3 rounded-none font-semibold text-sm transition-colors inline-flex items-center justify-center"
            >
              Get in Touch
            </button>
          </div>

          <button
            className="md:hidden text-slate-700 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={routePath(item.href)}
              onClick={(event) => handleNavClick(event, item.href)}
              className={`block rounded-none px-4 py-3 text-slate-700 hover:text-white hover:bg-[#00A4CC] font-medium transition ${
                isActive(item.href, item.section) ? 'bg-[#00A4CC] text-white' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-slate-100 pt-3">
            <div className="text-slate-900 font-semibold mb-2">About Us</div>
            <Link href={routePath('#about')} onClick={(e) => handleNavClick(e, '#about')} className="block rounded-none px-4 py-3 text-sm font-semibold text-slate-700 border border-transparent hover:text-white hover:bg-[#00A4CC] hover:border-[#00A4CC] transition">
              About Career Fusion
            </Link>
            <Link href="/our-leadership" className="block rounded-none px-4 py-3 text-sm font-semibold text-slate-700 border border-transparent hover:text-white hover:bg-[#00A4CC] hover:border-[#00A4CC] transition">
              Our Leadership
            </Link>
            <Link href={routePath('#testimonials')} onClick={(e) => handleNavClick(e, '#testimonials')} className="block rounded-none px-4 py-3 text-sm font-semibold text-slate-700 border border-transparent hover:text-white hover:bg-[#00A4CC] hover:border-[#00A4CC] transition">
              Partner Testimonials
            </Link>
          </div>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              setIsModalOpen(true)
            }}
            className="w-full bg-[#00A4CC] hover:bg-[#0091B3] text-white py-3 rounded-none font-semibold transition-colors"
          >
            Get in Touch
          </button>
        </div>
      )}

      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/70 p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-sm uppercase font-semibold tracking-[0.2em] text-[#00A4CC]">Contact Us</p>
                <h3 className="text-2xl font-bold text-[#003366]">Send us a message</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-500 hover:text-slate-900 text-3xl leading-none"
                aria-label="Close contact modal"
              >
                ×
              </button>
            </div>
            <div className="px-4 py-3">
              <ContactForm onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
