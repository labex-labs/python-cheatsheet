---
title: 'Função Embutida locals() do Python - Guia Rápido do Python'
description: 'Atualiza e retorna um dicionário que representa a tabela de símbolos local atual. Variáveis livres são retornadas por locals() quando chamada em blocos de função, mas não em blocos de classe. Note que no nível do módulo, locals() e globals() são o mesmo dicionário.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in locals() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Atualiza e retorna um dicionário representando a tabela de símbolos local atual. Variáveis livres são retornadas por locals() quando é chamada em blocos de função, mas não em blocos de classe. Note que no nível do módulo, locals() e <router-link to="/builtin/globals">globals()</router-link> são o mesmo dicionário.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `locals()` retorna um dicionário que representa a tabela de símbolos local atual. Isso inclui todas as variáveis locais, argumentos e outros objetos no escopo atual.

É uma ferramenta útil para inspecionar o namespace local.

### Exemplo

```python
def my_function(arg1, arg2):
    local_var = "Eu sou local"
    print(locals())

my_function("hello", "world")
```

```output
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'Eu sou local'}
```

## Links relevantes

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funções</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dicionários</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
