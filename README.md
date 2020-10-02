# GiveawayBot-Discord
Un code complet pour un bot Discord pour faire des concours. Facile à modifier et gratuit! Aussi disponible en anglais 🎉

Ce code est open source, vous pouvez le modifier à votre guise. Si vous le souhaitez, pensez à laisser le lien vers ce projet Github dans un emplacement sur le bot pour montrer que vous respectez le travail des autres.

## 📚 - Presentation

Ce modèle est là pour vous aider à créer un bot qui fera des cadeaux.
Ce code est complet et possède plusieurs fonctions telles que:

- Le bot enregistre les cadeaux afin qu'ils ne soient pas supprimés si le bot doit redémarrer.
- Le bot peut changer de langue.
- Le bot peut être configuré (journaux de salon, rôle spécial pour gérer lancer un cadeau si le membre n'a pas l'autorisation de gérer les messages ...).

Et plein d'autres fonctionnalités à découvrir !

## ⚙️ - Configuration

Tout d'abord, vous aurez besoin de Node, vous pouvez le télécharger en cliquant simplement sur [ici](https://nodejs.org/en/download/). La version la plus récente est recommandée.

Tout d'abord, indiquons notre chemin d'accès, dans l'invite de commande :

```
cd (le lien d'accès du dossier de votre bot, example var/www/mybot)
```

Nous allons utiliser plusieurs modules, pour les installer, faites-le dans votre invite de commande :

```
npm i
```

Tous les noms de modules sont dans "package.json" et "package-lock.json" tous les fichiers sont utiles n'oubliez pas de les supprimer.
Ensuite, nous remplirons tout ce dont le bot aura besoin pour assurer son bon fonctionnement.
Ouvrez le fichier "bot.js" qui se trouve dans le dossier "config".
Remplissez-le comme ci-dessous:

```js
module.exports = {

    token: "",

    idbot: "",

    prefix: "",

    basiclang: "",

    embeds: {
        color: "",
        footers: ""
    },

    start: {
        loading: "",
        activity: "",
    },

    events: {
        addcolor: "",
        remcolor: ""
    },

    reaction: "",

    grole: "",

    auth: {
        support: "",
        dperms: ""
    },
};
```

Pas de panique, tout est indiqué dans le fichier pour ce que vous devez remplir.
Cependant, je vous rappelle toutes les fonctions ci-dessous :

- `token`, Le token de votre bot.
- `idbot`, l'id de votre bot.
- `prefix`, le prefix de votre bot.
- `basiclang`, la langue de base du bot, "fr" pour le français et "en" pour l'anglais.
- `color`, couleur des embed (en Anglais).
- `footers`, footer de vos embed.
- `loading`, chargement de la status.
- `activity`, status de votre bot.
- `addcolor`, tla couleur de l'événement ajoute (en Anglais).
- `remcolor`, la couleur de l'événement supprimer (en Anglais).
- `reaction`, réaction aux cadeaux si vous dans la console vous voyez "emoji inconnu" c'est ce que cet emoji n'est pas reconnu par Discord.
- `grole`, si le membre n'a pas l'autorisation de gérer les messages, il peut toujours utiliser les commandes cadeaux s'il a le rôle configuré ici.
- `support`, lien de votre serveur support de votre bot.
- `dperms`, les permissions que le bot demande sur nous voulons l'ajouter sur un serveur Discord (8 = moderator).

## 🚀 - Demmare le bot

```
#Avec Node
node index.js

#Avec pm2
pm2 start index.js
```

Note Pour pm2 : 

```
pm2 start = start bot
pm2 stop = stop bot
pm2 restart = restart bot
```

Avec Node, il vous suffit de refaire (node ​​index.js).

Si dans la console vous voyez `Ready on [...] servers, for a total of [...] users.` Le bot est prêt!
Si vous voyez une erreur dans la console, n'hésitez pas à la corriger ou à me le faire savoir.

## 🔒 - Storage part

Remember not to delete "json.sqlite" as it contains all current / cancelled / modified giveaways.

Thank you for using this code !

## Bot By ZerioDev
