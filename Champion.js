"use strict";


////////////////////////////////////////////////////////////////////////////////DATA////////////////////////////////////////////////////////////////////////////////

export class Champions {
    // Liste des champions

    constructor() {
        this.allChampions =
        [
            {
                "champion": "aatrox",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "ahri",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "akali",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "akshan",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "alistar",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "amumu",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "anivia",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "annie",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "aphelios",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "ashe",
                "lane": [
                    "adc",
                    "support"
                ]
            },
            {
                "champion": "aurelion sol",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "aurora",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "azir",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "bard",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "bel'veth",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "blitzcrank",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "brand",
                "lane": [
                    "mid",
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "braum",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "briar",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "caitlyn",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "camille",
                "lane": [
                    "top",
                    "support"
                ]
            },
            {
                "champion": "cassiopeia",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "cho'gath",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "corki",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "darius",
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
                "champion": "dr mundo",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "draven",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "ekko",
                "lane": [
                    "jungle",
                    "mid"
                ]
            },
            {
                "champion": "elise",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "evelynn",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "ezreal",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "fiddlesticks",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "fiora",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "fizz",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "galio",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "gangplank",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "garen",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "gnar",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "gragas",
                "lane": [
                    "top",
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "graves",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "gwen",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "hecarim",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "heimerdinger",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "hwei",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "illaoi",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "irelia",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "ivern",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "janna",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "jarvan IV",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "jax",
                "lane": [
                    "top",
                    "jungle"
                ]
            },
            {
                "champion": "jayce",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "jhin",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "jinx",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "k'sante",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "kai'sa",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "kalista",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "karma",
                "lane": [
                    "support",
                    "mid"
                ]
            },
            {
                "champion": "karthus",
                "lane": [
                    "jungle",
                    "adc"
                ]
            },
            {
                "champion": "kassadin",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "katarina",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "kayle",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "kayn",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "kennen",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "kha'zix",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "kindred",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "kled",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "kog'maw",
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
                "champion": "lee sin",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "leona",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "lilia",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "lissandra",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "lucian",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "lulu",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "lux",
                "lane": [
                    "support",
                    "mid"
                ]
            },
            {
                "champion": "maitre yi",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "malphite",
                "lane": [
                    "top",
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "malzahar",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "maokai",
                "lane": [
                    "support",
                    "jungle"
                ]
            },
            {
                "champion": "milio",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "miss fortune",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "mordekaiser",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "morgana",
                "lane": [
                    "support",
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "naafiri",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "nami",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "nasus",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "nautilus",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "neeko",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "nidalee",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "nilah",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "nocturne",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "nunu et willump",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "olaf",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "orianna",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "ornn",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "pantheon",
                "lane": [
                    "top",
                    "mid",
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "poppy",
                "lane": [
                    "top",
                    "jungle"
                ]
            },
            {
                "champion": "pyke",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "qiyana",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "quinn",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "rakan",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "rammus",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "rek'sai",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "rell",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "renata glasc",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "renekton",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "rengar",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "riven",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "rumble",
                "lane": [
                    "top",
                    "mid"
                ]
            },
            {
                "champion": "ryze",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "samira",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "sejuani",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "senna",
                "lane": [
                    "support",
                    "adc"
                ]
            },
            {
                "champion": "séraphine",
                "lane": [
                    "support",
                    "adc"
                ]
            },
            {
                "champion": "sett",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "shaco",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "shen",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "shyvana",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "singed",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "sion",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "sivir",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "skarner",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "smolder",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "sona",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "soraka",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "swain",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "sylas",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "syndra",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "tahm kench",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "taliyah",
                "lane": [
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "talon",
                "lane": [
                    "jungle",
                    "mid"
                ]
            },
            {
                "champion": "taric",
                "lane": [
                    "support",
                    "mid"
                ]
            },
            {
                "champion": "teemo",
                "lane": [
                    "top",
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "thresh",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "tristana",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "trundle",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "tryndamere",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "twisted fate",
                "lane": [
                    "mid",
                    "adc"
                ]
            },
            {
                "champion": "twitch",
                "lane": [
                    "adc",
                    "support"
                ]
            },
            {
                "champion": "udyr",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "urgot",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "varus",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "vayne",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "veigar",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "vel'koz",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "vex",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "vi",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "viego",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "viktor",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "vladimir",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "volibear",
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
                "champion": "wunkong",
                "lane": [
                    "top",
                    "jungle"
                ]
            },
            {
                "champion": "xayah",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "xerath",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "xin zhao",
                "lane": [
                    "jungle"
                ]
            },
            {
                "champion": "yasuo",
                "lane": [
                    "mid",
                    "adc"
                ]
            },
            {
                "champion": "yone",
                "lane": [
                    "mid"
                ]
            },
            {
                "champion": "yorick",
                "lane": [
                    "top"
                ]
            },
            {
                "champion": "yuumi",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "zac",
                "lane": [
                    "jungle",
                    "support"
                ]
            },
            {
                "champion": "zed",
                "lane": [
                    "mid",
                    "jungle"
                ]
            },
            {
                "champion": "zeri",
                "lane": [
                    "adc"
                ]
            },
            {
                "champion": "ziggs",
                "lane": [
                    "adc",
                    "mid"
                ]
            },
            {
                "champion": "zilean",
                "lane": [
                    "support"
                ]
            },
            {
                "champion": "zoé",
                "lane": [
                    "mid",
                    "support"
                ]
            },
            {
                "champion": "zyra",
                "lane": [
                    "support"
                ]
            }
        ];
        this.championsTop = [];
        this.championsMid = [];
        this.championsJungle = [];
        this.championsADC = [];
        this.championsSupport = [];
        this.roles = ["top", "mid", "jungle", "adc", "support"];
        initChampWithRole();
    }

    // Créations des Array pour exploiter les données
    initChampWithRole()
    {
        this.allChampions.forEach(champ => {
            if (champ.lane.find((r) => r == roles[0]))
            {
                this.championsTop.push(champ.champion);
            }
            if (champ.lane.find((r) => r == roles[1]))
            {
                this.championsMid.push(champ.champion);
            }
            if (champ.lane.find((r) => r == roles[2]))
            {
                this.championsJungle.push(champ.champion);
            }
            if (champ.lane.find((r) => r == roles[3]))
            {
                this.championsADC.push(champ.champion);
            }
            if (champ.lane.find((r) => r == roles[4]))
            {
                this.championsSupport.push(champ.champion);
            }
        });
    }

    // Récupère tous les champions du jeu
    getAllChampions() {
        return this.allChampions;
    }

    // Récupère les champions sauvegardés par l'utilisateur
    getOwnersChampions() {

        let ownersChampions = getAllChampions();
        if (localStorage.getItem("OwnersChampions") != null) {
            ownersChampions = JSON.parse(localStorage.getItem("OwnersChampions"));
        }

        return ownersChampions;
    }

    // Stocke les champions sauvegardés par l'utilisateur
    setOwnersChampions(newOwnersChampions) {

        localStorage.setItem("OwnersChampions", JSON.stringify(newOwnersChampions));
        return;
    }

    // Ajoute un champion à la liste des champions de l'utilisateur
    addOwnerChampion(championToAdd) {

        let ac = getAllChampions();
        let oc = getOwnersChampions();
        if (oc.find(champ => champ.champion === championToAdd) === -1) {
            let cToAdd = ac.find(champ => champ.champion === championToAdd);
            oc.push(cToAdd);
            setOwnersChampions(oc);
        }
        return;
    }

    // Supprime un champion à la liste des champions de l'utilisateur
    removeOwnerChampion(championToRemove) {

        let oc = getOwnersChampions();
        let index = oc.findIndex(champ => champ.champion === championToRemove);
        if (index !== -1) {
            oc.splice(index, 1);
            setOwnersChampions(oc);
        }
        return;
    }

    // Récupère tous les rôles
    getRoles()
    {
        return this.roles;
    }

    // Récupère tous les champions
    getChampions()
    {
        return this.allChampions.champ;
    }
}
/*
// Idéal mais oblige de l'avoir déposé sur un serveur
export async function loadJSON() {
    try {
        // Charger le fichier JSON avec fetch
        const response = await fetch("./data/champions.json");
        
        // Vérifier que la réponse est correcte (status 200)
        if (!response.ok) {
            throw new Error('Échec du chargement du fichier JSON');
        }

        // Convertir la réponse en objet JSON
        const data = await response.json();

        // Stocker les données dans une variable
        console.log(data);  // Affiche les données JSON dans la console
        return data;
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Appeler la fonction pour charger le JSON
loadJSON();
*/