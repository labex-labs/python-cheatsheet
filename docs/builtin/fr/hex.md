---
title: 'Fonction intégrée hex() de Python - Aide-mémoire Python'
description: "Convertit un nombre entier en une chaîne hexadécimale en minuscules préfixée par « 0x ». Si x n'est pas un objet int Python, il doit définir une méthode __index__() qui retourne un entier."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée hex() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convertit un nombre entier en une chaîne hexadécimale en minuscules préfixée par « 0x ». Si x n'est pas un objet Python int, il doit définir une méthode __index__() qui retourne un entier.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `hex()` en Python est une fonction intégrée qui convertit un entier en sa représentation hexadécimale correspondante. La chaîne résultante est préfixée par "0x" pour indiquer qu'il s'agit d'une valeur hexadécimale. Cette fonction est utile lorsque vous devez travailler avec des nombres hexadécimaux, courants dans la programmation de bas niveau, comme lors de la manipulation d'adresses mémoire ou de codes couleur.

## Exemples

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

Sortie :

```plaintext
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Liens pertinents

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatage de chaînes</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
