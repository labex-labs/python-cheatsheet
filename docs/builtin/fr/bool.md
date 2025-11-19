---
title: 'Fonction intégrée Python bool() - Aide-mémoire Python'
description: 'Retourne une valeur booléenne (True ou False). x est converti selon la procédure standard de test de vérité. Si x est faux ou omis, retourne False ; sinon, retourne True. La classe bool est une sous-classe de int et ne peut être davantage sous-classée. Ses seules instances sont False et True.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python bool()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne une valeur booléenne, True ou False. x est converti en utilisant la procédure standard de test de vérité. Si x est faux ou omis, ceci retourne False ; sinon, ceci retourne True. La classe bool est une sous-classe de int. Elle ne peut pas être davantage sous-classée. Ses seules instances sont False et True.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `bool()` en Python est une fonction intégrée qui convertit une valeur en un booléen (`True` ou `False`). Elle suit la procédure standard de test de vérité, où les valeurs comme `0`, `None` et les collections vides sont considérées comme `False`, tandis que la plupart des autres valeurs sont `True`. Ceci est fondamental pour contrôler le flux de votre programme avec des instructions conditionnelles.

## Exemples

### Valeurs Fausse (Falsy Values)

Ces valeurs sont considérées comme `False` :

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # chaîne vide
bool([])      # liste vide
bool({})      # dictionnaire vide
bool(set())   # ensemble vide
```

```output
False
False
False
False
False
False
False
False
```

### Valeurs Vraie (Truthy Values)

La plupart des autres valeurs sont considérées comme `True` :

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

```output
True
True
True
True
True
True
```

## Liens pertinents

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
