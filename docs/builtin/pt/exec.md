---
title: 'Função Embutida exec() do Python - Folha de Dicas Python'
description: 'Esta função suporta a execução dinâmica de código Python. O objeto deve ser uma string ou um objeto de código. Se for uma string, a string é analisada como um conjunto de instruções Python que são então executadas (a menos que ocorra um erro de sintaxe) [...].'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python exec()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Esta função suporta a execução dinâmica de código Python. object deve ser uma string ou um objeto de código. Se for uma string, a string é analisada como uma suíte de instruções Python que é então executada (a menos que ocorra um erro de sintaxe) [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `exec()` em Python é uma função built-in que permite executar dinamicamente código Python armazenado em uma string. Isso pode ser muito poderoso para cenários onde você deseja executar código fornecido por usuários, gerar e executar código em tempo de execução, ou até mesmo construir mini-interpretadores ou ambientes de script dentro de sua aplicação. No entanto, deve ser usada com cautela, pois pode introduzir riscos de segurança se não for tratada adequadamente.

## Sintaxe

```python
exec(object[, globals[, locals]])
```

- `object`: A string contendo o código Python a ser executado.
- `globals` (opcional): Um dicionário representando o namespace global. Se não for fornecido, usa o namespace global atual.
- `locals` (opcional): Um dicionário representando o namespace local. Se não for fornecido, usa o namespace local atual.

## Uso Básico

```python
code_to_execute = "print('Olá, exec()!')"
exec(code_to_execute)
```

Saída:

```plaintext
Olá, exec()!
```

A função `exec()` também pode ser usada com a função <router-link to="/builtin/print">print()</router-link> para exibir a saída no console.

## Executando Múltiplas Instruções

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

Saída:

```plaintext
0
1
2
3
4
```

Neste exemplo, a função `exec()` é usada para executar um loop for que itera sobre um <router-link to="/builtin/range">range</router-link> de números e <router-link to="/builtin/print">imprime</router-link> cada número no console.

## Modificando Variáveis

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

Saída:

```plaintext
15
```

## Usando `globals` e `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

Saída:

```plaintext
5
{'x': 10}
{'x': 40}
```

## Criação Dinâmica de Função

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

Saída:

```plaintext
10
```

Neste exemplo, a função `exec()` é usada para criar uma função dinâmica que recebe uma lista de argumentos e retorna sua <router-link to="/builtin/sum">soma</router-link>.

## Tratamento de Erros

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

Saída:

```plaintext
Error: name 'undefined_variable' is not defined
```

## Nota de Segurança

```python
user_input = input("Enter code to execute: ")
exec(user_input)  # Caution: This can be a security risk if not properly sanitized.
```

## Links Relevantes

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">Tratamento de Exceções</router-link>
- <router-link :to="'/cheatsheet/debugging'">Depuração</router-link>
