import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Nav'

export const metadata: Metadata = {
  title: 'About — Silly Goose Pottery · Denver, CO',
  description: 'Silly Goose Pottery is a one-woman ceramics studio in Denver, Colorado. Handthrown, wheel-thrown pottery made slowly and with intention — plus Goose, the studio dog.',
  openGraph: {
    title: 'About Silly Goose Pottery | Handthrown Ceramics · Denver, CO',
    description: 'One woman, a wheel, and a whole lot of clay. The story behind Silly Goose Pottery, made by hand in Denver, CO.',
    url: 'https://sillygoosepottery.com/about',
    images: [{ url: '/about1.jpg', width: 900, height: 675, alt: 'Silly Goose Pottery studio' }],
  },
  alternates: { canonical: 'https://sillygoosepottery.com/about' },
}

export default function About() {
  return (
    <main style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      <Nav active="About" ctaLabel="Shop Now" ctaHref="/shop" />

      {/* HERO */}
      <section style={{ paddingTop: '140px', paddingBottom: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '60vh' }} className="about-page-hero">
          <div style={{ padding: '4rem 4rem 4rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>Our Story</p>
            <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.8rem, 5vw, 5rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '1.8rem' }}>
              One woman,<br />a wheel, and a<br />
              <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>whole lot of clay</em>
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, maxWidth: '440px' }}>
              Silly Goose Pottery is a one-woman ceramics studio in Denver, Colorado. Every piece is wheel-thrown, trimmed, glazed, and fired by hand — no shortcuts, no assembly lines, no two pieces exactly alike.
            </p>
          </div>
          <div style={{ background: 'var(--cream-dark)', overflow: 'hidden' }}>
            <Image
              src="/hero_bowl.jpg"
              alt="Handthrown pottery by Silly Goose Pottery, Denver CO"
              width={900} height={900}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: '7rem 4rem', borderTop: '1px solid rgba(184,92,82,0.15)' }} className="about-story">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-story-grid">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ aspectRatio: '4/3', gridColumn: 'span 2', borderRadius: '4px', overflow: 'hidden' }}>
              <Image src="/about1.jpg" alt="Handthrown ceramics by Silly Goose Pottery" width={900} height={675} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
              <Image src="/about2.jpg" alt="Detail of handthrown pottery glaze" width={600} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
              <Image src="/about3.jpg" alt="Pottery studio in Denver" width={600} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>How It Started</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Rooted in the<br />craft of making
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, marginBottom: '1.2rem' }}>
              It started the way most obsessions do — slowly, then all at once. One pottery class, one lopsided bowl, and twelve years later here we are. The wheel has a way of demanding your full attention, and I&apos;ve never found anything else that does that quite as well.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, marginBottom: '1.2rem' }}>
              Every piece starts as a lump of stoneware clay and ends as something you&apos;ll reach for every morning. The imperfections are intentional — they&apos;re what tell you a person made this, not a machine.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300 }}>
              The studio is based in Denver, Colorado, where 300 days of sunshine and a very good dog make for an excellent working environment.
            </p>
            <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {([['12', 'Years in craft'], ['400+', 'Pieces made'], ['100%', 'Handmade']] as [string, string][]).map(([num, label]) => (
                <div key={label} style={{ borderLeft: '2px solid var(--rose)', paddingLeft: '1rem' }}>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.4rem', fontWeight: 300, color: 'var(--rose-dark)' }}>{num}</div>
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginTop: '2px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOOSE */}
      <section style={{ padding: '7rem 4rem', background: 'var(--cream-dark)', borderTop: '1px solid rgba(184,92,82,0.15)' }} className="about-goose">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-goose-grid">
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>Meet the Team</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Goose, Chief<br />Morale Officer
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, marginBottom: '1.2rem' }}>
              Goose joined the studio in 2019 and immediately took charge of quality control. His responsibilities include napping near the kiln, greeting every visitor with maximum enthusiasm, and occasionally stepping on freshly trimmed pieces.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, marginBottom: '1.2rem' }}>
              He is the reason this place is called Silly Goose Pottery. He is not embarrassed about this.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300 }}>
              The Sage Pet Bowl in the shop is his personal recommendation. He has tested it extensively.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/shop">
                <button className="btn-rose">Shop the Collection</button>
              </Link>
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/5' }}>
            <Image
              src="/goose_dog.jpg"
              alt="Goose the dog, Chief Morale Officer of Silly Goose Pottery"
              width={600} height={800}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'calc(50% - 1.5cm) calc(50% - 1.5cm)' }}
            />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(240,237,230,0.92)', padding: '0.4rem 0.8rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>Goose · Est. 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '7rem 4rem', borderTop: '1px solid rgba(184,92,82,0.15)' }}>
        <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>How We Work</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
            Things we believe in
          </h2>
        </div>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {([
            { title: 'Slow > Fast', text: 'Good pottery takes time. The wheel can\'t be rushed, the kiln can\'t be hurried, and the glaze does what it wants. We work with that, not against it.' },
            { title: 'Imperfection is the point', text: 'No two pieces are alike. Slight variations in form, glaze pooling, and surface texture are signs of a human hand — not flaws to be fixed.' },
            { title: 'Made to be used', text: 'All pieces are food safe, dishwasher safe, and built to hold up to daily life. Beautiful things should be used, not just displayed.' },
          ] as { title: string, text: string }[]).map(v => (
            <div key={v.title} style={{ paddingTop: '2rem', borderTop: '1px solid rgba(184,92,82,0.25)' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--rose-dark)', fontWeight: 500 }}>{v.title}</div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, opacity: 0.6, fontWeight: 300 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: 'var(--rose)', padding: '5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }} className="cta-strip">
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.6)', marginBottom: '0.5rem' }}>Ready to find something?</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)' }}>
            Shop the collection<br />or commission a piece
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/shop"><button className="btn-cream">Shop Now</button></Link>
          <Link href="/custom"><button style={{ background: 'transparent', border: '1px solid rgba(240,237,230,0.4)', color: 'var(--cream)', padding: '0.85rem 2.2rem', fontFamily: '"Jost", sans-serif', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer' }}>Custom Orders</button></Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ padding: '2.5rem 4rem', borderTop: '1px solid rgba(184,92,82,0.15)' }}>
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <Image src="/logo.jpg" alt="Silly Goose Pottery logo" width={54} height={54} style={{ objectFit: 'contain' }} />
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>
              Silly Goose Pottery
            </span>
          </Link>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {([['Home', '/'], ['Shop', '/shop'], ['Custom', '/custom'], ['Instagram', 'https://instagram.com/sillygoosepottery']] as [string, string][]).map(([item, href]) => (
              <li key={item}>
                <a href={href} target={item === 'Instagram' ? '_blank' : undefined} rel={item === 'Instagram' ? 'noopener noreferrer' : undefined} style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.35, textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '0.68rem', opacity: 0.28, letterSpacing: '0.08em' }}>&copy; 2026 Silly Goose Pottery &middot; Denver, CO</p>
        </div>
      </footer>

    </main>
  )
}
