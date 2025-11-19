---
title: 'Fluxo de Controle Python - Folha de Dicas Python'
description: 'O fluxo de controle é a ordem em que instruções individuais, comandos ou chamadas de função são executados ou avaliados. O fluxo de controle de um programa Python é regulado por instruções condicionais, laços e chamadas de função.'
labUrl: 'https://labex.io/pt/labs/python-python-control-flow-633651?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fluxo de Controle em Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Fluxo de controle em Python
  </base-disclaimer-title>
  <base-disclaimer-content>
  Fluxo de controle é a ordem em que instruções individuais, comandos ou chamadas de função são executados ou avaliados. O fluxo de controle de um programa Python é regulado por declarações condicionais, loops e chamadas de função.
  </base-disclaimer-content>
</base-disclaimer>

## Operadores de Comparação

| Operador | Significado      |
| -------- | ---------------- |
| `==`     | Igual a          |
| `!=`     | Diferente de     |
| `<`      | Menor que        |
| `>`      | Maior que        |
| `<=`     | Menor ou Igual a |
| `>=`     | Maior ou Igual a |

Estes operadores avaliam para True ou False dependendo dos valores que você lhes atribui.

Exemplos:

```python
42 == 42
```

```output
True
```

```python
40 == 42
```

```output
False
```

```python
'hello' == 'hello'
```

```output
True
```

```python
'hello' == 'Hello'
```

```output
False
```

```python
'dog' != 'cat'
```

```output
True
```

```python
42 == 42.0
```

```output
True
```

```python
42 == '42'
```

```output
False
```

## Operadores Booleanos

Existem três operadores Booleanos: `and`, `or` e `not`.
Na ordem de precedência, do mais alto para o mais baixo, eles são `not`, `and` e `or`.

Tabela de _Verdade_ do Operador `and`:

| Expressão         | Avalia para |
| ----------------- | ----------- |
| `True and True`   | `True`      |
| `True and False`  | `False`     |
| `False and True`  | `False`     |
| `False and False` | `False`     |

Tabela de _Verdade_ do Operador `or`:

| Expressão        | Avalia para |
| ---------------- | ----------- |
| `True or True`   | `True`      |
| `True or False`  | `True`      |
| `False or True`  | `True`      |
| `False or False` | `False`     |

Tabela de _Verdade_ do Operador `not`:

| Expressão   | Avalia para |
| ----------- | ----------- |
| `not True`  | `False`     |
| `not False` | `True`      |

## Misturando Operadores

Você pode misturar operadores booleanos e de comparação:

```python
(4 < 5) and (5 < 6)
```

```output
True
```

```python
(4 < 5) and (9 < 6)
```

```output
False
```

```python
(1 == 2) or (2 == 2)
```

```output
True
```

Além disso, você pode usar múltiplos operadores booleanos em uma expressão, juntamente com os operadores de comparação:

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

```output
True
```

```python
# Na declaração abaixo, 3 < 4 and 5 > 5 é executado primeiro avaliando para False
# Então 5 > 4 retorna True, então o resultado após True or False é True
5 > 4 or 3 < 4 and 5 > 5
```

```output
True
```

```python
# Agora a declaração dentro dos parênteses é executada primeiro, então True and False retorna False.
(5 > 4 or 3 < 4) and 5 > 5
```

```output
False
```

## Declarações if

A declaração `if` avalia uma expressão e, se essa expressão for `True`, executa o código indentado seguinte:

```python
# declaração if: executa o bloco de código quando a condição é True
name = 'Debora'

if name == 'Debora':  # Verifica se o nome é igual a 'Debora'
   print('Hi, Debora')  # Esta linha é executada se a condição for True
```

```output
Hi, Debora
```

```python
if name != 'George':
   print('You are not George')
```

```output
You are not George
```

A declaração `else` é executada somente se a avaliação da expressão `if` e de todas as expressões `elif` forem `False`:

```python
# if-else: executa código diferente com base na condição
name = 'Debora'

if name == 'George':
   print('Hi, George.')
else:  # Executa se a condição if for False
   print('You are not George')
```

```output
You are not George
```

