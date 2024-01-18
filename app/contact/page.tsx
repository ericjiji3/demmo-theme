export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds
import Image from 'next/image';
import Logo from '../../public/demmo-logo-white.png';

export default async function ContactPage() {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  return (
    <div className="relative h-screen w-full bg-black text-white">
      {/* <Form /> */}
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <Image src={Logo} width={150} alt="oops" className="mx-auto mb-5" />
        <h2>COMING SOON</h2>
      </div>
      {/* <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
    </p> */}
    </div>
  );
}
