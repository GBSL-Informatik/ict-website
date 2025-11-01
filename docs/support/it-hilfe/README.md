---
sidebar_label: IT-Hilfe zur Selbsthilfe
sidebar_position: 10
tags: []
sidebar_custom_props:
  icon: mdiHelpBoxMultipleOutline
draft: false
---

# IT-Hilfe zur Selbsthilfe

Hier solltest du Lösungen für dein technisches Problem finden können.

Falls für dein Problem keine Lösung zu finden ist oder du eine Lösung ausprobiert hast, aber dein Problem damit nicht gelöst werden konnte, so kannst du das hier melden. Gib bitte genau an, was das Problem ist und was du für Lösungen probiert hast. Screenshots sind hilfreich für den Support. 
[Mail schreiben](mailto:ithelp@bernedu.ch?subject=%20&body=%20Damit%20wir%20rasch%20helfen%20können,%20benötigen%20wir%20folgende%20Angaben%0A%0AMailadresse%20gbsl:%0A%0AAktuelle%20Mobilnummer:%0A%0AMac%20oder%20Windows:%0A%0AGenaue%20Beschreibung%20des%20Problems:%0A%0AFehlermeldung,%20falls%20eine%20erscheint:%0A%0AEvtl.%20Screenshot%20im%20Anhang)

<Tabs>
  <TabItem value="Mein Gerät" label="Mein Gerät">
::::info[Ich habe Probleme mit meinem Konto, mit Office 365, mit Authentifizieren]

:::solution[Lösung]
Melde, dass dein Konto zurückgesetzt werden muss, vergiss nicht deine Mailadresse und deine Mobilenummer anzugeben: [👉 :mdi[emailEditOutline]](mailto:ithelp@bernedu.ch?subject=Account%20Sch%C3%BCler%3Ain%20zur%C3%BCcksetzen&body=Guten%20Tag%20%2C%0A%0ABitte%20setzen%20Sie%20meinen%20Account%20zur%C3%BCck%3A%0A%0A%40edu.gbsl.ch%0A%0ATel.%2007%0A%0ABesten%20Dank%20und%20freundliche%20Gr%C3%BCsse)
:::
::::

::::info[Smartphone verloren, gestohlen, kaputt, ein neues und kein Zugriff auf den Authenticator]
:::solution[Lösung]
Solltest du ein neues Smartphone haben und noch Zugriff auf dein altes:
[👉](docs\schulkonto\/mfa\wechselhandy\README.md)

Sonst:
Melde, dass dein Konto zurückgesetzt werden muss, vergiss nicht deine Mailadresse und deine Mobilenummer anzugeben: [👉 :mdi[emailEditOutline]](mailto:it-help-for-students@bernedu.ch?subject=Account%20Sch%C3%BCler%3Ain%20zur%C3%BCcksetzen&body=Guten%20Tag%2C%0A%0ABitte%20setzen%20Sie%20meinen%20Account%20zur%C3%BCck%3A%0A%0A%40edu.gbsl.ch%0A%0ATel.%2007%0A%0ABesten%20Dank%20und%20freundliche%20Gr%C3%BCsse)

Wenn du die Meldung erhalten hast, dass dein Account zurückgesetzt worden ist,  kannst du den Authenticator wieder einrichten auf deinem Smartphone oder es bei der Authentifikation über SMS belassen: [👉](docs\schulkonto\mfa\README.md)

Tipp: [👉](docs\schulkonto\mfa\tipsnoproblem\README.md)
:::
::::

::::info[Meine MFA / die Authenticator App ist zurückgesetzt worden - was muss ich jetzt tun?]

:::solution[Lösung]
Quickstart Neukonfiguration MFA:

