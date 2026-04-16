import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Ceramic Orders — Cafés, Restaurants & Events',
  description: 'Commission custom handthrown ceramics for your café, restaurant, wedding, or event. Silly Goose Pottery creates bespoke mugs, cups, plates, and tableware sets in Denver, Colorado — made to your glaze, your size, your story.',
  openGraph: {
    title: 'Custom Ceramic Orders | Silly Goose Pottery · Denver, CO',
    description: 'Bespoke handthrown ceramics for cafés, restaurants, weddings, and events. Every piece wheel-thrown and glazed by hand in Denver, CO.',
    url: 'https://sillygoosepottery.com/custom',
    images: [{ url: '/p7_blue_dishes.jpg', width: 900, height: 900, alt: 'Custom handthrown ceramic dishes by Silly Goose Pottery' }],
  },
  alternates: { canonical: 'https://sillygoosepottery.com/custom' },
}

export default function Custom() {
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
          <Image src="/logo.jpg" alt="Silly Goose Pottery logo" width={88} height={88} style={{ objectFit: 'contain', borderRadius: '2px' }} />
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rose-dark)' }}>
            Silly Goose Pottery
          </span>
        </Link>
        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {([['Shop','/shop'],['Custom','/custom'],['About','/#about'],['Process','/#process'],['Instagram','https://instagram.com/sillygoosepottery'],['Contact','/#contact']] as [string,string][]).map(([label, href]) => (
            <li key={label}>
              <a href={href} target={label === 'Instagram' ? '_blank' : undefined} rel={label === 'Instagram' ? 'noopener noreferrer' : undefined} style={{ fontSize: '0.73rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: label === 'Custom' ? 'var(--rose)' : 'var(--ink)', opacity: label === 'Custom' ? 1 : 0.55, textDecoration: 'none' }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="https://instagram.com/sillygoosepottery" target="_blank" rel="noopener noreferrer">
          <button className="btn-rose">Get in Touch</button>
        </a>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: '140px', paddingBottom: '6rem', paddingLeft: '4rem', paddingRight: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', borderBottom: '1px solid rgba(184,92,82,0.15)' }}>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1.2rem' }}>Custom & Wholesale</p>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.8rem, 5vw, 5rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '1.8rem' }}>
            Ceramics made<br />for your{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>space</em>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, maxWidth: '460px', marginBottom: '1.2rem' }}>
            Whether you run a neighbourhood café, a farm-to-table restaurant, or you&apos;re planning a wedding — custom handthrown ceramics are one of the most personal ways to make a space feel like yours.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300, maxWidth: '460px', marginBottom: '2.5rem' }}>
            Every custom order is still made the same way as everything else here: thrown on the wheel, trimmed by hand, dipped in glaze, and fired in the kiln. The only difference is that we do it with your vision in mind.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="https://instagram.com/sillygoosepottery" target="_blank" rel="noopener noreferrer">
              <button className="btn-rose">Start a Conversation on Instagram</button>
            </a>
            <a href="mailto:sillygoosepottery@gmail.com" style={{ fontSize: '0.8rem', letterSpacing: '0.08em', color: 'var(--ink)', opacity: 0.5, textDecoration: 'none' }}>
              or email sillygoosepottery@gmail.com
            </a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/p8_rose_mug.jpg" alt="Custom handthrown rose mug — ideal for café and coffee shop orders" width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/p7_blue_dishes.jpg" alt="Custom handthrown periwinkle blue dishes — restaurant tableware" width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/p2_incense_holders_close.jpg" alt="Handthrown ceramic incense holders — custom event and gift orders" width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/p6_midnight_plate.jpg" alt="Custom handthrown midnight blue plate — bespoke restaurant tableware" width={800} height={800} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* WHAT WE MAKE */}
      <section style={{ padding: '7rem 4rem', borderBottom: '1px solid rgba(184,92,82,0.15)' }}>
        <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>What We Make</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
            A custom order for every occasion
          </h2>
        </div>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
          {([
            {
              title: 'Cafés & Coffee Shops',
              img: '/p12_half_dip_cup.jpg',
              imgAlt: 'Handthrown half-dip cup — custom café ceramics by Silly Goose Pottery',
              body: 'There\'s something about drinking coffee from a handmade mug that makes the whole experience better — and your customers will notice. We can make custom mugs, cups, and saucers glazed to match your café\'s aesthetic. Whether you want a neutral, earthy tone or something bold and colorful, we\'ll work with you on glaze colors, sizing, and quantities. Minimum order is typically 12 pieces.',
            },
            {
              title: 'Restaurants & Venues',
              img: '/p6_midnight_plate.jpg',
              imgAlt: 'Custom handthrown midnight plate for restaurant tableware',
              body: 'Handmade tableware changes how food feels on the table. Each plate, bowl, or serving piece is thrown to your spec — the right size, the right weight, the right glaze. We work with chefs and venue owners to create cohesive sets that stand up to daily restaurant use while still feeling special. Custom stamps or marks are available on request.',
            },
            {
              title: 'Weddings & Events',
              img: '/p11_honey_cup.jpg',
              imgAlt: 'Handthrown honey cup — custom wedding favor ceramics',
              body: 'Ceramic favors are the kind guests actually take home and use. A small cup, a pinch bowl, an incense holder — handmade and signed, they\'re a genuinely personal touch that fits any aesthetic from rustic to modern. We can match your wedding color palette and include a custom note with each piece. Lead times for events are typically 6–10 weeks.',
            },
            {
              title: 'Corporate & Studio Gifts',
              img: '/p9_sage_dog_bowl_top.jpg',
              imgAlt: 'Handthrown sage bowl — custom corporate and studio gift ceramics',
              body: 'If you\'re opening a new studio, celebrating a milestone, or looking for a gift that\'s genuinely thoughtful — custom ceramics make a lasting impression. We can create a set of pieces in your brand\'s palette, or simply make something beautiful that reflects your values. Handmade things carry a story, and that\'s exactly what a good gift should do.',
            },
          ] as {title:string,img:string,imgAlt:string,body:string}[]).map(item => (
            <div key={item.title} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start', paddingTop: '2.5rem', borderTop: '1px solid rgba(184,92,82,0.2)' }}>
              <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden' }}>
                <Image src={item.img} alt={item.imgAlt} width={700} height={700} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', fontWeight: 300, color: 'var(--ink)', marginBottom: '1rem', lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.85, opacity: 0.6, fontWeight: 300 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '7rem 4rem', background: 'var(--ink)', borderBottom: '1px solid rgba(184,92,82,0.15)' }}>
        <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose-pale)', marginBottom: '1rem' }}>The Process</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)' }}>
            How a custom order works
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, opacity: 0.55, fontWeight: 300, marginTop: '1rem', color: 'var(--cream)' }}>
            The whole point of custom work is that it should feel easy for you. Here&apos;s how we get from your idea to a finished piece.
          </p>
        </div>
        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {([
            {
              n: '01',
              title: 'Reach Out',
              text: 'Send a DM on Instagram, email sillygoosepottery@gmail.com, or use the contact button below. Share what you have in mind — even a rough idea is a great starting point.',
            },
            {
              n: '02',
              title: 'We Talk It Through',
              text: 'We\'ll discuss glaze colors, form, quantity, sizing, timeline, and budget. This part is a real conversation — we want to get it right.',
            },
            {
              n: '03',
              title: 'Sample Piece',
              text: 'For larger orders, we make one or two sample pieces for your approval before moving into full production. No surprises.',
            },
            {
              n: '04',
              title: 'Production & Delivery',
              text: 'Each piece is handmade, fired, and carefully packaged. We ship from Denver, CO. Timeline is typically 4–10 weeks depending on quantity.',
            },
          ] as {n:string,title:string,text:string}[]).map(s => (
            <div key={s.n} style={{ paddingTop: '2rem', borderTop: '1px solid rgba(240,237,230,0.15)' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', fontWeight: 300, color: 'var(--rose)', lineHeight: 1, marginBottom: '1rem' }}>{s.n}</div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--cream)', fontWeight: 500, opacity: 0.85 }}>{s.title}</div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.75, opacity: 0.5, fontWeight: 300, color: 'var(--cream)' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GOOD TO KNOW */}
      <section style={{ padding: '7rem 4rem', borderBottom: '1px solid rgba(184,92,82,0.15)' }}>
        <div style={{ maxWidth: '560px', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', marginBottom: '1rem' }}>Good to Know</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
            A few things worth mentioning
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {([
            {
              title: 'Minimum Quantities',
              text: 'For most custom orders, the minimum is 12 pieces. This is because each glaze batch, firing, and production run takes the same setup time whether we\'re making 2 pieces or 20.',
            },
            {
              title: 'Natural Variation',
              text: 'Every handmade piece is slightly different — that\'s part of what makes them special. Glaze results can vary between firings, and no two pieces will ever be exactly alike. We think that\'s a feature, not a bug.',
            },
            {
              title: 'Lead Time',
              text: 'Custom orders typically take 4–10 weeks from approval of the sample piece. If you have a specific event or deadline, reach out early and we\'ll do our best to make it work.',
            },
            {
              title: 'Food Safety',
              text: 'All glazes used are lead-free and food safe. Pieces are fired to cone 6, making them durable, dishwasher safe, and suitable for daily restaurant or café use.',
            },
            {
              title: 'Pricing',
              text: 'Custom orders are priced based on form, quantity, and complexity. As a general guide, custom pieces run 10–30% above standard shop pricing. We\'ll give you a full quote before any work begins.',
            },
            {
              title: 'Shipping',
              text: 'We ship carefully packaged from Denver, CO. For large wholesale orders we can discuss freight options. Local pickup in Denver is always welcome.',
            },
          ] as {title:string,text:string}[]).map(item => (
            <div key={item.title} style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(184,92,82,0.2)' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--rose-dark)', fontWeight: 500 }}>{item.title}</div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, opacity: 0.6, fontWeight: 300 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: 'var(--rose)', padding: '5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.6)', marginBottom: '0.5rem' }}>Ready to start?</p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)' }}>
            Let&apos;s make something<br />together
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(240,237,230,0.7)', fontWeight: 300, marginTop: '0.75rem', maxWidth: '420px' }}>
            DM on Instagram or drop us an email — either way we&apos;ll get back to you quickly.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
          <a href="https://instagram.com/sillygoosepottery" target="_blank" rel="noopener noreferrer">
            <button className="btn-cream">DM on Instagram</button>
          </a>
          <a href="mailto:sillygoosepottery@gmail.com" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'rgba(240,237,230,0.65)', textDecoration: 'none' }}>
            sillygoosepottery@gmail.com
          </a>
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
            {([['Home','/'],['Shop','/shop'],['Instagram','https://instagram.com/sillygoosepottery']] as [string,string][]).map(([item, href]) => (
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
