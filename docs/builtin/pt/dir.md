---
title: 'Função Embutida dir() do Python - Guia Rápido Python'
description: 'Sem argumentos, retorna a lista de nomes no escopo local atual. Com um argumento, tenta retornar uma lista de atributos válidos para esse objeto.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in dir() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Sem argumentos, retorna a lista de nomes no escopo local atual. Com um argumento, tenta retornar uma lista de atributos válidos para esse objeto.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `dir()` em Python é uma função built-in poderosa que retorna uma lista de nomes no namespace atual ou os atributos de um objeto fornecido. É comumente usada para introspecção e exploração de objetos, módulos e classes, ajudando você a descobrir os métodos, atributos e nomes disponíveis com os quais pode trabalhar.

## Sintaxe

```python
dir([object])
```

- `object` (opcional): O objeto cujos atributos você deseja explorar. Se não for fornecido, retorna os nomes no namespace atual.

## Explorando Nomes no Namespace Atual

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

Saída:

```plaintext
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## Explorando Atributos de Módulo

```python
import math
print(dir(math))
```

Saída:

```plaintext
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', ... ]
```

## Explorando Atributos de Objeto

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

Saída:

```plaintext
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## Usando `dir()` com Tipos Built-in

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

Saída:

```plaintext
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## Filtrando a Saída de `dir()`

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

Saída:

```plaintext
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## Links Relevantes

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
