---
title: 'Python Funktionen - Python Spickzettel'
description: 'In Python ist eine Funktion ein organisierter Codeblock, der zur Ausführung einer einzelnen Aufgabe dient.'
labUrl: 'https://labex.io/de/labs/python-python-functions-633658?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Funktionen
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Eine Funktion ist ein Block von organisiertem Code, der verwendet wird, um eine einzelne Aufgabe auszuführen. Sie bieten eine bessere Modularität für Ihre Anwendung und Wiederverwendbarkeit.
  </base-disclaimer-content>
</base-disclaimer>

## Funktionsargumente

Eine Funktion kann `Argumente` und `Rückgabewerte` entgegennehmen:

Im folgenden Beispiel empfängt die Funktion **say_hello** das Argument "name" und gibt eine Begrüßung aus:

```python
# Define a function that takes one argument
def say_hello(name):
   print(f'Hello {name}')

# Call the function with a string argument
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

## Schlüsselwortargumente

Um die Lesbarkeit des Codes zu verbessern, sollten wir so explizit wie möglich sein. Dies können wir in unseren Funktionen durch die Verwendung von `Keyword Arguments` (Schlüsselwortargumenten) erreichen:

```python
# Function with multiple parameters
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# Positional arguments: order matters
say_hi('John', 'Hello')
```

```output
Hello John
```

```python
# Keyword arguments: order doesn't matter, more readable
say_hi(name='Anna', greeting='Hi')
```

```output
Hi Anna
```

## Rückgabewerte

Wenn Sie eine Funktion mit der `def`-Anweisung erstellen, können Sie mit einer `return`-Anweisung festlegen, was der Rückgabewert sein soll. Eine Rückgabeanweisung besteht aus Folgendem:

- Dem Schlüsselwort `return`.

- Dem Wert oder Ausdruck, den die Funktion zurückgeben soll.

```python
# Function that returns a value using return statement
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# Call function and store the returned value
result = sum_two_numbers(7, 8)
print(result)
```

```output
15
```

## Lokaler und globaler Gültigkeitsbereich (Scope)

- Code im globalen Gültigkeitsbereich kann keine lokalen Variablen verwenden.

- Ein lokaler Gültigkeitsbereich kann jedoch auf globale Variablen zugreifen.

- Code im lokalen Gültigkeitsbereich einer Funktion kann keine Variablen in einem anderen lokalen Gültigkeitsbereich verwenden.

- Sie können denselben Namen für verschiedene Variablen verwenden, wenn diese sich in unterschiedlichen Gültigkeitsbereichen befinden. Das heißt, es kann eine lokale Variable namens `spam` und eine globale Variable, die ebenfalls `spam` heißt, geben.

```python
# Global variable: accessible everywhere
global_variable = 'I am available everywhere'

def some_function():
    print(global_variable)  # Can access global variable
    # Local variable: only exists within this function
    local_variable = "only available within this function"
    print(local_variable)

# This will raise NameError: local_variable doesn't exist in global scope
print(local_variable)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## Die global-Anweisung

Wenn Sie eine globale Variable innerhalb einer Funktion ändern müssen, verwenden Sie die `global`-Anweisung:

```python
# Use 'global' keyword to modify global variable from inside function
def spam():
    global eggs  # Declare that we're modifying the global variable
    eggs = 'spam'  # This changes the global variable

eggs = 'global'
spam()  # Function modifies global variable
print(eggs)  # Prints 'spam', not 'global'
```

```output
spam
```

Es gibt vier Regeln, um festzustellen, ob sich eine Variable in einem lokalen oder globalen Gültigkeitsbereich befindet:

1. Wenn eine Variable im globalen Gültigkeitsbereich verwendet wird (d. h. außerhalb aller Funktionen), ist sie immer eine globale Variable.

1. Wenn es in einer Funktion eine `global`-Anweisung für diese Variable gibt, ist sie eine globale Variable.

1. Andernfalls, wenn die Variable in einer Zuweisungsanweisung in der Funktion verwendet wird, ist sie eine lokale Variable.

1. Wenn die Variable jedoch nicht in einer Zuweisungsanweisung verwendet wird, ist sie eine globale Variable.

## Lambda-Funktionen

In Python ist eine Lambda-Funktion eine einzeilige, anonyme Funktion, die eine beliebige Anzahl von Argumenten haben kann, aber nur einen Ausdruck haben kann.

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Python 3 Tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda is a minimal function definition that can be used inside an expression. Unlike FunctionDef, body holds a single node.
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    Single line expression
  </base-warning-title>
  <base-warning-content>
    Lambda functions can only evaluate an expression, like a single line of code.
  </base-warning-content>
</base-warning>

Diese Funktion:

```python
# Regular function definition
def add(x, y):
    return x + y

add(5, 3)
```

```output
8
```

Ist äquivalent zur _Lambda_-Funktion:

```python
# Lambda function: anonymous function defined in one line
# Syntax: lambda arguments: expression
add = lambda x, y: x + y
add(5, 3)
```

```output
8
```

Wie reguläre verschachtelte Funktionen funktionieren Lambdas auch als lexikalische Closures:

```python
# Lambda closure: lambda function that captures variable from outer scope
def make_adder(n):
    return lambda x: x + n  # Lambda captures 'n' from outer function

# Create functions that add different amounts
plus_3 = make_adder(3)  # Returns lambda that adds 3
plus_5 = make_adder(5)  # Returns lambda that adds 5

plus_3(4)  # Returns 4 + 3 = 7
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

## Relevante Links

- <router-link to="/blog/python-easy-args-kwargs">\*args and \*\*kwargs explained</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args and Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/cheatsheet/control-flow">Control Flow</router-link>
- <router-link to="/cheatsheet/basics">Basics</router-link>
- <router-link to="/builtin">Built-in Functions</router-link>
