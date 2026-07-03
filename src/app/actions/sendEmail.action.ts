'use server'
// import { EmailTemplate } from "@app/contact/components";
// import nodemailer from 'nodemailer';

interface IRawFormData {
  email: FormDataEntryValue;
  subject: FormDataEntryValue;
  name: FormDataEntryValue;
  message: FormDataEntryValue;
}

export default async function sendEmailAction(formData: FormData){
  const info: IRawFormData = {
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    name: formData.get('name') as string,
    message: formData.get('message') as string,
  };
  console.log(info);
}