const sgMail = require('@sendgrid/mail');

class ContactController {
    async send(req, res) {
        const { email } = req.payload;
        const { subject, text } = req.body;
        
        try {
            sgMail.setApiKey(process.env.MAIL_KEY);
    
            if(!email) {
                return res.json({ success: false, message: 'Email error.', statusCode: 400 })
            }
    
            if(!subject) {
                return res.json({ success: false, message: 'Subject error.', statusCode: 400 })
            } 
    
            if(!text) {
                return res.json({ success: false, message: 'Message error.', statusCode: 400 })
            } 

            const message = { to: 'organizationEmail', from: email, subject, text };
    
            const responseMail = await sgMail.send(message);
            
            if(!responseMail) {
                return res.json({ success: false, message: 'Sending email failed.', statusCode: 400 })
            }
            
            return res.json({ success: true, message: "The email was sent successfully.", statusCode: 200 })
        } catch(err) {
            return res.json({ success: false, message: 'Sending email failed.', statusCode: 400 })
        }
    }
}

module.exports = new ContactController();