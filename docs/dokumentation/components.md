---
description: vue-components von theme/global-components/
sidebar_custom_props:
  icon: mdi-school
  source: gym-kirchenfeld
  path: /docs/dokumentation/components.md
---

# Components
Beispiel dieser Seite:

## Frontmatter

``` yaml
---
sidebar_custom_props:
  icon: mdi-school
  source: gym-kirchenfeld
  path: /docs/dokumentation/components.md
---
```

## Features
Diese Komponente extrahiert die Überschriften und icons aller untergeordneten Artikel und zeigt diese wie auf der Startseite an.

``` md
<Features />
```

Falls es sich um das `README.md` eines direkten Unterordners von `docs` handelt (bspw. `docs/sicherheit/README.md`) muss statt `<Features />` die Komponente `<FeatureCategories />` verwendet werden.

```md
<FeatureCategories />
```

## SearchBox

<SearchBox>

Das Wort wird **fett** geschrieben

</SearchBox>

```md

<SearchBox>

Das Wort wird **fett** geschrieben

</SearchBox>

```

## BrowserWindow

<BrowserWindow>

Das Wort wird **fett** geschrieben

</BrowserWindow>

``` md

<BrowserWindow>

Das Wort wird **fett** geschrieben

</BrowserWindow>

```

## ExcelBox

<ExcelBox>

= $A1 + 3

</ExcelBox>

``` md
<ExcelBox>

= $A1 + 3

</ExcelBox>
```

## Icons

Wenn ein alleinstehendes Icon in einer speziellen Grösse, Farbe oder mit Unterschrift gebraucht wird, kann dieses wie folgt eingefügt werden:

```md
<Icon size="3em" icon="mdi-palette" color="#2bdbde" caption="Ein freistehendes Icon" />
```

<Icon size="3em" icon="mdi-palette" color="#2bdbde" caption="Ein freistehendes Icon"/>