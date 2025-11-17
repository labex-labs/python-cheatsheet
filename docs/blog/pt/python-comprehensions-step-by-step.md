---
title: 'Compreensões Python: Introdução Passo a Passo - Guia Rápido Python'
description: "Neste artigo conciso, transformaremos laços 'for' passo a passo em compreensões."
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Compreensões Python: Introdução Passo a Passo - Guia Rápido Python"
    description: "Neste artigo conciso, transformaremos laços 'for' passo a passo em compreensões."
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="Compreensões Python: Introdução Passo a Passo - Guia Rápido Python" />

_List Comprehensions_ são um tipo especial de sintaxe que nos permite criar listas a partir de outras listas ([Wikipedia](https://en.wikipedia.org/wiki/List_comprehension), [The Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)). Elas são incrivelmente úteis ao lidar com números e com um ou dois níveis de _for loops_ aninhados, mas além disso, podem se tornar um pouco difíceis de ler.

Neste artigo, vamos criar alguns _For Loops_ e reescrevê-los, passo a passo, em _Comprehensions_.

## Básico

A verdade é que _List Comprehensions_ não são muito complexas, mas ainda são um pouco difíceis de entender no início porque parecem um _pouco_ estranhas. Por quê? Bem, a ordem em que são escritas é o **_oposto_** do que geralmente vemos em um _For Loop_.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

Para fazer o mesmo com uma _List Comprehension_, começamos bem no final do _loop_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

Note como invertemos a ordem:

- Primeiro, temos o que será a saída do loop `[print(n) ...]`.
- Depois, definimos a variável que armazenará cada um dos itens e apontamos para a `List`, `Set` ou `Dictionary` com a qual trabalharemos `[... for n in names]`.

## Criando uma nova Lista com uma Comprehension

> Este é o uso principal de uma _List Comprehension_. Outros usos podem resultar em um código difícil de ler para você e para os outros.

É assim que criamos uma nova lista a partir de uma coleção existente com um _For Loop_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

E é assim que fazemos o mesmo com uma _List Comprehension_:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

A razão pela qual podemos fazer isso é que o comportamento padrão de uma _List Comprehension_ é retornar uma lista:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## Adicionando Condicionais

E se quisermos que `new_list` contenha apenas os nomes que começam com `C`? Com um _For Loop_, faríamos assim:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

Em uma _List Comprehension_, adicionamos a instrução if no final:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

Muito mais legível.

## Formatando List Comprehensions longas

Desta vez, queremos que `new_list` contenha não apenas os nomes que começam com `C`, mas também aqueles que terminam com `e` e contêm um `k`:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

Isso está bem confuso. Felizmente, é possível dividir _Comprehensions_ em linhas diferentes:

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## Set e Dict Comprehensions

Se você aprendeu o básico de _List Comprehensions_... Parabéns! Você acabou de fazer isso com <router-link to="/cheatsheet/sets">Sets</router-link> e <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>.

### Set comprehension

```python
>>> my_set = {"abc", "def"}

>>> # Aqui, criamos um novo set com elementos em maiúsculas com um for loop
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # O mesmo, mas com uma set comprehension
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### Dict comprehension

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # Um novo dicionário a partir de um existente com um for loop
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# Usando uma dict comprehension
>>> new_dict = {key: value for key, value in my_dict.items()}  # Note o ":"
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> Artigo Recomendado: [Python Sets: O Que, Por Que e Como ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how).

## Conclusão

Toda vez que aprendo algo novo, surge essa vontade de usá-lo imediatamente. Quando isso acontece, eu me forço a parar e pensar por um momento... Devo mudar este _For Loop_ grande, aninhado e com aparência já confusa para uma _List Comprehension_? Provavelmente não.

> Legibilidade conta. [The Zen of Python](https://www.python.org/dev/peps/pep-0020/).
