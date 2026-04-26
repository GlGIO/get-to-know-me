import Image from "next/image";
import CursorEffects from "./CursorEffects";
import ProfileChat from "./ProfileChat";
import RecruiterTools from "./RecruiterTools";
import WorkVideoPreview from "./WorkVideoPreview";
import { getRecruiterPrompt } from "@/lib/profile";
import abasteceShopImage from "@/assets/abastece_shop.png";
import checklistImage from "@/assets/checklist_screenshot.png";

export default function HomePage() {
  const recruiterPrompt = getRecruiterPrompt();
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
              <span className="hero-role">Engineer · Systems Thinker · Builder</span>
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
                  <span className="data-value">Mobile, web & backend</span>
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
              <span className="stat-label">Users, buyers & sellers supported</span>
            </div>
            <span className="stat-sep">—</span>
            <div className="stat-item">
              <span className="stat-num">
                95<span className="accent">%</span>
              </span>
              <span className="stat-label">Production time cut in core workflows</span>
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
                I like building products where the architecture, the user
                experience, and the business outcome all matter at the same
                time.
              </p>
              <p className="about-body">
                Five years shipping across e-commerce, logistics, and B2B. My
                work spans Flutter, TypeScript, and Node.js, but the common
                thread is ownership — I care about the whole system: the
                architecture, the user experience, the rollout, and the
                metrics after it ships.
              </p>
              <p className="about-body">
                I&apos;m drawn to product surfaces that cut across platforms,
                where mobile, web, backend, and operational reality all have
                to line up for the experience to work.
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
                <span className="stack-cat">Core languages</span>
                <div className="stack-tags">
                  <span>TypeScript</span>
                  <span>Dart</span>
                  <span>JavaScript</span>
                  <span>SQL</span>
                </div>
              </div>
              <div className="stack-row">
                <span className="stack-cat">Product surfaces</span>
                <div className="stack-tags">
                  <span>Flutter</span>
                  <span>React</span>
                  <span>Vue / Nuxt</span>
                  <span>Astro</span>
                </div>
              </div>
              <div className="stack-row">
                <span className="stack-cat">Services & data</span>
                <div className="stack-tags">
                  <span>Node.js</span>
                  <span>NestJS</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>
                </div>
              </div>
              <div className="stack-row">
                <span className="stack-cat">Systems & delivery</span>
                <div className="stack-tags">
                  <span>AWS Lambda</span>
                  <span>Firebase</span>
                  <span>Docker</span>
                  <span>CI/CD</span>
                  <span>Offline-first</span>
                  <span>AI Workflows</span>
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
                    <h3 className="work-title">Yandeh Product Suite</h3>
                    <span className="work-period">2025 — Present</span>
                  </div>
                  <p className="work-company">
                    <a
                      href="https://yandeh.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-company-link"
                    >
                      Yandeh
                    </a>{" "}
                    · Business Tech in Retail · $100M GMV
                  </p>
                  <p className="work-desc">
                    Product work across multiple surfaces inside the same
                    company, spanning campaign tooling, commerce experiences,
                    and newer care flows — with shared responsibility for the
                    systems that made them reliable to ship and evolve.
                  </p>
                  <div className="work-projects">
                    <div className="work-project work-project--featured">
                      <div className="work-project-featured-copy">
                        <span className="work-project-label">Midia Pro</span>
                        <p className="work-project-desc">
                          Architected and shipped a workflow that turned
                          campaign inputs into promotion-ready assets inside
                          the core platform, reducing production time by 95%
                          and making iteration much faster for commercial
                          teams.
                        </p>
                      </div>
                      <WorkVideoPreview
                        src="https://static-b2b.yandeh.com.br/tabloide_maker/videos/midia-pro-mkt.mp4"
                        title="Midia Pro video"
                      />
                    </div>
                    <div className="work-project work-project--secondary">
                      <span className="work-project-label">SmartCare</span>
                      <p className="work-project-desc">
                        Newer product surface in the suite, shaped as part of
                        the broader platform evolution with the same concern
                        for reusable foundations, consistent flows, and room
                        to scale.
                      </p>
                    </div>
                    <div className="work-project work-project--secondary">
                      <div className="work-split">
                        <div className="work-split-copy">
                          <span className="work-project-label">
                            Abastece Shop
                          </span>
                          <p className="work-project-desc">
                            Commerce-facing app work tied to the wider retail
                            operation, with focus on dependable customer flows
                            and product structure that could keep pace with
                            business growth.
                          </p>
                        </div>
                        <div className="work-side-media">
                          <a
                            href="https://play.google.com/store/apps/details?id=br.com.yandeh.compras&hl=pt_BR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-shot-link"
                            aria-label="Abrir Abastece Shop na Play Store"
                          >
                            <Image
                              src={abasteceShopImage}
                              alt="Screenshot do app Abastece Shop"
                              className="work-shot-image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span>TypeScript</span>
                    <span>Nuxt</span>
                    <span>Flutter</span>
                    <span>AI Agents</span>
                  </div>
                </div>
              </div>

              <div className="work-item">
                <span className="work-num">02</span>
                <div className="work-body">
                  <div className="work-top">
                    <h3 className="work-title">Seller App</h3>
                    <span className="work-period">2024 — 2025</span>
                  </div>
                  <p className="work-company">
                    <a
                      href="https://gruppe.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-company-link"
                    >
                      Gruppe
                    </a>{" "}
                    · Software House · 50 logistics clients
                  </p>
                  <p className="work-desc">
                    Built and maintained a seller-facing CRM handling 100+
                    orders/day and over $1M/month in operations. Improved the
                    system from both sides: product behavior for operators and
                    backend foundations that cut infrastructure costs by 30%
                    and made complex pricing logic possible.
                  </p>
                  <div className="work-tags">
                    <span>Node.js</span>
                    <span>AWS Lambda</span>
                    <span>Flutter</span>
                    <span>NoSQL</span>
                    <span>Rules Engine</span>
                  </div>
                </div>
              </div>

              <div className="work-item">
                <span className="work-num">03</span>
                <div className="work-body">
                  <div className="work-split">
                    <div className="work-split-copy">
                      <div className="work-top">
                        <h3 className="work-title">Logi360 - Checklist</h3>
                      </div>
                      <p className="work-company">
                        <a
                          href="https://www.tecadilabs.com.br/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-company-link"
                        >
                          Tecadi Labs
                        </a>{" "}
                        · Logistics · 300K+ m² warehousing
                      </p>
                      <p className="work-desc">
                        Delivered an offline-first checklist platform used in
                        100+ daily field operations, with configurable
                        templates, resilient sync, and a reusable white-label
                        structure. Integrated Google ML Kit to support cargo
                        inspections and cut manual verification time by 75%.
                      </p>
                    </div>
                    <div className="work-side-media">
                      <span className="work-period work-period--stacked">
                        2023 — 2024
                      </span>
                      <a
                        href="https://play.google.com/store/apps/details?id=br.com.tecadilabs.checklist_app&hl=pt_BR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-shot-link work-shot-link--wide"
                        aria-label="Abrir Logi360 Checklist na Play Store"
                      >
                        <Image
                          src={checklistImage}
                          alt="Screenshot do app Logi360 Checklist"
                          className="work-shot-image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="work-tags">
                    <span>Flutter</span>
                    <span>ML Kit</span>
                    <span>Offline-first</span>
                    <span>Clean Architecture</span>
                    <span>White-label</span>
                  </div>
                </div>
              </div>

              <div className="work-item">
                <span className="work-num">04</span>
                <div className="work-body">
                  <div className="work-top">
                    <h3 className="work-title">GASS App</h3>
                    <span className="work-period">2021 — 2023</span>
                  </div>
                  <p className="work-company">
                    <a
                      href="https://sistemagass.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-company-link"
                    >
                      GASS
                    </a>{" "}
                    · Restaurant Management Consultancy
                  </p>
                  <p className="work-desc">
                    Built a Flutter app that consolidated 60+ management tools
                    into one experience for 200+ B2B clients. Used no-code
                    MVPs to validate new workflows before moving the best ones
                    into the product roadmap, and supported adoption by
                    training consultants on the rollout.
                  </p>
                  <div className="work-tags">
                    <span>Flutter</span>
                    <span>Firebase</span>
                    <span>No-code MVPs</span>
                    <span>Enablement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI BRIEFING — for recruiters */}
        <section className="section" id="ai-briefing">
          <div className="section-inner reveal">
            <div className="section-header">
              <span className="section-num">005</span>
              <span className="section-title">AI Briefing</span>
            </div>
            <p className="rt-lead">
              Got a JD? Drop my full profile into your AI of choice and ask for
              a fit assessment. No install, no signup.
            </p>
            <p className="rt-body">
              The briefing is auto-generated from{" "}
              <a
                href="/api/profile.md"
                target="_blank"
                rel="noopener noreferrer"
                className="rt-link"
              >
                /api/profile.md
              </a>
              . Copy it or open it pre-filled in ChatGPT or Claude — paste
              your role description right after, and the AI will tell you
              whether to reach out.
            </p>
            <RecruiterTools prompt={recruiterPrompt} />
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section--contact" id="contact">
          <div className="section-inner reveal">
            <div className="section-header">
              <span className="section-num">006</span>
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
