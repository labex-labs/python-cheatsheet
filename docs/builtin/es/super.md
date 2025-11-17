---
title: 'Función incorporada super() de Python - Hoja de trucos de Python'
description: 'Devuelve un objeto proxy que delega llamadas a métodos a una clase padre o hermana. Esto es útil para acceder a métodos heredados que han sido anulados en una clase.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python super()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve un objeto proxy que delega las llamadas a métodos a una clase padre o hermana. Esto es útil para acceder a métodos heredados que han sido anulados en una clase.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `super()` se utiliza para llamar a un método de una clase padre. Esto es particularmente útil en la herencia cuando se desea extender la funcionalidad de un método del padre sin anularlo por completo.

### Ejemplo

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

Salida:

```plaintext
Hello from Parent
Hello from Child
```

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Conceptos básicos de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decoradores</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funciones</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
