const config = require(`../config/bot.js`)

module.exports = {

    start: {
      perms: ":warning: Il vous manque la permission `gérer les messages` pour pouvoir utiliser cette commande ou le rôle :",
      channel: ":warning: Merci d'indiquer un salon textuel `#salon` pour commencer le concours.",
      duration: ":warning: Merci d'indiquer la durée du concours. Arguments disponibles `s` pour les secondes, `m` pour les minutes, `h` pour les heures et `d` pour les jours. Exemple `10m`.",
      argswinners: ":warning: Merci d'indiquer le nombre de gagnant(s). Exemple `1` pour un seul gagnant ou `2` pour deux gagnants.",
      prize: ":warning: Merci d'indiquer le prix à remporter. Exemple `un nitro`.",
      good: ":tada: J'ai lancé le concours dans le salon :",

      giveaway: "**GIVEAWAY** 🎁",
      giveawayEnded: "**GIVEAWAY FINI** 🎁",

      timeRemaining: "Temps restant : **{duration}** !",
      inviteToParticipate: (message) => `Cliquez sur ${config.reaction} pour participer !`,
      winMessage: (message) => `${config.reaction} Bravo, {winners} ! Lot : **{prize}** !`,
      embedFooter: "Concours",
      noWinner: "Concours annulé, pas assez de participants.",
      hostedBy: "Lancé par : {user}",
      winners: "gagnant(s) ",
      endedAt: "Terminé",
    },
  
    units: {
      seconds: "seconde(s)",
      minutes: "minute(s)",
      hours: "heure(s)",
      days: "jour(s)",
    },

    help: {
      title: "Panneau d'aide",
      description: "Retrouvez la liste de mes commande sur ce panneau, arguments obligatoires `<>`.",

      start: (message) => `**${config.prefix}start**`,
      startdescription: (message) => `Cette commande sert à lancer un concours.\nUsage \`${config.prefix}start <#salon> <temps> <gagnants> <lot>\`.`,

      end: (message) => `**${config.prefix}end**`,
      enddescription: (message) => `Cette commande sert à supprimer un concours.\nUsage \`${config.prefix}end <ID concours>\`.`,

      reroll: (message) => `**${config.prefix}reroll**`,
      rerolldescription: (message) => `Cette commande sert à relancer un concours.\nUsage \`${config.prefix}reroll <ID concours>\`.`,

      edit: (message) => `**${config.prefix}edit**`,
      editdescription: (message) => `Cette commande sert à modifier un concours.\nUsage \`${config.prefix}edit <ID concours> <gagnants> <nouveau lot>\`.`,

      lang: (message) => `**${config.prefix}lang**`,
      langdescription: (message) => `Cette commande sert à modifier la langue du bot.\nUsage \`${config.prefix}lang <fr/en>\`.`,

      set: (message) => `**${config.prefix}set**`,
      setdescription: (message) => `Cette commande sert à modifier les configurations du bot.\nUsage \`${config.prefix}set <mention/logs/role>\`.`,
        
      invite: (message) => `**${config.prefix}invite**`,
      invitedescription: (message) => `Cette commande sert à obtenir le lien d'invitation du bot.\nUsage \`${config.prefix}invite\`.`
    },

    end: {
      perms: ":warning: Il vous manque la permission `gérer les messages` pour pouvoir utiliser cette commande ou le rôle :",
      msg: ":warning: Merci d'indiquer l'identifiant d'un concours.",
      err: ":warning: Je n'ai rien trouvé pour ce concours :",
      errmod: ":warning: Une erreur s'est produite, peut être que ce concours est déjà terminé ou supprimé ?",
      good: ":hourglass_flowing_sand: Je supprime ce concours dans :"
    },

    reroll: {
      perms: ":warning: Il vous manque la permission `gérer les messages` pour pouvoir utiliser cette commande ou le rôle :",
      msg: ":warning: Merci d'indiquer l'identifiant d'un concours.",
      err: ":warning: Je n'ai rien trouvé pour ce concours :",
      good: ":tada: Nouveau(x) gagnant(s) : {winners} ! Bravo !",
      parts: ":warning: Il n'y pas eu assez de participants pour ce concours je ne peut pas choisir."
    },

    edit: {
      perms: ":warning: Il vous manque la permission `gérer les messages` pour pouvoir utiliser cette commande ou le rôle :",
      msg: ":warning: Merci d'indiquer l'identifiant d'un concours.",
      argswinners: ":warning: Merci d'indiquer le nombre de gagnant(s). Exemple `1` pour un seul gagnant ou `2` pour deux gagnants.",
      prize: ":warning: Merci d'indiquer le nouveau prix à remporter. Exemple `un rôle spécial`.",
      err: ":warning: Je n'ai rien trouvé pour ce concours :",
      good: ":tada: Je suis en train de modifier le concours avec les nouveaux paramètres. Les modifications seront prises en compte dans 5 secondes.",
      errmod: ":warning: Une erreur s'est produite, peut être que ce concours est déjà terminé ou supprimé ?"
    },

    lang: {
      perms: ":warning: Il vous manque la permission `gérer les messages` pour pouvoir utiliser cette commande.",
      msg: ":warning: Merci d'indiquer une langue à définir `fr` le français et `en` l'anglais.",
      err: ":warning: La langue choisie est déjà celle active sur ce serveur. Essayez une autre pour voir ?"
    },

    set: {
      perms: ":warning: Il vous manque la permission `gérer les messages` pour pouvoir utiliser cette commande.",
      msg: ":warning: Merci d'indiquer une fonction à définir `mention` pour mentionner tout le serveur si un concours est lancé, `logs` pour définir un salon avec les logs des concours, et `role` choisir un rôle pour que les utilisateurs qui le possèdent puisse lancer des concours sans avoir la permission gérer les messages.",
      args: ":warning: Merci d'indiquer une fonction `on` pour activer ou `off` pour désactiver.",
      erroff: ":warning: Cette fonction est déjà désactivée. Essayez de l'activer pour voir ?",
      erron: ":warning: Cette fonction est déjà activée. Essayez de la désactiver pour voir ?",
      mon: ":dividers: J'ai activé la fonction `everyone` pour les prochains concours.",
      moff: ":dividers: J'ai désactivé la fonction `everyone` pour les prochains concours.",
      channel: ":warning: Merci de m'indiquer un salon textuel, `#salon` pour définir les logs.",
      chon: ":dividers: J'ai défini les logs des concours sur le salon :",
      role: ":warning: Merci de m'indiquer un rôle, `@rôle` pour définir un rôle.",
      ron: ":dividers: J'ai défini le rôle alternatif avec :",
    },

    logs: {
      raddtitle: "Nouveau participant",
      raddmsg1: "Le membre",
      raddmsg2: "viens de rejoindre le concours",
      rremtitle: "Ancien participant",
      rremmsg1: "Le membre",
      rremmsg2: "viens d'annuler sa participation sur le concours",
    },

    invite: {
      title: "Invitez moi",
      text: "Comment m'inviter ?",
      description: "Si vous voulez m'inviter sur votre serveur cliquez juste",
      text2: "Rejoindre mon serveur",
      server: "Si vous voulez rejoindre mon serveur cliquez juste",
      clickhere: "ici"
    }
};
