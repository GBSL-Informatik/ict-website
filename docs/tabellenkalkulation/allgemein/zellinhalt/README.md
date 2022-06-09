---
title: 'Datentypen'
subtitle: Eine Zelle kann unterschiedliche Arten von Werten enthalten. In der Informatik spricht man dabei von <strong>Datentypen</strong>
icon: mdi-percent
apps: [Microsoft Excel, LibreOffice Calc]
sort: 2
---



Eine Zelle kann drei unterschiedliche Arten von Werten enthalten:

- **Text**
- **Zahlen**
- **Formeln**

Dieser Unterschied ist zentral, da die Tabellenkalkulation nur mit Zahlen rechnen kann. Wird in einer Formel eine Zelle verwendet, die einen Text enthält, so kann kein Wert berechnet werden. Ausserdem werden Zahlen und Texte anders sortiert.

Die Unterscheidung zwischen Text und Zahl ist jedoch nicht trivial. Beispielsweise können `42` und `123` entweder Zahl oder als Text behandelt werden. Beim Sortieren von Zahlen steht `42` vor `123`, beim Sortieren von Text jedoch `123` vor `42`.

Dies ist ein Beispiel für **Datentypen**, ein grundlegendes Konzept in der Informatik. Dabei gehört zu jedem Wert ein **Typ**, welcher gewisse Eigenschaften des Werts festlegt.

## Zuordnung des Datentyps bei der Eingabe

Normalerweise wird den folgenden Eingaben automatisch der Typ *Zahl* zugeordnet:

- Zahlen: `42`, `3.14159`, `-1e6`
- Prozentwerten: `39%`, `-150%`
- Daten: `1.1.2018`, `29.02.2000`
- Zeiten: `12:15`

:::danger
In Excel sind nur Daten ab dem 1.1.1900 gültig.
:::

Allen anderen Eingaben wird automatisch der Typ *Text* zugeordnet, insbesondere auch ungültigen Daten wie `31.01.2001` oder bei der Verwendung eines falschen Dezimaltrennzeichens (z.B. Komma statt Punkt in der Schweiz).

## Datentyp Text erzwingen

Um den Datentyp *Text* zu erzwingen, kann dem Wert ein Apostroph  [[']] vorangestellt werden:

```
'42
'1.1.2018
```

:::tip Grundlegendes Konzept
Daten wird ein **Typ** zugeordnet, um festzulegen, welche **Operationen** mit den Daten möglich sind und wie sich die Daten **verhalten**.

**Beispiele**

- Zahlen und Text als Zellinhalt in Tabellenkalkulationsprogrammen
- Dateitypen (XLSX-Dateien, PDF-Dateien, ...)
- Datentypen in Programmiersprachen
:::
