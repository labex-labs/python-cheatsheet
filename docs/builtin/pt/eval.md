---
title: 'Função Embutida eval() do Python - Folha de Dicas Python'
description: 'Os argumentos são uma string e dicionários opcionais globals e locals. Se fornecido, globals deve ser um dicionário. Se fornecido, locals pode ser qualquer objeto de mapeamento.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python eval()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Os argumentos são uma string e opcionais globals e locals. Se fornecidos, globals deve ser um dicionário. Se fornecidos, locals pode ser qualquer objeto de mapeamento.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `eval()` em Python é uma função built-in que analisa uma string como uma expressão Python e a avalia. Ela pode ser usada para executar código Python arbitrário a partir de uma string, o que pode ser poderoso e arriscado. É frequentemente usada em situações onde você precisa avaliar expressões geradas dinamicamente, mas deve ser usada com cautela devido a potenciais vulnerabilidades de segurança.

## Exemplos

```python
eval('1 + 4')
```

```output
5
```

```python
eval('print("Hello World!")')
```

```output
Hello World!
```

```python
x = 10
eval('x == 10')
```

```output
True
```

A função `eval()` também pode ser usada com a função <router-link to="/builtin/print">print()</router-link> para exibir a saída no console.

## Links relevantes

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
