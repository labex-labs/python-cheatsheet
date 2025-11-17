---
title: 'Função Embutida Python delattr() - Folha de Dicas Python'
description: "Este é um parente de setattr(). Os argumentos são um objeto e uma string. A string deve ser o nome de um dos atributos do objeto. A função exclui o atributo nomeado, desde que o objeto o permita. Por exemplo, delattr(x, 'foobar') é equivalente a del x.foobar."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python delattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Este é um parente de `setattr()`. Os argumentos são um objeto e uma string. A string deve ser o nome de um dos atributos do objeto. A função exclui o atributo nomeado, desde que o objeto o permita. Por exemplo, `delattr(x, 'foobar')` é equivalente a `del x.foobar`.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `delattr()` em Python é usada para excluir um atributo de um objeto. É o oposto de `setattr()` e <router-link to="/builtin/getattr">`getattr()`</router-link>.

## Sintaxe

```python
delattr(object, name)
```

- **object**: O objeto do qual o atributo deve ser excluído.
- **name**: O nome do atributo a ser excluído, fornecido como uma string.

## Exemplos

### Excluindo um atributo de um objeto

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

Saída:

```plaintext
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### Excluindo um atributo inexistente

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

Saída:

```plaintext
Error: age
```

## Links relevantes

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Noções Básicas de OOP</router-link>
