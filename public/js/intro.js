// On utilise IntroJs et on lui dit qu'on va lui définir des options 
introJs().setOptions({
    // showProgress: true,
    //On va décrire les étapes de notre écran de bienvenue de notre visite guidée :
    //il y aura une étape qui s'appelle "intro" qui dit "Hello world"
    steps: [{
        title: 'Bienvenue',
        intro: 'Débutez votre tour !'
    }, 
    {
        title: 'Etape 1',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step1'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Ceci est un test un",
    }, 
    {
        title: 'Etape 2',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step2'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"

        intro: "Ceci est un test deux",
    },
    {
        title: 'Etape 3',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step3'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"

        intro: "Ceci est un test trois",
    },
    {
        title: 'Etape 4',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step4'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"

        intro: "Ceci est un test quatre",
    },
]
//et ensuite on démarre IntroJS
}).start();



// introJs().start();