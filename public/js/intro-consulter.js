// On utilise IntroJs et on lui dit qu'on va lui définir des options 
introJs().setOptions({
    // showProgress: true,
    //On va décrire les étapes de notre écran de bienvenue de notre visite guidée :
    //il y aura une étape qui s'appelle "intro" qui dit "Hello world"
    hidePrev: true,
    prevLabel: 'Retour',
    nextLabel: 'Suite',
    doneLabel: 'FIN',
    nextToDone: true,
    showBullets: true,
    exitOnEsc: true,
    exitOnOverlayClick: true,
    KeyboardNavigation: true,
    scrollToElement: true,
    scrollTo: 'tooltip',
    disableInteraction: false,
    // showButtons: true,
    // overlayOpacity: 0.8,
    steps: [{
        title: 'Re-bonjour !',
        intro: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Robert Alter" width="200px" height="200px"/> Voyons ce qu\'il est possible de faire sur cette page !',
    }, 
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 1er arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step13'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur le bouton <b>FILTRES</b> pour trier les ressources et faciliter vos recherches !",
    }, 
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 2ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step14'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cette partie affiche le fil d'accès des ressources. Celle-ci s'affichent par ordre anti-chronologique. Les ressources les plus récentes apparaissent en haut de la page.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 3ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step15'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "C'est ici que s'affiche le titre de la ressource.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 4ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step16'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "C'est ici que s'affiche le statut de la ressource (déja commentée et notée ou non encore commentée).",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 5ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step17'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "C'est ici que s'affiche la catégorie de la ressource.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 6ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step18'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Nous vous indiquons ici le pourcentage de cette ressource qui est en accès libre.",
    },  
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 7ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step19'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur <b>Lire la suite</b> pour être redirigés vers le contenu complet de la ressource. ",
    },
]

//et ensuite on démarre IntroJS
}).start();



// introJs().start();