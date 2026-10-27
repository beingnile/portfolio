'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <main className="min-h-screen max-w-4xl mx-auto bg-white text-black font-mono border-x border-black">
      {/* Header Section */}
      <header className="border-b border-black px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">NILE ODHIAMBO OKOMO</h1>
        <p className="text-lg mb-6">
          Backend &amp; Application Security Engineer
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
          <p>
            <span className="font-bold">cv:</span>{' '}
            <a
              href="/Nile_Okomo_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Nile_Okomo_CV.pdf
            </a>
          </p>
          <p>
            <span className="font-bold">based:</span> Kenya (remote, UTC+3)
          </p>
        </div>
      </header>

      {/* Profile Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">/profile</h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Hey, I&apos;m Nile. I write backends, mostly the parts that move
            money and talk to routers, and then I go looking for the
            holes in them.
          </p>
          <p>
            I founded NetBill in February 2025, billing and router provisioning
            for small ISPs in Kenya. 115 businesses have signed up so far. I
            also freelance for StrataxIQ, building backends for CRM, ERP,
            device management and guest WiFi products. Until October
            2026 I built event ticketing on M-Pesa for Zuka, and I still help
            out there with occasional maintenance.
          </p>
          <p>
            NetBill is stable and needs a few hours a week, so a new role would
            be my main focus. I&apos;m looking for application security or
            security engineering roles, full-time or contract, preferably
            remote. If that&apos;s
            you, email me. The bugs I&apos;ve learned the most from are{' '}
            <a href="#bugs" className="underline">
              at the bottom of this page
            </a>
            .
          </p>
          <p>Away from the keyboard: guitar, music and chess.</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">/work</h2>
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
                • Audited my own payment flows and fixed a webhook
                authentication bypass, a payout double-send race and a
                client-controlled payout amount (details below)
              </li>
              <li>• 650+ automated tests, with a regression test per fix</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">
                Backend Engineer (Freelance) -{' '}
                <a
                  href="https://strataxiq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  StrataxIQ
                </a>
              </h3>
              <span className="text-xs">03/2026 – Present</span>
            </div>
            <p className="text-sm mb-3">Remote</p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • <span className="font-bold">Device management:</span> Go
                backend for Android and iOS device management. Wrote the Apple
                MDM protocol server and a tamper-evident audit log whose hash
                chain is verified every hour
              </li>
              <li>
                • <span className="font-bold">Sales CRM:</span> Frappe backend
                for a telecom reseller. Added fail-closed HMAC on webhooks,
                closed a SQL injection vector in analytics filters and removed
                every RBAC kill switch
              </li>
              <li>
                • <span className="font-bold">Guest WiFi SaaS:</span> Flask and
                FreeRADIUS backend. Fixed open redirects, SSTI and SSRF, and
                made RADIUS clients send Message-Authenticator
              </li>
              <li>
                • <span className="font-bold">B2B commerce ERP:</span> ERPNext
                backend, from quote to invoice. Swapped Administrator access
                for a scoped service account, with tests proving what it cannot
                do
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
              <span className="text-xs">08/2025 – 10/2026</span>
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
              <li>• Still do occasional maintenance</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">Freelance Developer - Tweeps</h3>
              <span className="text-xs">01/2024 – 02/2025</span>
            </div>
            <p className="text-sm mb-3">
              Local fast food restaurant | React, Next.js, Flask
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Their go-to person for anything technical
              </li>
              <li>
                • Built their website, then an ordering platform with order
                tracking, an admin dashboard and staff management
              </li>
              <li>• Built a payment dashboard for the business</li>
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
            <p className="text-sm mb-3">Remote</p>
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

      {/* Tech Stack Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">/stack</h2>
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
              Python (Flask, FastAPI, Django), Go, Node.js, Express, Frappe / ERPNext,
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

      {/* Projects Section */}
      <section className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">/projects</h2>
        <div className="space-y-6">
          {/* Sheaf */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(expandedProject === 'sheaf' ? null : 'sheaf')
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'}{' '}
              <a
                href="https://sheaf.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={(e) => e.stopPropagation()}
              >
                Sheaf
              </a>{' '}
              - Social Commerce for SMEs (in development and testing)
            </button>
            {expandedProject === 'sheaf' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  Post a product once and sell it on WhatsApp, Facebook and
                  Instagram. Customers pay by M-Pesa straight into the
                  merchant&apos;s own account; merchants pay a monthly
                  subscription.
                </p>
                <p>
                  <span className="font-bold">Stack:</span> Flask, M-Pesa
                  Daraja (STK Push), Meta Graph API, Africa&apos;s Talking
                </p>
                <p>
                  Before the switch to subscriptions, Sheaf settled merchants
                  itself. I hardened callback authentication there and fixed a
                  settlement step that marked orders paid before the payout was
                  confirmed.
                </p>
              </div>
            )}
          </div>

          {/* Coffee Beans */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(expandedProject === 'coffee' ? null : 'coffee')
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'}{' '}
              <a
                href="https://coffeebeans.tweeps.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={(e) => e.stopPropagation()}
              >
                Coffee Beans
              </a>{' '}
              - Hospitality Management System (in development)
            </button>
            {expandedProject === 'coffee' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  Inventory, procurement, POS, accommodation and tax reporting
                  for hotels and restaurants, built with an accountant who
                  wrote the internal controls spec.
                </p>
                <p>
                  <span className="font-bold">Stack:</span> Django, PostgreSQL
                </p>
                <p>
                  Role-based access control, maker-checker approvals and an
                  immutable audit trail are built in from the start. Each hotel
                  gets its own deployment and database.
                </p>
              </div>
            )}
          </div>

          {/* Hooma */}
          <div className="border border-black">
            <button
              onClick={() =>
                setExpandedProject(expandedProject === 'hooma' ? null : 'hooma')
              }
              className="w-full p-4 text-left font-bold hover:bg-black hover:text-white transition-none text-sm"
            >
              {'>'}{' '}
              <a
                href="https://fikisha.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={(e) => e.stopPropagation()}
              >
                Hooma
              </a>{' '}
              - Parcel Sending Platform (a friend&apos;s project)
            </button>
            {expandedProject === 'hooma' && (
              <div className="p-4 border-t border-black bg-white text-sm space-y-2">
                <p>
                  A friend&apos;s platform for sending parcels through bus
                  companies. I contributed phone sign-in with SMS password
                  reset, bus company offices and waybill numbers, and private
                  storage for identity documents.
                </p>
                <p>
                  <span className="font-bold">Stack:</span> Laravel
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
              - Church Management System, pro bono (05/2025 – 07/2025)
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
        <h2 className="text-2xl font-bold mb-6">/leadership</h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">
                Volunteer -{' '}
                <a
                  href="https://github.com/GDG-Kisii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GDG Kisii
                </a>
              </h3>
              <span className="text-xs">10/2021 – 10/2025</span>
            </div>
            <ul className="text-sm space-y-1 ml-4">
              <li>
                • Helped the organisers run Hacktoberfest, DevFest Western
                Kenya and hands-on workshops
              </li>
            </ul>
          </div>
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
        <h2 className="text-2xl font-bold mb-6">/writing</h2>
        <div className="space-y-4 text-sm">
          <p>
            <span className="font-bold">Medium (01/2022 – Present)</span>
          </p>
          <p>
            A public pentesting series of 97+ articles, written as I learn.
            Practical first, theory where it earns its place.
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
        <h2 className="text-2xl font-bold mb-6">/education</h2>
        <div className="flex justify-between items-start text-sm">
          <p>
            <span className="font-bold">BSc Electronics</span> - University
            of Eastern Africa, Baraton
          </p>
          <span className="text-xs">Expected 2027</span>
        </div>
      </section>

      {/* Bugs Section */}
      <section id="bugs" className="border-b border-black px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">/bugs-i-learned-from</h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            My own M-Pesa webhook trusted the CF-Connecting-IP header, but the
            origin server was reachable directly. Anyone who found it could
            send NetBill a fake &quot;payment received&quot;. I fixed it, added
            a regression test, and kept digging. I found a payout that could
            be sent twice, and another whose amount came straight from the
            request.
          </p>
          <p>
            RouterOS has its own sense of humour. The one-line onboarding
            command failed with &quot;No such item&quot; on factory-fresh
            routers, and I ended up rewriting every generated script without a
            single {'{ }'} block.
          </p>
          <p>
            Riot, my music streaming platform, isn&apos;t out yet, but
            reviewing it like an attacker would, I found that anyone could
            register as an admin.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-8 py-12 text-center text-xs border-t border-black">
        <p>built on a tonne of coffee and zero trust</p>
        <p className="mt-2">© 2026 nile odhiambo okomo</p>
      </footer>
    </main>
  )
}
