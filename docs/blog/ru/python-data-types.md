---
title: 'Типы данных Python: Визуальное руководство для начинающих'
description: 'Полный обзор встроенных типов данных Python, их характеристик и сценариев использования.'
date: 'Jul 20, 2025'
updated: 'Jul 20, 2025'
tags: 'python, beginner, data types'
socialImage: '/blog/python-data-types.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Типы данных Python: Визуальное руководство для начинающих"
    description: "Полный обзор встроенных типов данных Python, их характеристик и сценариев использования."
    date: "Jul 20, 2025"
    updated: "Jul 20, 2025"
    tags: "python, beginner, data types"
    socialImage: "/blog/python-data-types.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Типы данных Python: Визуальное руководство для начинающих" />

Python поставляется с девятью основными типами данных, которые охватывают почти все, что вам может понадобиться. Выбор правильного типа делает ваш код более понятным, быстрым и безопасным. Это руководство показывает, как работает каждый тип, когда его использовать и чего следует остерегаться. Для быстрого обзора также ознакомьтесь с нашим <router-link to="/cheatsheet/basics#data-types">руководством по основам</router-link>.

Диаграмма категорий встроенных типов данных Python и их изменяемости.

## 1. Числа – `int`, `float`, `complex`

В Python есть три типа для работы с числами, каждый из которых предназначен для разных ситуаций.

### Сначала базовые примеры

```python
# Целые числа (Integers) - целые числа
age = 25
score = 100
negative = -10

# Числа с плавающей точкой (Floats) - числа с десятичными знаками
price = 19.99
temperature = 98.6
pi = 3.14159

# Комплексные числа (Complex) - числа с действительной и мнимой частями (расширенная математика)
z = 2 + 3j  # j представляет мнимую единицу в Python
```

| Тип                                                        | Типичный литерал       | Ключевые особенности                                                                                                                                                    | Когда использовать                                    | Полезные методы/операции                            |
| :--------------------------------------------------------- | :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- | :-------------------------------------------------- |
| <router-link to='/builtin/int'>`int`</router-link>         | `42`, `0xFF`           | Целые числа, которые могут быть сколь угодно большими в пределах вашей памяти; поддерживает литералы в двоичном `0b`, восьмеричном `0o`, шестнадцатеричном `0x` формате | Подсчет, индексация, хранение целых количеств         | `bit_length()`, `to_bytes()`                        |
| <router-link to='/builtin/float'>`float`</router-link>     | `3.14`, `1.2e3`        | Числа с десятичной точкой; могут иметь небольшие ошибки округления при вычислениях                                                                                      | Измерения, средние значения, научные вычисления       | `.is_integer()`, `.hex()`, модуль math              |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j`, `complex(a,b)` | Числа с действительной и мнимой частями (используются в расширенной математике); `.real`, `.imag`, `.conjugate()`                                                       | Расширенная математика, инженерия, обработка сигналов | Все арифметические операции, `abs()` дает магнитуду |

### Больше примеров

```python
# Работа с целыми числами
items = 5
total_items = items * 3  # 15

# Работа с числами с плавающей точкой
radius = 2.5
area = 3.14159 * radius * radius  # 19.634...

# Осторожно с точностью float
result = 0.1 + 0.2  # 0.30000000000000004 (не совсем 0.3!)

# Комплексные числа (вероятно, вам не понадобятся в качестве новичка)
z = complex(2, 3)     # То же, что и 2+3j
magnitude = abs(z)    # 3.605...
```

## 2. Строки – `str`

Строки хранят текст и являются одним из самых важных типов, которые вы будете использовать. Для получения более подробной информации об операциях со строками см. наше <router-link to="/cheatsheet/manipulating-strings">руководство по манипулированию строками</router-link>.

### Базовые примеры

```python
# Создание строк
name = "Alice"
message = 'Hello world'
long_text = """Это многострочная
строка"""

# Базовые операции
greeting = "Hello, " + name  # "Hello, Alice"
repeated = "Ha" * 3          # "HaHaHa"
length = len(message)        # 11
```

**Ключевые характеристики:**

- Неизменяемые (Immutable): после создания их нельзя изменить (но можно создать новые)
- Используйте одинарные `'` или двойные `"` кавычки
- Тройные кавычки `"""` для многострочного текста
- Поддержка Unicode (эмодзи, международные символы)

