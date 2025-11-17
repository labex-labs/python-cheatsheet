---
title: 'Função Embutida globals() do Python - Folha de Dicas Python'
description: 'Retorna o dicionário que implementa o namespace do módulo atual. Para código dentro de funções, isso é definido quando a função é criada e permanece o mesmo, independentemente de onde a função é chamada.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in globals() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna o dicionário que implementa o namespace do módulo atual. Para código dentro de funções, isso é definido quando a função é definida e permanece o mesmo, independentemente de onde a função é chamada.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `globals()` em Python retorna um dicionário que representa a tabela de símbolos global atual. Isso inclui todas as variáveis globais, funções e outros objetos no escopo atual.

Pode ser útil para inspecionar o namespace global ou para acessar dinamicamente variáveis globais por seus nomes em string.

### Exemplos

```python
# Define uma variável global
global_var = "Eu sou global"

def my_function():
    # Acessa variáveis globais usando globals()
    global_dict = globals()
    print(global_dict["global_var"])

    # Modifica uma variável global
    global_dict["global_var"] = "Global modificado"

my_function()
print(global_var)
```

Saída:

```plaintext
I am global
Modified global
```

Você também pode usar `globals()` para criar novas variáveis globais a partir de dentro de uma função:

```python
def create_global():
    globals()["new_global"] = "Isso foi criado dinamicamente"

create_global()
print(new_global)
```

Saída:

```plaintext
This was created dynamically
```

## Links relevantes

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
