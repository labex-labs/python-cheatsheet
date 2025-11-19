---
title: 'Fonction intégrée Python chr() - Aide-mémoire Python'
description: "Retourne la chaîne représentant un caractère dont le point de code Unicode est l'entier i. Par exemple, chr(97) retourne la chaîne 'a', tandis que chr(8364) retourne la chaîne '€'. C'est l'inverse de ord()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python chr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne la chaîne représentant un caractère dont le point de code Unicode est l'entier i. Par exemple, chr(97) retourne la chaîne 'a', tandis que chr(8364) retourne la chaîne '€'. C'est l'inverse de ord().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `chr()` en Python est une fonction intégrée qui prend un entier comme argument et retourne une chaîne représentant le caractère Unicode correspondant.

L'entier passé à la fonction `chr()` doit être dans la plage de 0 à 65535, ce qui correspond à la plage des caractères Unicode valides.

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

```output
a
A
x
```

La fonction `chr()` est l'inverse de la fonction `ord()`, qui prend un seul caractère comme argument et retourne l'entier correspondant.

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

```output
97
65
120
```

La fonction `chr()` peut être utile lorsque vous travaillez avec des données de texte et de caractères, en particulier lorsque vous travaillez avec des caractères Unicode. Par exemple, vous pouvez l'utiliser pour convertir un entier représentant un point de code Unicode en son caractère correspondant, ou pour générer une chaîne de caractères à partir d'une plage d'entiers.

## Liens pertinents

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulation des chaînes</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
