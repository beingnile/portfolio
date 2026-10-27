import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Nile Odhiambo Okomo - Backend & Application Security Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const fonts = join(process.cwd(), 'app/fonts')
  const [regular, bold] = await Promise.all([
    readFile(join(fonts, 'JetBrainsMono-400.ttf')),
    readFile(join(fonts, 'JetBrainsMono-700.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#000',
          color: '#fff',
          fontFamily: 'JetBrains Mono',
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: -4 }}>
          NØ_
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 700 }}>
            NILE ODHIAMBO OKOMO
          </div>
          <div style={{ fontSize: 36, marginTop: 16 }}>
            Backend &amp; Application Security Engineer
          </div>
          <div style={{ fontSize: 28, marginTop: 32, color: '#aaa' }}>
            I build payment and device backends, then break them
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: regular, weight: 400 },
        { name: 'JetBrains Mono', data: bold, weight: 700 },
      ],
    },
  )
}
