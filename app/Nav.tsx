'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LINKS: [string, string][] = [
  ['Shop',      '/shop'],
  ['Custom',    '/custom'],
  ['About',     '/#about'],
  ['Process',   '/#process'],
  ['Instagram', 'https://instagram.com/sillygoosepottery'],
  ['Contact',   '/#contact'],
]

interface NavProps {
  active?: string          // 'Shop' | 'Custom' etc — highlights active link
  ctaLabel?: string        // button text
  ctaHref?: string         // button href
  ctaExternal?: boolean    // open in new tab?
}

export default function Nav({
  active,
  ctaLabel = 'Shop Now',
  ctaHref  = '/shop',
  ctaExternal = false,
}: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function close() { setMenuOpen(false) }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 3rem',
        background: 'rgba(240,237,230,0.93)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(184,92,82,0.15)',
      }}>
        <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <Image src="/logo.jpg" alt="Silly Goose Pottery" width={88} height={88} style={{ objectFit: 'contain', borderRadius: '2px' }} />
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>
            Silly Goose Pottery
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {LINKS.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                target={label === 'Instagram' ? '_blank' : undefined}
                rel={label === 'Instagram' ? 'noopener noreferrer' : undefined}
                style={{
                  fontSize: '0.73rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: label === active ? 'var(--rose)' : 'var(--ink)',
                  opacity: label === active ? 1 : 0.55,
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Desktop CTA */}
          <div className="nav-cta-wrap">
            {ctaExternal ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                <button className="btn-rose">{ctaLabel}</button>
              </a>
            ) : (
              <Link href={ctaHref}><button className="btn-rose">{ctaLabel}</button></Link>
            )}
          </div>

          {/* Hamburger */}
          <button
            className={`sgp-burger${menuOpen ? ' sgp-burger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div onClick={close} style={{
          position: 'fixed', inset: 0, zIndex: 210,
          background: 'rgba(46,31,28,0.3)', backdropFilter: 'blur(2px)',
        }} />
      )}

      {/* Drawer */}
      <div className={`sgp-drawer${menuOpen ? ' sgp-drawer--open' : ''}`}>
        {LINKS.map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={label === 'Instagram' ? '_blank' : undefined}
            rel={label === 'Instagram' ? 'noopener noreferrer' : undefined}
            onClick={close}
            style={{
              display: 'block',
              fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: label === active ? 'var(--rose)' : 'var(--ink)',
              padding: '0.9rem 0',
              borderBottom: '1px solid rgba(184,92,82,0.12)',
              textDecoration: 'none',
            }}
          >
            {label}
          </a>
        ))}
        <div style={{ marginTop: '1.5rem' }}>
          {ctaExternal ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" onClick={close}>
              <button className="btn-rose" style={{ width: '100%' }}>{ctaLabel}</button>
            </a>
          ) : (
            <Link href={ctaHref} onClick={close}>
              <button className="btn-rose" style={{ width: '100%' }}>{ctaLabel}</button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
