const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

        //username:
        //password: 
    },
});

exports.SendEmail = functions.https.onCall(async (data) => {
    const { email, firstName, lastName, beneficiaryType, faculty, seriesNumber, school } = data;

    let EmailContent;

    if (beneficiaryType === "student") {
        EmailContent = {
          // from: ' ',
           // to: ' ',
           // subject: ` `,
            text: `A new student verification request has been submitted. Details are as follows:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Faculty: ${faculty}
      Series and Number: ${seriesNumber}

      Please verify the authenticity of this user as a valid student.`,
        };
    } else if (beneficiaryType === "pupil") {
        EmailContent = {
           // from: ' ',
           // to: ' ',
           // subject: ` `,
            text: `A new pupil verification request has been submitted. Details are as follows:
      Name: ${firstName} ${lastName}
      Email: ${email}
      School: ${school}

      Please verify the authenticity of this user as a valid pupil.`,
        };
    } else {
        throw new functions.https.HttpsError(
          "invalid"
        );
    }

    try {
        await transporter.sendMail(EmailContent);
        return { message: "Email sent successfully." };
    } catch (error) {
        console.error("Error sending email:", error);
          }
});