---
title: 'Flujo de Control en Python - Hoja de Trucos'
description: 'El flujo de control es el orden en que se ejecutan o evalúan las sentencias, instrucciones o llamadas a funciones individuales. El flujo de control de un programa Python se regula mediante sentencias condicionales, bucles y llamadas a funciones.'
labUrl: 'https://labex.io/es/labs/python-python-control-flow-633651?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Flujo de Control de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Flujo de control de Python
  </base-disclaimer-title>
  <base-disclaimer-content>
  El flujo de control es el orden en que se ejecutan o evalúan las sentencias, instrucciones o llamadas a funciones individuales. El flujo de control de un programa Python se regula mediante sentencias condicionales, bucles y llamadas a funciones.
  </base-disclaimer-content>
</base-disclaimer>

## Operadores de Comparación

| Operador | Significado       |
| -------- | ----------------- |
| `==`     | Igual a           |
| `!=`     | Distinto de       |
| `<`      | Menor que         |
| `>`      | Mayor que         |
| `<=`     | Menor o igual que |
| `>=`     | Mayor o igual que |

Estos operadores se evalúan como True o False dependiendo de los valores que se les asignen.

Ejemplos:

```python
42 == 42
```

Salida:

```plaintext
True
```

```python
40 == 42
```

Salida:

```plaintext
False
```

```python
'hello' == 'hello'
```

Salida:

```plaintext
True
```

```python
'hello' == 'Hello'
```

Salida:

```plaintext
False
```

```python
'dog' != 'cat'
```

Salida:

```plaintext
True
```

```python
42 == 42.0
```

Salida:

```plaintext
True
```

```python
42 == '42'
```

Salida:

```plaintext
False
```

## Operadores Booleanos

Hay tres operadores Booleanos: `and`, `or`, y `not`.
En orden de precedencia, de mayor a menor son `not`, `and` y `or`.

Tabla de Verdad del Operador `and`:

| Expresión         | Se evalúa como |
| ----------------- | -------------- |
| `True and True`   | `True`         |
| `True and False`  | `False`        |
| `False and True`  | `False`        |
| `False and False` | `False`        |

Tabla de Verdad del Operador `or`:

| Expresión        | Se evalúa como |
| ---------------- | -------------- |
| `True or True`   | `True`         |
| `True or False`  | `True`         |
| `False or True`  | `True`         |
| `False or False` | `False`        |

Tabla de Verdad del Operador `not`:

| Expresión   | Se evalúa como |
| ----------- | -------------- |
| `not True`  | `False`        |
| `not False` | `True`         |

## Mezcla de Operadores

Puedes mezclar operadores booleanos y de comparación:

```python
(4 < 5) and (5 < 6)
```

Salida:

```plaintext
True
```

```python
(4 < 5) and (9 < 6)
```

Salida:

```plaintext
False
```

```python
(1 == 2) or (2 == 2)
```

Salida:

```plaintext
True
```

Además, puedes usar múltiples operadores booleanos en una expresión, junto con los operadores de comparación:

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

Salida:

```plaintext
True
```

```python
# En la sentencia de abajo, 3 < 4 and 5 > 5 se ejecuta primero evaluando a False
# Luego 5 > 4 devuelve True, por lo que el resultado después de True or False es True
5 > 4 or 3 < 4 and 5 > 5
```

Salida:

```plaintext
True
```

```python
# Ahora la sentencia entre paréntesis se ejecuta primero, por lo que True and False devuelve False.
(5 > 4 or 3 < 4) and 5 > 5
```

Salida:

```plaintext
False
```

## Sentencias if

La sentencia `if` evalúa una expresión, y si esa expresión es `True`, entonces ejecuta el siguiente código indentado:

```python
# sentencia if: ejecuta el bloque de código cuando la condición es True
name = 'Debora'

if name == 'Debora':  # Comprueba si el nombre es igual a 'Debora'
   print('Hi, Debora')  # Esta línea se ejecuta si la condición es True
```

Salida:

```plaintext
Hi, Debora
```

```python
if name != 'George':
   print('You are not George')
```

Salida:

```plaintext
You are not George
```

La sentencia `else` se ejecuta solo si la evaluación de la expresión `if` y todas las expresiones `elif` son `False`:

