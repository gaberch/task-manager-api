const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gabe_rch@hotmail.com',
        subject: 'Welcome to the App!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
    to: email,
    from: 'gabe_rch@hotmail.com',
    subject: 'Goodbye!',
    text: `Sorry to see you go ${name}. Please do let us know if there's anything we could've done better.` 
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}