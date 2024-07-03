import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = req;
  let {email,subject,message} = body;
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: ["trivediabhiraj7@gmail.com"],
    subject: "Hello world",
    react: (
      <>
      <h1>{subject}</h1>
        <p> thank you for contacting me ! </p>
      </>
    ),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json(data, { status: 200 });}
