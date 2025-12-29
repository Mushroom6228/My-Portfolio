// Sistema de troca de idioma
document.addEventListener("DOMContentLoaded", function () {
  const languageSwitchBtn = document.getElementById("languageSwitchBtn");
  const flagImg = languageSwitchBtn.querySelector("img");

  // URLs das bandeiras (usando arquivos locais)
  const flags = {
    pt: "brasil.webp", // Bandeira Brasil
    en: "euas.webp", // Bandeira EUA
  };

  // Verificar o idioma salvo no localStorage (padrão: português)
  const savedLang = localStorage.getItem("siteLanguage") || "pt";
  setLanguage(savedLang);

  function setLanguage(lang) {
    if (lang === "en") {
      document.body.classList.add("lang-en");
      flagImg.src = flags.pt; // Mostra bandeira do Brasil (volta pro PT)
      flagImg.alt = "Mudar para Português";
    } else {
      document.body.classList.remove("lang-en");
      flagImg.src = flags.en; // Mostra bandeira EUA (vai pro EN)
      flagImg.alt = "Change to English";
    }

    localStorage.setItem("siteLanguage", lang);
  }

  // Evento de clique no botão
  languageSwitchBtn.addEventListener("click", function () {
    const currentLang = localStorage.getItem("siteLanguage") || "pt";
    const newLang = currentLang === "pt" ? "en" : "pt";
    setLanguage(newLang);
  });

  // Adicionar efeito de ripple ao clicar
  languageSwitchBtn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});

