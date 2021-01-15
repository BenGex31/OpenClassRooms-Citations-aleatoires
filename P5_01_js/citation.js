/**
 * citation.js
 * 
 * Script de classe pour la génération de citations configurables(étape 2)
 * 
 * @author Benjamin DESOLE
 * @version 1.0
 * date 07/05/2020
 */

/**
  * @class Citation
  */
 class Citation {
    constructor(beginning, middle, ending) {
        this.beginning = beginning;
        this.middle = middle;
        this.ending = ending;
    }
/**
* @method createRandomQuote Méthode de classe permettant de générér aléatoirement une citation.
* @constant {string} randomQuote Création d'une constante pour stocker la méthode de génération aléatoire.
* @returns {string} Renvoie le resultat de la génération aléatoire.
*/
    createRandomQuote() {
        const randomQuote = this.beginning[Math.floor(Math.random() * this.beginning.length)] + " " + this.middle[Math.floor(Math.random() * this.middle.length)] + " " + this.ending[Math.floor(Math.random() * this.ending.length)];
        return randomQuote;
    }
}

/**
 * @constant {array} motoArrayBeginning Tableau premières parties de citation Moto
 */
const motoArrayBeginning = [
    "Durant toute la course,",
    "Pendant la séance de qualification,",
    "Lors du Grand Prix d'Espagne,",
    "Parmi les autres concurrents,",
    "Malgré une prestation décevante,"
];

/**
 * @constant {array} motoArrayMiddle Tableau deuxièmes parties de citation Moto.
 */
const motoArrayMiddle = [
    "Valentino ROSSI s'est battu comme un diable",
    "Fabio QUARTARARO a su mettre à profit son expérience",
    "Maverick VINALES a ménagé ses pneus",
    "Marc MARQUEZ a dévoilé tout son talent",
    "Johan ZARCO a exploité au maximum le potentiel de sa moto"
];

/**
 * @constant {array} motoArrayEnding Tableau troisièmes parties de citation Moto.
 */
const motoArrayEnding = [
    "afin de remporter le titre de champion !",
    "pour conserver sa position !",
    "pour franchir la ligne d'arrivée !",
    "en remontant quatres positions !",
    "en faisant en sorte d'améliorer son chrono !"
];

/**
 * @const {string} moto Constitution des citations motos.
 */
const moto = new Citation(motoArrayBeginning,motoArrayMiddle,motoArrayEnding);

/**
 * @constant {array} footArrayBeginning Tableau premières parties de citation Foot.
 */
const footArrayBeginning = [
    "Sur l'ensemble de la saison,",
    "A l'issue des matchs aller,",
    "De tous les clubs connus,",
    "Grâce à l'efficacité de son attaquant,",
    "Sur le plan comptable,"
];

/**
 * @var {array} footArrayMiddle Tableau deuxièmes parties de citation Foot.
 */
const footArrayMiddle = [
    "l'Olympique de Marseille",
    "le Paris Saint germain",
    "le Racing Club de Lens",
    "le FootBall club de Nantes",
    "le Toulouse Football Club"
];

/**
 * @constant {array} footArrayEnding Tableau troisièmes parties de citation Foot.
 */
const footArrayEnding = [
    "est resté invaincu à domicile !",
    "a inscrit le plus grand nombre de buts !",
    "possède le meilleur public de France !",
    "est le club le plus supporté en France !",
    "peut se maintenir en Ligue 1 !"
];

/**
 * @const {string} foot Constitution des citations foot.
 */
const foot = new Citation(footArrayBeginning,footArrayMiddle,footArrayEnding);