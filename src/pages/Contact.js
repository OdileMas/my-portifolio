import { EMAIL, PHONE, PHONE_HREF, GITHUB } from '../data';
import { Label } from '../components/ui';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import usePageTitle from '../hooks/usePageTitle';
import './Contact.css';

const channels = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Phone', value: PHONE, href: PHONE_HREF },
  { label: 'GitHub', value: '@OdileMas', href: GITHUB, external: true },
  { label: 'Location', value: 'Kigali, Rwanda · open to jobs' },
];

function Contact() {
  usePageTitle('Contact');

  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            Let’s work <span className="hl">together.</span>
          </>
        }
        intro="Hiring for a junior developer or intern, or have a project in mind? Send a message — it goes straight to my inbox."
      />

      <section className="panel">
        <div className="wrap contact-grid">
          <div className="reveal">
            <ContactForm />
          </div>

          <aside className="contact-side">
            <Label className="reveal">Reach me directly</Label>
            <ul className="channels">
              {channels.map((c, i) => (
                <li key={c.label} className="reveal" style={{ '--d': `${i * 0.05}s` }}>
                  <span className="channels__label">{c.label}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="avail reveal">
              <p className="avail__title">
                <span className="avail__dot" /> Available
              </p>
              <p>Open to full-time junior roles, internships and freelance work , on-site in Kigali or remote.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Contact;
