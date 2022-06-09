---
icon: mdi-cloud
systems: [Linux]
sort: 20
---

# OneDrive einrichten



:::danger
Das Synchronisieren von Dokumenten in Kurs-Teams funktioniert zur Zeit nicht.
:::

Für Linux gibt es einen OneDrive-Client. Hier ist die GitHub-Seite des Projekts:

[OneDrive Free Client](https://github.com/abraunegg/onedrive)

## OneDrive für debianbasierte Distributionen installieren

Mit dem folgenden Befehl wird OneDrive installiert:

``` bash
sudo apt install onedrive
```

## OneDrive einrichten

:::danger
Die folgenden Befehle müssen als normaler Benutzer (und nicht als root) ausgeführt werden.
:::

OneDrive legt alle synchronisierten Dateien standardmässig im Ordner `~/OneDrive` ab. Wenn man schon ein OneDrive hat, dann muss die detailierte Anleitung unter /usr/share/doc/onedrive/USAGE.md.gz, Kapitel "Additional Configuration" > "Using multiple Onedrive-Accounts" konsultiert werden.

Um die Synchronisation zu starten, wird der folgende Kommandozeilenbefehl ausgeführt:

``` bash
onedrive
```

Beim ersten Ausführen von Onedrive wird folgende Meldung angezeigt:


```
Authorize this app visiting:

https://login.microsoftonline.com/common/…

Enter the response uri:
```

Nun muss die angezeigte URL kopiert und in einem Browser eingefügt werden. Anschliessend muss man sich im Browser an der Cloud anmelden. Danach wird eine leere Seite angezeigt. Hier muss die URL kopiert und in der Kommandozeile eingefügt werden.

## OneDrive manuell synchronisieren (empfohlen für die erste Synchronisation)

:::danger
Der folgende Befehl muss als normaler Benutzer (und nicht als root) ausgeführt werden.
:::


``` bash
onedrive --synchronize
```
## OneDrive automatisch synchronisieren

:::danger
Die folgenden Befehle müssen als normaler Benutzer (und nicht als root) ausgeführt werden.
:::

Um die Dateien automatich zu synchronisieren, müssen folgende zwei Befehle in der Kommandozeile eingegeben werden:

``` bash
systemctl --user enable onedrive
systemctl --user start onedrive
```
