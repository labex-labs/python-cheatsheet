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

Salida:

```plaintext
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

Salida:

```plaintext
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

Salida:

```plaintext
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

Salida:

```plaintext
'H'
```

```python
spam[4]
```

Salida:

```plaintext
'o'
```

```python
spam[-1]
```

Salida:

```plaintext
'!'
```

### Segmentación (Slicing)

```python
# Segmentación de cadenas: extraer subcadena usando la sintaxis [inicio:fin]
spam = 'Hello world!'

spam[0:5]  # Devuelve los caracteres del índice 0 al 4: 'Hello'
```

Salida:

```plaintext
'Hello'
```

```python
spam[:5]
```

Salida:

```plaintext
'Hello'
```

```python
spam[6:]
```

Salida:

```plaintext
'world!'
```

```python
spam[6:-1]
```

Salida:

```plaintext
'world'
```

```python
spam[:-1]
```

Salida:

```plaintext
'Hello world'
```

```python
spam[::-1]
```

Salida:

```plaintext
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

Salida:

```plaintext
'Hello'
```

## Los operadores in y not in

```python
'Hello' in 'Hello World'
```

Salida:

```plaintext
True
```

```python
'Hello' in 'Hello'
```

Salida:

```plaintext
True
```

```python
'HELLO' in 'Hello World'
```

Salida:

```plaintext
False
```

```python
'' in 'spam'
```

Salida:

```plaintext
True
```

```python
'cats' not in 'cats and dogs'
```

Salida:

```plaintext
False
```

## upper(), lower() y title()

Transforma una cadena a mayúsculas, minúsculas y formato de título:

```python
greet = 'Hello world!'
greet.upper()
```

Salida:

```plaintext
'HELLO WORLD!'
```

```python
greet.lower()
```

Salida:

```plaintext
'hello world!'
```

```python
greet.title()
```

Salida:

```plaintext
'Hello World!'
```

## Métodos isupper() y islower()

Devuelven `True` o `False` después de evaluar si una cadena está en mayúsculas o minúsculas:

```python
spam = 'Hello world!'
spam.islower()
```

Salida:

```plaintext
False
```

```python
spam.isupper()
```

Salida:

```plaintext
False
```

```python
'HELLO'.isupper()
```

Salida:

```plaintext
True
```

```python
'abc12345'.islower()
```

Salida:

```plaintext
True
```

```python
'12345'.islower()
```

Salida:

```plaintext
False
```

```python
'12345'.isupper()
```

Salida:

```plaintext
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

Salida:

```plaintext
True
```

```python
'Hello world!'.endswith('world!')
```

Salida:

```plaintext
True
```

```python
'abc123'.startswith('abcdef')
```

Salida:

```plaintext
False
```

```python
'abc123'.endswith('12')
```

Salida:

```plaintext
False
```

```python
'Hello world!'.startswith('Hello world!')
```

Salida:

```plaintext
True
```

```python
'Hello world!'.endswith('Hello world!')
```

Salida:

```plaintext
True
```

## join() y split()

### join()

El método `join()` toma todos los elementos de un iterable, como una <router-link to="/cheatsheet/lists-and-tuples">lista</router-link>, <router-link to="/cheatsheet/dictionaries">diccionario</router-link>, <router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">tupla</router-link> o <router-link to="/cheatsheet/sets">conjunto</router-link>, y los une en una cadena. También puede especificar un separador.

```python
''.join(['My', 'name', 'is', 'Simon'])
```

Salida:

```plaintext
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

Salida:

```plaintext
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

Salida:

```plaintext
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

Salida:

```plaintext
'MyABCnameABCisABCSimon'
```

### split()

El método `split()` divide una `cadena` en una `lista`. Por defecto, utilizará espacios en blanco para separar los elementos, pero también puede establecer otro carácter de su elección:

```python
'My name is Simon'.split()
```

Salida:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

Salida:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

Salida:

```plaintext
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

Salida:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

Salida:

```plaintext
['', 'My', '', 'name', 'is', '', 'Simon']
```

## Justificación de texto con rjust(), ljust() y center()

```python
'Hello'.rjust(10)
```

Salida:

```plaintext
'     Hello'
```

```python
'Hello'.rjust(20)
```

Salida:

```plaintext
'               Hello'
```

```python
'Hello World'.rjust(20)
```

Salida:

```plaintext
'         Hello World'
```

```python
'Hello'.ljust(10)
```

Salida:

```plaintext
'Hello     '
```

```python
'Hello'.center(20)
```

Salida:

```plaintext
'       Hello       '
```

Un segundo argumento opcional para `rjust()` y `ljust()` especificará un carácter de relleno aparte del carácter de espacio:

```python
'Hello'.rjust(20, '*')
```

Salida:

```plaintext
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

Salida:

```plaintext
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

Salida:

```plaintext
'=======Hello========'
```

## Eliminación de espacios en blanco con strip(), rstrip(), y lstrip()

```python
spam = '    Hello World     '
spam.strip()
```

Salida:

```plaintext
'Hello World'
```

```python
spam.lstrip()
```

Salida:

```plaintext
'Hello World     '
```

```python
spam.rstrip()
```

Salida:

```plaintext
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

Salida:

```plaintext
'BaconSpamEggs'
```

## El Método Count

Cuenta el número de ocurrencias de un carácter o subcadena dada en la cadena a la que se aplica. Opcionalmente se pueden proporcionar los índices de inicio y fin.

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

Salida:

```plaintext
3
```

```python
sentence.count('e')
```

Salida:

```plaintext
9
```

```python
# devuelve el recuento de 'e' después de 'one sh' es decir 6 caracteres desde el inicio de la cadena
sentence.count('e', 6)
```

Salida:

```plaintext
8
```

```python
sentence.count('e', 7)
```

Salida:

```plaintext
7
```

## Método Replace

Reemplaza todas las ocurrencias de una subcadena dada con otra subcadena. Opcionalmente se puede proporcionar un tercer argumento para limitar el número de reemplazos. Devuelve una nueva cadena.

```python
text = "Hello, world!"
text.replace("world", "planet")
```

Salida:

```plaintext
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

Salida:

```plaintext
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

Salida:

```plaintext
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
