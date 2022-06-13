---
description: Habe ich ein Backup meiner wichtigsten Daten?
sidebar_position: 130
sidebar_custom_props:
  icon: mdi-cloud-upload
---

# Backupstrategien



:::warning Das Wichtigste zuerst:
a. Es ist entscheidend, **dass** regelmässig Backups gemacht werden, die gewählte Methode ist dabei zweitrangig.
b. Wichtig: **Backups separat lagern** (nicht am Computer angeschlossen und nicht im gleichen Raum).
:::

## Backup der Daten auf mobilen Geräten
Es gilt zu unterscheiden, welche Apps die Daten **lokal** (auf dem Smartphone) resp. **im Internet** (z.B. in einer Cloud resp. bei einem App-Anbieter) speichern (siehe [Datenspeicherorte](./../datenspeicherorte/)).

Daten, die in der Cloud gespeichert werden, sind in der Regel relativ gut vor Datenverlust geschützt. Wichtig ist daher, dass man insbesondere diejenigen Daten sichert, die nur lokal auf dem Smartphone gespeichert sind. Solche Daten können mit der Software des Smartphone-Herstellers auf dem PC gespeichert (*iTunes* für iPhones, *Kies* für Samsung-Geräte, ...) oder mit zusätzlichen Apps in die Cloud synchronisier werden.


## Backup der PC-Daten
Es gibt viele Wege, die Daten auf einem PC zu sichern. Grundsätzlich kann man zwischen Backups auf ein externes Speichermedium und solchen auf einen Netzwerk- oder Cloudspeicher unterscheiden.

:::tip Empfehlung
Eine gute Lösung ist die Software **Duplicati** (https://www.duplicati.com/, Anleitung siehe unten), die folgende Vorteile bietet:
:::

Duplicati ...
- ... gibt es für Windows, Mac OS X und Linux.
- ... ist freie Software (Open-Source-Software).

Die Backups können ...
- ... lokal (auf einer externen Festplatte) oder bei einem von zahlreichen Cloud-Anbietern gespeichert werden.
- ... automatisiert in regelmässigen Abständen durchgeführt werden.
- ... vor dem Upload in die Cloud verschlüsselt werden, so dass der Cloud-Anbieter keinen Zugriff auf die Daten erhält.
- ... nach einer bestimmten Zeit automatisch gelöscht werden, um Platz zu sparen.

In einem Notfall können die Daten ...
- ... einzeln oder gesamthaft,
- ... von einem beliebigen, verfügbaren Backupstand,
- ... an eine beliebige Stelle wiederhergestellt werden.

:::danger Achtung
Die häufig verwendete Methode, die wichtigen Daten regelmässig *von Hand auf einer externen Festplatte* zu speichern, birgt etliche Gefahren:
:::

1. Das Backup muss manuell erstellt werden, d.h. man muss regelmässig daran denken, was dazu führt, dass es oft vergessen geht.
2. Für jedes Backup muss eine neue, sinnvolle Bezeichnung gewählt werden. Oft werden schlecht nachvollziehbare Namen verwendet, was die Rettung der aktuellsten Daten im Notfall erschwert.
3. Die Harddisk sollte **nicht** am Computer angeschlossen bleiben, da so bei einer allfälligen Infektion mit einem Virus oder Erpressungstrojaner die Backup-Daten ebenfalls in Mitleidenschaft gezogen werden.


## Sichern der Zugangsdaten
Wichtig – gerade bei Cloud-Backups – ist insbesondere, dass die **Online-Zugangsdaten** (Benutzernamen und Passwörter) **zusätzlich separat gespeichert** werden. Denn was nützt im Notfall (z.B. weil das Notebook gestohlen wurde) ein aktuelles Online-Backup, wenn die Logindaten oder das Passwort, mit das Backup verschlüsselt ist, nicht zugänglich sind?
