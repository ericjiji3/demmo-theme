import { cookies } from 'next/headers';
import Form from '../../components/form';
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

  return (
    <div className="relative">
      <Form />
    </div>
  );
}
