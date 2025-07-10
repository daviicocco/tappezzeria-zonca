import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { nome, email, telefono, messaggio } = await request.json();

    // Validazione dei dati
    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { error: 'Nome, email e messaggio sono obbligatori' },
        { status: 400 }
      );
    }

    // Configurazione del transporter con i tuoi dati
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verifica la connessione SMTP
    await transporter.verify();

    // Email da inviare a te (notifica nuovo preventivo)
    const mailToYou = {
      from: `"Sito Web" <${process.env.SMTP_USER}>`,
      to: 'tappezzeriazonca@gmail.com',
      subject: `Nuova richiesta preventivo da ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; font-size: 24px; font-weight: bold; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
              NUOVA RICHIESTA PREVENTIVO
            </h2>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 15px; font-size: 18px; font-weight: 600;">
                Dettagli Cliente
              </h3>
              <p style="margin: 8px 0; color: #374151;"><strong>Nome:</strong> ${nome}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Telefono:</strong> ${telefono || 'Non fornito'}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
              <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 15px; font-size: 18px; font-weight: 600;">
                Messaggio
              </h3>
              <p style="line-height: 1.6; white-space: pre-wrap; color: #374151; margin: 0; padding: 15px; background-color: #f8fafc; border-radius: 6px;">${messaggio}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Ricevuto il ${new Date().toLocaleDateString('it-IT', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Email di conferma per il cliente
    const mailToClient = {
      from: `"Zonca Mimmo" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Conferma ricezione richiesta preventivo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; font-size: 24px; font-weight: bold; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
              GRAZIE PER LA TUA RICHIESTA
            </h2>
            
            <p style="font-size: 16px; color: #1e293b; margin-bottom: 20px;">
              Ciao <strong>${nome}</strong>,
            </p>
            
            <p style="line-height: 1.6; color: #374151; margin-bottom: 25px;">
              Abbiamo ricevuto la tua richiesta di preventivo e ti ringraziamo per averci contattato. 
              La tua fiducia è importante per noi.
            </p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #4f46e5;">
              <p style="margin: 0; color: #1e293b; font-weight: 600;">
                Ti contatteremo al più presto per fornirti un preventivo dettagliato.
              </p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
              <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 15px; font-size: 18px; font-weight: 600;">
                Riepilogo della tua richiesta
              </h3>
              <div style="background-color: white; padding: 15px; border-radius: 6px;">
                <p style="line-height: 1.6; white-space: pre-wrap; margin: 0; color: #374151;">${messaggio}</p>
              </div>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 15px; font-size: 18px; font-weight: 600;">
                Contatti Diretti
              </h3>
              <p style="margin: 10px 0; color: #374151;">Per qualsiasi informazione urgente:</p>
              <p style="margin: 8px 0; color: #374151;"><strong>+39 333 945 6979</strong> (Mimmo)</p>
              <p style="margin: 8px 0; color: #374151;"><strong>+39 344 269 8878</strong> (Jacopo)</p>
              <p style="margin: 8px 0; color: #374151;"><strong>mimmo.zonca@gmail.com</strong></p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Cordiali saluti,<br>
                <strong style="color: #1e293b;">Zonca Mimmo</strong>
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Invia entrambe le email
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToClient);

    return NextResponse.json({ 
      success: true, 
      message: 'Email inviate con successo' 
    });

  } catch (error) {
    console.error('Errore dettagliato nell\'invio email:', error);
    
    // Log più dettagliato per debugging
    if (error instanceof Error) {
      console.error('Messaggio errore:', error.message);
      console.error('Stack trace:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Errore nell\'invio dell\'email',
        details: error instanceof Error ? error.message : 'Errore sconosciuto'
      },
      { status: 500 }
    );
  }
}