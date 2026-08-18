'use client'
import { useState } from 'react'

// ── Replace with your Formspree form ID from formspree.io ──
const FORMSPREE_ID = 'YOUR_FORM_ID'
// ──────────────────────────────────────────────────────────

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', inquiry: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)
  const [error,      setError]      = useState('')

  function field(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          phone:   form.phone || 'Not provided',
          inquiry: form.inquiry || 'Not specified',
          message: form.message,
        }),
      })

      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us at sillygoosepottery@gmail.com')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--cream)',
    border: '1px solid rgba(184,92,82,0.25)',
    borderRadius: '2px',
    fontFamily: '"Jost", sans-serif',
    fontSize: '0.9rem',
    color: 'var(--ink)',
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.68rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--rose)',
    marginBottom: '0.5rem',
    fontFamily: '"Jost", sans-serif',
  }

  if (submitted) {
    return (
      <div style={{
        padding: '3rem',
        background: 'var(--cream)',
        borderRadius: '4px',
        border: '1px solid rgba(184,92,82,0.2)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✦</div>
        <h3 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.8rem',
          fontWeight: 300,
          color: 'var(--ink)',
          marginBottom: '0.75rem',
        }}>
          Message received
        </h3>
        <p style={{ fontSize: '0.88rem', lineHeight: 1.8, opacity: 0.6, fontWeight: 300 }}>
          Thank you for reaching out. I&apos;ll get back to you within 2–3 days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row-split">
        <div>
          <label style={labelStyle}>Name <span style={{ color: 'var(--rose-light)' }}>*</span></label>
          <input
            required
            style={inputStyle}
            placeholder="Your name"
            value={form.name}
            onChange={field('name')}
          />
        </div>
        <div>
          <label style={labelStyle}>Email <span style={{ color: 'var(--rose-light)' }}>*</span></label>
          <input
            required
            type="email"
            style={inputStyle}
            placeholder="your@email.com"
            value={form.email}
            onChange={field('email')}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row-split">
        <div>
          <label style={labelStyle}>Phone <span style={{ opacity: 0.4 }}>(optional)</span></label>
          <input
            type="tel"
            style={inputStyle}
            placeholder="(720) 555-0000"
            value={form.phone}
            onChange={field('phone')}
          />
        </div>
        <div>
          <label style={labelStyle}>What are you looking for?</label>
          <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} value={form.inquiry} onChange={field('inquiry')}>
            <option value="">Select one...</option>
            <option>Custom commission</option>
            <option>Café or restaurant set</option>
            <option>Wedding or event favors</option>
            <option>Shop question</option>
            <option>Wholesale inquiry</option>
            <option>Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Message <span style={{ color: 'var(--rose-light)' }}>*</span></label>
        <textarea
          required
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
          placeholder="Tell me about what you have in mind — glazes, quantities, timeline, or anything else..."
          value={form.message}
          onChange={field('message')}
        />
      </div>

      {error && (
        <p style={{ fontSize: '0.82rem', color: 'var(--rose-dark)', lineHeight: 1.6 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-rose"
        style={{ alignSelf: 'flex-start', opacity: submitting ? 0.7 : 1 }}
      >
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
