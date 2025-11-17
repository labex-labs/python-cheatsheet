---
title: 'Función incorporada Python bool() - Hoja de trucos de Python'
description: 'Devuelve un valor booleano, es decir, True o False. x se convierte utilizando el procedimiento estándar de prueba de verdad. Si x es falso u omitido, devuelve False; de lo contrario, devuelve True. La clase bool es una subclase de int. No se puede volver a especializar. Sus únicas instancias son False y True.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python bool()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve un valor booleano, True o False. x se convierte utilizando el procedimiento estándar de prueba de verdad. Si x es falso u omitido, esto devuelve False; de lo contrario, devuelve True. La clase bool es una subclase de int. No se puede especializar más. Sus únicas instancias son False y True.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `bool()` en Python es una función incorporada que convierte un valor a un booleano (`True` o `False`). Sigue el procedimiento estándar de prueba de verdad, donde valores como `0`, `None` y colecciones vacías se consideran `False`, mientras que la mayoría de los demás valores son `True`. Esto es fundamental para controlar el flujo de su programa con sentencias condicionales.

## Ejemplos

### Valores Falsos (Falsy Values)

Estos valores se consideran `False`:

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # cadena vacía
bool([])      # lista vacía
bool({})      # diccionario vacío
bool(set())   # conjunto vacío
```

Salida:

```plaintext
False
False
False
False
False
False
False
False
```

### Valores Verdaderos (Truthy Values)

La mayoría de los demás valores se consideran `True`:

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

Salida:

```plaintext
True
True
True
True
True
True
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control de Flujo</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
