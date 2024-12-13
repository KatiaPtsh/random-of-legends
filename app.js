"use strict";

// DATA
// Champions et roles
var numImgChamp = 0;
var champWithRole = {
    "Aatrox": ["top"],
    "Ahri": ["mid"],
    "Akali": ["top", "mid"],
    "Akshan": ["adc", "mid"],
    "Alistar": ["support"],
    "Ambessa": ["top"],
    "Amumu": ["jungle", "support"],
    "Anivia": ["mid", "support"],
    "Annie": ["mid", "support"],
    "Aphelios": ["adc"],
    "Ashe": ["adc", "support"],
    "Aurelion Sol": ["mid"],
    "Aurora": ["mid"],
    "Azir": ["mid"],
    "Bard": ["support"],
    "Belveth": ["jungle"],
    "Blitzcrank": ["support"],
    "Brand" : ["mid", "jungle", "support"],
    "Braum" : ["support"],
    "Briar" : ["jungle"],
    "Caitlyn" : ["adc"],
    "Camille" : ["top", "support"],
    "Cassiopeia" : ["mid"],
    "Chogath" : ["top"],
    "Corki" : ["mid"],
    "Darius" : ["top"],
    "Diana" : ["jungle", "mid"],
    "Dr Mundo" : ["top"],
    "Draven" : ["adc"],
    "Ekko": ["jungle", "mid"],
    "Elise" : ["jungle"],
    "Evelynn" : ["jungle"],
    "Ezreal" : ["adc"],
    "Fiddlesticks" : ["jungle", "support"],
    "Fiora" : ["top"],
    "Fizz" : ["mid"],
    "Galio" : ["mid", "support"],
    "Gangplank" : ["top"],
    "Garen" : ["top"],
    "Gnar" : ["top"],
    "Gragas" : ["top", "mid", "jungle"],
    "Graves" : ["jungle"],
    "Gwen" : ["top"],
    "Hecarim" : ["jungle"],
    "Heimerdinger" : ["mid", "support"],
    "Hwei" : ["mid", "support"],
    "Illaoi" : ["top"],
    "Irelia" : ["top", "mid"],
    "Ivern" : ["jungle", "support"],
    "Janna" : ["support"],
    "Jarvan IV" : ["jungle"],
    "Jax" : ["top", "jungle"],
    "Jayce" : ["top", "mid"],
    "Jhin" : ["adc"],
    "Jinx" : ["adc"],
    "KSante" : ["top"],
    "Kaisa" : ["adc"],
    "Kalista" : ["adc"],
    "Karma" : ["support", "mid"],
    "Karthus" : ["jungle", "adc"],
    "Kassadin" : ["mid"],
    "Katarina" : ["mid"],
    "Kayle" : ["top"],
    "Kayn" : ["jungle"],
    "Kennen" : ["top"],
    "Khazix" : ["jungle"],
    "Kindred" : ["jungle"],
    "Kled" : ["top"],
    "KogMaw" : ["adc"],
    "Leblanc" : ["mid"],
    "Lee Sin" : ["jungle"],
    "Leona" : ["support"],
    "Lillia" : ["jungle"],
    "Lissandra" : ["mid"],
    "Lucian" : ["adc"],
    "Lulu" : ["support"],
    "Lux" : ["support", "mid"],
    "Maitre Yi" : ["jungle"],
    "Malphite" : ["top", "mid", "support"],
    "Malzahar" : ["mid"],
    "Maokai" : ["support", "jungle"],
    "Milio" : ["support"],
    "Miss Fortune" : ["adc"],
    "Mordekaiser" : ["top"],
    "Morgana" : ["support", "mid", "jungle"],
    "Naafiri" : ["mid"],
    "Nami" : ["support"],
    "Nasus" : ["top"],
    "Nautilus" : ["support"],
    "Neeko" : ["mid", "support"],
    "Nidalee" : ["jungle"],
    "Nilah" : ["adc"],
    "Nocturne" : ["jungle"],
    "Nunu" : ["jungle"],
    "Olaf" : ["top"],
    "Orianna" : ["mid"],
    "Ornn" : ["top"],
    "Pantheon" : ["top", "mid", "jungle", "support"],
    "Poppy" : ["top", "jungle"],
    "Pyke" : ["support"],
    "Qiyana" : ["mid"],
    "Quinn" : ["adc"],
    "Rakan" : ["support"],
    "Rammus" : ["jungle"],
    "RekSai" : ["jungle"],
    "Rell" : ["support"],
    "Renata Glasc" : ["support"],
    "Renekton" : ["top"],
    "Rengar" : ["jungle"],
    "Riven" : ["top"],
    "Rumble" : ["top", "mid"],
    "Ryze" : ["mid"],
    "Samira" : ["adc"],
    "Sejuani" : ["jungle"],
    "Senna" : ["support", "adc"],
    "Seraphine" : ["support", "adc"],
    "Sett" : ["top"],
    "Shaco" : ["jungle", "support"],
    "Shen" : ["support"],
    "Shyvana" : ["jungle"],
    "Singed" : ["top"],
    "Sion" : ["top"],
    "Sivir" : ["adc"],
    "Skarner" : ["jungle"],
    "Smolder" : ["adc", "mid"],
    "Sona" : ["support"],
    "Soraka" : ["support"],
    "Swain" : ["mid", "support"],
    "Sylas" : ["mid"],
    "Syndra" : ["mid", "support"],
    "Tahm Kench" : ["support"],
    "Taliyah" : ["mid", "jungle"],
    "Talon" : ["jungle", "mid"],
    "Taric" : ["support", "mid"],
    "Teemo" : ["top", "jungle", "support"],
    "Thresh" : ["support"],
    "Tristana" : ["adc", "mid"],
    "Trundle" : ["jungle"],
    "Tryndamere" : ["top"],
    "Twisted Fate" : ["mid", "adc"],
    "Twitch" : ["adc", "support"],
    "Udyr" : ["jungle"],
    "Urgot" : ["top"],
    "Varus" : ["adc"],
    "Vayne" : ["adc"],
    "Veigar" : ["mid", "support"],
    "Velkoz" : ["mid", "support"],
    "Vex" : ["mid"],
    "Vi" : ["jungle"],
    "Viego" : ["jungle"],
    "Viktor" : ["mid"],
    "Vladimir" : ["mid"],
    "Volibear" : ["jungle"],
    "Warwick" : ["jungle"],
    "Wukong" : ["top", "jungle"],
    "Xayah" : ["adc"],
    "Xerath" : ["mid", "support"],
    "Xin Zhao" : ["jungle"],
    "Yasuo" : ["mid", "adc"],
    "Yone" : ["mid"],
    "Yorick" : ["top"],
    "Yuumi" : ["support"],
    "Zac" : ["jungle", "support"],
    "Zed" : ["mid", "jungle"],
    "Zeri" : ["adc"],
    "Ziggs" : ["adc", "mid"],
    "Zilean" : ["support"],
    "Zoe" : ["mid", "support"],
    "Zyra" : ["support"]
}

