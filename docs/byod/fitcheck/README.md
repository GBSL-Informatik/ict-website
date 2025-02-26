---
sidebar_label: Seitenname
sidebar_position: 10
tags: []
sidebar_custom_props:
  icon: mdi-file-document-outline
draft: true
---
---
description: Kurzbeschreibung für Suchmaschinen
sidebar_label: Geräte-fit-Check
sidebar_custom_props:
  icon: mdi-hand-okay
  path: /docs/byod/fitcheck/README.md
sidebar_position: 11
draft
---

# Geräte-fit-Check

<Tabs>
<TabItem value="geräte-fit-check" label="Für Schüler:innen - Geräte-Fit-Check">

:::success[Im Unterricht]
Diese Schritte werden im Unterricht in der ersten Woche erledigt. Es ist eine spezielle Lektion __Geräte-fit-Check__ dafür vorgesehen.
:::

::::aufgabe[Schritte im Unterricht]
:::note
Mit dem _Geräte-fit-Check_ soll sichergestellt werden, dass dein Laptop für den Unterricht eingerichtet ist. Weil die Zeit knapp ist, werden Tablet (iPad) und Smartphone nicht geprüft, ausser beim Stundenplan und Teams.
:::

Du führst den _Geräte-fit-Check_ selbständig durch und trägst dich in einer Liste ein, wenn du alle Aufgaben erledigen konntest. Melde dich danach bei der Lehrperson.

1. WLAN-Verbindung
  
  ```mermaid
  flowchart TD
      Start(Laptop mit WLGYMB-BYOD verbunden? 🛜) -->|Ja| Test
      Test(Kannst du <a href="https://www.gbsl.ch" target="_blank">👉 www.gbsl.ch</a> aufrufen?) --> |Ja| Done
      Start -->|Nein| Konfigurieren
      Konfigurieren(<a href="../wlan">👉 WLAN Einrichtung</a> bereits gemacht?) -->|Ja| Support
      Konfigurieren -->|Nein| Start
      Test -->|Nein| OSX
      OSX(Hast einen Mac?) -->|Ja| OSXHelp
      OSX-->|Nein| Support
      OSXHelp(Versuche <a href="../wlan?os=osx">👉 dieses</a> Troublshooting)
      OSXHelp --> Done
      Support(Gehe zum Support 🧰)
      Done(Schritt 1: ✅)

  ```

2. Teams-Nachricht senden
   - - Sende eine Nachricht über Teams im Team, das deine Lehrperson für deine Klasse eingerichtet hat.
   - [👉 Regeln für Teams-Nachrichten](../../byod/mail/mailen/README.md#teams): Wie man eine Teams-Nachricht korrekt schreibt

3. E-Mail senden
   - [👉 Anhang hinzufügen](../../byod/mail/mailen/dateien-versenden.md)
   - Mailversand überprüfen: Senden einer Mail an deine Lehrperson
   - [👉 Regeln für E-Mail Nachrichten](../../byod/mail/mailen/README.md#e-mail): Wie man eine Mail korrekt schreibt.  

4. Teile mit deiner Lehrperson eine Datei über Onedrive
::::

</TabItem>
<TabItem value="lehrer:innen" label="Infos für Lehrer:innen">

:::info
Du führst den Geräte-Fit-Check mit der Klasse durch. Merci!
Damit das gut klappt, solltest du vorgängig ein Team für die Klasse eingerichtet haben (in deinem Fach). 
 
Die Schüler:innen sollten den Geräte-fi-Check nach Möglichkeit selbständig durchführen. 

Zu diesem Zweck sollen sie im Browser mit ihrem Laptop die Seite __ict.gbsl.website__ aufrufen und zum __Geräte-fit-Check__ navigieren.

Wer keine Verbindung zum Wlan herstellen kann, soll das Smartphone verwenden über die Verbindung mobile Daten ("Telefonleitung), um auf die Seite zuzugreifen.

Wer sich auch mit der Anleitung nicht im Wlan anmelden kann, soll sich sofort beim Support melden und die weiteren Aufgaben vorerst sein lassen.

Wer von den Schüler:innen mit dem Check durch ist, meldet sich bei dir. 
- Schicke diejenigen, die Probleme mit dem Einrichten haben und denen du nicht weiterhelfen kannst, zum Support, 
- diejenigen, die alle Aufgaben lösen konnten, können gehen.

Räume, in denen Support angeboten wird:
- Montag: M105
- Dienstag: D104
- Donnerstag: D215
  :::

:::danger[Info MFA/Authenticator]
Bei Problemen mit der Authentifizierung über die Authenticator App schickst du die Schüler:innen bitte nicht zum Support, da wir nichts machen können. Sende dafür bitte eine Mail an edubern, du brauchst nur noch Name und Tel. der Schüler:innen einzufügen. Der Account wird zurückgesetzt und die Authentifikation funktioniert über SMS. (Am besten belassen es die Schüler:innen dabei.)
[👉 :mdi[emailEditOutline]](mailto:soarhe.jahany@bernedu.ch?subject=Account%20Sch%C3%BCler%3Ain%20zur%C3%BCcksetzen&body=Lieber%20Soarhe%2C%0A%0ABitte%20setze%20folgenden%20Account%20zur%C3%BCck%3A%0A%0Ax%40edu.gbsl.ch%0A%0ATel.%2007%0A%0AMerci%20und%20liebe%20Gr%C3%BCsse)
:::

:::note[Optional]
Falls du OneNote in deinem Unterricht verwendest, so kontrolliere, ob die Schüler:innen das von dir erstellte Notizbuch öffnen können.
:::


</TabItem>
</Tabs>
