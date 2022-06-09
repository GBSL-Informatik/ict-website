---
icon: mdi-file-multiple
sort: 10
---

# Wichtige Dateitypen



| Erweiterung                                                      | Bezeichnung               | Bemerkung                                      |
| :--------------------------------------------------------------- | :------------------------ | :--------------------------------------------- |
| <Icon icon="mdi-file-pdf" size="2.6rem" color="#FF3500"/> .pdf   | Portable Document Format  | **Standardformat** für elektronische Dokumente |
| <Icon icon="mdi-file-image" size="2.6rem" color="#3348b5"/> .png | Portable Network Graphics | **Standardformat** für Logos und Ähnliches     |
| <Icon icon="mdi-file-image" size="2.6rem" color="#3348b5"/> .jpg | JPEG-Bilddatei            | **Standardformat** für Fotos                   |

| <Icon icon="mdi-file-word" size="2.6rem" color="#00a2ed"/> .doc | Microsoft Office-Dokument         | altes Wordformat, kann Makros enthalten          |
| <Icon icon="mdi-file-word" size="2.6rem" color="#00a2ed"/> .docx | Microsoft Office-Dokument         | neues Wordformat, kann keine Makros enthalten |
| <Icon icon="mdi-file-word" size="2.6rem" color="#00a2ed"/> .docm | Microsoft Office-Dokument         | neues Wordformat für Dateien mit Makros |

| <Icon icon="mdi-file-excel" size="2.6rem" color="#7FBA00"/> .xls | Microsoft Office-Dokument         | altes Excelformat, kann Makros enthalten          |
| <Icon icon="mdi-file-excel" size="2.6rem" color="#7FBA00"/> .xlsx | Microsoft Office-Dokument         | neues Excelformat, kann keine Makros enthalten |
| <Icon icon="mdi-file-excel" size="2.6rem" color="#7FBA00"/> .xlsm | Microsoft Office-Dokument         | neues Excelformat für Dateien mit Makros |

| <Icon icon="mdi-file-powerpoint" size="2.6rem" color="#F25022"/> .ppt | Microsoft Office-Dokument         | altes Powerpointformat, kann Makros enthalten          |
| <Icon icon="mdi-file-powerpoint" size="2.6rem" color="#F25022"/> .pptx | Microsoft Office-Dokument         | neues Powerpointformat, kann keine Makros enthalten |
| <Icon icon="mdi-file-powerpoint" size="2.6rem" color="#F25022"/> .pptm | Microsoft Office-Dokument         | neues Powerpointformat für Dateien mit Makros |

| <Icon icon="mdi-file-document" size="2.6rem" color="#0369A3"/> .odt | Open Document Format              | LibreOffice Writer, Textdokument |
| <Icon icon="mdi-file-chart" size="2.6rem" color="#18A303"/> .ods | Open Document Format              | LibreOffice Calc, Tabellenkalkulationsdatei |
| <Icon icon="mdi-file-eye" size="2.6rem" color="#A33E03"/> .odp | Open Document Format              | LibreOffice Impress, Präsentationsdatei |

| <Icon icon="mdi-file-alert" size="2.6rem" color="#666"/> .exe | Ausführbare Programme             | Programmdateien |
| <Icon icon="mdi-folder-zip" size="2.6rem" color="#F8D775"/> .zip | ZIP-komprimierter Ordner          | komprimierte Dateisammlung (kann aus mehreren Dateien und Ordnern bestehen) |



## Grafiken

Bei der elektronischen Darstellung und Speicherung von Bildern und Grafiken wird grundsätzlich zwischen **Pixel- und Vektorgrafiken** unterschieden.

![Smiley als Vektor- und Pixelgrafik](./smiley-pixel-vektor.png)

### Pixelgrafiken

Bei Pixelgrafiken wird die Bildfläche in ein Raster aus kleinen Quadraten unterteilt. Jedem Quadrat wird mit einer einzigen Farbe gefüllt. Diese Quadrate heissen **Pixel**.

Diese Methode eignet sich besonders für die Darstellung von **Fotografien**. Ausserdem basieren moderne Bildschirme und Drucker auf der Darstellung mit Hilfe von Pixeln.

Da für jedes Pixel ein Farbwert gespeichert werden muss, ist der Platzbedarf von Pixelgrafiken eher gross. Wenn sich die Grösse des Bildes verdoppelt, vervierfacht sich der Platzbedarf. Die folgende Tabelle zeigt den theoretischen Platzbedarf, wenn wie üblich für jedes Pixel drei Byte Speicherplatz verwendet werden:

| Grösse in Pixel | Grösse | Beschreibung                       |
| --------------- | ------ | ---------------------------------- |
| 1080 x 566      | 1.8 MB | Instagram quer                     |
| 1080 x 1080     | 3.5 MB | Instagram quadratisch              |
| 1080 x 1350     | 4.4 MB | Instagram hoch                     |
| 1920 x 1080     | 6.2 MB | Full HD-Fotografie (2 Megapixel)   |
| 2592 x 1936     | 15 MB  | iPhone 4-Fotografie (5 Megapixel)  |
| 4000 x 3000     | 36 MB  | iPhone 7-Fotografie (12 Megapixel) |
[Theoretischer Platzbedarf für Pixelgrafiken]

Da Pixelgrafiken so zuviel Speicherplatz beanspruchen würden, werden verschiedene **Komprimierungstechniken** eingesetzt, um den Platzbedarf zu reduzieren.

### Vektorgrafiken

Bei einer Vektorgrafik wird das darzustellende Bild aus geometrischen Objekten wie Linien, Kreise oder Rechtecken zusammengesetzt. Die einzelnen Objekte können einfarbig sein oder einen Farbverlauf haben, sowie teilweise transparent sein.

Vektorgrafiken haben zwei grosse Vorteile gegenüber Pixelgrafiken. Erstens benötigen sie normalerweise **deutlich weniger Speicherplatz** als eine entsprechende Pixelgrafik, da mit einem Objekt die Farbe von vielen Pixeln festgelegt wird.

Zweitens können Vektorgrafiken ohne Qualitätseinbusse **beliebig vergrössert und verkleinert werden**.

Vektorgrafiken werden deshalb insbesondere für folgende Anwendungen eingesetzt:

* Strassen- und Landkarten
* Logos
* Illustrationen
* Symbole, Icons