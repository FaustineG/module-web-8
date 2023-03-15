# Fiche module web

## Liste des exercices

- TP portfolio (faire une page HTML/CSS pour se présenter)
- TP blog (refaire une page de blog en suivant une [maquette](https://www.figma.com/file/SA0ZtLYpmSP4QipNnFDOxA/POEI---Blog?node-id=0%3A1))
- TP animation CSS (ajouter au blog un zenikanard animé)
- TP horloge (afficher l'heure qui se met à jour toutes les secondes)
- TP word counter (compter le nombre de caractères/mots dans un textarea)
- TP dessin (dessiner sur un canvas)
- TP Kaamelott (afficher les citations avec l'API Kaamelott)
- TP Pet-clinic (afficher les cliniques avec l'API Pet-Clinic)

## Ressources

[Slides](https://docs.google.com/presentation/d/1CHfvUrjivQgOeZRUyMrAceleEy5ygVtHeAtEYfmsEM0/edit?usp=sharing)

[Evaluation de la dernière promo](https://docs.google.com/document/d/1gjxzQvZcFkeJ1cXjT5U745vwr47FcTTbGxcXGNIBj9Q/edit?usp=sharing)
/!\ La promo précédente avait débuté par ce module, et avait donc des attendus moins importants en terme d'algorithmie et de programmation. De plus, ils n'avaient pas encore vu Git, d'ou l'envoi de zip par email :)

## A savoir faire pour l'évaluation

- Faire une page HTML organisée clairement et logiquement, en utilisant les balises appropriées.
- Utiliser du CSS pour mettre en forme la page, en utilisant au besoin id & class
- Utiliser JS pour rendre la page _réactive_, réagir à des évènements comme le clic sur un bouton ou l'entrée de données dans un input
- Utiliser JS pour faire appel à une API
- Utiliser JS pour mettre à jour le DOM de ma page HTML
- Utiliser JS pour traiter de l'information en utilisant des fonctions et des variables
- Produire un code clair, lisible, aux noms de variables et de fonctions explicites, et commenté au besoin.

// Pas encore vu

- Utiliser Typescript pour typer les données manipulées

## Glossaire

API: Interface entre serveur et client qui permet de faire transiter les données entre le serveur et le client grace a des endpoints (dans le cas d'une API REST).
(nb : également possible entre deux serveurs, comme pour l'API Kaamelott)

Endpoint: Route ou URL qui nous permet d'interagir avec un élément donné de l'API
(ex: /quote nous donne la citation, /user nous donne les utilisateurs)

API REST: Une interface qui fait le lien entre client et serveur, qui se base sur un protocole HTTP et respecte les contraintes REST.

Front-end/Back-end:
Front-end = ce que l'utilisateur voit, ce qui expose la donnée
Back-end = ou est stocké la donnée envoyée au front-end

Asynchrone:
Façon de traiter des tâches de manière parallèle, != au synchrone où on doit attendre qu'une tache se finisse pour traiter la suivante.
Au lieu d'attendre que la tache qui prend du temps se finisse, on peut 'promettre' sa fin et faire d'autres choses en parallèle.

Récursivité:
Fonction qui fait appel à elle même.
```javascript
let  i =  0
function callMyself(i){
    if (i < 10){
        i++;
        callMyself(i);
    }
}
```

HTML
CSS
Ecmascript/Javascript
Balise
Sémantique/syntaxe
Maquette
Constante
Variable

SPA:
Single page application

DOM:
Document Object Model
Objet qui englobe toute notre page HTML (JS et CSS compris car importés dans le fichier HTML), et qui construit un Objet JS avec lequel on peut interagir pour manipuler l'affichage dans le navigateur.

CORS:
Cross-Origin Resource Sharing
Permet de définir les domaines qui peuvent accéder a nos ressources. Si notre domaine n'est pas autorisé, la requête ne fonctionne pas.
````
