import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport(sgTransport({
  auth:{
    api_key:'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'
  }
}));

const registerEmailer = (email) => {
 
  return ({
      from: 'info.eventbee@gmail.com',
      to: email,
      subject:'Registered Suuccessfully!',
      html:'<h1>Welcome to Photoshare!!!</h1>'
  })
}
const profileEmailer = (email) => {
 
  return ({
      from: 'info.eventbee@gmail.com',
      to: email,
      subject:'Profile Changes',
      html:'<h1>Profile Updated Successfully!!!<h1>'
  })
}
export { transporter, registerEmailer, profileEmailer };