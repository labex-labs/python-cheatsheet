---
title: 'Fonction intégrée format() de Python - Aide-mémoire Python'
description: "Convertit une valeur en une représentation « formatée », contrôlée par format_spec. L'interprétation de format_spec dépendra du type de l'argument value [...]."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée format() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convertit une valeur en une représentation « formatée », contrôlée par format_spec. L'interprétation de format_spec dépendra du type de l'argument value. [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `format()` en Python est une fonction intégrée polyvalente qui vous permet de créer des chaînes formatées. Elle offre un moyen d'intégrer des valeurs dans une chaîne, de contrôler leur alignement et de spécifier leur présentation, comme le nombre de décimales ou le remplissage.

La fonction <router-link to="/builtin/format">format()</router-link> formate une valeur spécifiée dans un format spécifié.

## Examples

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatting string (faster and easier)
print(f"My name is {name} and I work for {company}.")
```

```output
My name is Micheal and I work for Dunder Mifflin.
My name is Micheal and I work for Dunder Mifflin.
```

## Relevant links

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatage de chaînes</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulation de chaînes</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
