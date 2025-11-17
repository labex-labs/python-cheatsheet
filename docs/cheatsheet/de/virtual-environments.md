---
title: 'Python Virtuelle Umgebungen - Python Spickzettel'
description: 'Virtuelle Umgebungen dienen dazu, Python-Code in gekapselten Umgebungen zu testen und die Basis-Python-Installation frei von Bibliotheken zu halten, die nur für ein einzelnes Projekt benötigt werden.'
labUrl: 'https://labex.io/de/labs/python-python-virtual-environments-633669?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Virtuelle Umgebung
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Die Verwendung einer virtuellen Umgebung dient dazu, Python-Code in gekapselten Umgebungen zu testen und zu vermeiden, dass die Basis-Python-Installation mit Bibliotheken gefüllt wird, die wir möglicherweise nur für ein einziges Projekt verwenden.

## virtualenv

1. Installieren Sie virtualenv

```bash
pip install virtualenv
```

1. Installieren Sie virtualenvwrapper-win (Windows)

```bash
pip install virtualenvwrapper-win
```

Verwendung:

1. Erstellen Sie eine virtuelle Umgebung namens `HelloWorld`

```bash
mkvirtualenv HelloWorld
```

    Alles, was wir jetzt installieren, ist spezifisch für dieses Projekt. Und für die Projekte verfügbar, die wir mit dieser Umgebung verbinden.

1. Projektverzeichnis festlegen

   Um unsere virtuelle Umgebung mit unserem aktuellen Arbeitsverzeichnis zu verknüpfen, geben wir einfach Folgendes ein:

```bash
setprojectdir .
```

1. Deaktivieren

   Um zu etwas anderem in der Kommandozeile überzugehen, geben Sie `deactivate` ein, um Ihre Umgebung zu deaktivieren.

```bash
deactivate
```

    Beachten Sie, wie die Klammern verschwinden.

1. Arbeiten mit (Workon)

   Öffnen Sie die Eingabeaufforderung und geben Sie `workon HelloWorld` ein, um die Umgebung zu aktivieren und in Ihren Stammprojektordner zu wechseln

```bash
workon HelloWorld
```

## Poetry

<base-disclaimer>
  <base-disclaimer-title>
    Von der <a href="https://python-poetry.org/">Poetry-Website</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry ist ein Werkzeug zur Abhängigkeitsverwaltung und Paketierung in Python. Es ermöglicht Ihnen, die Bibliotheken zu deklarieren, von denen Ihr Projekt abhängt, und es wird diese für Sie verwalten (installieren/aktualisieren).
  </base-disclaimer-content>
</base-disclaimer>

1. Poetry installieren

```bash
pip install --user poetry
```

2. Ein neues Projekt erstellen

```bash
poetry new my-project
```

    Dies erstellt ein my-project-Verzeichnis:

```plaintext
my-project
├── pyproject.toml
├── README.rst
├── poetry_demo
│   └── __init__.py
└── tests
    ├── __init__.py
    └── test_poetry_demo.py
```

    Die Datei pyproject.toml orchestriert Ihr Projekt und seine Abhängigkeiten:

```toml
[tool.poetry]
name = "my-project"
version = "0.1.0"
description = ""
authors = ["your name <your@mail.com>"]

[tool.poetry.dependencies]
python = "*"

[tool.poetry.dev-dependencies]
pytest = "^3.4"
```

3. Pakete

   Um Abhängigkeiten zu Ihrem Projekt hinzuzufügen, können Sie diese im Abschnitt tool.poetry.dependencies angeben:

