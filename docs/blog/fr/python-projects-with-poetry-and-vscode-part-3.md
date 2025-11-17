---
title: 'Projets Python avec Poetry et VSCode Partie 3 - Aide-mémoire Python'
description: "Enfin, dans cette troisième partie, nous écrirons une bibliothèque d'exemple, construirons notre projet avec *Poetry* et le publierons sur Pypi."
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Projets Python avec Poetry et VSCode Partie 3 - Aide-mémoire Python"
    description: "Enfin, dans cette troisième partie, nous écrirons une bibliothèque d'exemple, construirons notre projet avec *Poetry* et le publierons sur Pypi."
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Projets Python avec Poetry et VSCode Partie 3 - Aide-mémoire Python" />

Dans le <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">premier article</router-link>, nous avons démarré un nouveau projet, créé un Environnement Virtuel et géré les dépendances. Dans la <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">deuxième partie</router-link>, nous avons ajouté notre Environnement Virtuel à [VSCode](https://code.visualstudio.com/) et intégré nos dépendances de développement.

Et enfin, dans cette troisième et dernière partie, nous allons :

- Écrire une bibliothèque d'exemple.
- Construire notre projet avec _Poetry_.
- Le publier sur _PyPI_.

## Commandes Poetry

Voici un tableau des commandes utilisées dans cette série ainsi que leurs descriptions. Pour une liste complète, consultez la [Documentation Poetry](https://poetry.eustace.io/docs/cli/).

| Commande                          | Description                                                      |
| --------------------------------- | ---------------------------------------------------------------- |
| `poetry new [package-name]`       | Démarrer un nouveau Projet Python.                               |
| `poetry init`                     | Créer un fichier _pyproject.toml_ de manière interactive.        |
| `poetry install`                  | Installer les paquets à l'intérieur du fichier _pyproject.toml_. |
| `poetry add [package-name]`       | Ajouter un paquet à un Environnement Virtuel.                    |
| `poetry add -D [package-name]`    | Ajouter un paquet de développement à un Environnement Virtuel.   |
| `poetry remove [package-name]`    | Supprimer un paquet d'un Environnement Virtuel.                  |
| `poetry remove -D [package-name]` | Supprimer un paquet de développement d'un Environnement Virtuel. |
| `poetry update`                   | Obtenir les dernières versions des dépendances                   |
| `poetry shell`                    | Lancer un shell dans l'environnement virtuel.                    |
| `poetry build`                    | Construit les archives source et wheels.                         |
| `poetry publish`                  | Publier le paquet sur Pypi.                                      |
| `poetry publish --build`          | Construire et publier un paquet.                                 |
| `poetry self:update`              | Mettre à jour poetry vers la dernière version stable.            |

## Le Projet

Vous pouvez télécharger le code source depuis [GitHub](https://github.com/wilfredinni/how-long) si vous le souhaitez, mais comme mentionné précédemment, ce sera un simple décorateur qui affichera dans la console le temps nécessaire à l'exécution d'une fonction.

Il fonctionnera comme ceci :

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

Et le répertoire du projet sera le suivant :

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

Avant de commencer, vérifiez les mises à jour des paquets avec la commande `poetry update` :

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

Ajoutez une brève description pour le projet dans le `README.rst` :

```
how_long
========

Simple Decorator to measure a function execution time.

Example
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
```

Naviguez vers `how_long/how_long.py` :

```python
# how_long.py
from functools import wraps

import pendulum


def timer(function):
    """
    Simple Decorator to measure a function execution time.
    """

    @wraps(function)
    def function_wrapper():
        start = pendulum.now()
        function()
        elapsed_time = pendulum.now() - start
        print(f"Execution Time: {elapsed_time.microseconds} ms.")

    return function_wrapper
```

Dans `how_long/__init__.py` :

```python
from .how_long import timer

__version__ = "0.1.1"
```

Et enfin, le fichier `tests/test_how_long.py` :

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

Vous pouvez maintenant utiliser `poetry install` dans votre terminal pour installer et prouver votre paquet localement. Activez votre environnement virtuel si ce n'est pas déjà fait et dans l'interpréteur interactif Python :

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

[Exécutez les tests](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest) et si tout va bien, passez à la suite.

## Construction et Publication

Enfin, le moment est venu de rendre ce projet disponible au monde ! Assurez-vous d'avoir un compte sur [PyPI](https://pypi.org). Rappelez-vous que le nom du paquet doit être unique, en cas de doute, utilisez la [recherche](https://pypi.org/search/?q=) pour le vérifier.

### Construction (Build)

La commande `poetry build` construit les archives source et [wheels](https://pythonwheels.com/) qui seront ensuite téléchargées comme source du projet :

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

Le répertoire _how_long.egg-info_ sera créé.

### Publication

Cette commande publie le paquet sur _PyPI_ et l'enregistre automatiquement avant de le télécharger s'il s'agit de la première soumission :

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> Vous pouvez également construire et publier votre projet avec `$ poetry publish --build`.

Entrez vos identifiants et si tout est correct, [parcourez](https://pypi.org/project/how-long/) votre projet, et vous verrez quelque chose comme ceci :

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

Nous pouvons maintenant informer les autres qu'ils peuvent faire `pip install how-long` depuis n'importe quelle machine, n'importe où !

## Conclusion

Je me souviens de la première fois où j'ai essayé de publier un paquet, et ce fut un cauchemar. Je débutais en Python et j'ai dû passer "quelques heures" à essayer de comprendre ce qu'était le fichier `setup.py` et comment l'utiliser. Au final, je me suis retrouvé avec plusieurs fichiers : un `Makefile`, un `MANIFEST.in`, un `requirements.txt` et un `test_requirements.txt`. C'est pourquoi les mots de [Sébastien Eustace](https://github.com/sdispater), le créateur de [Poetry](https://github.com/sdispater/poetry), ont pris tout leur sens pour moi :

> Packaging and dependency management in Python are rather convoluted and hard to understand for newcomers. Even for seasoned developers it might be cumbersome at times to create all files needed in a Python project: `setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in` and the newly added `Pipfile`.
>
> So I wanted a tool that would limit everything to a single configuration file to do: dependency management, packaging and publishing.
>
> It takes inspiration in tools that exist in other languages, like `composer` (PHP) or `cargo` (Rust).
>
> And, finally, there is no reliable tool to properly resolve dependencies in Python, so I started `poetry` to bring an exhaustive dependency resolver to the Python community.

Poetry n'est [en aucun cas parfait](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry) mais, contrairement à d'autres outils, il fait vraiment ce qu'il promet.
