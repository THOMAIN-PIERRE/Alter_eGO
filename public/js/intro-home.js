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
    // disableInteraction: false,
    // showButtons: true,
    // overlayOpacity: 0.8,
    steps: [{
        title: 'Bienvenue',
        intro: 'Bonjour, moi c\'est Alty <img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Robert Alter" width="200px" height="200px"/> Cela vous dirait que je vous montre tout ce que vous pouvez faire sur ce site ? Parfait, alors c\'est parti !!! Cliquez sur <b>Suite</b> pour me suivre <img src="https://i.ibb.co/58Tkg69/v-lo.png" alt="Robert Alter" width="35px" height="35px"/>',
    }, 
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 1er arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step1'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "La barre de navigation vous permet d'accéder et de naviguer parmis les différentes fonctionnalités de l'application.",
    }, 
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 2ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step2'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur l'icône du Ministère des Solidarités et de la Santé, afin d'être redirigé vers la page d'accueil. Celle-ci met en avant les meilleurs ressources des nos <i>'Alters'</i>.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 3ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step3'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur <b>CONSULTER</b> pour accéder à la liste de toutes nos ressources.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 4ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step4'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur <b>PUBLIER</b> pour partager une ressource sur une thématique imortante à vos yeux.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 5ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step5'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur <b>EVENEMENT</b> pour consulter la liste des évènements à venir. Vous pouvez aussi proposer votre propre évènement !",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 6ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step6'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur <b>NOUS CONTACTER</b> pour accéder à un formulaire de contact et nous faire remonter vos problèmes, commentaires, suggestions.",
    },  
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 7ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step7'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Cliquer sur <b>Connexion</b> pour être redirigés vers le formulaire de connexion et vous connecter sur votre profil d'Alter. Si vous n'avez pas encore de compte, vous pourrez en créer un en cliquant sur le lien situé au bas du formulaire.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 8ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step8'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Courte présentation du site Alter eGO. Cliquez sur <b>Découvrir nos ressources</b> pour accéder à la liste des ressources disponibles.",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 9ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step9'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "C'est ici que vous trouverez mes conseils de ressources ! Les mieux notées, les plus commentées !!!",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 10ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step10'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Accédez ici à une sélection des ressources les mieux notées !",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 11ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step11'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Accédez ici à une sélection des ressources les plus commentées !",
    },
    {
        title: '<img src="https://i.ibb.co/QFp29wt/Robert.png" alt="Alty" width="50px" height="50px"/> 12ème arrêt !',
        //et ensuite il utilise un querySelector pour aller chercher une classe qui s'appelle "test"
        element: document.querySelector('.intro-step12'),
        // et quand il trouve cette classe, on lui fait afficher à l'écran : "Ceci est un test"
        intro: "Un petit carroussel de présentation de la plateforme collaboratice de co-création portée par le ministère des solidarités et de la santé.",
    },
]

//et ensuite on démarre IntroJS
}).start();



// introJs().start();