Somente após a expressão da declaração `if` ser `False`, a declaração `elif` é avaliada e executada:

```python
# if-elif: verifica múltiplas condições em sequência
name = 'George'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':  # Verificado somente se a condição anterior for False
   print('Hi George!')
```

```output
Hi George!
```

As partes `elif` e `else` são opcionais.

```python
name = 'Antony'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':
   print('Hi George!')
else:
   print('Who are you?')
```

```output
Who are you?
```

## Operador Condicional Ternário

Muitas linguagens de programação possuem um operador ternário, que define uma expressão condicional. O uso mais comum é para criar uma declaração de atribuição condicional concisa e simples. Em outras palavras, oferece código de uma linha para avaliar a primeira expressão se a condição for verdadeira e, caso contrário, avalia a segunda expressão.

```plaintext
<expression1> if <condition> else <expression2>
```

Exemplo:

```python
age = 15

# esta declaração if:
if age < 18:
   print('kid')
else:
   print('adult')
```

```output
kid
```

```python
# Operador ternário: expressão condicional de uma linha
# Sintaxe: valor_se_verdadeiro if condição else valor_se_falso
print('kid' if age < 18 else 'adult')
```

```output
kid
```

Operadores ternários podem ser encadeados:

```python
age = 15

# este operador ternário:
print('kid' if age < 13 else 'teen' if age < 18 else 'adult')
```

```output
teen
```

```python
# é equivalente a esta declaração if:
if age < 13:
    print('kid')
else:
    if age < 18:
        print('teen')
    else:
        print('adult')
```

```output
teen
```

## Declaração Switch-Case

<base-disclaimer>
  <base-disclaimer-title>
    Declarações Switch-Case
  </base-disclaimer-title>
  <base-disclaimer-content>
  Em linguagens de programação de computador, uma declaração switch é um tipo de mecanismo de controle de seleção usado para permitir que o valor de uma variável ou expressão mude o fluxo de controle da execução do programa através de pesquisa e mapeamento.
  </base-disclaimer-content>
</base-disclaimer>

