import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

const title = "Beingnile's Tuner: how it works"
const description =
  'A guitar and bass tuner that runs entirely in the browser. How it hears a note, the decisions behind it, and the bugs testing found.'

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
          A guitar and bass tuner that runs entirely in your browser
        </p>
        <p className="text-sm">
          Try it at{' '}
          <a
            href="https://beingniles-tuner.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            beingniles-tuner.vercel.app
          </a>
          . It is written in plain JavaScript with no libraries, and the whole
          thing is about 16 KB.
        </p>
      </header>

      <Section name="/why-i-made-this">
        <p>
          I lost my smartphone, and that was my tuner. At practice I had to tune
          by ear, and so did our bassist, and it wasn&apos;t very accurate. Now
          anyone in the band can open this on their phone.
        </p>
        <p>
          That set the goal: a tuner that opens instantly from a link, works
          with no internet, and tells you the truth about your strings. Accuracy
          came first, because a tuner that is fast and wrong is worse than no
          tuner at all. It also had to handle bass as well as guitar.
        </p>
        <p>
          Tuning accuracy is measured in cents, and there are 100 cents between
          two neighbouring notes. Most people can&apos;t hear a difference of a
          few cents, so the aim was to stay well below that, and to prove it
          with tests.
        </p>
      </Section>

      <Section name="/why-the-web">
        <p>
          A website reaches every phone and laptop from one codebase, and nobody
          has to visit an app store. The trade-off is less control over the
          audio hardware, and that caused real problems later on.
        </p>
        <p>
          There is no framework and nothing to install. The screen only shows a
          few values, but they change very quickly, so simple code that updates
          them directly is the better fit. It also matters for trust: this site
          asks for your microphone, so it helps that it runs no one else&apos;s
          code. Your audio is processed on your device, and there is no server
          to send it to.
        </p>
      </Section>

      <Section name="/how-it-hears-a-note">
        <p>
          Browsers clean up microphone audio by default, removing echo and
          background noise and evening out the volume. That is great for calls,
          but it can damage a held note, so the tuner turns all of it off.
        </p>
        <p>
          The audio is then filtered. Low rumble goes, along with the 50 or 60
          Hz hum that comes from mains electricity, and so does the high end,
          which doesn&apos;t help find the pitch. Keeping fewer samples makes
          the rest of the work about nine times cheaper.
        </p>
        <p>
          The obvious way to find a pitch is to look for the loudest frequency,
          but that often gives the wrong note. Small microphones barely pick up
          the lowest part of a low E, so its overtones can be louder than the
          note itself. Instead, the tuner asks a different question: how long
          until this sound repeats itself? A note repeats at the same rate
          whether or not you can hear its lowest part. This is known as
          McLeod&apos;s pitch method, and its score also shows how confident the
          tuner should be, which is how it ignores noise.
        </p>
        <p>
          That gives a rough answer, and two more steps sharpen it. The first
          compares the sound across several repeats rather than just one, which
          shrinks any error. The second checks how much energy sits at the
          note&apos;s own overtones. Another string left ringing mostly falls in
          between those, so it stops pulling the reading.
        </p>
        <p>
          All of this happens about 48 times a second. A final stage then
          steadies the result. It ignores one-off odd readings and smooths the
          small wobbles, but it follows quickly when you are really turning a
          peg, so the needle feels both calm and responsive.
        </p>
      </Section>

      <Section name="/the-worst-bug">
        <p>
          Because small microphones can make a low E look an octave too high,
          the tuner had a correction: if a reading wasn&apos;t close to any
          string, but half of it was, use the lower one.
        </p>
        <p>
          It passed every test. Then an audit with tougher scenarios showed that
          a G string slackened to 165 Hz was being read as a low E, an octave
          below its real pitch, and shown as in tune. Restringing is exactly
          when you rely on a tuner most, and this one would have told you to
          stop turning.
        </p>
        <p>
          The first fix broke the very case the correction existed for. The one
          that worked looks for direct evidence. A real low E has a faint tone
          at half the reading, standing out clearly from the noise around it. A
          slack G string has nothing there but noise. The error went from a full
          octave to 0.02 cents.
        </p>
      </Section>

      <Section name="/the-test-that-failed-once">
        <p>
          One browser test failed by 2.4 cents and then passed when run again.
          It would have been easy to call that a fluke. Two likely explanations
          were measured and turned out to be wrong. Then, with the computer put
          under heavy load, the same kind of error came back, as large as 80
          cents.
        </p>
        <p>
          The cause was lost audio. When a device falls behind, a tiny piece of
          sound goes missing, and that confused the tuner for up to 300 ms.
          Worse, the tuner could cause this itself, because one round of
          analysis took most of the time the browser allows for each slice of
          audio.
        </p>
        <p>
          So the work is now spread out over several slices, and the tuner holds
          its last reading when its confidence suddenly drops. Simulated gaps of
          up to 85 ms no longer disturb the reading at all. Under the same
          extreme load, the worst error fell from 80 cents to about 8, which is
          much better but not perfect.
        </p>
      </Section>

      <Section name="/other-things-testing-found">
        <p>
          Tuning the A string with the low E still ringing, which happens all
          the time, used to read 2.6 cents off and wander around. It now reads
          within 0.02 cents.
        </p>
        <p>
          A note could also jump up an octave as it faded, because its overtones
          die away at different speeds. The tuner now only believes a jump like
          that if it comes with a new pluck.
        </p>
        <p>
          Phones held sideways were simply broken: the needle disappeared and
          the Start button couldn&apos;t be tapped, though every layout test had
          passed. Now a test checks 11 screen sizes for anything overlapping.
        </p>
      </Section>

      <Section name="/every-guitar-and-bass">
        <p>
          There are 39 tunings, covering electric, acoustic and classical
          guitars, 7, 8, 9 and 12-string, baritone, bass, tenor, guitalele,
          resonator and lap steel. Chromatic modes handle anything else.
        </p>
        <p>
          This took more than a longer menu. A 5-string bass goes down to 31 Hz,
          and the tuner originally stopped at 62 Hz. Notes that low repeat so
          slowly that it has to listen for twice as long, so low tunings get
          their own settings, and bass settles in under 350 ms where guitar
          takes under 200 ms. Those notes also sit right around mains hum, so
          the hum filter steps aside if a string is too close to it.
        </p>
      </Section>

      <Section name="/using-it">
        <p>
          You usually glance at a tuner from a distance with both hands on the
          guitar, so the whole page turns green when a string is in tune. It
          also says &quot;too low: tune up&quot; in words, so colour is never the
          only signal. It takes 3 cents to count as in tune but 5 to stop, which
          keeps the display from flickering on the edge.
        </p>
        <p>
          It works out which string you are playing by itself. Tapping a string
          locks onto it, which helps when a new string is far off pitch.
        </p>
        <p>
          After your first visit it works with no connection at all, and you
          can install it like an app. Chrome, Edge and Samsung Internet offer a
          prompt, and iPhones get short instructions, since Apple doesn&apos;t
          allow a prompt. Firefox on desktop can&apos;t install web apps, but
          the tuner still works offline in a tab.
        </p>
      </Section>

      <Section name="/how-it-was-tested">
        <p>
          There are 37 automated tests that play a simulated plucked string
          through the real code, adding stiffness, noise, hum and weak low notes.
          One of them runs every string of every tuning. Another set feeds an
          audio file to a real browser as if it were the microphone, reads what
          appears on screen, and then shuts the server down to prove the offline
          mode works.
        </p>
        <p>
          The biggest lesson was that tests only find what they are aimed at. The
          worst bug passed everything until someone asked what could actually go
          wrong on a real instrument. Looking at screenshots caught problems the
          tests missed too.
        </p>
      </Section>

      <Section name="/what-it-doesnt-do-yet">
        <p>
          <span className="font-bold">
            It hasn&apos;t yet been checked with a real instrument and microphone
            or on a real phone, and it is untested in iPhone Safari.
          </span>{' '}
          Every number on this page comes from simulated audio, so it shows how
          precise the code is, not how it will do in a real room.
        </p>
        <p>
          There are some known limits as well. A steady hum from something like
          a transformer can look like a note. Very stiff bass strings read a few
          cents sharp, because their overtones really are sharp. On a 12-string,
          the two strings in an octave pair need to be played one at a time. A
          slack string could also be mistaken for the string an octave below it
          if that one is ringing too, and locking onto the string should avoid
          that.
        </p>
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
