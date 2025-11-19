---
title: 'Função Embutida compile() do Python - Folha de Dicas Python'
description: 'Compila a origem em um objeto de código ou AST. Objetos de código podem ser executados por exec() ou eval(). A origem pode ser uma string normal, uma string de bytes ou um objeto AST. Consulte a documentação do módulo ast para obter informações sobre como trabalhar com objetos AST.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in compile() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Compila a origem em um objeto de código ou AST. Objetos de código podem ser executados por <router-link to="/builtin/exec">exec()</router-link> ou <router-link to="/builtin/eval">eval()</router-link>. source pode ser uma string normal, uma string de bytes ou um objeto AST. Consulte a documentação do módulo ast para obter informações sobre como trabalhar com objetos AST.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `compile()` em Python é uma função built-in usada para converter uma string ou um objeto Abstract Syntax Tree (AST) em um objeto de código. Este objeto de código pode então ser executado por funções como <router-link to="/builtin/exec">exec()</router-link> ou <router-link to="/builtin/eval">eval()</router-link>.

## Exemplo

Aqui está um exemplo básico de como funciona:

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# Compila a string em um objeto de código
# O modo 'exec' é usado para uma sequência de instruções.
# O modo 'eval' é para uma única expressão.
# O modo 'single' é para uma única instrução interativa.
code_object = compile(code_string, '<string>', 'exec')

# Executa o objeto de código
exec(code_object)
```

```output
Hello, world!
```

## Links relevantes

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
