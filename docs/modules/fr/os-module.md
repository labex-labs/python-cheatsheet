---
title: 'Module OS Python - Aide-mémoire Python'
description: "Ce module offre une manière portable d'utiliser les fonctionnalités dépendantes du système d'exploitation."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module OS Python
</base-title>

Ce module fournit une manière portable d'utiliser des fonctionnalités dépendantes du système d'exploitation.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Module OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    Le module <router-link to="/modules/pathlib-module">pathlib</router-link> fournit beaucoup plus de fonctionnalités que celles énumérées ici, comme obtenir le nom de fichier, obtenir l'extension de fichier, lire/écrire un fichier sans l'ouvrir manuellement, etc. Consultez la <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentation officielle</a> si vous souhaitez en savoir plus.
    <br>
    Pour un examen plus approfondi des deux, consultez la page <router-link to="/cheatsheet/file-directory-path">Cheatsheet : Chemins de fichiers et de répertoires</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Chemins Linux et Windows

Sous Windows, les chemins sont écrits en utilisant des barres obliques inverses (`\`) comme séparateur entre les noms de dossiers. Sur les systèmes d'exploitation basés sur Unix tels que macOS, Linux et les BSD, la barre oblique avant (`/`) est utilisée comme séparateur de chemin. Joindre des chemins peut être un casse-tête si votre code doit fonctionner sur différentes plateformes.

Heureusement, Python nous fournit `os.path.join` pour gérer cela.

```python
import os

# Joindre les composants du chemin en utilisant le séparateur correct pour l'OS
os.path.join('usr', 'bin', 'spam')
```

Sortie :

```plaintext
usr\bin\spam
```

Joindre des chemins est utile si vous devez créer différents chemins de fichiers sous le même répertoire.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# Joindre chaque nom de fichier avec le répertoire de base
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

Sortie :

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Le répertoire de travail actuel

```python
import os

# Obtenir le répertoire de travail actuel
os.getcwd()
```

Sortie :

```plaintext
/home/labex/project
```

```python
# Changer le répertoire de travail actuel
os.chdir('/usr/bin')

# Vérifier le changement
os.getcwd()
```

Sortie :

```plaintext
/usr/bin
```

## Création de nouveaux dossiers

```python
import os
# Créer des répertoires de manière récursive (crée tous les répertoires parents si nécessaire)
os.makedirs('/tmp/delicious/walnut/waffles')
```

## Chemins absolus vs relatifs

Il existe deux façons de spécifier un chemin de fichier.

- Un **chemin absolu**, qui commence toujours par le dossier racine
- Un **chemin relatif**, qui est relatif au répertoire de travail actuel du programme

Il existe également les dossiers point (`.`) et double point (`..`). Ce ne sont pas de vrais dossiers, mais des noms spéciaux qui peuvent être utilisés dans un chemin. Un point unique (“dot”) pour un nom de dossier est un raccourci pour “ce répertoire”. Deux points (“dot-dot”) signifient “le dossier parent”.

### Gestion des chemins absolus

Pour voir si un chemin est un chemin absolu :

```python
import os
# Vérifier si le chemin est absolu (commence par la racine)
os.path.isabs('/')
```

Sortie :

```plaintext
True
```

```python
# Les chemins relatifs retournent False
os.path.isabs('..')
```

Sortie :

```plaintext
False
```

Vous pouvez également extraire un chemin absolu :

```python
import os
# Obtenir d'abord le répertoire actuel
os.getcwd()
```

Sortie :

```plaintext
/home/labex/project
```

```python
# Convertir le chemin relatif en chemin absolu
os.path.abspath('..')
```

Sortie :

```plaintext
/home
```

### Gestion des chemins relatifs

Vous pouvez obtenir un chemin relatif à partir d'un chemin de départ vers un autre chemin.

```python
import os
# Obtenir le chemin relatif du chemin de départ au chemin cible
os.path.relpath('/etc/passwd', '/')
```

Sortie :

```plaintext
etc/passwd
```

## Validité du chemin et du fichier

### Vérifier si un fichier/répertoire existe

```python
import os

# Vérifier si le chemin existe (fichier ou répertoire)
os.path.exists('.')
```

Sortie :

```plaintext
True
```

```python
os.path.exists('setup.py')
```

Sortie :

```plaintext
True
```

```python
os.path.exists('/etc')
```

Sortie :

```plaintext
True
```

```python
os.path.exists('nonexistentfile')
```

Sortie :

```plaintext
False
```

### Vérifier si un chemin est un fichier

```python
import os

# Vérifier si le chemin est un fichier
os.path.isfile('setup.py')
```

Sortie :

```plaintext
True
```

```python
os.path.isfile('/home')
```

Sortie :

```plaintext
False
```

```python
os.path.isfile('nonexistentfile')
```

Sortie :

```plaintext
False
```

### Vérifier si un chemin est un répertoire

```python
import os

# Vérifier si le chemin est un répertoire
os.path.isdir('/')
```

Sortie :

```plaintext
True
```

```python
os.path.isdir('setup.py')
```

Sortie :

```plaintext
False
```

```python
os.path.isdir('/spam')
```

Sortie :

```plaintext
False
```

## Obtenir la taille d'un fichier en octets

```python
import os

# Obtenir la taille du fichier en octets
os.path.getsize('/usr/bin/python3')
```

Sortie :

```plaintext
776192
```

## Lister les répertoires

```python
import os

# Lister tous les fichiers et répertoires dans le chemin spécifié
os.listdir('/usr/bin')
```

Sortie :

```plaintext
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

## Tailles de fichiers de répertoire

<base-warning>
  <base-warning-title>
    AVERTISSEMENT
  </base-warning-title>
  <base-warning-content>
    Les répertoires eux-mêmes ont également une taille ! Vous voudrez peut-être vérifier si un chemin est un fichier ou un répertoire en utilisant les méthodes discutées dans la section précédente.
  </base-warning-content>
</base-warning>

```python
import os
total_size = 0

# Calculer la taille totale de tous les fichiers dans le répertoire
for filename in os.listdir('/usr/bin'):
    # Joindre le chemin du répertoire avec le nom de fichier et obtenir la taille
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

Sortie :

```plaintext
1117846456
```

## Suppression de fichiers et de dossiers

- Appeler `os.unlink(path)` supprimera le fichier au chemin spécifié.

- Appeler `os.rmdir(path)` supprimera le dossier au chemin spécifié. Ce dossier doit être vide de tout fichier ou dossier.

## Parcourir une arborescence de répertoires

```python
import os

# Parcourir l'arborescence des répertoires récursivement
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'Le dossier actuel est {folder_name}')
    # Itérer sur les sous-répertoires
    for subfolder in subfolders:
        print(f'SOUS-DOSSIER DE {folder_name}: {subfolder}')
    # Itérer sur les fichiers
    for filename in filenames:
        print(f'FICHIER DANS {folder_name}: filename{filename}')
    print('')
```

Sortie :

```plaintext
Le dossier actuel est /tmp/delicious
SOUS-DOSSIER DE /tmp/delicious: cats
SOUS-DOSSIER DE /tmp/delicious: walnut
FICHIER DANS /tmp/delicious: spam.txt

Le dossier actuel est /tmp/delicious/cats
FICHIER DANS /tmp/delicious/cats: catnames.txt
FICHIER DANS /tmp/delicious/cats: zophie.jpg

Le dossier actuel est /tmp/delicious/walnut
SOUS-DOSSIER DE /tmp/delicious/walnut: waffles

Le dossier actuel est /tmp/delicious/walnut/waffles
FICHIER DANS /tmp/delicious/walnut/waffles: butter.txt
```

## Liens pertinents

- <router-link to="/cheatsheet/file-directory-path">Cheatsheet : Chemins de fichiers et de répertoires</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet : Lecture et écriture de fichiers</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog : Essentiels de Pathlib</router-link>
- <router-link to="/modules/pathlib-module">Module : pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
