import Navbar from 'components/layout/navbar';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  return {
    title: 'CONTACT US',
    description: 'Leave us a message and we will get back to you as soon as possible.'
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Navbar />
      <div className="h-[90vh] w-full md:h-full">
        <div className="h-full">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </Suspense>
  );
}
