---
title: 'Listas e Tuplas Python - Folha de Dicas Python'
description: 'Em Python, Listas são um dos 4 tipos de dados usados para armazenar coleções de dados.'
labUrl: 'https://labex.io/pt/labs/python-python-lists-and-tuples-633660?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Listas Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Listas são um dos 4 tipos de dados em Python usados para armazenar coleções de dados.

```python
# Lista: coleção ordenada de itens entre colchetes
['John', 'Peter', 'Debora', 'Charles']
```

## Obtendo valores com índices

```python
# Acessar elementos da lista usando índice (base 0, o primeiro elemento é o índice 0)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0]  # Retorna o primeiro elemento: 'table'
```

Output:

```plaintext
'table'
```

```python
furniture[1]
```

Output:

```plaintext
'chair'
```

```python
furniture[2]
```

Output:

```plaintext
'rack'
```

```python
furniture[3]
```

Output:

```plaintext
'shelf'
```

## Índices negativos

```python
# Índice negativo: acessa elementos do final da lista
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # Retorna o último elemento: 'shelf'
```

Output:

```plaintext
'shelf'
```

```python
furniture[-3]
```

Output:

```plaintext
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

Output:

```plaintext
'The shelf is bigger than the chair'
```

## Obtendo sublistas com Fatias (Slices)

```python
# Fatiamento (Slicing): obter sublista usando a sintaxe [início:fim] (fim é exclusivo)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # Retorna elementos do índice 0 ao 3 (4 excluído)
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

Output:

```plaintext
['chair', 'rack']
```

```python
furniture[0:-1]
```

Output:

```plaintext
['table', 'chair', 'rack']
```

```python
# Fatiar do início: omitir o índice de início (padrão é 0)
furniture[:2]  # Retorna os dois primeiros elementos
```

Output:

```plaintext
['table', 'chair']
```

```python
# Fatiar até o fim: omitir o índice final (padrão é o final da lista)
furniture[1:]  # Retorna todos os elementos do índice 1 até o final
```

Output:

```plaintext
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

Fatiar a lista completa fará uma cópia:

```python
# O fatiamento cria uma cópia: [:] cria uma cópia superficial da lista
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # Cria uma cópia, não uma referência
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

## Obtendo o comprimento de uma lista com len()

```python
# len() retorna o número de itens em uma lista
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # Retorna 4
```

Output:

```plaintext
4
```

## Alterando valores com índices

```python
# Modificar elementos da lista atribuindo novos valores aos índices
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # Substitui o primeiro elemento
furniture
```

Output:

```plaintext
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'bed']
```

## Concatenação e Replicação

```python
# Concatenação de listas: combina duas listas usando o operador +
[1, 2, 3] + ['A', 'B', 'C']  # Retorna [1, 2, 3, 'A', 'B', 'C']
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

```python
# Replicação de lista: repete a lista várias vezes usando o operador *
['X', 'Y', 'Z'] * 3  # Retorna ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

Output:

```plaintext
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

## Usando loops for com Listas

```python
# Iterar sobre os elementos da lista usando loop for
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # Percorre cada item
    print(item)
```

Output:

```plaintext
table
chair
rack
shelf
```

## Obtendo o índice em um loop com enumerate()

```python
# enumerate() retorna tanto o índice quanto o valor em um loop
furniture = ['table', 'chair', 'rack', 'shelf']

for index, item in enumerate(furniture):  # Obtém índice e item juntos
    print(f'index: {index} - item: {item}')
```

Output:

```plaintext
index: 0 - item: table
index: 1 - item: chair
index: 2 - item: rack
index: 3 - item: shelf
```

## Loop em Múltiplas Listas com zip()

```python
# zip() combina múltiplas listas elemento por elemento em um loop
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):  # Emparelha elementos de ambas as listas
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Os operadores in e not in

```python
# Operador in: verifica se um item existe em uma lista
'rack' in ['table', 'chair', 'rack', 'shelf']  # Retorna True
```

Output:

```plaintext
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

Output:

```plaintext
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

Output:

```plaintext
True
```

```python
'rack' not in furniture
```

Output:

```plaintext
False
```

## O Truque da Atribuição Múltipla

