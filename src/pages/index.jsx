import styles from '../styles/Home.module.css';

const services = [
  { title: 'Product Strategy', copy: 'Workshop-driven roadmaps and KPI-focused planning.' },
  { title: 'Experience Design', copy: 'Evidence-based UX/UI systems for web and mobile.' },
  { title: 'Full-stack Delivery', copy: 'Modern TypeScript stacks with accessibility-first frontends.' }
];

const workHighlights = [
  { company: 'Lumen', detail: 'Marketing platform overhaul', stats: '↑ 38% signups' },
  { company: 'Aurora Bank', detail: 'Design system + app', stats: '↓ 55% design debt' }
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <p className="section-title">Mopau Studio</p>
        <h1>Digital experiences that feel inevitable.</h1>
        <p className={styles.lede}>
          Mopau is a remote-first studio helping purposeful teams ship confident, measurable change
          through research-led design and development.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="#contact">
            Start a project
          </a>
          <button className={styles.secondaryCta} type="button">
            Download deck
          </button>
        </div>
      </section>

      <section id="services" className="card">
        <p className="section-title">What we do</p>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className={`card ${styles.work}`}> 
        <p className="section-title">Selected work</p>
        <ul>
          {workHighlights.map((item) => (
            <li key={item.company}>
              <div>
                <strong>{item.company}</strong>
                <span>{item.detail}</span>
              </div>
              <span className={styles.stats}>{item.stats}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className={`card ${styles.contact}`}> 
        <p className="section-title">Let&apos;s build</p>
        <h2>Tell us about your next milestone.</h2>
        <form className={styles.form}>
          <label>
            Name
            <input type="text" placeholder="Ada Lovelace" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@company.com" required />
          </label>
          <label>
            Project Notes
            <textarea placeholder="What should we know?" rows={4} />
          </label>
          <button type="submit">Send brief</button>
        </form>
      </section>
    </>
  );
}
