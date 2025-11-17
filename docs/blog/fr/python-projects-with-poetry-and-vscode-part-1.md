---
title: 'Projets Python avec Poetry et VSCode Partie 1 - Aide-mémoire Python'
description: 'Nous utiliserons Poetry pour démarrer un projet simple, gérer les dépendances et le publier sur PyPI. Nous intégrerons également Pytest, Black et Flake8 dans VSCode directement depuis un environnement virtuel.'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Projets Python avec Poetry et VSCode Partie 1 - Aide-mémoire Python"
    description: "Nous utiliserons Poetry pour démarrer un projet simple, gérer les dépendances et le publier sur PyPI. Nous intégrerons également Pytest, Black et Flake8 dans VSCode directement depuis un environnement virtuel."
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Projets Python avec Poetry et VSCode Partie 1 - Aide-mémoire Python" />

Un Environnement Virtuel est une installation Python isolée conçue pour éviter de remplir notre installation de base avec des bibliothèques que nous pourrions n'utiliser que pour un seul projet. Il nous permet également de gérer plusieurs versions du même paquet dans différents projets. Nous pourrions, par exemple, avoir besoin de Django 4.1 pour l'un et de 1.9 pour l'autre.

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry est un outil pour gérer l'installation des dépendances ainsi que la construction et l'empaquetage des paquets Python. Il n'a besoin que d'un seul fichier pour tout faire : le nouveau <code>pyproject.toml</code>, <a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">standardisé</a>. En d'autres termes, poetry utilise <code>pyproject.toml</code> pour remplacer <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> et le <code>Pipfile</code> nouvellement ajouté.
  </base-disclaimer-content>
</base-disclaimer>

Dans cette série d'articles, nous utiliserons [Poetry](https://poetry.eustace.io/) pour gérer nos dépendances, construire un projet simple et, avec une seule commande, le publier sur [PyPI](https://pypi.org/).

Dans cette première partie, nous allons :

- Démarrer un nouveau projet.
- Créer un Environnement Virtuel.
- Gérer les dépendances.

Dans le <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">deuxième article</router-link>, nous allons :

