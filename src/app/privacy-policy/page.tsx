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
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            1. Titolare del Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Il titolare del trattamento dei dati personali è{" "}
              <strong>[Nome Azienda]</strong>, con sede in [Indirizzo completo],
              Partita IVA [P.IVA], Codice Fiscale [CF].
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Contatti:</strong>
              <br />
              Email: privacy@[tuodominio].com
              <br />
              Telefono: [Numero di telefono]
              <br />
              PEC: [Indirizzo PEC]
            </p>
          </div>
        </section>

        {/* Sezione 2: Tipologie di dati raccolti */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            2. Tipologie di Dati Raccolti
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali che trattiamo includono:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>
                <strong>Dati di contatto:</strong> nome, cognome, email, numero
                di telefono, indirizzo
              </li>
              <li>
                <strong>Dati di navigazione:</strong> indirizzo IP, tipo di
                browser, pagine visitate, tempo di permanenza
              </li>
              <li>
                <strong>Dati tecnici:</strong> cookies, identificatori di
                dispositivo, dati di utilizzo del sito
              </li>
              <li>
                <strong>Dati commerciali:</strong> preferenze, cronologia degli
                acquisti, comunicazioni
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione 3: Finalità del trattamento */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            3. Finalità del Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I tuoi dati personali vengono trattati per le seguenti finalità:
            </p>
            <div className="mt-4 space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Finalità contrattuali (Art. 6.1.b GDPR)
                </h3>
                <p className="text-gray-700">
                  Erogazione dei servizi richiesti, gestione dei contratti,
                  fatturazione
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Finalità di marketing (Art. 6.1.a GDPR)
                </h3>
                <p className="text-gray-700">
                  Invio di comunicazioni promozionali, newsletter, offerte
                  commerciali
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-gray-900">
                  Finalità tecniche (Art. 6.1.f GDPR)
                </h3>
                <p className="text-gray-700">
                  Funzionamento del sito web, sicurezza informatica, analisi
                  statistiche
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione 4: Base giuridica */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            4. Base Giuridica del Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Il trattamento dei dati è basato su:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>
                <strong>Consenso dell'interessato</strong> (Art. 6.1.a GDPR) per
                finalità di marketing
              </li>
              <li>
                <strong>Esecuzione di un contratto</strong> (Art. 6.1.b GDPR)
                per l'erogazione dei servizi
              </li>
              <li>
                <strong>Interesse legittimo</strong> (Art. 6.1.f GDPR) per
                sicurezza e funzionamento del sito
              </li>
              <li>
                <strong>Obbligo di legge</strong> (Art. 6.1.c GDPR) per
                adempimenti fiscali e contabili
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione 5: Modalità di trattamento */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            5. Modalità di Trattamento
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali sono trattati con strumenti automatizzati e/o
              manuali, nel rispetto delle misure di sicurezza previste dal GDPR.
              Adottiamo misure tecniche e organizzative adeguate per proteggere
              i dati da accessi non autorizzati, perdita, distruzione o
              divulgazione.
            </p>
          </div>
        </section>

        {/* Sezione 6: Conservazione dei dati */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            6. Conservazione dei Dati
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali sono conservati per il tempo strettamente
              necessario agli scopi per cui sono stati raccolti:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>
                <strong>Dati contrattuali:</strong> per tutta la durata del
                rapporto contrattuale e per 10 anni successivi
              </li>
              <li>
                <strong>Dati di marketing:</strong> fino alla revoca del
                consenso o per 2 anni dall'ultima attività
              </li>
              <li>
                <strong>Dati di navigazione:</strong> fino a 13 mesi dalla
                raccolta
              </li>
              <li>
                <strong>Dati fiscali:</strong> per 10 anni come previsto dalla
                normativa fiscale
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione 7: Destinatari dei dati */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            7. Destinatari dei Dati
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali possono essere comunicati a:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>Personale interno autorizzato al trattamento</li>
              <li>Fornitori di servizi IT e hosting</li>
              <li>Consulenti legali, fiscali e commerciali</li>
              <li>Autorità competenti quando previsto dalla legge</li>
              <li>Partner commerciali previa esplicita autorizzazione</li>
            </ul>
          </div>
        </section>

        {/* Sezione 8: Trasferimento dati */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            8. Trasferimento dei Dati
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I dati personali sono trattati principalmente all'interno
              dell'Unione Europea. Eventuali trasferimenti verso paesi terzi
              avvengono nel rispetto delle garanzie previste dal GDPR, mediante
              decisioni di adeguatezza della Commissione Europea o clausole
              contrattuali standard.
            </p>
          </div>
        </section>

        {/* Sezione 9: Diritti dell'interessato */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            9. Diritti dell'Interessato
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              In qualità di interessato, hai diritto a:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Accesso (Art. 15 GDPR)
                </h3>
                <p className="text-sm text-gray-700">
                  Ottenere informazioni sui tuoi dati e una copia degli stessi
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Rettifica (Art. 16 GDPR)
                </h3>
                <p className="text-sm text-gray-700">
                  Correggere dati inesatti o completare dati incompleti
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Cancellazione (Art. 17 GDPR)
                </h3>
                <p className="text-sm text-gray-700">
                  Richiedere la cancellazione dei dati quando lecito
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Limitazione (Art. 18 GDPR)
                </h3>
                <p className="text-sm text-gray-700">
                  Limitare il trattamento in determinati casi
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Portabilità (Art. 20 GDPR)
                </h3>
                <p className="text-sm text-gray-700">
                  Ricevere i dati in formato strutturato e leggibile
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Opposizione (Art. 21 GDPR)
                </h3>
                <p className="text-sm text-gray-700">
                  Opporti al trattamento per motivi legittimi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione 10: Cookies */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            10. Cookies
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Il nostro sito utilizza cookies tecnici necessari per il
              funzionamento e cookies di profilazione per migliorare
              l'esperienza utente. Puoi gestire le tue preferenze tramite il
              banner cookies o le impostazioni del browser.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Per maggiori informazioni, consulta la nostra{" "}
              <a
                href="/cookie-policy"
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </section>

        {/* Sezione 11: Reclami */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            11. Diritto di Reclamo
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Hai il diritto di presentare reclamo all'Autorità Garante per la
              Protezione dei Dati Personali (www.garanteprivacy.it) se ritieni
              che il trattamento dei tuoi dati violi la normativa vigente.
            </p>
          </div>
        </section>

        {/* Sezione 12: Modifiche */}
        <section>
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            12. Modifiche alla Privacy Policy
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Ci riserviamo il diritto di modificare questa Privacy Policy in
              qualsiasi momento. Le modifiche saranno pubblicate su questa
              pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </div>
        </section>

        {/* Contatti */}
        <section className="bg-indigo-50 rounded-lg p-6">
          <h2 className="text-2xl font-tanker font-bold text-black mb-4">
            Contatti per la Privacy
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Per qualsiasi domanda relativa al trattamento dei tuoi dati
              personali o per esercitare i tuoi diritti, puoi contattarci:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@[tuodominio].com
              </p>
              <p className="text-gray-700">
                <strong>Telefono:</strong> [Numero di telefono]
              </p>
              <p className="text-gray-700">
                <strong>Indirizzo:</strong> [Indirizzo completo]
              </p>
              <p className="text-gray-700">
                <strong>PEC:</strong> [Indirizzo PEC]
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
