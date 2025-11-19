---
title: 'Fonction intégrée Python str() - Fiche mémo Python'
description: "Retourne une version chaîne de l'objet. Si aucun objet n'est fourni, retourne une chaîne vide. Sinon, le comportement de str() dépend si l'encodage ou les erreurs sont spécifiés."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python str()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne une version chaîne de caractères de l'objet. Si aucun objet n'est fourni, retourne la chaîne vide. Sinon, le comportement de str() dépend si un encodage ou des erreurs sont spécifiés.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `str()` en Python est une fonction intégrée qui retourne une version chaîne de caractères d'un objet. Si aucun objet n'est fourni, elle retourne une chaîne vide. C'est une fonction polyvalente pour convertir d'autres types de données en chaînes de caractères.

## Exemples

```python
# transformer un entier en chaîne de caractères
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

```output
29
<class 'str'>
```

```python
# transformer un flottant en chaîne de caractères
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

```output
-3.14
<class 'str'>
```

```python
# retourner une chaîne de caractères vide
str()
```

```output
''
```

## Liens pertinents

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet : Manipulation des chaînes de caractères</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet : Formatage des chaînes de caractères</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