- Ajouter notre Environnement Virtuel à [VSCode](https://code.visualstudio.com/).
- Intégrer nos dépendances de développement :
  - _Flake8_
  - _Black_
  - _Pytest_

Et enfin, dans un <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">troisième article</router-link>, nous allons :

- Écrire une bibliothèque d'exemple.
- Construire notre projet avec _Poetry_.
- Le publier sur _PyPI_.

## Installation de Poetry

La manière la plus simple est d'utiliser _pip_ :

```bash
pip install poetry
```

Mais nous utiliserons l'installeur propre à Poetry pour l'isoler du reste du système en vendant ses dépendances. C'est la manière recommandée d'installer poetry :

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

De cette façon, nous pourrons plus tard mettre à jour poetry vers la dernière version stable avec la commande `poetry self update`.

## Démarrer un nouveau projet

Nous pouvons maintenant démarrer un nouveau projet Python en utilisant la commande `poetry new [nom_du_projet]`. Je l'appellerai **_how-long_** et ce sera une simple bibliothèque pour mesurer le temps d'exécution d'une fonction :

```bash
poetry new how-long
```

> Note : Pour les projets existants, vous pouvez utiliser la commande `poetry init` et créer interactivement un _pyproject.toml_.

Le répertoire _how-long_ est créé et contient une structure de projet de base :

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

Pour un guide complet sur la gestion des chemins de fichiers et de répertoires, ce qui est essentiel pour gérer les structures de projet, consultez la page <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link>.

> Note : Pour pouvoir publier votre projet, vous avez besoin d'un nom disponible. Utilisez la recherche [PyPI](https://pypi.org/) pour cela.

### Le fichier pyproject.toml

Le fichier **pyproject.toml** gérera les détails et les dépendances du projet :

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

Les détails. Ajouter une [license](https://poetry.eustace.io/docs/pyproject/#license) et un [README](https://poetry.eustace.io/docs/pyproject/#readme) pourrait être une bonne idée :

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

Le premier est la version de Python. En gros, ce projet sera compatible avec Python 3.7 et supérieur. De plus, à partir de maintenant, tous les paquets que nous installons et qui sont destinés à être utilisés en production seront listés ici.

#### [tool.poetry.dev-dependencies]

Ces paquets sont uniquement pour le développement et ne seront pas inclus lorsque nous publierons notre projet. Par défaut, Poetry inclut [Pytest](https://docs.pytest.org/en/latest/), nous l'utiliserons donc pour tester notre projet plus tard.

## Création d'un Environnement Virtuel

Pour créer un Environnement Virtuel et installer _Pytest_, nous utiliserons la commande `poetry install` :

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

Une fois terminé, un nouveau fichier, `poetry.lock`, sera créé.

> Lorsque Poetry a fini d'installer, il écrit tous les paquets et les versions exactes qu'il a téléchargés dans le fichier poetry.lock, verrouillant le projet à ces versions spécifiques. Vous devriez commettre le fichier poetry.lock dans le dépôt de votre projet afin que toutes les personnes travaillant sur le projet soient verrouillées aux mêmes versions de dépendances.

## Gestion des dépendances

Une façon d'ajouter ou de supprimer des dépendances est d'éditer directement _pyproject.toml_ puis d'exécuter `poetry install` pour appliquer les changements. Nous utiliserons plutôt les commandes `add` et `remove` pour éviter les modifications manuelles.

### Ajout de dépendances

Ajoutons deux paquets au projet, _pendulum_ et _coo_ :

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

Ouvrez _pyproject.toml_ et _poetry.lock_ et voyez comment ils ont été mis à jour.

### Ajout de dépendances de développement

Ces dépendances ne seront disponibles que pendant le développement, Poetry ne les inclura pas lors de la construction et de la publication du projet.

Nous avons déjà installé _Pytest_, mais nous utiliserons également [flake8](http://flake8.pycqa.org/en/latest/) pour le linting et [mypy](http://mypy-lang.org/) pour le typage statique :

```bash
poetry add -D flake8 mypy
```

Maintenant que j'y pense, j'ai oublié d'ajouter un formateur. Nous choisirons [black](https://black.readthedocs.io/en/stable/) :

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

Cette erreur se produit parce que _black_ est dans un état de pré-version, donc Poetry ne peut pas en trouver de version stable pour nous. Mais je le veux vraiment, alors installons-le quand même avec le drapeau `--allow-prereleases` :

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### Suppression de dépendances

Vous savez quoi, j'ai changé d'avis, ce projet n'utilisera ni _coo_ ni _mypy_. Commencez par supprimer _coo_, une dépendance normale de notre projet :

```bash
poetry remove coo
```

Maintenant _mypy_ qui est une dépendance de développement :

```bash
poetry remove -D mypy
```

## Conclusion

Dans cette première partie, nous avons démarré un nouveau projet, créé un Environnement Virtuel et ajouté et supprimé des dépendances en utilisant les commandes suivantes :

| Commande                        | Description                                                      |
| ------------------------------- | ---------------------------------------------------------------- |
| `poetry new [nom-paquet]`       | Démarrer un nouveau Projet Python.                               |
| `poetry init`                   | Créer un fichier _pyproject.toml_ interactivement.               |
| `poetry install`                | Installer les paquets contenus dans le fichier _pyproject.toml_. |
| `poetry add [nom-paquet]`       | Ajouter un paquet à un Environnement Virtuel.                    |
| `poetry add -D [nom-paquet]`    | Ajouter un paquet de développement à un Environnement Virtuel.   |
| `poetry remove [nom-paquet]`    | Supprimer un paquet d'un Environnement Virtuel.                  |
| `poetry remove -D [nom-paquet]` | Supprimer un paquet de développement d'un Environnement Virtuel. |
| `poetry self:update`            | Mettre à jour poetry vers la dernière version stable.            |

Dans un <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">deuxième article</router-link>, nous verrons plus de commandes _Poetry_, ajouterons notre Environnement Virtuel à _VSCode_ et utiliserons les paquets de développement que nous avons installés pour linter (Flake8), formater (Black) et tester (Pytest) notre code dans l'éditeur. Enfin, dans un troisième, nous écrirons et publierons une bibliothèque d'exemple sur _PyPI_.

Un doute ou une suggestion ? Veuillez laisser un commentaire.
