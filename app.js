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
    "Amumu": ["jungle", "support"],
    "Anivia": ["mid", "support"],
    "Annie": ["mid", "support"],
    "Aphelios": ["adc"],
    "Ashe": ["adc", "support"],
    "Aurelion Sol": ["mid"],
    "Aurora": ["mid"],
    "Azir": ["mid"],
    "Bard": ["support"],
    "BelVeth": ["jungle"],
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
    "KaiSa" : ["adc"],
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


// Récupère tous les rôles
function getRoles()
{
    return ["top", "mid", "jungle", "adc", "support"];
}

// Récupère tous les champions
function getChampions()
{
    return Object.keys(champWithRole);
}

// Différentes Array pour exploiter les données
const roles = getRoles();
const champions = getChampions();
const championsTop = [];
const championsMid = [];
const championsJungle = [];
const championsADC = [];
const championsSupport = [];

// Créations des Array pour exploiter les données
function initChampWithRole()
{
    for(const champion in champWithRole)
    {
        if (champWithRole[champion].find((r) => r == roles[0]))
        {
            championsTop.push(champion);
        }
        if (champWithRole[champion].find((r) => r == roles[1]))
        {
            championsMid.push(champion);
        }
        if (champWithRole[champion].find((r) => r == roles[2]))
        {
            championsJungle.push(champion);
        }
        if (champWithRole[champion].find((r) => r == roles[3]))
        {
            championsADC.push(champion);
        }
        if (champWithRole[champion].find((r) => r == roles[4]))
        {
            championsSupport.push(champion);
        }
    }
}

// Initialisation des Array de données
initChampWithRole();
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
    lastIndexRole = randomNumberInRange(lastIndexRole, 0, (roles.length - 1));
    lastNameRole = getRoles()[lastIndexRole];
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
    let nameSplit = lastNameChampion.split(" ");
    let nameChampTmp = nameSplit[0];
    if (nameSplit[1] != undefined)
    {
        nameChampTmp = nameChampTmp + nameSplit[1];
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
function popupRole()
{
    popupOpenID("#listRole");
}

function popupChampion()
{
    popupOpenID("#listChampion");
}

function popupGenerateRandom()
{
    popupOpenID("#randomResult");
}

function popupOpenID(name)
{
    generateRoleAndChampion();
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
    let content = document.querySelector(name);
    content.classList.toggle("open");
}


// Création d'une nouvelle checkbox
function createCheckboxChamp(name, isChecked, containerId)
{
    let newLabel = document.createElement("label");
    newLabel.classList.add("checkboxChamp");
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = "checkbox";
    newCheckbox.checked = isChecked;
    let newP = document.createElement("p");
    newP.innerHTML = name;
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(newP);
    document.getElementById(containerId).appendChild(newLabel);
    return;
}

createCheckboxChamp("all", true, "testProut")
champions.forEach(e =>{
    createCheckboxChamp(e, true, "testProut");
});

// <label class="checkboxStyle"><input type="checkbox" name="checkbox"><p>Top</p></label>
/*
// Cibler l'élément avec l'ID "bouton_1"
const bouton = document.getElementById('bouton_1');

// Vérifier si l'élément a été correctement ciblé
if (bouton) {
    // Ajouter un gestionnaire d'événement pour l'événement "click"
    bouton.addEventListener('click', function() {
        alert('Le bouton a été cliqué !');
        // Autres actions à effectuer lorsque le bouton est cliqué
    });
} else {
    console.error("L'élément avec l'ID 'bouton_1' n'a pas été trouvé.");
}*/