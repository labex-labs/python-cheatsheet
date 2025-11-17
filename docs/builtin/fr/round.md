---
title: 'Fonction intégrée round() de Python - Aide-mémoire Python'
description: "Retourne le nombre arrondi à la précision ndigits après la virgule. Si ndigits est omis ou est None, elle retourne l'entier le plus proche de sa valeur."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python round()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne le nombre arrondi à la précision ndigits après la virgule. Si ndigits est omis ou est None, il retourne l'entier le plus proche de son entrée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `round()` arrondit un nombre à un nombre spécifié de décimales. Si le nombre de décimales n'est pas spécifié, elle arrondit à l'entier le plus proche.

Notez que `round()` utilise la règle du « arrondi à l'entier pair le plus proche » pour les nombres se terminant par .5, ce qui signifie qu'elle arrondira à l'entier pair le plus proche.

### Exemples

```python
# Arrondir à l'entier le plus proche
print(round(3.14))
print(round(3.8))

# Arrondir à un nombre spécifié de décimales
print(round(3.14159, 2))

# "Arrondi à l'entier pair le plus proche"
print(round(2.5))
print(round(3.5))
```

Sortie :

```plaintext
3
4
3.14
2
4
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet : Formatage de chaînes</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
