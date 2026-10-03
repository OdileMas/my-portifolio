import { useState } from 'react';
import { EMAIL, GITHUB, FORM_ENDPOINT } from '../data';

const LIMITS = { name: 80, email: 120, message: 2000 };
const COOLDOWN_MS = 60 * 1000;
const STORAGE_KEY = 'contact:lastSent';
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

const empty = { name: '', email: '', message: '', website: '' };

const lastSent = () => {
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch {
    return 0;
  }
};

const rememberSent = () => {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* storage unavailable — cooldown just won't persist */
  }
};

function validate({ name, email, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please tell me your name.';
  if (!EMAIL_RE.test(email.trim())) errors.email = 'That email address doesn’t look right.';
  if (message.trim().length < 10) errors.message = 'A few more words, please (10+ characters).';
  return errors;
}

function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.slice(0, LIMITS[name] ?? 200) });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    // bots fill the hidden "website" field; quietly pretend success
    if (form.website) {
      setStatus('sent');
      setForm(empty);
      return;
    }

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (Date.now() - lastSent() < COOLDOWN_MS) {
      setStatus('wait');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `Portfolio message from ${form.name.trim()}`,
          _replyto: form.email.trim(),
          _template: 'table',
          _captcha: 'false',
          _honey: '',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error('send failed');
      rememberSent();
      setStatus('sent');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  };

  const remaining = LIMITS.message - form.message.length;

  return (
    <section className="section contact tone-charcoal" id="contact">
      <div className="wrap">
        <p className="eyebrow reveal">05 — Contact</p>
        <h2 className="display contact__title reveal">
          Let’s build something <em>worth keeping.</em>
        </h2>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <p>
              Open to junior developer roles, internships and freelance work — backend, full-stack or
              anything in between. Send a note here and it lands straight in my inbox.
            </p>
            <a className="contact__email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <dl className="contact__meta">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+250780283130">+250 780 283 130</a>
                </dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Kigali, Rwanda</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                    @OdileMas ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form className="contact__form reveal" onSubmit={submit} noValidate>
            <div className={`field ${errors.name ? 'field--error' : ''}`}>
              <input
                id="c-name"
                name="name"
                value={form.name}
                onChange={update}
                maxLength={LIMITS.name}
                autoComplete="name"
                placeholder=" "
                aria-invalid={Boolean(errors.name)}
                aria-describedby="c-name-err"
              />
              <label htmlFor="c-name">Your name</label>
              <p id="c-name-err" className="field__error">{errors.name}</p>
            </div>

            <div className={`field ${errors.email ? 'field--error' : ''}`}>
              <input
                id="c-email"
                name="email"
                type="email"
                inputMode="email"
                value={form.email}
                onChange={update}
                maxLength={LIMITS.email}
                autoComplete="email"
                placeholder=" "
                aria-invalid={Boolean(errors.email)}
                aria-describedby="c-email-err"
              />
              <label htmlFor="c-email">Email address</label>
              <p id="c-email-err" className="field__error">{errors.email}</p>
            </div>

            <div className={`field ${errors.message ? 'field--error' : ''}`}>
              <textarea
                id="c-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                maxLength={LIMITS.message}
                placeholder=" "
                aria-invalid={Boolean(errors.message)}
                aria-describedby="c-message-err"
              />
              <label htmlFor="c-message">Message</label>
              <p id="c-message-err" className="field__error">
                {errors.message}
                {!errors.message && remaining < 200 && `${remaining} characters left`}
              </p>
            </div>

            {/* honeypot — hidden from people, irresistible to bots */}
            <div className="visually-hidden" aria-hidden="true">
              <label htmlFor="c-website">Website</label>
              <input id="c-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
            </div>

            <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'} <span className="arrow">→</span>
            </button>

            <p className={`contact__status contact__status--${status}`} role="status" aria-live="polite">
              {status === 'sent' && 'Thank you — your message is on its way. I’ll reply soon.'}
              {status === 'wait' && 'Message already sent — please wait a minute before sending another.'}
              {status === 'error' && (
                <>
                  Something went wrong. Please email me directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </>
              )}
            </p>
          </form>
        </div>
      </div>

      <footer className="wrap footer">
        <p>© {new Date().getFullYear()} Odile Masengesho</p>
        <p>Designed &amp; built in Kigali</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}

export default Contact;