### Распространенные операции со строками

```python
text = "  Python Programming  "

# Полезные методы
clean_text = text.strip()           # "Python Programming"
words = clean_text.split()          # ["Python", "Programming"]
joined = "-".join(words)            # "Python-Programming"
upper_text = clean_text.upper()     # "PYTHON PROGRAMMING"
replaced = clean_text.replace("Python", "Java")  # "Java Programming"

# Проверка содержимого
starts_with_p = clean_text.startswith("Python")  # True
has_gram = "gram" in clean_text                   # True

# Современное форматирование (рекомендуется)
age = 25
formatted = f"I am {age} years old"  # "I am 25 years old"
```

## 3. Булевы значения – `bool`

Булевы значения представляют `True` или `False` — это важно для принятия решений в вашем коде. Узнайте больше о <router-link to="/builtin/bool">функции bool()</router-link>.

### Базовые примеры

```python
# Простые булевы значения
is_student = True
is_graduated = False

# Булевы операции
has_degree = is_student or is_graduated  # True
ready_to_work = is_graduated and not is_student  # False
```

**Истинность (Truthiness)**: Python рассматривает многие значения как `True` или `False` в условных выражениях:

```python
# Эти значения "истинны" (ведут себя как True)
if "hello":     # непустые строки
if [1, 2, 3]:   # непустые списки
if 42:          # ненулевые числа

# Эти значения "ложны" (ведут себя как False)
if "":          # пустая строка
if []:          # пустой список
if 0:           # ноль
if None:        # значение None
```

### Практические примеры

```python
items = []
if items:
    print("We have items!")
else:
    print("No items found")  # Будет напечатано

score = 85
passed = score >= 60  # True
```

## 4. Тип None – `NoneType`

`None` представляет "ничего" или "отсутствие значения" — вы увидите его повсюду в Python.

### Базовые примеры

```python
# Переменные, у которых пока нет значения
result = None
user_input = None

# Функции по умолчанию возвращают None
def greet(name):
    print(f"Hello, {name}")

return_value = greet("Alice")  # return_value равен None

# Проверка на None
if result is None:
    print("No result yet")

# Распространенный шаблон: необязательные значения
def find_user(username):
    # ... логика поиска ...
    if user_found:
        return user_data
    else:
        return None  # Ничего не найдено
```

**Важно**: Всегда используйте `is` и `is not` при сравнении с None, а не `==`:

```python
# Правильно
if value is None:
    # сделать что-то

# Неправильно (но работает)
if value == None:
    # сделать что-то
```

## 5. Списки – `list`

Списки хранят несколько элементов в порядке и позволяют изменять их после создания. Для получения исчерпывающей информации об операциях со списками см. наше <router-link to="/cheatsheet/lists-and-tuples">руководство по спискам и кортежам</router-link>.

### Базовые примеры

```python
# Создание списков
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, None]  # Списки могут содержать разные типы
empty = []

# Доступ к элементам (начинается с индекса 0)
first_fruit = fruits[0]      # "apple"
last_fruit = fruits[-1]      # "orange"
```

### Общие операции

```python
shopping_list = ["milk", "bread"]

# Добавление элементов
shopping_list.append("eggs")         # ["milk", "bread", "eggs"]
shopping_list.insert(0, "butter")    # ["butter", "milk", "bread", "eggs"]
shopping_list.extend(["cheese", "ham"])  # Добавить несколько элементов

# Удаление элементов
shopping_list.remove("milk")         # Удалить первое вхождение
last_item = shopping_list.pop()      # Удалить и вернуть последний элемент
first_item = shopping_list.pop(0)    # Удалить и вернуть первый элемент

# Полезные операции
length = len(shopping_list)
has_bread = "bread" in shopping_list
```

### Когда использовать списки

- Когда вам нужны упорядоченные данные, которые могут меняться
- Создание коллекций по одному элементу
- Когда вам нужно обращаться к элементам по позиции

```python
# Хорошие примеры использования
grades = [85, 92, 78, 96]
todo_items = ["wash dishes", "walk dog", "study Python"]

# Обработка списков
total = sum(grades)
average = total / len(grades)

for item in todo_items:
    print(f"Task: {item}")
```

## 6. Словари – `dict`

