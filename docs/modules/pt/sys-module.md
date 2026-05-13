---
title: "Módulo Sys do Python - Folha de Referência Python"
description: "O módulo `sys` dá acesso a detalhes de runtime do Python, como argumentos de linha de comando, caminho de importação e versão atual do interpretador."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Sys do Python
</base-title>

O módulo `sys` dá acesso a detalhes de runtime do Python, como argumentos de linha de comando, caminho de importação e versão atual do interpretador.

```python
import sys
```

Use `sys` quando o seu código precisar conversar com o próprio interpretador Python, e não apenas com objetos da sua aplicação.

## Argumentos de linha de comando

`sys.argv` é uma lista de argumentos passados para o script atual.

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

Para aplicações reais de linha de comando, prefira <router-link to="/modules/argparse-module">argparse</router-link>. Ele parte da mesma ideia, mas oferece validação e mensagens de ajuda.

## Versão do Python

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## Caminho de busca de importação

`sys.path` controla onde o Python procura módulos.

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

As primeiras entradas de `sys.path` normalmente incluem o projeto atual, por isso módulos locais podem ser importados.

## Entrada e saída padrão

`sys.stdin`, `sys.stdout` e `sys.stderr` são objetos semelhantes a arquivo usados pelo interpretador.

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## Saindo de um programa

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

## Links relacionados

- <router-link to="/modules/argparse-module">Módulo: argparse</router-link>
- <router-link to="/modules/subprocess-module">Módulo: subprocess</router-link>
- <router-link to="/cheatsheet/main">Folha de Referência: Main: script de nível superior</router-link>
