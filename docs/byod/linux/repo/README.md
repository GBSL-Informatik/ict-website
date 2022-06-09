---
icon: mdi-linux
systems: [Linux]
sort: 20
---

# Gymkirchenfeld-Repo installieren



Das Repository unserer Schule wird beispielsweise für das Einrichten der Drucker gebraucht. Das Repository muss einmal hinzugefügt werden. Das geschieht mit folgenden Kommandozeilen-Befehlen:

``` bash
echo "deb https://deb.gymkirchenfeld.ch bullseye-kinet main contrib non-free" | sudo tee /etc/apt/sources.list.d/kinet.list
```
``` bash
echo "deb https://deb.gymkirchenfeld.ch bullseye-backports-kinet main contrib non-free" | sudo tee -a /etc/apt/sources.list.d/kinet.list
```
``` bash
echo "deb https://deb.gymkirchenfeld.ch bullseye-kinet-bin main contrib non-free" | sudo tee -a /etc/apt/sources.list.d/kinet.list
```

Der Key für das Repository kann hier heruntergeladen werden:

[kinet.gpg](https://media.mygymer.ch/debian/kinet.gpg)

Mit dem folgenden Befehl wird der Key installiert:

``` bash
sudo cp kinet.gpg /etc/apt/trusted.gpg.d/
```

Danach muss man den Index des neuen Repositorys abrufen mit:

``` bash
sudo apt update
```