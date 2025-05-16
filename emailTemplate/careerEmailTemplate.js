const firmTemplate = (userInfo) => {
  try {
    let {
      name,
      position,
      email,
      contact_number,
      experience,
      expectedCtc,
      currentCtc,
      message,
      joiningPeriod,
    } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Career Application</title>
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
          <div class="header">Abtik-Digital</div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">📋</span> New Career Application Submission</h2>
            <p class="highlight">A candidate has submitted an application via the Abtik-Digital website. Please review their details below and respond promptly.</p>
            <table>
              <tr>
                <th>Full Name</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>Email Address</th>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td><a href="tel:+91${contact_number}">${contact_number}</a></td>
              </tr>
              <tr>
                <th>Position Applied For</th>
                <td>${position}</td>
              </tr>
              <tr>
                <th>Experience</th>
                <td>${experience} years</td>
              </tr>
              <tr>
                <th>Expected CTC</th>
                <td>${expectedCtc}</td>
              </tr>
              <tr>
                <th>Current CTC</th>
                <td>${currentCtc}</td>
              </tr>
              <tr>
                <th>Notice Period</th>
                <td>${joiningPeriod}</td>
              </tr>
              ${
                message
                  ? `
                  <tr>
                    <th>Message</th>
                    <td>${message}</td>
                  </tr>`
                  : ""
              }
              <tr>
                <th>Submission Date</th>
                <td>${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            This email was automatically generated by your website's career form.
            <span class="footer-note">Please do not reply directly to this email.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error(error);
  }
};

const userTemplate = (userInfo) => {
  try {
    let { name, subject } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
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
          <div class="header">Abtik-Digital</div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">✅</span> ${subject}</h2>
            <p class="highlight">Dear ${name}, thank you for applying to Abtik-Digital!</p>
            <p>We have received your career application, and our team will review it shortly.</p>
            <div class="message-box">
              <h3>What happens next?</h3>
              <p>We will contact you within 24-48 business hours if your profile matches our requirements. Thank you for your interest in joining our team!</p>
            </div>
            <p>In the meantime, feel free to explore our website for more information about our company and opportunities.</p>
            <center><a href="https://www.abtik-digital.com" class="button">Visit Our Website</a></center>
            <div class="divider"></div>
            <p>If you have any urgent questions, please don't hesitate to call us at <strong>+91 1234567890</strong>.</p>
          </div>
          <div class="footer">
            <div class="social-links">
              <a href="https://www.facebook.com/people/Abtik-Digital/61557004832458/#">Facebook</a> • 
      
              <a href="https://www.instagram.com/abtik_digital/?igsh=MWh5NHZqamxodmZiNg%3D%3D#">Instagram</a> • 
              <a href="https://www.linkedin.com/company/abtik-digitals/">LinkedIn</a>
            </div>
            Thank you for choosing Abtik-Digital.
            <span class="footer-note">© 2025 Abtik-Digital. All rights reserved.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { firmTemplate, userTemplate };
