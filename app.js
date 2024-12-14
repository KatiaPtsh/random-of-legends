"use strict";


////////////////////////////////////////////////////////////////////////////////DATA////////////////////////////////////////////////////////////////////////////////

class Champions {


    constructor() {
    }

    // Liste des champions
    // Récupère tous les champions du jeu
    static getAllChampions() {
        const allChampions =
        [
            {
                "champion": "Aatrox",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Ahri",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Akali",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "Akshan",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "Alistar",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Amumu",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Anivia",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Annie",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Aphelios",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Ashe",
                "lane": [
                    "adc",
                    "support"
                ]
            },
            {
                "champion": "AurelionSol",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Aurora",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Azir",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Bard",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Belveth",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Blitzcrank",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Brand",
                "lane": [
                    "mid",
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Braum",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Briar",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Caitlyn",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Camille",
                "lane": [
                    "top",
                    "support"
                ]
            },
            {
                "champion": "Cassiopeia",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Chogath",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Corki",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Darius",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Diana",
                "lane": [
                    "jungle",
                    "mid"
                ]
            },
            {
                "champion": "DrMundo",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Draven",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Ekko",
                "lane": [
                    "jungle",
                    "mid"
                ]
            },
            {
                "champion": "Elise",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Evelynn",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Ezreal",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Fiddlesticks",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Fiora",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Fizz",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Galio",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Gangplank",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Garen",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Gnar",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Gragas",
                "lane": [
                    "top",
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "Graves",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Gwen",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Hecarim",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Heimerdinger",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Hwei",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Illaoi",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Irelia",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "Ivern",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Janna",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "JarvanIV",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Jax",
                "lane": [
                    "top",
                    "jungle"
                ]
            },
            {
                "champion": "Jayce",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "Jhin",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Jinx",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "KSante",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Kaisa",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Kalista",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Karma",
                "lane": [
                    "support",
                    "mid"
                ]
            },
            {
                "champion": "Karthus",
                "lane": [
                    "jungle",
                    "adc"
                ]
            },
            {
                "champion": "Kassadin",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Katarina",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Kayle",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Kayn",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Kennen",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Khazix",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Kindred",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Kled",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "KogMaw",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Leblanc",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Leesin",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Leona",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Lillia",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Lissandra",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Lucian",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Lulu",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Lux",
                "lane": [
                    "support",
                    "mid"
                ]
            },
            {
                "champion": "MasterYi",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Malphite",
                "lane": [
                    "top",
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Malzahar",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Maokai",
                "lane": [
                    "support",
                    "jungle"
                ]
            },
            {
                "champion": "Milio",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "MissFortune",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Mordekaiser",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Morgana",
                "lane": [
                    "support",
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "Naafiri",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Nami",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Nasus",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Nautilus",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Neeko",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Nidalee",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Nilah",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Nocturne",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Nunu",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Olaf",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Orianna",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Ornn",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Pantheon",
                "lane": [
                    "top",
                    "mid",
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Poppy",
                "lane": [
                    "top",
                    "jungle"
                ]
            },
            {
                "champion": "Pyke",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Qiyana",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Quinn",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Rakan",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Rammus",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "RekSai",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Rell",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Renata",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Renekton",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Rengar",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Riven",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Rumble",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "Ryze",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Samira",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Sejuani",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Senna",
                "lane": [
                    "support",
                    "adc"
                ]
            },
            {
                "champion": "Séraphine",
                "lane": [
                    "support",
                    "adc"
                ]
            },
            {
                "champion": "Sett",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Shaco",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Shen",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Shyvana",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Singed",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Sion",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Sivir",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Skarner",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Smolder",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "Sona",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Soraka",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Swain",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Sylas",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Syndra",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "TahmKench",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Taliyah",
                "lane": [
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "Talon",
                "lane": [
                    "jungle",
                    "mid"
                ]
            },
            {
                "champion": "Taric",
                "lane": [
                    "support",
                    "mid"
                ]
            },
            {
                "champion": "Teemo",
                "lane": [
                    "top",
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Thresh",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Tristana",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "Trundle",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Tryndamere",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Twisted fate",
                "lane": [
                    "mid",
                    "adc"
                ]
            },
            {
                "champion": "Twitch",
                "lane": [
                    "adc",
                    "support"
                ]
            },
            {
                "champion": "Udyr",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Urgot",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Varus",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Vayne",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Veigar",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Velkoz",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Vex",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Vi",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Viego",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Viktor",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Vladimir",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Volibear",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Warwick",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Wunkong",
                "lane": [
                    "top",
                    "jungle"
                ]
            },
            {
                "champion": "Xayah",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Xerath",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "XinZhao",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "Yasuo",
                "lane": [
                    "mid",
                    "adc"
                ]
            },
            {
                "champion": "Yone",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "Yorick",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "Yuumi",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Zac",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "Zed",
                "lane": [
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "Zeri",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "Ziggs",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "Zilean",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "Zoé",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "Zyra",
                "lane": [
                    "support"
                ]
            }
        ];
        return allChampions;
    }

    // Récupère tous les rôles
    static getAllLanes()
    {
        return ["top", "mid", "jungle", "adc", "support"];
    }

    // Récupère les champions sauvegardés par l'utilisateur
    static getSelectedChampions() {

        let selectedChampions = Champions.getAllChampions();
        if (localStorage.getItem("selectedChampions") != null) {
            selectedChampions = JSON.parse(localStorage.getItem("selectedChampions"));
        }
        return selectedChampions;
    }

    // Stocke les champions sauvegardés par l'utilisateur
    static setSelectedChampions(newSelectedChampions) {

        localStorage.setItem("selectedChampions", JSON.stringify(newSelectedChampions));
        return;
    }

    static getSelectedLanes() {

        let selectedLanes = Champions.getAllLanes();
        if (localStorage.getItem("selectedLanes") != null) {
            selectedLanes = JSON.parse(localStorage.getItem("selectedLanes"));
        }
        return selectedLanes;
    }

    static setSelectedLanes(newSelectedLanes) {

        localStorage.setItem("selectedLanes", JSON.stringify(newSelectedLanes));
        return;
    }

    // Ajoute un champion à la liste des champions de l'utilisateur
    static addOwnerChampion(championToAdd) {

        let ac = Champions.getAllChampions();
        let oc = Champions.getSelectedChampions();
        if (oc.find(champ => champ.champion === championToAdd) === -1) {
            let cToAdd = ac.find(champ => champ.champion === championToAdd);
            oc.push(cToAdd);
            Champions.setSelectedChampions(oc);
        }
        return;
    }

    // Supprime un champion à la liste des champions de l'utilisateur
    static removeOwnerChampion(championToRemove) {

        let oc = Champions.getSelectedChampions();
        let index = oc.findIndex(champ => champ.champion === championToRemove);
        if (index !== -1) {
            oc.splice(index, 1);
            Champions.setSelectedChampions(oc);
        }
        return;
    }

    // Récupère tous les champions possédés d'une lane donnée
    static getSelectedChampionsFromLane(lane) {

        let oc = Champions.getSelectedChampions();
        let list = [];
        oc.forEach(champ => {
            if (champ.lane.find((r) => r == lane))
            {
                list.push(champ.champion);
            }
        });

        return list;
    }
}
localStorage.clear();



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

// Generation aleatoire du role
var lastIndexRole = -1;
var lastNameRole = "";
var lastIndexChampion = -1;
var lastNameChampion = "";

function generateRole()
{
    let lanes = Champions.getSelectedLanes();
    lastIndexRole = randomNumberInRange(lastIndexRole, 0, (lanes.length - 1));
    console.log(lanes);
    lastNameRole = lanes[lastIndexRole];
    document.getElementById("randomRole").innerHTML = lastNameRole;
    return;
}

// Generation aleatoire du champion
function generateChampion()
{
    let numImgChamp = 0;
    if(lastNameRole != "")
    {
        let championsList = Champions.getSelectedChampionsFromLane(lastNameRole);
        lastIndexChampion = randomNumberInRange(lastIndexChampion, 0, (championsList.length - 1));
        lastNameChampion = championsList[lastIndexChampion];
    }
    else
    {
        lastIndexChampion = randomNumberInRange(lastIndexChampion, 0, (Champions.getSelectedChampions().length - 1));
        let champion = Champions.getSelectedChampions()[lastIndexChampion]
        lastNameChampion = champion.champion;
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

/*
createCheckboxChamp("all", true, "checkboxesChampions")
*/
Champions.getAllChampions().forEach(c =>{
    createCheckboxChamp(c.champion, true, "checkboxesChampions");
});

// Pop-up
var popupActive = false;
function popupLanes()
{
    if (popupActive == false) {
        const al = Champions.getAllLanes();
        const sl = Champions.getSelectedLanes();
        al.forEach(l => {
            document.getElementById("checkbox" + l).checked = false;
        });
        sl.forEach(l => {
            document.getElementById("checkbox" + l).checked = true;
        });
    }
    popupOpenID("#listRole");
    return;
}

function popupChampions()
{
    if (popupActive == false) {
        const ac = Champions.getAllChampions();
        const sc = Champions.getSelectedChampions();
        ac.forEach(c => {
            document.getElementById("checkbox" + c.champion).checked = false;
        });
        sc.forEach(c => {
            document.getElementById("checkbox" + c.champion).checked = true;
        });
    }
    popupOpenID("#listChampion");
    return;
}

function popupGenerateRandom()
{
    if (popupActive == false) {
        generateRoleAndChampion();
    }
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
        popup.classList.toggle("open");
        popupActive = true;
        content.classList.toggle("open");
    }
    return;
}

function applyLanes() {

    const al = Champions.getAllLanes();
    let sl = [];
    al.forEach(l => {
        if (document.getElementById("checkbox" + l).checked) {
            sl.push(l);
        }
    });
    lastIndexRole = -1;
    lastNameRole = "";
    Champions.setSelectedLanes(sl);
    popupLanes();
    return;
}

function applyChampions() {
    const ac = Champions.getAllChampions();
    let sc = [];
    ac.forEach(c => {
        if (document.getElementById("checkbox" + c.champion).checked) {
            sc.push(c);
        }
    });
    lastIndexChampion = -1;
    lastNameChampion = "";
    Champions.setSelectedChampions(sc);
    popupChampions();
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
    newCheckbox.id = "checkbox" + name;
    newCheckbox.checked = isChecked;
    let newP = document.createElement("p");
    newP.innerHTML = name;
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(newP);
    document.getElementById(containerId).appendChild(newLabel);
    return;
}

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
  //setTimeout(function() {
    //thankYouPopup.style.display = "none";
  //}, 3000); // Ferme le popup de remerciement après 3 secondes
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
