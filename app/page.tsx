import Image from 'next/image'
import Link from 'next/link'

const PRODUCTS = [
  { name: 'Petal Bowl No. 1', type: 'Bowl', price: '$185', img: '/p14_petal_bowl_large.jpg' },
  { name: 'Petal Bowl No. 2', type: 'Bowl', price: '$165', img: '/p13_petal_bowl_red.jpg' },
  { name: 'Petal Bowl No. 3', type: 'Bowl', price: '$145', img: '/p1_petal_bowl_small.jpg' },
  { name: 'Sunrise Bowl', type: 'Bowl', price: '$95', img: '/p5_sunrise_bowl.jpg' },
  { name: 'Midnight Plate', type: 'Plate', price: '$110', img: '/p6_midnight_plate.jpg' },
  { name: 'Periwinkle Dishes', type: 'Set of 2', price: '$85', img: '/p7_blue_dishes.jpg' },
  { name: 'Rose Mug', type: 'Mug', price: '$65', img: '/p8_rose_mug.jpg' },
  { name: 'Half-Dip Cup', type: 'Cup', price: '$55', img: '/p12_half_dip_cup.jpg' },
  { name: 'Honey Cup', type: 'Cup', price: '$50', img: '/p11_honey_cup.jpg' },
  { name: 'Sage Pet Bowl', type: 'Pet Bowl', price: '$75', img: '/p10_sage_dog_bowl_side.jpg' },
  { name: 'Flower Incense Holders', type: 'Set of 3', price: '$45', img: '/p3_incense_holders_set.jpg' },
  { name: 'Ceramic Wall Hooks', type: 'Set of 3', price: '$65', img: '/p4_wall_hooks.jpg' },
]

