import HomeBar from 'components/homeBar';
export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="h-full">
        <HomeBar />
      </div>
    </>
  );
}
