import './globals.scss'
import styles from './layout.module.scss'
import 'prismjs/themes/prism-solarizedlight.css'
import Link from 'next/link'
import { Domine } from 'next/font/google'
import type { Metadata, ResolvingMetadata } from 'next'
import Navbar from '@/components/navbar'
import LinksProvider from '@/providers/LinksProvider'

const domine = Domine({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Practice exercises',
  description: 'Several javascript exercises to practice on the spot',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${domine.className} ${styles.layout}`}>
        <LinksProvider>
          <Navbar />
          <div className={styles.content}>
            {children}
          </div>
        </LinksProvider>

      </body>
    </html>
  )
}
