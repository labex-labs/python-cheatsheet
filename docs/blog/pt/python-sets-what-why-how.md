---
title: 'Conjuntos Python: O Quê, Porquê e Como - Guia Rápido Python'
description: "Ao escrever código, pode fazê-lo de mais de uma maneira. Algumas são consideradas más, outras claras, concisas e manteníveis. Ou seja, 'pythónicas'. Neste artigo, vamos explorar como os Conjuntos Python podem ajudar-nos não só na legibilidade, mas também a acelerar o tempo de execução dos nossos programas."
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Conjuntos Python: O Quê, Porquê e Como - Guia Rápido Python"
    description: "Ao escrever código, pode fazê-lo de mais de uma maneira. Algumas são consideradas más, outras claras, concisas e manteníveis. Ou seja, 'pythónicas'. Neste artigo, vamos explorar como os Conjuntos Python podem ajudar-nos não só na legibilidade, mas também a acelerar o tempo de execução dos nossos programas."
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Conjuntos Python: O Quê, Porquê e Como - Guia Rápido Python" />

Python vem equipado com vários tipos de dados nativos para nos ajudar a organizar nossos dados. Essas estruturas incluem `lists`, `dictionaries`, `tuples` e `sets`.

<base-disclaimer>
  <base-disclaimer-title>
    Da documentação do <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Um <code>set</code> é uma <b>coleção não ordenada</b> sem <b>elementos duplicados</b>. Os usos básicos incluem <b>teste de pertinência</b> e <b>eliminação de entradas duplicadas</b>. Os objetos Set também suportam operações matemáticas como <b>união</b>, <b>interseção</b>, <b>diferença</b> e <b>diferença simétrica</b>
  </base-disclaimer-content>
</base-disclaimer>

Neste artigo, vamos revisar cada um dos elementos listados na definição acima. Vamos começar imediatamente e ver como podemos criá-los.

## Inicializando um Conjunto (Set)

Existem duas maneiras de criar um conjunto: uma é usar a função nativa `set()` e passar uma `list` de elementos, e a outra é usar as chaves `{}`.

### Inicializando um conjunto usando a função nativa `set()`

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### Inicializando um conjunto usando chaves `{}`

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    Conjuntos Vazios
  </base-warning-title>
  <base-warning-content>
    Ao criar um conjunto, certifique-se de não usar chaves vazias <code>{}</code> ou você obterá um dicionário vazio em vez disso.
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

