---
title: 'Função Embutida vars() do Python - Folha de Dicas Python'
description: 'Retorna o atributo __dict__ de um módulo, classe, instância ou qualquer outro objeto com um atributo __dict__.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in vars() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna o atributo __dict__ de um módulo, classe, instância ou qualquer outro objeto com um atributo __dict__.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `vars()` retorna o atributo `__dict__` de um objeto. Este dicionário contém os atributos graváveis do objeto. É uma maneira conveniente de ver todos os atributos de um objeto de uma só vez.

Se chamada sem argumentos, `vars()` age como `locals()`, retornando um dicionário da tabela de símbolos local.

### Exemplos

**Obtendo os atributos de um objeto:**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

```output
{'name': 'Dwight', 'age': 35}
```

**Usando `vars()` sem argumentos:**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

```output
{'x': 10}
```

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dicionários</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
