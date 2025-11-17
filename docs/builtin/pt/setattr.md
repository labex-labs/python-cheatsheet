---
title: 'Função Embutida Python setattr() - Guia Rápido Python'
description: "É o correspondente de getattr(). Os argumentos são um objeto, uma string e um valor arbitrário. A string pode nomear um atributo existente ou um novo. A função atribui o valor ao atributo, desde que o objeto permita. Por exemplo, setattr(x, 'foobar', 123) é equivalente a x.foobar = 123."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python setattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Este é o correspondente de <router-link to="/builtin/getattr">getattr()</router-link>. Os argumentos são um objeto, uma string e um valor arbitrário. A string pode nomear um atributo existente ou um novo atributo. A função atribui o valor ao atributo, desde que o objeto o permita. Por exemplo, setattr(x, 'foobar', 123) é equivalente a x.foobar = 123.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `setattr()` é uma função built-in do Python que permite definir o valor de um atributo de um objeto. Ela aceita três argumentos: o objeto, o nome do atributo (como uma string) e o valor que você deseja atribuir a esse atributo.

Isso é particularmente útil quando o nome do atributo é determinado dinamicamente em tempo de execução. Em vez de usar a notação de ponto (`object.attribute = value`), que exige que você conheça o nome do atributo antecipadamente, `setattr()` permite que você use uma variável.

### Exemplos

Veja como você pode usar `setattr()` para adicionar ou modificar atributos:

```python
class Person:
    name = "John"

p = Person()

# Define o atributo 'age' como 30
setattr(p, 'age', 30)

print(p.age)

# Altera o atributo 'name'
setattr(p, 'name', 'Jane')
print(p.name)
```

Saída:

```plaintext
30
Jane
```

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
