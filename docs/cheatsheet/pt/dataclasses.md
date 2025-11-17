---
title: 'Dataclasses Python - Folha de Dicas Python'
description: 'Dataclasses são classes Python otimizadas para armazenar objetos de dados. Este módulo fornece um decorador e funções para adicionar automaticamente métodos especiais gerados, como __init__() e __repr__(), a classes definidas pelo usuário.'
labUrl: 'https://labex.io/pt/labs/python-python-dataclasses-633652?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Dataclasses Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

`Dataclasses` são classes python, mas são adequadas para armazenar objetos de dados.
Este módulo fornece um decorador e funções para adicionar automaticamente métodos especiais gerados, como `__init__()` e `__repr__()`, a classes definidas pelo usuário.

## Funcionalidades

1. Elas armazenam dados e representam um certo tipo de dado. Ex: Um número. Para pessoas familiarizadas com ORMs, uma instância de modelo é um objeto de dados. Ele representa um tipo específico de entidade. Ele contém atributos que definem ou representam a entidade.

2. Elas podem ser comparadas com outros objetos do mesmo tipo. Ex: Um número pode ser maior que, menor que ou igual a outro número.

Python 3.7 fornece um decorador `dataclass` que é usado para converter uma classe em uma dataclass.

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

Output:

```plaintext
2
```

com dataclass

```python
# Dataclass: gera automaticamente os métodos __init__ e __repr__
from dataclasses import dataclass

@dataclass  # O decorador converte a classe em dataclass
class Number:
    val: int  # Anotação de tipo obrigatória

obj = Number(2)  # __init__ criado automaticamente
obj.val
```

Output:

```plaintext
2
```

## Valores Padrão

É fácil adicionar valores padrão aos campos da sua data class.

```python
# Dataclass com valores padrão: campos com padrões devem vir após os campos obrigatórios
@dataclass
class Product:
    name: str        # Campo obrigatório
    count: int = 0   # Campo opcional com valor padrão
    price: float = 0.0  # Campo opcional com valor padrão

obj = Product("Python")  # Apenas 'name' é obrigatório, os outros usam padrões
obj.name
```

Output:

```plaintext
Python
```

```python
obj.count
```

Output:

```plaintext
0
```

```python
obj.price
```

Output:

```plaintext
0.0
```

## Dicas de Tipo (Type Hints)

É obrigatório definir o tipo de dado na dataclass. No entanto, se você preferir não especificar o tipo de dado, use `typing.Any`.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## Links Relevantes

- <router-link to="/cheatsheet/oop-basics">Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Decoradores</router-link>
- <router-link to="/blog/python-data-types">Post de Blog sobre Tipos de Dados Python</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
