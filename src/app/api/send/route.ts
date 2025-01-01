import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend("re_UPXzG95P_FkNTLMz9WduiaPNEq7uNXEzR");

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: "thakur2004harsh@gmail.com", 
      subject: "New Message from Portfolio",
      html: `
        <div>
          <h2>${subject}</h2>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    console.log("Resend response:", data); // Debug log
    return NextResponse.json(data);
    
  } catch (error) {
    console.error("Detailed error:", error); // Debug log
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
