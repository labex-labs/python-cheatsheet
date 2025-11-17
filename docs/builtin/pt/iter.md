---
title: 'Função Embutida iter() do Python - Folha de Dicas Python'
description: 'Retorna um objeto iterador. O primeiro argumento é interpretado de forma muito diferente dependendo da presença do segundo argumento. Sem um segundo argumento, o objeto deve ser um objeto de coleção que suporte o protocolo iterável, ou deve suportar o protocolo de sequência. Se não suportar nenhum desses protocolos, um TypeError é levantado.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in iter() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um objeto iterador. O primeiro argumento é interpretado de forma muito diferente dependendo da presença do segundo argumento. Sem um segundo argumento, object deve ser um objeto de coleção que suporte o protocolo iterável, ou deve suportar o protocolo de sequência. Se não suportar nenhum desses protocolos, TypeError é levantado.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `iter()` retorna um objeto iterador. Um iterador é um objeto sobre o qual se pode iterar (fazer um loop). É o que alimenta os loops `for` em Python.

Você pode usar `iter()` para obter um iterador de qualquer objeto iterável, como uma lista, tupla ou string.

### Exemplos

**Obtendo um iterador de uma lista:**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

Saída:

```plaintext
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

Saída:

```plaintext
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## Links relevantes

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">Fluxo de Controle</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listas e Tuplas</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
