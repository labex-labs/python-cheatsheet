---
title: 'Python-Projekte mit Poetry und VSCode Teil 2 - Python Spickzettel'
description: 'In diesem zweiten Teil binden wir unsere virtuelle Umgebung in VSCode ein, aktualisieren Abhängigkeiten und integrieren Flake8, Black und Pytest im Editor.'
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python-Projekte mit Poetry und VSCode Teil 2 - Python Spickzettel"
    description: "In diesem zweiten Teil binden wir unsere virtuelle Umgebung in VSCode ein, aktualisieren Abhängigkeiten und integrieren Flake8, Black und Pytest im Editor."
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python-Projekte mit Poetry und VSCode Teil 2 - Python Spickzettel" />

Im <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">ersten Artikel</router-link> haben wir gelernt, was die Datei `pyproject.toml` ist und wie man damit arbeitet, [Poetry](https://poetry.eustace.io/) verwendet, um ein neues Projekt zu starten, eine virtuelle Umgebung zu erstellen und Abhängigkeiten hinzuzufügen und zu entfernen. All dies mit den folgenden Befehlen:

| Befehl                            | Beschreibung                                                    |
| :-------------------------------- | :-------------------------------------------------------------- |
| `poetry new [package-name]`       | Startet ein neues Python-Projekt.                               |
| `poetry init`                     | Erstellt interaktiv eine _pyproject.toml_-Datei.                |
| `poetry install`                  | Installiert die Pakete in der _pyproject.toml_-Datei.           |
| `poetry add [package-name]`       | Fügt ein Paket zu einer virtuellen Umgebung hinzu.              |
| `poetry add -D [package-name]`    | Fügt ein Entwicklungs-Paket zu einer virtuellen Umgebung hinzu. |
| `poetry remove [package-name]`    | Entfernt ein Paket aus einer virtuellen Umgebung.               |
| `poetry remove -D [package-name]` | Entfernt ein Entwicklungs-Paket aus einer virtuellen Umgebung.  |

In diesem zweiten Teil werden wir:

