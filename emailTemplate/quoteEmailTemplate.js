
const firmTemplate = (quoteData) => {
  let { name, service, email, phoneNumber, companyType, additionalInfo } =
    quoteData;

  return ` <!DOCTYPE html>
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
      <div class="header" >
      <img src={}/>
        Abtik-Digital
      </div>
      <div class="header-divider"></div>
      <div class="content">
        <h2><span class="emoji">📩</span> New Quote Requested</h2>
        <p class="highlight">A new quote request has been submitted through the website. Please review the details below and assign a team member to follow up with the client.</p>
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
            <td><a href="tel:+91${phoneNumber}">${phoneNumber}</a></td>
          </tr>
          <tr>
            <th>Service</th>
            <td>${service}</td>
          </tr>
          <tr>
            <th>Company Type</th>
            <td>${companyType}</td>
          </tr>
            ${
              additionalInfo
                ? `
    <tr>
      <th>Additional Info</th>
      <td class="message-cell">${additionalInfo}</td>
    </tr>
  `
                : ""
            }
        
          <tr>
            <th>Date Received</th>
            <td>${new Date().toLocaleString()}</td>
          </tr>
        </table>
      </div>
      <div class="footer">
        This email was automatically generated by your website's contact form.
        <span class="footer-note">Please do not reply directly to this email.</span>
      </div>
    </div>
  </body>
</html>`;
};

const userTemplate = (quoteData) => {
  let { name, service, email, phoneNumber, companyType } = quoteData;

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Quote Request</title>
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
      .highlights {
        background-color: #fff9f2;
        border-left: 4px solid #f56015;
        padding: 15px 20px;
        border-radius: 4px;
        margin-bottom: 30px;
      }
      .highlights p {
        margin: 10px 0;
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
      .social-links {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .social-links a {
        display: inline-block;
        margin: 0 8px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #f0f0f0;
        text-align: center;
        line-height: 32px;
        color: #555;
        text-decoration: none;
        font-size: 16px;
        transition: all 0.3s ease;
      }
      .social-links a:hover {
        background-color: #f56015;
        color: white;
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
        <h2><span class="emoji">🎉</span>Thank You for Your Quote Request</h2>
        <p>Hi ${name},</p>
        <p>Thank you for choosing Abtik-Digital for your project needs! We're excited to confirm that we've received your quote request for <strong>${service}</strong>.</p>
        
        <div class="highlights">
          <p><strong>What happens next?</strong></p>
          <p>• Our team is reviewing your request</p>
          <p>• We'll prepare a customized quote for your project</p>
          <p>• You'll receive a detailed proposal within 24-48 hours</p>
        </div>
        
        <p>While you wait, feel free to explore our portfolio or check out our recent case studies to see how we've helped businesses like yours achieve their digital goals.</p>
        
        <p style="text-align: center;">
          <a href="https://abtikdigital.com/portfolio" class="button">View Our Work</a>
        </p>
        
        <p>If you have any questions or would like to provide additional details about your project, please don't hesitate to reach out to our support team.</p>
        
        <p>We look forward to the opportunity to work with you!</p>
        
        <p>Best regards,<br>The Abtik-Digital Team</p>
      </div>
      <div class="footer">
        <div class="social-links">
          <a href="https://facebook.com/abtikdigital">f</a>
          <a href="https://twitter.com/abtikdigital">t</a>
          <a href="https://instagram.com/abtikdigital">i</a>
          <a href="https://linkedin.com/company/abtikdigital">in</a>
        </div>
        This is an automated message confirming your quote request.
        <span class="footer-note">Please do not reply to this email directly.</span>
      </div>
    </div>
  </body>
</html>`;
};

module.exports = { firmTemplate, userTemplate };
