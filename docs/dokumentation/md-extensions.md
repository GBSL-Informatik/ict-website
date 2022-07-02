---
tags:
  - vuepress
  - vuejs
sidebar_custom_props:
  source: gym-kirchenfeld
  path: /docs/dokumentation/md-extensions.md
---

# Markdown-Extensions
## GUI Elemente

im Tab _Einstellungen_
Wähle den Menüpunkt __Datei__ :mdi-chevron-right: __Öffnen__

``` md
im Tab _Einstellungen_
Wähle den Menüpunkt __Datei__ :mdi-chevron-right: __Öffnen__
```


## Bilder
![Stormtroopocat](./images/stormtroopocat.jpg)

``` md
![Stormtroopocat](./images/stormtroopocat.jpg)
```


## Icons (MDI)

<span style={{fontSize: '3rem'}}>

:mdi-island: :mdi-soccer:

</span>

``` md
<span style={{fontSize: '3rem'}}>

:mdi-island: :mdi-soccer:

</span>
```

## Flex Boxen

:::flex
![Dojocat](./images/dojocat.jpg)
***
![Stormtroopocat](./images/stormtroopocat.jpg)
***
![Minions](./images/minion.png)
:::

```md
:::flex
![Dojocat](./images/dojocat.jpg)
***
![Stormtroopocat](./images/stormtroopocat.jpg)
***
![Minions](./images/minion.png)
:::
```

## Cards

:::cards
![Dojocat](./images/dojocat.jpg)
***
![Stormtroopocat](./images/stormtroopocat.jpg)
***
![Minions](./images/minion.png)
:::

```md
:::cards
![Minions](./images/dojocat.jpg)
***
![Stormtroopocat](./images/stormtroopocat.jpg)
***
![Minions](./images/minion.png)
:::
```

## Details

:::details Klicken für mehr Details
Ein Minion als Überraschung
![Minion --width=200px](images/minion.png)
:::

:::lösung
Ein Minion als Überraschung
![Minion --width=200px](images/minion.png)
:::

```md
:::details Klicken für mehr Details
Ein Minion als Überraschung
![Minion --width=200px](images/minion.png)
:::

:::lösung
Ein Minion als Überraschung
![Minion --width=200px](images/minion.png)
:::
```

## Admonitions

:::aufgabe
Probier es aus
:::

:::note
Some **content** with _markdown_ `syntax`.
:::

:::tip
Some **content** with _markdown_ `syntax`.
:::

:::info
Some **content** with _markdown_ `syntax`.
:::

:::info Information
Es kann auch ein angepasster Titel gewählt werden.
:::

:::caution
Some **content** with _markdown_ `syntax`.
:::

:::danger
Some **content** with _markdown_ `syntax`.
:::

```md
:::aufgabe
Probier es aus
:::

:::note
Some **content** with _markdown_ `syntax`.
:::

:::tip
Some **content** with _markdown_ `syntax`.
:::

:::info
Some **content** with _markdown_ `syntax`.
:::

:::info Information
Some **content** with _markdown_ `syntax`.
:::

:::caution
Some **content** with _markdown_ `syntax`.
:::

:::danger
Some **content** with _markdown_ `syntax`.
:::
```

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


## kbd
[[Ctrl]] + [[x]]

``` md
[[Ctrl]] + [[x]]
```



## Anpassungen

![Minion --class=small](./images/minion.png)

![Minion --width=120px](./images/dojocat.jpg)

``` md
![Minion --class=small](./images/minion.png)
![Minion --width=120px](./images/dojocat.jpg)
```
