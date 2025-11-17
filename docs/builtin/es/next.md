---
title: 'Función incorporada next() de Python - Hoja de trucos de Python'
description: 'Recupera el siguiente elemento del iterador llamando a su método __next__(). Si se proporciona un valor predeterminado, se devuelve si el iterador se agota; de lo contrario, se genera StopIteration.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada next() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Recupera el siguiente elemento del iterador llamando a su método __next__(). Si se proporciona default, se devuelve si el iterador se agota; de lo contrario, se genera StopIteration.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `next()` recupera el siguiente elemento de un iterador. Si el iterador se agota, genera una excepción `StopIteration`.

También puede proporcionar un valor predeterminado que se devolverá si el iterador se agota, lo que evita la excepción `StopIteration`.

### Ejemplos

**Uso de `next()` con un iterador:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

Salida:

```plaintext
1
2
Iterator is exhausted
```

**Uso de `next()` con un valor predeterminado:**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

Salida:

```plaintext
1
default
```

Más ejemplos:

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

Salida:

```plaintext
1
2
3
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow (bucles for)</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
