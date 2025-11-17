---
title: 'Funções Python - Guia Rápido Python'
description: 'Em Python, uma função é um bloco de código organizado usado para executar uma única tarefa.'
labUrl: 'https://labex.io/pt/labs/python-python-functions-633658?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Funções Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Uma função é um bloco de código organizado que é usado para executar uma única tarefa. Elas fornecem melhor modularidade para sua aplicação e reutilização.
  </base-disclaimer-content>
</base-disclaimer>

## Argumentos de Função

Uma função pode receber `arguments` (argumentos) e `return values` (valores de retorno):

No exemplo a seguir, a função **say_hello** recebe o argumento "name" e imprime uma saudação:

```python
# Define uma função que recebe um argumento
def say_hello(name):
   print(f'Hello {name}')

# Chama a função com um argumento de string
say_hello('Carlos')
```

Output:

```plaintext
Hello Carlos
```

```python
say_hello('Wanda')
```

Output:

```plaintext
Hello Wanda
```

```python
say_hello('Rose')
```

Output:

```plaintext
Hello Rose
```

## Argumentos de Palavra-Chave (Keyword Arguments)

Para melhorar a legibilidade do código, devemos ser o mais explícitos possível. Podemos conseguir isso em nossas funções usando `Keyword Arguments`:

```python
# Função com múltiplos parâmetros
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# Argumentos posicionais: a ordem importa
say_hi('John', 'Hello')
```

Output:

```plaintext
Hello John
```

```python
# Argumentos de palavra-chave: a ordem não importa, mais legível
say_hi(name='Anna', greeting='Hi')
```

Output:

```plaintext
Hi Anna
```

## Valores de Retorno

Ao criar uma função usando a instrução `def`, você pode especificar qual deve ser o valor de retorno com uma instrução `return`. Uma instrução de retorno consiste no seguinte:

- A palavra-chave `return`.

- O valor ou expressão que a função deve retornar.

```python
# Função que retorna um valor usando a instrução return
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# Chama a função e armazena o valor retornado
result = sum_two_numbers(7, 8)
print(result)
```

Output:

```plaintext
15
```

## Escopo Local e Global

- O código no escopo global não pode usar nenhuma variável local.

- No entanto, um escopo local pode acessar variáveis globais.

- O código no escopo local de uma função não pode usar variáveis em nenhum outro escopo local.

- Você pode usar o mesmo nome para variáveis diferentes se elas estiverem em escopos diferentes. Ou seja, pode haver uma variável local chamada `spam` e uma variável global também chamada `spam`.

```python
# Variável global: acessível em todos os lugares
global_variable = 'I am available everywhere'

def some_function():
    print(global_variable)  # Pode acessar a variável global
    # Variável local: só existe dentro desta função
    local_variable = "only available within this function"
    print(local_variable)

# Isso levantará NameError: local_variable não existe no escopo global
print(local_variable)
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## A Declaração global

Se você precisar modificar uma variável global de dentro de uma função, use a declaração `global`:

```python
# Usa a palavra-chave 'global' para modificar a variável global de dentro da função
def spam():
    global eggs  # Declara que estamos modificando a variável global
    eggs = 'spam'  # Isso muda a variável global

eggs = 'global'
spam()  # A função modifica a variável global
print(eggs)  # Imprime 'spam', não 'global'
```

Output:

```plaintext
spam
```

Existem quatro regras para saber se uma variável está em um escopo local ou global:

1. Se uma variável estiver sendo usada no escopo global (ou seja, fora de todas as funções), ela é sempre uma variável global.

1. Se houver uma declaração `global` para essa variável em uma função, ela é uma variável global.

1. Caso contrário, se a variável for usada em uma instrução de atribuição na função, ela é uma variável local.

1. Mas se a variável não for usada em uma instrução de atribuição, ela é uma variável global.

## Funções Lambda

Em Python, uma função lambda é uma função anônima de linha única, que pode ter qualquer número de argumentos, mas pode ter apenas uma expressão.

<base-disclaimer>
  <base-disclaimer-title>
    Do <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Python 3 Tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda é uma definição de função mínima que pode ser usada dentro de uma expressão. Ao contrário de FunctionDef, body contém um único nó.
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    Expressão de linha única
  </base-warning-title>
  <base-warning-content>
    Funções Lambda só podem avaliar uma expressão, como uma única linha de código.
  </base-warning-content>
</base-warning>

Esta função:

```python
# Definição de função regular
def add(x, y):
    return x + y

add(5, 3)
```

Output:

```plaintext
8
```

É equivalente à função _lambda_:

```python
# Função Lambda: função anônima definida em uma linha
# Sintaxe: lambda argumentos: expressão
add = lambda x, y: x + y
add(5, 3)
```

Output:

```plaintext
8
```

Assim como as funções aninhadas regulares, as lambdas também funcionam como fechamentos lexicais (lexical closures):

```python
# Fechamento Lambda: função lambda que captura variável do escopo externo
def make_adder(n):
    return lambda x: x + n  # Lambda captura 'n' da função externa

# Cria funções que adicionam valores diferentes
plus_3 = make_adder(3)  # Retorna lambda que adiciona 3
plus_5 = make_adder(5)  # Retorna lambda que adiciona 5

plus_3(4)  # Retorna 4 + 3 = 7
```

Output:

```plaintext
7
```

```python
plus_5(4)
```

Output:

```plaintext
9
```

## Links relevantes

- <router-link to="/blog/python-easy-args-kwargs">\*args e \*\*kwargs explicados</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args e Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/cheatsheet/control-flow">Fluxo de Controle</router-link>
- <router-link to="/cheatsheet/basics">Noções Básicas</router-link>
- <router-link to="/builtin">Funções Built-in</router-link>
