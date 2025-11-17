---
title: 'Manipulação de Strings - Guia Rápido Python'
description: "Um caractere de escape é criado digitando uma barra invertida \ seguida pelo caractere que você deseja inserir."
labUrl: 'https://labex.io/pt/labs/python-python-string-manipulation-633668?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Manipulação de Strings
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## Caracteres de Escape

Um caractere de escape é criado digitando uma barra invertida `\` seguida pelo caractere que você deseja inserir.

| Caractere de Escape | Imprime como                 |
| ------------------- | ---------------------------- |
| `\'`                | Aspas simples                |
| `\"`                | Aspas duplas                 |
| `\t`                | Tabulação                    |
| `\n`                | Nova linha (quebra de linha) |
| `\\`                | Barra invertida              |
| `\b`                | Backspace                    |
| `\ooo`              | Valor octal                  |
| `\r`                | Retorno de Carro             |

```python
# Caracteres de escape: use barra invertida para inserir caracteres especiais
# \n = nova linha, \' = aspas simples
print("Hello there!\nHow are you?\nI\'m doing fine.")
```

Output:

```plaintext
Hello there!
How are you?
I'm doing fine.
```

## Strings Brutas (Raw Strings)

Uma string bruta ignora completamente todos os caracteres de escape e imprime qualquer barra invertida que apareça na string.

```python
# String bruta (prefixo r): trata barras invertidas como caracteres literais
print(r"Hello there!\nHow are you?\nI\'m doing fine.")  # \n impresso literalmente
```

Output:

```plaintext
Hello there!\nHow are you?\nI\'m doing fine.
```

Strings brutas são usadas principalmente para definição de <router-link to="/cheatsheet/regular-expressions">expressões regulares</router-link>.

## Strings Multilinhas

```python
print(
"""Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob"""
)
```

Output:

```plaintext
Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob
```

## Indexação e Fatiamento (Slicing) de Strings

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

### Indexação

```python
# Indexação de string: acessa caracteres pela posição (base 0)
spam = 'Hello world!'

spam[0]  # Retorna o primeiro caractere: 'H'
```

Output:

```plaintext
'H'
```

```python
spam[4]
```

Output:

```plaintext
'o'
```

```python
spam[-1]
```

Output:

```plaintext
'!'
```

### Fatiamento (Slicing)

```python
# Fatiamento de string: extrai substring usando a sintaxe [início:fim]
spam = 'Hello world!'

spam[0:5]  # Retorna caracteres do índice 0 até 4: 'Hello'
```

Output:

```plaintext
'Hello'
```

```python
spam[:5]
```

Output:

```plaintext
'Hello'
```

```python
spam[6:]
```

Output:

```plaintext
'world!'
```

```python
spam[6:-1]
```

Output:

```plaintext
'world'
```

```python
spam[:-1]
```

Output:

```plaintext
'Hello world'
```

```python
spam[::-1]
```

Output:

