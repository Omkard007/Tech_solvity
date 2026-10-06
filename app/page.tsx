'use client';

import { useState } from 'react';
import Image from 'next/image';

const PROJECT_NAME = 'Tech_solvity';
const WHATSAPP_URL =
  'https://wa.me/917888124630?text=Hi%20I%27m%20interested%20in%20joining%20your%20team%20for%20the%20construction%20project.';

const team = [
  { name: 'Om Bhaltilak', course: 'Computer Engineering', initials: 'OB', photo: '/images/om%20bhaltilak.jpeg ' },
  { name: 'Omkar Dhumal', course: 'Computer Engineering', initials: 'OD', photo: '/images/omkar%20dhumal.jpeg' },
  {
    name: 'Padmakar Bagade',
    course: 'Artificial Intelligence & Data Science',
    initials: 'PB',
    photo: '/images/padmakar%20bagade.jpeg',
  },
  { name: 'Rushi Khalate', course: 'Computer Engineering', initials: 'RK', photo: '/images/rushi%20khalate.jpeg' },
  { name: 'Shantanu Mhalaskar', course: 'Computer Engineering', initials: 'SM', photo: '/images/shantanu%20mhalaskar.jpeg' },
];

const problemAreas = [
  { number: '01', title: 'Projects', copy: 'Progress across multiple active sites.' },
  { number: '02', title: 'Materials', copy: 'Deliveries, shortages and changing prices.' },
  { number: '03', title: 'People', copy: 'Labour attendance and subcontractor tasks.' },
  { number: '04', title: 'Costs', copy: 'Expenses, billing and payments.' },
];