```python
# if-else: ejecuta código diferente basado en la condición
name = 'Debora'

if name == 'George':
   print('Hi, George.')
else:  # Se ejecuta si la condición if es False
   print('You are not George')
```

Salida:

```plaintext
You are not George
```

Solo después de que la expresión de la sentencia `if` sea `False`, la sentencia `elif` se evalúa y ejecuta:

```python
# if-elif: comprueba múltiples condiciones en secuencia
name = 'George'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':  # Se comprueba solo si la condición anterior es False
   print('Hi George!')
```

Salida:

```plaintext
Hi George!
```

Las partes `elif` y `else` son opcionales.

```python
name = 'Antony'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':
   print('Hi George!')
else:
   print('Who are you?')
```

Salida:

```plaintext
Who are you?
```

## Operador Condicional Ternario

Muchos lenguajes de programación tienen un operador ternario, que define una expresión condicional. El uso más común es hacer una sentencia de asignación condicional simple y concisa. En otras palabras, ofrece código de una sola línea para evaluar la primera expresión si la condición es verdadera, y de lo contrario evalúa la segunda expresión.

```plaintext
<expression1> if <condition> else <expression2>
```

Ejemplo:

```python
age = 15

# esta sentencia if:
if age < 18:
   print('kid')
else:
   print('adult')
```

Salida:

```plaintext
kid
```

```python
# Operador ternario: expresión condicional de una línea
# Sintaxis: valor_si_verdadero if condición else valor_si_falso
print('kid' if age < 18 else 'adult')
```

Salida:

```plaintext
kid
```

Los operadores ternarios se pueden encadenar:

```python
age = 15

# este operador ternario:
print('kid' if age < 13 else 'teen' if age < 18 else 'adult')
```

Salida:

```plaintext
teen
```

```python
# es equivalente a esta sentencia if:
if age < 13:
    print('kid')
else:
    if age < 18:
        print('teen')
    else:
        print('adult')
```

Salida:

```plaintext
teen
```

## Sentencia Switch-Case

<base-disclaimer>
  <base-disclaimer-title>
    Sentencias Switch-Case
  </base-disclaimer-title>
  <base-disclaimer-content>
  En los lenguajes de programación de computadoras, una sentencia switch es un tipo de mecanismo de control de selección utilizado para permitir que el valor de una variable o expresión cambie el flujo de control de la ejecución del programa mediante búsqueda y mapeo.
  </base-disclaimer-content>
</base-disclaimer>

