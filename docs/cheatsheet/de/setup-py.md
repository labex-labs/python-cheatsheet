---
title: 'Python Setup.py - Python Spickzettel'
description: 'Das Setup-Skript ist das Zentrum aller Aktivitäten beim Erstellen, Verteilen und Installieren von Modulen mit Distutils. Der Hauptzweck des Setup-Skripts besteht darin, Ihre Modulverteilung für Distutils zu beschreiben, damit die verschiedenen Befehle, die auf Ihre Module angewendet werden, korrekt funktionieren.'
labUrl: 'https://labex.io/de/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setup.py
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    Eine 'umstrittene' Meinung
  </base-warning-title>
  <base-warning-content>
    Die Verwendung von `setup.py` zum Packen und Verteilen Ihrer Python-Pakete kann mitunter sehr herausfordernd sein. Moderne Tools wie <a target="_blank" href="https://python-poetry.org/">Poetry</a> und <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> machen nicht nur das Paketieren **viel einfacher**, sondern helfen Ihnen auch, Ihre Abhängigkeiten sehr bequem zu verwalten. UV ist besonders bemerkenswert, da es 10-100x schneller ist als herkömmliche Tools.
  </base-warning-content>
</base-warning>

Wenn Sie mehr Informationen über Poetry wünschen, können Sie die folgenden Artikel lesen:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python-Projekte mit Poetry und VSCode. Teil 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python-Projekte mit Poetry und VSCode. Teil 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python-Projekte mit Poetry und VSCode. Teil 3</router-link>

Für eine umfassende Anleitung zu UV, dem blitzschnellen Python-Paketmanager, lesen Sie: <router-link to="/blog/python-uv-package-manager">UV: Der blitzschnelle Python-Paketmanager</router-link>.

## Einführung

Das Setup-Skript ist das Zentrum aller Aktivitäten beim Erstellen, Verteilen und Installieren von Modulen mit Distutils. Der Hauptzweck des Setup-Skripts besteht darin, Ihre Modulverteilung gegenüber Distutils zu beschreiben, damit die verschiedenen Befehle, die auf Ihre Module angewendet werden, das Richtige tun.

Für eine umfassende Anleitung zur Handhabung von Datei- und Verzeichnispfaden, was für die Verwaltung von Projektstrukturen unerlässlich ist, siehe die Seite <router-link to="/cheatsheet/file-directory-path">Datei- und Verzeichnispfade</router-link>.

Die Datei `setup.py` steht im Mittelpunkt eines Python-Projekts. Sie beschreibt alle Metadaten über Ihr Projekt. Es gibt einige Felder, die Sie einem Projekt hinzufügen können, um ihm einen reichhaltigen Satz von Metadaten zur Beschreibung des Projekts zu geben. Es gibt jedoch nur drei erforderliche Felder: name, version und packages. Das Feld name muss eindeutig sein, wenn Sie Ihr Paket im Python Package Index (PyPI) veröffentlichen möchten. Das Feld version verfolgt verschiedene Versionen des Projekts. Das Feld packages beschreibt, wo Sie den Python-Quellcode innerhalb Ihres Projekts abgelegt haben.

Dies ermöglicht es Ihnen, Python-Pakete einfach zu installieren. Oft genügt es, Folgendes zu schreiben:

```bash
python setup.py install
```

und das Modul installiert sich selbst.

## Beispiel

Unser anfängliches setup.py wird auch Informationen über die Lizenz enthalten und die Datei README.txt für das Feld long_description wiederverwenden. Dies sieht dann wie folgt aus:

```python
# setup.py: define package metadata for distribution
from distutils.core import setup
setup(
   name='pythonCheatsheet',  # Package name (must be unique on PyPI)
   version='0.1',  # Version number
   packages=['pipenv',],  # List of packages to include
   license='MIT',  # License type
   long_description=open('README.txt').read(),  # Read description from file
)
```

Weitere Informationen finden Sie in der [offiziellen Dokumentation](http://docs.python.org/3.11/install/index.html).

## Relevante Links

- <router-link to="/cheatsheet/virtual-environments">Virtuelle Umgebungen</router-link>
- <router-link to="/cheatsheet/file-directory-path">Datei- und Verzeichnispfade</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: Der blitzschnelle Python-Paketmanager</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python-Projekte mit Poetry und VSCode. Teil 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python-Projekte mit Poetry und VSCode. Teil 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python-Projekte mit Poetry und VSCode. Teil 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
