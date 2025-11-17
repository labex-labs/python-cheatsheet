---
title: 'Función incorporada callable() de Python - Hoja de trucos de Python'
description: 'Devuelve Verdadero si el objeto argumento parece invocable, Falso si no lo es. Si devuelve Verdadero, una llamada aún puede fallar, pero si es Falso, llamar al objeto nunca tendrá éxito. Tenga en cuenta que las clases son invocables (llamar a una clase devuelve una nueva instancia); las instancias son invocables si su clase tiene un método __call__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada callable() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve True si el argumento objeto parece invocable, False si no lo es. Si esto devuelve True, todavía es posible que una llamada falle, pero si es False, llamar a object nunca tendrá éxito. Tenga en cuenta que las clases son invocables (llamar a una clase devuelve una nueva instancia); las instancias son invocables si su clase tiene un método __call__().
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

En Python, la función `callable()` es una función incorporada que se puede utilizar para determinar si un objeto es invocable, lo que significa que se puede invocar como una función.

Devuelve `True` si el objeto que se le pasa es invocable y `False` en caso contrario. Por ejemplo, una función, un método, una clase, una función lambda y un generador son todos objetos invocables en Python.

Aquí hay un ejemplo de cómo puede usar la función `callable()`:

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

Salida:

```plaintext
False
True
True
True
```

En el ejemplo anterior, `my_function` es una función y es invocable, `MyClass` es una clase y también es invocable porque tiene un método `__call__`, `z` es una instancia de la clase `MyClass` y también es invocable porque tiene un método `__call__` y `a` es una función lambda que es invocable.

La función `callable()` puede ser útil en situaciones en las que necesita determinar si un objeto puede ser invocado como una función, como cuando está trabajando con devoluciones de llamada (callbacks) u otros tipos de punteros a funciones.

## Enlaces relevantes

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">Funciones</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos básicos de OOP</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
