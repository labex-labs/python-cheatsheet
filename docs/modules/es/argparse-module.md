---
title: "Módulo Argparse de Python - Hoja de trucos de Python"
description: "El módulo `argparse` te ayuda a construir interfaces de línea de comandos con argumentos posicionales, opciones, banderas y mensajes de ayuda."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Argparse de Python
</base-title>

El módulo `argparse` te ayuda a construir interfaces de línea de comandos con argumentos posicionales, opciones, banderas y mensajes de ayuda.

El módulo se añadió en Python 3.2. Si usas Python 3.14, `ArgumentParser` también admite los parámetros `suggest_on_error` y `color`.

```python
import argparse
```

Usa `argparse` cuando quieras que un archivo de Python se comporte como un pequeño programa de terminal:

```bash
python greet.py Ada --count 2
```

El módulo lee el texto que va después del nombre del script, lo valida y te devuelve un objeto de Python con los valores analizados.

## Crear un analizador

`ArgumentParser` almacena los argumentos que acepta tu programa.

```python
import argparse

parser = argparse.ArgumentParser(
    prog='greet',
    description='Greet a user from the command line',
)

parser.print_help()
```

```output
usage: greet [-h]

Greet a user from the command line

options:
  -h, --help  show this help message and exit
```

## Argumentos posicionales

Los argumentos posicionales son obligatorios por defecto.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')

args = parser.parse_args(['Ada'])
print(args.name)
```

```output
Ada
```

## Argumentos opcionales y banderas

Los argumentos opcionales suelen empezar con `-` o `--`.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--count', type=int, default=1)
parser.add_argument('-v', '--verbose', action='store_true')

args = parser.parse_args(['--count', '3', '--verbose'])
print(args.count)
print(args.verbose)
```

```output
3
True
```

## Opciones y conversión de tipos

Puedes validar los valores mientras se analizan.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--mode', choices=['dev', 'prod'])
parser.add_argument('--port', type=int, default=8000)

args = parser.parse_args(['--mode', 'dev', '--port', '9000'])
print(args.mode)
print(args.port)
```

```output
dev
9000
```

## Subcomandos

Los subcomandos son útiles para herramientas como `git commit` o `docker run`.

```python
import argparse

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command', required=True)

build_parser = subparsers.add_parser('build')
build_parser.add_argument('--release', action='store_true')

args = parser.parse_args(['build', '--release'])
print(args.command)
print(args.release)
```

```output
build
True
```

## Un ejemplo pequeño y completo

Este ejemplo acepta un nombre y repite el saludo.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')
parser.add_argument('--count', type=int, default=1)

args = parser.parse_args(['Ada', '--count', '2'])

for _ in range(args.count):
    print(f'Hello {args.name}!')
```

```output
Hello Ada!
Hello Ada!
```

## Enlaces relacionados

- <router-link to="/modules/sys-module">Módulo: sys</router-link>
- <router-link to="/cheatsheet/functions">Hoja de trucos: Funciones</router-link>
- <router-link to="/cheatsheet/control-flow">Hoja de trucos: Flujo de control</router-link>
