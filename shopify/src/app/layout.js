import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'the shoppies',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>{children}</body>

    </html>
  )
}
