import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport(sgTransport({
  auth:{
    api_key:'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'
  }
}));

export default transporter;