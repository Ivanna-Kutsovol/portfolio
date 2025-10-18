import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest){
    
    try{
        const data = await req.json();
        const {firstName, lastName, email, message} = data;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New message from ${firstName} ${lastName}`,
            text: `From: ${email}\nMessage: ${message}`
        }
        await transporter.sendMail(mailOptions);
        return NextResponse.json({message : "ok"})
    }catch(error){
        console.log(error);
        return NextResponse.json({message : "error"})
    }
}