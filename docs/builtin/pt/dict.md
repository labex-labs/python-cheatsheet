---
title: 'Função Embutida dict() em Python - Guia Rápido Python'
description: 'Cria um novo dicionário. O objeto dict é a classe de dicionário. Consulte dict e Tipos de Mapeamento — dict para documentação sobre esta classe.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python dict()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Cria um novo dicionário. O objeto `dict` é a classe de dicionário.
  </base-disclaimer-content>
</base-disclaimer>

O construtor `dict()` em Python é uma maneira versátil de criar dicionários.

Você pode criar um dicionário vazio, ou criar um dicionário a partir de argumentos de palavra-chave ou a partir de um <router-link to="/builtin/iter">iterável</router-link> de pares chave-valor.

## Exemplos

**Criando um dicionário vazio:**

```python
my_dict = dict()
print(my_dict)
```

```output
{}
```

**Criando um dicionário com argumentos de palavra-chave:**

```python
# Usando argumentos de palavra-chave
my_dict = dict(name="John", age=30)
print(my_dict)
```

```output
{'name': 'John', 'age': 30}
```

**Criando um dicionário a partir de um iterável:**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

```output
{'name': 'Jane', 'age': 25}
```

Criando um dicionário vazio:

```python
a = dict()
type(a)
```

```output
<class 'dict'>
```

## Links relevantes

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">Dicionários</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados Python</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
