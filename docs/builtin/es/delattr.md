---
title: 'Función incorporada delattr() de Python - Hoja de trucos de Python'
description: "Es un relativo de setattr(). Los argumentos son un objeto y una cadena. La cadena debe ser el nombre de uno de los atributos del objeto. La función elimina el atributo nombrado, siempre que el objeto lo permita. Por ejemplo, delattr(x, 'foobar') es equivalente a del x.foobar."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python delattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Es un pariente de `setattr()`. Los argumentos son un objeto y una cadena. La cadena debe ser el nombre de uno de los atributos del objeto. La función elimina el atributo con nombre, siempre que el objeto lo permita. Por ejemplo, `delattr(x, 'foobar')` es equivalente a `del x.foobar`.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `delattr()` en Python se utiliza para eliminar un atributo de un objeto. Es la contraparte de `setattr()` y <router-link to="/builtin/getattr">`getattr()`</router-link>.

## Sintaxis

```python
delattr(object, name)
```

- **object**: El objeto del cual se debe eliminar el atributo.
- **name**: El nombre del atributo a eliminar, proporcionado como una cadena (string).

## Ejemplos

### Eliminar un atributo de un objeto

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

```output
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### Eliminar un atributo inexistente

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

```output
Error: age
```

## Enlaces relevantes

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos básicos de OOP</router-link>
