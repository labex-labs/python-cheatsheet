---
title: 'Projets Python avec Poetry et VSCode Partie 2 - Aide-mémoire Python'
description: "Dans cette deuxième partie, nous allons intégrer notre environnement virtuel à VSCode, mettre à jour nos dépendances et intégrer Flake8, Black et Pytest à l'éditeur."
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Projets Python avec Poetry et VSCode Partie 2 - Aide-mémoire Python"
    description: "Dans cette deuxième partie, nous allons intégrer notre environnement virtuel à VSCode, mettre à jour nos dépendances et intégrer Flake8, Black et Pytest à l'éditeur."
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Projets Python avec Poetry et VSCode Partie 2 - Aide-mémoire Python" />

Dans le <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">premier article</router-link>, nous avons appris ce qu'est le fichier `pyproject.toml` et comment travailler avec, utilisé [Poetry](https://poetry.eustace.io/) pour démarrer un nouveau projet, créer un environnement virtuel et pour ajouter et supprimer des dépendances. Tout cela avec les commandes suivantes :

| Command                           | Description                                                      |
| --------------------------------- | ---------------------------------------------------------------- |
| `poetry new [package-name]`       | Démarrer un nouveau projet Python.                               |
| `poetry init`                     | Créer un fichier _pyproject.toml_ de manière interactive.        |
| `poetry install`                  | Installer les paquets dans le fichier _pyproject.toml_.          |
| `poetry add [package-name]`       | Ajouter un paquet à un environnement virtuel.                    |
| `poetry add -D [package-name]`    | Ajouter un paquet de développement à un environnement virtuel.   |
| `poetry remove [package-name]`    | Supprimer un paquet d'un environnement virtuel.                  |
| `poetry remove -D [package-name]` | Supprimer un paquet de développement d'un environnement virtuel. |

Dans cette deuxième partie, nous allons :

- Ajouter notre environnement virtuel à [VSCode](https://code.visualstudio.com/).
- Mettre à jour nos dépendances.
- Intégrer nos dépendances de développement avec l'éditeur :
  - _Flake8_
  - _Black_
  - _Pytest_

Et dans un <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">troisième article</router-link>, nous écrirons une bibliothèque d'exemple, construirons notre projet avec _Poetry_ et le publierons sur _PyPI_.

Avant de commencer, assurez-vous d'avoir installé [VSCode](https://code.visualstudio.com/), ajouté l'extension [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python) et d'avoir suivi et compris le <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">premier article</router-link> de cette série.

## Configuration de Poetry sur VSCode

Quelques jours se sont écoulés depuis la première partie, il pourrait donc être judicieux de vérifier les nouvelles versions de nos dépendances. Ouvrez votre terminal, naviguez à l'intérieur du répertoire de votre projet et tapez la commande `poetry update` :

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

Jusqu'à présent, aucune nouvelle version n'est disponible.

Lorsque vous créez un environnement virtuel avec la commande _venv_, _VSCode_ le définit automatiquement comme l'environnement Python par défaut pour ce projet. Lorsque vous travaillez avec _Poetry_, la première fois, nous devrons taper ce qui suit dans le terminal et à l'intérieur du dossier du projet :

```bash
poetry shell
code .
```

La première commande, `poetry shell`, nous fera entrer dans notre environnement virtuel, et `code .` ouvrira le dossier actuel à l'intérieur de _VSCode_.

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

Ouvrez le dossier **how-long** (ou celui portant le nom de votre projet) via le panneau de gauche et, à côté de `__init__.py`, créez un fichier `how-long.py`. Dans le coin inférieur gauche, vous verrez l'environnement Python actuel :

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

Cliquez dessus et une liste des environnements disponibles s'affichera. Choisissez celui qui porte le nom de votre projet :

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

Maintenant, intégrons nos dépendances de développement, _Flake8_, _Black_ et _Pytest_ dans Visual Studio Code.

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/) fournira à nos projets des capacités de _linting_. En d'autres termes, il signalera les erreurs de syntaxe et de style, et grâce à VSCode, nous les connaîtrons au fur et à mesure que nous tapons.

Par défaut, l'extension Python est livrée avec _Pylint_ activé, ce qui est puissant mais complexe à configurer. Pour passer à _Flake8_, modifiez n'importe quel fichier Python et enregistrez-le. Dans le coin inférieur droit, un message contextuel s'affichera :

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

Cliquez sur **Select Linter** et choisissez **Flake8** dans la liste. Maintenant, _VSCode_ nous indiquera nos problèmes de _syntaxe_ et de _style_, en vert ou en rouge selon leur gravité, toujours avec une description claire de ce qui ne va pas :

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

