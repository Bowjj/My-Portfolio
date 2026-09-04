import { useState, type FormEvent } from 'react'

const formEndpoint = 'https://formspree.io/f/xaeybpeg'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Form submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-intro reveal-on-scroll">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Let&apos;s Build Something <span>Together</span></h2>
        <p>Have an opportunity, project, or idea? I&apos;d be glad to hear from you.</p>
        <div className="social-links">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jobinskic@gmail.com" target="_blank" rel="noreferrer">Email <span>↗</span></a>
          <a href="https://github.com/Bowjj" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://www.linkedin.com/in/job-tantay-bb8185434/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        </div>
      </div>
      <form className="contact-form reveal-on-scroll" onSubmit={handleSubmit}>
        <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
        <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
        <label>Message<textarea name="message" rows={4} placeholder="Tell me a little about your project..." required /></label>
        <button className="button button-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : <>Send Message <span>→</span></>}
        </button>
        {status === 'success' && <p className="form-status success" role="status">Message sent successfully. I&apos;ll get back to you soon.</p>}
        {status === 'error' && <p className="form-status error" role="alert">Unable to send your message. Please try again or use the Email link.</p>}
      </form>
    </section>
  )
}
