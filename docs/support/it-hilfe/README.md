---
description: Kurzbeschreibung für Suchmaschinen
sidebar_label: IT-Hilfe zur Selbsthilfe
sidebar_position: 10
tags: []
sidebar_custom_props:
  icon: mdiHelpBoxMultipleOutline
draft: false
---

# IT-Hilfe zur Selbsthilfe

<Tabs>
  <TabItem value="Mein Gerät" label="Mein Gerät">
:::info[Ich habe Probleme mit meinem Konto, mit Office 365, mit Authentifizieren]

:::solution[Lösung]
Melde, dass dein Konto zurückgesetzt werden muss, vergiss nicht deine Mailadresse und deine Mobilenummer anzugeben: [👉 :mdi[emailEditOutline]](mailto:soarhe.jahany@bernedu.ch?subject=Account%20Sch%C3%BCler%3Ain%20zur%C3%BCcksetzen&body=Guten%20Tag%20Herr%20Jahany%2C%0A%0ABitte%20setzen%20Sie%20meinen%20Account%20zur%C3%BCck%3A%0A%0A%40edu.gbsl.ch%0A%0ATel.%2007%0A%0ABesten%20Dank%20und%20freundliche%20Gr%C3%BCsse)
:::

:::info[Ich kann mich bei Word oder einer andern App nicht anmelden]
:::solution[Lösung]
Anmeldung nicht möglich tritt auf, wenn du folgendes Häkchen nicht gelöscht hast.

![--width=350px](./login-screen-o365.png)

Unten Links auf __Nein, nur bei dieser App anmelden__ klicken.
:::

:::info[Ich komme mit meinem Macbook nicht ins Internert, obwohl ich im WLAN angemeldet bin]
:::solution[Lösung]
1. Installiere (daheim ober über Hotspot) einen andern Browser (Chrome, Opera, Edge) damit kommst du auch in der Schule ins Internet.
2. Kontrolliere, ob du ein iCloud+-Abo hast und __Privat-Relay__ eingeschaltet ist:

Klicke auf das Apple-Menü __:mdi[apple]__, wähle __Systemeinstellungen__ . Klicke dann oben in der Seitenleiste auf „[dein Name]“ und anschließend auf __iCloud__. Klicke anschliessend auf __Privat-Relay__.
![](macprivaterelay.png)
Schalte es aus.

**Was ist Private-Relay und wieso gibt es Probleme?- Eine elegante Lösung**
Private-Relay schützt dich vor Angriffen aus dem Internet, indem es deine Identität verbirgt und deine Anfragen versteckt. Das macht durchaus Sinn etwa im WLAN daheim, aber nicht in gut gesicherten Netzwerken, weil in diesen gerade mit der Kontrolle der Identität die Sicherheit erhöht wird.

Die beste Lösung besteht darin, __Private-Relay__ nur für das BYOD-WLAN auszuschalten, so bist du weiterhin auch in den einfacheren Netzwerken gut geschützt:

Klicke auf das Apple-Menü __:mdi[apple]__, wähle __Systemeinstellungen__ . Klicke in der Seitenleiste auf __Netzwerk__ und anschliessend auf der rechten Seite __WLAN-BYOD__, Klicke auf die __:mdi[informationOutline]__.

Deaktiviere zum Schluss die Option __Tracking der IP-Adresse beschränken__.
:::

