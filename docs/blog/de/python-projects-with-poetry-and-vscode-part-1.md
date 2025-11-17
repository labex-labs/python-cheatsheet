---
title: 'Python-Projekte mit Poetry und VSCode Teil 1 - Python Spickzettel'
description: 'Wir verwenden Poetry, um ein einfaches Projekt zu starten, Abhängigkeiten zu verwalten und es auf PyPI zu veröffentlichen. Außerdem integrieren wir Pytest, Black und Flake8 direkt aus einer virtuellen Umgebung in VSCode.'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python-Projekte mit Poetry und VSCode Teil 1 - Python Spickzettel"
    description: "Wir verwenden Poetry, um ein einfaches Projekt zu starten, Abhängigkeiten zu verwalten und es auf PyPI zu veröffentlichen. Außerdem integrieren wir Pytest, Black und Flake8 direkt aus einer virtuellen Umgebung in VSCode."
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python-Projekte mit Poetry und VSCode Teil 1 - Python Spickzettel" />

Eine virtuelle Umgebung ist eine isolierte Python-Installation, die dazu dient, unsere Basisinstallation nicht mit Bibliotheken zu füllen, die wir möglicherweise nur für ein einziges Projekt verwenden. Sie ermöglicht es uns auch, mehrere Versionen desselben Pakets in verschiedenen Projekten zu verwalten. Wir könnten zum Beispiel Django 4.1 für das eine und 1.9 für das andere benötigen.

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry ist ein Werkzeug zur Verwaltung der Abhängigkeitsinstallation sowie zum Bauen und Verpacken von Python-Paketen. Es benötigt nur eine Datei, um all dies zu erledigen: die neue, <a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">standardisierte</a> <code>pyproject.toml</code>`. Mit anderen Worten, Poetry verwendet <code>pyproject.toml</code>, um <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> und die neu hinzugefügte <code>Pipfile</code> zu ersetzen.
  </base-disclaimer-content>
</base-disclaimer>

