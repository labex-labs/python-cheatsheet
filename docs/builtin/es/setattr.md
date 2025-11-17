---
title: 'Función Incorporada Python setattr() - Hoja de Trucos de Python'
description: "Es el equivalente de getattr(). Los argumentos son un objeto, una cadena y un valor arbitrario. La cadena puede nombrar un atributo existente o uno nuevo. La función asigna el valor al atributo, siempre que el objeto lo permita. Por ejemplo, setattr(x, 'foobar', 123) es equivalente a x.foobar = 123."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python setattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Este es el complemento de <router-link to="/builtin/getattr">getattr()</router-link>. Los argumentos son un objeto, una cadena y un valor arbitrario. La cadena puede nombrar un atributo existente o un nuevo atributo. La función asigna el valor al atributo, siempre que el objeto lo permita. Por ejemplo, setattr(x, 'foobar', 123) es equivalente a x.foobar = 123.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `setattr()` es una función incorporada de Python que le permite establecer el valor de un atributo de un objeto. Toma tres argumentos: el objeto, el nombre del atributo (como una cadena) y el valor que desea asignar a ese atributo.

Esto es particularmente útil cuando el nombre del atributo se determina dinámicamente en tiempo de ejecución. En lugar de usar la notación de punto (`object.attribute = value`), que requiere que conozca el nombre del atributo de antemano, `setattr()` le permite usar una variable.

### Ejemplos

Así es como puede usar `setattr()` para agregar o modificar atributos:

```python
class Person:
    name = "John"

p = Person()

# Establecer el atributo 'age' a 30
setattr(p, 'age', 30)

print(p.age)

# Cambiar el atributo 'name'
setattr(p, 'name', 'Jane')
print(p.name)
```

Salida:

```plaintext
30
Jane
```

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Conceptos básicos de OOP</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
