---
title: 'Environnements Virtuels Python - Aide-mémoire Python'
description: "L'environnement virtuel permet de tester du code Python dans des espaces isolés et d'éviter de surcharger l'installation Python de base avec des bibliothèques spécifiques à un seul projet."
labUrl: 'https://labex.io/fr/labs/python-python-virtual-environments-633669?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Environnement Virtuel
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

L'utilisation d'un Environnement Virtuel sert à tester du code python dans des environnements encapsulés, et également à éviter de remplir l'installation Python de base avec des bibliothèques que nous pourrions n'utiliser que pour un seul projet.

## virtualenv

1. Installer virtualenv

```bash
pip install virtualenv
```

1. Installer virtualenvwrapper-win (Windows)

```bash
pip install virtualenvwrapper-win
```

Utilisation :

1. Créer un Environnement Virtuel nommé `HelloWorld`

```bash
mkvirtualenv HelloWorld
```

    Tout ce que nous installons maintenant sera spécifique à ce projet. Et disponible pour les projets que nous connectons à cet environnement.

1. Définir le Répertoire du Projet

   Pour lier notre virtualenv à notre répertoire de travail actuel, nous entrons simplement :

```bash
setprojectdir .
```

1. Désactiver

   Pour passer à autre chose dans la ligne de commande, tapez `deactivate` pour désactiver votre environnement.

```bash
deactivate
```

    Remarquez comment les parenthèses disparaissent.

1. Travailler sur (Workon)

   Ouvrez l'invite de commande et tapez `workon HelloWorld` pour activer l'environnement et vous déplacer dans le dossier racine de votre projet

```bash
workon HelloWorld
```

## Poetry

<base-disclaimer>
  <base-disclaimer-title>
    Depuis le <a href="https://python-poetry.org/">site web de Poetry</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry est un outil de gestion des dépendances et de packaging en Python. Il vous permet de déclarer les bibliothèques dont votre projet dépend et il les gérera (installera/mettra à jour) pour vous.
  </base-disclaimer-content>
</base-disclaimer>

1. Installer Poetry

```bash
pip install --user poetry
```

2. Créer un nouveau projet

```bash
poetry new my-project
```

    Ceci créera un répertoire my-project :

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

    Le fichier pyproject.toml orchestrera votre projet et ses dépendances :

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

3. Paquets

   Pour ajouter des dépendances à votre projet, vous pouvez les spécifier dans la section tool.poetry.dependencies :

```toml
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    De plus, au lieu de modifier le fichier pyproject.toml à la main, vous pouvez utiliser la commande `add` et elle trouvera automatiquement une contrainte de version appropriée.

```bash
poetry add pendulum
```

    Pour installer les dépendances listées dans pyproject.toml :

```bash
poetry install
```

    Pour supprimer des dépendances :

```bash
poetry remove pendulum
```

Pour plus d'informations, consultez la [documentation](https://poetry.eustace.io/docs/) ou lisez ici :

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projets Python avec Poetry et VSCode. Partie 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projets Python avec Poetry et VSCode. Partie 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projets Python avec Poetry et VSCode. Partie 3</router-link>

## Pipenv

<base-disclaimer>
  <base-disclaimer-title>
    Depuis le <a target="_blank" href="https://pipenv.pypa.io/en/latest/">site web de Pipenv</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Pipenv est un outil qui vise à apporter le meilleur de tous les mondes du packaging (bundler, composer, npm, cargo, yarn, etc.) au monde Python. Windows est un citoyen de première classe, dans notre monde.
  </base-disclaimer-content>
</base-disclaimer>

1. Installer pipenv

```bash
pip install pipenv
```

2. Entrez dans le répertoire de votre Projet et installez les Paquets pour votre projet

```bash
cd my_project
pipenv install <package>
```

    Pipenv installera votre paquet et créera un Pipfile pour vous dans le répertoire de votre projet. Le Pipfile est utilisé pour suivre les dépendances dont votre projet a besoin au cas où vous auriez besoin de les réinstaller.

3. Désinstaller des Paquets

```bash
pipenv uninstall <package>
```

4. Activer l'Environnement Virtuel associé à votre projet Python

```bash
pipenv shell
```

5. Quitter l'Environnement Virtuel

```bash
exit
```

Trouvez plus d'informations et une vidéo sur [docs.pipenv.org](https://docs.pipenv.org/).

## Anaconda

<base-disclaimer>
  <base-disclaimer-title>
    <a target="k" href="https://anaconda.com/">Anaconda</a> est un autre outil populaire pour gérer les paquets python.
  </base-disclaimer-title>
  <base-disclaimer-content>
    Où les paquets, les notebooks, les projets et les environnements sont partagés. Votre lieu pour l'hébergement public gratuit de paquets conda.
  </base-disclaimer-content>
</base-disclaimer>

Utilisation :

1. Créer un Environnement Virtuel

```bash
conda create -n HelloWorld
```

2. Pour utiliser l'Environnement Virtuel, activez-le par :

```bash
conda activate HelloWorld
```

    Tout ce qui est installé maintenant sera spécifique au projet HelloWorld

3. Quitter l'Environnement Virtuel

```bash
conda deactivate
```

## UV

<base-disclaimer>
  <base-disclaimer-title>
    Depuis la <a target="_blank" href="https://docs.astral.sh/uv/">Documentation UV</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    UV est un installateur et résolveur de paquets Python extrêmement rapide, conçu comme un remplacement direct pour les flux de travail pip et pip-tools. UV est 10 à 100 fois plus rapide que pip et fournit une gestion unifiée des paquets, la création d'environnements virtuels et la gestion des versions Python.
  </base-disclaimer-content>
</base-disclaimer>

1. Installer UV

```bash
# Utilisation de curl (Linux/macOS)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Utilisation de pip ou pipx
pip install uv
```

2. Créer un nouveau projet avec environnement virtuel

```bash
uv init my-project
cd my-project
```

3. Ajouter des dépendances

```bash
uv add requests
```

4. Exécuter des commandes dans l'environnement du projet

```bash
uv run python script.py
```

5. Activer manuellement l'environnement virtuel (optionnel)

```bash
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

UV gère automatiquement les environnements virtuels, les versions Python et les dépendances avec une vitesse et une commodité exceptionnelles.

## Liens pertinents

- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projets Python avec Poetry et VSCode. Partie 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projets Python avec Poetry et VSCode. Partie 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projets Python avec Poetry et VSCode. Partie 3</router-link>
- <router-link to="/blog/python-uv-package-manager">UV : Le gestionnaire de paquets Python ultra-rapide</router-link>
- <router-link to="/builtin/import">import()</router-link>
