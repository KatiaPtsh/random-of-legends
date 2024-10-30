"use strict";

// DATA
// Champions et roles
var champWithRole = {
    "aatrox": ["top"],
    "ahri": ["mid"],
    "akali": ["top", "mid"],
    "akshan": ["adc", "mid"],
    "alistar": ["support"],
    "amumu": ["jungle", "support"],
    "anivia": ["mid", "support"],
    "annie": ["mid", "support"],
    "aphelios": ["adc"],
    "ashe": ["adc", "support"],
    "aurelion sol": ["mid"],
    "aurora": ["mid"],
    "azir": ["mid"],
    "bard": ["support"],
    "bel'veth": ["jungle"],
    "blitzcrank": ["support"],
    "brand" : ["mid", "jungle", "support"],
    "braum" : ["support"],
    "briar" : ["jungle"],
    "caitlyn" : ["adc"],
    "camille" : ["top", "support"],
    "cassiopeia" : ["mid"],
    "cho'gath" : ["top"],
    "corki" : ["mid"],
    "darius" : ["top"],
    "Diana" : ["jungle", "mid"],
    "dr mundo" : ["top"],
    "draven" : ["adc"],
    "ekko": ["jungle", "mid"],
    "elise" : ["jungle"],
    "evelynn" : ["jungle"],
    "ezreal" : ["adc"],
    "fiddlesticks" : ["jungle", "support"],
    "fiora" : ["top"],
    "fizz" : ["mid"],
    "galio" : ["mid", "support"],
    "gangplank" : ["top"],
    "garen" : ["top"],
    "gnar" : ["top"],
    "gragas" : ["top", "mid", "jungle"],
    "graves" : ["jungle"],
    "gwen" : ["top"],
    "hecarim" : ["jungle"],
    "heimerdinger" : ["mid", "support"],
    "hwei" : ["mid", "support"],
    "illaoi" : ["top"],
    "irelia" : ["top", "mid"],
    "ivern" : ["jungle", "support"],
    "janna" : ["support"],
    "jarvan IV" : ["jungle"],
    "jax" : ["top", "jungle"],
    "jayce" : ["top", "mid"],
    "jhin" : ["adc"],
    "jinx" : ["adc"],
    "k'sante" : ["top"],
    "kai'sa" : ["adc"],
    "kalista" : ["adc"],
    "karma" : ["support", "mid"],
    "karthus" : ["jungle", "adc"],
    "kassadin" : ["mid"],
    "katarina" : ["mid"],
    "kayle" : ["top"],
    "kayn" : ["jungle"],
    "kennen" : ["top"],
    "kha'zix" : ["jungle"],
    "kindred" : ["jungle"],
    "kled" : ["top"],
    "kog'maw" : ["adc"],
    "Leblanc" : ["mid"],
    "lee sin" : ["jungle"],
    "leona" : ["support"],
    "lilia" : ["jungle"],
    "lissandra" : ["mid"],
    "lucian" : ["adc"],
    "lulu" : ["support"],
    "lux" : ["support", "mid"],
    "maitre yi" : ["jungle"],
    "malphite" : ["top", "mid", "support"],
    "malzahar" : ["mid"],
    "maokai" : ["support", "jungle"],
    "milio" : ["support"],
    "miss fortune" : ["adc"],
    "mordekaiser" : ["top"],
    "morgana" : ["support", "mid", "jungle"],
    "naafiri" : ["mid"],
    "nami" : ["support"],
    "nasus" : ["top"],
    "nautilus" : ["support"],
    "neeko" : ["mid", "support"],
    "nidalee" : ["jungle"],
    "nilah" : ["adc"],
    "nocturne" : ["jungle"],
    "nunu et willump" : ["jungle"],
    "olaf" : ["top"],
    "orianna" : ["mid"],
    "ornn" : ["top"],
    "pantheon" : ["top", "mid", "jungle", "support"],
    "poppy" : ["top", "jungle"],
    "pyke" : ["support"],
    "qiyana" : ["mid"],
    "quinn" : ["adc"],
    "rakan" : ["support"],
    "rammus" : ["jungle"],
    "rek'sai" : ["jungle"],
    "rell" : ["support"],
    "renata glasc" : ["support"],
    "renekton" : ["top"],
    "rengar" : ["jungle"],
    "riven" : ["top"],
    "rumble" : ["top", "mid"],
    "ryze" : ["mid"],
    "samira" : ["adc"],
    "sejuani" : ["jungle"],
    "senna" : ["support", "adc"],
    "séraphine" : ["support", "adc"],
    "sett" : ["top"],
    "shaco" : ["jungle", "support"],
    "shen" : ["support"],
    "shyvana" : ["jungle"],
    "singed" : ["top"],
    "sion" : ["top"],
    "sivir" : ["adc"],
    "skarner" : ["jungle"],
    "smolder" : ["adc", "mid"],
    "sona" : ["support"],
    "soraka" : ["support"],
    "swain" : ["mid", "support"],
    "sylas" : ["mid"],
    "syndra" : ["mid", "support"],
    "tahm kench" : ["support"],
    "taliyah" : ["mid", "jungle"],
    "talon" : ["jungle", "mid"],
    "taric" : ["support", "mid"],
    "teemo" : ["top", "jungle", "support"],
    "thresh" : ["support"],
    "tristana" : ["adc", "mid"],
    "trundle" : ["jungle"],
    "tryndamere" : ["top"],
    "twisted fate" : ["mid", "adc"],
    "twitch" : ["adc", "support"],
    "udyr" : ["jungle"],
    "urgot" : ["top"],
    "varus" : ["adc"],
    "vayne" : ["adc"],
    "veigar" : ["mid", "support"],
    "vel'koz" : ["mid", "support"],
    "vex" : ["mid"],
    "vi" : ["jungle"],
    "viego" : ["jungle"],
    "viktor" : ["mid"],
    "vladimir" : ["mid"],
    "volibear" : ["jungle"],
    "Warwick" : ["jungle"],
    "wunkong" : ["top", "jungle"],
    "xayah" : ["adc"],
    "xerath" : ["mid", "support"],
    "xin zhao" : ["jungle"],
    "yasuo" : ["mid", "adc"],
    "yone" : ["mid"],
    "yorick" : ["top"],
    "yuumi" : ["support"],
    "zac" : ["jungle", "support"],
    "zed" : ["mid", "jungle"],
    "zeri" : ["adc"],
    "ziggs" : ["adc", "mid"],
    "zilean" : ["support"],
    "zoé" : ["mid", "support"],
    "zyra" : ["support"]
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