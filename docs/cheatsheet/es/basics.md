---
title: 'Fundamentos de Python - Hoja de Trucos de Python'
description: 'Lo esencial de Python. Todos necesitamos empezar en algún lugar, ¿por qué no empezar aquí?'
labUrl: 'https://labex.io/es/labs/python-python-basics-633647?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Conceptos Básicos de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Todos necesitamos empezar en algún lugar, así que ¿por qué no hacerlo aquí?

<base-disclaimer>
  <base-disclaimer-title>
    Del <a href="https://docs.python.org/3/tutorial/index.html">tutorial de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python es un lenguaje de programación potente y fácil de aprender [...] La sintaxis elegante de Python y la tipificación dinámica, junto con su naturaleza interpretada, lo convierten en un lenguaje ideal para scripting y desarrollo rápido de aplicaciones.
  </base-disclaimer-content>
</base-disclaimer>

## Operadores Matemáticos

De **mayor** a **menor** precedencia:

| Operadores | Operación       | Ejemplo         |
| ---------- | --------------- | --------------- |
| \*\*       | Exponenciación  | `2 ** 3 = 8`    |
| %          | Módulo/Resto    | `22 % 8 = 6`    |
| //         | División entera | `22 // 8 = 2`   |
| /          | División        | `22 / 8 = 2.75` |
| \*         | Multiplicación  | `3 * 3 = 9`     |
| -          | Resta           | `5 - 2 = 3`     |
| +          | Suma            | `2 + 2 = 4`     |

Ejemplos de expresiones:

```python
# La multiplicación tiene mayor precedencia que la suma
# Así que esto se evalúa como: 2 + (3 * 6) = 2 + 18 = 20
2 + 3 * 6
```

Salida:

```plaintext
20
```

```python
# Los paréntesis anulan la precedencia de los operadores
# Esto se evalúa como: 5 * 6 = 30
(2 + 3) * 6
```

Salida:

```plaintext
30
```

```python
2 ** 8
```

Salida:

```plaintext
256
```

```python
23 // 7
```

Salida:

```plaintext
3
```

```python
23 % 7
```

Salida:

```plaintext
2
```

```python
(5 - 1) * ((7 + 1) / (3 - 1))
```

Salida:

```plaintext
16.0
```

## Operadores de Asignación Aumentada

| Operador    | Equivalente      |
| ----------- | ---------------- |
| `var += 1`  | `var = var + 1`  |
| `var -= 1`  | `var = var - 1`  |
| `var *= 1`  | `var = var * 1`  |
| `var /= 1`  | `var = var / 1`  |
| `var //= 1` | `var = var // 1` |
| `var %= 1`  | `var = var % 1`  |
| `var **= 1` | `var = var ** 1` |

Ejemplos:

```python
# Asignación aumentada: equivalente a saludo = saludo + ' mundo!'
saludo = 'Hola'
saludo += ' mundo!'
saludo
```

Salida:

```plaintext
'Hola mundo!'
```

```python
# Incrementar un número en 1
numero = 1
numero += 1
numero
```

Salida:

```plaintext
2
```

```python
# Replicar elementos de una lista: equivalente a mi_lista = mi_lista * 3
mi_lista = ['item']
mi_lista *= 3
mi_lista
```

Salida:

```plaintext
['item', 'item', 'item']
```

## Operador Walrus (Morsa)

El Operador Walrus permite la asignación de variables dentro de una expresión mientras devuelve el valor de la variable

Ejemplo:

```python
# El operador Walrus asigna y devuelve el valor en una sola expresión
# my_var se asigna "Hello World!" y luego se imprime
print(my_var:="Hello World!")
```

Salida:

```plaintext
Hello World!
```

```python
my_var="Sí"
print(my_var)
```

Salida:

```plaintext
Sí
```

```python
print(my_var:="Hola")
```

Salida:

```plaintext
Hola
```

