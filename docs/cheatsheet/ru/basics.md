---
title: 'Основы Python – Шпаргалка по Python'
description: 'Основы Python. Всем нужно с чего-то начинать, так почему бы не начать здесь.'
labUrl: 'https://labex.io/ru/labs/python-python-basics-633647?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Основы Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Всем нам нужно с чего-то начинать, так почему бы не начать здесь.

<base-disclaimer>
  <base-disclaimer-title>
    Из <a href="https://docs.python.org/3/tutorial/index.html">учебника Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python — это простой в изучении, мощный язык программирования [...] Элегантный синтаксис Python и динамическая типизация, наряду с его интерпретируемой природой, делают его идеальным языком для написания сценариев и быстрой разработки приложений.
  </base-disclaimer-content>
</base-disclaimer>

## Математические операторы

От **наивысшего** к **наинизшему** приоритету:

| Операторы | Операция              | Пример          |
| --------- | --------------------- | --------------- |
| \*\*      | Возведение в степень  | `2 ** 3 = 8`    |
| %         | Остаток от деления    | `22 % 8 = 6`    |
| //        | Целочисленное деление | `22 // 8 = 2`   |
| /         | Деление               | `22 / 8 = 2.75` |
| \*        | Умножение             | `3 * 3 = 9`     |
| -         | Вычитание             | `5 - 2 = 3`     |
| +         | Сложение              | `2 + 2 = 4`     |

Примеры выражений:

```python
# Умножение имеет более высокий приоритет, чем сложение
# Поэтому это вычисляется как: 2 + (3 * 6) = 2 + 18 = 20
2 + 3 * 6
```

```output
20
```

```python
# Скобки переопределяют приоритет операторов
# Это вычисляется как: 5 * 6 = 30
(2 + 3) * 6
```

```output
30
```

```python
2 ** 8
```

```output
256
```

```python
23 // 7
```

```output
3
```

```python
23 % 7
```

```output
2
```

```python
(5 - 1) * ((7 + 1) / (3 - 1))
```

```output
16.0
```

## Операторы присваивания с расширением

| Оператор    | Эквивалент       |
| ----------- | ---------------- |
| `var += 1`  | `var = var + 1`  |
| `var -= 1`  | `var = var - 1`  |
| `var *= 1`  | `var = var * 1`  |
| `var /= 1`  | `var = var / 1`  |
| `var //= 1` | `var = var // 1` |
| `var %= 1`  | `var = var % 1`  |
| `var **= 1` | `var = var ** 1` |

Примеры:

```python
# Присваивание с расширением: эквивалентно greeting = greeting + ' world!'
greeting = 'Hello'
greeting += ' world!'
greeting
```

```output
'Hello world!'
```

```python
# Увеличение числа на 1
number = 1
number += 1
number
```

```output
2
```

```python
# Повторение элементов списка: эквивалентно my_list = my_list * 3
my_list = ['item']
my_list *= 3
my_list
```

```output
['item', 'item', 'item']
```

## Оператор морж (Walrus Operator)

Оператор морж позволяет присваивать переменным значения внутри выражения, возвращая при этом значение переменной

Пример:

```python
# Оператор морж присваивает и возвращает значение в одном выражении
# my_var присваивается "Hello World!", а затем выводится
print(my_var:="Hello World!")
```

```output
Hello World!
```

```python
my_var="Yes"
print(my_var)
```

```output
Yes
```

```python
print(my_var:="Hello")
```

```output
Hello
```

