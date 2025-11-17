---
title: 'Fonction intégrée Python int() - Aide-mémoire Python'
description: "Retourne un objet entier construit à partir d'un nombre ou d'une chaîne x, ou retourne 0 si aucun argument n'est fourni."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python int()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un objet entier construit à partir d'un nombre ou d'une chaîne x, ou retourne 0 si aucun argument n'est donné.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `int()` en Python est une fonction intégrée qui vous permet de convertir une valeur en un entier. Elle peut prendre une chaîne de caractères ou un nombre comme argument et retournera l'équivalent entier. Ceci est particulièrement utile lorsque vous avez besoin d'effectuer des opérations mathématiques qui nécessitent des nombres entiers ou lorsque vous devez vous assurer qu'une valeur est du type entier.

## Exemples

```python
# transformer une chaîne en entier
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

Sortie :

```plaintext
29
<class 'int'>
```

```python
# transformer un float en entier
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

Sortie :

```plaintext
-3
<class 'int'>
```

```python
# retourner 0 si aucun argument n'est donné
int()
```

Sortie :

```plaintext
0
```

## Liens pertinents

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
