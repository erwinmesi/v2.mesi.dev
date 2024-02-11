import Script from 'next/script'
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
  const GA_MEASUREMENT_ID = 'G-B5FVJTYKEL'

  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
