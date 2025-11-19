---
title: 'Встроенная функция Python exec() - Шпаргалка по Python'
description: 'Эта функция поддерживает динамическое выполнение кода Python. Объект должен быть строкой или кодовым объектом. Если это строка, она анализируется как набор операторов Python, которые затем выполняются (если не возникает синтаксической ошибки) [...].'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python exec()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Эта функция поддерживает динамическое выполнение кода Python. object должен быть либо строкой, либо объектным кодом. Если это строка, строка анализируется как набор операторов Python, который затем выполняется (если не возникает синтаксической ошибки) [...].
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `exec()` в Python — это встроенная функция, которая позволяет динамически выполнять код Python, хранящийся в строке. Это может быть очень полезно в сценариях, когда вы хотите выполнить код, предоставленный пользователями, сгенерировать и запустить код во время выполнения, или даже создать мини-интерпретаторы или среды сценариев внутри вашего приложения. Однако ее следует использовать с осторожностью, поскольку при неправильной обработке она может представлять угрозу безопасности.

## Синтаксис

```python
exec(object[, globals[, locals]])
```

- `object`: Строка, содержащая код Python для выполнения.
- `globals` (необязательно): Словарь, представляющий глобальное пространство имен. Если не предоставлено, используется текущее глобальное пространство имен.
- `locals` (необязательно): Словарь, представляющий локальное пространство имен. Если не предоставлено, используется текущее локальное пространство имен.

## Базовое использование

```python
code_to_execute = "print('Hello, exec()!')"
exec(code_to_execute)
```

```output
Hello, exec()!
```

Функция `exec()` также может использоваться с функцией <router-link to="/builtin/print">print()</router-link> для отображения вывода в консоли.

## Выполнение нескольких операторов

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

```output
0
1
2
3
4
```

В этом примере функция `exec()` используется для выполнения цикла `for`, который перебирает <router-link to="/builtin/range">диапазон</router-link> чисел и <router-link to="/builtin/print">выводит</router-link> каждое число в консоль.

## Изменение переменных

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

```output
15
```

## Использование `globals` и `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

```output
5
{'x': 10}
{'x': 40}
```

## Динамическое создание функций

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

```output
10
```

В этом примере функция `exec()` используется для создания динамической функции, которая принимает список аргументов и возвращает их <router-link to="/builtin/sum">сумму</router-link>.

## Обработка ошибок

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

```output
Error: name 'undefined_variable' is not defined
```

## Примечание по безопасности

```python
user_input = input("Enter code to execute: ")
exec(user_input)  # Caution: This can be a security risk if not properly sanitized.
```

## Связанные ссылки

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">Обработка исключений</router-link>
- <router-link :to="'/cheatsheet/debugging'">Отладка</router-link>
