const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zakariyya.s.uddin@gmail.com',
        subject: 'Welcome to the Task App',
        text: `Thanks for joining, ${name}! Let me know how you ge along with the app.`
    });
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zakariyya.s.uddin@gmail.com',
        subject: 'Account Deletion from the Task App',
        text: `Sorry to see you go, ${name}! Good bye.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};