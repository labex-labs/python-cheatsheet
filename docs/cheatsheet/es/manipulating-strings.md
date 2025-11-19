---
title: 'Manipulación de Cadenas - Hoja de Trucos de Python'
description: "Un carácter de escape se crea escribiendo una barra invertida \ seguida del carácter que desea insertar."
labUrl: 'https://labex.io/es/labs/python-python-string-manipulation-633668?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Manipulación de Cadenas
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## Caracteres de escape

Un carácter de escape se crea escribiendo una barra invertida `\` seguida del carácter que desea insertar.

| Carácter de escape | Se imprime como              |
| ------------------ | ---------------------------- |
| `\'`               | Comilla simple               |
| `\"`               | Comilla doble                |
| `\t`               | Tabulación                   |
| `\n`               | Nueva línea (salto de línea) |
| `\\`               | Barra invertida              |
| `\b`               | Retroceso                    |
| `\ooo`             | Valor octal                  |
| `\r`               | Retorno de carro             |

```python
# Caracteres de escape: use barra invertida para insertar caracteres especiales
# \n = nueva línea, \' = comilla simple
print("Hello there!\nHow are you?\nI\'m doing fine.")
```

```output
Hello there!
How are you?
I'm doing fine.
```

## Cadenas sin formato (Raw strings)

Una cadena sin formato ignora por completo todos los caracteres de escape e imprime cualquier barra invertida que aparezca en la cadena.

```python
# Cadena sin formato (prefijo r): trata las barras invertidas como caracteres literales
print(r"Hello there!\nHow are you?\nI\'m doing fine.")  # \n impreso literalmente
```

```output
Hello there!\nHow are you?\nI\'m doing fine.
```

Las cadenas sin formato se utilizan principalmente para la definición de <router-link to="/cheatsheet/regular-expressions">expresiones regulares</router-link>.

## Cadenas Multilínea

```python
print(
"""Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob"""
)
```

```output
Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob
```

## Indexación y Segmentación (Slicing) de cadenas

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

### Indexación

```python
# Indexación de cadenas: acceder a caracteres por posición (base 0)
spam = 'Hello world!'

spam[0]  # Devuelve el primer carácter: 'H'
```

```output
'H'
```

```python
spam[4]
```

```output
'o'
```

```python
spam[-1]
```

```output
'!'
```

### Segmentación (Slicing)

```python
# Segmentación de cadenas: extraer subcadena usando la sintaxis [inicio:fin]
spam = 'Hello world!'

spam[0:5]  # Devuelve los caracteres del índice 0 al 4: 'Hello'
```

```output
'Hello'
```

```python
spam[:5]
```

```output
'Hello'
```

```python
spam[6:]
```

```output
'world!'
```

```python
spam[6:-1]
```

```output
'world'
```

```python
spam[:-1]
```

```output
'Hello world'
```

```python
spam[::-1]
```

