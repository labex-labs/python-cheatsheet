---
title: 'Dateipfade und Verzeichnispfade - Python Spickzettel'
description: 'In Python gibt es zwei Hauptmodule zur Pfadmanipulation: das os.path-Modul und das pathlib-Modul.'
labUrl: 'https://labex.io/de/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Umgang mit Datei- und Verzeichnis-Pfaden
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Für eine eingehende Beschäftigung mit praktischen Dateisystemoperationen, lesen Sie unseren Blogbeitrag: <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>.

In Python gibt es zwei Hauptmodule, die sich mit Pfadmanipulation befassen.
Eines ist das Modul <router-link to="/modules/os-module">os.path</router-link> und das andere ist das Modul <router-link to="/modules/pathlib-module">pathlib</router-link>.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs OS Module
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> bietet weitaus mehr Funktionalität als die oben genannten, wie z.B. das Abrufen des Dateinamens, das Abrufen der Dateierweiterung, das Lesen/Schreiben einer Datei ohne manuelles Öffnen usw. Sehen Sie sich die <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">offizielle Dokumentation</a> an, wenn Sie mehr erfahren möchten.
  </base-disclaimer-content>
</base-disclaimer>

## Linux- und Windows-Pfade

Unter Windows werden Pfade mit umgekehrten Schrägstrichen (`\`) als Trennzeichen zwischen
Ordnernamen geschrieben. Auf Unix-basierten Betriebssystemen wie macOS, Linux und BSDs wird der Schrägstrich (`/`) als Pfadtrennzeichen verwendet. Das Verbinden von Pfaden kann ein Problem sein, wenn Ihr Code auf verschiedenen Plattformen funktionieren soll.

Glücklicherweise bietet das `pathlib`-Modul von Python eine einfache Möglichkeit, dies zu handhaben.

Verwendung von `pathlib` unter \*nix:

```python
# pathlib.Path: plattformübergreifende Pfadbehandlung
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # Pfadkomponenten verbinden
```

```output
usr/bin/spam
```

`pathlib` bietet auch eine Abkürzung für `joinpath` unter Verwendung des `/`-Operators:

```python
# Path Operator (/): bequeme Methode zum Verbinden von Pfaden (plattformübergreifend)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # / Operator anstelle von joinpath() verwenden
```

```output
usr/bin/spam
```

Beachten Sie, dass sich das Pfadtrennzeichen zwischen Windows und Unix-basierten Betriebssystemen unterscheidet. Deshalb sollten Sie `pathlib` verwenden, anstatt Zeichenketten zusammenzufügen, um Pfade zu verbinden.

Das Verbinden von Pfaden ist hilfreich, wenn Sie verschiedene Dateipfade unter demselben Verzeichnis erstellen müssen.

Verwendung von `pathlib` unter \*nix:

```python
# Path.home(): Benutzer-Home-Verzeichnis abrufen, mit Dateinamen kombinieren
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # Home-Verzeichnispfad abrufen
for filename in my_files:
    print(home / filename)  # Home-Pfad mit jedem Dateinamen kombinieren
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Das aktuelle Arbeitsverzeichnis

Sie können das aktuelle Arbeitsverzeichnis mit `pathlib` abrufen:

```python
# Path.cwd(): aktuelles Arbeitsverzeichnis abrufen
from pathlib import Path

print(Path.cwd())  # Gibt das aktuelle Arbeitsverzeichnis als Path-Objekt zurück
```

```output
/home/labex/project
```

## Neue Ordner erstellen

Verwendung von `pathlib` unter \*nix:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

Oh nein, wir haben einen bösen Fehler bekommen! Der Grund ist, dass das Verzeichnis 'delicious' nicht existiert, sodass wir die Verzeichnisse 'walnut' und 'waffles' nicht darunter erstellen können. Um dies zu beheben, tun Sie Folgendes:

```python
# mkdir(parents=True): Verzeichnis und alle übergeordneten Verzeichnisse erstellen, falls erforderlich
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # Verschachtelte Verzeichnisse erstellen
```

Und alles ist gut :)

## Absolute vs. Relative Pfade

Es gibt zwei Möglichkeiten, einen Dateipfad anzugeben.

- Ein **absoluter Pfad**, der immer mit dem Stammverzeichnis beginnt
- Ein **relativer Pfad**, der sich auf das aktuelle Arbeitsverzeichnis des Programms bezieht

Es gibt auch die Ordner mit einem Punkt (`.`) und zwei Punkten (`..`). Dies sind keine echten Ordner, sondern spezielle Namen, die in einem Pfad verwendet werden können. Ein einzelner Punkt („Punkt“) für einen Ordnernamen ist eine Kurzform für „dieses Verzeichnis“. Zwei Punkte („Punkt-Punkt“) bedeuten „das übergeordnete Verzeichnis“.

