---
title: 'Fonction intégrée Python __import__() - Fiche mémo Python'
description: "Cette fonction est appelée par l'instruction import. Elle peut être remplacée [...] pour modifier la sémantique de l'instruction import, mais cela est fortement déconseillé car il est généralement plus simple d'utiliser des crochets d'importation [...]. L'utilisation directe de __import__() est également découragée au profit de importlib.import_module()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python `__import__`
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Cette fonction est invoquée par l'instruction import. Elle peut être remplacée [...] afin de modifier la sémantique de l'instruction import, mais cela est fortement déconseillé car il est généralement plus simple d'utiliser des crochets d'importation [...]. L'utilisation directe de `__import__()` est également déconseillée au profit de `importlib.import_module()`.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `__import__()` est la fonction sous-jacente qui est appelée par l'instruction `import`. Bien qu'il soit possible de l'utiliser directement, c'est généralement déconseillé. Pour importer des modules dynamiquement, la fonction `importlib.import_module()` est l'approche recommandée.

### Exemple

Voici comment vous pourriez utiliser `__import__()` pour importer dynamiquement le module `math` :

```python
# Importer dynamiquement le module 'math'
math_module = __import__('math')

# Maintenant vous pouvez l'utiliser comme un import normal
print(math_module.sqrt(4))
```

Sortie :

```plaintext
2.0
```

Cependant, la manière recommandée utilisant `importlib` est :

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

Sortie :

```plaintext
2.0
```

## Liens pertinents

- <router-link :to="'/modules/importlib'">Module importlib</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Projets Python avec Poetry et VS Code (Partie 1)</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
