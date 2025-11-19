---
title: 'Fonction intégrée oct() de Python - Aide-mémoire Python'
description: "Convertit un nombre entier en une chaîne octale préfixée par « 0o ». Le résultat est une expression Python valide. Si x n'est pas un objet int Python, il doit définir une méthode __index__() qui retourne un entier."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python oct()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convertit un nombre entier en une chaîne octale préfixée par « 0o ». Le résultat est une expression Python valide. Si x n'est pas un objet <router-link to="/builtin/int">int</router-link> Python, il doit définir une méthode __index__() qui retourne un entier.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `oct()` convertit un entier en sa représentation octale. La chaîne résultante est préfixée par "0o" pour indiquer qu'il s'agit d'un nombre octal.

### Exemples

Voici quelques exemples d'utilisation de `oct()` :

```python
# Convert integers to octal
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

```output
0o10
0o12
0o144
0o1
0o1750
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet : Formatage de chaînes</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
