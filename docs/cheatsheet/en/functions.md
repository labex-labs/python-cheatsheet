---
title: Python Functions - Python Cheatsheet
description: In Python, A function is a block of organized code that is used to perform a single task.
labUrl: https://labex.io/labs/python-python-functions-633658?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functions
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Programming Functions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A function is a block of organized code that is used to perform a single task. They provide better modularity for your application and reuse-ability.
  </base-disclaimer-content>
</base-disclaimer>

## Function Arguments

A function can take `arguments` and `return values`:

In the following example, the function **say_hello** receives the argument "name" and prints a greeting:

```python
# Define a function that takes one argument
def say_hello(name):
   print(f'Hello {name}')

# Call the function with a string argument
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

## Keyword Arguments

To improve code readability, we should be as explicit as possible. We can achieve this in our functions by using `Keyword Arguments`:

```python
# Function with multiple parameters
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# Positional arguments: order matters
say_hi('John', 'Hello')
```

Output:

```plaintext
Hello John
```

```python
# Keyword arguments: order doesn't matter, more readable
say_hi(name='Anna', greeting='Hi')
```

Output:

```plaintext
Hi Anna
```

## Return Values

When creating a function using the `def` statement, you can specify what the return value should be with a `return` statement. A return statement consists of the following:

- The `return` keyword.

- The value or expression that the function should return.

```python
# Function that returns a value using return statement
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# Call function and store the returned value
result = sum_two_numbers(7, 8)
print(result)
```

Output:

```plaintext
15
```

## Local and Global Scope

- Code in the global scope cannot use any local variables.

- However, a local scope can access global variables.

- Code in a function’s local scope cannot use variables in any other local scope.

- You can use the same name for different variables if they are in different scopes. That is, there can be a local variable named spam and a global variable also named spam.

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

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## The global Statement

If you need to modify a global variable from within a function, use the global statement:

```python
# Use 'global' keyword to modify global variable from inside function
def spam():
    global eggs  # Declare that we're modifying the global variable
    eggs = 'spam'  # This changes the global variable

eggs = 'global'
spam()  # Function modifies global variable
print(eggs)  # Prints 'spam', not 'global'
```

Output:

```plaintext
spam
```

There are four rules to tell whether a variable is in a local scope or global scope:

1. If a variable is being used in the global scope (that is, outside all functions), then it is always a global variable.

1. If there is a global statement for that variable in a function, it is a global variable.

1. Otherwise, if the variable is used in an assignment statement in the function, it is a local variable.

1. But if the variable is not used in an assignment statement, it is a global variable.

## Lambda Functions

In Python, a lambda function is a single-line, anonymous function, which can have any number of arguments, but it can only have one expression.

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

This function:

```python
# Regular function definition
def add(x, y):
    return x + y

add(5, 3)
```

Output:

```plaintext
8
```

Is equivalent to the _lambda_ function:

```python
# Lambda function: anonymous function defined in one line
# Syntax: lambda arguments: expression
add = lambda x, y: x + y
add(5, 3)
```

Output:

```plaintext
8
```

Like regular nested functions, lambdas also work as lexical closures:

```python
# Lambda closure: lambda function that captures variable from outer scope
def make_adder(n):
    return lambda x: x + n  # Lambda captures 'n' from outer function

# Create functions that add different amounts
plus_3 = make_adder(3)  # Returns lambda that adds 3
plus_5 = make_adder(5)  # Returns lambda that adds 5

plus_3(4)  # Returns 4 + 3 = 7
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

## Relevant links

- <router-link to="/blog/python-easy-args-kwargs">\*args and \*\*kwargs explained</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args and Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/cheatsheet/control-flow">Control Flow</router-link>
- <router-link to="/cheatsheet/basics">Basics</router-link>
- <router-link to="/builtin">Built-in Functions</router-link>
