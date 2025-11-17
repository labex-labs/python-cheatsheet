---
title: 'Управление потоком Python - Шпаргалка по Python'
description: 'Управление потоком — это порядок выполнения или оценки отдельных операторов, инструкций или вызовов функций. Поток выполнения программы Python регулируется условными операторами, циклами и вызовами функций.'
labUrl: 'https://labex.io/ru/labs/python-python-control-flow-633651?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Управление потоком Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Управление потоком Python
  </base-disclaimer-title>
  <base-disclaimer-content>
  Управление потоком — это порядок, в котором выполняются или оцениваются отдельные операторы, инструкции или вызовы функций. Управление потоком программы Python регулируется условными операторами, циклами и вызовами функций.
  </base-disclaimer-content>
</base-disclaimer>

## Операторы сравнения

| Оператор | Значение         |
| -------- | ---------------- |
| `==`     | Равно            |
| `!=`     | Не равно         |
| `<`      | Меньше чем       |
| `>`      | Больше чем       |
| `<=`     | Меньше или равно |
| `>=`     | Больше или равно |

Эти операторы возвращают `True` или `False` в зависимости от предоставленных вами значений.

Примеры:

```python
42 == 42
```

Вывод:

```plaintext
True
```

```python
40 == 42
```

Вывод:

```plaintext
False
```

```python
'hello' == 'hello'
```

Вывод:

```plaintext
True
```

```python
'hello' == 'Hello'
```

Вывод:

```plaintext
False
```

```python
'dog' != 'cat'
```

Вывод:

```plaintext
True
```

```python
42 == 42.0
```

Вывод:

```plaintext
True
```

```python
42 == '42'
```

Вывод:

```plaintext
False
```

## Логические операторы

Существует три логических оператора: `and`, `or` и `not`.
В порядке приоритета, от высшего к низшему: `not`, `and` и `or`.

Таблица истинности для оператора `and`:

| Выражение         | Возвращает |
| ----------------- | ---------- |
| `True and True`   | `True`     |
| `True and False`  | `False`    |
| `False and True`  | `False`    |
| `False and False` | `False`    |

Таблица истинности для оператора `or`:

| Выражение        | Возвращает |
| ---------------- | ---------- |
| `True or True`   | `True`     |
| `True or False`  | `True`     |
| `False or True`  | `True`     |
| `False or False` | `False`    |

Таблица истинности для оператора `not`:

| Выражение   | Возвращает |
| ----------- | ---------- |
| `not True`  | `False`    |
| `not False` | `True`     |

## Смешивание операторов

Вы можете смешивать логические операторы и операторы сравнения:

```python
(4 < 5) and (5 < 6)
```

Вывод:

```plaintext
True
```

```python
(4 < 5) and (9 < 6)
```

Вывод:

```plaintext
False
```

```python
(1 == 2) or (2 == 2)
```

Вывод:

```plaintext
True
```

Вы также можете использовать несколько логических операторов в одном выражении вместе с операторами сравнения:

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

Вывод:

```plaintext
True
```

```python
# В приведенном ниже операторе сначала выполняется 3 < 4 and 5 > 5, что дает False
# Затем 5 > 4 возвращает True, поэтому результат после True or False будет True
5 > 4 or 3 < 4 and 5 > 5
```

Вывод:

```plaintext
True
```

```python
# Теперь сначала выполняется выражение в скобках, поэтому True and False возвращает False.
(5 > 4 or 3 < 4) and 5 > 5
```

Вывод:

```plaintext
False
```

## Операторы if

Оператор `if` оценивает выражение, и если это выражение равно `True`, он выполняет следующий блок кода с отступом:

```python
# оператор if: выполнить блок кода, когда условие истинно
name = 'Debora'

if name == 'Debora':  # Проверить, равно ли имя 'Debora'
   print('Hi, Debora')  # Эта строка выполняется, если условие истинно
```

Вывод:

```plaintext
Hi, Debora
```

```python
if name != 'George':
   print('You are not George')
```

Вывод:

```plaintext
You are not George
```

