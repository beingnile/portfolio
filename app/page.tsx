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
          Backend Engineer / Application Security
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
            I build backends for payment, network and device management
            systems, and I spend a lot of my time trying to break them.
          </p>
          <p>
            I run NetBill, a billing and router provisioning platform for small
            ISPs, and work as a freelance backend engineer at StrataxIQ and
            Zuka. Payments run on M-Pesa, routers talk RADIUS, and every
            webhook is assumed hostile until proven otherwise.
          </p>
          <p>
            I write a public pentesting series on Medium: Hack The Box
            machines, privilege escalation, SQL injection, CVSS and MITRE
            ATT&amp;CK. Looking for application security and security
            engineering roles.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /stack</h2>
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-bold mb-2">Security</p>
            <p className="ml-4">
              Web app testing (OWASP Top 10), Burp Suite, Nmap, Metasploit,
              Linux privilege escalation, auth and session design, RBAC,
              webhook and payment security, deployment hardening
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Backend</p>
            <p className="ml-4">
              Python (Flask, FastAPI), Go, Node.js, Express, Frappe / ERPNext,
              Celery
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Databases & Caching</p>
            <p className="ml-4">
              MySQL, PostgreSQL, Redis, SQLite, Elasticsearch
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Networking</p>
            <p className="ml-4">
              RADIUS / FreeRADIUS, MikroTik RouterOS, captive portals,
              Cloudflare, Nginx
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Payments</p>
            <p className="ml-4">
              M-Pesa Daraja (STK Push, B2C, C2B), Paystack
            </p>
          </div>
          <div>
            <p className="font-bold mb-2">Tools & DevOps</p>
            <p className="ml-4">
              Docker, systemd, GitHub Actions, Linux, Bash
            </p>
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
                Founder & Lead Engineer -{' '}
                <a
                  href="https://netbill.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  NetBill
                </a>
              </h3>
              <span className="text-xs">02/2025 – Present</span>
            </div>
            <p className="text-sm mb-3">
              ISP billing & MikroTik provisioning | Flask, MySQL, Redis, Celery,
              RADIUS
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Built and run a platform that lets small ISPs onboard routers,
                sell plans and collect payments; 115 businesses registered
              </li>
              <li>
                • One-command MikroTik onboarding that works behind
                carrier-grade NAT: routers register, pull config and heartbeat
                over outbound connections only
              </li>
              <li>
                • Router API passwords and RADIUS secrets encrypted at rest
              </li>
              <li>
                • Audited my own payment flows: found and fixed a critical
                M-Pesa webhook authentication bypass (spoofable
                CF-Connecting-IP on a directly reachable origin), a payout
                double-send race, and a payout amount read from
                attacker-controlled input
              </li>
              <li>• 650+ automated tests, with a regression test per fix</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">Backend Engineer (Freelance) - StrataxIQ</h3>
              <span className="text-xs">03/2026 – Present</span>
            </div>
            <p className="text-sm mb-3">Remote</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • <span className="font-bold">Quik-MDM:</span> multi-tenant
                Android and iOS device management in Go. Implemented the Apple
                MDM protocol server (check-in, command queue, push certs)
                alongside Google&apos;s Android Management API; remote lock and
                wipe, per-customer access control, audit log. Hardened
                deployment with a non-root 31.5 MB container and a systemd unit
                with a syscall filter and read-only filesystem
              </li>
              <li>
                • <span className="font-bold">TECCC:</span> RBAC across a
                Frappe CRM so agents only touch records they own or are
                assigned; ran a permission sweep that closed missing checks on
                lead history, conversion and pipeline endpoints
              </li>
              <li>
                • <span className="font-bold">Footfall:</span> guest WiFi SaaS
                backend with FreeRADIUS delegating auth and accounting to the
                API; Google OAuth, email/SMS OTP and voucher logins for
                MikroTik, UniFi and Meraki
              </li>
              <li>
                • <span className="font-bold">b2bstore (current):</span>{' '}
                Frappe / ERPNext backend for a telecom B2B ERP: portal sessions,
                catalog and quote-to-quotation flow
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">
                Backend Engineer (Freelance) -{' '}
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
              Event ticketing with installment payments | Flask, MySQL, Redis,
              Celery, Elasticsearch
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • M-Pesa STK Push collections and B2C payouts, with KYC checks
                before organisers can withdraw
              </li>
              <li>
                • Redis locks against double booking; HMAC-signed QR codes
                against ticket forgery
              </li>
              <li>
                • JWT with refresh tokens, Google OAuth, rate limiting and
                schema validation; 260 automated tests
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
                • Built a therapy booking platform with Node.js and Express in
                a 15-person agile team
              </li>
              <li>
                • Wrote the software requirements specification the team built
                against; refactored the first release
              </li>
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
                • User acceptance and API testing with Postman; test protocols,
                API docs and user manuals
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /projects</h2>
        <div className="space-y-6">
          {/* Riot */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(expandedProject === 'riot' ? null : 'riot')
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'} Riot - Music Streaming Platform (unreleased)
            </button>
            {expandedProject === 'riot' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  Streaming platform where artists get paid directly, with
                  distribution and sync licensing built in.
                </p>
                <p>
                  <span className="font-bold">Stack:</span> FastAPI, React,
                  PostgreSQL, JWT
                </p>
                <p>
                  Pre-launch security review found and fixed a privilege
                  escalation that let any user register as an admin, and an
                  upload endpoint that skipped input validation.
                </p>
              </div>
            )}
          </div>

          {/* Sheaf */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(expandedProject === 'sheaf' ? null : 'sheaf')
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'} Sheaf - Social Commerce for SMEs (unreleased)
            </button>
            {expandedProject === 'sheaf' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  Post a product once and sell it on WhatsApp, Facebook and
                  Instagram. Customers pay by M-Pesa; merchants are settled
                  daily.
                </p>
                <p>
                  <span className="font-bold">Stack:</span> Flask, M-Pesa
                  Daraja (STK Push, B2C), Meta Graph API, Africa&apos;s Talking
                </p>
                <p>
                  Hardened callback authentication and fixed a settlement step
                  that marked orders paid before the payout was confirmed.
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
                  Church management application with an admin dashboard for
                  events, leadership and member engagement.
                </p>
                <p>
                  <span className="font-bold">Features:</span> Event
                  management, appointment booking, prayer request submission,
                  member dashboard.
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
                Community Manager -{' '}
                <a
                  href="https://spaceyatech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  SpaceYaTech
                </a>
              </h3>
              <span className="text-xs">06/2022 – 04/2023</span>
            </div>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Taught data structures and algorithms to 300+ developers
                through live coding and assignments
              </li>
              <li>
                • Ran Discord and Twitter engagement and organised Google I/O
                Extended events
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
            <span className="font-bold">Medium (01/2022 – Present)</span>
          </p>
          <p>
            A 97-part public pentesting series, written as I learn. Practical
            first, theory where it earns its place.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-bold">Topics covered:</p>
            <ul className="ml-4 space-y-1">
              <li>• Hack The Box walkthroughs with written pentest reports</li>
              <li>• Privilege escalation and post-exploitation</li>
              <li>• SQL injection and the OWASP Top 10</li>
              <li>• CVSS scoring, MITRE ATT&amp;CK and OPSEC</li>
              <li>• Nmap, Burp Suite, Shodan, Metasploit</li>
            </ul>
          </div>
          <p className="mt-4">
            <span className="font-bold">Currently training on:</span>{' '}
            pwn.college and PortSwigger Web Security Academy
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">$ /education</h2>
        <div className="flex justify-between items-start text-sm">
          <p>
            <span className="font-bold">BSc Electronics</span> - University
            of Eastern Africa, Baraton
          </p>
          <span className="text-xs">Expected 2027</span>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-8 py-12 text-center text-xs border-t border-black">
        <p>built with spite for unemployment</p>
        <p className="mt-2">© 2026 nile odhiambo okomo</p>
      </footer>
    </main>
  )
}
