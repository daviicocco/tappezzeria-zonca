export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-black ">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Informativa sulla privacy e protezione dei dati personali
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Sezione 1: Titolare del trattamento */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            1. Titolare del Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Il titolare del trattamento dei dati personali è{" "}
              <strong>Antimo Zonca</strong>, ditta individuale, con sede in Via Serci Centro Monsignor 51, Villagreca (SU) - Sardegna, Partita IVA 02372910923.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Contatti:</strong>
              <br />
              Email: mimmo.zonca@gmail.com
              <br />
              Telefono: +39 333 945 6979
              <br />
              PEC: [Inserisci indirizzo PEC se disponibile]
            </p>
          </div>
        </section>

        {/* Sezione 2: Tipologie di dati raccolti */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            2. Tipologie di Dati Raccolti
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali che trattiamo includono:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>
                <strong>Dati di contatto:</strong> nome, cognome, email, numero di telefono, eventuale indirizzo fornito dall'utente nel modulo preventivo.
              </li>
              <li>
                <strong>Dati tecnici:</strong> eventuali cookies tecnici necessari per il funzionamento del sito.
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione 3: Finalità del trattamento */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            3. Finalità del Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I tuoi dati personali vengono trattati esclusivamente per:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>Rispondere alle richieste di preventivo inviate tramite il modulo di contatto.</li>
              <li>Garantire il corretto funzionamento del sito web.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Non utilizziamo i dati per finalità di marketing o comunicazioni promozionali senza tuo esplicito consenso.
            </p>
          </div>
        </section>

        {/* Sezione 4: Base giuridica */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            4. Base Giuridica del Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Il trattamento dei dati è basato su:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>
                <strong>Consenso espresso</strong> dell’interessato al momento dell’invio del modulo preventivo.
              </li>
              <li>
                <strong>Interesse legittimo</strong> per garantire il funzionamento tecnico del sito.
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione 5: Modalità di trattamento */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            5. Modalità di Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali sono trattati in modo manuale e con strumenti informatici, adottando misure di sicurezza tecniche e organizzative adeguate a proteggerli da accessi non autorizzati o divulgazioni.
            </p>
          </div>
        </section>

        {/* Sezione 6: Conservazione dei dati */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            6. Conservazione dei Dati
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati raccolti tramite il modulo di contatto sono conservati per un periodo massimo di 2 anni dalla loro raccolta o fino a revoca del consenso.
            </p>
          </div>
        </section>

        {/* Sezione 7: Destinatari dei dati */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            7. Destinatari dei Dati
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali non sono comunicati a terze parti, salvo eventuali obblighi di legge o fornitori strettamente necessari (es. provider hosting).
            </p>
          </div>
        </section>

        {/* Sezione 8: Trasferimento dati */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            8. Trasferimento dei Dati
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati sono trattati principalmente all’interno dell’Unione Europea. Se utilizzi servizi esterni che trasferiscono dati fuori dall’UE, garantiamo che rispettino le normative GDPR.
            </p>
          </div>
        </section>

        {/* Sezione 9: Diritti dell'interessato */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            9. Diritti dell'Interessato
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Hai diritto di:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>Accedere ai tuoi dati personali.</li>
              <li>Chiedere la rettifica o cancellazione.</li>
              <li>Limitare o opporsi al trattamento.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca.</li>
              <li>Presentare reclamo all’Autorità Garante per la protezione dei dati personali.</li>
            </ul>
          </div>
        </section>

        {/* Sezione 10: Cookies */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            10. Cookies
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Il sito utilizza esclusivamente cookies tecnici necessari per il corretto funzionamento. Non vengono utilizzati cookies di profilazione o di terze parti.
            </p>
          </div>
        </section>

        {/* Sezione 11: Diritto di Reclamo */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            11. Diritto di Reclamo
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Puoi presentare reclamo all’Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noreferrer">www.garanteprivacy.it</a>) se ritieni che il trattamento dei tuoi dati non sia conforme alla legge.
            </p>
          </div>
        </section>

        {/* Sezione 12: Modifiche */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-4">
            12. Modifiche alla Privacy Policy
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento, pubblicando le modifiche su questa pagina con data di aggiornamento.
            </p>
          </div>
        </section>

        {/* Contatti */}
        <section className="bg-indigo-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Contatti per la Privacy
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Per qualsiasi domanda o richiesta relativa alla privacy, puoi contattarci:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> mimmo.zonca@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Telefono:</strong> +39 333 945 6979
              </p>
              <p className="text-gray-700">
                <strong>Indirizzo:</strong> Via Serci Centro Monsignor 51, Villagreca (SU) - Sardegna
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
