import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

const title = "Beingnile's Tuner: how it was built"
const description =
  'A guitar and bass tuner that runs entirely in the browser. How the pitch detection works, the decisions behind it, and the bugs testing found.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: '/projects/tuner' },
  twitter: { title, description },
}

function Section({ name, children }: { name: string; children: ReactNode }) {
  return (
    <section className="border-b border-black px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">{name}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </section>
  )
}

function Decision({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-bold mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function Result({
  problem,
  before,
  after,
}: {
  problem: string
  before: string
  after: string
}) {
  return (
    <div className="border border-black p-4">
      <p className="font-bold mb-2">{problem}</p>
      <p>
        <span className="font-bold">before:</span> {before}
      </p>
      <p>
        <span className="font-bold">after:</span> {after}
      </p>
    </div>
  )
}

export default function TunerWriteUp() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto bg-white text-black font-mono border-x border-black">
      <header className="border-b border-black px-8 py-12">
        <p className="text-sm mb-6">
          <Link href="/" className="underline">
            {'<'} back to portfolio
          </Link>
        </p>
        <h1 className="text-4xl font-bold mb-2">BEINGNILE&apos;S TUNER</h1>
        <p className="text-lg mb-6">
          A guitar and bass tuner that runs entirely in the browser
        </p>
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-bold">live:</span>{' '}
            <a
              href="https://beingniles-tuner.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              beingniles-tuner.vercel.app
            </a>
          </p>
          <p>
            <span className="font-bold">stack:</span> JavaScript, Web Audio
            (AudioWorklet), service worker. No framework, no dependencies, no
            build step
          </p>
          <p>
            <span className="font-bold">size:</span> 16 KB gzipped
          </p>
        </div>
      </header>

      <Section name="/the-brief">
        <p>
          An accurate tuner that works offline and uses the mic. Minimal,
          reactive, fast. Later: every kind of guitar and bass, installable as
          an app, and stable on real devices.
        </p>
        <p>
          Accuracy came first, since a tuner that is fast and wrong is worse
          than none. The target was to be well inside what an ear can hear, and
          to prove it with tests rather than assume it.
        </p>
      </Section>

      <Section name="/how-a-reading-happens">
        <pre className="overflow-x-auto text-xs leading-relaxed border border-black p-4">
          {`mic, with voice processing off
  |
  v  on the audio thread
high-pass      removes rumble
50/60 Hz notch removes mains hum
low-pass       removes aliasing
decimate       to 16 kHz (8 kHz for low strings)
  |
  v  every 21 ms, spread across audio callbacks
NSDF           how well the signal matches itself
               at each possible period
peak pick      the first peak near the best one
octave check   is this really the fundamental?
refine         smoothed peak, at a multiple of the period
measure        peak power across the note's own harmonics
  |
  v
tracker        reject damaged frames, hold the octave,
               take a median, smooth adaptively
  |
  v  main thread
needle, note, "too low: tune up"`}
        </pre>
      </Section>

      <Section name="/platform-decisions">
        <Decision title="A web app, not a native one">
          <p>
            One codebase reaches every phone and laptop, needs no app store,
            and opens from a link. The cost is less control over the audio
            hardware, which came back to bite later (see /stability).
          </p>
        </Decision>
        <Decision title="No framework, no dependencies, no build step">
          <p>
            The whole interface is one screen with a few numbers on it, updated
            up to 120 times a second. A framework would add weight and a
            rendering layer between the data and the needle. Plain JavaScript
            only touches the DOM when a value changes, and moves the needle
            with a CSS transform.
          </p>
          <p>
            No dependencies also means nothing to update, and nothing to
            compromise. For a site that asks for microphone access, that
            matters.
          </p>
        </Decision>
        <Decision title="Privacy by architecture">
          <p>
            Audio is processed on the device and there is no server to send it
            to. The site sets a Content-Security-Policy that only allows its
            own origin, and a Permissions-Policy that limits the microphone to
            itself.
          </p>
        </Decision>
      </Section>

      <Section name="/capturing-audio">
        <Decision title="Voice processing off">
          <p>
            By default browsers apply echo cancellation, noise suppression and
            automatic gain to the mic. All three are built for speech and can
            filter out or distort a sustained note. The tuner asks for all of
            them to be turned off.
          </p>
        </Decision>
        <Decision title="AudioWorklet, not AnalyserNode">
          <p>
            The simple approach is to poll an AnalyserNode from the main
            thread, but then any busy moment on the page leaves gaps in the
            analysis. An AudioWorklet runs on the audio thread and sees every
            sample.
          </p>
        </Decision>
        <Decision title="The same code in the browser and in tests">
          <p>
            The engine is one file with no browser dependencies above a small
            guard, so Node can run exactly the code that ships. That is what
            made thorough accuracy testing practical.
          </p>
        </Decision>
      </Section>

      <Section name="/detecting-pitch">
        <Decision title="Why not an FFT?">
          <p>
            It is the obvious answer, and it has two problems. A 100 ms window
            gives bins 10 Hz apart, which is about 200 cents at low E, when the
            goal is under 1 cent. And the loudest frequency is often not the
            note: small mics barely pick up a low E&apos;s fundamental, so its
            harmonics dominate.
          </p>
        </Decision>
        <Decision title="Why McLeod's method">
          <p>
            Time-domain methods ask a better question: how long until the
            signal repeats? That period exists even when the fundamental is
            nearly missing. The McLeod normalised square difference function
            (NSDF) scores each candidate period from -1 to 1. Being normalised,
            it works at any volume, and the score doubles as a confidence value
            for rejecting noise.
          </p>
        </Decision>
        <Decision title="Choosing the right peak">
          <p>
            A note with period T also repeats at 2T, 3T and so on. Taking the
            highest peak would often land on a multiple, so the tuner takes the
            first peak within 93% of the best one.
          </p>
        </Decision>
        <Decision title="Decimating before analysis">
          <p>
            Comparing every sample at every lag is expensive. Nothing above
            4 kHz helps, so the signal is filtered and reduced from 48 kHz to
            16 kHz, leaving about a ninth of the work.
          </p>
        </Decision>
        <Decision title="Three rounds of accuracy, each from a failed test">
          <p>
            <span className="font-bold">1. Refinement.</span> One sample of lag
            is about 6 cents at low E even at 24 kHz, so noise could move the
            peak by a lot. The NSDF is now smoothed in proportion to the period,
            then measured at a multiple of the period, which divides what error
            remains.
          </p>
          <p>
            <span className="font-bold">2. Hann weighting.</span> A window
            holding a non-whole number of periods biases the peak, by 0.35 cents
            at 65 Hz. Weighting the window fixes that, at twice the cost per
            lag, which is why the rate came down to 16 kHz.
          </p>
          <p>
            <span className="font-bold">3. Hum notches.</span> Mains hum at
            50/60 Hz moved low E by 3 cents, and a gentle high-pass couldn&apos;t
            remove it without also cutting a 65 Hz drop C. Narrow notches could,
            since no standard guitar string sits there.
          </p>
        </Decision>
        <Decision title="A final measurement on the note's own harmonics">
          <p>
            When you tune the A string, the low E is usually still ringing, and
            that pulled the NSDF peak by 2.6 cents. The last step now climbs to
            the frequency with the most power across its first six harmonics.
            Another string only counts where its partials happen to line up
            with the note&apos;s, so it barely matters.
          </p>
        </Decision>
      </Section>

      <Section name="/the-worst-bug">
        <p>
          Small mics can make a low E read an octave high, so the engine had a
          correction: if a reading isn&apos;t near any open string but half of
          it is, use the lower one.
        </p>
        <p>
          It passed every test. An audit with harder scenarios then showed that
          a G string slackened to 165 Hz read as E2, an octave below its real
          pitch, and in tune. On a restring, that is exactly when someone relies
          on a tuner, and it would have told them to stop turning.
        </p>
        <p>
          The first fix, requiring the lower octave to be more periodic, broke
          the case the correction existed for. The one that worked asks the
          signal directly. A real low E has a small tone at half the reading,
          standing clearly above the noise beside it. A slack string has only
          noise there.
        </p>
      </Section>

      <Section name="/stability">
        <Decision title="Steadiness without lag">
          <p>
            Raw readings go through a tracker. A new reading must be confirmed
            by the next one before it appears. A median of five rejects
            outliers. Smoothing is then adaptive: heavy when a reading only
            jitters, light when it is really moving, so a held note is steady
            and a turning peg still responds.
          </p>
        </Decision>
        <Decision title="Holding the octave as a note fades">
          <p>
            Partials decay unevenly, so the strongest period can jump an octave
            halfway through a note. An octave jump is now believed only if it
            arrives with a new pluck, detected by a rise in level. Otherwise it
            is folded back.
          </p>
        </Decision>
        <Decision title="Dropouts">
          <p>
            A browser test failed once, by 2.4 cents, then passed. It would have
            been easy to call it flaky. Two explanations were measured and proved
            wrong, then running under heavy CPU load produced the same kind of
            error, at up to 80 cents: audio was being lost, and each gap corrupted
            the analysis window for up to 300 ms.
          </p>
          <p>
            Part of the cause was the tuner itself. One analysis took about
            2 ms inside a 2.67 ms audio callback on a fast machine, so a slow
            phone could overrun it. Analysis is now spread across six callbacks.
            The tracker also notices the sudden fall in confidence that a gap
            causes, and holds the reading until the damaged audio has passed.
          </p>
        </Decision>
        <Decision title="Real-life interruptions">
          <p>
            Audio from before and after a gap doesn&apos;t join up, so returning
            from the background clears the buffers. The tuner also tries to
            resume after a phone call, with a tap as the fallback. Readings
            carry a generation number, so one sent before a settings change is
            ignored.
          </p>
        </Decision>
      </Section>

      <Section name="/results">
        <p>Measured on synthetic audio, before and after the audit:</p>
        <Result
          problem="Slack string an octave above another string"
          before="1200 cents off"
          after="0.02 cents"
        />
        <Result
          problem="Tuning A with low E ringing"
          before="2.6 cents off, wandering by 4"
          after="0.02 cents, wandering by 0.15"
        />
        <Result
          problem="Simulated audio gaps, up to 85 ms"
          before="up to 12 cents, for 300 ms"
          after="0.05 cents, no disturbance"
        />
        <Result
          problem="Real browser under extreme CPU load"
          before="worst error 80 cents"
          after="worst error about 8 cents"
        />
        <p>
          Tests also require plucked strings to read within 0.5 cents with
          background noise, and a held note to stay within 0.2 cents. Guitar
          settles in under 200 ms and bass in under 350 ms.
        </p>
      </Section>

      <Section name="/every-guitar-and-bass">
        <p>
          39 tunings across electric, acoustic, classical, 7, 8, 9 and
          12-string, baritone, bass, tenor, guitalele, resonator and lap steel,
          plus chromatic modes for anything else.
        </p>
        <p>
          Adding them wasn&apos;t just a longer menu. A 5-string bass reaches
          31 Hz, and the engine stopped at 62 Hz. Low tunings now use a second
          profile: a 200 ms window to hold enough periods, at 8 kHz to keep the
          cost the same. The price is slower response, so guitars don&apos;t
          pay it.
        </p>
        <p>
          The notes around 31 to 62 Hz also collide with the hum filters, so a
          notch is dropped when a string sits within 4 Hz of it. A test runs
          every string of every tuning through the real pipeline.
        </p>
      </Section>

      <Section name="/interface">
        <p>
          The main use is looking across the room with both hands on a guitar,
          so the whole page turns green when a string is in tune. Colour is
          never the only signal: the words &quot;too low: tune up&quot; are
          there too. Entering the in-tune state takes 3 cents and leaving takes
          5, so it doesn&apos;t flicker at the boundary.
        </p>
        <p>
          It reads the string automatically. Tapping one locks onto it, and
          limits the search to a fifth either way, for a new string that is far
          off pitch. The screen stays awake while tuning.
        </p>
        <p>
          Sideways phones were broken: the gauge collapsed to nothing and Start
          couldn&apos;t be tapped. Page overflow tests had passed the whole
          time. The fix was a two-column layout, plus a test that sweeps 11
          screen sizes and fails on any overlap.
        </p>
      </Section>

      <Section name="/offline-and-installing">
        <Decision title="Cache first, versioned as a whole">
          <p>
            A service worker stores every file at install and serves from that
            cache, so it opens instantly with no network. Each release gets a
            complete new cache, which keeps files from different releases from
            mixing. An update reloads the page by itself, unless that would
            interrupt tuning.
          </p>
        </Decision>
        <Decision title="An Install button that knows the device">
          <p>
            Chrome, Edge and Samsung Internet can offer a prompt. Apple
            doesn&apos;t allow one, so iPhones get the steps instead. Desktop
            Firefox can&apos;t install web apps at all, so it gets no button,
            and still works offline in a tab.
          </p>
        </Decision>
        <Decision title="Versioning that can't be forgotten">
          <p>
            Returning visitors only get new files when the version changes, so
            a forgotten bump would silently leave them on the old release.
            package.json is now the one source of truth, npm version stamps it
            everywhere and tags the release, and a test fails if the site has
            changed since the last tag.
          </p>
        </Decision>
      </Section>

      <Section name="/how-it-was-tested">
        <p>
          <span className="font-bold">37 unit tests</span> run a synthetic
          plucked string through the real engine: harmonics, stiffness, decay,
          noise, hum, weak fundamentals, and sample rates from 16 to 192 kHz.
          Signals are seeded so that failures reproduce.
        </p>
        <p>
          <span className="font-bold">A real-browser run</span> feeds a WAV file
          to Chromium as its microphone and reads what is on screen, covering
          the path from getUserMedia to the display. It also shuts the server
          down and reloads to prove offline works, and uses Chromium&apos;s own
          installability check.
        </p>
        <p>
          <span className="font-bold">Looking at it.</span> Screenshots caught
          what assertions missed, including a stale reading and a menu that
          said &quot;Standard&quot; for both an 8-string and a 12-string.
        </p>
        <p>
          The most useful lesson: tests only find what they are aimed at. The
          worst bug passed every test until someone asked what could actually
          go wrong on a real instrument.
        </p>
      </Section>

      <Section name="/known-limits">
        <p>
          <span className="font-bold">
            It has not yet been verified with a real instrument and microphone
            or on a real phone, and iPhone Safari is untested.
          </span>{' '}
          Every figure on this page is from synthetic audio, so it shows the
          engine&apos;s precision rather than accuracy in a real room.
        </p>
        <ul className="space-y-1 ml-4">
          <li>
            • A steady tone looks like a note, so loud 100/120/180 Hz transformer
            hum can show as a reading
          </li>
          <li>
            • Very stiff low strings read a few cents above their fundamental,
            because their upper partials really are sharp
          </li>
          <li>
            • Both strings of a 12-string octave pair ringing together pull the
            reading, so they need playing one at a time
          </li>
          <li>
            • A slack string could be mistaken for the string an octave below if
            that one is ringing too; locking onto a string should avoid it
          </li>
          <li>
            • Under extreme CPU load, dropouts can still cause brief errors
          </li>
        </ul>
      </Section>

      <footer className="px-8 py-12 text-center text-xs">
        <p>
          <Link href="/" className="underline">
            {'<'} back to portfolio
          </Link>
        </p>
      </footer>
    </main>
  )
}
