const userTemplate = (data) => {
  let { name, email, number, message } = data;
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Submission</title>
    <style>
      body, html {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
      }
      * {
        box-sizing: border-box;
      }
      body {
        background-color: #f7f7f7;
        padding: 40px 20px;
      }
      .email-wrapper {
        max-width: 680px;
        margin: auto;
        background-color: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        background: #f56015;
        background: linear-gradient(135deg, #f56015, #ffa94d);
        padding: 35px 20px;
        color: white;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 1.5px;
        position: relative;
      }
      .header-divider {
        height: 8px;
        background: #ffb367;
        background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
      }
      .content {
        padding: 40px 50px;
      }
      h2 {
        color: #333;
        margin: 0 0 20px 0;
        font-size: 24px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .emoji {
        font-size: 28px;
        margin-right: 10px;
      }
      p {
        color: #555;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 1.6;
      }
      .highlight {
        background-color: rgba(245, 96, 21, 0.08);
        border-left: 4px solid #f56015;
        padding: 15px;
        margin-bottom: 25px;
      }
      .message-box {
        background-color: #f9f9f9;
        border-radius: 12px;
        padding: 25px;
        margin: 30px 0;
        border: 1px solid #eee;
      }
      .message-box h3 {
        margin-top: 0;
        color: #f56015;
        font-size: 18px;
      }
      .button {
        display: inline-block;
        background: linear-gradient(to right, #f56015, #f87e42);
        color: white;
        text-decoration: none;
        padding: 12px 28px;
        border-radius: 50px;
        font-weight: 600;
        margin: 15px 0;
        text-align: center;
      }
      .divider {
        height: 1px;
        background-color: #eee;
        margin: 30px 0;
      }
      .footer {
        margin-top: 10px;
        background-color: #fcfcfc;
        font-size: 14px;
        color: #888;
        text-align: center;
        border-top: 1px solid #eee;
        padding: 25px 40px;
      }
      .social-links {
        margin: 20px 0;
      }
      .social-links a {
        display: inline-block;
        margin: 0 10px;
        color: #f56015;
        text-decoration: none;
      }
      .footer-note {
        display: block;
        margin-top: 8px;
        font-size: 13px;
        color: #aaa;
      }
      
      @media only screen and (max-width: 600px) {
        .content {
          padding: 30px 20px;
        }
        .header {
          padding: 25px 15px;
          font-size: 26px;
        }
        .message-box {
          padding: 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="header">
        Abtik-Digital
      </div>
      <div class="header-divider"></div>
      <div class="content">
        <h2><span class="emoji">✅</span> Thank You for Your Submission</h2>
        <p class="highlight">Dear ${name}, thank you for contacting us! We've received your message and appreciate your interest.</p>
        
        <p>We wanted to let you know that your form submission has been successfully received. Our team will review your message and get back to you as soon as possible.</p>
        
        <div class="message-box">
          <h3>What happens next?</h3>
          <p>One of our team members will contact you within 24-48 business hours to address your inquiry. We're committed to providing excellent service and look forward to assisting you.</p>
        </div>
        
        <p>In the meantime, feel free to explore our website for more information about our services and offerings.</p>
        
        <center><a href="https://www.abtik-digital.com" class="button">Visit Our Website</a></center>
        
        <div class="divider"></div>
        
        <p>If you have any urgent questions, please don't hesitate to call us directly at <strong>+91 1234567890</strong>.</p>
      </div>
      <div class="footer">
        <div class="social-links">
          <a href="#">Facebook</a> • 
          <a href="#">Twitter</a> • 
          <a href="#">Instagram</a> • 
          <a href="#">LinkedIn</a>
        </div>
        Thank you for choosing Abtik-Digital.
        <span class="footer-note">© 2025 Abtik-Digital. All rights reserved.</span>
      </div>
    </div>
  </body>
</html>`;
};

const firmTemplate = (data) => {
  let { name, email, number, message } = data;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Submission</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: #f56015;
            background: linear-gradient(135deg, #f56015, #ffa94d);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
            position: relative;
          }
          .header-divider {
            height: 8px;
            background: #ffb367;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(245, 96, 21, 0.08);
            border-left: 4px solid #f56015;
            padding: 15px;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border: none;
            border-radius: 14px;
            overflow: hidden;
            margin: 25px 0;
            box-shadow: 0 5px 15px rgba(245, 96, 21, 0.08);
            font-size: 16px;
          }
          th {
            background: #f56015;
            background: linear-gradient(to right, #f56015, #f87e42);
            color: #ffffff;
            width: 30%;
            font-weight: 600;
            letter-spacing: 0.5px;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          td {
            background-color: #ffffff;
            color: #444;
            border-bottom: 1px solid #f0f0f0;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:nth-child(even) td {
            background-color: #fafafa;
          }
          a {
            color: #f56015;
            text-decoration: none;
            font-weight: 500;
          }
          .message-cell {
            line-height: 1.7;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            table {
              border-radius: 8px;
            }
            th, td {
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            Abtik-Digital
          </div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">📩</span> New Contact Form Submission</h2>
            <p class="highlight">You have received a new contact form submission with the following details:</p>
            <table>
              <tr>
                <th>Name</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <th>Contact Number</th>
                <td><a href="tel:+91${number}">${number}</a></td>
              </tr>
              <tr>
                <th>Message</th>
                <td class="message-cell">${message}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            This email was automatically generated by your website's contact form.
            <span class="footer-note">Please do not reply directly to this email.</span>
          </div>
        </div>
      </body>
    </html>
      `;
};
const resetPasswordTemplate = (data) => {
  const { name, resetLink } = data;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset Request</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: #f56015;
            background: linear-gradient(135deg, #f56015, #ffa94d);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
          }
          .header-divider {
            height: 8px;
            background: #ffb367;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.6;
          }
          .button {
            display: inline-block;
            padding: 14px 28px;
            background-color: #f56015;
            background: linear-gradient(to right, #f56015, #f87e42);
            color: white;
            font-weight: 600;
            text-decoration: none;
            border-radius: 8px;
            transition: background 0.3s ease;
          }
          .button:hover {
            background: #e55510;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Abtik-Digital</div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">🔐</span>Password Reset Request</h2>
            <p>Hi ${name},</p>
            <p>We received a request to reset your password. Click the button below to choose a new password:</p>
            <p style="text-align: center;">
              <a href="${resetLink}" class="button">Reset Password</a>
            </p>
            <p>If you did not request a password reset, you can safely ignore this email. This link will expire after a short time for your security.</p>
          </div>
          <div class="footer">
            This email was automatically sent from your account dashboard.
            <span class="footer-note">Please do not reply to this email directly.</span>
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = { userTemplate, firmTemplate, resetPasswordTemplate };
