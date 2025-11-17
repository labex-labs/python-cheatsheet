---
title: 'Función incorporada compile() de Python - Hoja de trucos de Python'
description: 'Compila el código fuente en un objeto de código o AST. Los objetos de código pueden ser ejecutados por exec() o eval(). La fuente puede ser una cadena normal, una cadena de bytes o un objeto AST. Consulte la documentación del módulo ast para obtener información sobre cómo trabajar con objetos AST.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada compile() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Compila el código fuente en un objeto de código o AST. Los objetos de código pueden ser ejecutados por <router-link to="/builtin/exec">exec()</router-link> o <router-link to="/builtin/eval">eval()</router-link>. source puede ser una cadena normal, una cadena de bytes o un objeto AST. Consulte la documentación del módulo ast para obtener información sobre cómo trabajar con objetos AST.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `compile()` en Python es una función incorporada que se utiliza para convertir una cadena o un objeto de Árbol de Sintaxis Abstracta (AST) en un objeto de código. Este objeto de código puede luego ser ejecutado por funciones como <router-link to="/builtin/exec">exec()</router-link> o <router-link to="/builtin/eval">eval()</router-link>.

## Ejemplo

Aquí hay un ejemplo básico de cómo funciona:

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# Compila la cadena en un objeto de código
# El modo 'exec' se utiliza para una secuencia de sentencias.
# El modo 'eval' es para una única expresión.
# El modo 'single' es para una única sentencia interactiva.
code_object = compile(code_string, '<string>', 'exec')

# Ejecuta el objeto de código
exec(code_object)
```

Salida:

```plaintext
Hello, world!
```

## Enlaces relevantes

- <router-link to="/cheatsheet/debugging">Cheatsheet: Depuración</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
