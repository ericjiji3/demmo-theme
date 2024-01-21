import Newsletter from 'components/newsletter';
import { GeistSans } from 'geist/font';
import { ensureStartsWith } from 'lib/utils';
import Image from 'next/image';
import { ReactNode, Suspense } from 'react';
import Logo from '../public/demmo-logo-white.png';
import './globals.css';
const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <html lang="en" className={GeistSans.variable}>
        <body className="relative h-screen bg-black text-white">
          <Suspense>
            <main className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <div className="text-center">
                <Image src={Logo} width={150} alt="oops" className="mx-auto mb-5" />
                <h2>COMING SOON</h2>
              </div>
              <Newsletter />
            </main>
          </Suspense>
        </body>
      </html>
    </>
  );
}