:::info[WLAN]
Problem mit dem **Passwort** beim Anmelden
:::solution[Lösung]
Kein neues Passwort setzen im Anmeldeprozess des WLAN! Setze dir hier ein neues Passwort, das gilt für alle Anmeldungen in der Schule (Apps, WLAN, Mail): [👉 ](https://password.edubern.ch/)

Klappt auch das nicht, dann ist dein Account gesperrt und muss zurückgesetzt werden. Melde dich mit diesem Mail, gib deine gbsl-Mailadresse und deine Mobilenummer ein: [👉 :mdi[emailEditOutline]](mailto:soarhe.jahany@bernedu.ch?subject=Account%20Sch%C3%BCler%3Ain%20zur%C3%BCcksetzen&body=Guten%20Tag%20Herr%20Jahany%2C%0A%0ABitte%20setzen%20Sie%20meinen%20Account%20zur%C3%BCck%3A%0A%0A%40edu.gbsl.ch%0A%0ATel.%2007%0A%0ABesten%20Dank%20und%20freundliche%20Gr%C3%BCsse)

Wenn dein Account zurückgesetzt ist, kannst du dir ein neues Passwort setzen [👉 ](https://password.edubern.ch/) und dich danach damit wieder beim WLAN-BYOD anmelden.
:::

  </TabItem>
  <TabItem value="Installation D-Gebäude" label="Installation D-Gebäude">
:::info[Ton]
Kein Ton bei einer Präsention, bei einem Film

:::solution[Lösung]
Kontrolliere, ob du den] Ton nicht auf stumm eingestellt hast auf deinem Gerät:
![](lautstärke.png)
Bild einsetzen

Kontrolliere auf der Fernbedienung des Beamers __Volume__

Bild
:::

:::info[Beamer lässt sich nicht einschalten]

:::solution[Lösung]
 
```mermaid
flowchart TD
    Start("Der Beamer lässt sich nicht einschalten") --> D["Am Beamer leuchtet ein Lämpchen"] & n2["Am Beamer leuchtet kein Lämpchen"] & n13["Deckenlicht lässt sich auch nicht einschalten<br>Hausdienst 032 327 06 69"]
    n2 --> n6["Support benachrichtigen<br>[ <a href="https://forms.office.com/r/akUrVUFaRu" target="_blank">👉 IT-Support</a>]"]
    D --> n7["Fernbedienung: Batteriefach kontrollieren"]
    n7 --> n9["Keine Batterien oder Kreiden."] & n11["Batterien korrekt eingelegt?"]
    n9 --> n10["Batterien holen."]
    n11 --> n12["Batterien korrekt einlegen<br>Neue Batterien holen<br>Kurz: Fernbedienung aus anderem Zimmer ausleiehn"]

    D@{ shape: rounded}
    n2@{ shape: rounded}


```
:::

:::info[Kamera funktioniert nicht]

:::solution[Lösung]
 
```mermaid
flowchart TD
    C("Der Beamer ist eingeschaltet und die Quelle ist hdBase-T?") -- ja --> n2["Kamera hat Strom"]
    n2 -- nein --> n3["Licht im Zimmer funktioniert?"]
    n2 -- ja --> n4["hdmi-Kabel angeschlossen bei hdmi in?"]
    n3 -- ja --> n5["Kamera eingeschaltet?<br>Stromkabel angeschlossen?"]
    n3 -- nein --> n6["Hausdienst 032 327 06 069"]
    n5 -- ja --> n7["Stromkabel unten am Boden des AV-Pultes eingesteckt?"]
    n7 --> n8["Support benachrichtigen<br>[ <a href="https://forms.office.com/r/akUrVUFaRu" target="_blank">👉 IT-Support</a>]"]
    n4 --> n9["Kein Kabel vorhanden oder Stecker abgeknickt"] & n11["Kabel eingesteckt im schwarzen Kästchen und das Lämpchen des Eingangs leuchtet?"]
    n9 --> n10["Hole eines in D101 oder D201, schliesse es an"]
    n11 -- ja --> n12["Support benachrichtigen<br>[ <a href="https://forms.office.com/r/akUrVUFaRu" target="_blank">👉 IT-Support</a>]"]
    n11 -- nein --> n13["Stecke das hdmi-Kabel ein und und wähle mit dem Druckschalter diesen Kanal"]
    C -- nein --> n14["Schalte den Beamer ein und wechsle mit der Taste hdmi auf die Quelle hdBaseT"]

    n2@{ shape: rounded}

```
:::
</TabItem>
  <TabItem value="Installation M + G" label="Installation M + G">
Kein Strom bei Kamera, Verstärker

</TabItem>
</Tabs>




