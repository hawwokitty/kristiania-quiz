const cat = [
  {
    question: "Hva motiverer deg mest i et studium?",
    options: [
      { text: "Å forstå hvordan bedrifter tjener penger og styrer økonomien 📊", category: "Økonomi og administrasjon" },
      { text: "Å skape nye løsninger og forbedre eksisterende produkter eller tjenester 💡", category: "Innovasjon og entreprenørskap" },
      { text: "Å jobbe med teknologi, data og digitale løsninger for fremtiden 🖥️", category: "Teknologi og digitalisering" },
      { text: "Å forstå hvordan verdens globale vareflyt fungerer og styres 🚚", category: "Logistikk" },
    ]
  },
  {
    question: "Hvilken type jobb ser du for deg i fremtiden?",
    options: [
      { text: "Jobbe med analyse, økonomi og risikostyring for å hjelpe bedrifter og ta smarte valg 💼", category: "Økonomi og administrasjon" },
      { text: "Drive med innovasjon og gjøre gode idéer til faktisk business 🚀", category: "Innovasjon og entreprenørskap" },
      { text: "Jobbe med programmering, kunstig intelligens eller dataanalyse – for å utvikle smarte digitale løsninger 🔍", category: "Teknologi og digitalisering" },
      { text: "Jobbe med å organisere transport og distribusjon slik at varer når frem til rett sted, til rett tid - på den mest bærekraftige måten 📦", category: "Logistikk" },
    ]
  },
  {
    question: "Hvilket tema synes du høres mest spennende ut?",
    options: [
      { text: "Investeringer, bærekraft, sikkerhet og hvordan selskaper skaper verdier 📈", category: "Økonomi og administrasjon" },
      { text: "Kreativ problemløsning og utvikling av nye konsepter 🎯", category: "Innovasjon og entreprenørskap" },
      { text: "Kunstig intelligens, cybersikkerhet, full-stack eller big data 🤖", category: "Teknologi og digitalisering" },
      { text: "Effektiv logistikk, forsyningskjeder og bærekraftig transport 🚛", category: "Logistikk" }
    ]
  }
];


