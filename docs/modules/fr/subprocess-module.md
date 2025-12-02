---
title: 'Module Subprocess Python - Aide-mémoire Python'
description: 'Le module subprocess permet de démarrer et de gérer des processus système.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Python Subprocess
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) est un module intégré qui nous permet de lancer de nouveaux processus système, de nous connecter à leurs flux d'entrée/sortie/erreur et d'obtenir leurs codes de retour.

```python
import subprocess
```

## Exécution d'une Commande Système

La fonction `run` est utilisée pour exécuter une commande système.

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

Si vous souhaitez exécuter une commande sous forme de chaîne unique au lieu d'une liste, utilisez :

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

Les deux imprimeront automatiquement la sortie dans le terminal.

<base-warning>
  <base-warning-title>
    ATTENTION
  </base-warning-title>
  <base-warning-content>
    Évitez `shell=True` avec des entrées non fiables (risque d'injection shell).
  </base-warning-content>
</base-warning>

## Capture de la Sortie

Pour capturer la sortie, définissez `capture_output` à `True` :

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

Ici, `text=True` indique à la fonction de lire la sortie sous forme de texte au lieu d'octets.

Un `returncode` de 0 indique le succès ; toute valeur non nulle indique une erreur.

## Vérification des Erreurs

Bien que nous puissions vérifier le succès à l'aide du code de retour, il existe une manière plus idiomatique en Python de le faire :

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

Si `check` est défini sur `True` et que le code de retour n'est pas 0 (opération infructueuse), subprocess lèvera une `subprocess.CalledProcessError`, qui peut être gérée de la manière habituelle à l'aide d'un bloc except.

## Exécution de Commandes avec Délai d'Attente (Timeout)

Vous pouvez définir un délai d'attente pour un processus. S'il prend plus de temps que le temps spécifié, `subprocess.TimeoutExpired` est levé :

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## Écriture de la Sortie dans un Fichier

Vous pouvez rediriger la sortie vers un fichier en définissant `stdout` (et `stderr`, si nécessaire) sur un objet fichier :

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

Ici, la sortie normale et les erreurs apparaîtront dans le fichier, dans l'ordre où elles sont générées.

**Note :** `text=True` est utile lorsque vous souhaitez manipuler la sortie sous forme de chaîne en Python. Ce n'est pas strictement nécessaire lorsque la sortie est redirigée directement vers un fichier.

## Liens Pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet : Lecture et Écriture de Fichiers</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet : Chemin de Fichier et de Répertoire</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet : Gestion des Exceptions</router-link>
- <router-link to="/modules/os-module">Module : os</router-link>
- <router-link to="/builtin/open">open()</router-link>
