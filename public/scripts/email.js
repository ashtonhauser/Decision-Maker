const nodemailer = require('nodemailer');

function sendCreateTweet(adminEmail, id) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'donotreply.midterm.12345432523@gmail.com',
        pass: 'randompass'
    },
    tls: {
        rejectUnauthorized: false
    }
  });
  let HelperOptions = {
    form: '"MID" <donotreply.midterm.12345432523@gmail.com>',
    to: adminEmail,
    subject: 'Heres your links!',
    text: `Admin link: localhost:8080/admin/poll/${id}
    User link: localhost:8080/sub/poll/${id}`
  };
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("sent");
  });
}

function sendSubmitEmail(adminEmail, id) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'donotreply.midterm.12345432523@gmail.com',
        pass: 'randompass'
    },
    tls: {
        rejectUnauthorized: false
    }
  });
  let HelperOptions = {
    form: '"MID" <donotreply.midterm.12345432523@gmail.com>',
    to: adminEmail,
    subject: 'User submitted data!',
    text: `Admin link: localhost:8080/admin/poll/${id}`
  };
  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("sent");
  });
}

