'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white text-black font-mono">
      {/* Header Section */}
      <header className="border-b border-black px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">NILE ODHIAMBO OKOMO</h1>
        <p className="text-lg mb-6">
          Backend Engineer / Penetration Tester
        </p>

        <div className="space-y-1 text-sm">
          <p>
            <span className="font-bold">email:</span>{' '}
            <a href="mailto:okomonile3@gmail.com" className="underline">
              okomonile3@gmail.com
            </a>
          </p>
          <p>
            <span className="font-bold">github:</span>{' '}
            <a
              href="https://github.com/beingnile"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              beingnile
            </a>
          </p>
          <p>
            <span className="font-bold">linkedin:</span>{' '}
            <a
              href="https://linkedin.com/in/nile-okomo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              nile-okomo
            </a>
          </p>
          <p>
            <span className="font-bold">medium:</span>{' '}
            <a
              href="https://medium.com/@beingnile"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              beingnile
            </a>
          </p>
        </div>
      </header>

      {/* Profile Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /profile</h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Backend engineer with 2+ years building scalable web applications
            and secure payment systems. Architecting high-performance systems
            that might survive a doomsday.
          </p>
          <p>
            Actively learning offensive security through hands-on pentesting
            practice. Published 100+ Medium articles covering OWASP Top 10,
            penetration testing methodologies, HackTheBox walkthroughs, and
            ethical hacking and computer science fundamentals.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /stack</h2>
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-bold mb-2">Backend</p>
            <p className="ml-4">Python, Flask, Node.js, Express, RESTful APIs</p>
          </div>
          <div>
            <p className="font-bold mb-2">Databases & Caching</p>
            <p className="ml-4">MySQL, MongoDB, Redis</p>
          </div>
          <div>
            <p className="font-bold mb-2">Security & Systems</p>
            <p className="ml-4">
              Secure payment processing, input validation, rate limiting, RADIUS
              configuration
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Offensive Security</p>
            <p className="ml-4">
              Nmap, Burp Suite, Metasploit, Shodan, HackTheBox, OWASP Top 10
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Integrations</p>
            <p className="ml-4">
              M-Pesa Daraja API, Paystack, SMTP, payment gateway integration
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Tools & DevOps</p>
            <p className="ml-4">
              Docker, Git, Shell scripting, Postman, testing, CI/CD
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Frontend</p>
            <p className="ml-4">JavaScript, TypeScript, HTML5, CSS</p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /work</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">
                Backend Engineer -{' '}
                <a
                  href="https://zuka.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Zuka
                </a>
              </h3>
              <span className="text-xs">08/2025 – Present</span>
            </div>
            <p className="text-sm mb-3">
              Events Management & Ticketing Platform | Nairobi, Kenya (Remote)
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Architected scalable Flask backend with MySQL and Redis,
                designed to handle 7,000+ requests/second
              </li>
              <li>
                • Engineered secure M-Pesa Daraja API integration for payments,
                collections, and refunds
              </li>
              <li>
                • Implemented robust authentication with input validation and
                rate limiting
              </li>
              <li>
                • Designed RESTful API architecture with database indexing
                strategies
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">
                Software Engineer Intern -{' '}
                <a
                  href="https://hopewellcounseling.co.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Hopewell
                </a>
              </h3>
              <span className="text-xs">02/2023 – 07/2023</span>
            </div>
            <p className="text-sm mb-3">Eldoret, Kenya</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Built therapy booking platform from ground up using Node.js,
                Express, and vanilla JavaScript
              </li>
              <li>
                • Authored Software Requirements Specification document,
                improving team efficiency by 40%
              </li>
              <li>
                • Collaborated in 15-person agile team with code reviews and
                pair programming
              </li>
              <li>• Refactored codebase to improve maintainability</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">
                QA/Tech Writer -{' '}
                <a
                  href="https://growthtribe.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GrowthTribe
                </a>
              </h3>
              <span className="text-xs">11/2022 – 02/2023</span>
            </div>
            <p className="text-sm mb-3">Remote, Netherlands</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Performed User Acceptance Testing using Postman, increasing
                team productivity by 40%
              </li>
              <li>
                • Created comprehensive test plans and technical documentation
              </li>
              <li>
                • Collaborated with developers on API documentation and
                requirements analysis
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /projects</h2>
        <div className="space-y-6">
          {/* NetBill Systems */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(
                  expandedProject === 'netbill' ? null : 'netbill'
                )
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'}{' '}
              <a
                href="https://netbill.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={(e) => e.stopPropagation()}
              >
                NetBill Systems
              </a>{' '}
              - Automated WISP Billing (10/2025 – Present)
            </button>
            {expandedProject === 'netbill' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  Building automated billing system for Kenyan Wireless ISPs
                  with RADIUS-based router configuration.
                </p>
                <p>
                  <span className="font-bold">Stack:</span> Flask, Redis,
                  MySQL, M-Pesa Daraja, Paystack, RADIUS
                </p>
                <p>
                  Features: M-Pesa and Paystack payment integration, transaction
                  logging, plug-and-play configuration generator, concurrent
                  billing cycles, automated notifications, real-time payment
                  processing.
                </p>
              </div>
            )}
          </div>

          {/* Dewm Church */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(expandedProject === 'dewm' ? null : 'dewm')
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'}{' '}
              <a
                href="https://dewmchurch.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={(e) => e.stopPropagation()}
              >
                Dewm Church
              </a>{' '}
              - Church Management System (06/2025 – 07/2025)
            </button>
            {expandedProject === 'dewm' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  Full-featured church management application with admin
                  dashboard for events, leadership, and member engagement.
                </p>
                <p>
                  <span className="font-bold">Features:</span> Event creation
                  and management, automated appointment booking system, digital
                  prayer request submission, member interaction dashboard,
                  leadership oversight tools.
                </p>
              </div>
            )}
          </div>

          {/* NYC Collisions */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(
                  expandedProject === 'nyc' ? null : 'nyc'
                )
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'}{' '}
              <a
                href="https://beingnile-nyc-motor-vehicle-collisions-app-0wlu3l.streamlitapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={(e) => e.stopPropagation()}
              >
                NYC Motor Vehicle Collisions Dashboard
              </a>
            </button>
            {expandedProject === 'nyc' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  Interactive Streamlit dashboard analyzing NYPD collision data
                  with KPIs tracking injury rates and accident patterns.
                </p>
                <p>
                  <span className="font-bold">Stack:</span> Streamlit, Python,
                  NYPD data
                </p>
                <p>
                  Implemented caching mechanisms improving data retrieval
                  performance by 60%.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /leadership</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">
                Co-Founder & Technical Lead -{' '}
                <a
                  href="https://spaceyatech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  SpaceYaTech
                </a>
              </h3>
              <span className="text-xs">01/2023 – Present</span>
            </div>
            <p className="text-sm mb-3">
              Open-source community building tech leaders in Africa
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Founded and grew SpaceYaTech as a community of 5,000+ tech
                enthusiasts across Africa
              </li>
              <li>
                • Spearheaded open-source initiatives including Auditmint, a
                secure auditing framework
              </li>
              <li>
                • Organized hackathons and technical workshops for skill
                development
              </li>
              <li>
                • Mentored 50+ junior developers on backend engineering and
                offensive security
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /writing</h2>
        <div className="space-y-4 text-sm">
          <p>
            <span className="font-bold">Medium Presence (01/2022 – Present)</span>
          </p>
          <p>
            Published 100+ technical articles covering offensive security and
            computer science fundamentals. Content focuses on practical
            hands-on learning and bridging theory with application.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-bold">Topics covered:</p>
            <ul className="ml-4 space-y-1">
              <li>
                • Penetration testing methodologies and reconnaissance techniques
              </li>
              <li>
                • OWASP Top 10 vulnerabilities and secure coding practices
              </li>
              <li>
                • HackTheBox machine walkthroughs and exploitation techniques
              </li>
              <li>
                • Ethical hacking tools: Nmap, Burp Suite, Shodan, Metasploit
              </li>
              <li>• Network security fundamentals and post-exploitation</li>
              <li>
                • Bug bounty hunting approaches and vulnerability disclosure
              </li>
              <li>• Low-level programming and computer science concepts</li>
            </ul>
          </div>
          <p className="mt-4">
            <span className="font-bold">Publications:</span> Medium, MeetCyber,
            System Weakness, Python in Plain English
          </p>
          <p>
            <span className="font-bold">Readership:</span> 170+ followers
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-8 py-12 text-center text-xs border-t border-black">
        <p>built with spite for unemployment</p>
        <p className="mt-2">© 2025 nile odhiambo okomo</p>
      </footer>
    </main>
  )
}