const tek = [
    {
      question: "Hvilket av disse temaene interesserer deg mest?",
      options: [
        { text: "Hvordan beskytte systemer mot hackere og datakriminalitet 🔐", category: "Cybersikkerhet" },
        { text: "Utvikling av nettsider, apper eller spill 🎮", category: "Informasjonsteknologi" },
        { text: "Analyse av store datamengder for å finne mønstre 📊", category: "Data Science" },
        { text: "Skape intelligente systemer som kan lære og ta beslutninger 🤖", category: "Artificial Intelligence" }
      ]
    },
    {
      question: "Hva høres mest spennende ut for deg?",
      options: [
        { text: "Stoppe cyberangrep og beskytte sensitive data 🕵️‍♂️", category: "Cybersikkerhet" },
        { text: "Lage en app fra bunnen av 🎮", category: "Informasjonsteknologi" },
        { text: "Analysere data for å forutsi trender og atferd 📊", category: "Data Science" },
        { text: "Skape en chatbot eller en AI-assistent 🤖", category: "Artificial Intelligence" }
      ]
    },
    {
      question: "Hvilket verktøy eller konsept synes du høres mest spennende ut?",
      options: [
        { text: "Brannmurer og kryptering 🔐", category: "Cybersikkerhet" },
        { text: "HTML, CSS eller JavaScript 🎨", category: "Informasjonsteknologi" },
        { text: "Python, SQL og store datasett 📊", category: "Data Science" },
        { text: "Nevrale nettverk og deep learning 🧠", category: "Artificial Intelligence" }
      ]
    },
    {
      question: "Hvis du skulle velge en jobb, hva ville passet deg best?",
      options: [
        { text: "IT-sikkerhetsekspert eller etisk hacker 🛡️", category: "Cybersikkerhet" },
        { text: "Webutvikler eller frontend-programmerer 💻", category: "Informasjonsteknologi" },
        { text: "Dataanalytiker eller big data-ekspert 📊", category: "Data Science" },
        { text: "AI-ingeniør eller spesialist på maskinlæring 🤖", category: "Artificial Intelligence" }
      ]
    },
    {
      question: "Hvilket problem ville du helst løst?",
      options: [
        { text: "Beskytte en stor bedrift mot cyberangrep 🔐", category: "Cybersikkerhet" },
        { text: "Lage en ny mobilapp eller et interaktivt nettsted 📱", category: "Informasjonsteknologi" },
        { text: "Forutsi hvilke kunder som mest sannsynlig vil kjøpe et produkt 📈", category: "Data Science" },
        { text: "Utvikle en AI som kan føre en naturlig samtale med mennesker 🤖", category: "Artificial Intelligence" }
      ]
    }
  ];

  const eco = [
    {
        question: "Hva interesserer deg mest innenfor forretningsverdenen?",
        options: [
          { text: "Hvordan bedrifter tjener penger og styres effektivt 📊", category: "Økonomi og ledelse" },
          { text: "Hvordan bedrifter håndterer risiko, sikkerhet og økonomiske beslutninger 🔐", category: "Digitalisering og økonomi" },
          { text: "Hvordan varer transporteres og lagres mest effektivt 🚚", category: "Logistikk og Supply Chain Management" },
          { text: "Hvordan man utvikler nye ideer og starter en bedrift 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvilket scenario ville du funnet mest interessant å jobbe med?",
        options: [
          { text: "Analysere en bedrifts økonomiske situasjon for å ta bedre beslutninger 📊", category: "Økonomi og ledelse" },
          { text: "Håndtere en krisesituasjon og sikre at virksomheten er forberedt på risiko og trusler 🚨", category: "Digitalisering og økonomi" },
          { text: "Forbedre og effektivisere forsyningskjeder og transport 📦", category: "Logistikk og Supply Chain Management" },
          { text: "Lage en forretningsplan for en ny innovativ startup 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvilket av disse utsagnene passer best for deg?",
        options: [
          { text: "Jeg liker å forstå hvordan økonomiske beslutninger påvirker en bedrift 📊", category: "Økonomi og ledelse" },
          { text: "Jeg liker å tenke på hvordan risiko, sikkerhet og beredskap påvirker virksomheter 🔐", category: "Digitalisering og økonomi" },
          { text: "Jobbe med netthandel og sørge for at varer leveres lynraskt til kunder over hele verden 🚛", category: "Logistikk og Supply Chain Management" },
          { text: "Jeg elsker å komme opp med nye ideer og løsninger 💡", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvis du kunne jobbe i en bransje, hvilken ville du valgt?",
        options: [
          { text: "Bank, finans eller bedriftsrådgivning 🏦", category: "Økonomi og ledelse" },
          { text: "Virksomheter der sikkerhet, beredskap og risikostyring er avgjørende 🚨", category: "Digitalisering og økonomi" },
          { text: "Transport, logistikk eller varehandel 🚢", category: "Logistikk og Supply Chain Management" },
          { text: "Oppstartsselskaper eller innovasjonsavdelinger i store bedrifter 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvilken av disse utfordringene ville du helst løst?",
        options: [
          { text: "Hvordan kan en bedrift øke lønnsomheten sin? 📊", category: "Økonomi og ledelse" },
          { text: "Hvordan kan vi beskytte en virksomhet mot trusler og samtidig sikre økonomisk stabilitet? 🔐", category: "Digitalisering og økonomi" },
          { text: "Hvordan redusere miljøavtrykket i logistikk og finne grønne løsninger for transport og vareflyt 🌍", category: "Logistikk og Supply Chain Management" },
          { text: "Hvordan kan jeg lansere en ny forretningsidé med suksess? 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      }
  ];

  const ecoBachelorPrograms = {
    okonomiLedelse: {
      name: "Bachelor i økonomi og administrasjon",
      category: "Økonomi og ledelse",
      url: "https://www.kristiania.no/studier/bachelor/okonomi-og-administrasjon/",
      description: "God tallforståelse er et krav for dagens og fremtidens ledere. Med en bachelor i økonomi og administrasjon får du en solid utdanning som gjør deg attraktiv på arbeidsmarkedet."
    },
    digitaliseringOkonomi: {
      name: "Bachelor i sikkerhet og økonomi",
      category: "Digitalisering og økonomi",
      url: "https://www.kristiania.no/studier/bachelor/sikkerhet-og-okonomi/",
      description: "I en verden hvor digital sikkerhet og økonomisk stabilitet er avgjørende, gir Bachelor i sikkerhet og økonomi deg verktøyene du trenger for å beskytte organisasjoner og kritisk infrastruktur mot moderne trusler."
    },
    logistikkSCM: {
      name: "Bachelor i Supply Chain Management og logistikk",
      category: "Logistikk og Supply Chain Management",
      url: "https://www.kristiania.no/studier/bachelor/logistikk-og-supply-chain-management/",
      description: "Med en bachelorgrad i SCM og logistikk får du ettertraktet kompetanse innen transport, handel og økonomi og kan lage effektive, bærekraftige logistikkløsninger."
    },
    innovasjonForretningsutvikling: {
      name: "Bachelor i innovasjon og forretningsutvikling",
      category: "Innovasjon og forretningsutvikling",
      url: "https://www.kristiania.no/studier/bachelor/innovasjon-og-forretningsutvikling/",
      description: "Dette er studiet for deg som vil se idéer realisert. Med en bachelor i innovasjon og forretningsutvikling får du kunnskapen du trenger for å skape morgendagens løsninger, tjenester og produkter."
    }
};

const techBachelorPrograms = {
    cybersikkerhet: {
      name: "Bachelor i Cybersikkerhet",
      category: "Cybersikkerhet",
      url: "https://www.kristiania.no/studier/bachelor/cybersikkerhet/",
      description: "Vil du bidra til å sikre samfunnet mot digitale trusler? Med en bachelorgrad i cybersikkerhet vil du bli en ettertraktet kandidat for flere spennende stillinger."
    },
    artificialIntelligence: {
      name: "Bachelor i Artificial Intelligence",
      category: "Artificial Intelligence",
      url: "https://www.kristiania.no/studier/bachelor/artificial-intelligence/",
      description: "Dette studiet gir deg den nødvendige kunnskapen og ferdighetene for å designe og implementere AI-systemer – en høyt etterspurt kompetanse i en teknologidrevet verden hvor kunstig intelligens er i sterk vekst."
    },
    dataScience: {
      name: "Bachelor i Data Science",
      category: "Data Science",
      url: "https://www.kristiania.no/studier/bachelor/data-science/",
      description: "Har du hjerte for IT og hode for analyse? Med en bachelor i Data Science blir du ettertraktet på jobbmarkedet og kan glede deg til en spennende karriere i en bransje i sterk vekst."
    },
    informasjonsteknologi: {
      name: "Bachelor i Informasjonsteknologi",
      category: "Informasjonsteknologi",
      url: "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-fullstack-utvikling/",
      description: "Vil du jobbe med hele utviklingsprosessen, fra programmering og design til sikkerhet og testing, innen både frontend og backend? Da er dette utdanningen for deg!"
    },
      ]
    }
};
  
  

  export default { cat, tek, eco, ecoBachelorPrograms, techBachelorPrograms };
