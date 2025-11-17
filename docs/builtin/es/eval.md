---
title: 'Función incorporada eval() de Python - Hoja de trucos de Python'
description: 'Los argumentos son una cadena y diccionarios opcionales de globales y locales. Si se proporcionan, globales debe ser un diccionario. Si se proporciona, locales puede ser cualquier objeto de mapeo.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python eval()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Los argumentos son una cadena y opcionalmente globals y locals. Si se proporcionan, globals debe ser un diccionario. Si se proporciona, locals puede ser cualquier objeto de mapeo.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `eval()` en Python es una función incorporada que analiza una cadena como una expresión de Python y la evalúa. Se puede utilizar para ejecutar código Python arbitrario a partir de una cadena, lo que puede ser a la vez potente y arriesgado. A menudo se utiliza en situaciones donde se necesita evaluar expresiones generadas dinámicamente, pero debe usarse con precaución debido a posibles vulnerabilidades de seguridad.

## Ejemplos

```python
eval('1 + 4')
```

Salida:

```plaintext
5
```

```python
eval('print("Hello World!")')
```

Salida:

```plaintext
Hello World!
```

```python
x = 10
eval('x == 10')
```

Salida:

```plaintext
True
```

La función `eval()` también se puede utilizar con la función <router-link to="/builtin/print">print()</router-link> para mostrar la salida en la consola.

## Enlaces relevantes

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Depuración</router-link>
