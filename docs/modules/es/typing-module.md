---
title: "Módulo Typing de Python - Hoja de trucos de Python"
description: "El módulo `typing` proporciona anotaciones de tipo para argumentos de funciones, valores de retorno y estructuras de datos."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Typing de Python
</base-title>

El módulo `typing` proporciona anotaciones de tipo para argumentos de funciones, valores de retorno y estructuras de datos.

```python
from typing import TypedDict
```

Las anotaciones de tipo no cambian cómo Python ejecuta tu programa. Ayudan a editores, linters y lectores a entender qué tipo de valores espera tu código.

## Anotar firmas de funciones

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

La anotación `name: str` significa que la función espera una cadena. La anotación `-> str` significa que debe devolver una cadena.

## Tipos de contenedor comunes

Usa anotaciones de tipo para describir la forma de tus datos.

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

Las anotaciones con estilo `list[str]` requieren Python 3.9 o superior.

## Valores opcionales

Usa `| None` cuando un valor pueda faltar.

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

La sintaxis de unión `X | Y` requiere Python 3.10 o superior.

## TypedDict

`TypedDict` describe objetos tipo diccionario con claves fijas.

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

## Alias de tipos

Un alias de tipo da un nombre legible a un tipo más complejo.

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## Enlaces relacionados

- <router-link to="/cheatsheet/functions">Hoja de trucos: Funciones</router-link>
- <router-link to="/cheatsheet/dictionaries">Hoja de trucos: Diccionarios</router-link>
- <router-link to="/cheatsheet/dataclasses">Hoja de trucos: Data classes</router-link>
