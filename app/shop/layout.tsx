import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full bg-black">
        <div>
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </Suspense>
  );
}
