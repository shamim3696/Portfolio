import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaPaperPlane } from 'react-icons/fa'

const CHANNELS = [
  { icon: <FaEnvelope size={14}/>, label: 'ENCRYPTED MAIL',  value: 'shamim36960@gmail.com',     href: 'mailto:shamim36960@gmail.com',            color: '#ff3a3a' },
  { icon: <FaLinkedin size={14}/>, label: 'SECURE CHANNEL',  value: 'linkedin.com/in/shamim3696', href: 'https://www.linkedin.com/in/shamim3696/', color: '#4d9fff' },
  { icon: <FaGithub size={14}/>,   label: 'CODE ARCHIVE',    value: 'github.com/shamim3696',      href: 'https://github.com/shamim3696',           color: '#e7e7e7' },
  { icon: <FaFacebook size={14}/>, label: 'SOCIAL FEED',     value: 'facebook.com/shamim3696',    href: 'https://www.facebook.com/shamim3696/',    color: '#4d9fff' },
]

const TG_TOKEN   = import.meta.env.VITE_TG_TOKEN
const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID

async function sendToTelegram(name, email, message) {
  const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`

  const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
  })

  if (!res.ok) throw new Error(await res.text())
}

export default function ContactSection() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendToTelegram(form.from_name, form.from_email, form.message)
      setStatus('sent')
    } catch (err) {
      console.error('Telegram error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="det-section">
      <div className="det-file-header" style={{ borderColor: '#ffb347' }}>
        <span className="det-stamp" style={{ color: '#ffb347', borderColor: '#ffb347' }}>SECURE COMMS</span>
        <span className="det-file-num">FILE-05 · CONTACT PROTOCOL</span>
      </div>

      <h2 className="det-section-title">COMMUNICATION TERMINAL</h2>
      <p className="det-body-text" style={{ marginBottom: '16px' }}>
        All transmissions are monitored. Establish a secure line using an approved channel below.
      </p>

      {/* Comm channels */}
      <div className="det-comm-grid">
        {CHANNELS.map((ch, i) => (
          <a key={i} href={ch.href} target="_blank" rel="noreferrer" className="det-comm-card">
            <span style={{ color: ch.color }}>{ch.icon}</span>
            <div>
              <div className="det-comm-label">{ch.label}</div>
              <div className="det-comm-value">{ch.value}</div>
            </div>
            <span className="det-comm-arrow" style={{ color: ch.color }}>→</span>
          </a>
        ))}
      </div>

      <div className="det-divider" style={{ marginBlock: '18px' }} />

      <div className="det-evidence-label" style={{ marginBottom: '10px' }}>ENCRYPTED TRANSMISSION:</div>

      {status === 'sent' ? (
        <div className="det-sent-confirm">
          <span style={{ color: '#00ff88', fontSize: '1.2rem' }}>✔</span>
          <div>
            <div style={{ color: '#00ff88', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em' }}>TRANSMISSION RECEIVED</div>
            <div className="det-body-text" style={{ marginTop: '4px' }}>Message forwarded to operative. Expect contact within 24h.</div>
          </div>
        </div>
      ) : (
        <form className="det-contact-form" onSubmit={handleSubmit}>
          <div className="det-form-row">
            <label className="det-form-label">OPERATIVE NAME</label>
            <input
              className="det-form-input"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="Your name..."
              required
              autoComplete="off"
            />
          </div>
          <div className="det-form-row">
            <label className="det-form-label">RETURN FREQUENCY</label>
            <input
              className="det-form-input"
              name="from_email"
              type="email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="Your email..."
              required
              autoComplete="off"
            />
          </div>
          <div className="det-form-row">
            <label className="det-form-label">CLASSIFIED MESSAGE</label>
            <textarea
              className="det-form-input det-form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              rows={4}
              required
            />
          </div>

          {status === 'error' && (
            <div style={{ color: '#ff3a3a', fontSize: '0.68rem', letterSpacing: '0.1em' }}>
              ✕ TRANSMISSION FAILED — try a direct channel above.
            </div>
          )}

          <button type="submit" className="det-form-submit" disabled={status === 'sending'}>
            <FaPaperPlane size={12} />
            <span>{status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT SECURE MESSAGE'}</span>
          </button>
        </form>
      )}

      <div className="det-divider" style={{ marginBlock: '18px' }} />

      <div className="det-avail-row">
        <div className="det-evidence-dot" style={{ background: '#00ff88', animation: 'det-pulse 2s infinite' }} />
        <div>
          <div style={{ color: '#00ff88', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em' }}>STATUS: AVAILABLE FOR HIRE</div>
          <div className="det-body-text" style={{ marginTop: '2px' }}>Open to backend / full-stack roles. Remote or Dhaka-based.</div>
        </div>
      </div>
    </div>
  )
}
