---
title: 'Função Embutida reversed() do Python - Folha de Dicas Python'
description: 'Retorna um iterador reverso. seq deve ser um objeto que tenha um método __reversed__() ou suporte o protocolo de sequência (o método __len__() e o método __getitem__() com argumentos inteiros começando em 0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python reversed()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um iterador reverso. seq deve ser um objeto que tenha um método __reversed__() ou suporte o protocolo de sequência (o método __len__() e o método __getitem__() com argumentos inteiros começando em 0).
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `reversed()` retorna um iterador reverso. Isso significa que pode ser usada para percorrer uma sequência (como uma <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link> ou <router-link to="/builtin/str">string</router-link>) em ordem inversa. Ela não modifica a sequência original, mas sim fornece um novo iterador que produz itens do fim para o início.

### Exemplos

Para obter uma lista invertida, você pode converter o iterador em uma lista:

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

```output
[5, 4, 3, 2, 1]
```

Você também pode iterar sobre ele diretamente em um loop `for`:

```python
for char in reversed("hello"):
    print(char)
```

```output
o
l
l
e
h
```

Aqui está outro exemplo demonstrando o comportamento do iterador:

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
3
2
1
```

## Links relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Controle de Fluxo (laços for)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
