---
title: Module Argparse Python - Aide-mémoire Python
description: Le module `argparse` vous aide à construire des interfaces en ligne de commande avec des arguments positionnels, des options, des drapeaux et des messages d’aide.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Argparse Python
</base-title>

Le module `argparse` vous aide à construire des interfaces en ligne de commande avec des arguments positionnels, des options, des drapeaux et des messages d’aide.

Le module a été ajouté dans Python 3.2. Si vous utilisez Python 3.14, `ArgumentParser` prend aussi en charge les paramètres `suggest_on_error` et `color`.

```python
import argparse
```

Utilisez `argparse` lorsque vous voulez qu’un fichier Python se comporte comme un petit programme de terminal :

```bash
python greet.py Ada --count 2
```

Le module lit le texte situé après le nom du script, le valide et vous renvoie un objet Python contenant les valeurs analysées.

## Créer un analyseur

`ArgumentParser` stocke les arguments acceptés par votre programme.

```python
import argparse

parser = argparse.ArgumentParser(
    prog='greet',
    description='Greet a user from the command line',
)

parser.print_help()
```

```output
usage: greet [-h]

Greet a user from the command line

options:
  -h, --help  show this help message and exit
```

## Arguments positionnels

Les arguments positionnels sont obligatoires par défaut.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')

args = parser.parse_args(['Ada'])
print(args.name)
```

```output
Ada
```

## Arguments optionnels et drapeaux

Les arguments optionnels commencent généralement par `-` ou `--`.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--count', type=int, default=1)
parser.add_argument('-v', '--verbose', action='store_true')

args = parser.parse_args(['--count', '3', '--verbose'])
print(args.count)
print(args.verbose)
```

```output
3
True
```

## Choix et conversion de type

Vous pouvez valider les valeurs au moment de l’analyse.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--mode', choices=['dev', 'prod'])
parser.add_argument('--port', type=int, default=8000)

args = parser.parse_args(['--mode', 'dev', '--port', '9000'])
print(args.mode)
print(args.port)
```

```output
dev
9000
```

## Sous-commandes

Les sous-commandes sont utiles pour des outils comme `git commit` ou `docker run`.

```python
import argparse

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command', required=True)

build_parser = subparsers.add_parser('build')
build_parser.add_argument('--release', action='store_true')

args = parser.parse_args(['build', '--release'])
print(args.command)
print(args.release)
```

```output
build
True
```

## Un petit exemple complet

Cet exemple accepte un nom et répète le message de bienvenue.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')
parser.add_argument('--count', type=int, default=1)

args = parser.parse_args(['Ada', '--count', '2'])

for _ in range(args.count):
    print(f'Hello {args.name}!')
```

```output
Hello Ada!
Hello Ada!
```

## Liens pertinents

- <router-link to="/modules/sys-module">Module : sys</router-link>
- <router-link to="/cheatsheet/functions">Aide-mémoire : Fonctions</router-link>
- <router-link to="/cheatsheet/control-flow">Aide-mémoire : Flux de contrôle</router-link>
