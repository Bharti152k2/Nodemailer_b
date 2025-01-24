const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nidhi15sak@gmail.com",
    pass: "dyxklkaltsedsotg",
  },
});

let subscribeMail = async (email) => {
  let sentInfo = await transporter.sendMail({
    from: "nidhi15sak@gmail.com",
    to: email,
    subject: "Offer Letter",
    html: `
        <h1>Dear ${email.split("@")[0]},</h1>
        <h2>You Got Selected</h2>
        `,
    attachments: [
      {
        filename: "OfferLetter.png",
        path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
      },
    ],
  });
  console.log(sentInfo);
};
module.exports = subscribeMail;