const audiences = [
  'Small builders',
  'Civil contractors',
  'Renovation specialists',
  'Interior contractors',
  'Site supervisors',
  'Small construction firms',
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label={`${PROJECT_NAME} home`}>
            <span>{PROJECT_NAME}</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#problem" onClick={() => setMenuOpen(false)}>The problem</a>
            <a href="#case-study" onClick={() => setMenuOpen(false)}>Case study</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Our team</a>
            <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Join our team <Arrow /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="kicker"><span className="kicker-dot" /> INNOVATION CHALLENGE <i /> CASE STUDY</p>
            <h1>Making construction work <em>easier to see.</em></h1>
            <p className="hero-intro">
              We’re looking at a practical challenge: helping small contractors keep a clearer view of projects, materials, labour and costs.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Join our team <Arrow /></a>
              <a className="text-link" href="#problem">A closer look <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-meta"><span>CASE STUDY</span><span>8–12 WEEKS</span><span>SDG 9</span></div>
          </div>
          <div className="hero-art" aria-label="Illustration of a construction site with project information gathered in one place" role="img">
            <div className="art-sun" />
            <div className="art-caption"><span>THE CHALLENGE</span><strong>Many sites.<br />Scattered updates.</strong></div>
            <svg className="construction-art" viewBox="0 0 620 450" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M0 357.5H620" stroke="#A8C5D5" strokeWidth="2" />
              <path d="M45 357V192H264V357" fill="#E9F3F7" stroke="#7EA1B6" strokeWidth="3" />
              <path d="M73 357V221H238V357" stroke="#A8C0CD" strokeWidth="2" />
              <path d="M73 263H238M73 306H238M127 221V357M183 221V357" stroke="#A8C0CD" strokeWidth="2" />
              <path d="M32 192L155 122L278 192" fill="#D4E6EE" stroke="#7EA1B6" strokeWidth="3" />
              <path d="M285 357V116H522V357" fill="#F2F7F9" stroke="#7EA1B6" strokeWidth="3" />
              <path d="M310 147H498M310 194H498M310 241H498M310 288H498M365 116V357M429 116V357" stroke="#A8C0CD" strokeWidth="2" />
              <path d="M269 116H556M310 99H525M334 81H499" stroke="#446A82" strokeWidth="4" strokeLinecap="round" />
              <path d="M401 81V55H485V81" stroke="#446A82" strokeWidth="4" />
              <path d="M493 357V279H549V357" fill="#E0EDF2" stroke="#7EA1B6" strokeWidth="3" />
              <path d="M504 296H538M504 316H538M504 336H538" stroke="#A8C0CD" strokeWidth="2" />
              <path d="M30 357L77 314L106 328L153 290L202 329L242 300L288 357" fill="#DCEAF0" />
              <path d="M170 357L206 323L237 344L269 315L306 357" fill="#C7DCE6" />
              <rect x="112" y="326" width="23" height="31" rx="2" fill="#D8A66A" />
              <rect x="143" y="334" width="25" height="23" rx="2" fill="#E5BE8C" />
              <path d="M98 357V317H113V357M91 317H120" stroke="#446A82" strokeWidth="3" />
              <path d="M0 380H620" stroke="#D6E5EC" strokeWidth="46" />
              <path d="M0 380H620" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="16 14" />
              <g><circle cx="418" cy="162" r="24" fill="#2B627D"/><path d="M418 174C418 174 407 162 407 155.5C407 149.7 411.9 145 418 145C424.1 145 429 149.7 429 155.5C429 162 418 174 418 174Z" fill="white"/><circle cx="418" cy="155" r="3.5" fill="#2B627D"/></g>
            </svg>
            <div className="art-note"><span className="note-spark">✳</span><span><strong>Progress · labour · materials</strong><small>Updates can live in many places</small></span></div>
          </div>
        </section>

        <section className="problem-section section-pad" id="problem">
          <div className="shell">
            <div className="section-heading reveal">
              <p className="eyebrow">THE PROBLEM, IN BRIEF</p>
              <h2>Good work gets harder<br className="desktop-break" /> when the details are scattered.</h2>
              <p className="section-intro">
                Small contractors often juggle several sites with limited staff. Progress, labour, materials, expenses and customer updates end up across chats, calls, spreadsheets and paper—leaving no clear, live picture of each job.
              </p>
            </div>
            <div className="problem-grid">
              {problemAreas.map((area, index) => (
                <article className="problem-card reveal" key={area.title} style={{ animationDelay: `${index * 80}ms` }}>
                  <span className="card-number">{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                  <span className="card-line" />
                </article>
              ))}
            </div>
            <div className="impact-strip reveal">
              <span className="impact-label">THE RIPPLE EFFECT</span>
              <p>Missed updates <b>→</b> shortages, idle labour and rework <b>→</b> delays and cost overruns.</p>
            </div>
          </div>
        </section>

        <section className="context-section section-pad">
          <div className="shell context-layout">
            <div className="context-copy reveal">
              <p className="eyebrow">WHO IT AFFECTS</p>
              <h2>A familiar challenge across small construction teams.</h2>
              <p className="section-intro">It can touch every stage—from quotation and procurement to site work, billing and completion. The owner-contractor often carries the coordination between all of them.</p>
            </div>
            <div className="audience-list reveal">
              {audiences.map((audience, i) => <div className="audience-item" key={audience}><span>0{i + 1}</span>{audience}<b aria-hidden="true">↗</b></div>)}
            </div>
          </div>
        </section>

        <section className="case-section section-pad" id="case-study">
          <div className="shell case-layout">
            <div className="case-copy reveal">
              <p className="eyebrow">A REAL-WORLD CASE STUDY</p>
              <h2>Three renovation sites.<br />One very full day.</h2>
              <p className="section-intro">Ramesh Chavan of Chavan &amp; Sons Constructions manages three residential renovation projects in Katraj and Kothrud, Pune. Much of his day goes to travelling between sites, sorting material shortages, coordinating workers and checking progress.</p>
              <div className="case-location"><span>⌖</span> PUNE, MAHARASHTRA</div>
            </div>
            <div className="case-board reveal">
              <div className="board-top"><span>ONE DAY ON SITE</span><span className="board-dot" /> <small>3 active projects</small></div>
              <div className="site-stack">
                <div className="site-row"><span className="site-index">01</span><span className="site-bar"><i style={{ width: '72%' }} /></span><span className="site-type">KATRAJ</span></div>
                <div className="site-row"><span className="site-index">02</span><span className="site-bar"><i style={{ width: '56%' }} /></span><span className="site-type">KATRAJ</span></div>
                <div className="site-row"><span className="site-index">03</span><span className="site-bar"><i style={{ width: '83%' }} /></span><span className="site-type">KOTHRUD</span></div>
              </div>
              <div className="board-bottom"><span>Progress</span><span>Labour</span><span>Materials</span><span>Expenses</span><span>Payments</span></div>
              <div className="board-foot">Updates spread across calls, chats &amp; paper <span>↗</span></div>
            </div>
          </div>
        </section>

        <section className="scale-section">
          <div className="shell scale-layout reveal">
            <div className="scale-stat"><strong>90%<sup>+</sup></strong><span>THE CASE STUDY&apos;S NATIONAL CONTEXT</span></div>
            <p>of India’s 1.45 million registered construction companies and 1.03 million unincorporated enterprises are micro and small contractors, as cited in the case study.</p>
            <div className="sdg-card"><span>ALIGNED SDG</span><strong>09</strong><small>Industry, Innovation<br />and Infrastructure</small></div>
          </div>
        </section>

        <section className="team-section section-pad" id="team">
          <div className="shell">
            <div className="team-heading reveal"><div><p className="eyebrow">THE PEOPLE BEHIND THE CHALLENGE</p><h2>Meet the team.</h2></div><p>Five people working on a real-world construction problem.</p></div>
            <div className="team-grid">
              {team.map((member, index) => (
                <article className="member-card reveal" key={member.name} style={{ animationDelay: `${index * 70}ms` }}>
                  <div className={`photo-slot photo-tone-${index + 1}`}>
                    {member.photo ? <Image className="member-photo" src={member.photo} alt={member.name} fill sizes="(max-width: 700px) 100vw, 220px" /> : <span className="photo-initials">{member.initials}</span>}
                    {!member.photo && <span className="photo-caption">PHOTO</span>}
                  </div>
                  <div className="member-details"><h3>{member.name}</h3><p>{member.course}</p></div>
                </article>
              ))}
            </div>
            <p className="photo-help">Each team member is displayed on a separate mobile row.</p>
          </div>
        </section>

        <section className="join-section" id="join">
          <div className="shell join-panel reveal">
            <div className="join-copy"><p className="eyebrow">WANT TO CONTRIBUTE?</p><h2>Let’s make the<br />everyday run clearer.</h2><p>We’re looking for people interested in solving a practical problem faced by small construction contractors.</p></div>
            <div className="join-action"><a className="button button-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Join us on WhatsApp <Arrow /></a><span>Have an idea or a skill to share? Let’s talk.</span></div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="shell footer-inner"><a className="brand" href="#top"><span>{PROJECT_NAME}</span></a><p>Innovation Challenge · 2026<br />Solving real-world construction problems through technology.</p><a className="footer-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer">+91 78881 24630 <Arrow /></a></div></footer>
    </>
  );
}