Словари хранят данные в виде пар ключ-значение, как настоящий словарь, где вы ищете слова (ключи), чтобы найти определения (значения). Для получения исчерпывающей информации об операциях со словарями см. наше <router-link to="/cheatsheet/dictionaries">руководство по словарям</router-link>.

### Базовые примеры

```python
# Создание словарей
person = {"name": "Alice", "age": 30, "city": "New York"}
grades = {"math": 85, "english": 92, "science": 78}
empty = {}

# Доступ к значениям
name = person["name"]        # "Alice"
age = person.get("age")      # 30 (более безопасный способ)
height = person.get("height", "unknown")  # "unknown", если ключ отсутствует
```

### Общие операции

```python
student = {"name": "Bob", "grade": 85}

# Добавление/обновление значений
student["age"] = 20           # Добавить новую пару ключ-значение
student["grade"] = 90         # Обновить существующее значение

# Полезные методы
keys = student.keys()         # dict_keys(['name', 'grade', 'age'])
values = student.values()     # dict_values(['Bob', 90, 20])
items = student.items()       # dict_items([('name', 'Bob'), ...])

# Проверка наличия ключей
if "name" in student:
    print(f"Student name: {student['name']}")

# Удаление элементов
age = student.pop("age")      # Удалить и вернуть значение
student.pop("height", None)   # Безопасное удаление (без ошибки, если ключ отсутствует)
```

### Когда использовать словари

- Когда вам нужно искать значения по уникальному идентификатору
- Хранение структурированных данных (например, записей)
- Подсчет чего-либо
- Кэширование/мемоизация

```python
# Хорошие примеры использования
inventory = {"apples": 50, "bananas": 30, "oranges": 25}
user_profile = {
    "username": "alice123",
    "email": "alice@example.com",
    "is_premium": True
}

# Пример подсчета
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
# Результат: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```

## 7. Кортежи – `tuple`

Кортежи похожи на списки, но их нельзя изменить после создания. Считайте их "заблокированными" списками. Узнайте больше о кортежах в нашем <router-link to="/cheatsheet/lists-and-tuples">руководстве по спискам и кортежам</router-link>.

### Базовые примеры

```python
# Создание кортежей
coordinates = (10, 20)
rgb_color = (255, 0, 128)
single_item = (42,)    # Обратите внимание на запятую для кортежей из одного элемента
empty = ()

# Скобки часто необязательны
point = 5, 10          # То же, что и (5, 10)
name_age = "Alice", 25 # То же, что и ("Alice", 25)

# Доступ к элементам (как и в списках)
x = coordinates[0]     # 10
y = coordinates[1]     # 20
```

### Распаковка кортежей

```python
# Распаковка очень полезна
point = (100, 200)
x, y = point          # x=100, y=200

# Обмен значениями
a = 5
b = 10
a, b = b, a           # Теперь a=10, b=5

# Функция, возвращающая несколько значений
def get_name_age():
    return "Bob", 25

name, age = get_name_age()
```

### Когда использовать кортежи

- Когда у вас есть фиксированная коллекция, которая не будет меняться
- Возврат нескольких значений из функций
- В качестве ключей словаря (поскольку они неизменяемы)
- Представление координат, значений RGB и т. д.

```python
# Хорошие примеры использования
WINDOW_SIZE = (800, 600)        # Константы
DEFAULT_COLOR = (255, 255, 255) # RGB белый

# Словарь с ключами-кортежами
locations = {
    (0, 0): "origin",
    (1, 1): "northeast",
    (-1, -1): "southwest"
}
```

## 8. Множества – `set`

Множества хранят уникальные элементы без дубликатов и без определенного порядка. Отлично подходят для проверки членства и удаления дубликатов. Для получения исчерпывающей информации об операциях с множествами см. наше <router-link to="/cheatsheet/sets">руководство по множествам</router-link>.

### Базовые примеры

```python
# Создание множеств
colors = {"red", "green", "blue"}
numbers = {1, 2, 3, 4, 5}
empty = set()  # Обратите внимание: {} создает пустой словарь, а не множество!

# Из списка (удаляет дубликаты)
mixed_list = [1, 2, 2, 3, 3, 3]
unique_numbers = set(mixed_list)  # {1, 2, 3}
```

### Общие операции

