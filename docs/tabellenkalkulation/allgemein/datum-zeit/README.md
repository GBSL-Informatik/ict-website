---
description: Wie Datum und Uhrzeit als Zahlen repräsentiert werden
apps:
  - Microsoft Excel
  - LibreOffice Calc
sidebar_position: 3
sidebar_custom_props:
  icon: mdi-clock
  source: gym-kirchenfeld
  path: /docs/tabellenkalkulation/allgemein/datum-zeit/README.md
draft: true
---

# Datum und Zeit



## Tage zählen

Um ein Datum als Zahl darzustellen, kann man die Zahl als Anzahl Tage interpretieren, die seit einem Stichtag vergangen sind. Wird als Stichtag der heutige Tag gewählt, so stellt die Zahl 1 den morgigen Tag dar, die Zahl 7 den gleichen Tag in der nächsten Woche und die Zahl -1 den gestrigen Tag.

Bei Tabellenkalkulationsprogrammen hat sich der **31. Dezember 1899** als dieses Stichdatum etabliert. So entspricht die Zahl 61 dem 1. März 1900, die Zahl 43'100 entspricht dem 31. Dezember 2018.

Ein Vorteil von dieser Darstellung ist, dass sehr einfach mit Daten gerechnet werden kann.

## Darstellung der Uhrzeit

Die Darstellung der Uhrzeit als Zahl folgt der gleichen Idee. Um 12 Uhr Mittags ist ein halber Tag vergangen, also wird diese Zeit als 0.5 dargestellt.

| Zahl | Uhrzeit |
| ---: | ------- |
|    0 | 00:00   |
| 0.25 | 06:00   |
|  0.5 | 12:00   |
| 0.75 | 18:00   |

Die dazwischenliegenden Zeiten werden analog berechnet.

So kann auch ein Datum mit einer Uhrzeit kombiniert als Zahl dargestellt werden. Beispielsweise wird 06:00 Uhr morgens des 31. Dezember 2018 als 43'100.25 dargestellt.

## Datumsdarstellung in Excel

:::danger
In Microsoft Excel werden Daten vor dem 1. März 1900 [nicht korrekt dargestellt](https://support.microsoft.com/de-ch/help/214326/excel-incorrectly-assumes-that-the-year-1900-is-a-leap-year):

:::

| Zahl | Excel (XLSX)    | LibreOffice (ODS), Google Docs |
| ---: | --------------- | ------------------------------ |
|  -10 | (nicht möglich) | 20.12.1899                     |
|    0 | 0.1.1900        | 30.12.1899                     |
|    1 | 1.1.1900        | 31.12.1899                     |
|    2 | 2.1.1900        | 1.1.1900                       |
|   60 | 29.2.1900       | 28.2.1900                      |
|   61 | 1.3.1900        | 1.3.1900                       |

Der Ursprung dieses Fehlers liegt im Tabellenkalkulationsprogramm *Lotus 1-2-3* von IBM, welches 1983 erstmals veröffentlicht wurde. Bei diesem Programm wurde fälschlicherweise angenommen, dass das Jahr 1900 ein Schaltjahr ist. Als Stichdatum wurde der 31. Dezember 1899 festgelegt, so dass der 1. Januar 1900 als Zahl 1 dargestellt wurde.

![](./images/lotus-123-3.png "Lotus 1-2-3 Version 3.0")

Bei der Entwicklung von Microsoft Excel ist diese falsche Darstellung aus Kompatibilitätsgründen übernommen worden. Deshalb rechnet Excel nicht korrekt mit Daten, welche vor dem 1. März 1900 liegen.

Bei anderen Programmen wie LibreOffice oder Google Sheets ist als Stichdatum der **30. Dezember 1899** festgelegt worden, so dass die Darstellung ab dem 1. März 1900 mit Excel übereinstimmt, aber dass auch mit Daten davor korrekt gerechent werden kann.


:::tip[Grundlegendes Konzept]
Informationen werden als **Zahlen codiert**, damit sie in einem Computer gespeichert und verarbeitet werden können.

**Beispiele**

 - Datum und Uhrzeit in Tabellenkalkulationsprogrammen
- Farben in Bilddateien
- Buchstaben in Textverarbeitungsprogrammen
:::
