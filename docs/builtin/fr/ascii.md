---
title: 'Fonction intégrée ascii() de Python - Aide-mémoire Python'
description: "Comme repr(), retourne une chaîne contenant une représentation imprimable d'un objet, mais échappe les caractères non-ASCII dans la chaîne retournée par repr() en utilisant les échappements \\x, \\u, ou \\U."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python ascii()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Comme <code>repr()</code>, retourne une chaîne contenant une représentation imprimable d'un objet, mais échappe les caractères non-ASCII dans la chaîne retournée par <code>repr()</code> en utilisant les séquences d'échappement <code>\x</code>, <code>\u</code>, ou <code>\U</code>.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `ascii()` en Python est une fonction intégrée qui retourne une chaîne contenant une représentation imprimable d'un objet, similaire à `repr()`. Cependant, `ascii()` échappe tous les caractères non-ASCII avec des séquences d'échappement `\x`, `\u`, ou `\U`. Ceci est utile pour s'assurer qu'une chaîne est sûre à utiliser dans un environnement exclusivement ASCII.

## Exemples

```python
# Pour un caractère ASCII, c'est la même chose que repr()
ascii('A')

# Pour un caractère non-ASCII, il est échappé
ascii('ë')

# À titre de comparaison, repr() ne l'échapperait pas
repr('ë')

# Fonctionne aussi sur les itérables
ascii(['A', 'ë'])
```

```output
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## Liens pertinents

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet : Manipulation des chaînes</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
