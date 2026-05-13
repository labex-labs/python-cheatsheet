---
title: Module Tempfile Python - Aide-mémoire Python
description: Le module `tempfile` crée des fichiers et répertoires temporaires de manière sûre.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Tempfile Python
</base-title>

Le module `tempfile` crée des fichiers et répertoires temporaires de manière sûre.

```python
import tempfile
```

Utilisez `tempfile` pour les données qui ne doivent exister que pendant l’exécution du programme, comme les sorties de test, les téléchargements ou les fichiers intermédiaires.

## TemporaryFile()

`TemporaryFile` crée un objet fichier qui est nettoyé automatiquement.

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

Le fichier est supprimé automatiquement à la fin du bloc `with`.

## NamedTemporaryFile()

`NamedTemporaryFile` vous donne un chemin sur le disque.

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

C’est utile lorsqu’une autre API a besoin d’un nom de fichier plutôt que d’un objet fichier.

## TemporaryDirectory()

Les répertoires temporaires sont utiles pour les tests et les espaces de travail de courte durée.

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

Les fichiers à l’intérieur du répertoire sont supprimés avec lui lorsque le bloc se termine.

## Choisir un emplacement temporaire

`gettempdir()` indique le répertoire utilisé par défaut par Python.

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## Liens pertinents

- <router-link to="/modules/pathlib-module">Module : pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Aide-mémoire : Lire et écrire des fichiers</router-link>
- <router-link to="/builtin/open">open()</router-link>
