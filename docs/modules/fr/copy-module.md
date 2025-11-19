---
title: 'Module Copie Python - Aide-mémoire Python'
description: 'Le module Copy fournit des fonctions pour copier différents éléments (listes, objets, tableaux, etc.). Il permet de créer des copies superficielles (shallow) et des copies profondes (deep).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Copy Python
</base-title>

Le module Copy est un ensemble de fonctions liées à la copie de différents éléments d'une liste, d'objets, de tableaux, etc. Il peut être utilisé pour créer des copies superficielles (shallow copies) ainsi que des copies profondes (deep copies).

<base-disclaimer>
  <base-disclaimer-title>
    De la documentation Python 3 <a target="_blank" href="https://docs.python.org/3/library/copy.html">ici</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Les instructions d'affectation en Python ne copient pas les objets, elles créent des liaisons entre une cible et un objet. Pour les collections qui sont mutables ou contiennent des éléments mutables, une copie est parfois nécessaire afin de pouvoir modifier une copie sans modifier l'autre. Ce module fournit des opérations génériques de copie <b>superficielle</b> (shallow) et <b>profonde</b> (deep).
  </base-disclaimer-content>
</base-disclaimer>

## Opérations de copie superficielle (Shallow copy)

Une copie superficielle construit un nouvel objet composé, puis y insère (dans la mesure du possible) des références aux objets trouvés dans l'original.

copy.copy(x)
Retourne une copie superficielle de x.

```python
import copy
a = [[1],[2],[3]]
# Créer une copie superficielle (les listes imbriquées sont toujours référencées)
b = copy.copy(a)

a
```

```output
[[1], [2], [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

### Sans importer le module copy, vous ne pouvez pas l'utiliser

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## Opérations de copie profonde (Deep copy)

Une copie profonde construit un nouvel objet composé, puis y insère récursivement des copies des objets trouvés dans l'original.

copy.deepcopy(x[, memo])
Retourne une copie profonde de x.

```python
import copy
a = [[1],[2],[3]]
# Créer une copie profonde (copie complètement indépendante)
b = copy.deepcopy(a)

# Modifier l'original
a[0][0] = 0
a[1] = None

a
```

```output
[[0], None, [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet : Dictionnaires</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