As declarações _Switch-Case_, ou **Correspondência Estrutural de Padrões** (Structural Pattern Matching), foram introduzidas pela primeira vez em 2020 através da [PEP 622](https://peps.python.org/pep-0622/), e depois oficialmente lançadas com o **Python 3.10** em setembro de 2022.

<base-disclaimer>
  <base-disclaimer-title>
    Tutorial Oficial
  </base-disclaimer-title>
  <base-disclaimer-content>
  A <a href="https://peps.python.org/pep-0636/" target="_blank">PEP 636</a> fornece um tutorial oficial para a Correspondência de Padrões do Python ou declarações Switch-Case.
  </base-disclaimer-content>
</base-disclaimer>

### Correspondência de valores únicos

```python
response_code = 201
match response_code:
    case 200:
        print("OK")
    case 201:
        print("Created")
    case 300:
        print("Multiple Choices")
    case 307:
        print("Temporary Redirect")
    case 404:
        print("404 Not Found")
    case 500:
        print("Internal Server Error")
    case 502:
        print("502 Bad Gateway")
```

```output
Created
```

### Correspondência com o Padrão or

Neste exemplo, o caractere pipe (`|` ou `or`) permite que o python retorne a mesma resposta para dois ou mais casos.

```python
response_code = 502
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
```

```output
Internal Server Error
```

### Correspondência pelo comprimento de um Iterável

```python
today_responses = [200, 300, 404, 500]
match today_responses:
    case [a]:
            print(f"One response today: {a}")
    case [a, b]:
            print(f"Two responses today: {a} and {b}")
    case [a, b, *rest]:
            print(f"All responses: {a}, {b}, {rest}")
```

```output
All responses: 200, 300, [404, 500]
```

### Valor Padrão

O símbolo de sublinhado (`_`) é usado para definir um caso padrão:

```python
response_code = 800
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
    case _:
        print("Invalid Code")
```

```output
Invalid Code
```

### Correspondência de Classes Built-in

```python
response_code = "300"
match response_code:
    case int():
            print('Code is a number')
    case str():
            print('Code is a string')
    case _:
            print('Code is neither a string nor a number')
```

```output
Code is a string
```

### Protegendo Declarações Match-Case (Guarding)

```python
response_code = 300
match response_code:
    case int():
            if response_code > 99 and response_code < 500:
                print('Code is a valid number')
    case _:
            print('Code is an invalid number')
```

```output
Code is a valid number
```

## Declarações de Loop while

A declaração while é usada para execução repetida enquanto uma expressão for `True`:

```python
# loop while: repete o código enquanto a condição for True
spam = 0
while spam < 5:  # Continua enquanto spam for menor que 5
    print('Hello, world.')
    spam = spam + 1  # Incrementa o contador para evitar loop infinito
```

```output
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
```

## Declarações break

Se a execução atingir uma declaração `break`, ela sai imediatamente da cláusula do loop `while`:

```python
# declaração break: sai do loop imediatamente quando encontrada
while True:  # Loop infinito
    name = input('Please type your name: ')
    if name == 'your name':
        break  # Sai do loop imediatamente

print('Thank you!')
```

```output
Please type your name: your name
Thank you!
```

## Declarações continue

Quando a execução do programa atinge uma declaração `continue`, a execução do programa salta imediatamente de volta para o início do loop.

```python
# declaração continue: pula o restante da iteração do loop e inicia a próxima iteração
while True:
    name = input('Who are you? ')
    if name != 'Joe':
        continue  # Pula para a próxima iteração, não pede a senha
    password = input('Password? (It is a fish.): ')
    if password == 'swordfish':
        break  # Sai do loop quando a senha estiver correta

print('Access granted.')
```

```output
Who are you? Charles
Who are you? Debora
Who are you? Joe
Password? (It is a fish.): swordfish
Access granted.
```

## Loop For

O loop `for` itera sobre uma `list`, `tuple`, `dictionary`, `set` ou `string`:

```python
# loop for: itera sobre cada item em uma sequência
pets = ['Bella', 'Milo', 'Loki']
for pet in pets:  # Faz um loop por cada animal de estimação na lista
    print(pet)  # Imprime cada nome de animal de estimação
```

```output
Bella
Milo
Loki
```

## A função range()

A função `range()` retorna uma sequência de números. Ela começa em 0, incrementa de 1 em 1 e para antes de um número especificado:

```python
for i in range(5):
    print(f'Will stop at 5! or 4? ({i})')
```

```output
Will stop at 5! or 4? (0)
Will stop at 5! or 4? (1)
Will stop at 5! or 4? (2)
Will stop at 5! or 4? (3)
Will stop at 5! or 4? (4)
```

A função `range()` também pode modificar seus 3 argumentos padrão. Os dois primeiros serão os valores `start` e `stop`, e o terceiro será o argumento `step`. O passo é a quantidade pela qual a variável é aumentada após cada iteração.

```python
# range(start, stop, step)
for i in range(0, 10, 2):
   print(i)
```

```output
0
2
4
6
8
```

Você pode até usar um número negativo para o argumento `step` para fazer o loop `for` contar regressivamente em vez de para cima.

```python
for i in range(5, -1, -1):
    print(i)
```

```output
5
4
3
2
1
0
```

## Declaração For else

Isso permite especificar uma instrução a ser executada caso o loop completo tenha sido executado. Só é útil quando uma condição `break` pode ocorrer no loop:

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item is equal to 3")
```

## Encerrando um Programa com sys.exit()

A função `exit()` permite sair do Python.

```python
import sys

while True:
    feedback = input('Type exit to exit: ')
    if feedback == 'exit':
        print(f'You typed {feedback}.')
        sys.exit()
```

```output
Type exit to exit: open
Type exit to exit: close
Type exit to exit: exit
You typed exit.
```

## Links Relevantes

- <router-link to="/cheatsheet/basics">Básicos</router-link>
- <router-link to="/cheatsheet/functions">Funções</router-link>
- <router-link to="/cheatsheet/exception-handling">Tratamento de Exceções</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/sets">Sets</router-link>
- <router-link to="/cheatsheet/dictionaries">Dicionários</router-link>
- <router-link to="/cheatsheet/comprehensions">Comprehensions</router-link>
