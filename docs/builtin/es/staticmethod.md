---
title: 'Función integrada staticmethod() de Python - Hoja de trucos de Python'
description: 'Transforma un método en un método estático.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada staticmethod() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Transforma un método en un método estático.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

El decorador `@staticmethod` transforma un método para que pertenezca a una clase pero no reciba la clase o la instancia como primer argumento. Esto es útil para crear funciones de utilidad que tienen una conexión lógica con una clase pero no dependen del estado de la clase o la instancia.

Un método estático se puede llamar tanto en la clase misma como en una instancia.

### Ejemplo

Así es como se define y se llama a un método estático:

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# Llamar en la clase
result1 = MathHelper.add(5, 3)
print(result1)

# Llamar en una instancia
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

Salida:

```plaintext
8
30
```

Un método estático no tiene acceso a la clase (`cls`) ni a la instancia (`self`). Es esencialmente una función normal con espacio de nombres dentro de la clase.

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Conceptos básicos de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decoradores</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funciones</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
