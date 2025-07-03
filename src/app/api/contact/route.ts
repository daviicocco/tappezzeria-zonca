import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { nome, email, telefono, messaggio } = await request.json();
  
  // Qui implementi l'invio email (con nodemailer, resend, etc.)
  
  return NextResponse.json({ success: true });
}