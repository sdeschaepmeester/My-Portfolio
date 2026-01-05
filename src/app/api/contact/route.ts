import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // sanitize
        const escapeHtml = (unsafe: string) =>
            unsafe.replace(/[&<>"']/g, (m) =>
                ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]!)
            );

        const { message, email } = body.params;
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(JSON.parse(message).message);

        const { error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: [process.env.EMAIL_PRO!],
            subject: "Nouveau message depuis le portfolio",
            text: `Nouveau message de : ${email} \n\n${safeMessage}`,
            html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
          <p><strong>Message de :</strong> ${safeEmail}</p>
          <p style="margin-top:10px;"><u>Message :</u></p>
          <p style="margin-top:4px;white-space:pre-line;">${safeMessage}</p>
        </div>
      `,
            replyTo: safeEmail,
        });

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
