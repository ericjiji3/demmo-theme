import Form from '../../components/form';
export const runtime = 'edge';
export const revalidate = 43200; // 12 hours in seconds

export default async function ContactPage() {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const getFormData = (e: any) => {
    console.log(e);
  };

  return (
    <div className="relative">
      <Form />

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