////////////////////SAUVEGARDE DES CHAMPIONS DE L'UTILISATEUR////////////////////


// Sauvegarde les champions de l'utilisateur
function setMyChampionsWithRole(newMyChampionsWithRole)
{
    localStorage.setItem("myChampions", newMyChampionsWithRole);
    return;
}

// Récupère les champions de l'utilisateur
function getMyChampionsWithRole()
{   
    return localStorage.getItem("myChampions");
}

function initMyChampionWithRole()
{
    if (localStorage.getItem("myChampions") == null)
    {
        setMyChampionsWithRole(champWithRole);
    }
    return;
}
const checkboxesChampion = new Map();
localStorage.clear();                 // Activer cette ligne pour réinitialiser les champions par défaut pour l'utilisateur
initMyChampionWithRole();
console.log(getMyChampionsWithRole());  // Pour le debug


////////////////////CORE////////////////////

// Génère un nombre aléatoire définit dans un intervalle différent du précédent
function randomNumberInRange(lastValue, minValue, maxValue)
{
    if( minValue >= maxValue)
    {
        console.log("error min >= max");
        return 0;
    }
    let range = maxValue - minValue;
    let randomNumber = Math.trunc(Math.floor(Math.random() * 100)) % (range + 1);
    if ((lastValue >= minValue) && (lastValue <= maxValue))
    {
        let lastValueTmp = lastValue - minValue;
        randomNumber = ((lastValueTmp + 1) + (Math.trunc(Math.floor(Math.random() * 100)) % range)) % (range + 1);
    }
    else
    {
        randomNumber = Math.trunc(Math.floor(Math.random() * 100)) % (range + 1);
    }
    randomNumber = minValue + randomNumber;
    return randomNumber;
}

// Différentes Array pour exploiter les données
const roles = [];
//const champions = getChampions();
const championsTop = [];
const championsMid = [];
const championsJungle = [];
const championsADC = [];
const championsSupport = [];

// Initialisation des Array de données
//initChampWithRole();
console.log(championsTop);      // Pour le debug
console.log(championsMid);      // Pour le debug
console.log(championsJungle);   // Pour le debug
console.log(championsADC);      // Pour le debug
console.log(championsSupport);  // Pour le debug

// Generation aleatoire du role
var lastIndexRole = -1;
var lastNameRole = "";
var lastIndexChampion = -1;
var lastNameChampion = "";
function generateRole()
{
    getRoles().forEach(e =>
        {
            if((document.querySelector("#" + e + ":checked") == "on"))
            {
                console.log(document.querySelector("#" + e + ":checked"))
                roles.push(e);
            }

        });
        lastIndexRole = randomNumberInRange(lastIndexRole, 0, (roles.length - 1));
        console.log(roles);
    lastNameRole = roles[lastIndexRole];
    document.getElementById("randomRole").innerHTML = lastNameRole;
    return;
}

