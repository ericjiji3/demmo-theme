import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    const { email } = body;
    const htmlMessage = '<p>Email: ' + email + '</p>';
    const data = await resend.emails.send({
      from: 'info@demmocorp.com',
      to: 'info@demmocorp.com',
      subject: 'Demmo Contact Form Submission',
      html: htmlMessage
    });

    if (data.error == null) {
      return NextResponse.json({ message: 'success!' }, { status: 200 });
    }
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
