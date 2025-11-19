---
title: 'Fonction intégrée Python type() - Aide-mémoire Python'
description: "Avec un argument, retourne le type d'un objet. La valeur de retour est un objet type et généralement le même objet que celui retourné par object.__class__."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python type()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Avec un seul argument, retourne le type d'un objet. La valeur de retour est un objet de type et généralement le même objet que celui retourné par object.__class__.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `type()` en Python est une fonction intégrée qui retourne le type d'un objet. C'est un outil fondamental pour comprendre les types de données avec lesquels vous travaillez en Python.

## Examples

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

```output
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## Relevant links

- <router-link to="/blog/python-data-types/">Types de données Python</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