Las _Sentencias Switch-Case_, o **Coincidencia de Patrones Estructurales** (Structural Pattern Matching), se introdujeron por primera vez en 2020 a través de [PEP 622](https://peps.python.org/pep-0622/), y luego se lanzaron oficialmente con **Python 3.10** en septiembre de 2022.

<base-disclaimer>
  <base-disclaimer-title>
    Tutorial Oficial
  </base-disclaimer-title>
  <base-disclaimer-content>
  El <a href="https://peps.python.org/pep-0636/" target="_blank">PEP 636</a> proporciona un tutorial oficial para la Coincidencia de Patrones de Python o sentencias Switch-Case.
  </base-disclaimer-content>
</base-disclaimer>

### Coincidencia de valores únicos

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

Salida:

```plaintext
Created
```

### Coincidencia con el Patrón or

En este ejemplo, el carácter de barra vertical (`|` u `or`) permite a python devolver la misma respuesta para dos o más casos.

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

Salida:

```plaintext
Internal Server Error
```

### Coincidencia por la longitud de un Iterable

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

Salida:

```plaintext
All responses: 200, 300, [404, 500]
```

### Valor por defecto

El símbolo de guion bajo (`_`) se utiliza para definir un caso por defecto:

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

Salida:

```plaintext
Invalid Code
```

### Coincidencia de Clases Incorporadas

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

Salida:

```plaintext
Code is a string
```

### Declaraciones Match-Case con Guardia (Guard)

```python
response_code = 300
match response_code:
    case int():
            if response_code > 99 and response_code < 500:
                print('Code is a valid number')
    case _:
            print('Code is an invalid number')
```

Salida:

```plaintext
Code is a valid number
```

## Sentencias de Bucle while

La sentencia while se utiliza para la ejecución repetida mientras una expresión sea `True`:

```python
# bucle while: repite el código mientras la condición sea True
spam = 0
while spam < 5:  # Continúa mientras spam sea menor que 5
    print('Hello, world.')
    spam = spam + 1  # Incrementa el contador para evitar un bucle infinito
```

Salida:

```plaintext
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
```

## Sentencias break

Si la ejecución alcanza una sentencia `break`, sale inmediatamente de la cláusula del bucle `while`:

```python
# sentencia break: sale del bucle inmediatamente al ser encontrada
while True:  # Bucle infinito
    name = input('Please type your name: ')
    if name == 'your name':
        break  # Sale del bucle inmediatamente

print('Thank you!')
```

Salida:

```plaintext
Please type your name: your name
Thank you!
```

## Sentencias continue

Cuando la ejecución del programa alcanza una sentencia `continue`, la ejecución del programa salta inmediatamente al inicio del bucle.

```python
# sentencia continue: omite el resto de la iteración del bucle e inicia la siguiente iteración
while True:
    name = input('Who are you? ')
    if name != 'Joe':
        continue  # Salta a la siguiente iteración, no pidas la contraseña
    password = input('Password? (It is a fish.): ')
    if password == 'swordfish':
        break  # Sale del bucle cuando la contraseña es correcta

print('Access granted.')
```

Salida:

```plaintext
Who are you? Charles
Who are you? Debora
Who are you? Joe
Password? (It is a fish.): swordfish
Access granted.
```

## Bucle For

El bucle `for` itera sobre una `list`, `tuple`, `dictionary`, `set` o `string`:

```python
# bucle for: itera sobre cada elemento en una secuencia
pets = ['Bella', 'Milo', 'Loki']
for pet in pets:  # Itera sobre cada mascota en la lista
    print(pet)  # Imprime el nombre de cada mascota
```

Salida:

```plaintext
Bella
Milo
Loki
```

## La función range()

La función `range()` devuelve una secuencia de números. Comienza en 0, incrementa en 1 y se detiene antes de un número especificado:

```python
for i in range(5):
    print(f'Will stop at 5! or 4? ({i})')
```

Salida:

```plaintext
Will stop at 5! or 4? (0)
Will stop at 5! or 4? (1)
Will stop at 5! or 4? (2)
Will stop at 5! or 4? (3)
Will stop at 5! or 4? (4)
```

La función `range()` también puede modificar sus 3 argumentos predeterminados. Los dos primeros serán los valores `start` y `stop`, y el tercero será el argumento `step`. El paso es la cantidad en que se incrementa la variable después de cada iteración.

```python
# range(start, stop, step)
for i in range(0, 10, 2):
   print(i)
```

Salida:

```plaintext
0
2
4
6
8
```

Incluso puedes usar un número negativo para el argumento `step` para hacer que el bucle for cuente hacia atrás en lugar de hacia adelante.

```python
for i in range(5, -1, -1):
    print(i)
```

Salida:

```plaintext
5
4
3
2
1
0
```

## Sentencia For else

Esto permite especificar una sentencia para ejecutar en caso de que se haya ejecutado el bucle completo. Solo es útil cuando una condición `break` puede ocurrir en el bucle:

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item is equal to 3")
```

## Finalizar un Programa con sys.exit()

La función `exit()` permite salir de Python.

```python
import sys

while True:
    feedback = input('Type exit to exit: ')
    if feedback == 'exit':
        print(f'You typed {feedback}.')
        sys.exit()
```

Salida:

```plaintext
Type exit to exit: open
Type exit to exit: close
Type exit to exit: exit
You typed exit.
```

## Enlaces relevantes

- <router-link to="/cheatsheet/basics">Básicos</router-link>
- <router-link to="/cheatsheet/functions">Funciones</router-link>
- <router-link to="/cheatsheet/exception-handling">Manejo de Excepciones</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/sets">Conjuntos (Sets)</router-link>
- <router-link to="/cheatsheet/dictionaries">Diccionarios</router-link>
- <router-link to="/cheatsheet/comprehensions">Comprensiones</router-link>
