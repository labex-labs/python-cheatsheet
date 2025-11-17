---
title: 'Fonction intégrée range() en Python - Aide-mémoire Python'
description: "Plutôt qu'une fonction, range est en réalité un type de séquence immuable, comme documenté dans Plages et types de séquences — list, tuple, range."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python range()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Plutôt que d'être une fonction, range est en fait un type de séquence immuable, comme documenté dans Ranges and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Le type `range` est couramment utilisé dans les boucles `for` pour boucler un nombre spécifique de fois. `range` prend trois paramètres : `start`, `stop` et `step`. Chaque paramètre doit être un entier (soit le <router-link to="/builtin/int">int</router-link> intégré, soit tout objet implémentant la méthode spéciale **index**()).

S'il n'y a qu'un seul paramètre, il représente le paramètre `stop`. Si le paramètre `step` est omis, il prendra par défaut la valeur `1`. Si le paramètre `start` est omis, il prendra par défaut la valeur `0`.

Les plages supportent les indices négatifs, mais ceux-ci sont interprétés comme un indexage à partir de la fin de la séquence déterminée par les indices positifs.

\*\*\*L'avantage du type range par rapport à une <router-link to="/builtin/list">list</router-link> ou un <router-link to="/builtin/tuple">tuple</router-link> ordinaire est qu'un objet range occupera toujours la même (petite) quantité de mémoire, quelle que soit la taille de la plage qu'il représente.

## Paramètres d'entrée

Les plages implémentent toutes les opérations de séquence courantes, à l'exception de la concaténation et de la répétition (en raison du fait que les objets range ne peuvent représenter que des séquences qui suivent un modèle strict, et que la répétition et la concaténation violeraient généralement ce modèle).

`start` :

- La valeur du paramètre de début
- Si non fourni, le paramètre prendra la valeur par défaut 0
- La valeur du paramètre est _inclusive_

`stop`

- La valeur du paramètre d'arrêt
- Le seul paramètre qui est requis
- La valeur du paramètre est _exclusive_

`step`

- La valeur du paramètre de pas
- Si non fourni, le paramètre prendra la valeur par défaut 1

## Exemples

Plage avec seulement le paramètre `stop` spécifié

```python
for i in range(5):
    print(i)
```

Sortie :

```plaintext
0
1
2
3
4
```

Plage avec les paramètres `start` et `stop`

```python
for i in range(1, 8):
    print(i)
```

Sortie :

```plaintext
1
2
3
4
5
6
7
```

Plage avec tous les paramètres spécifiés

```python
for i in range(0, 30, 5):
    print(i)
```

Sortie :

```plaintext
0
5
10
15
20
25
```

Plage avec tous les paramètres, où le paramètre `stop` n'est pas divisible par le paramètre `step`

```python
for i in range(0, 10, 3):
    print(i)
```

Sortie :

```plaintext
0
3
6
9
```

Plage avec tous les paramètres, où les paramètres `stop` et `step` sont négatifs

```python
for i in range(0, -6, -1):
    print(i)
```

Sortie :

```plaintext
0
-1
-2
-3
-4
-5
```

Deux exemples où le paramètre `stop` est défini à 0

```python
for i in range(0):
    print(i)
```

Sortie :

```plaintext
(no output)
```

```python
for i in range(1, 0):
    print(i)
```

Sortie :

```plaintext
(no output)
```

## Liens pertinents

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle (boucles for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/modules/itertools-module">Module : itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