É um bom momento para mencionar que, por uma questão de simplicidade, todos os exemplos fornecidos neste artigo usarão inteiros de um único dígito, mas os conjuntos podem conter todos os tipos de dados [hashable](https://docs.python.org/3/glossary.html#term-hashable) que o Python suporta. Em outras palavras, inteiros, strings e tuplas, mas não itens _mutáveis_ como _listas_ ou _dicionários_:

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

Agora que você sabe como criar um conjunto e que tipo de elementos ele pode conter, vamos continuar e ver _por que_ devemos sempre tê-los em nosso arsenal.

## Por que você deve usá-los

Podemos escrever código de mais de uma maneira. Algumas são consideradas muito ruins, e outras, _claras, concisas e manteníveis_. Ou "[_pythonicas_](http://docs.python-guide.org/en/latest/writing/style/)".

<base-disclaimer>
  <base-disclaimer-title>
    De <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Quando um desenvolvedor Python experiente (um Pythonista) chama partes do código de não "Pythonicas", geralmente quer dizer que essas linhas de código não seguem as diretrizes comuns e falham em expressar sua intenção da maneira considerada a melhor (ouça: mais legível).
  </base-disclaimer-content>
</base-disclaimer>

Vamos começar a explorar a maneira como os conjuntos Python podem nos ajudar não apenas com a legibilidade, mas também com o tempo de execução do nosso programa.

## Coleção não ordenada de elementos

Primeiramente: você não pode acessar um objeto `set` usando índices.

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

Ou modificá-los com fatias (slices):

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

_MAS_, se o que precisamos é remover duplicatas, ou fazer operações matemáticas como combinar listas (uniões), podemos, e _DEVE_ sempre usar conjuntos.

Tenho que mencionar que **ao iterar, as listas superam os conjuntos**, então prefira-as se for isso que você precisa. Por quê? Bem, este artigo não pretende explicar o funcionamento interno dos conjuntos, mas aqui estão alguns links onde você pode ler sobre isso:

- [Time Complexity](https://wiki.python.org/moin/TimeComplexity)
- [How is set() implemented?](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python Sets vs Lists](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## Sem itens duplicados

Enquanto escrevia isto, não consigo parar de pensar em todas as vezes que usei um loop _for_ e a instrução _if_ para verificar e remover elementos duplicados em uma lista. Meu rosto fica vermelho ao lembrar que, mais de uma vez, escrevi algo como isto:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

Ou usei uma compreensão de lista (list comprehension):

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

Mas tudo bem, nada disso importa mais porque agora temos os conjuntos:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## Desempenho dos Conjuntos (Sets performance)

Agora vamos usar o módulo _timeit_ e ver o tempo de execução de listas e conjuntos ao remover duplicatas:

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # primeiro, vamos ver como a lista se comporta:
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # e o conjunto:
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # mais rápido e mais limpo =)
```

Não só escrevemos _menos linhas de código_ com conjuntos do que com compreensões de lista, como também obtemos um código mais _legível_ e _performático_.

<base-warning>
  <base-warning-title>
    lembre-se que conjuntos não são ordenados
  </base-warning-title>
  <base-warning-content>
    Não há garantia de que, ao convertê-los de volta para uma lista, a ordem dos elementos será preservada.
  </base-warning-content>
</base-warning>

Do [Zen of Python](https://www.python.org/dev/peps/pep-0020/):

> Bonito é melhor que feio. <br>
> Explícito é melhor que implícito.<br>
> Simples é melhor que complexo.<br>
> Plano é melhor que aninhado.

Os conjuntos não são Bonitos, Explícitos, Simples e Planos?

## Testes de pertinência (Membership tests)

Toda vez que usamos uma instrução _if_ para verificar se um elemento está, por exemplo, em uma lista, você está fazendo um teste de pertinência:

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

E os conjuntos são mais performáticos que as listas ao realizá-los:

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

Os testes acima vêm desta [thread do Stack Overflow](https://stackoverflow.com/questions/2831212/python-sets-vs-lists).

Portanto, se você estiver fazendo comparações como esta em listas massivas, isso acelerará um pouco seu código se você converter essa lista em um conjunto.

## Adicionando Elementos

Dependendo do número de elementos a serem adicionados, teremos que escolher entre os métodos `add()` e `update()`.

`add()` Adicionará um único elemento:

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

E `update()` múltiplos elementos:

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

Lembre-se, conjuntos removem duplicatas.

## Removendo Elementos

Se você deseja ser alertado quando seu código tentar remover um elemento que não está no conjunto, use `remove()`. Caso contrário, `discard()` fornece uma alternativa adequada:

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` não levantará nenhum erro:

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # nada acontece!
```

Também podemos usar `pop()` para descartar um elemento aleatoriamente:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # remove um elemento arbitrário
1
>>> s
{2, 3, 4, 5}
```

Ou `clear()` para remover todos os valores de um conjunto:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # descarta todos os itens
>>> s
set()
```

## O método union()

`union()` ou `|` criará um novo conjunto que contém todos os elementos dos conjuntos que fornecermos:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # ou 's1 | s2'
{1, 2, 3, 4, 5}
```

## O método intersection()

`intersection` ou `&` retornará um conjunto contendo apenas os elementos que são comuns em todos eles:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # ou 's1 & s2 & s3'
{3}
```

## O método difference()

Diferença cria um novo conjunto com os valores que estão em "s1" mas não em "s2":

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # ou 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` ou `^` retornará todos os valores que não são comuns entre os conjuntos.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # ou 's1 ^ s2'
{1, 4}
```

## Conclusões

Espero que, depois de ler este artigo, você saiba o que é um conjunto, como manipular seus elementos e as operações que eles podem realizar. Saber quando usar um conjunto definitivamente o ajudará a escrever um código mais limpo e acelerar seus programas.
