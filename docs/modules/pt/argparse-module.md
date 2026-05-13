---
title: Módulo Argparse do Python - Folha de Referência Python
description: O módulo `argparse` ajuda você a construir interfaces de linha de comando com argumentos posicionais, opções, flags e mensagens de ajuda.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Argparse do Python
</base-title>

O módulo `argparse` ajuda você a construir interfaces de linha de comando com argumentos posicionais, opções, flags e mensagens de ajuda.

O módulo foi adicionado no Python 3.2. Se você estiver usando Python 3.14, `ArgumentParser` também suporta os parâmetros `suggest_on_error` e `color`.

```python
import argparse
```

Use `argparse` quando quiser que um arquivo Python se comporte como um pequeno programa de terminal.

```bash
python greet.py Ada --count 2
```

O módulo lê o texto depois do nome do script, valida tudo e devolve um objeto Python com os valores analisados.

## Criando um parser

`ArgumentParser` armazena os argumentos aceitos pelo seu programa.

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

## Argumentos posicionais

Argumentos posicionais são obrigatórios por padrão.

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

## Argumentos opcionais e flags

Argumentos opcionais normalmente começam com `-` ou `--`.

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

## Escolhas e conversão de tipos

Você pode validar valores enquanto eles são analisados.

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

Subcomandos são úteis em ferramentas como `git commit` ou `docker run`.

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

## Um pequeno exemplo completo

Este exemplo aceita um nome e repete a saudação.

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

## Links relacionados

- <router-link to="/modules/sys-module">Módulo: sys</router-link>
- <router-link to="/cheatsheet/functions">Folha de Referência: Funções</router-link>
- <router-link to="/cheatsheet/control-flow">Folha de Referência: Fluxo de controle</router-link>