El _Operador Walrus_, u **Operador de Expresión de Asignación**, fue introducido por primera vez en 2018 a través de [PEP 572](https://peps.python.org/pep-0572/), y luego lanzado oficialmente con **Python 3.8** en octubre de 2019.

<base-disclaimer>
  <base-disclaimer-title>
    Semántica de Sintaxis y Ejemplos
  </base-disclaimer-title>
  <base-disclaimer-content>
  El <a href="https://peps.python.org/pep-0572/" target="_blank">PEP 572</a> proporciona la sintaxis, semántica y ejemplos para el Operador Walrus.
  </base-disclaimer-content>
</base-disclaimer>

## Tipos de Datos

Python tiene nueve tipos de datos incorporados principales que cubren casi todo lo que necesitarás:

| Tipo de Dato                                               | Ejemplos                                 | Descripción                                  |
| ---------------------------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| **Números**                                                |                                          |                                              |
| <router-link to='/builtin/int'>`int`</router-link>         | `-2, -1, 0, 1, 2, 3, 4, 5`               | Números enteros                              |
| <router-link to='/builtin/float'>`float`</router-link>     | `-1.25, -1.0, -0.5, 0.0, 0.5, 1.0, 1.25` | Números con puntos decimales                 |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j, complex(1, 4)`                    | Números con partes reales e imaginarias      |
| **Texto**                                                  |                                          |                                              |
| <router-link to='/builtin/str'>`str`</router-link>         | `'a', 'Hello!', "Python"`                | Texto y caracteres                           |
| **Booleano**                                               |                                          |                                              |
| <router-link to='/builtin/bool'>`bool`</router-link>       | `True, False`                            | Valores Verdadero o Falso                    |
| **None**                                                   |                                          |                                              |
| `NoneType`                                                 | `None`                                   | Representa "ningún valor" o "nada"           |
| **Colecciones**                                            |                                          |                                              |
| <router-link to='/builtin/list'>`list`</router-link>       | `[1, 2, 3], ['a', 'b', 'c']`             | Colecciones ordenadas y modificables         |
| <router-link to='/builtin/dict'>`dict`</router-link>       | `{'name': 'Alice', 'age': 30}`           | Pares clave-valor                            |
| <router-link to='/builtin/tuple'>`tuple`</router-link>     | `(1, 2, 3), ('a', 'b')`                  | Colecciones ordenadas e inmutables           |
| <router-link to='/builtin/set'>`set`</router-link>         | `{1, 2, 3}, {'a', 'b', 'c'}`             | Colecciones desordenadas de elementos únicos |

### Ejemplos Rápidos

```python
# Números
edad = 25                    # int
precio = 19.99              # float
coordenada = 2 + 3j        # complex

# Texto
nombre = "Alice"             # str

# Booleano
es_estudiante = True          # bool

# None
resultado = None              # NoneType

# Colecciones
puntuaciones = [85, 92, 78]      # list
persona = {'nombre': 'Bob', 'edad': 30}  # dict
coordenadas = (10, 20)     # tuple
ids_unicos = {1, 2, 3}     # set
```

Para una guía completa con ejemplos visuales y explicaciones detalladas sobre cuándo usar cada tipo, consulta: <router-link to="/blog/python-data-types">Tipos de Datos de Python: Una Guía Visual para Principiantes</router-link>.

## Concatenación y Replicación

Concatenación de cadenas:

```python
# Concatenación de cadenas: las cadenas adyacentes se unen automáticamente
'Alice' 'Bob'
```

Salida:

```plaintext
'AliceBob'
```

Replicación de cadenas:

```python
# Replicación de cadenas: repite la cadena varias veces
'Alice' * 5
```

Salida:

```plaintext
'AliceAliceAliceAliceAlice'
```

## Variables

Puedes nombrar una variable como quieras siempre que cumpla las siguientes reglas:

1. Solo puede ser una palabra.

```python
# mal
mi variable = 'Hola'

# bien
var = 'Hola'
```

2. Solo puede usar letras, números y el carácter de guion bajo (`_`).

```python
# mal
%$@variable = 'Hola'

# bien
mi_var = 'Hola'

# bien
mi_var_2 = 'Hola'
```

3. No puede comenzar con un número.

```python
# esto no funcionará
23_var = 'hola'
```

4. Los nombres de variables que comienzan con un guion bajo (`_`) se consideran "no útiles".

```python
# _spam no debe usarse de nuevo en el código
_spam = 'Hola'
```

## Comentarios

Comentario en línea:

```python
# Este es un comentario
```

Comentario multilínea:

```python
# Este es un
# comentario multilínea
```

Código con un comentario:

```python
a = 1  # inicialización
```

Ten en cuenta los dos espacios delante del comentario.

Docstring de función:

```python
def foo():
    """
    Este es un docstring de función
    También puedes usar:
    ''' Docstring de Función '''
    """
```

## La Función print()

La función `print()` escribe el valor del argumento(s) que recibe. [...] maneja múltiples argumentos, cantidades de punto flotante y cadenas. Las cadenas se imprimen sin comillas, y se inserta un espacio entre los elementos, por lo que puedes formatear las cosas de forma agradable:

```python
print('Hola mundo!')
```

Salida:

```plaintext
Hola mundo!
```

```python
a = 1
print('Hola mundo!', a)
```

Salida:

```plaintext
Hola mundo! 1
```

### La palabra clave end

El argumento de palabra clave `end` se puede usar para evitar el salto de línea después de la salida, o para terminar la salida con una cadena diferente:

```python
# Usa el parámetro end para cambiar lo que viene después de cada instrucción print
frase = ['impreso', 'con', 'un', 'guion', 'en', 'medio']
for palabra in frase:
    print(palabra, end='-')  # Usa '-' en lugar de salto de línea
```

Salida:

```plaintext
impreso-con-un-guion-en-medio-
```

### La palabra clave sep

La palabra clave `sep` especifica cómo separar los objetos, si hay más de uno:

```python
# Usa el parámetro sep para especificar el separador entre múltiples argumentos
print('gatos', 'perros', 'ratones', sep=',')  # Salida separada por comas
```

Salida:

```plaintext
gatos,perros,ratones
```

## La Función input()

Esta función toma la entrada del usuario y la convierte en una cadena:

```python
# input() lee la entrada del usuario y la devuelve como una cadena
print('¿Cuál es tu nombre?')   # pregunta por su nombre
my_name = input()  # Espera a que el usuario escriba y presione Enter
print('Hola, {}'.format(my_name))
```

Salida:

```plaintext
¿Cuál es tu nombre?
Martha
Hola, Martha
```

`input()` también puede establecer un mensaje predeterminado sin usar `print()`:

```python
my_name = input('¿Cuál es tu nombre? ')  # mensaje predeterminado
print('Hola, {}'.format(my_name))
```

Salida:

```plaintext
¿Cuál es tu nombre? Martha
Hola, Martha
```

También es posible usar cadenas formateadas para evitar el uso de .format:

```python
# input() puede mostrar un mensaje de indicación directamente
my_name = input('¿Cuál es tu nombre? ')  # Indicación y lectura en una sola llamada
print(f'Hola, {my_name}')  # f-string para formateo de cadenas
```

Salida:

```plaintext
¿Cuál es tu nombre? Martha
Hola, Martha
```

## La Función len()

Se evalúa al valor entero del número de caracteres en una cadena, lista, diccionario, etc.:

```python
# len() devuelve el número de caracteres en una cadena
len('hola')  # Devuelve 5
```

Salida:

```plaintext
5
```

```python
# len() devuelve el número de elementos en una lista
len(['gato', 3, 'perro'])  # Devuelve 3 (tres elementos)
```

Salida:

```plaintext
3
```

<base-warning>
  <base-warning-title>Prueba de vaciedad</base-warning-title>
  <base-warning-content>
    La prueba de vaciedad de cadenas, listas, diccionarios, etc., no debe usar
    <code>len</code>, sino preferir la evaluación booleana directa.
  </base-warning-content>
</base-warning>

Ejemplo de prueba de vaciedad:

```python
a = [1, 2, 3]

# mal: comprobación len() innecesaria
if len(a) > 0:  # se evalúa como True
    print("¡la lista no está vacía!")
```

Salida:

```plaintext
¡la lista no está vacía!
```

```python
# bien: evaluación booleana directa (forma Pythonica)
if a:  # se evalúa como True si la lista no está vacía
    print("¡la lista no está vacía!")
```

Salida:

```plaintext
¡la lista no está vacía!
```

## Las Funciones str(), int(), y float()

Estas funciones te permiten cambiar el tipo de variable. Por ejemplo, puedes transformar de un `integer` o `float` a un `string`:

```python
# Convertir entero a cadena
str(29)  # Devuelve '29'
```

Salida:

```plaintext
'29'
```

```python
str(-3.14)
```

Salida:

```plaintext
'-3.14'
```

O de una `string` a un `integer` o `float`:

```python
# Convertir cadena a entero
int('11')  # Devuelve 11
```

Salida:

```plaintext
11
```

```python
# Convertir cadena a flotante
float('3.14')  # Devuelve 3.14
```

Salida:

```plaintext
3.14
```

## Enlaces Relevantes

- <router-link to="/blog/python-data-types">Tipos de Datos de Python: Una Guía Visual para Principiantes</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Comprensiones de Python Paso a Paso</router-link>
- <router-link to="/cheatsheet/control-flow">Flujo de Control</router-link>
- <router-link to="/cheatsheet/functions">Funciones</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listas y Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Diccionarios</router-link>
- <router-link to="/cheatsheet/sets">Conjuntos (Sets)</router-link>
- <router-link to="/cheatsheet/string-formatting">Formato de Cadenas</router-link>