```plaintext
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

Output:

```plaintext
'Hello'
```

## Os operadores in e not in

```python
'Hello' in 'Hello World'
```

Output:

```plaintext
True
```

```python
'Hello' in 'Hello'
```

Output:

```plaintext
True
```

```python
'HELLO' in 'Hello World'
```

Output:

```plaintext
False
```

```python
'' in 'spam'
```

Output:

```plaintext
True
```

```python
'cats' not in 'cats and dogs'
```

Output:

```plaintext
False
```

## upper(), lower() e title()

Transforma uma string para maiúsculas, minúsculas e formato de título:

```python
greet = 'Hello world!'
greet.upper()
```

Output:

```plaintext
'HELLO WORLD!'
```

```python
greet.lower()
```

Output:

```plaintext
'hello world!'
```

```python
greet.title()
```

Output:

```plaintext
'Hello World!'
```

## Métodos isupper() e islower()

Retorna `True` ou `False` após avaliar se uma string está em maiúsculas ou minúsculas:

```python
spam = 'Hello world!'
spam.islower()
```

Output:

```plaintext
False
```

```python
spam.isupper()
```

Output:

```plaintext
False
```

```python
'HELLO'.isupper()
```

Output:

```plaintext
True
```

```python
'abc12345'.islower()
```

Output:

```plaintext
True
```

```python
'12345'.islower()
```

Output:

```plaintext
False
```

```python
'12345'.isupper()
```

Output:

```plaintext
False
```

## Os métodos de string isX

| Método      | Descrição                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| isalpha()   | retorna `True` se a string consiste apenas em letras.                                                                                |
| isalnum()   | retorna `True` se a string consiste apenas em letras e números.                                                                      |
| isdecimal() | retorna `True` se a string consiste apenas em números.                                                                               |
| isspace()   | retorna `True` se a string consiste apenas em espaços, tabulações e novas linhas.                                                    |
| istitle()   | retorna `True` se a string consiste apenas em palavras que começam com uma letra maiúscula seguida apenas por caracteres minúsculos. |

## startswith() e endswith()

```python
'Hello world!'.startswith('Hello')
```

Output:

```plaintext
True
```

```python
'Hello world!'.endswith('world!')
```

Output:

```plaintext
True
```

```python
'abc123'.startswith('abcdef')
```

Output:

```plaintext
False
```

```python
'abc123'.endswith('12')
```

Output:

```plaintext
False
```

```python
'Hello world!'.startswith('Hello world!')
```

Output:

```plaintext
True
```

```python
'Hello world!'.endswith('Hello world!')
```

Output:

```plaintext
True
```

## join() e split()

### join()

O método `join()` pega todos os itens em um iterável, como uma <router-link to="/cheatsheet/lists-and-tuples">lista</router-link>, <router-link to="/cheatsheet/dictionaries">dicionário</router-link>, <router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">tupla</router-link> ou <router-link to="/cheatsheet/sets">conjunto</router-link>, e os une em uma string. Você também pode especificar um separador.

```python
''.join(['My', 'name', 'is', 'Simon'])
```

Output:

```plaintext
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

Output:

```plaintext
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

Output:

```plaintext
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

Output:

```plaintext
'MyABCnameABCisABCSimon'
```

### split()

O método `split()` divide uma `string` em uma `list`. Por padrão, ele usará espaço em branco para separar os itens, mas você também pode definir outro caractere de sua escolha:

```python
'My name is Simon'.split()
```

Output:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

Output:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

Output:

```plaintext
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

Output:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

Output:

```plaintext
['', 'My', '', 'name', 'is', '', 'Simon']
```

## Justificando texto com rjust(), ljust() e center()

```python
'Hello'.rjust(10)
```

Output:

```plaintext
'     Hello'
```

```python
'Hello'.rjust(20)
```

Output:

```plaintext
'               Hello'
```

```python
'Hello World'.rjust(20)
```

Output:

```plaintext
'         Hello World'
```

```python
'Hello'.ljust(10)
```

Output:

```plaintext
'Hello     '
```

```python
'Hello'.center(20)
```

Output:

```plaintext
'       Hello       '
```

Um segundo argumento opcional para `rjust()` e `ljust()` especificará um caractere de preenchimento além do caractere de espaço:

```python
'Hello'.rjust(20, '*')
```

Output:

```plaintext
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

Output:

```plaintext
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

Output:

```plaintext
'=======Hello========'
```

## Removendo espaços em branco com strip(), rstrip() e lstrip()

```python
spam = '    Hello World     '
spam.strip()
```

Output:

```plaintext
'Hello World'
```

```python
spam.lstrip()
```

Output:

```plaintext
'Hello World     '
```

```python
spam.rstrip()
```

Output:

```plaintext
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

Output:

```plaintext
'BaconSpamEggs'
```

## O Método Count

Conta o número de ocorrências de um determinado caractere ou substring na string à qual é aplicado. Pode-se opcionalmente fornecer os índices de início e fim.

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

Output:

```plaintext
3
```

```python
sentence.count('e')
```

Output:

```plaintext
9
```

```python
# retorna a contagem de 'e' após 'one sh' i.e 6 caracteres desde o início da string
sentence.count('e', 6)
```

Output:

```plaintext
8
```

```python
sentence.count('e', 7)
```

Output:

```plaintext
7
```

## Método Replace

Substitui todas as ocorrências de uma determinada substring por outra substring. Pode-se opcionalmente fornecer um terceiro argumento para limitar o número de substituições. Retorna uma nova string.

```python
text = "Hello, world!"
text.replace("world", "planet")
```

Output:

```plaintext
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

Output:

```plaintext
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

Output:

```plaintext
'I like oranges, Apples are my favorite fruit'
```

## Links Relevantes

- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/cheatsheet/string-formatting">Formatação de String</router-link>
- <router-link to="/cheatsheet/regular-expressions">Expressões Regulares</router-link>
