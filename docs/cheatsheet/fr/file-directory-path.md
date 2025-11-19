---
title: 'Cheatsheet : Chemins de Fichiers et de Répertoires - Python'
description: 'Python utilise deux modules principaux pour la manipulation des chemins : le module os.path et le module pathlib.'
labUrl: 'https://labex.io/fr/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Gestion des chemins de fichiers et de répertoires
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Pour une plongée approfondie dans les opérations pratiques du système de fichiers, consultez notre article de blog : <router-link to="/blog/python-pathlib-essentials">10 Opérations Essentielles du Système de Fichiers que Tout Développeur Devrait Connaître</router-link>.

Il existe deux modules principaux en Python qui traitent de la manipulation des chemins.
L'un est le module <router-link to="/modules/os-module">os.path</router-link> et l'autre est le module <router-link to="/modules/pathlib-module">pathlib</router-link>.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Module OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> offre beaucoup plus de fonctionnalités que celles énumérées ci-dessus, comme obtenir le nom du fichier, obtenir l'extension du fichier, lire/écrire un fichier sans l'ouvrir manuellement, etc. Consultez la <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentation officielle</a> si vous avez l'intention d'en savoir plus.
  </base-disclaimer-content>
</base-disclaimer>

## Chemins Linux et Windows

Sur Windows, les chemins sont écrits en utilisant des barres obliques inverses (`\`) comme séparateur entre les noms de dossiers. Sur les systèmes d'exploitation basés sur Unix tels que macOS, Linux et BSD, la barre oblique avant (`/`) est utilisée comme séparateur de chemin. Joindre des chemins peut être un casse-tête si votre code doit fonctionner sur différentes plateformes.

Heureusement, le module `pathlib` de Python fournit un moyen facile de gérer cela.

Utilisation de `pathlib` sur \*nix :

```python
# pathlib.Path: gestion de chemins multiplateformes
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # Joindre les composants du chemin
```

```output
usr/bin/spam
```

`pathlib` fournit également un raccourci pour `joinpath` en utilisant l'opérateur `/` :

```python
# Opérateur Path (/): moyen pratique de joindre des chemins (multiplateforme)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # Utiliser l'opérateur / au lieu de joinpath()
```

```output
usr/bin/spam
```

Remarquez que le séparateur de chemin est différent entre Windows et les systèmes d'exploitation basés sur Unix, c'est pourquoi vous voulez utiliser `pathlib` au lieu d'ajouter des chaînes de caractères ensemble pour joindre des chemins.

Joindre des chemins est utile si vous devez créer différents chemins de fichiers sous le même répertoire.

Utilisation de `pathlib` sur \*nix :

```python
# Path.home(): obtenir le répertoire personnel de l'utilisateur, combiner avec des noms de fichiers
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # Obtenir le chemin du répertoire personnel
for filename in my_files:
    print(home / filename)  # Combiner le chemin personnel avec chaque nom de fichier
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Le répertoire de travail actuel

Vous pouvez obtenir le répertoire de travail actuel en utilisant `pathlib` :

```python
# Path.cwd(): obtenir le répertoire de travail actuel
from pathlib import Path

print(Path.cwd())  # Retourne le répertoire de travail actuel sous forme d'objet Path
```

```output
/home/labex/project
```

## Création de nouveaux dossiers

Utilisation de `pathlib` sur \*nix :

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

Oh non, nous avons une erreur gênante ! La raison est que le répertoire 'delicious' n'existe pas, nous ne pouvons donc pas créer les répertoires 'walnut' et 'waffles' en dessous. Pour corriger cela, faites :

```python
# mkdir(parents=True): créer le répertoire et tous les répertoires parents si nécessaire
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # Créer des répertoires imbriqués
```

Et tout va bien :)

## Chemins absolus vs relatifs

Il existe deux façons de spécifier un chemin de fichier.

- Un **chemin absolu**, qui commence toujours par le dossier racine
- Un **chemin relatif**, qui est relatif au répertoire de travail actuel du programme

Il existe également les dossiers point (`.`) et double point (`..`). Ce ne sont pas de vrais dossiers, mais des noms spéciaux qui peuvent être utilisés dans un chemin. Un seul point (“dot”) pour un nom de dossier est un raccourci pour “ce répertoire”. Deux points (“dot-dot”) signifient “le dossier parent”.

### Gestion des chemins absolus

Pour voir si un chemin est un chemin absolu en utilisant `pathlib` :

```python
from pathlib import Path
Path('/').is_absolute()
```

```output
True
```

```python
Path('..').is_absolute()
```

```output
False
```

Vous pouvez extraire un chemin absolu avec `pathlib` :

```python
from pathlib import Path
print(Path.cwd())
```

```output
/home/labex/project
```

```python
print(Path('..').resolve())
```

```output
/home
```

### Gestion des chemins relatifs

Vous pouvez obtenir un chemin relatif à partir d'un chemin de départ vers un autre chemin en utilisant `pathlib` :

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## Validité du chemin et du fichier

### Vérification de l'existence d'un fichier/répertoire

Utilisation de `pathlib` sur \*nix :

```python
from pathlib import Path

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

### Vérification si un chemin est un fichier

Utilisation de `pathlib` sur \*nix :

```python
from pathlib import Path

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

### Vérification si un chemin est un répertoire

Utilisation de `pathlib` sur \*nix :

```python
from pathlib import Path

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

## Obtention de la taille d'un fichier en octets

Utilisation de `pathlib` sur \*nix :

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat contient également d'autres informations sur le fichier
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # taille en octets
```

```output
10024
```

## Liste des répertoires

Liste du contenu d'un répertoire en utilisant `pathlib` sur \*nix :

```python
from pathlib import Path

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

Utilisation de `pathlib` sur \*nix :

```python
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

```output
1903178911
```

## Copie de fichiers et de dossiers

Le module `shutil` fournit des fonctions pour copier des fichiers, ainsi que des dossiers entiers.

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

```output
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

```output
/tmp/delicious/eggs2.txt
```

Alors que `shutil.copy()` copiera un seul fichier, `shutil.copytree()` copiera un dossier entier et tous les dossiers et fichiers qu'il contient :

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

```output
/tmp/bacon_backup
```

## Déplacement et renommage

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs/bacon.txt
```

Le chemin de destination peut également spécifier un nom de fichier. Dans l'exemple suivant, le fichier source est déplacé et renommé :

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

```output
/tmp/eggs/new_bacon.txt
```

S'il n'y a pas de dossier eggs, alors `move()` renommera bacon.txt en un fichier nommé eggs :

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs
```

## Suppression de fichiers et de dossiers

- Appeler `Path.unlink()` supprimera le fichier au chemin spécifié.
- Appeler `Path.rmdir()` supprimera le dossier au chemin spécifié. Ce dossier doit être vide de tout fichier ou dossier.
- Appeler `shutil.rmtree(path)` supprimera le dossier au chemin spécifié, et tous les fichiers et dossiers qu'il contient seront également supprimés.

## Parcours d'une arborescence de répertoires

L'objet `Path` possède une méthode `rglob()` pour itérer récursivement sur les fichiers et les répertoires.

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

```output
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## Liens pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Lecture et Écriture de Fichiers</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Opérations Essentielles du Système de Fichiers que Tout Développeur Devrait Connaître</router-link>
- <router-link to="/builtin/open">open()</router-link>