```output
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

```output
'Hello'
```

## Los operadores in y not in

```python
'Hello' in 'Hello World'
```

```output
True
```

```python
'Hello' in 'Hello'
```

```output
True
```

```python
'HELLO' in 'Hello World'
```

```output
False
```

```python
'' in 'spam'
```

```output
True
```

```python
'cats' not in 'cats and dogs'
```

```output
False
```

## upper(), lower() y title()

Transforma una cadena a mayúsculas, minúsculas y formato de título:

```python
greet = 'Hello world!'
greet.upper()
```

```output
'HELLO WORLD!'
```

```python
greet.lower()
```

```output
'hello world!'
```

```python
greet.title()
```

```output
'Hello World!'
```

## Métodos isupper() y islower()

Devuelven `True` o `False` después de evaluar si una cadena está en mayúsculas o minúsculas:

```python
spam = 'Hello world!'
spam.islower()
```

```output
False
```

```python
spam.isupper()
```

```output
False
```

```python
'HELLO'.isupper()
```

```output
True
```

```python
'abc12345'.islower()
```

```output
True
```

```python
'12345'.islower()
```

```output
False
```

```python
'12345'.isupper()
```

```output
False
```

## Los métodos isX de cadenas

| Método      | Descripción                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| isalpha()   | devuelve `True` si la cadena consiste solo en letras.                                                                                 |
| isalnum()   | devuelve `True` si la cadena consiste solo en letras y números.                                                                       |
| isdecimal() | devuelve `True` si la cadena consiste solo en números.                                                                                |
| isspace()   | devuelve `True` si la cadena consiste solo en espacios, tabulaciones y saltos de línea.                                               |
| istitle()   | devuelve `True` si la cadena consiste solo en palabras que comienzan con una letra mayúscula seguida solo de caracteres en minúscula. |

## startswith() y endswith()

```python
'Hello world!'.startswith('Hello')
```

```output
True
```

```python
'Hello world!'.endswith('world!')
```

```output
True
```

```python
'abc123'.startswith('abcdef')
```

```output
False
```

```python
'abc123'.endswith('12')
```

```output
False
```

```python
'Hello world!'.startswith('Hello world!')
```

```output
True
```

```python
'Hello world!'.endswith('Hello world!')
```

```output
True
```

## join() y split()

### join()

El método `join()` toma todos los elementos de un iterable, como una <router-link to="/cheatsheet/lists-and-tuples">lista</router-link>, <router-link to="/cheatsheet/dictionaries">diccionario</router-link>, <router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">tupla</router-link> o <router-link to="/cheatsheet/sets">conjunto</router-link>, y los une en una cadena. También puede especificar un separador.

```python
''.join(['My', 'name', 'is', 'Simon'])
```

```output
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

```output
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

```output
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

```output
'MyABCnameABCisABCSimon'
```

### split()

El método `split()` divide una `cadena` en una `lista`. Por defecto, utilizará espacios en blanco para separar los elementos, pero también puede establecer otro carácter de su elección:

```python
'My name is Simon'.split()
```

```output
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

```output
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

```output
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

```output
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

```output
['', 'My', '', 'name', 'is', '', 'Simon']
```

## Justificación de texto con rjust(), ljust() y center()

```python
'Hello'.rjust(10)
```

```output
'     Hello'
```

```python
'Hello'.rjust(20)
```

```output
'               Hello'
```

```python
'Hello World'.rjust(20)
```

```output
'         Hello World'
```

```python
'Hello'.ljust(10)
```

```output
'Hello     '
```

```python
'Hello'.center(20)
```

```output
'       Hello       '
```

Un segundo argumento opcional para `rjust()` y `ljust()` especificará un carácter de relleno aparte del carácter de espacio:

```python
'Hello'.rjust(20, '*')
```

```output
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

```output
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

```output
'=======Hello========'
```

## Eliminación de espacios en blanco con strip(), rstrip(), y lstrip()

```python
spam = '    Hello World     '
spam.strip()
```

```output
'Hello World'
```

```python
spam.lstrip()
```

```output
'Hello World     '
```

```python
spam.rstrip()
```

```output
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

```output
'BaconSpamEggs'
```

## El Método Count

Cuenta el número de ocurrencias de un carácter o subcadena dada en la cadena a la que se aplica. Opcionalmente se pueden proporcionar los índices de inicio y fin.

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

```output
3
```

```python
sentence.count('e')
```

```output
9
```

```python
# devuelve el recuento de 'e' después de 'one sh' es decir 6 caracteres desde el inicio de la cadena
sentence.count('e', 6)
```

```output
8
```

```python
sentence.count('e', 7)
```

```output
7
```

## Método Replace

Reemplaza todas las ocurrencias de una subcadena dada con otra subcadena. Opcionalmente se puede proporcionar un tercer argumento para limitar el número de reemplazos. Devuelve una nueva cadena.

```python
text = "Hello, world!"
text.replace("world", "planet")
```

```output
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

```output
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

```output
'I like oranges, Apples are my favorite fruit'
```

## Enlaces relevantes

- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/cheatsheet/string-formatting">Formato de Cadenas</router-link>
- <router-link to="/cheatsheet/regular-expressions">Expresiones Regulares</router-link>
