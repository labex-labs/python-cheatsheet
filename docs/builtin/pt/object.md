---
title: 'Função Embutida Python object() - Folha de Dicas Python'
description: 'Retorna um novo objeto sem características. object é a base para todas as classes. Possui métodos comuns a todas as instâncias de classes Python. Esta função não aceita argumentos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python object()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um novo objeto sem recursos. object é uma base para todas as classes. Ele tem métodos que são comuns a todas as instâncias de classes Python. Esta função não aceita argumentos.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `object()` retorna um novo objeto vazio e sem recursos. Este objeto é a base para todas as classes em Python. Ele não possui atributos ou métodos especiais.

Embora você possa criar instâncias de `object`, não é algo que você fará com frequência na programação do dia a dia. É mais um bloco de construção fundamental do modelo de objeto do Python.

### Exemplo

```python
# Create a new object
o = object()

# See its type
print(type(o))
```

```output
<class 'object'>
```

Nota: Ele não tem atributos que você possa definir. `o.name = "test"` levantaria um AttributeError.

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
