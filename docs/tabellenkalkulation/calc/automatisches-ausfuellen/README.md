---
description: Wie Zellbereiche automatisch mit Werten und Formeln ausgefüllt werden können.
apps:
  - LibreOffice Calc
sidebar_position: 11
sidebar_custom_props:
  icon: mdi-card-plus-outline
  source: gym-kirchenfeld
---

# Automatisches Ausfüllen



Mit dem **automatischen Ausfüllen** können Tabellenbereiche schnell mit einem vordefinierten Wert oder einer Formel ausgefüllt werden.

Um einen Tabellenbereich mit einem konstanten Wert zu füllen, wird dieser Wert in die erste Zelle des Bereichs geschrieben. Anschliessend wird das kleine Quadrat unten rechts der Zellmarkierung gefasst und in die gewünschte Richtung gezogen.

![Automatisches Ausfüllen mit einem konstanten Wert](./fill.png)

Ein Tabellenbereich kann auch mit einer auf- oder absteigenden Folge von Werten gefüllt werden. Dazu werden die zwei ersten Werte in zwei benachbarte Zellen geschrieben. Anschliessend werden **beide** Zellen ausgewählt. Nun wird wiederum das kleine Quadrat unten rechts der Zellmarkierung gefasst und in die gewünschte Richtung gezogen.

![Automatisches Ausfüllen mit einer Differenz](./fill-diff.png)

Auch Formeln können so kopiert werden. Dabei werden die Formeln beim Ziehen automatisch an den neuen Zellbereich angepasst. Steht beispielsweise in der Zelle **D2** die Formel `=MITTELWERT(A2:C2)` und wird diese nach unten gezogen, so ergibt sich für **D3** die Formel `=MITTELWERT(A3:C3)`, für **D4** die Formel `=MITTELWERT(A4:C4)` etc.

![Automatisches Ausfüllen mit einer Formel](./fill-formula.png)
