---
title: "Módulo Sys de Python - Hoja de trucos de Python"
description: "El módulo `sys` da acceso a detalles del tiempo de ejecución de Python, como los argumentos de línea de comandos, la ruta de importación y la versión actual del intérprete."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Sys de Python
</base-title>

El módulo `sys` da acceso a detalles del tiempo de ejecución de Python, como los argumentos de línea de comandos, la ruta de importación y la versión actual del intérprete.

```python
import sys
```

Usa `sys` cuando tu código necesite hablar con el propio intérprete de Python, no solo con los objetos de tu aplicación.

## Argumentos de línea de comandos

`sys.argv` es una lista de argumentos pasados al script actual.

```python
import sys

sys.argv = ['main.py', '--debug', 'app']
print(sys.argv[0])
print(sys.argv[1:])
```

```output
main.py
['--debug', 'app']
```

Para aplicaciones reales de línea de comandos, prefiere <router-link to="/modules/argparse-module">argparse</router-link>. Se basa en la misma idea, pero añade validación y mensajes de ayuda.

## Versión de Python

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## Ruta de búsqueda de importación

`sys.path` controla dónde busca Python los módulos.

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

Las primeras entradas de `sys.path` suelen incluir tu proyecto actual, por eso se pueden importar módulos locales.

## Entrada y salida estándar

`sys.stdin`, `sys.stdout` y `sys.stderr` son objetos similares a archivos que utiliza el intérprete.

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## Salir de un programa

```python
import sys

try:
    sys.exit(0)
except SystemExit as exc:
    print(exc.code)
```

```output
0
```

## Enlaces relacionados

- <router-link to="/modules/argparse-module">Módulo: argparse</router-link>
- <router-link to="/modules/subprocess-module">Módulo: subprocess</router-link>
- <router-link to="/cheatsheet/main">Hoja de trucos: Main: Script de nivel superior</router-link>
