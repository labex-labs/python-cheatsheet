---
title: 'Función incorporada Python __import__() - Hoja de trucos de Python'
description: 'Esta función es invocada por la declaración import. Puede ser reemplazada [...] para cambiar la semántica de la declaración import, pero hacerlo es fuertemente desaconsejado ya que generalmente es más simple usar ganchos de importación [...]. También se desaconseja el uso directo de __import__() en favor de importlib.import_module().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada `__import__` de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Esta función es invocada por la declaración import. Puede ser reemplazada [...] para cambiar la semántica de la declaración import, pero hacerlo es fuertemente desaconsejado ya que usualmente es más simple usar ganchos de importación [...]. El uso directo de __import__() también es desaconsejado en favor de importlib.import_module().
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `__import__()` es la función subyacente que es llamada por la declaración `import`. Aunque es posible usarla directamente, generalmente se desaconseja. Para importar módulos dinámicamente, la función `importlib.import_module()` es el enfoque recomendado.

### Ejemplo

Así es como podrías usar `__import__()` para importar dinámicamente el módulo `math`:

```python
# Importar dinámicamente el módulo 'math'
math_module = __import__('math')

# Ahora puedes usarlo como una importación normal
print(math_module.sqrt(4))
```

Salida:

```plaintext
2.0
```

Sin embargo, la forma recomendada usando `importlib` es:

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

Salida:

```plaintext
2.0
```

## Enlaces relevantes

- <router-link :to="'/modules/importlib'">Módulo importlib</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Proyectos de Python con Poetry y VS Code (Parte 1)</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
