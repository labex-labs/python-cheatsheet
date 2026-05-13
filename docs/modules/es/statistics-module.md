---
title: Módulo Statistics de Python - Hoja de trucos de Python
description: El módulo `statistics` proporciona herramientas simples para calcular medias, medianas y otras estadísticas descriptivas.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Statistics de Python
</base-title>

El módulo `statistics` proporciona herramientas simples para calcular medias, medianas y otras estadísticas descriptivas.

El módulo se añadió en Python 3.4.

```python
import statistics
```

Usa `statistics` cuando necesites cálculos comunes para una lista pequeña de números. Para análisis de datos avanzados, bibliotecas como NumPy y pandas son más potentes, pero no forman parte de la biblioteca estándar.

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` devuelve una media en coma flotante y suele ser más rápida para datos numéricos:

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode` devuelve el valor más frecuente.

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

Si hay más de un valor frecuente, `multimode` devuelve todos:

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` calcula la desviación estándar muestral.

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## Manejar datos vacíos

La mayoría de las funciones lanzan `StatisticsError` para entradas vacías.

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## Enlaces relacionados

- <router-link to="/modules/math-module">Módulo: math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Hoja de trucos: Listas y tuplas</router-link>
- <router-link to="/builtin/round">round()</router-link>
