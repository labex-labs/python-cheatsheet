---
title: 'Función hash() incorporada de Python - Hoja de trucos de Python'
description: 'Devuelve el valor hash del objeto (si lo tiene). Los valores hash son enteros. Se utilizan para comparar rápidamente las claves de diccionario durante una búsqueda en el diccionario. Los valores numéricos que son iguales tienen el mismo valor hash (incluso si son de tipos diferentes, como ocurre con 1 y 1.0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada hash() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve el valor hash del objeto (si lo tiene). Los valores hash son enteros. Se utilizan para comparar rápidamente las claves de diccionario durante una búsqueda en un diccionario. Los valores numéricos que se comparan como iguales tienen el mismo valor hash (incluso si son de tipos diferentes, como es el caso de 1 y 1.0).
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `hash()` devuelve un entero que representa el valor hash de un objeto. Esto se utiliza principalmente por los diccionarios para buscar claves rápidamente.

Solo los objetos "hashables" (con capacidad de ser hasheados) pueden pasarse a `hash()`. Un objeto es hashable si tiene un valor hash que nunca cambia durante su vida útil. Todos los tipos inmutables incorporados de Python (como cadenas, números y tuplas) son hashables, mientras que los contenedores mutables (como listas y diccionarios) no lo son.

### Ejemplos

```python
# El hash de un entero es el entero mismo
print(hash(1))
print(hash(1.0))  # 1 y 1.0 son iguales

# Hash de una cadena (la salida varía)
print(hash('hello'))

# Hash de una tupla (la salida varía)
print(hash((1, 2, 3)))

# Intentar hashear una lista generará un TypeError
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

```output
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## Enlaces relevantes

- <router-link :to="'/cheatsheet/dictionaries'">Diccionarios</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">Conjuntos (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: Qué, Por Qué y Cómo</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
