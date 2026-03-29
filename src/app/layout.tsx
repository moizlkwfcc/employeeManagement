import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Employee Management System',
  description: 'A modern employee management system built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}