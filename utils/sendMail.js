const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   host: process.env.smtp_host_name, // e.g., 'smtp.example.com'
  port: 587, // e.g., 587
  secure: false, // e.g., false for 587, true for 465
  auth: {
    user: process.env.email, // SMTP username or email
    pass: process.env.email_passkey, // SMTP password or API key (renamed from firm_passkey)
  },
});

const sendMail = async (from, to, subject, template,attachments=[]) => {
  try {
    let info = await transporter.sendMail({
      from,
      to,
      subject,
      html: template,
      attachments
    });
    if (info) {
      console.log("Email Sended Successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports = { sendMail };
