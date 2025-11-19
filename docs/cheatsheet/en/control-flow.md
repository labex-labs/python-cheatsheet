---
title: Python Control Flow - Python Cheatsheet
description: Control flow is the order in which individual statements, instructions or function calls are executed or evaluated. The control flow of a Python program is regulated by conditional statements, loops, and function calls.
labUrl: https://labex.io/labs/python-python-control-flow-633651?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Control Flow
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Python control flow
  </base-disclaimer-title>
  <base-disclaimer-content>
  Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated. The control flow of a Python program is regulated by conditional statements, loops, and function calls.
  </base-disclaimer-content>
</base-disclaimer>

## Comparison Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `<`      | Less than                |
| `>`      | Greater Than             |
| `<=`     | Less than or Equal to    |
| `>=`     | Greater than or Equal to |

These operators evaluate to True or False depending on the values you give them.

Examples:

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

## Boolean Operators

There are three Boolean operators: `and`, `or`, and `not`.
In the order of precedence, highest to lowest they are `not`, `and` and `or`.

The `and` Operator’s _Truth_ Table:

| Expression        | Evaluates to |
| ----------------- | ------------ |
| `True and True`   | `True`       |
| `True and False`  | `False`      |
| `False and True`  | `False`      |
| `False and False` | `False`      |

The `or` Operator’s _Truth_ Table:

| Expression       | Evaluates to |
| ---------------- | ------------ |
| `True or True`   | `True`       |
| `True or False`  | `True`       |
| `False or True`  | `True`       |
| `False or False` | `False`      |

The `not` Operator’s _Truth_ Table:

| Expression  | Evaluates to |
| ----------- | ------------ |
| `not True`  | `False`      |
| `not False` | `True`       |

## Mixing Operators

You can mix boolean and comparison operators:

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

Also, you can mix use multiple Boolean operators in an expression, along with the comparison operators:

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

```output
True
```

```python
# In the statement below 3 < 4 and 5 > 5 gets executed first evaluating to False
# Then 5 > 4 returns True so the results after True or False is True
5 > 4 or 3 < 4 and 5 > 5
```

```output
True
```

```python
# Now the statement within parentheses gets executed first so True and False returns False.
(5 > 4 or 3 < 4) and 5 > 5
```

```output
False
```

## if Statements

The `if` statement evaluates an expression, and if that expression is `True`, it then executes the following indented code:

```python
# if statement: execute code block when condition is True
name = 'Debora'

if name == 'Debora':  # Check if name equals 'Debora'
   print('Hi, Debora')  # This line executes if condition is True
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

The `else` statement executes only if the evaluation of the `if` and all the `elif` expressions are `False`:

```python
# if-else: execute different code based on condition
name = 'Debora'

if name == 'George':
   print('Hi, George.')
else:  # Execute if if condition is False
   print('You are not George')
```

```output
You are not George
```

Only after the `if` statement expression is `False`, the `elif` statement is evaluated and executed:

```python
# if-elif: check multiple conditions in sequence
name = 'George'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':  # Checked only if previous condition is False
   print('Hi George!')
```

```output
Hi George!
```

the `elif` and `else` parts are optional.

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

## Ternary Conditional Operator

Many programming languages have a ternary operator, which define a conditional expression. The most common usage is to make a terse, simple conditional assignment statement. In other words, it offers one-line code to evaluate the first expression if the condition is true, and otherwise it evaluates the second expression.

```plaintext
<expression1> if <condition> else <expression2>
```

Example:

```python
age = 15

# this if statement:
if age < 18:
   print('kid')
else:
   print('adult')
```

```output
kid
```

```python
# Ternary operator: one-line conditional expression
# Syntax: value_if_true if condition else value_if_false
print('kid' if age < 18 else 'adult')
```

```output
kid
```

Ternary operators can be chained:

```python
age = 15

# this ternary operator:
print('kid' if age < 13 else 'teen' if age < 18 else 'adult')
```

```output
teen
```

```python
# is equivalent to this if statement:
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