```toml
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    Anstatt die Datei pyproject.toml manuell zu bearbeiten, können Sie auch den Befehl `add` verwenden, und er findet automatisch eine geeignete Versionsbeschränkung.

```bash
poetry add pendulum
```

    Um die in pyproject.toml aufgeführten Abhängigkeiten zu installieren:

```bash
poetry install
```

    Um Abhängigkeiten zu entfernen:

```bash
poetry remove pendulum
```

Weitere Informationen finden Sie in der [Dokumentation](https://poetry.eustace.io/docs/) oder lesen Sie hier:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python-Projekte mit Poetry und VSCode. Teil 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python-Projekte mit Poetry und VSCode. Teil 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python-Projekte mit Poetry und VSCode. Teil 3</router-link>

## Pipenv

<base-disclaimer>
  <base-disclaimer-title>
    Von der <a target="_blank" href="https://pipenv.pypa.io/en/latest/">Pipenv-Website</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Pipenv ist ein Werkzeug, das darauf abzielt, das Beste aus allen Paketierungs-Welten (bundler, composer, npm, cargo, yarn, etc.) in die Python-Welt zu bringen. Windows ist in unserer Welt ein erstklassiger Bürger.
  </base-disclaimer-content>
</base-disclaimer>

1. Pipenv installieren

```bash
pip install pipenv
```

2. Wechseln Sie in Ihr Projektverzeichnis und installieren Sie die Pakete für Ihr Projekt

```bash
cd my_project
pipenv install <package>
```

    Pipenv installiert Ihr Paket und erstellt eine Pipfile in Ihrem Projektverzeichnis. Die Pipfile wird verwendet, um zu verfolgen, welche Abhängigkeiten Ihr Projekt benötigt, falls Sie sie neu installieren müssen.

3. Pakete deinstallieren

```bash
pipenv uninstall <package>
```

4. Die virtuelle Umgebung aktivieren, die mit Ihrem Python-Projekt verknüpft ist

```bash
pipenv shell
```

5. Die virtuelle Umgebung verlassen

```bash
exit
```

Weitere Informationen und ein Video finden Sie unter [docs.pipenv.org](https://docs.pipenv.org/).

## Anaconda

<base-disclaimer>
  <base-disclaimer-title>
    <a target="k" href="https://anaconda.com/">Anaconda</a> ist ein weiteres beliebtes Werkzeug zur Verwaltung von Python-Paketen.
  </base-disclaimer-title>
  <base-disclaimer-content>
    Wo Pakete, Notebooks, Projekte und Umgebungen geteilt werden. Ihr Ort für kostenloses öffentliches Conda-Paket-Hosting.
  </base-disclaimer-content>
</base-disclaimer>

Verwendung:

1. Eine virtuelle Umgebung erstellen

```bash
conda create -n HelloWorld
```

2. Um die virtuelle Umgebung zu nutzen, aktivieren Sie sie durch:

```bash
conda activate HelloWorld
```

    Alles, was jetzt installiert wird, ist spezifisch für das Projekt HelloWorld

3. Die virtuelle Umgebung verlassen

```bash
conda deactivate
```

## UV

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.astral.sh/uv/">UV-Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    UV ist ein extrem schneller Python-Paketinstallations- und Resolver, der als direkter Ersatz für Pip- und Pip-Tools-Workflows konzipiert ist. UV ist 10-100x schneller als Pip und bietet einheitliche Paketverwaltung, virtuelle Umgebungs-Erstellung und Python-Versionsverwaltung.
  </base-disclaimer-content>
</base-disclaimer>

1. UV installieren

```bash
# Verwendung von curl (Linux/macOS)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Verwendung von pip oder pipx
pip install uv
```

2. Ein neues Projekt mit virtueller Umgebung erstellen

```bash
uv init my-project
cd my-project
```

3. Abhängigkeiten hinzufügen

```bash
uv add requests
```

4. Befehle in der Projektumgebung ausführen

```bash
uv run python script.py
```

5. Die virtuelle Umgebung manuell aktivieren (optional)

```bash
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

UV verwaltet virtuelle Umgebungen, Python-Versionen und Abhängigkeiten automatisch mit außergewöhnlicher Geschwindigkeit und Bequemlichkeit.

## Relevante Links

- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python-Projekte mit Poetry und VSCode. Teil 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python-Projekte mit Poetry und VSCode. Teil 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python-Projekte mit Poetry und VSCode. Teil 3</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: Der blitzschnelle Python-Paketmanager</router-link>
- <router-link to="/builtin/import">import()</router-link>
