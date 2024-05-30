import { Resend } from "resend";
import NewAccountCreated from "@/emails/NewAccountCreated";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export const SendEmail = async ({ siteUrl }: { siteUrl: string }) => {
  try {
    await resend.emails.send({
      from: "you@example.com",
      to: "user@gmail.com",
      subject: "hello world",
      react: NewAccountCreated({
        siteUrl: siteUrl,
      }),
    });
    console.log("Email sent");
  } catch (error) {
    console.log(error);
  }
};
