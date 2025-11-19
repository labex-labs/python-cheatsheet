---
title: 'Função Embutida Python bool() - Guia Rápido Python'
description: 'Retorna um valor booleano, ou seja, True ou False. x é convertido usando o procedimento padrão de teste de verdade. Se x for falso ou omitido, retorna False; caso contrário, retorna True. A classe bool é uma subclasse de int. Não pode ser mais subclassificada. Suas únicas instâncias são False e True.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python bool()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna um valor Booleano, True ou False. x é convertido usando o procedimento padrão de teste de verdade. Se x for falso ou omitido, isso retorna False; caso contrário, retorna True. A classe bool é uma subclasse de int. Ela não pode ser subclassificada ainda mais. Suas únicas instâncias são False e True.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `bool()` em Python é uma função built-in que converte um valor para um Booleano (`True` ou `False`). Ela segue o procedimento padrão de teste de verdade, onde valores como `0`, `None` e coleções vazias são considerados `False`, enquanto a maioria dos outros valores são `True`. Isso é fundamental para controlar o fluxo do seu programa com declarações condicionais.

## Exemplos

### Valores Falsy (Falsos)

Estes valores são considerados `False`:

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # string vazia
bool([])      # lista vazia
bool({})      # dict vazio
bool(set())   # conjunto vazio
```

```output
False
False
False
False
False
False
False
False
```

### Valores Truthy (Verdadeiros)

A maioria dos outros valores são considerados `True`:

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

```output
True
True
True
True
True
True
```

## Links Relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Fluxo de Controle</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
