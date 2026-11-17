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

    heroCopy:
      "Explore land opportunities, professional surveying services and smarter ways to invest in property.",

    exploreServices: "Explore our services",
    contactUs: "Contact us",

    introTitle:
      "Land is more than a place.<br><em>It is a possibility.</em>",

    introCopy:
      "Kambele Investment is an Arusha-based business focused on land sales, land surveying and land investment opportunities. We help individuals and businesses take informed steps towards their property goals.",

    servicesTitle:
      "Opportunities built<br><em>around your goals.</em>"
  },

  sw: {
    announcement:
      "Mshirika wako wa kuaminika katika ardhi na uwekezaji",

    navHome: "Mwanzo",
    navAbout: "Kuhusu Sisi",
    navServices: "Huduma",
    navProjects: "Miradi",
    navContact: "Mawasiliano",

    headerCta: "Wasiliana nasi",

    heroTitle:
      "Jenga kesho yako<br><em>juu ya msingi imara.</em>",

    heroCopy:
      "Pata fursa za ardhi, huduma za upimaji na njia bora za kuwekeza kwenye mali.",

    exploreServices: "Angalia huduma zetu",
    contactUs: "Wasiliana nasi",

    introTitle:
      "Ardhi si eneo tu.<br><em>Ni fursa ya maendeleo.</em>",

    introCopy:
      "Kambele Investment ni biashara yenye makao yake Arusha inayojihusisha na uuzaji wa viwanja, upimaji wa ardhi na fursa za uwekezaji wa ardhi.",

    servicesTitle:
      "Fursa zinazojengwa<br><em>kuzingatia malengo yako.</em>"
  }

};

let currentLanguage = "en";

const languageToggle =
  document.getElementById("languageToggle");

function setLanguage(language) {

  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (translations[language][key]) {

      element.innerHTML = translations[language][key];

    }

  });

  languageToggle.textContent =
    language === "en" ? "SW" : "EN";

}

languageToggle.addEventListener("click", () => {

  setLanguage(currentLanguage === "en" ? "sw" : "en");

});

const menuToggle =
  document.querySelector(".menu-toggle");

const nav =
  document.querySelector(".nav");

menuToggle.addEventListener("click", () => {

  nav.classList.toggle("open");

});

nav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});

document.getElementById("year").textContent =
  new Date().getFullYear();
