---
title: 'Fonction intégrée eval() en Python - Aide-mémoire Python'
description: "Les arguments sont une chaîne de caractères et des dictionnaires optionnels globals et locals. Si fournis, globals doit être un dictionnaire. Si fourni, locals peut être n'importe quel objet de mappage."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python eval()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Les arguments sont une chaîne de caractères et des dictionnaires optionnels pour les variables globales et locales. Si elles sont fournies, `globals` doit être un dictionnaire. Si elle est fournie, `locals` peut être n'importe quel objet de type mappage.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `eval()` en Python est une fonction intégrée qui analyse une chaîne de caractères comme une expression Python et l'évalue. Elle peut être utilisée pour exécuter du code Python arbitraire à partir d'une chaîne, ce qui peut être à la fois puissant et risqué. Elle est souvent utilisée dans des situations où vous devez évaluer des expressions générées dynamiquement, mais elle doit être utilisée avec prudence en raison de vulnérabilités de sécurité potentielles.

## Examples

```python
eval('1 + 4')
```

```output
5
```

```python
eval('print("Hello World!")')
```

```output
Hello World!
```

```python
x = 10
eval('x == 10')
```

```output
True
```

La fonction `eval()` peut également être utilisée avec la fonction <router-link to="/builtin/print">print()</router-link> pour afficher la sortie sur la console.

## Relevant links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