## Switch-Case Statement

<base-disclaimer>
  <base-disclaimer-title>
    Switch-Case statements
  </base-disclaimer-title>
  <base-disclaimer-content>
  In computer programming languages, a switch statement is a type of selection control mechanism used to allow the value of a variable or expression to change the control flow of program execution via search and map.
  </base-disclaimer-content>
</base-disclaimer>

The _Switch-Case statements_, or **Structural Pattern Matching**, was firstly introduced in 2020 via [PEP 622](https://peps.python.org/pep-0622/), and then officially released with **Python 3.10** in September 2022.

<base-disclaimer>
  <base-disclaimer-title>
    Official Tutorial
  </base-disclaimer-title>
  <base-disclaimer-content>
  The <a href="https://peps.python.org/pep-0636/" target="_blank">PEP 636</a> provides an official tutorial for the Python Pattern matching or Switch-Case statements.
  </base-disclaimer-content>
</base-disclaimer>

### Matching single values

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

### Matching with the or Pattern

In this example, the pipe character (`|` or `or`) allows python to return the same response for two or more cases.

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

### Matching by the length of an Iterable

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

### Default value

The underscore symbol (`_`) is used to define a default case:

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

### Matching Builtin Classes

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

### Guarding Match-Case Statements

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

## while Loop Statements

The while statement is used for repeated execution as long as an expression is `True`:

```python
# while loop: repeat code as long as condition is True
spam = 0
while spam < 5:  # Continue while spam is less than 5
    print('Hello, world.')
    spam = spam + 1  # Increment counter to avoid infinite loop
```

```output
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
```

## break Statements

If the execution reaches a `break` statement, it immediately exits the `while` loop's clause:

```python
# break statement: exit loop immediately when encountered
while True:  # Infinite loop
    name = input('Please type your name: ')
    if name == 'your name':
        break  # Exit the loop immediately

print('Thank you!')
```

```output
Please type your name: your name
Thank you!
```

## continue Statements

When the program execution reaches a `continue` statement, the program execution immediately jumps back to the start of the loop.

```python
# continue statement: skip rest of loop iteration and start next iteration
while True:
    name = input('Who are you? ')
    if name != 'Joe':
        continue  # Skip to next iteration, don't ask for password
    password = input('Password? (It is a fish.): ')
    if password == 'swordfish':
        break  # Exit loop when password is correct

print('Access granted.')
```

```output
Who are you? Charles
Who are you? Debora
Who are you? Joe
Password? (It is a fish.): swordfish
Access granted.
```

## For loop

The `for` loop iterates over a `list`, `tuple`, `dictionary`, `set` or `string`:

```python
# for loop: iterate over each item in a sequence
pets = ['Bella', 'Milo', 'Loki']
for pet in pets:  # Loop through each pet in the list
    print(pet)  # Print each pet name
```

```output
Bella
Milo
Loki
```

## The range() function

The `range()` function returns a sequence of numbers. It starts from 0, increments by 1, and stops before a specified number:

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

The `range()` function can also modify its 3 defaults arguments. The first two will be the `start` and `stop` values, and the third will be the `step` argument. The step is the amount that the variable is increased by after each iteration.

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

You can even use a negative number for the step argument to make the for loop count down instead of up.

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

## For else statement

This allows to specify a statement to execute in case of the full loop has been executed. Only
useful when a `break` condition can occur in the loop:

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item is equal to 3")
```

## Ending a Program with sys.exit()

`exit()` function allows exiting Python.

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

## Relevant links

- <router-link to="/cheatsheet/basics">Basics</router-link>
- <router-link to="/cheatsheet/functions">Functions</router-link>
- <router-link to="/cheatsheet/exception-handling">Exception Handling</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Lists and Tuples</router-link>
- <router-link to="/cheatsheet/sets">Sets</router-link>
- <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>
- <router-link to="/cheatsheet/comprehensions">Comprehensions</router-link>
