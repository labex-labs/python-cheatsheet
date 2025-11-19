---
title: 'Módulo Random do Python - Folha de Dicas Python'
description: 'O módulo random é um módulo nativo que permite gerar elementos aleatórios.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Random
</base-title>

O módulo [random](https://docs.python.org/3/library/random.html) é um módulo embutido que nos permite gerar elementos aleatórios.

```python
import random
```

## seed()

O método `seed` é usado para inicializar o gerador de números aleatórios.

```python
# Define a semente para números aleatórios reprodutíveis
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

Definir a semente para um número sempre retornará o mesmo número aleatório:

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

O valor padrão do método `seed` é o _tempo atual do sistema_, é por isso que sempre obtemos um número diferente:

```python
# Gera número aleatório sem definir a semente (usa o tempo do sistema)
random.random()
```

```output
0.8474337369372327
```

```python
random.random()
```

```output
0.763774618976614
```

```python
random.random()
```

```output
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

Este método retorna um número aleatório entre os parâmetros de início e parada fornecidos:

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
2
```

```python
random.randint(1, 5)
```

```output
5
```

```python
random.randint(1, 5)
```

```output
1
```

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
1
```

## choice()

O método `choice` retorna um elemento selecionado aleatoriamente de um iterável, como uma `list`, `set` ou `str`:

```python
random.choice([1, 2, 3, 4])
```

```output
1
```

```python
random.choice([1, 2, 3, 4])
```

```output
2
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

## shuffle()

O método `shuffle` recebe um iterável e o embaralha:

```python
my_list = [1, 2, 3, 4]

# Embaralha a lista no local (in place)
random.shuffle(my_list)
my_list
```

```output
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

```output
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

```output
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample` retorna uma lista com uma seleção aleatória de um iterável. O número de elementos retornados é igual ao parâmetro `k`:

```python
# Seleciona aleatoriamente k elementos da lista
random.sample([1, 2, 3, 4], 1)
```

```output
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

```output
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

```output
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

```output
[1, 2, 4, 3]
```

## random()

O método `random` retorna um número de ponto flutuante aleatório entre 0.0 e 1.0:

```python
random.random()
```

```output
0.4143139993007743
```

```python
random.random()
```

```output
0.17300740157905092
```

```python
random.random()
```

```output
0.548798761388153
```

```python
random.random()
```

```output
0.7030407620656315
```

## uniform()

O método `uniform` é semelhante a `randint`, mas retorna um número de ponto flutuante:

```python
random.uniform(1, 5)
```

```output
3.697943322009309
```

```python
random.uniform(1, 5)
```

```output
2.498812082006561
```

```python
random.uniform(1, 5)
```

```output
2.7558465201782525
```

```python
random.uniform(1, 5)
```

```output
3.0337059529999273
```

## Links relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