Оператор _морж_, или **Оператор выражения присваивания**, был впервые представлен в 2018 году через [PEP 572](https://peps.python.org/pep-0572/), а затем официально выпущен с **Python 3.8** в октябре 2019 года.

<base-disclaimer>
  <base-disclaimer-title>
    Семантика синтаксиса и примеры
  </base-disclaimer-title>
  <base-disclaimer-content>
  [PEP 572](https://peps.python.org/pep-0572/) предоставляет синтаксис, семантику и примеры для оператора морж.
  </base-disclaimer-content>
</base-disclaimer>

## Типы данных

В Python есть девять основных встроенных типов данных, которые охватывают почти все, что вам понадобится:

| Тип данных                                                 | Примеры                                  | Описание                                       |
| ---------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Числа**                                                  |                                          |                                                |
| <router-link to='/builtin/int'>`int`</router-link>         | `-2, -1, 0, 1, 2, 3, 4, 5`               | Целые числа (интеджеры)                        |
| <router-link to='/builtin/float'>`float`</router-link>     | `-1.25, -1.0, -0.5, 0.0, 0.5, 1.0, 1.25` | Числа с десятичными точками                    |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j, complex(1, 4)`                    | Числа с действительной и мнимой частью         |
| **Текст**                                                  |                                          |                                                |
| <router-link to='/builtin/str'>`str`</router-link>         | `'a', 'Hello!', "Python"`                | Текст и символы                                |
| **Булевы**                                                 |                                          |                                                |
| <router-link to='/builtin/bool'>`bool`</router-link>       | `True, False`                            | Значения Истина или Ложь                       |
| **None**                                                   |                                          |                                                |
| `NoneType`                                                 | `None`                                   | Обозначает "отсутствие значения" или "ничего"  |
| **Коллекции**                                              |                                          |                                                |
| <router-link to='/builtin/list'>`list`</router-link>       | `[1, 2, 3], ['a', 'b', 'c']`             | Упорядоченные, изменяемые коллекции            |
| <router-link to='/builtin/dict'>`dict`</router-link>       | `{'name': 'Alice', 'age': 30}`           | Пары ключ-значение                             |
| <router-link to='/builtin/tuple'>`tuple`</router-link>     | `(1, 2, 3), ('a', 'b')`                  | Упорядоченные, неизменяемые коллекции          |
| <router-link to='/builtin/set'>`set`</router-link>         | `{1, 2, 3}, {'a', 'b', 'c'}`             | Неупорядоченные коллекции уникальных элементов |

### Быстрые примеры

```python
# Числа
age = 25                    # int
price = 19.99              # float
coordinate = 2 + 3j        # complex

# Текст
name = "Alice"             # str

# Булевы
is_student = True          # bool

# None
result = None              # NoneType

# Коллекции
scores = [85, 92, 78]      # list
person = {'name': 'Bob', 'age': 30}  # dict
coordinates = (10, 20)     # tuple
unique_ids = {1, 2, 3}     # set
```

Для получения исчерпывающего руководства с визуальными примерами и подробными объяснениями о том, когда использовать каждый тип, см.: <router-link to="/blog/python-data-types">Типы данных Python: Визуальное руководство для начинающих</router-link>.

## Конкатенация и повторение

Конкатенация строк:

```python
# Конкатенация строк: смежные строки автоматически объединяются
'Alice' 'Bob'
```

```output
'AliceBob'
```

Повторение строк:

```python
# Повторение строк: повторить строку несколько раз
'Alice' * 5
```

```output
'AliceAliceAliceAliceAlice'
```

## Переменные

Вы можете назвать переменную как угодно, при условии, что она соответствует следующим правилам:

1. Она может состоять только из одного слова.

```python
# плохо
my variable = 'Hello'

# хорошо
var = 'Hello'
```

2. Она может содержать только буквы, цифры и символ подчеркивания (`_`).

```python
# плохо
%$@variable = 'Hello'

# хорошо
my_var = 'Hello'

# хорошо
my_var_2 = 'Hello'
```

3. Она не может начинаться с цифры.

```python
# это не сработает
23_var = 'hello'
```

4. Имя переменной, начинающееся с подчеркивания (`_`), считается "неиспользуемым".

```python
# _spam не следует использовать повторно в коде
_spam = 'Hello'
```

## Комментарии

Встроенный комментарий:

```python
# Это комментарий
```

Многострочный комментарий:

```python
# Это
# многострочный комментарий
```

Код с комментарием:

```python
a = 1  # инициализация
```

Обратите внимание на два пробела перед комментарием.

Строка документации функции (docstring):

```python
def foo():
    """
    Это строка документации функции
    Вы также можете использовать:
    ''' Строка документации функции '''
    """
```

## Функция print()

Функция `print()` выводит значение переданных ей аргументов. [...] она обрабатывает несколько аргументов, величины с плавающей запятой и строки. Строки печатаются без кавычек, и между элементами вставляется пробел, так что вы можете красиво форматировать вывод:

```python
print('Hello world!')
```

```output
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

```output
Hello world! 1
```

### Ключевое слово end

Ключевой аргумент `end` можно использовать, чтобы избежать перевода строки после вывода, или чтобы завершить вывод другой строкой:

```python
# Используйте параметр end, чтобы изменить то, что идет после каждого оператора print
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')  # Используем '-' вместо перевода строки
```

```output
printed-with-a-dash-in-between-
```

### Ключевое слово sep

Ключевое слово `sep` определяет, как разделять объекты, если их несколько:

```python
# Используйте параметр sep, чтобы указать разделитель между несколькими аргументами
print('cats', 'dogs', 'mice', sep=',')  # Вывод с разделителем-запятой
```

```output
cats,dogs,mice
```

## Функция input()

Эта функция принимает ввод от пользователя и преобразует его в строку:

```python
# input() считывает ввод пользователя и возвращает его в виде строки
print('What is your name?')   # запрашиваем имя
my_name = input()  # Ожидаем, пока пользователь введет текст и нажмет Enter
print('Hi, {}'.format(my_name))
```

```output
What is your name?
Martha
Hi, Martha
```

`input()` также может отображать сообщение-подсказку без использования `print()`:

```python
my_name = input('What is your name? ')  # подсказка и считывание в одном вызове
print('Hi, {}'.format(my_name))
```

```output
What is your name? Martha
Hi, Martha
```

Также можно использовать форматированные строки, чтобы избежать использования .format:

```python
# input() может отображать подсказку напрямую
my_name = input('What is your name? ')  # Подсказка и считывание в одном вызове
print(f'Hi, {my_name}')  # f-строка для форматирования строк
```

```output
What is your name? Martha
Hi, Martha
```

## Функция len()

Возвращает целое значение, равное количеству символов в строке, списке, словаре и т. д.:

```python
# len() возвращает количество символов в строке
len('hello')  # Возвращает 5
```

```output
5
```

```python
# len() возвращает количество элементов в списке
len(['cat', 3, 'dog'])  # Возвращает 3 (три элемента)
```

```output
3
```

<base-warning>
  <base-warning-title>Проверка на пустоту</base-warning-title>
  <base-warning-content>
    Для проверки на пустоту строк, списков, словарей и т. д. не следует использовать
    <code>len</code>, а предпочесть прямую булеву оценку.
  </base-warning-content>
</base-warning>

Пример проверки на пустоту:

```python
a = [1, 2, 3]

# плохо: ненужная проверка len()
if len(a) > 0:  # оценивается как True
    print("the list is not empty!")
```

```output
the list is not empty!
```

```python
# хорошо: прямая булева оценка (Pythonic способ)
if a:  # оценивается как True, если список не пуст
    print("the list is not empty!")
```

```output
the list is not empty!
```

## Функции str(), int() и float()

Эти функции позволяют изменять тип переменной. Например, вы можете преобразовать `integer` или `float` в `string`:

```python
# Преобразование целого числа в строку
str(29)  # Возвращает '29'
```

```output
'29'
```

```python
str(-3.14)
```

```output
'-3.14'
```

Или из `string` в `integer` или `float`:

```python
# Преобразование строки в целое число
int('11')  # Возвращает 11
```

```output
11
```

```python
# Преобразование строки в число с плавающей запятой
float('3.14')  # Возвращает 3.14
```

```output
3.14
```

## Связанные ссылки

- <router-link to="/blog/python-data-types">Типы данных Python: Визуальное руководство для начинающих</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Пошаговое руководство по генераторам Python</router-link>
- <router-link to="/cheatsheet/control-flow">Управление потоком</router-link>
- <router-link to="/cheatsheet/functions">Функции</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Списки и кортежи</router-link>
- <router-link to="/cheatsheet/dictionaries">Словари</router-link>
- <router-link to="/cheatsheet/sets">Множества</router-link>
- <router-link to="/cheatsheet/string-formatting">Форматирование строк</router-link>
