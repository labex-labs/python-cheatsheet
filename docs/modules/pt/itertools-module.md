---
title: 'Módulo Python Itertools - Folha de Dicas Python'
description: 'O módulo itertools é uma coleção de ferramentas destinadas a serem rápidas e a usar a memória de forma eficiente ao lidar com iteradores (como listas ou dicionários).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Itertools
</base-title>

O módulo _itertools_ é uma coleção de ferramentas destinadas a serem rápidas e a usar a memória de forma eficiente ao lidar com iteradores (como <router-link to="/cheatsheet/lists-and-tuples">listas</router-link> ou <router-link to="/cheatsheet/dictionaries">dicionários</router-link>).

<base-disclaimer>
  <base-disclaimer-title>
    Da <a href="https://docs.python.org/3/library/itertools.html">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    O módulo padroniza um conjunto central de ferramentas rápidas e eficientes em termos de memória que são úteis por si só ou em combinação.
    Juntas, elas formam uma “álgebra de iteradores”, tornando possível construir ferramentas especializadas de forma sucinta e eficiente em Python puro.
  </base-disclaimer-content>
</base-disclaimer>

O módulo _itertools_ faz parte da biblioteca padrão e deve ser importado. Alguns exemplos também usam o módulo `operator`.

```python
import itertools
import operator
```

## accumulate()

Cria um iterador que retorna os resultados de uma função.

```python
itertools.accumulate(iterable[, func])
```

Exemplo:

```python
data = [1, 2, 3, 4, 5]
# Acumular com a função de multiplicação
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

```output
1
2
6
24
120
```

O operator.mul recebe dois números e os multiplica:

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

Passar uma função é opcional:

```python
data = [5, 2, 6, 4, 5, 9, 1]
# Acumular sem função, o padrão é a adição
result = itertools.accumulate(data)
for each in result:
    print(each)
```

```output
5
7
13
17
22
31
32
```

Se nenhuma função for designada, os itens serão somados:

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

Recebe um iterável e um inteiro. Isso criará todas as combinações exclusivas que têm r membros.

```python
itertools.combinations(iterable, r)
```

Exemplo:

```python
shapes = ['circle', 'triangle', 'square',]
# Gerar todas as combinações de 2 elementos
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

Assim como combinations(), mas permite que elementos individuais sejam repetidos mais de uma vez.

```python
itertools.combinations_with_replacement(iterable, r)
```

Exemplo:

```python
shapes = ['circle', 'triangle', 'square']
# Gerar combinações permitindo elementos repetidos
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

```output
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

Cria um iterador que retorna valores espaçados uniformemente começando com o número `start`.

```python
itertools.count(start=0, step=1)
```

Exemplo:

```python
# Contar começando em 10, incrementando de 3 em 3
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

```output
10
13
16
19
22
```

## cycle()

Esta função percorre um iterável infinitamente.

```python
itertools.cycle(iterable)
```

Exemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# Ciclar pelas cores infinitamente
for color in itertools.cycle(colors):
    print(color)
```

```output
red
orange
yellow
green
blue
violet
red
orange
```

Ao atingir o final do iterável, ele recomeça do início.

## chain()

Pega uma série de iteráveis e os retorna como um único iterável longo.

```python
itertools.chain(*iterables)
```

Exemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# Encadear múltiplos iteráveis em um só
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

```output
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

Filtra um iterável com outro.

```python
itertools.compress(data, selectors)
```

Exemplo:

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# Filtrar formas com base em seleções booleanas
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

```output
circle
square
```

## dropwhile()

Cria um iterador que descarta elementos do iterável enquanto o predicado for verdadeiro; depois disso, retorna todos os elementos restantes.

```python
itertools.dropwhile(predicate, iterable)
```

Exemplo:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Descartar elementos enquanto a condição for verdadeira, depois retornar todos os restantes
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
1
```

## filterfalse()

Cria um iterador que filtra elementos do iterável, retornando apenas aqueles para os quais o predicado é Falso.

```python
itertools.filterfalse(predicate, iterable)
```

Exemplo:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Retornar elementos onde o predicado é Falso
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
5
6
7
8
9
10
```

## groupby()

Simplificando, esta função agrupa itens.

```python
itertools.groupby(iterable, key=None)
```

Exemplo:

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# Agrupar robôs por facção (o iterável deve estar ordenado para um agrupamento correto)
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

```output
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

Esta função é muito parecida com fatias (slices). Ela permite que você corte um pedaço de um iterável.

```python
itertools.islice(iterable, start, stop[, step])
```

Exemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# Fatiar o iterável para obter os 2 primeiros elementos
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

```output
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

Exemplo:

```python
alpha_data = ['a', 'b', 'c']
# Gerar todas as permutações dos elementos
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

```output
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

Cria os produtos cartesianos de uma série de iteráveis.

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# Gerar o produto Cartesiano dos iteráveis
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

```output
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

Esta função repetirá um objeto repetidamente. A menos que haja um argumento `times`.

```python
itertools.repeat(object[, times])
```

Exemplo:

```python
# Repetir objeto 3 vezes
for i in itertools.repeat("spam", 3):
    print(i)
```

```output
spam
spam
spam
```

## starmap()

Cria um iterador que calcula a função usando argumentos obtidos do iterável.

```python
itertools.starmap(function, iterable)
```

Exemplo:

```python
data = [(2, 6), (8, 4), (7, 3)]
# Aplicar função a argumentos desempacotados de cada tupla
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

```output
12
32
21
```

## takewhile()

O oposto de dropwhile(). Cria um iterador e retorna elementos do iterável enquanto o predicado for verdadeiro.

```python
itertools.takewhile(predicate, iterable)
```

Exemplo:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# Pegar elementos enquanto a condição for verdadeira, depois parar
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

```output
1
2
3
4
```

## tee()

Retorna n iteradores independentes a partir de um único iterável.

```python
itertools.tee(iterable, n=2)
```

Exemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# Dividir o iterável em dois iteradores independentes
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

```output
red
orange
yellow
green
blue
```

## zip_longest()

Cria um iterador que agrega elementos de cada um dos iteráveis. Se os iteráveis tiverem comprimentos desiguais, os valores ausentes são preenchidos com `fillvalue`. A iteração continua até que o iterável mais longo se esgote.

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

Exemplo:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# Juntar iteráveis, preenchendo valores ausentes com None
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

```output
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Fluxo de Controle (laços for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Compreensões</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funções (Geradores)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Compreensões Python Passo a Passo</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