Оператор `else` выполняется только в том случае, если оценка выражений `if` и всех выражений `elif` равна `False`:

```python
# if-else: выполнить другой код в зависимости от условия
name = 'Debora'

if name == 'George':
   print('Hi, George.')
else:  # Выполнить, если условие if ложно
   print('You are not George')
```

Вывод:

```plaintext
You are not George
```

Только после того, как выражение оператора `if` окажется `False`, оператор `elif` будет оценен и выполнен:

```python
# if-elif: проверка нескольких условий последовательно
name = 'George'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':  # Проверяется, только если предыдущее условие ложно
   print('Hi George!')
```

Вывод:

```plaintext
Hi George!
```

части `elif` и `else` необязательны.

```python
name = 'Antony'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':
   print('Hi George!')
else:
   print('Who are you?')
```

Вывод:

```plaintext
Who are you?
```

## Тернарный условный оператор

Многие языки программирования имеют тернарный оператор, который определяет условное выражение. Наиболее распространенное использование — это создание краткого, простого оператора присваивания с условием. Другими словами, он предлагает однострочный код для оценки первого выражения, если условие истинно, и в противном случае он оценивает второе выражение.

```plaintext
<expression1> if <condition> else <expression2>
```

Пример:

```python
age = 15

# этот оператор if:
if age < 18:
   print('kid')
else:
   print('adult')
```

Вывод:

```plaintext
kid
```

```python
# Тернарный оператор: условное выражение в одну строку
# Синтаксис: value_if_true if condition else value_if_false
print('kid' if age < 18 else 'adult')
```

Вывод:

```plaintext
kid
```

Тернарные операторы могут быть соединены в цепочку:

```python
age = 15

# этот тернарный оператор:
print('kid' if age < 13 else 'teen' if age < 18 else 'adult')
```

Вывод:

```plaintext
teen
```

```python
# эквивалентно этому оператору if:
if age < 13:
    print('kid')
else:
    if age < 18:
        print('teen')
    else:
        print('adult')
```

Вывод:

```plaintext
teen
```

## Оператор Switch-Case

<base-disclaimer>
  <base-disclaimer-title>
    Операторы Switch-Case
  </base-disclaimer-title>
  <base-disclaimer-content>
  В языках программирования оператор switch — это тип механизма управления выбором, используемый для того, чтобы значение переменной или выражения изменяло поток управления выполнением программы посредством поиска и сопоставления.
  </base-disclaimer-content>
</base-disclaimer>

