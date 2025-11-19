---
title: 'Fonction intégrée print() en Python - Aide-mémoire Python'
description: "Imprime des objets dans le flux de texte fichier, séparés par sep et suivis de end. sep, end, file et flush, s'ils sont présents, doivent être fournis comme arguments par mot-clé."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python print()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Affiche les objets dans le flux de texte fichier, séparés par sep et suivis de end. sep, end, file, et flush, s'ils sont présents, doivent être donnés comme arguments par mot-clé.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `print()` écrit la valeur de l'argument(s) qu'elle reçoit. [...] elle gère les arguments multiples, les quantités à virgule flottante et les chaînes de caractères. Les chaînes sont imprimées sans guillemets, et un espace est inséré entre les éléments, vous pouvez donc formater joliment les choses :

```python
print('Hello world!')
```

```output
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

```output
Hello world! 1
```

## Le mot-clé end

L'argument mot-clé `end` peut être utilisé pour éviter le saut de ligne après la sortie, ou pour terminer la sortie avec une chaîne différente :

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

```output
printed-with-a-dash-in-between-
```

## Le mot-clé sep

Le mot-clé `sep` spécifie comment séparer les objets, s'il y en a plus d'un :

```python
print('cats', 'dogs', 'mice', sep=',')
```

```output
cats,dogs,mice
```

## Liens pertinents

- <router-link to="/cheatsheet/string-formatting">Cheatsheet : Formatage de chaînes</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet : Manipulation de chaînes</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
