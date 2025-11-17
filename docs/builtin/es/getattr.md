---
title: 'Función incorporada getattr() de Python - Hoja de trucos de Python'
description: 'Devuelve el valor del atributo con nombre del objeto. name debe ser una cadena. Si la cadena es el nombre de uno de los atributos del objeto, el resultado es el valor de ese atributo.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada getattr() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve el valor del atributo con nombre del objeto. name debe ser una cadena. Si la cadena es el nombre de uno de los atributos del objeto, el resultado es el valor de ese atributo.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `getattr()` en Python es una función incorporada que le permite acceder al atributo de un objeto por su nombre, proporcionado como una cadena. Esta es una característica poderosa para la programación dinámica, ya que le permite recuperar un atributo cuando su nombre no se conoce hasta el tiempo de ejecución. También puede proporcionar un valor predeterminado que se devolverá si el atributo no existe, lo que ayuda a evitar errores.

## Sintaxis

```python
getattr(object, name)
```

o

```python
getattr(object, name, default)
```

-`object`: El objeto cuyo atributo desea acceder.

-`name`: El nombre del atributo que desea recuperar.

-`default`: (Opcional) El valor que se devolverá si no se encuentra el atributo. Si no se proporciona, se devuelve `None`.

## Ejemplo

```python
class Example:
    attribute = "Hello, World!"

# Creando una instancia de la clase
obj = Example()

# Usando getattr para acceder al atributo
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

Salida:

```plaintext
Hello, World!
```

Nota: Si el 'attribute' no existe, se imprimirá 'Nothing found'.

## Enlaces relevantes

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos básicos de OOP</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
