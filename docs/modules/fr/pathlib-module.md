---
title: 'Module Pathlib Python - Aide-mémoire Python'
description: 'Le module pathlib, introduit dans Python 3.4, offre une approche orientée objet pour gérer les chemins du système de fichiers.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Python Pathlib
</base-title>

Pour une plongée approfondie dans les opérations pratiques du système de fichiers, consultez notre article de blog : <router-link to="/blog/python-pathlib-essentials">10 Opérations Essentielles du Système de Fichiers que Tout Développeur Devrait Connaître</router-link>.

Le module `pathlib` a été ajouté en Python 3.4, offrant une manière orientée objet de gérer les chemins du système de fichiers.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Module OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> fournit beaucoup plus de fonctionnalités que celles du module <code>os</code> et listées ici, comme obtenir le nom du fichier, obtenir l'extension du fichier, lire/écrire un fichier sans l'ouvrir manuellement, etc. Consultez la <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentation officielle</a> si vous avez l'intention d'en savoir plus.
    <br>
    Pour un examen plus approfondi des deux, consultez la page <router-link to="/cheatsheet/file-directory-path">Chemins de Fichiers et de Répertoires</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Chemins Linux et Windows

Sous Windows, les chemins sont écrits en utilisant des barres obliques inverses (`\`) comme séparateur entre les noms de dossiers. Sur les systèmes d'exploitation basés sur Unix tels que macOS, Linux et BSD, la barre oblique avant (`/`) est utilisée comme séparateur de chemin. Joindre des chemins peut être un casse-tête si votre code doit fonctionner sur différentes plateformes.

Heureusement, Python nous fournit `pathlib.Path.joinpath` pour gérer cela facilement.

```python
from pathlib import Path

# Joindre les composants du chemin
print(Path('usr').joinpath('bin').joinpath('spam'))
```

```output
usr/bin/spam
```

`pathlib` fournit également un raccourci pour `joinpath` en utilisant l'opérateur `/` :

```python
from pathlib import Path

# Utiliser l'opérateur / pour joindre les chemins
print(Path('usr') / 'bin' / 'spam')
```

```output
usr/bin/spam
```

Joindre des chemins est utile si vous avez besoin de créer différents chemins de fichiers sous le même répertoire.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# Obtenir le répertoire personnel de l'utilisateur
home = Path.home()
# Joindre chaque nom de fichier avec le répertoire personnel
for filename in my_files:
    print(home / filename)
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Le répertoire de travail actuel

```python
from pathlib import Path
from os import chdir

# Obtenir le répertoire de travail actuel
print(Path.cwd())
```

```output
/home/labex/project
```

```python
# Changer de répertoire en utilisant le module os
chdir('/usr/lib/python3.10')
# Vérifier le répertoire actuel
print(Path.cwd())
```

```output
/usr/lib/python3.10
```

## Création de nouveaux dossiers

```python
from pathlib import Path
cwd = Path.cwd()
# Créer un répertoire (échouera si les répertoires parents n'existent pas)
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

La raison de cette erreur est que le répertoire 'delicious' n'existe pas, nous ne pouvons donc pas créer les répertoires 'walnut' et 'waffles' en dessous. Pour corriger cela, faites :

```python
from pathlib import Path
cwd = Path.cwd()
# Créer un répertoire avec tous les répertoires parents
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## Chemins Absolus vs Relatifs

Il existe deux façons de spécifier un chemin de fichier.

- Un **chemin absolu**, qui commence toujours par le dossier racine
- Un **chemin relatif**, qui est relatif au répertoire de travail actuel du programme

Il existe également les dossiers point (`.`) et double point (`..`). Ce ne sont pas de vrais dossiers, mais des noms spéciaux qui peuvent être utilisés dans un chemin. Un seul point (“dot”) pour un nom de dossier est un raccourci pour “ce répertoire”. Deux points (“dot-dot”) signifie “le dossier parent.”

### Gestion des chemins absolus

Pour voir si un chemin est un chemin absolu :

```python
from pathlib import Path
# Vérifier si le chemin est absolu
Path('/').is_absolute()
```

```output
True
```

```python
# Les chemins relatifs retournent False
Path('..').is_absolute()
```

```output
False
```

Vous pouvez également extraire un chemin absolu :

```python
from pathlib import Path
# Obtenir le répertoire actuel
print(Path.cwd())
```

```output
/home/labex/project
```

```python
# Résoudre le chemin relatif en chemin absolu
print(Path('..').resolve())
```

```output
/home
```

### Gestion des chemins relatifs

Vous pouvez obtenir un chemin relatif à partir d'un chemin de départ vers un autre chemin.

```python
from pathlib import Path
# Obtenir le chemin relatif à partir du chemin de base
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## Validité du chemin et du fichier

### Vérifier si un fichier/répertoire existe

```python
from pathlib import Path

# Vérifier si le chemin existe
Path('.').exists()
```

```output
True
```

```python
Path('setup.py').exists()
```

```output
True
```

```python
Path('/etc').exists()
```

```output
True
```

```python
Path('nonexistentfile').exists()
```

```output
False
```

### Vérifier si un chemin est un fichier

```python
from pathlib import Path

# Vérifier si le chemin est un fichier
Path('setup.py').is_file()
```

```output
True
```

```python
Path('/home').is_file()
```

```output
False
```

```python
Path('nonexistentfile').is_file()
```

```output
False
```

### Vérifier si un chemin est un répertoire

```python
from pathlib import Path

# Vérifier si le chemin est un répertoire
Path('/').is_dir()
```

```output
True
```

```python
Path('setup.py').is_dir()
```

```output
False
```

```python
Path('/spam').is_dir()
```

```output
False
```

## Obtenir la taille d'un fichier en octets

```python
from pathlib import Path

# Obtenir les statistiques du fichier
stat = Path('/bin/python3.10').stat()
print(stat) # stat contient également d'autres informations sur le fichier
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# Accéder à la taille du fichier à partir de l'objet stat
print(stat.st_size) # taille en octets
```

```output
10024
```

## Lister les répertoires

```python
from pathlib import Path

# Itérer à travers le contenu du répertoire
for f in Path('/usr/bin').iterdir():
    print(f)
```

```output
...
/usr/bin/tiff2rgba
/usr/bin/iconv
/usr/bin/ldd
/usr/bin/cache_restore
/usr/bin/udiskie
/usr/bin/unix2dos
/usr/bin/t1reencode
/usr/bin/epstopdf
/usr/bin/idle3
...
```

## Tailles des fichiers de répertoire

<base-warning>
  <base-warning-title>
    AVERTISSEMENT
  </base-warning-title>
  <base-warning-content>
    Les répertoires eux-mêmes ont également une taille ! Vous voudrez donc vérifier si un chemin est un fichier ou un répertoire en utilisant les méthodes discutées dans la section précédente.
  </base-warning-content>
</base-warning>

```python
from pathlib import Path

# Calculer la taille totale de tous les fichiers dans le répertoire
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

```output
1903178911
```

## Suppression de fichiers et de dossiers

- Appeler `Path.unlink()` supprimera le fichier au chemin spécifié.

- Appeler `Path.rmdir()` supprimera le dossier au chemin spécifié. Ce dossier doit être vide de tout fichier ou dossier.

## Liens pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Feuille de triche : Lecture et Écriture de Fichiers</router-link>
- <router-link to="/modules/os-module">Module : os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
