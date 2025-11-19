---
title: 'Função Embutida hasattr() do Python - Folha de Dicas Python'
description: 'Os argumentos são um objeto e uma string. O resultado é Verdadeiro se a string for o nome de um dos atributos do objeto, Falso caso contrário. (Isso é implementado chamando getattr(objeto, nome) e verificando se levanta um AttributeError ou não.)'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python hasattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Os argumentos são um objeto e uma string. O resultado é `True` se a string for o nome de um dos atributos do objeto, `False` caso contrário. (Isto é implementado chamando <router-link to="/builtin/getattr">getattr(object, name)</router-link> e verificando se levanta um AttributeError ou não.)
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `hasattr()` verifica se um objeto possui um determinado atributo. Ela recebe o objeto e o nome do atributo (como uma string) como argumentos e retorna `True` se o atributo existir, e `False` caso contrário.

### Exemplo

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

```output
True
True
False
```

## Links relevantes

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Noções Básicas de OOP</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
