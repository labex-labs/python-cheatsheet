---
title: 'Función incorporada input() de Python - Hoja de trucos de Python'
description: "Si el argumento 'prompt' está presente, se escribe en la salida estándar sin una nueva línea final. Luego, la función lee una línea de la entrada, la convierte a una cadena (eliminando la nueva línea final) y la devuelve. Cuando se lee EOF, se genera EOFError."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada input() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Si el argumento prompt está presente, se escribe en la salida estándar sin un salto de línea final. Luego, la función lee una línea de la entrada, la convierte en una cadena (eliminando un salto de línea final) y la devuelve. Cuando se lee EOF, se genera EOFError.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `input()` en Python es una función incorporada que permite a un programa leer una línea de texto desde el teclado del usuario. Es una herramienta esencial para crear aplicaciones interactivas, ya que pausa la ejecución del programa y espera a que el usuario proporcione una entrada. La función también puede mostrar un mensaje (prompt) para guiar al usuario sobre qué ingresar.

## Ejemplos

Esta función toma la entrada del usuario y la convierte en una cadena:

```python
# preguntar su nombre
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

Salida:

```plaintext
What is your name?
Martha
Hi, Martha
```

`input()` también puede establecer un mensaje predeterminado sin usar `print()`:

```python
# mensaje predeterminado
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

Salida:

```plaintext
What is your name? Martha
Hi, Martha
```

## Enlaces relevantes

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formato de Cadenas (String Formatting)</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulación de Cadenas (Manipulating Strings)</router-link>
