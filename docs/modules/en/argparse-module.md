---
title: Python Argparse Module - Python Cheatsheet
description: The argparse module helps you build command-line interfaces with positional arguments, options, flags, and help messages.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Argparse Module
</base-title>

The `argparse` module helps you build command-line interfaces with positional arguments, options, flags, and help messages.

The module was added in Python 3.2. If you are using Python 3.14, `ArgumentParser` also supports the `suggest_on_error` and `color` parameters.

```python
import argparse
```

Use `argparse` when you want a Python file to behave like a small terminal program:

```bash
python greet.py Ada --count 2
```

The module reads the text after the script name, validates it, and gives you a Python object with the parsed values.

## Creating a parser

`ArgumentParser` stores the arguments your program accepts.

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

## Positional arguments

Positional arguments are required by default.

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

## Optional arguments and flags

Optional arguments usually start with `-` or `--`.

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

## Choices and type conversion

You can validate values as they are parsed.

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

## Subcommands

Subcommands are useful for tools like `git commit` or `docker run`.

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

## A small complete example

This example accepts a name and repeats the greeting.

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

## Relevant links

- <router-link to="/modules/sys-module">Module: sys</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
