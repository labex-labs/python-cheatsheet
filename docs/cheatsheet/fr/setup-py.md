---
title: 'Python Setup.py - Fiche de Référence Python'
description: 'Le script setup est le centre de toute activité de construction, distribution et installation de modules utilisant Distutils. Son objectif principal est de décrire votre distribution de module à Distutils pour que les commandes associées fonctionnent correctement.'
labUrl: 'https://labex.io/fr/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
setup.py de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    Une opinion « controversée »
  </base-warning-title>
  <base-warning-content>
    L'utilisation de `setup.py` pour empaqueter et distribuer vos paquets Python peut être assez difficile de temps en temps. Les outils modernes comme <a target="_blank" href="https://python-poetry.org/">Poetry</a> et <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> rendent non seulement l'empaquetage <b>beaucoup plus facile</b>, mais vous aident également à gérer vos dépendances d'une manière très pratique. UV est particulièrement remarquable pour être 10 à 100 fois plus rapide que les outils traditionnels.
  </base-warning-content>
</base-warning>

Si vous souhaitez plus d'informations sur Poetry, vous pouvez lire les articles suivants :

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projets Python avec Poetry et VSCode. Partie 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projets Python avec Poetry et VSCode. Partie 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projets Python avec Poetry et VSCode. Partie 3</router-link>

Pour un guide complet sur UV, le gestionnaire de paquets Python ultra-rapide, lisez : <router-link to="/blog/python-uv-package-manager">UV : Le gestionnaire de paquets Python ultra-rapide</router-link>.

## Introduction

Le script setup est le centre de toute activité dans la construction, la distribution et l'installation de modules en utilisant Distutils. Le but principal du script setup est de décrire votre distribution de module à Distutils, afin que les différentes commandes qui opèrent sur vos modules fassent ce qu'il faut.

Pour un guide complet sur la gestion des chemins de fichiers et de répertoires, ce qui est essentiel pour gérer les structures de projet, consultez la page <router-link to="/cheatsheet/file-directory-path">Chemins de fichiers et de répertoires</router-link>.

Le fichier `setup.py` est au cœur d'un projet Python. Il décrit toutes les métadonnées de votre projet. Il existe un certain nombre de champs que vous pouvez ajouter à un projet pour lui donner un ensemble riche de métadonnées décrivant le projet. Cependant, il n'y a que trois champs obligatoires : `name`, `version` et `packages`. Le champ `name` doit être unique si vous souhaitez publier votre paquet sur le Python Package Index (PyPI). Le champ `version` assure le suivi des différentes versions du projet. Le champ `packages` décrit où vous avez placé le code source Python au sein de votre projet.

Cela vous permet d'installer facilement des paquets Python. Souvent, il suffit d'écrire :

```bash
python setup.py install
```

et le module s'installera lui-même.

## Exemple

Notre `setup.py` initial inclura également des informations sur la licence et réutilisera le fichier README.txt pour le champ `long_description`. Cela ressemblera à ceci :

```python
# setup.py: définir les métadonnées du paquet pour la distribution
from distutils.core import setup
setup(
   name='pythonCheatsheet',  # Nom du paquet (doit être unique sur PyPI)
   version='0.1',  # Numéro de version
   packages=['pipenv',],  # Liste des paquets à inclure
   license='MIT',  # Type de licence
   long_description=open('README.txt').read(),  # Lire la description depuis le fichier
)
```

Pour plus d'informations, visitez la [documentation officielle](http://docs.python.org/3.11/install/index.html).

## Liens pertinents

- <router-link to="/cheatsheet/virtual-environments">Environnements Virtuels</router-link>
- <router-link to="/cheatsheet/file-directory-path">Chemins de fichiers et de répertoires</router-link>
- <router-link to="/blog/python-uv-package-manager">UV : Le gestionnaire de paquets Python ultra-rapide</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projets Python avec Poetry et VSCode. Partie 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projets Python avec Poetry et VSCode. Partie 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projets Python avec Poetry et VSCode. Partie 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
