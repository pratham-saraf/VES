import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    // console.log("in email handler")
    if (req.method === 'POST') {
        console.log("received request")
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("created transporter")

        let email = req.body.email;
        let name = req.body.name;
        let phone = req.body.phone;
        let message = req.body.message;

        let mailOptions;
        
        console.log("email: " + email)
        console.log("name: " + name)
        console.log("phone: " + phone)
        console.log("message: " + message)


        if (name && message) {
            console.log("reading html template")
            console.log(path.resolve(__dirname, '../../components/Email/imported-from-beefreeio.html'))
            console.log(path.resolve('../../components/Email/imported-from-beefreeio.html'))
            console.log(path.resolve(__dirname, '../../../../components/Email/imported-from-beefreeio.html'))
            let htmlTemplate = fs.readFileSync(path.resolve(__dirname, '../../../../components/Email/imported-from-beefreeio.html'), 'utf8');

            console.log("replacing html template")
            htmlTemplate = htmlTemplate.replace('${name}', name);
            htmlTemplate = htmlTemplate.replace('${message}', message);
            if (phone) {
                htmlTemplate = htmlTemplate.replace('${phone}', phone);
            }
            else {
                htmlTemplate = htmlTemplate.replace('Phone Number - ${phone}', '');
            }

            console.log(htmlTemplate)
            // If the request is from the new form
            mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Thanks for contacting us!',
                // bcc: process.env.EMAIL_BCC,
                html: htmlTemplate,
                attachments: [
                    {
                        filename: 'logo.png',
                        path: path.join(process.cwd(), 'images','logo.png'),
                        cid: 'logo.png' 
                    },
                    {
                        filename: 'panel.jpg',
                        path: path.join(process.cwd(), 'images','panel.jpg'),
                        cid: 'panel.jpg' 
                    },
                    {
                        filename: 'facebook2x.png',
                        path: path.join(process.cwd(), 'images','facebook2x.png'),
                        cid: 'facebook2x.png' 
                    },
                    {
                        filename: 'twitter2x.png',
                        path: path.join(process.cwd(), 'images','twitter2x.png'),
                        cid: 'twitter2x.png' 
                    },
                    {
                        filename: 'instagram2x.png',
                        path: path.join(process.cwd(), 'images','instagram2x.png'),
                        cid: 'instagram2x.png' 
                    },
                    {
                        filename: 'website2x.png',
                        path: path.join(process.cwd(), 'images','website2x.png'),
                        cid: 'website2x.png' 
                    }
                ]
                // html: `<p>Thank you for contacting us, ${name}.</p><p>We will be in touch shortly.</p>`
            };
        
        } else {
            console.log("reading html template")
            let htmlTemplate = fs.readFileSync(path.resolve(__dirname, '../../../../components/Email/imported-from-beefreeio.html'), 'utf8');

            console.log("replacing html template")
            htmlTemplate = htmlTemplate.replace('Details recieved', "");
            htmlTemplate = htmlTemplate.replace('Name - ${name}', "");
            htmlTemplate = htmlTemplate.replace('Message - ${message}', "");
            htmlTemplate = htmlTemplate.replace('Phone - ${phone}', "");

            console.log(htmlTemplate)
            // If the request is from the new form
            mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Thanks for contacting us!',
                // bcc: process.env.EMAIL_BCC,
                html: htmlTemplate,
                attachments: [
                    {
                        filename: 'logo.png',
                        path: path.resolve(__dirname, '../../../../components/Email/images/logo.png'),
                        cid: 'logo.png' 
                    },
                    {
                        filename: 'panel.jpg',
                        path: path.resolve(__dirname, '../../../../components/Email/images/panel.jpg'),
                        cid: 'panel.jpg' 
                    },
                    {
                        filename: 'facebook2x.png',
                        path: path.resolve(__dirname, '../../../../components/Email/images/facebook2x.png'),
                        cid: 'facebook2x.png' 
                    },
                    {
                        filename: 'twitter2x.png',
                        path: path.resolve(__dirname, '../../../../components/Email/images/twitter2x.png'),
                        cid: 'twitter2x.png' 
                    },
                    {
                        filename: 'instagram2x.png',
                        path: path.resolve(__dirname, '../../../../components/Email/images/instagram2x.png'),
                        cid: 'instagram2x.png' 
                    },
                    {
                        filename: 'website2x.png',
                        path: path.resolve(__dirname, '../../../../components/Email/images/website2x.png'),
                        cid: 'website2x.png' 
                    }
                ]
        };
    }
        
        console.log("created mailOptions")
        console.log(mailOptions)

        try {
            await new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });

            res.send({
                success: true,
                message: 'Thanks for contacting us. We will get back to you shortly',
            });
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Something went wrong. Try again later',
            });
        }
    } else {
        // Handle any other HTTP method
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
