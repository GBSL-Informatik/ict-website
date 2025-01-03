---
description: Kurzbeschreibung für Suchmaschinen
sidebar_label: Guide d'auto-assistance
sidebar_position: 10
tags: []
sidebar_custom_props:
  icon: mdiHelpBoxMultipleOutline
draft: false
---

# Assistance IT - Guide d'auto-assistance

<Tabs>
  <TabItem value="Mon appareil" label="Mon appareil">
:::info[J'ai des problèmes avec mon compte, Office 365, ou l'authentification]

:::solution[Solution]
Signalez que votre compte doit être réinitialisé, n'oubliez pas d'indiquer votre adresse e-mail et votre numéro de téléphone portable : [👉 :mdi[emailEditOutline]](mailto:soarhe.jahany@bernedu.ch?subject=Réinitialisation%20du%20compte%20élève&body=Bonjour%20M.%20Jahany%2C%0A%0AMerci%20de%20réinitialiser%20mon%20compte%20:%0A%0A%40edu.gbsl.ch%0A%0ATel.%2007%0A%0AMerci%20d'avance%20et%20cordialement)
:::

:::info[Je ne peux pas me connecter à Word ou à une autre application]
:::solution[Solution]
Le problème de connexion apparaît si vous n'avez pas décoché l'option suivante.

![--width=350px](./login-screen-o365.png)

Cliquez en bas à gauche sur __Non, se connecter uniquement à cette application__.
:::

:::info[Je n'arrive pas à me connecter à Internet avec mon MacBook, même si je suis connecté au Wi-Fi]
:::solution[Solution]
1. Installez un autre navigateur (Chrome, Opera, Edge) depuis chez vous ou via un hotspot, cela vous permettra d'accéder à Internet à l'école.
2. Vérifiez si vous avez un abonnement iCloud+ et si __Private Relay__ est activé :

Cliquez sur le menu Apple __:mdi[apple]__, sélectionnez __Réglages système__. Ensuite, dans la barre latérale en haut, cliquez sur « [votre nom] », puis sur __iCloud__. Cliquez ensuite sur __Private Relay__.  
![](macprivaterelay.png)  
Désactivez-le.

**Qu'est-ce que Private Relay et pourquoi cela pose problème ? Une solution élégante**  
Private Relay vous protège contre les attaques en ligne en masquant votre identité et vos requêtes. Cela est utile dans un réseau domestique, mais dans les réseaux sécurisés comme celui de l'école, l'identité vérifiée augmente la sécurité.

La meilleure solution consiste à désactiver __Private Relay__ uniquement pour le Wi-Fi BYOD, tout en maintenant une protection dans les réseaux moins sécurisés :

Cliquez sur le menu Apple __:mdi[apple]__, sélectionnez __Réglages système__. Cliquez sur __Réseau__ dans la barre latérale, puis sur __Wi-Fi BYOD__ à droite. Cliquez sur l'icône __:mdi[informationOutline]__.  

Enfin, désactivez l'option __Limiter le suivi de l'adresse IP__.
:::

:::info[Wi-Fi]
Problème de **mot de passe** lors de la connexion
:::solution[Solution]
Ne définissez pas un nouveau mot de passe lors du processus de connexion Wi-Fi ! Définissez un nouveau mot de passe ici, il sera valable pour toutes vos connexions à l'école (apps, Wi-Fi, e-mail) : [👉 ](https://password.edubern.ch/)

Si cela ne fonctionne toujours pas, votre compte est probablement bloqué et doit être réinitialisé. Envoyez un e-mail contenant votre adresse e-mail GBSL et votre numéro de téléphone portable : [👉 :mdi[emailEditOutline]](mailto:soarhe.jahany@bernedu.ch?subject=Réinitialisation%20du%20compte%20élève&body=Bonjour%20M.%20Jahany%2C%0A%0AMerci%20de%20réinitialiser%20mon%20compte%20:%0A%0A%40edu.gbsl.ch%0A%0ATel.%2007%0A%0AMerci%20d'avance%20et%20cordialement)

Une fois votre compte réinitialisé, vous pourrez définir un nouveau mot de passe [👉 ](https://password.edubern.ch/) et l'utiliser pour vous reconnecter au Wi-Fi BYOD.
:::

:::info[Mon ordinateur portable Windows passe en veille ou l'écran s'éteint pendant une présentation.]

:::solution[Solution]
Une solution simple et pratique consiste à installer __Microsoft PowerToys__ depuis le __Microsoft Store__. Utilisez __PowerToys Awake__ après l'installation. Configurez les paramètres comme suit :

![](PowerToysAwake.png)
:::

</TabItem>
  <TabItem value="Installation Bâtiment D" label="Installation Bâtiment D">
:::info[Son]
Pas de son pendant une présentation ou un film

:::solution[Solution]
Vérifiez si le son n'est pas coupé sur votre appareil :
![](lautstärke.png)  
Insérez une image

Vérifiez également le bouton __Volume__ sur la télécommande du projecteur.  

Insérez une image  
:::

:::info[Le projecteur ne s'allume pas]

:::solution[Solution]
```mermaid
flowchart TD
    Start("Le projecteur ne s'allume pas") --> D["Une lumière est allumée sur le projecteur"] & n2["Aucune lumière n'est allumée sur le projecteur"] & n13["Les lumières du plafond ne fonctionnent pas non plus<br>Appelez le service de maintenance : 032 327 06 69"]
    n2 --> n6["Contactez le support<br>[<a href='https://forms.office.com/r/akUrVUFaRu' target='_blank'>👉 Support IT</a>]"]
    D --> n7["Télécommande : vérifiez le compartiment à piles"]
    n7 --> n9["Pas de piles ou piles usées"] & n11["Piles correctement insérées ?"]
    n9 --> n10["Prenez de nouvelles piles."]
    n11 --> n12["Insérez correctement les piles<br>Utilisez une télécommande d'une autre salle si nécessaire."]
:::

La caméra ne fonctionne pas

Solution

mermaid
Code kopieren
flowchart TD
    C("Le projecteur est allumé et la source est hdBase-T ?") -- oui --> n2["La caméra est-elle alimentée en électricité ?"]
    n2 -- non --> n3["Les lumières de la salle fonctionnent-elles ?"]
    n2 -- oui --> n4["Le câble HDMI est-il branché dans HDMI IN ?"]
    n3 -- oui --> n5["La caméra est-elle allumée ?<br>Le câble d'alimentation est-il branché ?"]
    n3 -- non --> n6["Appelez le service de maintenance : 032 327 06 69"]
    n5 -- oui --> n7["Le câble d'alimentation est-il branché en bas de la console AV ?"]
    n7 --> n8["Contactez le support<br>[<a href='https://forms.office.com/r/akUrVUFaRu' target='_blank'>👉 Support IT</a>]"]
    n4 --> n9["Pas de câble ou connecteur plié"] & n11["Le câble est-il branché dans le boîtier noir, et le voyant d'entrée est-il allumé ?"]
    n9 --> n10["Prenez un câble dans D101 ou D201 et branchez-le."]
    n11 -- oui --> n12["Contactez le support<br>[<a href='https://forms.office.com/r/akUrVUFaRu' target='_blank'>👉 Support IT</a>]"]
    n11 -- non --> n13["Branchez le câble HDMI et sélectionnez ce canal à l'aide du bouton."]
    C -- non --> n14["Allumez le projecteur et changez la source en appuyant sur hdmi pour hdBaseT."]
</TabItem> <TabItem value="Installation Bâtiments M + G" label="Installation Bâtiments M + G"> Pas d'alimentation pour la caméra, l'amplificateur </TabItem> </Tabs>

