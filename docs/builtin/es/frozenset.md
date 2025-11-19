---
title: 'Función incorporada frozenset() de Python - Hoja de trucos de Python'
description: 'Devuelve un nuevo objeto frozenset, opcionalmente con elementos tomados de un iterable. frozenset es una clase incorporada. Consulte frozenset y Tipos de conjuntos — set, frozenset para obtener documentación sobre esta clase.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada frozenset() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un nuevo objeto frozenset, opcionalmente con elementos tomados de un iterable. <router-link to="/builtin/frozenset">frozenset</router-link> es una clase incorporada. Consulte <router-link to="/builtin/frozenset">frozenset</router-link> y Tipos de conjuntos — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link> para obtener documentación sobre esta clase.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `frozenset()` en Python es una función incorporada que crea un conjunto inmutable e _hashable_ a partir de un iterable. A diferencia de un `set` normal, un `frozenset` no se puede modificar después de su creación, lo que significa que no se pueden agregar ni eliminar elementos. Esta inmutabilidad lo hace adecuado para su uso como clave de diccionario o como elemento en otro conjunto.

## Ejemplos

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

```output
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## Enlaces relevantes

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">Conjuntos (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Conjuntos de Python: Qué, Por Qué y Cómo</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
