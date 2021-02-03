const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: DOMAIN,
});

const sendMail = async (
  email,
  defaultLink,
  emailFromUser,
  emailSubjectLine,
  emailMessage
) => {
  if (emailMessage) {
    emailMessage = `${emailMessage}<br>${defaultLink}`;
  }

  const data = {
    from: emailFromUser,
    to: email,
    subject: emailSubjectLine,
    html: emailMessage,
  };

  await mg.messages().send(data);
};

module.exports = sendMail;
