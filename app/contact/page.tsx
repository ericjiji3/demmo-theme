import Newsletter from 'components/newsletter';
import Password from 'components/password';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Form from '../../components/form';
import Logo from '../../public/demmo-logo-white.png';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds

export default async function ContactPage() {
  const cookiesStore = cookies();
  const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
  const isLoggedIn = !!loginCookies?.value;
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const getFormData = (e: any) => {
    console.log(e);
  };
  if (!isLoggedIn) {
    return (
      <>
        <div className="relative h-screen bg-black text-white">
          <main className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <div className="text-center">
              <Image src={Logo} width={150} alt="oops" className="mx-auto mb-5" />
              <h2>COMING SOON</h2>
            </div>
            <Newsletter />
          </main>
          <div className="absolute bottom-[20%] left-[50%] translate-x-[-50%]">
            <Password />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="relative">
        <Form />
      </div>
    );
  }
}
