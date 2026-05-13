---
title: "Module Sys Python - Aide-mémoire Python"
description: "Le module `sys` donne accès à des détails d’exécution Python comme les arguments de ligne de commande, le chemin d’importation et la version courante de l’interpréteur."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Sys Python
</base-title>

Le module `sys` donne accès à des détails d’exécution Python comme les arguments de ligne de commande, le chemin d’importation et la version courante de l’interpréteur.

```python
import sys
```

Utilisez `sys` lorsque votre code doit parler à l’interpréteur Python lui-même, et pas seulement à vos objets d’application.

## Arguments de ligne de commande

`sys.argv` est une liste d’arguments passés au script courant.

```python
import sys

sys.argv = ['main.py', '--debug', 'app']
print(sys.argv[0])
print(sys.argv[1:])
```

```output
main.py
['--debug', 'app']
```

Pour de vraies applications en ligne de commande, préférez <router-link to="/modules/argparse-module">argparse</router-link>. Il repose sur la même idée, mais ajoute la validation et des messages d’aide.

## Version de Python

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## Chemin de recherche des imports

`sys.path` contrôle l’endroit où Python cherche les modules.

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

Les premières entrées de `sys.path` incluent généralement votre projet courant, ce qui permet d’importer des modules locaux.

## Entrée et sortie standard

`sys.stdin`, `sys.stdout` et `sys.stderr` sont des objets de type fichier utilisés par l’interpréteur.

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## Quitter un programme

```python
import sys

try:
    sys.exit(0)
except SystemExit as exc:
    print(exc.code)
```

```output
0
```

## Liens pertinents

- <router-link to="/modules/argparse-module">Module : argparse</router-link>
- <router-link to="/modules/subprocess-module">Module : subprocess</router-link>
- <router-link to="/cheatsheet/main">Aide-mémoire : Main : Script de niveau supérieur</router-link>
