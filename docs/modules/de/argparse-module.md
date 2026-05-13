---
title: "Python Argparse Modul - Python Spickzettel"
description: "Das `argparse`-Modul hilft dir, Kommandozeilenschnittstellen mit Positionsargumenten, Optionen, Flags und Hilfetexten aufzubauen."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Argparse Modul
</base-title>

Das `argparse`-Modul hilft dir, Kommandozeilenschnittstellen mit Positionsargumenten, Optionen, Flags und Hilfetexten aufzubauen.

Das Modul wurde in Python 3.2 hinzugefügt. Wenn du Python 3.14 verwendest, unterstützt `ArgumentParser` außerdem die Parameter `suggest_on_error` und `color`.

```python
import argparse
```

Verwende `argparse`, wenn sich eine Python-Datei wie ein kleines Terminalprogramm verhalten soll:

```bash
python greet.py Ada --count 2
```

Das Modul liest den Text nach dem Skriptnamen, validiert ihn und liefert dir ein Python-Objekt mit den geparsten Werten.

## Einen Parser erstellen

`ArgumentParser` speichert die Argumente, die dein Programm akzeptiert.

```python
import argparse

parser = argparse.ArgumentParser(
    prog='greet',
    description='Greet a user from the command line',
)

parser.print_help()
```

```output
usage: greet [-h]

Greet a user from the command line

options:
  -h, --help  show this help message and exit
```

## Positionsargumente

Positionsargumente sind standardmäßig erforderlich.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')

args = parser.parse_args(['Ada'])
print(args.name)
```

```output
Ada
```

## Optionale Argumente und Flags

Optionale Argumente beginnen meist mit `-` oder `--`.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--count', type=int, default=1)
parser.add_argument('-v', '--verbose', action='store_true')

args = parser.parse_args(['--count', '3', '--verbose'])
print(args.count)
print(args.verbose)
```

```output
3
True
```

## Auswahlwerte und Typumwandlung

Du kannst Werte bereits beim Parsen validieren.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--mode', choices=['dev', 'prod'])
parser.add_argument('--port', type=int, default=8000)

args = parser.parse_args(['--mode', 'dev', '--port', '9000'])
print(args.mode)
print(args.port)
```

```output
dev
9000
```

## Unterbefehle

Unterbefehle sind nützlich für Werkzeuge wie `git commit` oder `docker run`.

```python
import argparse

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command', required=True)

build_parser = subparsers.add_parser('build')
build_parser.add_argument('--release', action='store_true')

args = parser.parse_args(['build', '--release'])
print(args.command)
print(args.release)
```

```output
build
True
```

## Ein kleines vollständiges Beispiel

Dieses Beispiel nimmt einen Namen entgegen und wiederholt die Begrüßung.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')
parser.add_argument('--count', type=int, default=1)

args = parser.parse_args(['Ada', '--count', '2'])

for _ in range(args.count):
    print(f'Hello {args.name}!')
```

```output
Hello Ada!
Hello Ada!
```

## Relevante Links

- <router-link to="/modules/sys-module">Modul: sys</router-link>
- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen</router-link>
- <router-link to="/cheatsheet/control-flow">Spickzettel: Kontrollfluss</router-link>