// Generation aleatoire du champion
function generateChampion()
{
    if(lastNameRole != "")
    {
        let championsList = [];
        switch (lastNameRole)
        {
            case getRoles()[0]:
                championsList = championsTop;
                break;
            case getRoles()[1]:
                championsList = championsMid;
                break;
            case getRoles()[2]:
                championsList = championsJungle;
                break;
            case getRoles()[3]:
                championsList = championsADC;
                break;
            case getRoles()[4]:
                championsList = championsSupport;
                break;
        }
        lastIndexChampion = randomNumberInRange(lastIndexChampion, 0, (championsList.length - 1));
        lastNameChampion = championsList[lastIndexChampion];
    }
    else
    {
        lastIndexChampion = randomNumberInRange(lastIndexChampion, 0, (champions.length - 1));
        lastNameChampion = champions[lastIndexChampion];
    }
    document.getElementById("randomChampion").innerHTML = lastNameChampion;
    let imgChamp = document.getElementById("imgChampion");
    console.log(lastNameChampion);
    let nameSplit = lastNameChampion.split(" ");
    let nameChampTmp = nameSplit[0];
    if (nameSplit[1] != undefined)
    {
        nameChampTmp = nameChampTmp + nameSplit[1];
    }
    else if(nameChampTmp == "Wukong")
    {
        nameChampTmp = "MonkeyKing";
    }    
    let urlChamp = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + nameChampTmp + "_" + numImgChamp + ".jpg";
    imgChamp.style.backgroundImage = "url(" + urlChamp + ")";
    return;
}

function generateRoleAndChampion()
{
    generateRole();
    generateChampion();
    return;
}

// Pop-up
var popupActive = false;
function popupRole()
{
    popupOpenID("#listRole");
    return;
}

function popupChampion()
{
    popupOpenID("#listChampion");
    return;
}

function popupGenerateRandom()
{
    popupOpenID("#randomResult");
    return;
}

function popupOpenID(name)
{
    let popup = document.querySelector("#popup-overlay");
    let content = document.querySelector(name);
    if(popupActive)
    {
        popup.classList.toggle("open");
        popupActive = false;
        document.getElementById("imgChampion").style.backgroundImage = "none";
        content.classList.toggle("open");
    }
    else
    {
        generateRoleAndChampion();
        popup.classList.toggle("open");
        popupActive = true;
        content.classList.toggle("open");
        console.log(document.querySelector( "#" + "Akali" + ":checked").value);
    }
    return;
}


// Création d'une nouvelle checkbox
function createCheckboxChamp(name, isChecked, containerId)
{
    let newLabel = document.createElement("label");
    newLabel.classList.add("checkboxChamp");
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = "checkbox";
    newCheckbox.id = name;
    newCheckbox.checked = isChecked;
    let newP = document.createElement("p");
    newP.innerHTML = name;
    checkboxesChampion.set(name, isChecked);
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(newP);
    document.getElementById(containerId).appendChild(newLabel);
    return;
}
/*
createCheckboxChamp("all", true, "testProut")
champions.forEach(e =>{
    createCheckboxChamp(e, true, "testProut");
});
*/

const openFormButton = document.getElementById("contactButton");
const modal = document.getElementById("popupForm");
const closeButton = document.getElementsByClassName("close")[0];

openFormButton.onclick = function() {
  modal.style.display = "flex";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Références des éléments
const contactForm = document.getElementById("contactForm");
const contactPopup = document.getElementById("popupForm");
const thankYouPopup = document.getElementById("thankYouPopup");
const closeButtons = document.querySelectorAll(".close");

// Ouvrir le popup de remerciement
function openThankYouPopup() {
  thankYouPopup.style.display = "flex";
}

// Fermer tous les popups
function closeAllPopups() {
  contactPopup.style.display = "none";
  thankYouPopup.style.display = "none";
  thankYouPopup.style.border = "none";
}

// Réinitialiser le formulaire
function resetContactForm() {
  contactForm.reset();
}

// Lors de la soumission du formulaire
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi réel du formulaire
  closeAllPopups(); // Ferme le popup actuel
  modal.style.display = "none";
  const thankYouPopup = document.getElementById("thankYouPopup");
  thankYouPopup.style.display = "flex";
  //openThankYouPopup(); // Ouvre le popup de remerciement
  resetContactForm(); // Réinitialise le formulaire
  setTimeout(function() {
    thankYouPopup.style.display = "none";
  }, 3000); // Ferme le popup de remerciement après 3 secondes
});

// Fermer les popups lorsque l'utilisateur clique sur "close"
closeButtons.forEach((btn) => {
  btn.addEventListener("click", closeAllPopups);
});

// Fermer les popups lorsqu'on clique en dehors
window.addEventListener("click", function (event) {
  if (event.target === contactPopup || event.target === thankYouPopup) {
    closeAllPopups();
  }
});
const champ = new Champions();
if (champ.getRoles() != null){
console.log("Okkkkkkkk");
} else {
    console.log("Noooooooooon");
}