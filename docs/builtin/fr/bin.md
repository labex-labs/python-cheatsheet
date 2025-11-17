---
title: 'Fonction intégrée bin() de Python - Fiche mémo Python'
description: "Convertit un nombre entier en une chaîne binaire préfixée par « 0b ». Le résultat est une expression Python valide. Si x n'est pas un objet int Python, il doit définir une méthode __index__() qui retourne un entier."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python bin()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Convertit un nombre entier en une chaîne binaire préfixée par « 0b ». Le résultat est une expression Python valide. Si x n'est pas un objet Python int, il doit définir une méthode <code>__index__()</code> qui retourne un entier.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `bin()` convertit un entier en sa représentation binaire. La chaîne résultante est préfixée par "0b" pour indiquer qu'il s'agit d'un nombre binaire.

### Exemples

Voici quelques exemples d'utilisation de `bin()` :

```python
# Convert integers to binary
print(bin(2))
print(bin(7))
print(bin(1))
print(bin(10))
print(bin(100))
print(bin(1000))
```

Sortie :

```plaintext
0b10
0b111
0b1
0b1010
0b1100100
0b1111101000
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet : Formatage de chaînes</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
