import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import { siteConfig } from '@/config/site'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Ingeniería de Sistemas', 'Portfolio'],
  authors: [{ name: 'Samuel Marcano' }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
