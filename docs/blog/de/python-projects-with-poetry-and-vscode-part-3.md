---
title: 'Python-Projekte mit Poetry und VSCode Teil 3 - Python Spickzettel'
description: 'Im dritten Teil schreiben wir eine Beispielbibliothek, erstellen unser Projekt mit *Poetry* und veröffentlichen es auf PyPI.'
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python-Projekte mit Poetry und VSCode Teil 3 - Python Spickzettel"
    description: "Im dritten Teil schreiben wir eine Beispielbibliothek, erstellen unser Projekt mit *Poetry* und veröffentlichen es auf PyPI."
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python-Projekte mit Poetry und VSCode Teil 3 - Python Spickzettel" />

Im <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">ersten Artikel</router-link> haben wir ein neues Projekt gestartet, eine virtuelle Umgebung erstellt und Abhängigkeiten verwaltet. Im <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">zweiten Teil</router-link> haben wir unsere virtuelle Umgebung zu [VSCode](https://code.visualstudio.com/) hinzugefügt und unsere Entwicklungsabhängigkeiten integriert.

Und schließlich werden wir in diesem dritten und letzten Teil:

- Eine Beispielbibliothek schreiben.
- Unser Projekt mit _Poetry_ bauen.
- Es auf _PyPI_ veröffentlichen.

## Poetry Befehle

Hier ist eine Tabelle mit den in dieser Reihe verwendeten Befehlen sowie deren Beschreibungen. Für eine vollständige Liste lesen Sie die [Poetry Dokumentation](https://poetry.eustace.io/docs/cli/).

| Befehl                            | Beschreibung                                                    |
| --------------------------------- | --------------------------------------------------------------- |
| `poetry new [package-name]`       | Ein neues Python-Projekt starten.                               |
| `poetry init`                     | Eine _pyproject.toml_-Datei interaktiv erstellen.               |
| `poetry install`                  | Die Pakete in der _pyproject.toml_-Datei installieren.          |
| `poetry add [package-name]`       | Ein Paket zu einer virtuellen Umgebung hinzufügen.              |
| `poetry add -D [package-name]`    | Ein Entwicklungs-Paket zu einer virtuellen Umgebung hinzufügen. |
| `poetry remove [package-name]`    | Ein Paket aus einer virtuellen Umgebung entfernen.              |
| `poetry remove -D [package-name]` | Ein Entwicklungs-Paket aus einer virtuellen Umgebung entfernen. |
| `poetry update`                   | Die neuesten Versionen der Abhängigkeiten abrufen               |
| `poetry shell`                    | Startet eine Shell innerhalb der virtuellen Umgebung.           |
| `poetry build`                    | Baut die Quell- und Wheel-Archive.                              |
| `poetry publish`                  | Das Paket auf PyPI veröffentlichen.                             |
| `poetry publish --build`          | Ein Paket bauen und veröffentlichen.                            |
| `poetry self:update`              | Poetry auf die neueste stabile Version aktualisieren.           |

## Das Projekt

Sie können den Quellcode von [GitHub](https://github.com/wilfredinni/how-long) herunterladen, wenn Sie möchten, aber wie bereits erwähnt, wird dies ein einfacher Decorator sein, der die Laufzeit einer Funktion in der Konsole ausgibt.

Es wird wie folgt funktionieren:

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

Und das Projektverzeichnis wird wie folgt aussehen:

```
how-long
├── how_long
│   ├── how_long.py
│   └── __init__.py
├── how_long.egg-info
│   ├── dependency_links.txt
│   ├── PKG-INFO
│   ├── requires.txt
│   ├── SOURCES.txt
│   └── top_level.txt
├── LICENSE
├── poetry.lock
├── pyproject.toml
├── README.rst
└── tests
    ├── __init__.py
    └── test_how_long.py
```

Bevor wir beginnen, überprüfen Sie die Paketaktualisierungen mit dem Befehl `poetry update`:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

Fügen Sie eine kurze Beschreibung für das Projekt in die `README.rst` ein:

```
how_long
========

Einfacher Decorator zur Messung der Ausführungszeit einer Funktion.

Beispiel
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
```

Navigieren Sie zu `how_long/how_long.py`:

```python
# how_long.py
from functools import wraps

import pendulum


def timer(function):
    """
    Einfacher Decorator zur Messung der Ausführungszeit einer Funktion.
    """

    @wraps(function)
    def function_wrapper():
        start = pendulum.now()
        function()
        elapsed_time = pendulum.now() - start
        print(f"Execution Time: {elapsed_time.microseconds} ms.")

    return function_wrapper
```

In `how_long/__init__.py`:

```python
from .how_long import timer

__version__ = "0.1.1"
```

Und schließlich die Datei `tests/test_how_long.py`:

```python
from how_long import __version__
from how_long import timer


def test_version():
    assert __version__ == "0.1.1"


def test_wrap():
    @timer
    def wrapped_function():
        return

    assert wrapped_function.__name__ == "wrapped_function"
```

Sie können nun `poetry install` in Ihrem Terminal ausführen, um Ihr Paket lokal zu installieren und zu testen. Aktivieren Sie Ihre virtuelle Umgebung, falls noch nicht geschehen, und in der interaktiven Python-Shell:

```python
>>> from how_long import timer
>>>
>>> @timer
... def test_function():
...     [i for i in range(10000)]
...
>>> test_function()
Execution Time: 705 ms.
```

[Führen Sie die Tests aus](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest) und wenn alles in Ordnung ist, fahren Sie fort.

## Bauen und Veröffentlichen

Endlich ist es soweit, dieses Projekt der Welt zugänglich zu machen! Stellen Sie sicher, dass Sie ein Konto auf [PyPI](https://pypi.org) haben. Denken Sie daran, dass der Paketname eindeutig sein muss. Wenn Sie unsicher sind, nutzen Sie die [Suche](https://pypi.org/search/?q=), um dies zu überprüfen.

### Bauen

Der Befehl `poetry build` erstellt die Quell- und [Wheels](https://pythonwheels.com/)-Archive, die später als Quelle des Projekts hochgeladen werden:

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

Das Verzeichnis _how_long.egg-info_ wird erstellt.

### Veröffentlichen

Dieser Befehl veröffentlicht das Paket auf _PyPI_ und registriert es automatisch, bevor es hochgeladen wird, falls es zum ersten Mal eingereicht wird:

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> Sie können Ihr Projekt auch mit `$ poetry publish --build` bauen und veröffentlichen.

Geben Sie Ihre Anmeldeinformationen ein, und wenn alles in Ordnung ist, [durchsuchen Sie](https://pypi.org/project/how-long/) Ihr Projekt, und Sie werden so etwas sehen:

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

Wir können nun andere wissen lassen, dass sie `pip install how-long` von jedem beliebigen Rechner überall installieren können!

## Fazit

Ich erinnere mich an das erste Mal, als ich versuchte, ein Paket zu veröffentlichen, und es war ein Albtraum. Ich fing gerade erst mit Python an und musste "ein paar Stunden" damit verbringen, zu verstehen, was die Datei `setup.py` ist und wie man sie benutzt. Am Ende hatte ich mehrere Dateien: eine `Makefile`, eine `MANIFEST.in`, eine `requirements.txt` und eine `test_requirements.txt`. Deshalb ergaben die Worte von [Sébastien Eustace](https://github.com/sdispater), dem Schöpfer von [Poetry](https://github.com/sdispater/poetry), für mich viel Sinn:

> Packaging und Abhängigkeitsmanagement in Python sind für Neulinge ziemlich kompliziert und schwer zu verstehen. Selbst für erfahrene Entwickler kann es manchmal mühsam sein, alle benötigten Dateien in einem Python-Projekt zu erstellen: `setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in` und die neu hinzugefügte `Pipfile`.
>
> Ich wollte also ein Werkzeug, das alles auf eine einzige Konfigurationsdatei beschränkt, um Folgendes zu tun: Abhängigkeitsmanagement, Paketierung und Veröffentlichung.
>
> Es nimmt Inspiration von Werkzeugen, die in anderen Sprachen existieren, wie `composer` (PHP) oder `cargo` (Rust).
>
> Und schließlich gibt es kein zuverlässiges Werkzeug, um Abhängigkeiten in Python richtig aufzulösen, also habe ich `poetry` gestartet, um der Python-Community einen umfassenden Abhängigkeitsauflöser zu bringen.

Poetry ist [keineswegs perfekt](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry), aber im Gegensatz zu anderen Tools hält es, was es verspricht.
