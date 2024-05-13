---
sidebar_custom_props:
  icon: mdi-microsoft-visual-studio-code
---


# Installation

Für das Schreiben von Dokumentationen braucht es einen GitHub-Account: [https://github.com/](https://github.com/).

## Benötigte Software:

- [Node 18+](https://nodejs.org/en/download/current/)
- [VS Code](https://code.visualstudio.com/)

## Projekt konfigurieren

In GitHub Desktop das Projekt [ict-website](https://github.com/GBSL-Informatik/ict-website) synchronisieren, indem die URL angegeben wird:

```
https://github.com/GBSL-Informatik/ict-website
```

![--width=250px --zoom](images/gh-desktop-clone.png)

Anschliessend kann das Projekt direkt in VS Code geöffnet werden:

![--width=250px --zoom](images/gh-desktop-open-vsc.png)

Damit die Website lokal angezeigt werden kann, muss ein Server gestartet werden. Dazu müssen aber zuerst die notwendigen Bibliotheken installiert werden. Dies wird in VS Code über __Terminal__ :mdi[chevronRight] __New Terminal__  gemacht. Dort kann nun folgendes eingetippt werden:

```bash
yarn run start
```

Es öffnet sich nach einer Weile automatisch die Website unter [http://localhost:3000](http://localhost:3000)

(Mit [[Ctrl]] + [[C]] kann der Server gestoppt werden.)