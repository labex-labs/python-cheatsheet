---
title: 'Python JSON und YAML - Python Spickzettel'
description: 'JSON (JavaScript Object Notation) ist ein leichtgewichtiges Format zur Speicherung und Übertragung von Daten. JSON wird häufig verwendet, wenn Daten von einem Server an eine Webseite gesendet werden.'
labUrl: 'https://labex.io/de/labs/python-python-json-and-yaml-633659?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON und YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON steht für JavaScript Object Notation und ist ein leichtgewichtiges Format zum Speichern und Übertragen von Daten. JSON wird häufig verwendet, wenn Daten von einem Server an eine Webseite gesendet werden.

```python
# JSON-Datei lesen: json.load() analysiert JSON aus einem Datei-Objekt
import json
with open("filename.json", "r") as f:  # Datei im Lesemodus öffnen
    content = json.load(f)  # JSON analysieren und Python dict/list zurückgeben
```

Eine JSON-Datei schreiben mit:

```python
# JSON-Datei schreiben: json.dump() schreibt Python-Objekt als JSON
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # Datei im Schreibmodus öffnen
    json.dump(content, f, indent=2)  # JSON mit 2-Leerzeichen-Einrückung schreiben
```

## YAML

Im Vergleich zu JSON ermöglicht YAML eine wesentlich bessere menschliche Wartbarkeit und bietet die Möglichkeit, Kommentare hinzuzufügen. Es ist eine praktische Wahl für Konfigurationsdateien, die von einem Menschen bearbeitet werden müssen.

Es gibt zwei Hauptbibliotheken, die den Zugriff auf YAML-Dateien ermöglichen:

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Installieren Sie diese mit `pip install` in Ihrer virtuellen Umgebung.

Die erste ist einfacher zu bedienen, aber die zweite, Ruamel, implementiert die YAML-Spezifikation wesentlich besser und erlaubt es beispielsweise, einen YAML-Inhalt zu ändern, ohne Kommentare zu verändern.

Eine YAML-Datei öffnen mit:

```python
# YAML-Datei mit der Bibliothek ruamel.yaml lesen
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # YAML-Parser-Instanz erstellen
    yaml.load(f)  # YAML analysieren und Python dict/list zurückgeben
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) ist ein sehr nützliches Paket, das es ermöglicht, das zugrunde liegende Konfigurationsdateiformat vollständig zu abstrahieren. Es erlaubt das Laden eines Python-Wörterbuchs aus JSON, YAML, TOML und Ähnlichem.

Installieren Sie es mit:

```bash
pip install anyconfig
```

Verwendung:

```python
# anyconfig: Konfigurationsdateien in verschiedenen Formaten laden (JSON, YAML, TOML, etc.)
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # Format wird automatisch erkannt
```

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Dateien lesen und schreiben</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/modules/json-module">Das json Modul</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 wesentliche Dateisystemoperationen, die jeder Entwickler kennen sollte</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
