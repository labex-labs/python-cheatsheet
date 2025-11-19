---
title: 'Função Embutida getattr() do Python - Folha de Dicas Python'
description: 'Retorna o valor do atributo nomeado do objeto. O nome deve ser uma string. Se a string for o nome de um dos atributos do objeto, o resultado será o valor desse atributo.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in getattr() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna o valor do atributo nomeado do objeto. name deve ser uma string. Se a string for o nome de um dos atributos do objeto, o resultado será o valor desse atributo.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `getattr()` em Python é uma função built-in que permite acessar o atributo de um objeto pelo seu nome, fornecido como uma string. Este é um recurso poderoso para programação dinâmica, pois permite recuperar um atributo quando seu nome só é conhecido em tempo de execução. Você também pode fornecer um valor padrão a ser retornado se o atributo não existir, o que ajuda a evitar erros.

## Sintaxe

```python
getattr(object, name)
```

ou

```python
getattr(object, name, default)
```

-`object`: O objeto cujo atributo você deseja acessar.

-`name`: O nome do atributo que você deseja recuperar.

-`default`: (Opcional) O valor a ser retornado se o atributo não for encontrado. Se não for fornecido, `None` é retornado.

## Exemplo

```python
class Example:
    attribute = "Hello, World!"

# Criando uma instância da classe
obj = Example()

# Usando getattr para acessar o atributo
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

```output
Hello, World!
```

Nota: Se o 'attribute' não existir, 'Nothing found' será impresso.

## Links relevantes

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Noções Básicas de OOP</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
