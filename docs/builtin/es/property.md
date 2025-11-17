---
title: 'Función incorporada property() de Python - Hoja de trucos de Python'
description: 'Devuelve un atributo de propiedad.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada property() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve un atributo de propiedad.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `property()` se utiliza para crear atributos de propiedad. Un atributo de propiedad es un tipo especial de atributo que tiene métodos getter, setter y delete. Esto le permite agregar lógica a la obtención, configuración o eliminación del valor de un atributo.

Es más común usar el decorador `@property`, que es una forma más conveniente de usar `property()`.

### Ejemplo

Aquí hay un ejemplo de cómo usar `property()` para crear un atributo de solo lectura:

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Obteniendo nombre")
        return self._name

    # Crear una propiedad
    name = property(get_name)

p = Person("John")
print(p.name)  # Esto llama a get_name()
```

Salida:

```plaintext
Getting name
John
```

Nota: `p.name = "Jane"` generaría un AttributeError porque no hay un setter.

Y aquí está la forma más común de hacerlo con el decorador `@property`:

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Obteniendo nombre")
        return self._name

p = Person("John")
print(p.name)
```

Salida:

```plaintext
Getting name
John
```

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Conceptos básicos de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decoradores</router-link>
- <router-link to="/cheatsheet/dataclasses">Cheatsheet: Clases de datos (Dataclasses)</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