O truque da atribuição múltipla é um atalho que permite atribuir múltiplas variáveis com os valores em uma lista em uma única linha de código. Então, em vez de fazer isto:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table = furniture[0]
chair = furniture[1]
rack = furniture[2]
shelf = furniture[3]
```

Você poderia digitar esta linha de código:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table, chair, rack, shelf = furniture

table
```

Output:

```plaintext
'table'
```

```python
chair
```

Output:

```plaintext
'chair'
```

```python
rack
```

Output:

```plaintext
'rack'
```

```python
shelf
```

Output:

```plaintext
'shelf'
```

O truque da atribuição múltipla também pode ser usado para trocar os valores em duas variáveis:

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

Output:

```plaintext
chair
```

```python
print(b)
```

Output:

```plaintext
table
```

## O Método index

O método `index` permite encontrar o índice de um valor passando seu nome:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

Output:

```plaintext
1
```

## Adicionando Valores

### append()

`append` adiciona um elemento ao final de uma `list`:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.append('bed')
furniture
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert` adiciona um elemento a uma `list` em uma posição dada:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

Output:

```plaintext
['table', 'bed', 'chair', 'rack', 'shelf']
```

## Removendo Valores

### del()

`del` remove um item usando o índice:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair']
```

### remove()

`remove` remove um item usando seu valor real:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

Output:

```plaintext
['table', 'rack', 'shelf']
```

<base-warning>
  <base-warning-title>
    Removendo itens repetidos
  </base-warning-title>
  <base-warning-content>
    Se o valor aparecer múltiplas vezes na lista, apenas a primeira ocorrência do valor será removida.
  </base-warning-content>
</base-warning>

### pop()

Por padrão, `pop` removerá e retornará o último item da lista. Você também pode passar o índice do elemento como um parâmetro opcional:

```python
animals = ['cat', 'bat', 'rat', 'elephant']

animals.pop()
```

Output:

```plaintext
'elephant'
```

```python
animals
```

Output:

```plaintext
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

Output:

```plaintext
'cat'
```

```python
animals
```

Output:

```plaintext
['bat', 'rat']
```

## Ordenando valores com sort()

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

Output:

```plaintext
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

Você também pode passar `True` para o argumento de palavra-chave `reverse` para fazer com que `sort()` ordene os valores em ordem inversa:

```python
furniture.sort(reverse=True)
furniture
```

Output:

```plaintext
['table', 'shelf', 'rack', 'chair']
```

Se você precisar ordenar os valores em ordem alfabética regular, passe `str.lower` para o argumento de palavra-chave `key` na chamada do método sort():

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

Output:

```plaintext
['a', 'A', 'z', 'Z']
```

Você pode usar a função embutida `sorted` para retornar uma nova lista:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

## O tipo de dado Tuple (Tupla)

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each">Tuplas vs Listas</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A principal diferença entre tuplas e listas é que, enquanto as <code>tuplas</code> são objetos <i>imutáveis</i>, as <code>listas</code> são <i>mutáveis</i>. Isso significa que as tuplas não podem ser alteradas, enquanto as listas podem ser modificadas. Tuplas são mais eficientes em termos de memória do que as listas.
  </base-disclaimer-content>
</base-disclaimer>

```python
furniture = ('table', 'chair', 'rack', 'shelf')

furniture[0]
```

Output:

```plaintext
'table'
```

```python
furniture[1:3]
```

Output:

```plaintext
('chair', 'rack')
```

```python
len(furniture)
```

Output:

```plaintext
4
```

A principal forma como as tuplas diferem das listas é que as tuplas, como as strings, são imutáveis.

## Convertendo entre list() e tuple()

```python
tuple(['cat', 'dog', 5])
```

Output:

```plaintext
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

Output:

```plaintext
['cat', 'dog', 5]
```

```python
list('hello')
```

Output:

```plaintext
['h', 'e', 'l', 'l', 'o']
```

## Links relevantes

- <router-link to="/blog/python-data-types">Python Data Types: A Visual Guide for Beginners</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions Step-by-Step</router-link>
- <router-link to="/cheatsheet/comprehensions">Python Comprehensions</router-link>
- <router-link to="/modules/itertools-module">The itertools Module</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
