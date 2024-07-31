import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = await req.json(); 
  let {email,subject,message} = body;

  if (!email || !subject || !message) {
    console.log(email+subject+message);
    return NextResponse.json({ error: "Email, subject, and message fields are required." }, { status: 400 });
  }
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: ["trivediabhiraj7@gmail.com",email],
    subject: subject,
    react: (
      <>
       {/* <p> thank you for contacting me ! </p> */}
      <h1>{subject}</h1>
        <p>
          {message}
        </p>
      </>
    ),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json(data, { status: 200 });}
