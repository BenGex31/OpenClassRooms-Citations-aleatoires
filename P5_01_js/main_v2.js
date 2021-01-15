/**
 * main_v2.js
 * 
 * Script principal de génération de citations configurables(étape 2)
 * 
 * @author Benjamin DESOLE
 * @version 2.0
 * date 07/05/2020
 */

/**
 * @const number Récupère la balise HTML qui a pour ID "choice-number".
 */
const number = document.getElementById("choice-number");

/**
 * @constant buttonMoto Récupère la balise HTML qui a pour ID "button-moto".
 */
const buttonMoto = document.getElementById("button-moto");

/**
 * @constant buttonFoot Récupère la balise HTML qui a pour ID "button-foot".
 */
const buttonFoot = document.getElementById("button-foot");

/**
 * @constant titleQuote Récupère la balise HTML qui a pour ID "title-quote".
 */
const titleQuote = document.getElementById("title-quote");

/**
 * @constant quote Récupère la balise HTML qui a pour ID "quote".
 */
const quote = document.getElementById("quote");

/**
 * @constant buttonReset Récupère la balise HTML qui pour ID "reset".
 */
const buttonReset = document.getElementById("reset");

/**
 * @constant newQuote Récupère la balise HTML qui a pour ID "new-quote".
 */
const newQuote = document.getElementById("new-quote");

/* On écoute l'événement "click" sur le bouton HTML "moto" pour choisir des citation aléatoires de type "moto". */
buttonMoto.addEventListener('click',function() {
    if (number.value >= 1 && number.value <= 5) {
        choiceTitle = "La passion de la Moto !";
    } else {
        titleQuote.innerHTML = "";
        alert("Avant de choisir une catégorie, merci de sélectionner un chiffre entre 1 et 5 dans la première étape.");
    }
    choiceType = moto;
    titleQuote.style.fontSize = "2em";
});

/* On écoute l'événement "click" sur le bouton HTML "foot" pour choisir des citation aléatoires de type "foot". */
buttonFoot.addEventListener("click",function() {
    if (number.value >= 1 && number.value <= 5) {
        choiceTitle = "Le monde sulfureux du FootBall !";
    } else {
        titleQuote.innerHTML = "";
        alert("Avant de choisir une catégorie, merci de sélectionner un chiffre entre 1 et 5 dans la première étape.");
    }
    choiceType = foot;
    titleQuote.style.fontSize = "2em";
});

/**
 * @function generateRandomQuote Fonction qui génère aléatoirement un nombre de citations de 1 à 5, en fonction du choix du type de générateur.
 */
const generateRandomQuote = () => {
    if (number.value >= 1 && number.value <= 5) {
        quote.innerHTML = "";
        titleQuote.innerHTML = choiceTitle;
        for (let i = 0; i < number.value; i++) {
        let newP = document.createElement("p");
        newP.innerHTML = choiceType.createRandomQuote();
        quote.appendChild(newP);
        newP.style.color = "white";
        }
    } else {
        alert("Avant de générer des citations, merci de sélectionner un chiffre entre 1 et 5, et de choisir une catégorie")
    }
}

/* On écoute l'évènement "click" sur le bouton HTML "new-quote" pour générer de nouvelles citations. */
newQuote.addEventListener("click", function() {
    generateRandomQuote();
});

/* On écoute l'évènement "click" sur le bouton HTML "reset" pour arrêter la génération. */
buttonReset.addEventListener('click', function() {
    window.location.reload(true);
});