---
title: 'Função Embutida issubclass() do Python - Folha de Dicas Python'
description: 'Retorna Verdadeiro se a classe for uma subclasse (direta, indireta ou virtual) de classinfo. Uma classe é considerada uma subclasse de si mesma. classinfo pode ser uma tupla de objetos de classe (ou recursivamente, outras tuplas) ou um Tipo União, caso em que retorna Verdadeiro se a classe for uma subclasse de qualquer entrada em classinfo. Em qualquer outro caso, uma exceção TypeError é levantada.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in issubclass() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna True se class for uma subclasse (direta, indireta ou virtual) de classinfo. Uma classe é considerada uma subclasse de si mesma. classinfo pode ser uma tupla de objetos de classe (ou recursivamente, outras tuplas desse tipo) ou um Tipo Union, caso em que retorna True se class for uma subclasse de qualquer entrada em classinfo. Em qualquer outro caso, uma exceção TypeError é levantada.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `issubclass()` em Python é uma função built-in que verifica se uma determinada classe é uma subclasse de outra classe ou de uma tupla de classes. Ela retorna `True` se o primeiro argumento for uma subclasse do segundo argumento, e `False` caso contrário. Esta função é útil para programação orientada a objetos, pois permite verificar relações de classe e implementar comportamento polimórfico baseado em herança.

## Exemplos

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

```output
True
False
```

## Links Relevantes

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Noções Básicas de OOP</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
