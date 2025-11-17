---
title: 'Python Pathlib Modul – Python Spickzettel'
description: 'Das pathlib-Modul wurde in Python 3.4 hinzugefügt und bietet einen objektorientierten Ansatz zur Verwaltung von Dateisystempfaden.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Pathlib Modul
</base-title>

For a deep dive into practical file system operations, check out our blog post: <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>.

Das `pathlib`-Modul wurde in Python 3.4 hinzugefügt und bietet eine objektorientierte Möglichkeit zur Handhabung von Dateisystempfaden.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs OS Modul
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> bietet weitaus mehr Funktionalität als die hier aufgeführten des <code>os</code>-Moduls, wie z. B. das Abrufen des Dateinamens, das Abrufen der Dateierweiterung, das Lesen/Schreiben einer Datei ohne manuelles Öffnen usw. Sehen Sie sich die <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">offizielle Dokumentation</a> an, wenn Sie mehr erfahren möchten.
    <br>
    Für einen detaillierteren Blick auf beide siehe die Seite <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Linux- und Windows-Pfade

Unter Windows werden Pfade mit Backslashes (`\`) als Trennzeichen zwischen Ordnernamen geschrieben. Auf Unix-basierten Betriebssystemen wie macOS, Linux und BSDs wird der Schrägstrich (`/`) als Pfadtrennzeichen verwendet. Das Verknüpfen von Pfaden kann ein Problem sein, wenn Ihr Code auf verschiedenen Plattformen funktionieren muss.

Glücklicherweise bietet uns Python `pathlib.Path.joinpath`, um dies einfach zu handhaben.

```python
from pathlib import Path

# Join path components
print(Path('usr').joinpath('bin').joinpath('spam'))
```

Output:

```plaintext
usr/bin/spam
```

`pathlib` bietet auch eine Abkürzung für joinpath mithilfe des `/`-Operators:

```python
from pathlib import Path

# Use / operator to join paths
print(Path('usr') / 'bin' / 'spam')
```

Output:

```plaintext
usr/bin/spam
```

Das Verknüpfen von Pfaden ist hilfreich, wenn Sie verschiedene Dateipfade unter demselben Verzeichnis erstellen müssen.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# Get user's home directory
home = Path.home()
# Join each filename with home directory
for filename in my_files:
    print(home / filename)
```

Output:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Das aktuelle Arbeitsverzeichnis

```python
from pathlib import Path
from os import chdir

# Get current working directory
print(Path.cwd())
```

Output:

```plaintext
/home/labex/project
```

```python
# Change directory using os module
chdir('/usr/lib/python3.10')
# Verify current directory
print(Path.cwd())
```

Output:

```plaintext
/usr/lib/python3.10
```

## Neue Ordner erstellen

```python
from pathlib import Path
cwd = Path.cwd()
# Create directory (will fail if parent directories don't exist)
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

Der Grund für diesen Fehler ist, dass das Verzeichnis 'delicious' nicht existiert, sodass wir die Verzeichnisse 'walnut' und 'waffles' nicht darunter erstellen können. Um dies zu beheben, tun Sie Folgendes:

```python
from pathlib import Path
cwd = Path.cwd()
# Create directory with all parent directories
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## Absolute vs. Relative Pfade

Es gibt zwei Möglichkeiten, einen Dateipfad anzugeben.

- Ein **absoluter Pfad**, der immer mit dem Stammordner beginnt
- Ein **relativer Pfad**, der relativ zum aktuellen Arbeitsverzeichnis des Programms ist

Es gibt auch die Punkte (`.`) und Punkt-Punkt (`..`) Ordner. Dies sind keine echten Ordner, sondern spezielle Namen, die in einem Pfad verwendet werden können. Ein einzelner Punkt („Punkt“) für einen Ordnernamen ist eine Kurzform für „dieses Verzeichnis“. Zwei Punkte („Punkt-Punkt“) bedeuten „das übergeordnete Verzeichnis“.

### Umgang mit absoluten Pfaden

Um zu sehen, ob ein Pfad ein absoluter Pfad ist:

```python
from pathlib import Path
# Check if path is absolute
Path('/').is_absolute()
```

Output:

```plaintext
True
```

```python
# Relative paths return False
Path('..').is_absolute()
```

Output:

```plaintext
False
```

Sie können auch einen absoluten Pfad extrahieren:

```python
from pathlib import Path
# Get current directory
print(Path.cwd())
```

Output:

```plaintext
/home/labex/project
```

```python
# Resolve relative path to absolute path
print(Path('..').resolve())
```

Output:

```plaintext
/home
```

### Umgang mit relativen Pfaden

Sie können einen relativen Pfad von einem Startpfad zu einem anderen Pfad erhalten.

```python
from pathlib import Path
# Get relative path from base path
print(Path('/etc/passwd').relative_to('/'))
```

Output:

```plaintext
etc/passwd
```

## Pfad- und Dateigültigkeit

### Überprüfen, ob eine Datei/ein Verzeichnis existiert

```python
from pathlib import Path

# Check if path exists
Path('.').exists()
```

Output:

```plaintext
True
```

```python
Path('setup.py').exists()
```

Output:

```plaintext
True
```

```python
Path('/etc').exists()
```

Output:

```plaintext
True
```

```python
Path('nonexistentfile').exists()
```

Output:

```plaintext
False
```

### Überprüfen, ob ein Pfad eine Datei ist

```python
from pathlib import Path

# Check if path is a file
Path('setup.py').is_file()
```

Output:

```plaintext
True
```

```python
Path('/home').is_file()
```

Output:

```plaintext
False
```

```python
Path('nonexistentfile').is_file()
```

Output:

```plaintext
False
```

### Überprüfen, ob ein Pfad ein Verzeichnis ist

```python
from pathlib import Path

# Check if path is a directory
Path('/').is_dir()
```

Output:

```plaintext
True
```

```python
Path('setup.py').is_dir()
```

Output:

```plaintext
False
```

```python
Path('/spam').is_dir()
```

Output:

```plaintext
False
```

## Die Größe einer Datei in Bytes abrufen

```python
from pathlib import Path

# Get file statistics
stat = Path('/bin/python3.10').stat()
print(stat) # stat contains some other information about the file as well
```

Output:

```plaintext
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# Access file size from stat object
print(stat.st_size) # size in bytes
```

Output:

```plaintext
10024
```

## Verzeichnisse auflisten

```python
from pathlib import Path

# Iterate through directory contents
for f in Path('/usr/bin').iterdir():
    print(f)
```

Output:

```plaintext
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
    Verzeichnisse selbst haben auch eine Größe! Sie sollten also mit den Methoden aus den oben genannten Abschnitten überprüfen, ob ein Pfad eine Datei oder ein Verzeichnis ist.
  </base-warning-content>
</base-warning>

```python
from pathlib import Path

# Calculate total size of all files in directory
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

Output:

```plaintext
1903178911
```

## Dateien und Ordner löschen

- Der Aufruf von `Path.unlink()` löscht die Datei am Pfad.

- Der Aufruf von `Path.rmdir()` löscht den Ordner am Pfad. Dieser Ordner muss leer von Dateien oder Ordnern sein.

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Dateien lesen und schreiben</router-link>
- <router-link to="/modules/os-module">Modul: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
