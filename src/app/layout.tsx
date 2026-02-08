import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://moreromedia.co.za'),
  title: {
    default: 'Juvane Moonsami Photography',
    template: '%s | Juvane Moonsami',
  },
  alternates: {
    canonical: './',
  },
  description: 'Pro Photography Portfolio specializing in Commercial, Fashion, and Lifestyle photography.',
  keywords: ['Photography', 'Commercial', 'Fashion', 'Lifestyle', 'Juvane Moonsami', 'South Africa'],
  authors: [{ name: 'Juvane Moonsami' }],
  creator: 'Juvane Moonsami',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moreromedia.co.za',
    siteName: 'Juvane Moonsami Photography',
    images: [
      {
        url: '/images/juvane/JM_Camera.jpg', // Assuming this exists or will be replaced
        width: 1200,
        height: 630,
        alt: 'Juvane Moonsami Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juvane Moonsami Photography',
    description: 'Pro Photography Portfolio',
    creator: '@juvanemoonsami',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <head>
        <Script
          src="https://stats.verterelabs.co.za/script.js"
          data-website-id="42c13126-e917-487f-be8c-bea380e8a9f3"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, marginTop: 'var(--header-height)' }}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
