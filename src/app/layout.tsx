import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LR Parking',
  description: 'Liste des parkings de La Rochelle avec le nombre de places disponibles en temps réel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FMWJ42VK9C"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FMWJ42VK9C');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
