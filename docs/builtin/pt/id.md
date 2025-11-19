---
title: 'Função Embutida id() do Python - Folha de Dicas Python'
description: 'Retorna a “identidade” de um objeto. Este é um número inteiro garantido como único e constante para este objeto durante sua vida útil. Dois objetos com vidas úteis não sobrepostas podem ter o mesmo valor id().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in id() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna a “identidade” de um objeto. Este é um inteiro que é garantido ser único e constante para este objeto durante sua vida útil. Dois objetos com vidas úteis não sobrepostas podem ter o mesmo valor id().
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `id()` retorna um inteiro único que identifica um objeto na memória. Este ID é garantido ser único durante a vida útil do objeto. É essencialmente o endereço de memória do objeto.

### Exemplos

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # mesmo que id(x) porque Python armazena inteiros pequenos em cache
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

```output
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## Links relevantes

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Noções Básicas de OOP</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados do Python</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