### Umgang mit absoluten Pfaden

Um zu sehen, ob ein Pfad ein absoluter Pfad ist, verwenden Sie `pathlib`:

```python
from pathlib import Path
Path('/').is_absolute()
```

```output
True
```

```python
Path('..').is_absolute()
```

```output
False
```

Sie können einen absoluten Pfad mit `pathlib` extrahieren:

```python
from pathlib import Path
print(Path.cwd())
```

```output
/home/labex/project
```

```python
print(Path('..').resolve())
```

```output
/home
```

### Umgang mit relativen Pfaden

Sie können einen relativen Pfad von einem Startpfad zu einem anderen Pfad mit `pathlib` erhalten:

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## Pfad- und Dateigültigkeit

### Prüfen, ob eine Datei/ein Verzeichnis existiert

Verwendung von `pathlib` unter \*nix:

```python
from pathlib import Path

Path('.').exists()
```

```output
True
```

```python
Path('setup.py').exists()
```

```output
True
```

```python
Path('/etc').exists()
```

```output
True
```

```python
Path('nonexistentfile').exists()
```

```output
False
```

### Prüfen, ob ein Pfad eine Datei ist

Verwendung von `pathlib` unter \*nix:

```python
from pathlib import Path

Path('setup.py').is_file()
```

```output
True
```

```python
Path('/home').is_file()
```

```output
False
```

```python
Path('nonexistentfile').is_file()
```

```output
False
```

### Prüfen, ob ein Pfad ein Verzeichnis ist

Verwendung von `pathlib` unter \*nix:

```python
from pathlib import Path

Path('/').is_dir()
```

```output
True
```

```python
Path('setup.py').is_dir()
```

```output
False
```

```python
Path('/spam').is_dir()
```

```output
False
```

## Die Größe einer Datei in Bytes abrufen

Verwendung von `pathlib` unter \*nix:

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat enthält auch einige andere Informationen über die Datei
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # Größe in Bytes
```

```output
10024
```

## Verzeichnisinhalte auflisten

Verzeichnisinhalte auflisten mit `pathlib` unter \*nix:

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

```output
...
/usr/bin/tiff2rgba
/usr/bin/iconv
/usr/bin/ldd
/usr/bin/cache_restore
/usr/bin/udiskie
/usr/bin/unix2dos
/usr/bin/t1reencode
/usr/bin/epstopdf
/usr/bin/idle3
...
```

## Dateigrößen von Verzeichnissen

<base-warning>
  <base-warning-title>
    WARNUNG
  </base-warning-title>
  <base-warning-content>
    Verzeichnisse selbst haben auch eine Größe! Sie sollten also prüfen, ob ein Pfad eine Datei oder ein Verzeichnis ist, indem Sie die Methoden aus den oben besprochenen Abschnitten verwenden.
  </base-warning-content>
</base-warning>

Verwendung von `pathlib` unter \*nix:

```python
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

```output
1903178911
```

## Dateien und Ordner kopieren

Das Modul `shutil` bietet Funktionen zum Kopieren von Dateien sowie ganzer Ordner.

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

```output
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

```output
/tmp/delicious/eggs2.txt
```

Während `shutil.copy()` eine einzelne Datei kopiert, kopiert `shutil.copytree()` einen gesamten Ordner und alle darin enthaltenen Ordner und Dateien:

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

```output
/tmp/bacon_backup
```

## Verschieben und Umbenennen

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs/bacon.txt
```

Der Zielpfad kann auch einen Dateinamen angeben. Im folgenden Beispiel wird die Quelldatei verschoben und umbenannt:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

```output
/tmp/eggs/new_bacon.txt
```

Wenn es keinen Ordner namens 'eggs' gibt, benennt `move()` bacon.txt in eine Datei namens 'eggs' um:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs
```

## Dateien und Ordner löschen

- Der Aufruf von `Path.unlink()` löscht die Datei am Pfad.
- Der Aufruf von `Path.rmdir()` löscht den Ordner am Pfad. Dieser Ordner muss leer von Dateien oder Ordnern sein.
- Der Aufruf von `shutil.rmtree(path)` entfernt den Ordner am Pfad, und alle darin enthaltenen Dateien und Ordner werden ebenfalls gelöscht.

## Durchsuchen eines Verzeichnisbaums

Das `Path`-Objekt verfügt über eine `rglob()`-Methode, um rekursiv über Dateien und Verzeichnisse zu iterieren.

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

```output
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Dateien lesen und schreiben</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>
- <router-link to="/builtin/open">open()</router-link>
