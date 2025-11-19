---
title: 'Funciones de Python - Hoja de Trucos de Python'
description: 'En Python, una función es un bloque de código organizado que se utiliza para realizar una única tarea.'
labUrl: 'https://labex.io/es/labs/python-python-functions-633658?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Funciones de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Una función es un bloque de código organizado que se utiliza para realizar una única tarea. Proporcionan una mejor modularidad para su aplicación y reutilización.
  </base-disclaimer-content>
</base-disclaimer>

## Argumentos de Función

Una función puede recibir `arguments` (argumentos) y `return values` (valores de retorno):

En el siguiente ejemplo, la función **say_hello** recibe el argumento "name" e imprime un saludo:

```python
# Define una función que toma un argumento
def say_hello(name):
   print(f'Hello {name}')

# Llama a la función con un argumento de cadena
say_hello('Carlos')
```

```output
Hello Carlos
```

```python
say_hello('Wanda')
```

```output
Hello Wanda
```

```python
say_hello('Rose')
```

```output
Hello Rose
```

## Argumentos de Palabra Clave (Keyword Arguments)

Para mejorar la legibilidad del código, debemos ser lo más explícitos posible. Podemos lograr esto en nuestras funciones usando `Keyword Arguments`:

```python
# Función con múltiples parámetros
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# Argumentos posicionales: el orden importa
say_hi('John', 'Hello')
```

```output
Hello John
```

```python
# Argumentos de palabra clave: el orden no importa, más legible
say_hi(name='Anna', greeting='Hi')
```

```output
Hi Anna
```

## Valores de Retorno

Al crear una función usando la declaración `def`, puede especificar cuál debe ser el valor de retorno con una declaración `return`. Una declaración de retorno consta de lo siguiente:

- La palabra clave `return`.

- El valor o expresión que la función debe devolver.

```python
# Función que devuelve un valor usando la declaración return
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# Llama a la función y almacena el valor devuelto
result = sum_two_numbers(7, 8)
print(result)
```

```output
15
```

## Ámbito Local y Global (Local and Global Scope)

- El código en el ámbito global no puede usar ninguna variable local.

- Sin embargo, un ámbito local puede acceder a variables globales.

- El código en el ámbito local de una función no puede usar variables en ningún otro ámbito local.

- Puedes usar el mismo nombre para diferentes variables si están en diferentes ámbitos. Es decir, puede haber una variable local llamada `spam` y una variable global también llamada `spam`.

```python
# Variable global: accesible en todas partes
global_variable = 'I am available everywhere'

def some_function():
    print(global_variable)  # Puede acceder a la variable global
    # Variable local: solo existe dentro de esta función
    local_variable = "only available within this function"
    print(local_variable)

# Esto generará NameError: local_variable no existe en el ámbito global
print(local_variable)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## La Declaración global

Si necesita modificar una variable global desde dentro de una función, use la declaración `global`:

```python
# Usa la palabra clave 'global' para modificar la variable global desde dentro de la función
def spam():
    global eggs  # Declara que estamos modificando la variable global
    eggs = 'spam'  # Esto cambia la variable global

eggs = 'global'
spam()  # La función modifica la variable global
print(eggs)  # Imprime 'spam', no 'global'
```

```output
spam
```

Hay cuatro reglas para saber si una variable está en un ámbito local o global:

1. Si una variable se está utilizando en el ámbito global (es decir, fuera de todas las funciones), siempre es una variable global.

1. Si hay una declaración `global` para esa variable en una función, es una variable global.

1. De lo contrario, si la variable se utiliza en una declaración de asignación en la función, es una variable local.

1. Pero si la variable no se utiliza en una declaración de asignación, es una variable global.

## Funciones Lambda

En Python, una función lambda es una función anónima de una sola línea, que puede tener cualquier número de argumentos, pero solo puede tener una expresión.

<base-disclaimer>
  <base-disclaimer-title>
    Del <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Tutorial de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda es una definición de función mínima que se puede utilizar dentro de una expresión. A diferencia de FunctionDef, el cuerpo contiene un único nodo.
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    Expresión de una sola línea
  </base-warning-title>
  <base-warning-content>
    Las funciones Lambda solo pueden evaluar una expresión, como una sola línea de código.
  </base-warning-content>
</base-warning>

Esta función:

```python
# Definición de función regular
def add(x, y):
    return x + y

add(5, 3)
```

```output
8
```

Es equivalente a la función _lambda_:

```python
# Función Lambda: función anónima definida en una línea
# Sintaxis: lambda argumentos: expresión
add = lambda x, y: x + y
add(5, 3)
```

```output
8
```

Al igual que las funciones anidadas regulares, las lambdas también funcionan como cierres léxicos (lexical closures):

```python
# Cierre Lambda: función lambda que captura una variable del ámbito exterior
def make_adder(n):
    return lambda x: x + n  # Lambda captura 'n' de la función exterior

# Crea funciones que suman diferentes cantidades
plus_3 = make_adder(3)  # Devuelve lambda que suma 3
plus_5 = make_adder(5)  # Devuelve lambda que suma 5

plus_3(4)  # Devuelve 4 + 3 = 7
```

```output
7
```

```python
plus_5(4)
```

```output
9
```

## Enlaces relevantes

- <router-link to="/blog/python-easy-args-kwargs">\*args y \*\*kwargs explicados</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args y Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">Decoradores</router-link>
- <router-link to="/cheatsheet/control-flow">Flujo de Control</router-link>
- <router-link to="/cheatsheet/basics">Conceptos Básicos</router-link>
- <router-link to="/builtin">Funciones Incorporadas</router-link>
