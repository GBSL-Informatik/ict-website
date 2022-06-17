---
tags:
  - vuepress
  - vuejs
sidebar_custom_props:
  source: gym-kirchenfeld
  path: /docs/dokumentation/md-extensions.md
---

# Markdown-Extensions
## is-gui

im Tab _Einstellungen_
Wähle den Menüpunkt __Datei__ :mdi-chevron-right: __Öffnen__

``` md
im Tab _Einstellungen_
Wähle den Menüpunkt __Datei__ :mdi-chevron-right: __Öffnen__
```

## multimd-table

|             |          Grouping           | |
| First Header | Second Header | Third Header |
| :----------- | :-----------: | -----------: |
| Content      |  *Long Cell*  |              |
| Content      |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped '\\|'       ||
[Prototype table]

``` md
|             |          Grouping           ||
| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |  *Long Cell*  |              |
| Content      |   **Cell**    |         Cell |

New section   |     More      |         Data |
And more      | With an escaped '\\|'       ||
[Prototype table]
```

https://www.npmjs.com/package/markdown-it-multimd-table


## implicit-figures
![Stormtroopocat](./images/stormtroopocat.jpg)

``` md
![Stormtroopocat](./images/stormtroopocat.jpg)
```


https://www.npmjs.com/package/markdown-it-implicit-figures

## Icons (MDI)

<span style={{fontSize: '3rem'}}>:mdi-island: :mdi-soccer:</span>

``` md
<span style={{fontSize: '3rem'}}>:mdi-island: :mdi-soccer:</span>
```


https://www.npmjs.com/package/markdown-it-mdi

## deflist

Definition 1
: Erklärung 1a
: Erklärung 1b

Definition 2
: Erklärung 2

``` md
Definition 1
: Erklärung 1a
: Erklärung 1b

Definition 2
: Erklärung 2
```

https://github.com/markdown-it/markdown-it-deflist


## kbd
[[Ctrl]] + [[x]]

``` md
[[Ctrl]] + [[x]]
```

https://www.npmjs.com/package/markdown-it-kbd


## decorate

![Minion](./images/minion.png)<!-- {.small} -->

``` md
![Minion](./images/minion.png)<!-- {.small} -->
```


https://github.com/rstacruz/markdown-it-decorate
