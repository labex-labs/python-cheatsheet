---
title: Módulo Typing do Python - Folha de Referência Python
description: O módulo `typing` fornece dicas de tipo para argumentos de função, valores de retorno e estruturas de dados.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Typing do Python
</base-title>

O módulo `typing` fornece dicas de tipo para argumentos de função, valores de retorno e estruturas de dados.

```python
from typing import TypedDict
```

As dicas de tipo não mudam como o Python executa o seu programa. Elas ajudam editores, linters e leitores a entender que tipos de valores o seu código espera.

## Anotando assinaturas de função

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

A anotação `name: str` significa que a função espera uma string. A anotação `-> str` significa que ela deve retornar uma string.

## Tipos de coleção comuns

Use dicas de tipo para descrever a estrutura dos seus dados.

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

Anotações no estilo `list[str]` exigem Python 3.9 ou superior.

## Valores opcionais

Use `| None` quando um valor puder estar ausente.

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

A sintaxe de união `X | Y` exige Python 3.10 ou superior.

## TypedDict

`TypedDict` descreve objetos parecidos com dicionário com chaves fixas.

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## Alias de tipo

Um alias de tipo dá um nome legível a um tipo mais complexo.

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## Links relacionados

- <router-link to="/cheatsheet/functions">Folha de Referência: Funções</router-link>
- <router-link to="/cheatsheet/dictionaries">Folha de Referência: Dicionários</router-link>
- <router-link to="/cheatsheet/dataclasses">Folha de Referência: Data classes</router-link>
