---
title: 'Python OS Modul - Python Spickzettel'
description: 'Dieses Modul bietet eine portable Möglichkeit zur Nutzung betriebssystemabhängiger Funktionen.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OS Modul
</base-title>

Dieses Modul bietet eine portable Möglichkeit, betriebssystemabhängige Funktionalität zu nutzen.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs OS Modul
  </base-disclaimer-title>
  <base-disclaimer-content>
    Das <router-link to="/modules/pathlib-module">pathlib</router-link>-Modul bietet weitaus mehr Funktionalität als die hier aufgeführten, wie z.B. das Abrufen des Dateinamens, das Abrufen der Dateiendung, das Lesen/Schreiben einer Datei ohne manuelles Öffnen usw. Sehen Sie sich die <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">offizielle Dokumentation</a> an, wenn Sie mehr erfahren möchten.
    <br>
    Für einen tiefergehenden Blick auf beide, siehe die Seite <router-link to="/cheatsheet/file-directory-path">Datei- und Verzeichnispfade</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Linux- und Windows-Pfade

Unter Windows werden Pfade mit Backslashes (`\`) als Trennzeichen zwischen Ordnernamen geschrieben. Auf Unix-basierten Betriebssystemen wie macOS, Linux und BSDs wird der Schrägstrich (`/`) als Pfadtrennzeichen verwendet. Das Zusammenfügen von Pfaden kann mühsam sein, wenn Ihr Code auf verschiedenen Plattformen funktionieren muss.

Glücklicherweise bietet uns Python `os.path.join`, um dies zu handhaben.

```python
import os

# Pfadkomponenten unter Verwendung des korrekten Trennzeichens für das Betriebssystem zusammenfügen
os.path.join('usr', 'bin', 'spam')
```

Ausgabe:

```plaintext
usr\bin\spam
```

Das Zusammenfügen von Pfaden ist hilfreich, wenn Sie verschiedene Dateipfade unter demselben Verzeichnis erstellen müssen.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# Jeden Dateinamen mit dem Basisverzeichnis zusammenfügen
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

Ausgabe:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Das aktuelle Arbeitsverzeichnis

```python
import os

# Das aktuelle Arbeitsverzeichnis abrufen
os.getcwd()
```

Ausgabe:

```plaintext
/home/labex/project
```

```python
# Das aktuelle Arbeitsverzeichnis ändern
os.chdir('/usr/bin')

# Die Änderung überprüfen
os.getcwd()
```

Ausgabe:

```plaintext
/usr/bin
```

## Neue Ordner erstellen

```python
import os
# Verzeichnisse rekursiv erstellen (erstellt alle übergeordneten Verzeichnisse, falls erforderlich)
os.makedirs('/tmp/delicious/walnut/waffles')
```

## Absolute vs. Relative Pfade

Es gibt zwei Möglichkeiten, einen Dateipfad anzugeben.

- Ein **absoluter Pfad**, der immer mit dem Stammverzeichnis beginnt
- Ein **relativer Pfad**, der sich auf das aktuelle Arbeitsverzeichnis des Programms bezieht

Es gibt auch die Ordner Punkt (`.`) und Punkt-Punkt (`..`). Dies sind keine echten Ordner, sondern spezielle Namen, die in einem Pfad verwendet werden können. Ein einzelner Punkt (“dot”) für einen Ordnernamen ist eine Kurzform für „dieses Verzeichnis“. Zwei Punkte (“dot-dot”) bedeuten „das übergeordnete Verzeichnis“.

### Umgang mit absoluten Pfaden

Um zu sehen, ob ein Pfad ein absoluter Pfad ist:

```python
import os
# Prüfen, ob der Pfad absolut ist (beginnt mit dem Stammverzeichnis)
os.path.isabs('/')
```

Ausgabe:

```plaintext
True
```

```python
# Relative Pfade geben False zurück
os.path.isabs('..')
```

Ausgabe:

```plaintext
False
```

Sie können auch einen absoluten Pfad extrahieren:

```python
import os
# Zuerst das aktuelle Verzeichnis abrufen
os.getcwd()
```

Ausgabe:

```plaintext
/home/labex/project
```

```python
# Relativen Pfad in einen absoluten Pfad umwandeln
os.path.abspath('..')
```

Ausgabe:

```plaintext
/home
```

### Umgang mit relativen Pfaden

Sie können einen relativen Pfad von einem Startpfad zu einem anderen Pfad erhalten.

```python
import os
# Relativen Pfad vom Startpfad zum Zielpfad abrufen
os.path.relpath('/etc/passwd', '/')
```

Ausgabe:

```plaintext
etc/passwd
```

## Pfad- und Dateigültigkeit

### Prüfen, ob eine Datei/ein Verzeichnis existiert

```python
import os

# Prüfen, ob der Pfad existiert (Datei oder Verzeichnis)
os.path.exists('.')
```

Ausgabe:

```plaintext
True
```

```python
os.path.exists('setup.py')
```

Ausgabe:

```plaintext
True
```

```python
os.path.exists('/etc')
```

Ausgabe:

```plaintext
True
```

```python
os.path.exists('nonexistentfile')
```

Ausgabe:

```plaintext
False
```

### Prüfen, ob ein Pfad eine Datei ist

```python
import os

# Prüfen, ob der Pfad eine Datei ist
os.path.isfile('setup.py')
```

Ausgabe:

```plaintext
True
```

```python
os.path.isfile('/home')
```

Ausgabe:

```plaintext
False
```

```python
os.path.isfile('nonexistentfile')
```

Ausgabe:

```plaintext
False
```

### Prüfen, ob ein Pfad ein Verzeichnis ist

```python
import os

# Prüfen, ob der Pfad ein Verzeichnis ist
os.path.isdir('/')
```

Ausgabe:

```plaintext
True
```

```python
os.path.isdir('setup.py')
```

Ausgabe:

```plaintext
False
```

```python
os.path.isdir('/spam')
```

Ausgabe:

```plaintext
False
```

## Dateigröße in Bytes abrufen

```python
import os

# Dateigröße in Bytes abrufen
os.path.getsize('/usr/bin/python3')
```

Ausgabe:

```plaintext
776192
```

## Verzeichnisse auflisten

```python
import os

# Alle Dateien und Verzeichnisse im angegebenen Pfad auflisten
os.listdir('/usr/bin')
```

Ausgabe:

```plaintext
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

## Dateigrößen von Verzeichnissen

<base-warning>
  <base-warning-title>
    WARNUNG
  </base-warning-title>
  <base-warning-content>
    Verzeichnisse selbst haben auch eine Größe! Sie sollten also prüfen, ob ein Pfad eine Datei oder ein Verzeichnis ist, indem Sie die Methoden verwenden, die im obigen Abschnitt besprochen wurden.
  </base-warning-content>
</base-warning>

```python
import os
total_size = 0

# Gesamtgröße aller Dateien im Verzeichnis berechnen
for filename in os.listdir('/usr/bin'):
    # Verzeichnispfad mit Dateiname zusammenfügen und Größe abrufen
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

Ausgabe:

```plaintext
1117846456
```

## Dateien und Ordner löschen

- Der Aufruf von `os.unlink(path)` löscht die Datei unter dem Pfad.

- Der Aufruf von `os.rmdir(path)` löscht den Ordner unter dem Pfad. Dieser Ordner muss leer von Dateien oder Ordnern sein.

## Durch einen Verzeichnisbaum durchlaufen

```python
import os

# Rekursiv durch den Verzeichnisbaum durchlaufen
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'Der aktuelle Ordner ist {folder_name}')
    # Unterverzeichnisse durchlaufen
    for subfolder in subfolders:
        print(f'UNTERORDNER VON {folder_name}: {subfolder}')
    # Dateien durchlaufen
    for filename in filenames:
        print(f'DATEI IN {folder_name}: filename{filename}')
    print('')
```

Ausgabe:

```plaintext
Der aktuelle Ordner ist /tmp/delicious
UNTERORDNER VON /tmp/delicious: cats
UNTERORDNER VON /tmp/delicious: walnut
DATEI IN /tmp/delicious: spam.txt

Der aktuelle Ordner ist /tmp/delicious/cats
DATEI IN /tmp/delicious/cats: catnames.txt
DATEI IN /tmp/delicious/cats: zophie.jpg

Der aktuelle Ordner ist /tmp/delicious/walnut
UNTERORDNER VON /tmp/delicious/walnut: waffles

Der aktuelle Ordner ist /tmp/delicious/walnut/waffles
DATEI IN /tmp/delicious/walnut/waffles: butter.txt
```

## Relevante Links

- <router-link to="/cheatsheet/file-directory-path">Spickzettel: Datei- & Verzeichnispfad</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Dateien lesen und schreiben</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Pathlib Grundlagen</router-link>
- <router-link to="/modules/pathlib-module">Modul: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
