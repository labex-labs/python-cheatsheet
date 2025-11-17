---
title: 'Función incorporada range() de Python - Hoja de trucos de Python'
description: 'En lugar de ser una función, range es en realidad un tipo de secuencia inmutable, como se documenta en Rangos y Tipos de Secuencia — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python range()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   En lugar de ser una función, range es en realidad un tipo de secuencia inmutable, como se documenta en Rangos y Tipos de Secuencia — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

El tipo `range` se utiliza comúnmente en bucles `for` para iterar un número específico de veces. `range` acepta tres parámetros: `start`, `stop` y `step`. Cada parámetro debe ser un entero (ya sea el <router-link to="/builtin/int">int</router-link> incorporado o cualquier objeto que implemente el método especial **index**()).

Si solo hay un parámetro, representa el parámetro `stop`. Si el parámetro `step` se omite por completo, tendrá un valor predeterminado de `1`. Si el parámetro `start` se omite, tendrá un valor predeterminado de `0`.

Los rangos admiten índices negativos, pero estos se interpretan como indexación desde el final de la secuencia determinada por los índices positivos.

\*\*\*La ventaja del tipo range sobre una <router-link to="/builtin/list">list</router-link> o <router-link to="/builtin/tuple">tuple</router-link> regular es que un objeto range siempre ocupará la misma cantidad (pequeña) de memoria, sin importar el tamaño del rango que represente.

## Parámetros de Entrada

Los rangos implementan todas las operaciones de secuencia comunes, excepto la concatenación y la repetición (debido al hecho de que los objetos range solo pueden representar secuencias que siguen un patrón estricto y la repetición y concatenación generalmente violarán ese patrón).

`start`:

- El valor del parámetro de inicio
- Si no se suministra, el parámetro tendrá un valor predeterminado de 0
- El valor del parámetro es _inclusivo_

`stop`

- El valor del parámetro de parada
- El único parámetro que es obligatorio
- El valor del parámetro es _exclusivo_

`step`

- El valor del parámetro de paso
- Si no se suministra, el parámetro tendrá un valor predeterminado de 1

## Ejemplos

Rango con solo el parámetro `stop` especificado

```python
for i in range(5):
    print(i)
```

Salida:

```plaintext
0
1
2
3
4
```

Rango con los parámetros `start` y `stop`

```python
for i in range(1, 8):
    print(i)
```

Salida:

```plaintext
1
2
3
4
5
6
7
```

Rango con todos los parámetros especificados

```python
for i in range(0, 30, 5):
    print(i)
```

Salida:

```plaintext
0
5
10
15
20
25
```

Rango con todos los parámetros, donde el parámetro `stop` no es divisible por el parámetro `step`

```python
for i in range(0, 10, 3):
    print(i)
```

Salida:

```plaintext
0
3
6
9
```

Rango con todos los parámetros, donde los parámetros `stop` y `step` son negativos

```python
for i in range(0, -6, -1):
    print(i)
```

Salida:

```plaintext
0
-1
-2
-3
-4
-5
```

Dos ejemplos donde el parámetro `stop` se establece en 0

```python
for i in range(0):
    print(i)
```

Salida:

```plaintext
(no output)
```

```python
for i in range(1, 0):
    print(i)
```

Salida:

```plaintext
(no output)
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control de Flujo (bucles for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas y Tuplas</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
