const guide = {
    portuguese: {
        about: {
            header: "Sobre mim",
            paragraph: "Adicione uma descrição sobre você e sua experiência como desenvolvedor de software."
        },
        skills: {
            header: "Habilidades"
        },
        portfolio: {
            header: "Portfólio"
        },
        contact: {
            header: "Contato"
        }
    },
    english: {
        about: {
            header: "About me",
            paragraph: "Adicione uma descrição sobre você e sua experiência como desenvolvedor de software."
        },
        skills: {
            header: "Tecnologies"
        },
        portfolio: {
            header: "Portfolio"
        },
        contact: {
            header: "Contact"
        }
    }
}

const resetLanguageButton = () => {
    const languages = document.querySelectorAll("#language span");
    languages.forEach(language => language.classList.remove("selected"));
}

const handleMenu = (language) => {
    const content = guide[language];
    const about = document.getElementById("about-menu");
    const skills = document.getElementById("skills-menu");
    const portfolio = document.getElementById("portfolio-menu");
    const contact = document.getElementById("contact-menu");
    about.innerHTML = content.about.header;
    skills.innerHTML = content.skills.header;
    portfolio.innerHTML = content.portfolio.header;
    contact.innerHTML = content.contact.header;
}

const handleAboutSection = (language) => {
    const about = document.getElementById("about");
    const h1 = about.querySelector("h1");
    const p = about.querySelector("p");

    const content = guide[language].about;
    h1.innerHTML = content.header;
    p.innerHTML = content.paragraph;
}

const handleLanguage = (event = "english") => {
    resetLanguageButton();
    const language = event instanceof Object ? event.target.id : "english";
    document.querySelector(`#${language}`).classList.add("selected");
    handleMenu(language);
    handleAboutSection(language);
}