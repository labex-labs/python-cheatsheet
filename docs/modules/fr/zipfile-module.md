---
title: 'Module Zipfile Python - Aide-mémoire Python'
description: 'Ce module offre des outils pour créer, lire, écrire, ajouter et lister un fichier ZIP.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Zipfile de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Ce module fournit des outils pour créer, lire, écrire, ajouter et lister un fichier ZIP.
  </base-disclaimer-content>
</base-disclaimer>

## Lecture de fichiers ZIP

```python
import zipfile

# Ouvrir le fichier ZIP et lire son contenu
with zipfile.ZipFile('example.zip') as example_zip:
    # Lister tous les fichiers et répertoires dans le ZIP
    print(example_zip.namelist())
    # Obtenir les métadonnées pour un fichier spécifique
    spam_info = example_zip.getinfo('spam.txt')
    # Afficher la taille originale du fichier
    print(spam_info.file_size)
    # Afficher la taille du fichier compressé
    print(spam_info.compress_size)
    # Calculer le ratio de compression
    print('Le fichier compressé est %sx plus petit !' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

```output
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Le fichier compressé est 3.63x plus petit !
```

## Extraction à partir de fichiers ZIP

La méthode `extractall()` pour les objets ZipFile extrait tous les fichiers et dossiers d'un fichier ZIP dans le répertoire de travail actuel.

```python
# Extraire tous les fichiers du ZIP vers le répertoire actuel
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

La méthode `extract()` pour les objets ZipFile extrait un seul fichier du fichier ZIP :

```python
# Extraire un seul fichier du ZIP
with zipfile.ZipFile('example.zip') as example_zip:
    # Extraire vers le répertoire actuel (retourne le chemin)
    print(example_zip.extract('spam.txt'))
    # Extraire vers un répertoire spécifique
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

```output
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## Création et ajout à des fichiers ZIP

```python
import zipfile

# Créer un nouveau fichier ZIP et y ajouter un fichier
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # Ajouter un fichier avec compression
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

Ce code créera un nouveau fichier ZIP nommé new.zip contenant les données compressées de spam.txt.

## Lecture des métadonnées des fichiers ZIP

### Obtenir les noms de fichiers avec namelist()

```python
import zipfile

# Lire le fichier ZIP et lister tous les noms de fichiers
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

```output
['README.txt']
```

### Obtenir toutes les métadonnées avec infolist()

```python
import datetime
import zipfile

# Obtenir les métadonnées détaillées pour tous les fichiers dans le ZIP
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # Déterminer le système d'exploitation (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # Convertir le tuple date_time en objet datetime
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Commentaire     : {info.comment}')
        print(f'Modifié    : {modified}')
        print(f'Système      : {system}')
        print(f'Version ZIP : {info.create_version}')
        print(f'Compressé  : {info.compress_size} octets')
        print(f'Non compressé: {info.file_size} octets')
```

```output
README.txt
Commentaire     : b''
Modifié    : 2022-11-15 06:48:02
Système      : Unix
Version ZIP : 30
Compressé  : 65 octets
Non compressé: 76 octets
```

## Liens pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet : Lecture et écriture de fichiers</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet : Chemin de fichier et de répertoire</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet : Gestionnaires de contexte</router-link>
- <router-link to="/modules/os-module">Module : os</router-link>
- <router-link to="/modules/pathlib-module">Module : pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
