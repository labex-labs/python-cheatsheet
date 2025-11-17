---
title: 'Декораторы Python - Шпаргалка по Python'
description: 'Декоратор Python — это синтаксис, обеспечивающий краткий и многократно используемый способ расширения функциональности функции или класса.'
labUrl: 'https://labex.io/ru/labs/python-python-decorators-633654?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Декораторы Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Декоратор Python предоставляет краткий и многократно используемый способ расширения
функции или класса. Прочтите сопутствующую статью <router-link to="/blog/python-decorators-for-beginners">Декораторы Python: Простые шаблоны для улучшения вашего кода</router-link> для практических примеров и шаблонов.

## Декоратор в чистом виде

Декоратор в простейшей форме — это функция, которая принимает другую
функцию в качестве аргумента и возвращает обертку (wrapper). Следующий пример
показывает создание декоратора и его использование.

```python
# Декоратор: функция, которая принимает другую функцию и возвращает обертку
def your_decorator(func):
  def wrapper():
    # Сделать что-то до вызова func...
    print("Before func!")
    func()  # Вызов исходной функции
    # Сделать что-то после вызова func...
    print("After func!")
  return wrapper  # Возврат функции-обертки

# @your_decorator — это синтаксический сахар для: foo = your_decorator(foo)
@your_decorator
def foo():
  print("Hello World!")

foo()  # Вызывает wrapper, который вызывает foo с дополнительным поведением
```

Вывод:

```plaintext
Before func!
Hello World!
After func!
```

## Декоратор для функции с параметрами

```python
# Декоратор, который работает с функциями, имеющими параметры
def your_decorator(func):
  def wrapper(*args,**kwargs):  # Принимает любые аргументы
    # Сделать что-то до вызова func...
    print("Before func!")
    func(*args,**kwargs)  # Передача аргументов исходной функции
    # Сделать что-то после вызова func...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # Аргументы передаются через wrapper
```

Вывод:

```plaintext
Before func!
My name is Jack
After func!
```

## Шаблон для базового декоратора

Этот шаблон полезен для большинства случаев использования декораторов. Он применим к функциям
как с параметрами, так и без них, а также с возвращаемым значением или без него.

```python
import functools

# Шаблон декоратора наилучшей практики: сохраняет метаданные функции и возвращаемое значение
def your_decorator(func):
  @functools.wraps(func)  # Сохраняет имя функции, docstring и т. д.
  def wrapper(*args,**kwargs):
    # Сделать что-то до вызова func...
    result = func(*args,**kwargs)  # Вызов функции и сохранение возвращаемого значения
    # Сделать что-то после вызова func..
    return result  # Возврат возвращаемого значения исходной функции
  return wrapper
```

## Декоратор с параметрами

Вы также можете определить параметры для использования декоратором.

```python
import functools

# Фабрика декораторов: возвращает декоратор на основе параметров
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # Сохранить метаданные функции
    def wrapper(*args,**kwargs):
      # Сделать что-то до вызова func, возможно, используя arg...
      result = func(*args,**kwargs)
      # Сделать что-то после вызова func, возможно, используя arg...
      return result
    return wrapper
  return decorator  # Возврат фактической функции-декоратора
```

Для использования этого декоратора:

```python
# Использование декоратора с параметрами: @your_decorator(arg='x') вызывает your_decorator('x')
# который возвращает декоратор, который затем применяется к foo
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## Декораторы на основе классов

Чтобы декорировать метод класса, вы должны определить декоратор внутри класса. Когда
методу передается только неявный аргумент `self` без каких-либо явных
дополнительных аргументов, вы должны создать отдельный декоратор только для тех методов,
у которых нет дополнительных аргументов. Пример этого показан ниже, когда вы хотите
перехватить и вывести исключения определенным образом.

```python
# Декоратор метода класса: определяется внутри класса
class DecorateMyMethod:

  # Декоратор статического метода для методов, имеющих только параметр 'self'
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # Принимает только self
      try:
        return method(self)  # Вызов исходного метода
      except Exception as e:
        print("\nWARNING: Please make note of the following:\n")
        print(e)
    return wrapper_for_class_method

  def __init__(self,succeed:bool):
    self.succeed = succeed

  @decorator_for_class_method_with_no_args
  def class_action(self):
    if self.succeed:
      print("You succeeded by choice.")
    else:
      raise Exception("Epic fail of your own creation.")

test_succeed = DecorateMyMethod(True)
test_succeed.class_action()
```

Вывод:

```plaintext
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

Вывод:

```plaintext
Exception: Epic fail of your own creation.
```

Декоратор также может быть определен как класс, а не как метод. Это полезно для поддержания и обновления состояния, как в следующем примере, где мы подсчитываем количество вызовов метода:

```python
# Декоратор на основе класса: поддерживает состояние между вызовами
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # Сохранить декорируемую функцию
    self.call_number = 0  # Инициализировать счетчик вызовов

  def __call__(self, *args, **kwargs):  # Делает экземпляр вызываемым
    self.call_number += 1  # Увеличить счетчик
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # Вызвать исходную функцию

@CountCallNumber  # Создает экземпляр CountCallNumber
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # Вызывает CountCallNumber.__call__()
```

Вывод:

```plaintext
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

Вывод:

```plaintext
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    Пример подсчета
  </base-disclaimer-title>
  <base-disclaimer-content>
  Этот пример подсчета вдохновлен <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">видеоуроком Патрика Лобера на YouTube</a>.
  </base-disclaimer-content>
</base-disclaimer>

## Связанные ссылки

- <router-link to="/blog/python-decorators-for-beginners">Декораторы Python: Простые шаблоны для улучшения вашего кода</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args и \*\*kwargs: Простое объяснение</router-link>
- <router-link to="/cheatsheet/functions">Функции</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args и Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
