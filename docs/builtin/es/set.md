---
title: 'Función incorporada set() de Python - Hoja de trucos de Python'
description: 'Devuelve un nuevo objeto conjunto, opcionalmente con elementos tomados de un iterable. set es una clase incorporada. Consulte set y Tipos de conjunto — set, frozenset para obtener documentación sobre esta clase.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python set()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un nuevo objeto set, opcionalmente con elementos tomados de un iterable. set es una clase incorporada. Consulte <router-link to="/cheatsheet/sets">set</router-link> y Tipos de Conjunto — set, frozenset para obtener documentación sobre esta clase.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

El constructor `set()` crea un nuevo conjunto. Un conjunto es una colección desordenada de elementos únicos. Puede crear un conjunto vacío o crear un conjunto a partir de un iterable.

### Ejemplos

**Crear un conjunto vacío:**

```python
my_set = set()
print(my_set)
```

Salida:

```plaintext
set()
```

**Crear un conjunto a partir de una lista (se eliminan los duplicados):**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

Salida:

```plaintext
{1, 2, 3}
```

## Enlaces relevantes

- <router-link to="/cheatsheet/sets">Hoja de trucos: Conjuntos (Sets)</router-link>
- <router-link to="/cheatsheet/comprehensions">Hoja de trucos: Comprensiones</router-link>
- <router-link to="/blog/python-sets-what-why-how">Blog: Conjuntos de Python - Qué, Por Qué, Cómo</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
