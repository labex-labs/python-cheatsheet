---
title: 'Función incorporada classmethod() de Python - Hoja de trucos de Python'
description: 'Transforma un método en un método de clase. Un método de clase recibe la clase como primer argumento implícito, al igual que un método de instancia recibe la instancia.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada classmethod() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Transforma un método en un método de clase. Un método de clase recibe la clase como argumento implícito primero, al igual que un método de instancia recibe la instancia.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

Un `classmethod` es un método que está vinculado a la clase y no a la instancia de la clase. Toma la clase misma como su primer argumento, convencionalmente llamado `cls`. Esto contrasta con un método de instancia regular, que toma la instancia como su primer argumento (`self`).

A menudo se utilizan para métodos de fábrica que crean instancias de la clase de una manera específica.

## Ejemplo

Aquí hay un caso de uso común: crear un método de fábrica que pueda instanciar la clase a partir de un formato de datos diferente, como un diccionario.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # Este es un método de fábrica que crea una instancia de Person a partir de un diccionario
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Datos para una nueva persona
person_data = {'name': 'John', 'age': 30}

# Crear una instancia de Person usando el método de clase
p = Person.from_dict(person_data)

p.display()
```

```output
Name: John, Age: 30
```

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Conceptos básicos de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decoradores</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funciones</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
