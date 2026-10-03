import { useState } from 'react';
import { EMAIL, FORM_ENDPOINT } from '../data';
import { ArrowIcon } from './ui';
import './ContactForm.css';

const LIMITS = { name: 80, email: 120, topic: 60, message: 2000, website: 100 };
const COOLDOWN_MS = 60 * 1000;
const STORAGE_KEY = 'contact:lastSent';
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const TOPICS = ['Job opportunity', 'Internship', 'Freelance project', 'Just saying hi'];

const empty = { name: '', email: '', topic: TOPICS[0], message: '', website: '' };

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

function ContactForm() {
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
          topic: TOPICS.includes(form.topic) ? form.topic : TOPICS[0],
          message: form.message.trim(),
          _subject: `Portfolio: ${form.topic} — ${form.name.trim()}`,
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
    <form className="cform" onSubmit={submit} noValidate>
      <fieldset className="cform__topics">
        <legend>What’s it about?</legend>
        {TOPICS.map((t) => (
          <label key={t} className={`cform__topic ${form.topic === t ? 'is-on' : ''}`}>
            <input type="radio" name="topic" value={t} checked={form.topic === t} onChange={update} />
            {t}
          </label>
        ))}
      </fieldset>

      <div className="cform__row">
        <div className={`cform__field ${errors.name ? 'has-error' : ''}`}>
          <label htmlFor="c-name">Your name</label>
          <input
            id="c-name"
            name="name"
            value={form.name}
            onChange={update}
            maxLength={LIMITS.name}
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
            aria-describedby="c-name-err"
          />
          <p id="c-name-err" className="cform__error">{errors.name}</p>
        </div>

        <div className={`cform__field ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="c-email">Email</label>
          <input
            id="c-email"
            name="email"
            type="email"
            inputMode="email"
            value={form.email}
            onChange={update}
            maxLength={LIMITS.email}
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby="c-email-err"
          />
          <p id="c-email-err" className="cform__error">{errors.email}</p>
        </div>
      </div>

      <div className={`cform__field ${errors.message ? 'has-error' : ''}`}>
        <label htmlFor="c-message">Message</label>
        <textarea
          id="c-message"
          name="message"
          rows="6"
          value={form.message}
          onChange={update}
          maxLength={LIMITS.message}
          placeholder="Tell me about the role or project…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby="c-message-err"
        />
        <p id="c-message-err" className="cform__error">
          {errors.message || (remaining < 200 ? `${remaining} characters left` : '')}
        </p>
      </div>

      {/* honeypot — hidden from people, irresistible to bots */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="c-website">Website</label>
        <input id="c-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
      </div>

      <div className="cform__submit">
        <button type="submit" className="pill pill--accent" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <span className="pill__icon">
            <ArrowIcon />
          </span>
        </button>
        <p className="cform__note">Goes straight to my inbox. I usually reply within a day.</p>
      </div>

      <p className={`cform__status cform__status--${status}`} role="status" aria-live="polite">
        {status === 'sent' && 'Thank you , your message is on its way. I’ll reply soon.'}
        {status === 'wait' && 'Message already sent, please wait a minute before sending another.'}
        {status === 'error' && (
          <>
            Something went wrong. Please email me directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </>
        )}
      </p>
    </form>
  );
}

export default ContactForm;
