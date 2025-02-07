const cat = [
  {
    question: "Hva motiverer deg mest i et studium?",
    options: [
      { text: "Å forstå hvordan bedrifter tjener penger og styrer økonomien 📊", category: "Økonomi og administrasjon" },
      { text: "Å utvikle nye løsninger og forbedre eksisterende produkter eller tjenester 💡", category: "Innovasjon og entreprenørskap" },
      { text: "Å jobbe med data, teknologi og digitale løsninger for fremtiden 🖥️", category: "Teknologi og digitalisering" }
    ]
  },
  {
    question: "Hvilken type jobb ser du for deg i fremtiden?",
    options: [
      { text: "Jobbe som leder eller økonomiansvarlig i en bedrift 💼", category: "Økonomi og administrasjon" },
      { text: "Drive med utvikling av nye produkter, tjenester og løsninger 🚀", category: "Innovasjon og entreprenørskap" },
      { text: "Jobbe med programmering, kunstig intelligens eller dataanalyse 🔍", category: "Teknologi og digitalisering" }
    ]
  },
  {
    question: "Hvilket tema synes du høres mest spennende ut?",
    options: [
      { text: "Investeringer, bærekraft og hvordan selskaper skaper verdier 📈", category: "Økonomi og administrasjon" },
      { text: "Kreativ problemløsning og utvikling av nye konsepter 🎯", category: "Innovasjon og entreprenørskap" },
      { text: "Kunstig intelligens, cybersikkerhet eller big data 🤖", category: "Teknologi og digitalisering" }
    ]
  }
];

const tek = [
    {
      question: "Hvilket av disse temaene interesserer deg mest?",
      options: [
        { text: "Hvordan beskytte systemer mot hackere og datakriminalitet 🔐", category: "Cybersikkerhet" },
        { text: "Utvikling av nettsider, apper eller spill 🎮", category: "Informasjonsteknologi" },
        { text: "Analysering av store datamengder for å finne mønstre 📊", category: "Data Science" },
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
          { text: "Hvordan teknologi kan forbedre økonomiske prosesser 🖥️", category: "Digitalisering og økonomi" },
          { text: "Hvordan varer transporteres og lagres mest effektivt 🚚", category: "Logistikk og Supply Chain Management" },
          { text: "Hvordan man utvikler nye ideer og starter en bedrift 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvilket scenario ville du funnet mest interessant å jobbe med?",
        options: [
          { text: "Analysere en bedrifts økonomiske situasjon for å ta bedre beslutninger 📊", category: "Økonomi og ledelse" },
          { text: "Utvikle en digital løsning som effektiviserer økonomiske prosesser 📱", category: "Digitalisering og økonomi" },
          { text: "Optimalisere logistikk og transport for en stor bedrift 📦", category: "Logistikk og Supply Chain Management" },
          { text: "Lage en forretningsplan for en ny innovativ startup 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvilket av disse utsagnene passer best for deg?",
        options: [
          { text: "Jeg liker å forstå hvordan økonomiske beslutninger påvirker en bedrift 📊", category: "Økonomi og ledelse" },
          { text: "Jeg er interessert i hvordan teknologi kan gjøre økonomiske prosesser enklere 💻", category: "Digitalisering og økonomi" },
          { text: "Jeg er fascinert av hvordan produkter fraktes fra fabrikk til butikk 🚛", category: "Logistikk og Supply Chain Management" },
          { text: "Jeg elsker å komme opp med nye ideer og løsninger 💡", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvis du kunne jobbe i en bransje, hvilken ville du valgt?",
        options: [
          { text: "Bank, finans eller bedriftsrådgivning 🏦", category: "Økonomi og ledelse" },
          { text: "Fintech eller økonomisk digitalisering 📲", category: "Digitalisering og økonomi" },
          { text: "Transport, logistikk eller varehandel 🚢", category: "Logistikk og Supply Chain Management" },
          { text: "Oppstartsselskaper eller innovasjonsavdelinger i store bedrifter 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      },
      {
        question: "Hvilken av disse utfordringene ville du helst løst?",
        options: [
          { text: "Hvordan kan en bedrift øke lønnsomheten sin? 📊", category: "Økonomi og ledelse" },
          { text: "Hvordan kan kunstig intelligens brukes til å automatisere regnskap? 🤖", category: "Digitalisering og økonomi" },
          { text: "Hvordan kan man effektivt transportere varer over hele verden? 🌍", category: "Logistikk og Supply Chain Management" },
          { text: "Hvordan kan jeg lansere en ny forretningsidé med suksess? 🚀", category: "Innovasjon og forretningsutvikling" }
        ]
      }
  ];

  const ecoBachelorPrograms = {
    okonomiLedelse: {
      name: "Bachelor i økonomi og ledelse",
      category: "Økonomi og ledelse",
      url: "https://www.kristiania.no/studier/bachelor/okonomi-og-ledelse/",
      description: "God tallforståelse er et krav for dagens og fremtidens ledere. Med en bachelor i økonomi og ledelse får du en solid utdanning som gjør deg attraktiv på arbeidsmarkedet."
    },
    digitaliseringOkonomi: {
      name: "Bachelor i digitalisering og økonomi",
      category: "Digitalisering og økonomi",
      url: "https://www.kristiania.no/studier/bachelor/digitalisering-og-okonomi/",
      description: "Vil du lede IT-prosjekter som skaper digitale produkter og tjenester for fremtiden? Med en bachelor i digitalisering og økonomi blir du verdifull i den digitale endringsprosessen som nå skjer i alle bransjer."
    },
    logistikkSCM: {
      name: "Bachelor i logistikk og Supply Chain Management",
      category: "Logistikk og Supply Chain Management",
      url: "https://www.kristiania.no/studier/bachelor/logistikk-og-supply-chain-management/",
      description: "Med en bachelorgrad i logistikk og SCM får du ettertraktet kompetanse innen transport, handel og økonomi og kan lage effektive, bærekraftige logistikkløsninger."
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
      programs: [
        {
          name: "Bachelor i informasjonsteknologi - Programmering",
          url: "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-programmering/",
          description: "Dette er utdanningen for deg som vil skrive god kode, enten du vil bygge og vedlikeholde apper og nettsider eller IT-systemer. En bachelor i programmering gir deg kompetanse arbeidslivet roper etter."
        },
        {
          name: "Bachelor i informasjonsteknologi - Frontend- og mobilutvikling",
          url: "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-frontend-og-mobilutvikling/",
          description: "Vil du lære programmering samtidig som du lager attraktive design? Denne utdanningen byr på svært gode jobbmuligheter."
        },
        {
          name: "Bachelor i informasjonsteknologi - E-business",
          url: "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-e-business/",
          description: "Lær hvordan IT-baserte forretningssystemer skaper verdier for folk, organisasjoner og samfunn. Et helt unikt studium i Norge, som gjør deg til en brobygger mellom bedrifter og nyskapende teknologi."
        },
        {
          name: "Bachelor i informasjonsteknologi - Interaksjonsdesign",
          url: "https://www.kristiania.no/studier/bachelor/informasjonsteknologi-interaksjonsdesign/",
          description: "Denne bachelorgraden ligger i skjæringspunktet mellom design og programmering. Lær å utvikle brukervennlige og effektive webløsninger som både fungerer godt og ser bra ut!"
        }
      ]
    }
};
  
  

  export default { cat, tek, eco, ecoBachelorPrograms, techBachelorPrograms };