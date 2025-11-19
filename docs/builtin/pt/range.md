---
title: 'Função Integrada range() do Python - Folha de Dicas Python'
description: 'Em vez de ser uma função, range é na verdade um tipo de sequência imutável, conforme documentado em Ranges and Sequence Types — list, tuple, range.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python range()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Em vez de ser uma função, range é na verdade um tipo de sequência imutável, conforme documentado em Ranges and Sequence Types — list, tuple, range.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

O tipo `range` é comumente usado em loops `for` para iterar um número específico de vezes. `range` aceita três parâmetros, `start`, `stop` e `step`. Cada parâmetro deve ser um inteiro (seja o <router-link to="/builtin/int">int</router-link> built-in ou qualquer objeto que implemente o método especial **index**()).

Se houver apenas um parâmetro, ele representa o parâmetro `stop`. Se o parâmetro `step` for omitido, ele terá o valor padrão de `1`. Se o parâmetro `start` for omitido, ele terá o valor padrão de `0`.

Ranges suportam índices negativos, mas estes são interpretados como indexação a partir do final da sequência determinada pelos índices positivos.

\*\*\*A vantagem do tipo range sobre uma <router-link to="/builtin/list">list</router-link> ou <router-link to="/builtin/tuple">tuple</router-link> regular é que um objeto range sempre ocupará a mesma (pequena) quantidade de memória, independentemente do tamanho do intervalo que ele representa.

## Parâmetros de Entrada

Ranges implementam todas as operações comuns de sequência, exceto concatenação e repetição (devido ao fato de que objetos range só podem representar sequências que seguem um padrão estrito e repetição e concatenação geralmente violam esse padrão).

`start`:

- O valor do parâmetro start
- Se não for fornecido, o parâmetro terá o valor padrão de 0
- O valor do parâmetro é _inclusivo_

`stop`

- O valor do parâmetro stop
- O único parâmetro que é obrigatório
- O valor do parâmetro é _exclusivo_

`step`

- O valor do parâmetro step
- Se não for fornecido, o parâmetro terá o valor padrão de 1

## Exemplos

Range com apenas o parâmetro `stop` especificado

```python
for i in range(5):
    print(i)
```

```output
0
1
2
3
4
```

Range com os parâmetros `start` e `stop`

```python
for i in range(1, 8):
    print(i)
```

```output
1
2
3
4
5
6
7
```

Range com todos os parâmetros especificados

```python
for i in range(0, 30, 5):
    print(i)
```

```output
0
5
10
15
20
25
```

Range com todos os parâmetros, onde o parâmetro `stop` não é divisível pelo parâmetro `step`

```python
for i in range(0, 10, 3):
    print(i)
```

```output
0
3
6
9
```

Range com todos os parâmetros, onde os parâmetros `stop` e `step` são negativos

```python
for i in range(0, -6, -1):
    print(i)
```

```output
0
-1
-2
-3
-4
-5
```

Dois exemplos onde o parâmetro `stop` é definido como 0

```python
for i in range(0):
    print(i)
```

```output
(sem saída)
```

```python
for i in range(1, 0):
    print(i)
```

```output
(sem saída)
```

## Links Relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Controle de Fluxo (loops for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
