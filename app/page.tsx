import HomeBar from 'components/homeBar';
import { cookies } from 'next/headers';
export const runtime = 'edge';

export const metadata = {
  description: 'DEMMO CO',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
  const isLoggedIn = !!loginCookies?.value;

  return (
    <>
      <div className="h-full">
        <HomeBar />
      </div>
    </>
  );
}