In dieser Artikelserie werden wir [Poetry](https://poetry.eustace.io/) verwenden, um unsere Abhängigkeiten zu verwalten, ein einfaches Projekt zu erstellen und es mit einem einzigen Befehl auf [PyPI](https://pypi.org/) zu veröffentlichen.

In diesem ersten Teil werden wir:

- Ein neues Projekt starten.
- Eine virtuelle Umgebung erstellen.
- Abhängigkeiten verwalten.

Im <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">zweiten Artikel</router-link> werden wir:

- Unsere virtuelle Umgebung zu [VSCode](https://code.visualstudio.com/) hinzufügen.
- Unsere Entwicklungsabhängigkeiten integrieren:
  - _Flake8_
  - _Black_
  - _Pytest_

Und schließlich werden wir in einem <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">dritten Artikel</router-link>:

- Eine Beispielbibliothek schreiben.
- Unser Projekt mit _Poetry_ erstellen.
- Es auf _PyPI_ veröffentlichen.

## Poetry installieren

Der einfachste Weg ist die Verwendung von _pip_:

```bash
pip install poetry
```

Wir werden jedoch den eigenen Installer von Poetry verwenden, um es vom Rest des Systems zu isolieren, indem wir seine Abhängigkeiten bündeln. Dies ist die empfohlene Methode zur Installation von Poetry:

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

Auf diese Weise können wir Poetry später mit dem Befehl `poetry self update` auf die neueste stabile Version aktualisieren.

## Ein neues Projekt starten

Wir können nun ein neues Python-Projekt mit dem Befehl `poetry new [projektname]` starten. Ich werde es **_how-long_** nennen, und es wird eine einfache Bibliothek sein, um die Ausführungszeit einer Funktion zu messen:

```bash
poetry new how-long
```

> Hinweis: Für bestehende Projekte können Sie den Befehl `poetry init` verwenden, um interaktiv eine _pyproject.toml_ zu erstellen.

Das Verzeichnis _how-long_ wird erstellt und enthält eine grundlegende Projektstruktur:

```
how-long
├── README.rst
├── how_long
│   └── __init__.py
├── pyproject.toml
└── tests
    ├── __init__.py
    └── test_how_long.py
```

Eine umfassende Anleitung zur Handhabung von Datei- und Verzeichnispfaden, die für die Verwaltung von Projektstrukturen unerlässlich ist, finden Sie auf der Seite <router-link to="/cheatsheet/file-directory-path">Datei- und Verzeichnispfade</router-link>.

> Hinweis: Um Ihr Projekt veröffentlichen zu können, benötigen Sie einen verfügbaren Namen. Verwenden Sie die [PyPI](https://pypi.org/)-Suche dafür.

### Die pyproject.toml Datei

Die Datei **pyproject.toml** verwaltet die Details und Abhängigkeiten des Projekts:

```
[tool.poetry]
name = "how-long"
version = "0.1.0"
description = "A simple decorator to measure a function execution time."
authors = ["wilfredinni <carlos.w.montecinos@gmail.com>"]

[tool.poetry.dependencies]
python = "^3.7"

[tool.poetry.dev-dependencies]
pytest = "^3.0"

[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.masonry.api"
```

#### [tool.poetry]

Die Details. Das Hinzufügen einer [Lizenz](https://poetry.eustace.io/docs/pyproject/#license) und einer [README](https://poetry.eustace.io/docs/pyproject/#readme) könnte eine gute Idee sein:

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

Zuerst die Python-Version. Im Grunde wird dieses Projekt mit Python 3.7 und höher kompatibel sein. Darüber hinaus wird jedes Paket, das wir von nun an installieren und das in der Produktion verwendet werden soll, hier aufgeführt.

#### [tool.poetry.dev-dependencies]

Diese Pakete sind nur für die Entwicklung bestimmt und werden nicht enthalten sein, wenn wir unser Projekt veröffentlichen. Standardmäßig fügt Poetry [Pytest](https://docs.pytest.org/en/latest/) hinzu, also werden wir es verwenden, um unser Projekt später zu testen.

## Eine virtuelle Umgebung erstellen

Um eine virtuelle Umgebung zu erstellen und _Pytest_ zu installieren, verwenden wir den Befehl `poetry install`:

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

Danach wird eine neue Datei, `poetry.lock`, erstellt.

> Wenn Poetry die Installation abgeschlossen hat, schreibt es alle Pakete und die genauen Versionen, die es heruntergeladen hat, in die poetry.lock-Datei und sperrt das Projekt auf diese spezifischen Versionen. Sie sollten die poetry.lock-Datei in Ihr Projekt-Repo einchecken, damit alle, die am Projekt arbeiten, auf dieselben Versionen der Abhängigkeiten festgelegt sind.

## Abhängigkeitsverwaltung

Eine Möglichkeit, Abhängigkeiten hinzuzufügen oder zu entfernen, besteht darin, _pyproject.toml_ direkt zu bearbeiten und dann `poetry install` auszuführen, um die Änderungen zu übernehmen. Wir werden stattdessen die Befehle `add` und `remove` verwenden, um manuelle Änderungen zu vermeiden.

### Abhängigkeiten hinzufügen

Fügen wir dem Projekt zwei Pakete hinzu, _pendulum_ und _coo_:

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

Öffnen Sie _pyproject.toml_ und _poetry.lock_ und sehen Sie, wie sie aktualisiert wurden.

### Entwicklungsabhängigkeiten hinzufügen

Diese Abhängigkeiten sind nur während der Entwicklung verfügbar; Poetry wird sie beim Erstellen und Veröffentlichen des Projekts nicht einschließen.

Wir haben _Pytest_ bereits installiert, aber wir werden auch [flake8](http://flake8.pycqa.org/en/latest/) für Linting und [mypy](http://mypy-lang.org/) für statische Typisierung verwenden:

```bash
poetry add -D flake8 mypy
```

Jetzt, wo ich darüber nachdenke, habe ich vergessen, einen Formatter hinzuzufügen. Wir nehmen [black](https://black.readthedocs.io/en/stable/):

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

Dieser Fehler tritt auf, weil _black_ sich in einem Vorabversionszustand befindet, sodass Poetry keine stabile Version für uns finden kann. Aber ich möchte es wirklich, also installieren wir es trotzdem mit dem Flag `--allow-prereleases`:

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### Abhängigkeiten entfernen

Wissen Sie was, ich habe meine Meinung geändert, dieses Projekt wird weder _coo_ noch _mypy_ verwenden. Beginnen wir damit, _coo_ zu entfernen, eine normale Abhängigkeit unseres Projekts:

```bash
poetry remove coo
```

Nun _mypy_, was eine Entwicklungsabhängigkeit ist:

```bash
poetry remove -D mypy
```

## Fazit

In diesem ersten Teil haben wir ein neues Projekt gestartet, eine virtuelle Umgebung erstellt und Abhängigkeiten hinzugefügt und entfernt, indem wir die folgenden Befehle verwendet haben:

| Befehl                         | Beschreibung                                                    |
| :----------------------------- | :-------------------------------------------------------------- |
| `poetry new [paketname]`       | Ein neues Python-Projekt starten.                               |
| `poetry init`                  | Interaktiv eine _pyproject.toml_-Datei erstellen.               |
| `poetry install`               | Die Pakete in der _pyproject.toml_-Datei installieren.          |
| `poetry add [paketname]`       | Ein Paket zu einer virtuellen Umgebung hinzufügen.              |
| `poetry add -D [paketname]`    | Ein Entwicklungs-Paket zu einer virtuellen Umgebung hinzufügen. |
| `poetry remove [paketname]`    | Ein Paket aus einer virtuellen Umgebung entfernen.              |
| `poetry remove -D [paketname]` | Ein Entwicklungs-Paket aus einer virtuellen Umgebung entfernen. |
| `poetry self:update`           | Poetry auf die neueste stabile Version aktualisieren.           |

In einem <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">zweiten Artikel</router-link> werden wir weitere _Poetry_-Befehle sehen, unsere virtuelle Umgebung zu _VSCode_ hinzufügen und die installierten Entwicklungspakete verwenden, um unseren Code im Editor zu linten (Flake8), zu formatieren (Black) und zu testen (Pytest). Schließlich werden wir in einem dritten einen Beispielbibliothek schreiben und auf _PyPI_ veröffentlichen.

Irgendwelche Zweifel oder Vorschläge? Bitte hinterlassen Sie einen Kommentar.
