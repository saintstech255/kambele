const translations = {
  en: {
    announcement: "Your trusted partner in land and property investment",

    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact",

    headerCta: "Talk to us",

    heroTitle: "Build your future<br><em>on solid ground.</em>",
    heroCopy: "Explore land opportunities, professional surveying services and smarter ways to invest in property.",
    exploreServices: "Explore our services",
    contactUs: "Contact us",

    introTitle: "Land is more than a place.<br><em>It is a possibility.</em>",
    introCopy: "Kambele Investment is an Arusha-based business focused on land sales, land surveying and land investment opportunities. We help individuals and businesses take informed steps towards their property goals.",

    servicesTitle: "Opportunities built<br><em>around your goals.</em>",

    service1Title: "Residential Plots",
    service1Copy: "Land opportunities for building a home and planning for the future.",

    service2Title: "Commercial Plots",
    service2Copy: "Explore land options for business, development and commercial use.",

    service3Title: "Land Surveying",
    service3Copy: "Land surveying and plot measurement support for informed decisions.",

    service4Title: "Land Investment",
    service4Copy: "Discuss land investment opportunities and your long-term property plans.",

    featureTitle: "Your next chapter<br><em>starts with a location.</em>",
    featureCopy: "Looking for residential or commercial land? Tell us what you have in mind. Our team can guide you through the opportunities currently available.",
    projectsButton: "Explore all projects",

    whyTitle: "Make your next<br><em>move with clarity.</em>",

    why1Title: "Guidance that starts with you",
    why1Copy: "We take time to understand your needs before discussing suitable options.",

    why2Title: "Services in one place",
    why2Copy: "Connect with us about land sales, surveying and investment enquiries.",

    why3Title: "Local presence in Arusha",
    why3Copy: "Speak with our team about land opportunities in and around the region.",

    ctaLabel: "LET'S TALK ABOUT YOUR PLANS",
    ctaTitle: "A better future begins<br>with a conversation.",
    ctaButton: "Chat on WhatsApp ↗",

    footerDescription: "Land, surveying and investment opportunities. Let's build on solid ground.",
    quickLinks: "QUICK LINKS",
    contactHeading: "CONTACT",
    enquiryHeading: "SEND AN ENQUIRY",
    enquiryCopy: "Have a question about land or surveying?",
    footerWhatsApp: "Message us on WhatsApp ↗",
    copyright: "All rights reserved."
  },

  sw: {
    announcement: "Mshirika wako wa kuaminika katika ardhi na uwekezaji wa mali",

    navHome: "Mwanzo",
    navAbout: "Kuhusu Sisi",
    navServices: "Huduma",
    navProjects: "Miradi",
    navContact: "Mawasiliano",

    headerCta: "Wasiliana nasi",

    heroTitle: "Jenga kesho yako<br><em>juu ya msingi imara.</em>",
    heroCopy: "Gundua fursa za ardhi, huduma za kitaalamu za upimaji na njia bora za kuwekeza kwenye mali.",
    exploreServices: "Angalia huduma zetu",
    contactUs: "Wasiliana nasi",

    introTitle: "Ardhi si eneo tu.<br><em>Ni fursa ya maendeleo.</em>",
    introCopy: "Kambele Investment ni biashara yenye makao yake Arusha inayojihusisha na uuzaji wa viwanja, upimaji wa ardhi na fursa za uwekezaji wa ardhi. Tunawasaidia watu binafsi na wafanyabiashara kufanya maamuzi sahihi kuhusu malengo yao ya kumiliki mali.",

    servicesTitle: "Fursa zinazojengwa<br><em>kuzingatia malengo yako.</em>",

    service1Title: "Viwanja vya Makazi",
    service1Copy: "Fursa za kupata viwanja kwa ajili ya kujenga makazi na kupanga maisha ya baadaye.",

    service2Title: "Viwanja vya Biashara",
    service2Copy: "Gundua viwanja vinavyofaa kwa biashara, maendeleo na matumizi ya kibiashara.",

    service3Title: "Upimaji wa Ardhi",
    service3Copy: "Huduma za upimaji wa ardhi na viwanja ili kukusaidia kufanya maamuzi sahihi.",

    service4Title: "Uwekezaji wa Ardhi",
    service4Copy: "Wasiliana nasi kuhusu fursa za uwekezaji wa ardhi na mipango yako ya muda mrefu.",

    featureTitle: "Hatua yako inayofuata<br><em>inaanzia kwenye eneo sahihi.</em>",
    featureCopy: "Unatafuta kiwanja cha makazi au biashara? Tuambie mahitaji yako. Timu yetu inaweza kukuelekeza kuhusu fursa zinazopatikana kwa sasa.",
    projectsButton: "Angalia miradi yote",

    whyTitle: "Fanya hatua yako inayofuata<br><em>kwa uamuzi sahihi.</em>",

    why1Title: "Mwongozo unaozingatia mahitaji yako",
    why1Copy: "Tunachukua muda kuelewa mahitaji yako kabla ya kujadili chaguo zinazokufaa.",

    why2Title: "Huduma mbalimbali sehemu moja",
    why2Copy: "Wasiliana nasi kuhusu uuzaji wa viwanja, upimaji na masuala ya uwekezaji.",

    why3Title: "Uwepo wetu Arusha",
    why3Copy: "Zungumza na timu yetu kuhusu fursa za ardhi ndani na maeneo yanayozunguka Arusha.",

    ctaLabel: "TUZUNGUMZIE MIPANGO YAKO",
    ctaTitle: "Kesho bora inaanza<br>kwa mazungumzo.",
    ctaButton: "Tuandikie WhatsApp ↗",

    footerDescription: "Fursa za ardhi, upimaji na uwekezaji. Tujenge juu ya msingi imara.",
    quickLinks: "VIUNGO MUHIMU",
    contactHeading: "MAWASILIANO",
    enquiryHeading: "TUMA UJUMBE",
    enquiryCopy: "Una swali kuhusu ardhi au huduma za upimaji?",
    footerWhatsApp: "Tutumie ujumbe WhatsApp ↗",
    copyright: "Haki zote zimehifadhiwa."
  }
};


// LANGUAGE SYSTEM

let currentLanguage = localStorage.getItem("kambeleLanguage") || "en";

const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {

  if (!translations[language]) {
    language = "en";
  }

  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (translations[language][key] !== undefined) {
      element.innerHTML = translations[language][key];
    }

  });

  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "SW" : "EN";
  }

  localStorage.setItem("kambeleLanguage", language);
}


// LANGUAGE BUTTON

if (languageToggle) {

  languageToggle.addEventListener("click", () => {

    const nextLanguage = currentLanguage === "en" ? "sw" : "en";

    setLanguage(nextLanguage);

  });

}


// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// APPLY SAVED LANGUAGE

setLanguage(currentLanguage);

