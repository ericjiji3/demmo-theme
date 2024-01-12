import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);
    const { email, message } = body;
    const htmlMessage = '<p>Email: ' + email + '</p><p>Message: ' + message + '</p>';
    const { data, error } = await resend.emails.send({
      from: 'info@demmocorp.com',
      to: 'info@demmocorp.com',
      subject: 'Demmo Contact Form Submission',
      html: htmlMessage
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
