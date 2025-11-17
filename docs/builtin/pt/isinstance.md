---
title: 'Função Integrada Python isinstance() - Guia Rápido Python'
description: 'Retorna Verdadeiro se o argumento objeto for uma instância do argumento classinfo, ou de uma subclasse (direta, indireta ou virtual) dele. Se objeto não for uma instância do tipo fornecido, a função sempre retorna Falso. Se classinfo for uma tupla de objetos de tipo (ou recursivamente, outras tuplas) ou um Tipo União de múltiplos tipos, retorna Verdadeiro se objeto for uma instância de qualquer um dos tipos. Se classinfo não for um tipo ou tupla de tipos e tais tuplas, uma exceção TypeError é levantada.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python isinstance()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna True se o argumento object for uma instância da classe classinfo, ou de uma subclasse (direta, indireta ou virtual) desta. Se object não for um objeto do tipo fornecido, a função sempre retorna False. Se classinfo for uma tupla de objetos de tipo (ou recursivamente, outras tuplas desse tipo) ou um Tipo Union de múltiplos tipos, retorna True se object for uma instância de qualquer um dos tipos. Se classinfo não for um tipo ou tupla de tipos e tais tuplas, uma exceção TypeError é levantada.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `isinstance()` verifica se um objeto é uma instância de uma classe particular ou de uma subclasse dela. Retorna `True` se o objeto for do tipo especificado e `False` caso contrário.

Você também pode verificar contra uma tupla de tipos.

### Exemplos

**Verificando o tipo de um objeto:**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

Saída:

```plaintext
True
False
```

**Verificando contra múltiplos tipos:**

```python
print(isinstance("hello", (int, str, list)))
```

Saída:

```plaintext
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

Saída:

```plaintext
True
False
```

## Links relevantes

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Noções Básicas de OOP</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados Python</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
