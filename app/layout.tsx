import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.scss'
import ogImage from '@/app/assets/images/og_image.jpeg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://v2.mesi.dev'),
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     'en-US': '/en-US',
  //   },
  // },
  title: 'Erwin Mesias - Full-Stack Web Developer | mesi.dev',
  description:
    'Full-Stack Web Developer who codes React, Next, Vue, Nuxt, Laravel, Flask and Strapi based in the Philippines.',
  openGraph: {
    images: ogImage.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