Il semble que nous ayons deux problèmes : il nous manque une ligne vide à la fin de notre fichier (style) et nous avons oublié d'ajouter des guillemets à notre chaîne de caractères _Hello, World!_ (syntaxe). Corrigez-les et voyez tous les avertissements disparaître.

## Black

[Black](https://github.com/ambv/black) est un formateur de code, un outil qui examinera notre code et le formatera automatiquement conformément au guide de style [PEP 8](https://www.python.org/dev/peps/pep-0008/), le même _PEP_ que _Flake8_ utilise pour vérifier nos erreurs de style.

Maintenez `shift + cmd/ctrl + p` pour ouvrir la palette de commandes, tapez **Format Document**, et appuyez sur Entrée. Un nouveau message contextuel apparaîtra :

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

Sélectionnez **Use Black**. Copiez maintenant ce code mal formaté dans votre fichier python :

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

Quel laid morceau de m\*\*\*... de code. Essayez de le formater à nouveau et voyez comment _Black_ corrige tous les problèmes pour vous !

Une autre chose que nous pouvons faire est de configurer VSCode afin que chaque fois que nous sauvegardons, _Black_ formate automatiquement notre code. Maintenez `cmd/ctrl + ,` pour ouvrir les paramètres. Assurez-vous d'être dans les **Workspace Settings**, recherchez **Format On Save** et activez la case à cocher :

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

Enfin, _Black_ utilise par défaut 88 caractères par ligne, contrairement aux 80 autorisés par _Flake8_. Pour éviter les conflits, ouvrez le dossier **.vscode** et ajoutez ce qui suit à la fin du fichier **settings.json** :

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

Si vous êtes sérieux dans votre programmation, il est crucial pour vous d'apprendre à tester vos projets. C'est une compétence incroyablement utile qui vous permet d'écrire et de livrer des programmes en toute confiance en réduisant la possibilité que des bugs catastrophiques apparaissent après la livraison.

[Pytest](https://docs.pytest.org/en/latest/) est un framework très populaire et convivial pour l'écriture de tests. Nous l'[avons déjà installé](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management), nous allons donc également l'intégrer avec _VSCode_.

Ouvrez le dossier **tests** et sélectionnez le fichier `test_how_long.py`. _Poetry_ nous donne déjà notre premier test :

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

Dans ce test, nous importons la variable `__version__` du fichier `__init__.py` qui se trouve dans le dossier **how_long** et nous affirmons que la version actuelle est _0.1.0_. Ouvrez le terminal intégré en allant dans **Terminal > New Terminal** et tapez :

```bash
pytest
```

Le résultat ressemblera à ceci :

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

Ok, tout va bien. Ouvrez votre palette de commandes avec `shift + cmd/ctrl + p` :

- Écrivez **unit** et sélectionnez **Python: Configure Unit Tests**.
- Sélectionnez **pytest**.
- Choisissez le répertoire dans lequel vous avez enregistré les tests, **tests** dans notre cas.

Trois choses se sont produites :

- Un nouveau bouton est apparu dans la barre d'état : **Run Tests**. C'est la même chose que de taper _pytest_ dans le terminal. Appuyez dessus et sélectionnez **Run All Unit Tests**. Une fois terminé, il vous indiquera le nombre de tests qui ont réussi et ceux qui ont échoué :

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- Une nouvelle icône dans la barre de gauche. Si vous cliquez dessus, un panneau affichant tous les tests apparaîtra. Ici, vous pouvez exécuter chacun individuellement :

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- À l'intérieur du fichier de test, de nouvelles options s'afficheront avant chaque fonction de test : une icône de coche apparaîtra si tout va bien, et un _x_ sinon. Cela vous permet également d'exécuter des tests spécifiques :

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## Conclusion

Jusqu'à présent, nous avons :

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Démarré un nouveau projet</router-link>, créé un environnement virtuel, et ajouté, supprimé et mis à jour des dépendances.
- Ajouté notre [environnement virtuel à VSCode](#setting-up-poetry-on-vscode), [configuré _Flake8_](#flake8) pour _analyser_ notre code pendant que nous tapons, sélectionné [_Black_](#black) comme formateur et [inclus _Pytest_](#pytest) pour exécuter nos tests visuellement.

Enfin, dans le <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">troisième et dernier article</router-link>, nous allons :

- Écrire une bibliothèque d'exemple.
- Construire notre projet avec _Poetry_.
- Le publier sur _PyPI_.