- Unsere virtuelle Umgebung zu [VSCode](https://code.visualstudio.com/) hinzufügen.
- Unsere Abhängigkeiten aktualisieren.
- Unsere Entwicklungsabhängigkeiten mit dem Editor integrieren:
  - _Flake8_
  - _Black_
  - _Pytest_

Und in einem <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">dritten Artikel</router-link> werden wir eine Beispielbibliothek schreiben, unser Projekt mit _Poetry_ erstellen und es auf _PyPI_ veröffentlichen.

Bevor wir beginnen, stellen Sie sicher, dass Sie [VSCode](https://code.visualstudio.com/) installiert haben, die [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python)-Erweiterung hinzugefügt haben und den Anweisungen des <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">ersten Artikels</router-link> dieser Serie gefolgt sind und diese verstanden haben.

## Poetry unter VSCode einrichten

Einige Tage sind seit dem ersten Teil vergangen, daher kann es eine gute Idee sein, nach neuen Versionen unserer Abhängigkeiten zu suchen. Öffnen Sie Ihr Terminal, navigieren Sie in Ihr Projektverzeichnis und geben Sie den Befehl `poetry update` ein:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

Bisher sind keine neuen Versionen verfügbar.

Wenn Sie eine virtuelle Umgebung mit dem _venv_-Befehl erstellen, wird _VSCode_ diese automatisch als Standard-Python-Umgebung für dieses Projekt festlegen. Wenn Sie mit _Poetry_ arbeiten, müssen wir beim ersten Mal im Terminal und im Projektordner Folgendes eingeben:

```bash
poetry shell
code .
```

Der erste Befehl, `poetry shell`, versetzt uns in unsere virtuelle Umgebung, und `code .` öffnet den aktuellen Ordner in _VSCode_.

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

Öffnen Sie den Ordner **how-long** (oder den mit Ihrem Projektnamen) über die linke Leiste und erstellen Sie neben `__init__.py` eine Datei namens `how-long.py`. Unten links sehen Sie die aktuelle Python-Umgebung:

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

Klicken Sie darauf, und eine Liste der verfügbaren Umgebungen wird angezeigt. Wählen Sie diejenige aus, die den Namen Ihres Projekts enthält:

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

Nun integrieren wir unsere Entwicklungsabhängigkeiten, _Flake8_, _Black_ und _Pytest_, in Visual Studio Code.

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/) stattet unsere Projekte mit _Linting_-Funktionen aus. Mit anderen Worten, es warnt vor Syntax- und Stilfehlern, und dank VSCode wissen wir davon, während wir tippen.

Standardmäßig wird die Python-Erweiterung mit _Pylint_ aktiviert, was leistungsstark, aber komplex zu konfigurieren ist. Um auf _Flake8_ umzuschalten, nehmen Sie eine Änderung an einer beliebigen Python-Datei vor und speichern Sie sie. Unten rechts wird eine Popup-Meldung angezeigt:

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

Klicken Sie auf **Select Linter** und wählen Sie **Flake8** aus der Liste. Nun teilt uns _VSCode_ unsere _Syntax_- und _Stilprobleme_ mit, in Grün oder Rot je nach Schweregrad, immer mit einer schönen Beschreibung dessen, was falsch ist:

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

Es scheint, dass wir zwei Probleme haben: Uns fehlt eine Leerzeile am Ende unserer Datei (Stil) und wir haben vergessen, Anführungszeichen zu unserem _Hello, World!_-String hinzuzufügen (Syntax). Beheben Sie diese und beobachten Sie, wie alle Warnungen verschwinden.

## Black

[Black](https://github.com/ambv/black) ist ein Code-Formatierer, ein Werkzeug, das unseren Code überprüft und ihn automatisch gemäß dem [PEP 8](https://www.python.org/dev/peps/pep-0008/)-Styleguide formatiert, demselben _PEP_, den _Flake8_ verwendet, um unsere Stilfehler zu überprüfen.

Halten Sie `shift + cmd/ctrl + p` gedrückt, um die Befehlspalette zu öffnen, geben Sie **Format Document** ein und drücken Sie Enter. Eine neue Popup-Meldung wird angezeigt:

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

Wählen Sie **Use Black**. Kopieren Sie nun diesen schlecht formatierten Code in Ihre Python-Datei:

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

Was für ein hässliches Stück S\*\*\*... Code. Versuchen Sie erneut, ihn zu formatieren, und sehen Sie, wie _Black_ alle Fehler für Sie behebt!

Eine weitere Möglichkeit besteht darin, VSCode so zu konfigurieren, dass _Black_ unseren Code jedes Mal automatisch formatiert, wenn wir speichern. Halten Sie `cmd/ctrl + ,` gedrückt, um die Einstellungen zu öffnen. Stellen Sie sicher, dass Sie sich in den **Workspace Settings** befinden, suchen Sie nach **Format On Save** und aktivieren Sie das Kontrollkästchen:

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

Schließlich verwendet _Black_ standardmäßig 88 Zeichen pro Zeile, im Gegensatz zu den 80, die von _Flake8_ erlaubt sind. Um Konflikte zu vermeiden, öffnen Sie den Ordner **.vscode** und fügen Sie am Ende der Datei **settings.json** Folgendes hinzu:

```json
{
    ...
    "python.linting.flake8Args": [
        "--max-line-length=88"
    ],
}
```

![black-settings](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/black-settings.png)

## Pytest

Wenn Sie es ernst mit der Programmierung meinen, ist es entscheidend, dass Sie lernen, wie Sie Ihre Projekte testen. Es ist eine unglaublich nützliche Fähigkeit, die es Ihnen ermöglicht, Programme mit Zuversicht zu schreiben und auszuliefern, indem die Möglichkeit katastrophaler Fehler nach der Auslieferung reduziert wird.

[Pytest](https://docs.pytest.org/en/latest/) ist ein sehr beliebtes und benutzerfreundliches Framework zum Schreiben von Tests. Wir [haben es bereits installiert](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management), also werden wir es auch mit _VSCode_ integrieren.

Öffnen Sie den Ordner **tests** und wählen Sie die Datei `test_how_long.py`. _Poetry_ liefert uns bereits unseren ersten Test:

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

In diesem Test importieren wir die Variable `__version__` aus der Datei `__init__.py`, die sich im Ordner **how_long** befindet, und stellen sicher, dass die aktuelle Version _0.1.0_ ist. Öffnen Sie das integrierte Terminal, indem Sie zu **Terminal > New Terminal** gehen, und geben Sie ein:

```bash
pytest
```

Die Ausgabe wird wie folgt aussehen:

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

Ok, alles ist in Ordnung. Öffnen Sie Ihre Befehlspalette mit `shift + cmd/ctrl + p`:

- Schreiben Sie **unit** und wählen Sie **Python: Configure Unit Tests**.
- Wählen Sie **pytest**.
- Wählen Sie das Verzeichnis aus, in dem Sie die Tests gespeichert haben, in unserem Fall **tests**.

Drei Dinge sind passiert:

- Eine neue Schaltfläche ist in der Statusleiste erschienen: **Run Tests**. Dies entspricht der Eingabe von _pytest_ im Terminal. Drücken Sie darauf und wählen Sie **Run All Unit Tests**. Nach Abschluss informiert es Sie über die Anzahl der bestandenen und nicht bestandenen Tests:

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- Ein neues Symbol in der linken Leiste. Wenn Sie darauf klicken, wird ein Fenster angezeigt, das alle Tests auflistet. Hier können Sie jeden einzeln ausführen:

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- Innerhalb der Testdatei werden vor jeder Testfunktion neue Optionen angezeigt: Ein Häkchensymbol erscheint, wenn es in Ordnung ist, und ein _x_, wenn nicht. Es ermöglicht Ihnen auch, bestimmte Tests auszuführen:

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## Fazit

Bisher haben wir:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Ein neues Projekt gestartet</router-link>, eine virtuelle Umgebung erstellt und Abhängigkeiten hinzugefügt, gelöscht und aktualisiert.
- Unsere [virtuelle Umgebung zu VSCode hinzugefügt](#setting-up-poetry-on-vscode), [_Flake8_](#flake8) konfiguriert, um unseren Code beim Tippen zu _linten_, [_Black_](#black) als Formatierer ausgewählt und [_Pytest_](#pytest) integriert, um unsere Tests visuell auszuführen.

Schließlich werden wir im <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">dritten und letzten Artikel</router-link>:

- Eine Beispielbibliothek schreiben.
- Unser Projekt mit _Poetry_ erstellen.
- Es auf _PyPI_ veröffentlichen.
