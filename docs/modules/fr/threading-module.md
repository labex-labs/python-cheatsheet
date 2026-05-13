---
title: Module Threading Python - Aide-mémoire Python
description: Le module `threading` vous permet d’exécuter plusieurs threads dans le même processus et de les coordonner avec des verrous.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Threading Python
</base-title>

Le module `threading` vous permet d’exécuter plusieurs threads dans le même processus et de les coordonner avec des verrous.

```python
import threading
```

Les threads sont utiles pour attendre des E/S, comme des requêtes réseau ou des opérations sur des fichiers. Ils ne sont généralement pas la meilleure façon d’accélérer du code Python fortement consommateur de CPU.

## Démarrer un thread

```python
import threading

def worker():
    print('working')

thread = threading.Thread(target=worker)
thread.start()
thread.join()
```

```output
working
```

`start()` lance le thread. `join()` attend qu’il se termine avant que le programme principal continue.

## Passer des arguments

```python
import threading

def greet(name):
    print(f'hello {name}')

thread = threading.Thread(target=greet, args=('Ada',))
thread.start()
thread.join()
```

```output
hello Ada
```

Utilisez `args` pour les arguments positionnels et `kwargs` pour les arguments nommés.

## Utiliser un verrou

Les verrous aident à protéger l’état partagé.

```python
import threading

counter = 0
lock = threading.Lock()

with lock:
    counter += 1

print(counter)
```

```output
1
```

## Exécuter plusieurs threads

```python
import threading

results = []
lock = threading.Lock()

def worker(number):
    with lock:
        results.append(f'worker {number}')

threads = []
for number in range(3):
    thread = threading.Thread(target=worker, args=(number,))
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print(sorted(results))
```

```output
['worker 0', 'worker 1', 'worker 2']
```

L’ordre réel de fin peut varier car les threads s’exécutent en parallèle, donc cet exemple trie le résultat avant de l’afficher.

## Liens pertinents

- <router-link to="/modules/subprocess-module">Module : subprocess</router-link>
- <router-link to="/cheatsheet/functions">Aide-mémoire : Fonctions</router-link>
- <router-link to="/cheatsheet/context-manager">Aide-mémoire : Gestionnaires de contexte</router-link>