Der/die Lernende öffnet auf dem Computer folgenden Link: https://qr.edubern.ch/mfasetup
Mit E-Mail-Adresse und Passwort anmelden. Es erscheint die Meldung: «Weitere Informationen erforderlich». Auf [Weiter] klicken.
Bei Fenster «Angemeldet bleiben?» auf [Ja] klicken.
Bei Fenster «Microsoft Authenticator» unten links auf [Ich möchte eine andere Methode einrichten] klicken.
Methode «Telefon» gemäss Anweisungen auf Bildschirm einrichten.
Der/die Lernende öffnet auf dem Computer nochmals folgenden Link:https://qr.edubern.ch/mfasetup
Im neuen Fenster [Anmeldemethode hinzufügen] auswählen.
Methode «Microsoft Authenticator» gemäss Anweisungen auf Bildschirm einrichten.
Anschliessend kann die MFA für das Login wieder wie gewohnt verwendet werden. Informationen und Anleitungen dazu sind auf der [Website von EDUBERN](https://www.edubern.bkd.be.ch/de/start/portal.html) zu finden.

:::
::::

::::info[Ich muss meinen Laptop zur Reparatur einschicken - gibt es Ersatzgeräte?]

:::solution[Lösung]
Unsere Bibliothek leiht Laptops aus: [](https://www.winmedio.net/gymb)

1. Klicke auf __Suchergebnisse__
2. Setze das Häkchen bei __Laptops__

![](laptopbiblio.jpg)
:::
::::


::::info[Ich kann mich bei Word oder einer andern App nicht anmelden]
:::solution[Lösung]
## Hast du Probleme mit Anmelden, gibt es zwei Hauptursachen

### 1. Bei Anmeldung Häkchen nicht deaktiviert

Anmeldung nicht möglich tritt auf, wenn du folgendes Häkchen nicht gelöscht hast.

Versuche dich bei einer App anzumelden, wenn folgende Box angezeigt wird, Häkchen deaktivieren und markierte Variante anklicken:

![--width=350px](./login-screen-o365.png)

Unten Links auf __Nein, nur bei dieser App anmelden__ klicken.

Taucht diese Box nicht auf, so schau hier nach:

### 2. Ein Schulkonto ist fälschlicherweise eingerichtet 

Entweder hast du von deiner alten Schule die Office-Installation nicht vollständig gelöscht oder du hast versehentlich ein Schulkonto hinzugefügt.

Um ein bestehendes Schulkonto zu entfernen, ist wie folgt vorzugehen:

<Tabs groupId="os">
  <TabItem value="win" label="Windows">

Unter __Einstellungen :mdi[cog]{.blue}__ klicke auf __Konten :mdi[account]{.cyan}__ scrolle runter auf __Auf Arbeits-, Schulkonto...zugreifen__ danach auf __trennen__ klicken.

![](./Schulkonto2.png)

  </TabItem>
  <TabItem value="osx" label="Mac">

Unter Mac OS X muss ein Tool für die Entfernung von bestehenden Konten verwendet werden. 

Anleitung
: [👉 Anleitung](https://support.microsoft.com/de-de/office/entfernen-von-office-lizenzdateien-auf-einem-mac-b032c0f6-a431-4dad-83a9-6b727c03b193)
Tool
: [👉 Removal-Tool](https://go.microsoft.com/fwlink/?linkid=849815)

  </TabItem>
</Tabs>
:::
::::

::::info[Ich komme mit meinem Macbook nicht ins Internert, obwohl ich im WLAN angemeldet bin]
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
::::

::::info[WLAN]
Ich kann mit meinem Mac nicht mehr direkt drucken über **uniflow**
:::solution[Lösung]
Wenn deinstallieren und neu installieren nicht hilft, so musst du folgendermassen vorgehen, um ein deep clean zu erzwingen, damit keine alten Installationsdateien zurückbleiben:

Oeffne den __Finder__, gehe zu __Programme__ dann zu __Dienstprogramme__ und öffne die **Aktivitätsanzeige** (gelb markiert) mit einem Doppelklick.

![](aktivitätsanzeige1.png)

Anschliessend suchst du **smartclient**, doppelklicke und wähle __Sofort beenden__.

Du befindest dich immer noch im Finder, suche __Terminal__ (im Screenshot oben grün markiert), doppelklicke und gib folgendes ein:

sudo bash /etc/smartclient/uninstall-smartclient.bash

Gib dein Passwort ein für dein Macbook - es klappt, auch wenn du keine Eingabe siehst. Drücke __Enter__.


Danach kannst du den Druckertreiber über das Dashboard installieren [👉 ](https://gymb.eu.uniflowonline.com/#Dashboard).

Pour les collègues dont le menu de l'ordinateur est en français : vous trouverez ci-joint un mode d'emploi du GBJB à télécharger.
<a target="\_blank" href={require('./assets/ReinstallerUniflowsurMac.pdf').default}>
   :mdi[download-box-outline]{.blue} Download dieser Anleitung
</a>

:::
::::

::::info[WLAN]
Problem mit dem **Passwort** beim Anmelden
:::solution[Lösung]
Kein neues Passwort setzen im Anmeldeprozess des WLAN! 

![Hier kannst du kein neues Passwort setzen! Das geht nur über den Passwortreset --width=200px](./wlanpwneu.jpeg)

Setze dir hier ein neues Passwort, das gilt für alle Anmeldungen in der Schule (Apps, WLAN, Mail): [👉 ](https://password.edubern.ch/)

Klappt auch das nicht, dann ist dein Account gesperrt und muss zurückgesetzt werden. Melde dich mit diesem Mail, gib deine gbsl-Mailadresse und deine Mobilenummer ein: [👉 :mdi[emailEditOutline]](mailto:soarhe.jahany@bernedu.ch?subject=Account%20Sch%C3%BCler%3Ain%20zur%C3%BCcksetzen&body=Guten%20Tag%20Herr%20Jahany%2C%0A%0ABitte%20setzen%20Sie%20meinen%20Account%20zur%C3%BCck%3A%0A%0A%40edu.gbsl.ch%0A%0ATel.%2007%0A%0ABesten%20Dank%20und%20freundliche%20Gr%C3%BCsse)

Wenn dein Account zurückgesetzt ist, kannst du dir ein neues Passwort setzen [👉 ](https://password.edubern.ch/) und dich danach damit wieder beim WLAN-BYOD anmelden.
:::
::::

::::info[Mein Windows-Notebook geht in den Ruhezustand oder der Bildschirm wird dunkel während einer Präsentation.]

:::solution[Lösung]
Eine einfache und praktische Lösung ist die Installation von __Microsoft PowerToys__ über den __Microsoft Store__. Interessant ist __PowerToys Awake__, das du aufrufen kannst, nachdem du __PowerToys__ installiert hast. Dort wählst du folgende Einstellungen:

![](PowerToysAwake.png)


:::
::::

::::info[Bei der Erstanmeldung oder dem Passwort-Reset erhalte ich keine SMS]

Das kann 2 mögliche Ursachen haben: Entweder ist auf deinem Smartphone ein SMS-Filter aktiviert oder auf der SIM-Karte deines Mobile-Anbieters verhindert eine Einstellung den Empfang.

:::solution[SMS-Filter prüfen]

<Tabs groupId="phone">
  <TabItem value="iPhone" label="iPhone">

Wähle __Einstellungen__ scrolle runter zu __App__, wähle __App__.


![--width=75%](iphonesmsfilter2.jpeg)


Scrolle runter zu __Nachrichten__ und wähle diese.

![--width=75%](iphonesmsfilter3.jpeg)


Ist dieser Filter gesetzt, kannst du in der Liste nachschauen, ob du eine SMS von 079 807 10 11 erhalten hast und diese Nummer zu den bekannten Absendern hinzufügen.

Wenn dieser Filter nicht gesetzt ist, dann gehe zur nächsten Lösung "Netzwerk zurücksetzen".

![--width=75%](iphonesmsfillter4.jpeg)

  </TabItem>
  <TabItem value="android" label="Android">

Hinweis: Je nach Android-Version oder Hersteller können die Screenshots anders aussehen.

Öffne die Nachrichten-App und tippe danach auf das Symbol für deinen Kontonamen:

![--width=75%](androidsmsfilter1.png)

Hier wählst du __Als Spam markiert und blockiert__.

![--width=75%](androidsmsfilter2.png)

Wenn du folgenden Screen siehst, musst du die Lösung "Netzwerkeinstellungen zurücksetzen" wählen.

![--width=75%](AndroidleererOrdnerFilterSMS.jpg)

Siehst du einen Ordner mit SMS-Nachrichten, suchst du eine Nachricht von 079 807 10 11, öffne sie und tippe auf __Kein Spam__ danach solltest du die SMS empfangen können.

  </TabItem>
</Tabs>

:::

:::solution[Netzwerk-Einstellungen zurücksetzen]

<Tabs groupId="phone">
  <TabItem value="iPhone" label="iPhone">

Wähle __Einstellungen__    und danach __Allgemein__ 

 ![--width=75%](iPhoneNetzwerReset1.jpeg)

 Hier wählst du __iPhone übertragen/zurücksetzen__ 
 
 ![--width=75%](iPhoneNetzwerReset2.jpeg)
 

 ![--width=75%](iPhoneNetzwerReset3.jpeg)


ACHTUNG: Nichts Falsches wählen, wenn du die Option „Alle Inhalte & Einstellungen löschen“ wählst, wird dein gesamter Inhalt gelöscht.

Wähle 

**Netzwerkeinstellungen**: Alle Netzwerkeinstellungen werden zurückgesetzt. Außerdem wird der unter „Einstellungen“ > „Allgemein“ > „Info“ zugeordnete Name auf „iPhone“ zurückgesetzt. Zertifikate, die manuell als vertrauenswürdig eingestuft wurden (etwa für Websites), werden in „nicht vertrauenswürdig“ geändert.

  </TabItem>
  <TabItem value="android" label="Android">

Wähle __Einstelllungen__ und scrolle runter zu __System__, wähle dies an.

Die Screenshots stammen von einem Pixel mit Android 15 und Android 16. Je nach Android-Version und Hersteller des Smartphones können die Menüs anders ausschauen.

![--width=75%](androidnetzwerkreset1.png)

Scrolle nach unten und wähle __Optionen zum Zurücksetzen__ an.

![--width=75%](androidnetzwerkreset2.png)

Wähle __Einstellungen für Mobilfunknetze zurücksetzen__ aus. 

![--width=75%](androidnetzwerkreset3.png)
  </TabItem>
</Tabs>

:::


::::

</TabItem>
<TabItem value="Installation D-Gebäude" label="Installation D-Gebäude">

::::tip[Tipp]
Kleinere und einfachere Probleme löst du am schnellsten selber. Dazu findest du in D101 und D201 je eine rote Box mit Kabeln, Batterien, Fernbedienungen, Ladegeräten plus eine laminierte Anleitung mit den Flussidagrammen, die du hier unter "Beamer lässt sich nicht einschalten" und "Kamera funktioniert nicht" ebenfalls finden kannst.
::::

::::info[Ton]
Kein Ton bei einer Präsention, bei einem Film

:::solution[Lösung]
Kontrolliere, ob du den] Ton nicht auf stumm eingestellt hast auf deinem Gerät:
![](lautstärke.png)
Bild einsetzen

Kontrolliere auf der Fernbedienung des Beamers __Volume__

Bild
:::
::::

::::info[Beamer lässt sich nicht einschalten]

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
::::

::::info[Kamera funktioniert nicht]

:::solution[Lösung]

```mermaid
flowchart TD
    C("Der Beamer ist eingeschaltet und die Quelle ist hdBase-T?") -- ja --> n2["Kamera hat Strom"]
    n2 -- nein --> n3["Licht im Zimmer funktioniert?"]
    n2 -- ja --> n4["hdmi-Kabel angeschlossen bei hdmi in?"]
    n3 -- ja --> n5["Kamera eingeschaltet?<br>Stromkabel angeschlossen?"]
    n3 -- nein --> n6["Hausdienst 032 327 06 069"]
    n5 -- ja --> n7["Stromkabel unten am Boden des AV-Pultes eingesteckt?"]
    n7 --> n8["Support benachrichtigen<br>[<a href="https://forms.office.com/r/akUrVUFaRu" target="_blank">👉 IT-Support</a>]"]
    n4 --> n9["Kein Kabel vorhanden oder Stecker abgeknickt"] & n11["Kabel eingesteckt im schwarzen Kästchen und das Lämpchen des Eingangs leuchtet?"]
    n9 --> n10["Hole eines in D101 oder D201, schliesse es an"]
    n11 -- ja --> n12["Support benachrichtigen<br>[ <a href="https://forms.office.com/r/akUrVUFaRu" target="_blank">👉 IT-Support</a>]"]
    n11 -- nein --> n13["Stecke das hdmi-Kabel ein und und wähle mit dem Druckschalter diesen Kanal"]
    C -- nein --> n14["Schalte den Beamer ein und wechsle mit der Taste hdmi auf die Quelle hdBaseT"]

    n2@{ shape: rounded}

```
:::
::::

</TabItem>
<TabItem value="Installation M + G" label="Installation M + G">
Kein Strom bei Kamera, Verstärker

</TabItem>
</Tabs>
