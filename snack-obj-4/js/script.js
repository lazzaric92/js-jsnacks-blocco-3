//todo: Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

//todo: Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab. Nel caso la tab fosse attiva, deve attivare la successiva.

const browserWindows = [
    {
        "tab": ["Facebook", "GitHub", "Gmail"],
        "activeTab": 0
    },
    {
        "tab": ["Twitter", "Facebook", "GitHub", "Gmail"],
        "activeTab": 4
    },
    {
        "tab": ["Twitch", "Facebook", "Gmail"],
        "activeTab": 0
    },
    {
        "tab": ["Discord", "Instagram", "GitHub", "Outlook"],
        "activeTab": 1
    },
    {
        "tab": ["GitHub", "Youtube"],
        "activeTab": 0
    },
    {
        "tab": ["Google", "Facebook", "Instagram", "Twitch", "Discord", "Youtube", "MDN"],
        "activeTab": 2
    }
]

const socials = ["Facebook", "GitHub", "Instagram", "Twitter"]


let clonedBrowserWindows = [...browserWindows];
console.log(clonedBrowserWindows);

clonedBrowserWindows.forEach(element => {
    (element["tab"]) = (element["tab"]).filter((tab) => {   // <-- filtro gli elementi dell'array tab
        // ? il software deve controllare
        // ? se tra gli elementi di tab ci sono elementi che fanno parte dell'array socials
            // > se sì rimuoverli
        
        let isFound = false;
        socials.forEach(social => {   // <-- controllo ogni elemento dell'array social
            if(isFound === false && social.toLowerCase() === tab.toLowerCase()){    // <-- vado avanti finché non trovo un elemento dell'array socials uguale a quello dell'array tab in esame
                isFound = true;
                console.log(tab + ' è un social');
                return isFound;
            }
        });
        return !isFound;
    
        // ? quale è l'indice della tab attiva
            // ? controllare che l'indice non sia più alto del numero di tab dopo la pulizia
                // > se sì, portare l'indice a 0
            // ? se l'indice era associato a un social 
                // > se sì, attivare quello della tab successiva (considerando la pulizia)
                // > se no, lasciarlo associato alla tab che era aperta (considerando la pulizia)
    })
    console.log(clonedBrowserWindows);
});








