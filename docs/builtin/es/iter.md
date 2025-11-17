---
title: 'Función incorporada iter() de Python - Hoja de trucos de Python'
description: 'Devuelve un objeto iterador. El primer argumento se interpreta de manera muy diferente según la presencia del segundo argumento. Sin un segundo argumento, el objeto debe ser un objeto de colección que admita el protocolo iterable, o debe admitir el protocolo de secuencia. Si no admite ninguno de esos protocolos, se genera un TypeError.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada iter() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un objeto iterador. El primer argumento se interpreta de manera muy diferente dependiendo de la presencia del segundo argumento. Sin un segundo argumento, object debe ser un objeto de colección que admita el protocolo iterable, o debe admitir el protocolo de secuencia. Si no admite ninguno de esos protocolos, se genera TypeError.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `iter()` devuelve un objeto iterador. Un iterador es un objeto sobre el cual se puede iterar (recorrer). Es lo que impulsa los bucles `for` en Python.

Puedes usar `iter()` para obtener un iterador de cualquier objeto iterable, como una lista, tupla o cadena.

### Ejemplos

**Obtener un iterador de una lista:**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

Salida:

```plaintext
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

Salida:

```plaintext
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## Enlaces relevantes

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">Control de Flujo</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listas y Tuplas</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
