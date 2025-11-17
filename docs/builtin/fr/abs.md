---
title: 'Fonction intégrée abs() de Python - Fiche mémo Python'
description: "Retourne la valeur absolue d'un nombre. L'argument peut être un entier, un nombre à virgule flottante ou un objet implémentant __abs__(). Si l'argument est un nombre complexe, sa magnitude est retournée."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python abs()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne la valeur absolue d'un nombre. L'argument peut être un entier, un nombre à virgule flottante, ou un objet implémentant <code>__abs__()</code>. Si l'argument est un nombre complexe, sa magnitude est retournée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `abs()` en Python est une fonction intégrée qui retourne la valeur absolue d'un nombre. Elle peut gérer les entiers, les nombres à virgule flottante, et même les nombres complexes (en retournant leur magnitude). Cette fonction est utile lorsque vous avez besoin de vous assurer qu'une valeur est positive, quel que soit son signe d'origine.

### Exemples

```python
# Pour les entiers
abs(-1)
abs(0)

# Pour les flottants
abs(-3.14)

# Pour les nombres complexes (retourne la magnitude)
abs(3 + 4j)

# Pour d'autres systèmes numériques
abs(0x10)  # Hexadécimal
abs(0b10)  # Binaire
abs(0o20)  # Octal
```

Sortie :

```plaintext
1
0
3.14
5.0
16
2
16
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
