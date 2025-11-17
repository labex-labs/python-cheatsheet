---
title: 'Función incorporada issubclass() de Python - Hoja de trucos de Python'
description: 'Devuelve Verdadero si la clase es una subclase (directa, indirecta o virtual) de classinfo. Una clase se considera subclase de sí misma. classinfo puede ser una tupla de objetos de clase (o recursivamente, otras tuplas similares) o un Tipo de Unión, en cuyo caso devuelve Verdadero si la clase es una subclase de cualquier entrada en classinfo. En cualquier otro caso, se genera una excepción TypeError.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada issubclass() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve True si clase es una subclase (directa, indirecta o virtual) de classinfo. Una clase se considera una subclase de sí misma. classinfo puede ser una tupla de objetos de clase (o recursivamente, otras tuplas de este tipo) o un Tipo de Unión (Union Type), en cuyo caso devuelve True si clase es una subclase de cualquier entrada en classinfo. En cualquier otro caso, se genera una excepción TypeError.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `issubclass()` en Python es una función incorporada que comprueba si una clase dada es una subclase de otra clase o de una tupla de clases. Devuelve `True` si el primer argumento es una subclase del segundo argumento, y `False` en caso contrario. Esta función es útil para la programación orientada a objetos, ya que permite verificar las relaciones entre clases e implementar un comportamiento polimórfico basado en la herencia.

## Ejemplos

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

Salida:

```plaintext
True
False
```

## Enlaces relevantes

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos básicos de OOP</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
