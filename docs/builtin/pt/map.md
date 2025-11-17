---
title: 'Função Embutida map() em Python - Guia Rápido Python'
description: 'Retorna um iterador que aplica a função a cada item do iterável, produzindo os resultados. Se argumentos iteráveis adicionais forem passados, a função deve aceitar esse número de argumentos e é aplicada aos itens de todos os iteráveis em paralelo. Com múltiplos iteráveis, o iterador para quando o iterável mais curto se esgota. Para casos em que as entradas da função já estão organizadas em tuplas de argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in map() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um iterador que aplica a função a cada item do iterável, produzindo os resultados. Se argumentos iteráveis adicionais forem passados, a função deve aceitar esse número de argumentos e é aplicada aos itens de todos os iteráveis em paralelo. Com múltiplos iteráveis, o iterador para quando o iterável mais curto se esgota. Para casos em que as entradas da função já estão organizadas em <router-link to="/builtin/tuple">tuplas</router-link> de argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função map, _map(função, iterável)_ recebe um ou mais iteráveis, uma 'função de retorno de chamada' (frequentemente uma lambda), e retorna um "Objeto Map". O objeto map contém o resultado da função map aplicando o callback a cada elemento nos argumentos iteráveis. Map itera sobre os objetos iteráveis fornecidos simultaneamente. Ou seja, a cada passo, "i" na função map, o elemento no índice "i" de cada iterável estará disponível para a função map naquele momento. Você frequentemente desejará converter o objeto map resultante para uma <router-link to="/builtin/list">lista</router-link>, <router-link to="/builtin/tuple">tupla</router-link>, ou outra forma de objeto que seja mais conveniente de trabalhar depois de terminar o mapeamento.

\*\*\*Uma nota importante: A partir do lançamento do Python 3, se os iteráveis fornecidos ao map forem de comprimentos diferentes, o map irá parar e retornar quando atingir o número de passos correspondente ao comprimento do iterável mais curto.

## Parâmetros de Entrada

Função: recebe o item (ou itens) no índice correspondente ao passo atual do Map e dá o resultado retornado como um item para armazenar no Objeto Map. O tipo de elemento armazenado no objeto map será idêntico ao tipo retornado pela função.

Iterável(eis): `<router-link to="/builtin/tuple">tupla</router-link>`, `<router-link to="/builtin/list">lista</router-link>`, `<router-link to="/builtin/range">range</router-link>`, `<router-link to="/builtin/dict">dicionário</router-link>`, `<router-link to="/builtin/set">conjunto</router-link>`, `<router-link to="/builtin/str">string</router-link>`.

## Um exemplo muito simples

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

Saída:

```plaintext
[2, 4, 6, 8]
```

## Um exemplo menos simples

### Este exemplo emprega uma função de retorno de chamada escrita como uma lambda, assim como

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

Saída:

```plaintext
[4, 10, 18]
```

## Um exemplo demonstrando o tratamento do map para diferentes comprimentos de iteráveis

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

Saída:

```plaintext
[1, 1, 1]
```

Note como o comprimento da lista resultante é igual ao comprimento de list1?

## Links relevantes

- <router-link to="/cheatsheet/functions">Cheatsheet: Funções (incluindo Lambdas)</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python Comprehensions Passo a Passo</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