```python
tags = {"python", "programming", "beginner"}

# Добавление элементов
tags.add("tutorial")
tags.update(["coding", "learning"])  # Добавить несколько элементов

# Удаление элементов
tags.remove("beginner")     # Ошибка, если элемент не существует
tags.discard("advanced")    # Нет ошибки, если элемент не существует

# Проверка членства (очень быстро!)
if "python" in tags:
    print("This is about Python!")

# Операции с множествами
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2         # {1, 2, 3, 4, 5}
intersection = set1 & set2   # {3}
difference = set1 - set2     # {1, 2}
```

### Когда использовать множества

- Удаление дубликатов из коллекции
- Быстрая проверка членства
- Математические операции с множествами
- Отслеживание уникальных посетителей, идентификаторов и т. д.

```python
# Хорошие примеры использования
unique_visitors = set()
unique_visitors.add("user123")
unique_visitors.add("user456")
unique_visitors.add("user123")  # Дубликат не добавится
print(len(unique_visitors))     # 2

# Удаление дубликатов из списка
items = ["apple", "banana", "apple", "orange", "banana"]
unique_items = list(set(items))  # ['apple', 'banana', 'orange']
```

## Выбор правильного типа – советы из реальной жизни

| Сценарий                                    | Лучший тип                                                    | Обоснование                                   |
| :------------------------------------------ | :------------------------------------------------------------ | :-------------------------------------------- |
| Хранение возраста пользователя              | <router-link to='/builtin/int'>`int`</router-link>            | Целые числа, десятичные знаки не нужны        |
| Цена продукта                               | <router-link to='/builtin/float'>`float`</router-link>        | Нужны десятичные знаки                        |
| Статус входа пользователя                   | <router-link to='/builtin/bool'>`bool`</router-link>          | Простое значение true/false                   |
| Отчество пользователя (может отсутствовать) | <router-link to='/builtin/str'>`str`</router-link> или `None` | Может отсутствовать                           |
| Товары в корзине                            | <router-link to='/builtin/list'>`list`</router-link>          | Упорядочены, можно добавлять/удалять элементы |
| Данные профиля пользователя                 | <router-link to='/builtin/dict'>`dict`</router-link>          | Пары ключ-значение (имя, email и т. д.)       |
| GPS-координаты                              | <router-link to='/builtin/tuple'>`tuple`</router-link>        | Фиксированная пара, которая не изменится      |
| Уникальные категории продуктов              | <router-link to='/builtin/set'>`set`</router-link>            | Нет дубликатов, быстрый поиск                 |

## Шпаргалка по изменяемости и хешируемости

| Тип                                                                                                                                                                    | Изменяемый? | Хешируемый? | Может быть ключом dict? |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :---------- | :---------------------- |
| <router-link to='/builtin/int'>`int`</router-link>, <router-link to='/builtin/float'>`float`</router-link>, <router-link to='/builtin/complex'>`complex`</router-link> | Нет         | Да          | ✔                      |
| <router-link to='/builtin/str'>`str`</router-link>                                                                                                                     | Нет         | Да          | ✔                      |
| <router-link to='/builtin/bool'>`bool`</router-link>                                                                                                                   | Нет         | Да          | ✔                      |
| `None`                                                                                                                                                                 | Нет         | Да          | ✔                      |
| <router-link to='/builtin/tuple'>`tuple`</router-link> (с неизменяемыми элементами)                                                                                    | Нет         | Да          | ✔                      |
| <router-link to='/builtin/list'>`list`</router-link>                                                                                                                   | Да          | Нет         | ✘                       |
| <router-link to='/builtin/dict'>`dict`</router-link>                                                                                                                   | Да          | Нет         | ✘                       |
| <router-link to='/builtin/set'>`set`</router-link>                                                                                                                     | Да          | Нет         | ✘                       |

## Ключевые выводы для начинающих

1. **Начните с простого**: Используйте `int` для целых чисел, `float` для десятичных, `str` для текста, `bool` для true/false и `None` для "отсутствия значения".

2. **Коллекции просты**: Используйте `list`, когда вам нужно что-то менять, `tuple`, когда не нужно, `dict` для пар ключ-значение и `set` для уникальных элементов.

3. **Если сомневаетесь**: `list` и `dict` покрывают большинство потребностей в коллекциях для начинающих.

4. **Практикуйтесь на простых примерах**, прежде чем переходить к сложным сценариям использования.

5. **Помните**: Python снисходителен — вы всегда можете преобразовать совместимые типы данных при необходимости.
