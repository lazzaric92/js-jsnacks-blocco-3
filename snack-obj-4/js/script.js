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
        "tab": ["Google", "Facebook", "Twitch", "Discord"],
        "activeTab": 2
    }
]

const socials = ["Facebook", "GitHub", "Instagram", "Twitter"]

const newBrowserWindows = browserWindows.map((element) => {
    element["tab"] = element["tab"].filter((el) => !socials.includes(el));
});

console.log(browserWindows);