export default function Home() {
  return (
    <main style={{ background: 'var(--cream)' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 3rem',
        background: 'rgba(240,237,230,0.93)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(184,92,82,0.15)',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <Image src="/logo.jpg" alt="Silly Goose Pottery" width={88} height={88} style={{ objectFit: 'contain', borderRadius: '2px' }} />
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>
            Silly Goose Pottery
          </span>
        </a>
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {([['Shop','/shop'],['About','#about'],['Process','#process'],['Instagram','https://instagram.com/sillygoosepottery'],['Contact','#contact']] as [string,string][]).map(([label, href]) => (
            <li key={label}>
              <a href={href} target={label === 'Instagram' ? '_blank' : undefined} rel={label === 'Instagram' ? 'noopener noreferrer' : undefined} style={{ fontSize: '0.73rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.55, textDecoration: 'none' }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <Link href="/shop"><button className="btn-rose">Shop Now</button></Link>
      </nav>

      {/* HERO */}
      <section id="top" className="hero-grid" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: '80px' }}>
        <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 3rem 5rem 4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1.5rem' }}>
            Handthrown &middot; One of a Kind
          </p>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.8rem, 5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '1.8rem' }}>
            Made slowly,<br />with{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>muddy</em>
            <br />hands
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--ink)', opacity: 0.6, maxWidth: '400px', marginBottom: '2.5rem', fontWeight: 300 }}>
            One woman, a wheel, and a whole lot of clay. Every piece is thrown, trimmed, and glazed by hand in Denver, CO. Imperfect by design &mdash; that&apos;s the whole point.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Link href="/shop"><button className="btn-rose">Explore Collection</button></Link>
            <a href="#about" style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.5, textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              Our Story
            </a>
          </div>
        </div>
        <div style={{ background: 'var(--cream-dark)', overflow: 'hidden' }}>
          <Image src="/p3_incense_holders_set.jpg" alt="Handthrown incense holders set" width={900} height={1200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} priority />
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: 'var(--rose)', color: 'var(--cream)', padding: '0.9rem 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="marquee-track" style={{ display: 'inline-block' }}>
          {['Handthrown','|','Lead-Free Glazes','|','Denver, Colorado','|','Made to Order','|','Food Safe','|','Custom Commissions','|','Handthrown','|','Lead-Free Glazes','|','Denver, Colorado','|','Made to Order','|','Food Safe','|','Custom Commissions','|'].map((word, i) => (
            <span key={i} style={{ fontSize: '0.71rem', letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 1.8rem', opacity: 0.9 }}>{word}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="about-grid section-pad" style={{ padding: '7rem 4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', borderTop: '1px solid rgba(184,92,82,0.15)' }}>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>Our Story</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
            Rooted in the<br />craft of making
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, marginTop: '1.5rem', maxWidth: '440px' }}>
            One woman, a wheel, and a whole lot of clay. Every piece is made by hand in Denver, CO &mdash; thrown, trimmed, glazed, and fired from start to finish. No shortcuts, no assembly lines.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, marginTop: '1rem', maxWidth: '440px' }}>
            Oh, and Goose helps too &mdash; he&apos;s the studio&apos;s chief morale officer and the real reason this place is called Silly Goose Pottery.
          </p>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {([['12','Years in craft'],['400+','Pieces made'],['100%','Handmade']] as [string,string][]).map(([num, label]) => (
              <div key={label} style={{ borderLeft: '2px solid var(--rose)', paddingLeft: '1rem' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.4rem', fontWeight: 300, color: 'var(--rose-dark)' }}>{num}</div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, marginTop: '2px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ aspectRatio: '4/3', gridColumn: 'span 2', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/about1.jpg" alt="Large petal bowl" width={900} height={675} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/about2.jpg" alt="Midnight plate" width={900} height={675} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
            <Image src="/goose_dog.jpg" alt="Goose the dog in the Colorado mountains" width={600} height={1000} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'calc(50% - 1.5cm) calc(50% - 1.5cm)' }} />
            <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', background: 'rgba(240,237,230,0.9)', padding: '0.3rem 0.7rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose-dark)', fontFamily: '"Jost", sans-serif' }}>Goose, Chief Morale Officer</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section style={{ padding: '7rem 4rem', background: 'var(--ink)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose-pale)', marginBottom: '1rem' }}>Current Collection</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)' }}>
              Selected works
            </h2>
          </div>
          <Link href="/shop" style={{ fontSize: '0.73rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose-pale)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            View all pieces &rarr;
          </Link>
        </div>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {PRODUCTS.slice(0, 6).map(p => (
            <Link key={p.name} href="/shop" style={{ textDecoration: 'none' }}>
              <div className="product-card" style={{ cursor: 'pointer' }}>
                <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '1rem', aspectRatio: '1/1', background: 'var(--cream-dark)' }}>
                  <Image src={p.img} alt={p.name} width={800} height={800} className="product-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.25rem', fontWeight: 300, color: 'var(--cream)', marginBottom: '0.4rem' }}>{p.name}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose-pale)', opacity: 0.65 }}>{p.type}</span>
                  <span style={{ fontSize: '1rem', color: 'var(--rose-pale)', fontFamily: '"Cormorant Garamond", serif' }}>{p.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/shop"><button className="btn-rose">View All 12 Pieces</button></Link>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-pad" style={{ padding: '7rem 4rem', borderTop: '1px solid rgba(184,92,82,0.15)' }}>
        <div style={{ maxWidth: '580px', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>The Process</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
            From earth to table
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, marginTop: '1rem' }}>
            Every piece travels the full journey &mdash; from raw stoneware clay to a finished object you&apos;ll use every day.
          </p>
        </div>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem' }}>
          {([
            { n: '01', title: 'Wedge & Center', text: 'Clay is hand-wedged to remove air pockets, then centered on the wheel with steady pressure.' },
            { n: '02', title: 'Throw & Trim', text: 'Forms are pulled up by hand. Leather-hard pieces are trimmed to define the foot and refine the shape.' },
            { n: '03', title: 'Bisque Fire', text: 'Dry pieces go into the kiln at cone 06, transforming raw clay into porous bisqueware ready for glaze.' },
            { n: '04', title: 'Glaze & Fire', text: 'Each piece is hand-dipped in food-safe glazes, then fired to cone 6. The final surface is only revealed when the kiln cools.' },
          ] as {n:string,title:string,text:string}[]).map(s => (
            <div key={s.n} style={{ paddingTop: '2rem', borderTop: '1px solid rgba(184,92,82,0.25)' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', fontWeight: 300, color: 'var(--rose-pale)', lineHeight: 1, marginBottom: '1rem' }}>{s.n}</div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--rose-dark)', fontWeight: 500 }}>{s.title}</div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.75, opacity: 0.6, fontWeight: 300 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div id="contact" className="cta-strip" style={{ background: 'var(--rose)', padding: '5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem' }}>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.6)', marginBottom: '0.5rem' }}>Commission a Piece</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)' }}>
            Something made<br />just for you
          </h2>
        </div>
        <a href="https://instagram.com/sillygoosepottery" target="_blank" rel="noopener noreferrer">
          <button className="btn-cream">Start a Commission</button>
        </a>
      </div>

      {/* FOOTER */}
      <footer style={{ padding: '2.5rem 4rem', borderTop: '1px solid rgba(184,92,82,0.15)' }}>
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <Image src="/logo.jpg" alt="Silly Goose Pottery" width={54} height={54} style={{ objectFit: 'contain' }} />
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>
              Silly Goose Pottery
            </span>
          </a>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {([['Shop','/shop'],['About','#about'],['Instagram','https://instagram.com/sillygoosepottery'],['Contact','#contact']] as [string,string][]).map(([item, href]) => (
              <li key={item}>
                <a href={href} target={item === 'Instagram' ? '_blank' : undefined} rel={item === 'Instagram' ? 'noopener noreferrer' : undefined} style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.35, textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '0.68rem', opacity: 0.28, letterSpacing: '0.08em' }}>&copy; 2026 Silly Goose Pottery</p>
        </div>
      </footer>

    </main>
  )
}
