---
title: 'Función incorporada id() de Python - Hoja de trucos de Python'
description: "Devuelve la 'identidad' de un objeto. Es un entero garantizado como único y constante para este objeto durante su vida útil. Dos objetos con vidas no superpuestas pueden tener el mismo valor id()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada id() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve la “identidad” de un objeto. Este es un entero que se garantiza que es único y constante para este objeto durante su vida útil. Dos objetos con vidas útiles que no se superponen pueden tener el mismo valor id().
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `id()` devuelve un entero único que identifica un objeto en la memoria. Se garantiza que esta ID es única durante la vida útil del objeto. Es esencialmente la dirección de memoria del objeto.

### Ejemplos

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # mismo que id(x) porque Python almacena en caché enteros pequeños
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

Salida:

```plaintext
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## Enlaces relevantes

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos básicos de OOP</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de datos de Python</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
