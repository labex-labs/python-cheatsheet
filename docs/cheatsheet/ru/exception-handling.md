---
title: 'Обработка исключений Python - Шпаргалка по Python'
description: 'В Python обработка исключений — это процесс реагирования на возникновение исключений.'
labUrl: 'https://labex.io/ru/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Обработка исключений Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">Обработка исключений</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    В вычислениях и компьютерном программировании обработка исключений — это процесс реагирования на возникновение исключений — аномальных или исключительных условий, требующих специальной обработки.
  </base-disclaimer-content>
</base-disclaimer>

В Python есть много [встроенных исключений](https://docs.python.org/3/library/exceptions.html), которые вызываются, когда программа сталкивается с ошибкой, и большинство внешних библиотек, таких как популярная [Requests](https://requests.readthedocs.io/en/latest), включают свои собственные [пользовательские исключения](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions), с которыми нам придется иметь дело.

## Базовая обработка исключений

Нельзя делить на ноль, это математическая истина, и если вы попытаетесь сделать это в Python, интерпретатор вызовет встроенное исключение [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError):

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

Вывод:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Вывод:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Предположим, мы не хотим, чтобы наша программа прекращала выполнение или показывала пользователю непонятный вывод. Скажем, мы хотим напечатать полезное и понятное сообщение, тогда нам нужно **_обработать_** исключение с помощью ключевых слов `try` и `except`:

```python
# try-except: обрабатывать исключения корректно
def divide(dividend , divisor):
    try:  # Попытаться выполнить этот код
        print(dividend / divisor)
    except ZeroDivisionError:  # Перехватить конкретный тип исключения
        print('You can not divide by 0')

divide(dividend=10, divisor=5)
```

Вывод:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Вывод:

```plaintext
You can not divide by 0
```

## Обработка нескольких исключений с помощью одного блока исключений

Вы также можете обрабатывать несколько исключений в одной строке, как показано ниже, без необходимости создавать несколько блоков исключений.

```python
# Обработка нескольких исключений в одном блоке except
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # Это вызовет TypeError
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # Перехват нескольких типов исключений
        print(error)  # Вывод сообщения об ошибке

divide(dividend=20, divisor=5)
```

Вывод:

```plaintext
4
```

```python
divide(dividend=10, divisor=5)
```

Вывод:

```plaintext
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

Вывод:

```plaintext
division by zero
```

## Код finally при обработке исключений

Код внутри секции `finally` всегда выполняется, независимо от того, было ли вызвано исключение или нет:

```python
# Блок finally: выполняется всегда, независимо от исключений
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('You can not divide by 0')
    finally:  # Всегда выполняется, даже если произошло исключение
        print('Execution finished')

divide(dividend=10, divisor=5)
```

Вывод:

```plaintext
2.0
Execution finished
```

```python
divide(dividend=10, divisor=0)
```

Вывод:

```plaintext
You can not divide by 0
Execution finished
```

## Пользовательские исключения

Пользовательские исключения инициализируются путем создания `class`, который наследуется от базового класса `Exception` Python, и вызываются с помощью ключевого слова `raise`:

```python
# Пользовательское исключение: создается путем наследования от класса Exception
class MyCustomException(Exception):
    pass

raise MyCustomException  # Вызов пользовательского исключения
```

Вывод:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

Чтобы объявить сообщение пользовательского исключения, вы можете передать его в качестве параметра:

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('A custom message for my custom exception')
```

Вывод:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: A custom message for my custom exception
```

Обработка пользовательского исключения такая же, как и любой другой:

```python
try:
    raise MyCustomException('A custom message for my custom exception')
except MyCustomException:
    print('My custom exception was raised')
```

Вывод:

```plaintext
My custom exception was raised
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/control-flow">Control Flow</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
