---
title: 'Función incorporada dict() de Python - Hoja de trucos de Python'
description: 'Crea un nuevo diccionario. El objeto dict es la clase de diccionario. Consulte dict y Tipos de mapeo — dict para obtener documentación sobre esta clase.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada dict() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Crea un nuevo diccionario. El objeto `dict` es la clase de diccionario.
  </base-disclaimer-content>
</base-disclaimer>

El constructor `dict()` en Python es una forma versátil de crear diccionarios.

Puedes crear un diccionario vacío, o crear un diccionario a partir de argumentos de palabra clave o a partir de un <router-link to="/builtin/iter">iterable</router-link> de pares clave-valor.

## Ejemplos

**Creando un diccionario vacío:**

```python
my_dict = dict()
print(my_dict)
```

Salida:

```plaintext
{}
```

**Creando un diccionario con argumentos de palabra clave:**

```python
# Usando argumentos de palabra clave
my_dict = dict(name="John", age=30)
print(my_dict)
```

Salida:

```plaintext
{'name': 'John', 'age': 30}
```

**Creando un diccionario a partir de un iterable:**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

Salida:

```plaintext
{'name': 'Jane', 'age': 25}
```

Creando un diccionario vacío:

```python
a = dict()
type(a)
```

Salida:

```plaintext
<class 'dict'>
```

## Enlaces relevantes

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">Diccionarios</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de datos de Python</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
