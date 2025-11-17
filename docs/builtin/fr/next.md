---
title: 'Fonction intégrée Python next() - Aide-mémoire Python'
description: "Récupère l'élément suivant de l'itérateur en appelant sa méthode __next__(). Si une valeur par défaut est fournie, elle est retournée si l'itérateur est épuisé, sinon StopIteration est levée."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python next()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Récupère l'élément suivant de l'itérateur en appelant sa méthode __next__(). Si default est fourni, il est retourné si l'itérateur est épuisé, sinon StopIteration est levée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `next()` récupère l'élément suivant d'un itérateur. Si l'itérateur est épuisé, elle lève une exception `StopIteration`.

Vous pouvez également fournir une valeur par défaut à retourner si l'itérateur est épuisé, ce qui empêche l'exception `StopIteration`.

### Examples

**Utilisation de `next()` avec un itérateur :**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

Sortie :

```plaintext
1
2
Iterator is exhausted
```

**Utilisation de `next()` avec une valeur par défaut :**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

Sortie :

```plaintext
1
default
```

Plus d'exemples :

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

Sortie :

```plaintext
1
2
3
```

## Liens pertinents

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle (boucles for)</router-link>
- <router-link to="/modules/itertools-module">Module : itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
