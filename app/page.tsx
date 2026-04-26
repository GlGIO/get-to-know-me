import CursorEffects from "./CursorEffects";
import ProfileChat from "./ProfileChat";

export default function HomePage() {
  return (
    <>
      <div className="cursor" aria-hidden="true"></div>
      <div className="dot-grid" aria-hidden="true"></div>

      <header className="nav-wrap">
        <nav>
          <a href="/" className="nav-logo">
            GA<span className="accent">.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a
              href="https://github.com/GlGIO"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:sandrini.dev@gmail.com">Email</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-meta">
              <span className="hero-index">001</span>
              <span className="hero-role">Engineer · Builder · Maker</span>
            </div>

            <h1 className="hero-name">
              <span className="hero-line">GIOVANNI</span>
              <span className="hero-line">
                SANDRINI<span className="accent">.</span>
              </span>
            </h1>

            <div className="hero-bottom">
              <div className="hero-data">
                <div className="data-item">
                  <span className="data-label">Location</span>
                  <span className="data-value">Itajaí, BR</span>
                </div>
                <div className="data-div"></div>
                <div className="data-item">
                  <span className="data-label">Focus</span>
                  <span className="data-value">Full-stack & AI</span>
                </div>
                <div className="data-div"></div>
                <div className="data-item">
                  <span className="data-label">Experience</span>
                  <span className="data-value">5+ years</span>
                </div>
              </div>
              <a href="#about" className="hero-scroll" aria-label="Scroll down">
                <span>Scroll</span>
                <svg
                  width="14"
                  height="22"
                  viewBox="0 0 14 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <line
                    x1="7"
                    y1="0"
                    x2="7"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <polyline
                    points="1,12 7,19 13,12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <div className="stats-strip">
          <div className="stats-inner">
            <div className="stat-item">
              <span className="stat-num">
                $100M<span className="accent">+</span>
              </span>
              <span className="stat-label">Annual GMV supported</span>
            </div>
            <span className="stat-sep">—</span>
            <div className="stat-item">
              <span className="stat-num">
                10K<span className="accent">+</span>
              </span>
              <span className="stat-label">Buyers & sellers reached</span>
            </div>
            <span className="stat-sep">—</span>
            <div className="stat-item">
              <span className="stat-num">
                95<span className="accent">%</span>
              </span>
              <span className="stat-label">Production time cut via AI</span>
            </div>
            <span className="stat-sep">—</span>
            <div className="stat-item">
              <span className="stat-num">
                5<span className="accent">+</span>
              </span>
              <span className="stat-label">Years shipping products</span>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="section-inner reveal">
            <div className="section-header">
              <span className="section-num">002</span>
              <span className="section-title">About</span>
            </div>
            <div className="about-content">
              <p className="about-lead">
                I build things from the ground up and see them through to
                production — across mobile, web, and backend.
              </p>
              <p className="about-body">
                Five years shipping across e-commerce, logistics, and B2B. My
                work spans Flutter, TypeScript, and Node.js, but the common
                thread is ownership — I care about the whole thing: the
                architecture, the user experience, the metrics after it ships.
              </p>
              <p className="about-body">
                I&apos;m drawn to problems where the engineering and the product
                decision are the same conversation.
              </p>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="section" id="stack">
          <div className="section-inner reveal">
            <div className="section-header">
              <span className="section-num">003</span>
              <span className="section-title">Stack</span>
            </div>
            <div className="stack-rows">
              <div className="stack-row">
                <span className="stack-cat">Languages</span>
                <div className="stack-tags">
                  <span>TypeScript</span>
                  <span>Dart</span>
                  <span>JavaScript</span>
                  <span>SQL</span>
                </div>
              </div>
              <div className="stack-row">
                <span className="stack-cat">Mobile & Frontend</span>
                <div className="stack-tags">
                  <span>Flutter</span>
                  <span>React</span>
                  <span>Vue / Nuxt</span>
                  <span>Astro</span>
                </div>
              </div>
              <div className="stack-row">
                <span className="stack-cat">Backend</span>
                <div className="stack-tags">
                  <span>Node.js</span>
                  <span>NestJS</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                </div>
              </div>
              <div className="stack-row">
                <span className="stack-cat">Cloud & Infra</span>
                <div className="stack-tags">
                  <span>AWS Lambda</span>
                  <span>Firebase</span>
                  <span>Docker</span>
                  <span>CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <div className="section-inner reveal">
            <div className="section-header">
              <span className="section-num">004</span>
              <span className="section-title">Work</span>
            </div>
            <div className="work-list">
              <div className="work-item">
                <span className="work-num">01</span>
                <div className="work-body">
                  <div className="work-top">
                    <h3 className="work-title">AI Campaign Generator</h3>
                    <span className="work-period">2025 — Present</span>
                  </div>
                  <p className="work-company">
                    Yandeh · Business Tech in Retail · $100M GMV
                  </p>
                  <p className="work-desc">
                    Architected and shipped an AI-driven agentic workflow
                    embedded in the core e-commerce platform to generate
                    campaign-ready promotional images — reducing production
                    time by 95% (60 min → 3 min). Owned the payment flow
                    end-to-end across Flutter and Node.js, increasing
                    conversion by 10%.
                  </p>
                  <div className="work-tags">
                    <span>TypeScript</span>
                    <span>Nuxt</span>
                    <span>Flutter</span>
                    <span>Node.js</span>
                    <span>AI Agents</span>
                  </div>
                </div>
              </div>

              <div className="work-item">
                <span className="work-num">02</span>
                <div className="work-body">
                  <div className="work-top">
                    <h3 className="work-title">Logistics CRM at Scale</h3>
                    <span className="work-period">2024 — 2025</span>
                  </div>
                  <p className="work-company">
                    Gruppe · Software House · 50 logistics clients
                  </p>
                  <p className="work-desc">
                    Built and maintained a CRM processing 100+ orders/day and
                    $1M+/month. Engineered a serverless Node.js backend that
                    cut infrastructure costs by 30%. Translated complex
                    logistics requirements into a technical roadmap — 100%
                    on-time delivery for every milestone.
                  </p>
                  <div className="work-tags">
                    <span>Node.js</span>
                    <span>AWS Lambda</span>
                    <span>Flutter</span>
                    <span>NoSQL</span>
                  </div>
                </div>
              </div>

              <div className="work-item">
                <span className="work-num">03</span>
                <div className="work-body">
                  <div className="work-top">
                    <h3 className="work-title">Offline-First Field Platform</h3>
                    <span className="work-period">2023 — 2024</span>
                  </div>
                  <p className="work-company">
                    Tecadi · Logistics · 300K+ m² warehousing
                  </p>
                  <p className="work-desc">
                    Delivered a mobile checklist platform running 100+ daily
                    field operations. Built for resilient offline sync in
                    low-connectivity environments. Integrated Google ML Kit for
                    real-time cargo inspections, cutting manual verification
                    time by 75%.
                  </p>
                  <div className="work-tags">
                    <span>Flutter</span>
                    <span>ML Kit</span>
                    <span>Offline-first</span>
                    <span>Clean Architecture</span>
                  </div>
                </div>
              </div>

              <div className="work-item">
                <span className="work-num">04</span>
                <div className="work-body">
                  <div className="work-top">
                    <h3 className="work-title">B2B Management Suite</h3>
                    <span className="work-period">2021 — 2023</span>
                  </div>
                  <p className="work-company">
                    GASS · Restaurant Management Consultancy
                  </p>
                  <p className="work-desc">
                    Built a Flutter app consolidating 60+ management tools into
                    a single experience for 200+ B2B clients. Delivered no-code
                    MVPs to validate new workflows quickly, then migrated the
                    best-performing solutions into the product roadmap.
                  </p>
                  <div className="work-tags">
                    <span>Flutter</span>
                    <span>Firebase</span>
                    <span>No-code MVPs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section--contact" id="contact">
          <div className="section-inner reveal">
            <div className="section-header">
              <span className="section-num">005</span>
              <span className="section-title">Contact</span>
            </div>
            <h2 className="contact-heading">
              Let&apos;s build
              <br />
              something<span className="accent">.</span>
            </h2>
            <a href="mailto:sandrini.dev@gmail.com" className="contact-email">
              sandrini.dev@gmail.com
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/GlGIO"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/giovannisandrini"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Giovanni Sandrini</span>
        <span>Built with Next.js</span>
      </footer>

      <CursorEffects />
      <ProfileChat />
    </>
  );
}