Операторы _Switch-Case_, или **Структурное сопоставление шаблонов (Structural Pattern Matching)**, были впервые представлены в 2020 году через [PEP 622](https://peps.python.org/pep-0622/), а затем официально выпущены с **Python 3.10** в сентябре 2022 года.

<base-disclaimer>
  <base-disclaimer-title>
    Официальное руководство
  </base-disclaimer-title>
  <base-disclaimer-content>
  [PEP 636](https://peps.python.org/pep-0636/) предоставляет официальное руководство по сопоставлению шаблонов Python или операторам Switch-Case.
  </base-disclaimer-content>
</base-disclaimer>

### Сопоставление одиночных значений

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

Вывод:

```plaintext
Created
```

### Сопоставление с шаблоном или (`or`)

В этом примере символ вертикальной черты (`|` или `or`) позволяет Python возвращать один и тот же ответ для двух или более случаев.

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

Вывод:

```plaintext
Internal Server Error
```

### Сопоставление по длине итерируемого объекта

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

Вывод:

```plaintext
All responses: 200, 300, [404, 500]
```

### Значение по умолчанию

Символ подчеркивания (`_`) используется для определения случая по умолчанию:

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

Вывод:

```plaintext
Invalid Code
```

### Сопоставление встроенных классов

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

Вывод:

```plaintext
Code is a string
```

### Защита операторов Match-Case (Guard)

```python
response_code = 300
match response_code:
    case int():
            if response_code > 99 and response_code < 500:
                print('Code is a valid number')
    case _:
            print('Code is an invalid number')
```

Вывод:

```plaintext
Code is a valid number
```

## Операторы цикла while

Оператор while используется для повторяющегося выполнения до тех пор, пока выражение истинно:

```python
# цикл while: повторять код, пока условие истинно
spam = 0
while spam < 5:  # Продолжать, пока spam меньше 5
    print('Hello, world.')
    spam = spam + 1  # Увеличить счетчик, чтобы избежать бесконечного цикла
```

Вывод:

```plaintext
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
```

## Операторы break

Если выполнение достигает оператора `break`, оно немедленно выходит из блока цикла `while`:

```python
# оператор break: немедленно выйти из цикла при обнаружении
while True:  # Бесконечный цикл
    name = input('Please type your name: ')
    if name == 'your name':
        break  # Немедленно выйти из цикла

print('Thank you!')
```

Вывод:

```plaintext
Please type your name: your name
Thank you!
```

## Операторы continue

Когда выполнение программы достигает оператора `continue`, выполнение программы немедленно переходит к началу цикла.

```python
# оператор continue: пропустить оставшуюся часть итерации цикла и начать следующую итерацию
while True:
    name = input('Who are you? ')
    if name != 'Joe':
        continue  # Перейти к следующей итерации, не запрашивать пароль
    password = input('Password? (It is a fish.): ')
    if password == 'swordfish':
        break  # Выйти из цикла, когда пароль верен

print('Access granted.')
```

Вывод:

```plaintext
Who are you? Charles
Who are you? Debora
Who are you? Joe
Password? (It is a fish.): swordfish
Access granted.
```

## Цикл for

Цикл `for` итерируется по `list`, `tuple`, `dictionary`, `set` или `string`:

```python
# цикл for: итерация по каждому элементу в последовательности
pets = ['Bella', 'Milo', 'Loki']
for pet in pets:  # Цикл по каждому питомцу в списке
    print(pet)  # Вывести имя каждого питомца
```

Вывод:

```plaintext
Bella
Milo
Loki
```

## Функция range()

Функция `range()` возвращает последовательность чисел. Она начинается с 0, увеличивается на 1 и останавливается перед указанным числом:

```python
for i in range(5):
    print(f'Will stop at 5! or 4? ({i})')
```

Вывод:

```plaintext
Will stop at 5! or 4? (0)
Will stop at 5! or 4? (1)
Will stop at 5! or 4? (2)
Will stop at 5! or 4? (3)
Will stop at 5! or 4? (4)
```

Функция `range()` также может изменять свои 3 значения по умолчанию. Первые два будут значениями `start` и `stop`, а третье будет аргументом `step`. Шаг — это величина, на которую увеличивается переменная после каждой итерации.

```python
# range(start, stop, step)
for i in range(0, 10, 2):
   print(i)
```

Вывод:

```plaintext
0
2
4
6
8
```

Вы даже можете использовать отрицательное число для аргумента `step`, чтобы заставить цикл `for` считать в обратном порядке, а не по возрастанию.

```python
for i in range(5, -1, -1):
    print(i)
```

Вывод:

```plaintext
5
4
3
2
1
0
```

## Оператор For else

Это позволяет указать оператор для выполнения в случае полного выполнения цикла. Полезно только тогда, когда в цикле может произойти условие `break`:

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item is equal to 3")
```

## Завершение программы с помощью sys.exit()

Функция `exit()` позволяет завершить работу Python.

```python
import sys

while True:
    feedback = input('Type exit to exit: ')
    if feedback == 'exit':
        print(f'You typed {feedback}.')
        sys.exit()
```

Вывод:

```plaintext
Type exit to exit: open
Type exit to exit: close
Type exit to exit: exit
You typed exit.
```

## Связанные ссылки

- <router-link to="/cheatsheet/basics">Basics</router-link>
- <router-link to="/cheatsheet/functions">Functions</router-link>
- <router-link to="/cheatsheet/exception-handling">Exception Handling</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Lists and Tuples</router-link>
- <router-link to="/cheatsheet/sets">Sets</router-link>
- <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>
- <router-link to="/cheatsheet/comprehensions">Comprehensions</router-link>
