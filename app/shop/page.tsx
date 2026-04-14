import Image from 'next/image'
import Link from 'next/link'

const PRODUCTS = [
  { name: 'Petal Bowl No. 1', type: 'Bowl', price: '$185', img: '/p14_petal_bowl_large.jpg', desc: 'Large free-form petal bowl in rose and white glaze. A statement piece for any table.' },
  { name: 'Petal Bowl No. 2', type: 'Bowl', price: '$165', img: '/p13_petal_bowl_red.jpg', desc: 'Organic petal bowl with deep red glaze and teal center. Each one is completely unique.' },
  { name: 'Petal Bowl No. 3', type: 'Bowl', price: '$145', img: '/p1_petal_bowl_small.jpg', desc: 'Smaller petal bowl with soft rose and grey glaze. Perfect as a fruit bowl or centerpiece.' },
  { name: 'Sunrise Bowl', type: 'Bowl', price: '$95', img: '/p5_sunrise_bowl.jpg', desc: 'Wide-rimmed bowl in sunset tones of amber and dusty rose. Food safe and dishwasher safe.' },
  { name: 'Midnight Plate', type: 'Plate', price: '$110', img: '/p6_midnight_plate.jpg', desc: 'Deep cobalt blue plate with irregular organic rim. A showstopper for dinner parties.' },
  { name: 'Periwinkle Dishes', type: 'Set of 2', price: '$85', img: '/p7_blue_dishes.jpg', desc: 'Matching set of two periwinkle blue dishes. Great for rings, trinkets, or tapas.' },
  { name: 'Rose Mug', type: 'Mug', price: '$65', img: '/p8_rose_mug.jpg', desc: 'Chunky rose mug with a hand-pulled handle. Holds a generous 12oz. Food safe.' },
  { name: 'Half-Dip Cup', type: 'Cup', price: '$55', img: '/p12_half_dip_cup.jpg', desc: 'Handleless cup with a half-dip rose glaze over raw stoneware. Minimal and modern.' },
  { name: 'Honey Cup', type: 'Cup', price: '$50', img: '/p11_honey_cup.jpg', desc: 'Small rounded cup in warm honey glaze. Perfect for espresso, matcha, or small sips.' },
  { name: 'Sage Pet Bowl', type: 'Pet Bowl', price: '$75', img: '/p10_sage_dog_bowl_side.jpg', desc: 'Handthrown pet bowl in matte sage glaze. Sturdy, food safe, and beautiful enough to display.' },
  { name: 'Flower Incense Holders', type: 'Set of 3', price: '$45', img: '/p3_incense_holders_set.jpg', desc: 'Set of 3 flower-shaped incense holders in assorted glazes. A sweet gift or altar piece.' },
  { name: 'Ceramic Wall Hooks', type: 'Set of 3', price: '$65', img: '/p4_wall_hooks.jpg', desc: 'Set of 3 ceramic wall hooks in sage, mauve, and terracotta. Mounting hardware included.' },
]

export default function Shop() {
  return (
    <main style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 3rem',
        background: 'rgba(240,237,230,0.93)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(184,92,82,0.15)',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <Image src="/logo.jpg" alt="Silly Goose Pottery" width={88} height={88} style={{ objectFit: 'contain', borderRadius: '2px' }} />
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>
            Silly Goose Pottery
          </span>
        </Link>
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {([['Shop','/shop'],['About','/#about'],['Process','/#process'],['Instagram','https://instagram.com/sillygoosepottery'],['Contact','/#contact']] as [string,string][]).map(([label, href]) => (
            <li key={label}>
              <a href={href} target={label === 'Instagram' ? '_blank' : undefined} rel={label === 'Instagram' ? 'noopener noreferrer' : undefined} style={{ fontSize: '0.73rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: label === 'Shop' ? 'var(--rose)' : 'var(--ink)', opacity: label === 'Shop' ? 1 : 0.55, textDecoration: 'none' }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://instagram.com/sillygoosepottery" target="_blank" rel="noopener noreferrer">
          <button className="btn-rose">Order on Instagram</button>
        </a>
      </nav>

      {/* SHOP HEADER */}
      <div style={{ paddingTop: '140px', paddingBottom: '4rem', paddingLeft: '4rem', paddingRight: '4rem', borderBottom: '1px solid rgba(184,92,82,0.15)' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>All Pieces</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
            The Collection
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.5, fontWeight: 300, maxWidth: '380px', lineHeight: 1.7 }}>
            Every piece is one of a kind. To purchase, DM on Instagram or click &ldquo;Order on Instagram&rdquo;. Ships from Denver, CO.
          </p>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
        {PRODUCTS.map(p => (
          <div key={p.name} style={{ cursor: 'pointer' }}>
            <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '1.2rem', aspectRatio: '1/1', background: 'var(--cream-dark)' }}>
              <Image
                src={p.img}
                alt={p.name}
                width={800}
                height={800}
                className="product-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />
            </div>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', fontWeight: 300, color: 'var(--ink)', marginBottom: '0.3rem' }}>{p.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose)', opacity: 0.8 }}>{p.type}</span>
              <span style={{ fontSize: '1.1rem', color: 'var(--rose-dark)', fontFamily: '"Cormorant Garamond", serif', fontWeight: 400 }}>{p.price}</span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, opacity: 0.55, fontWeight: 300, marginBottom: '1rem' }}>{p.desc}</p>
            <a href="https://instagram.com/sillygoosepottery" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--rose-dark)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
              Inquire on Instagram &rarr;
            </a>
          </div>
        ))}
      </div>

      {/* CTA BANNER */}
      <div style={{ background: 'var(--rose)', padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.65)', marginBottom: '0.5rem' }}>Want something custom?</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2 }}>
            Commission a one-of-a-kind piece
          </h2>
        </div>
        <a href="https://instagram.com/sillygoosepottery" target="_blank" rel="noopener noreferrer">
          <button className="btn-cream">DM on Instagram</button>
        </a>
      </div>

      {/* FOOTER */}
      <footer style={{ padding: '2.5rem 4rem', borderTop: '1px solid rgba(184,92,82,0.15)' }}>
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <Image src="/logo.jpg" alt="Silly Goose Pottery" width={54} height={54} style={{ objectFit: 'contain' }} />
            <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>
              Silly Goose Pottery
            </span>
          </Link>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {([['Home','/'],['Instagram','https://instagram.com/sillygoosepottery']] as [string,string][]).map(([item, href]) => (
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
