---
title: 'Списки и Кортежи Python - Шпаргалка по Python'
description: 'В Python списки — это один из 4 типов данных, используемых для хранения коллекций.'
labUrl: 'https://labex.io/ru/labs/python-python-lists-and-tuples-633660?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Списки Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Списки — это один из 4 типов данных в Python, используемый для хранения коллекций данных.

```python
# List: упорядоченная коллекция элементов, заключенных в квадратные скобки
['John', 'Peter', 'Debora', 'Charles']
```

## Получение значений по индексам

```python
# Доступ к элементам списка с использованием индекса (начиная с 0, первый элемент имеет индекс 0)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0]  # Возвращает первый элемент: 'table'
```

Output:

```plaintext
'table'
```

```python
furniture[1]
```

Output:

```plaintext
'chair'
```

```python
furniture[2]
```

Output:

```plaintext
'rack'
```

```python
furniture[3]
```

Output:

```plaintext
'shelf'
```

## Отрицательные индексы

```python
# Отрицательный индекс: доступ к элементам с конца списка
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # Возвращает последний элемент: 'shelf'
```

Output:

```plaintext
'shelf'
```

```python
furniture[-3]
```

Output:

```plaintext
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

Output:

```plaintext
'The shelf is bigger than the chair'
```

## Получение подсписков с помощью срезов (Slices)

```python
# Slicing: получение подсписка с использованием синтаксиса [start:end] (end не включается)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # Возвращает элементы с индекса 0 по 3 (4 не включается)
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

Output:

```plaintext
['chair', 'rack']
```

```python
furniture[0:-1]
```

Output:

```plaintext
['table', 'chair', 'rack']
```

```python
# Срез от начала: пропустить начальный индекс (по умолчанию 0)
furniture[:2]  # Возвращает первые два элемента
```

Output:

```plaintext
['table', 'chair']
```

```python
# Срез до конца: пропустить конечный индекс (по умолчанию до конца списка)
furniture[1:]  # Возвращает все элементы с индекса 1 до конца
```

Output:

```plaintext
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

Срез всего списка создаст копию:

```python
# Срез создает копию: [:] создает поверхностную копию списка
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # Создать копию, а не ссылку
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

## Получение длины списка с помощью len()

```python
# len() возвращает количество элементов в списке
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # Возвращает 4
```

Output:

```plaintext
4
```

## Изменение значений по индексам

```python
# Изменение элементов списка путем присвоения новых значений индексам
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # Заменить первый элемент
furniture
```

Output:

```plaintext
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'bed']
```

## Конкатенация и Повторение

```python
# Конкатенация списков: объединение двух списков с помощью оператора +
[1, 2, 3] + ['A', 'B', 'C']  # Возвращает [1, 2, 3, 'A', 'B', 'C']
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

```python
# Повторение списка: повторение списка несколько раз с помощью оператора *
['X', 'Y', 'Z'] * 3  # Возвращает ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

Output:

```plaintext
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

## Использование циклов for со списками

```python
# Итерация по элементам списка с помощью цикла for
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # Цикл по каждому элементу
    print(item)
```

Output:

```plaintext
table
chair
rack
shelf
```

## Получение индекса в цикле с помощью enumerate()

```python
# enumerate() возвращает и индекс, и значение в цикле
furniture = ['table', 'chair', 'rack', 'shelf']

for index, item in enumerate(furniture):  # Получить индекс и элемент вместе
    print(f'index: {index} - item: {item}')
```

Output:

```plaintext
index: 0 - item: table
index: 1 - item: chair
index: 2 - item: rack
index: 3 - item: shelf
```

## Цикл по нескольким спискам с помощью zip()

```python
# zip() объединяет несколько списков по элементам в цикле
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):  # Сопоставить элементы из обоих списков
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Операторы in и not in

```python
# Оператор in: проверка наличия элемента в списке
'rack' in ['table', 'chair', 'rack', 'shelf']  # Возвращает True
```

Output:

```plaintext
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

Output:

```plaintext
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

Output:

```plaintext
True
```

```python
'rack' not in furniture
```

Output:

```plaintext
False
```

## Трюк с множественным присваиванием (Multiple Assignment Trick)

Трюк с множественным присваиванием — это сокращение, которое позволяет присвоить несколько переменных значениям из списка в одной строке кода. Вместо того чтобы делать так:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table = furniture[0]
chair = furniture[1]
rack = furniture[2]
shelf = furniture[3]
```

Вы можете написать эту строку кода:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table, chair, rack, shelf = furniture

table
```

Output:

```plaintext
'table'
```

```python
chair
```

Output:

```plaintext
'chair'
```

```python
rack
```

Output:

```plaintext
'rack'
```

```python
shelf
```

Output:

```plaintext
'shelf'
```

Трюк с множественным присваиванием также можно использовать для обмена значениями двух переменных:

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

Output:

```plaintext
chair
```

```python
print(b)
```

Output:

```plaintext
table
```

## Метод index

Метод `index` позволяет найти индекс значения, передав его имя:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

Output:

```plaintext
1
```

## Добавление значений

### append()

`append` добавляет элемент в конец `list`:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.append('bed')
furniture
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert` добавляет элемент в `list` по указанной позиции:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

Output:

```plaintext
['table', 'bed', 'chair', 'rack', 'shelf']
```

## Удаление значений

### del()

`del` удаляет элемент по индексу:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair']
```

### remove()

`remove` удаляет элемент по его фактическому значению:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

Output:

```plaintext
['table', 'rack', 'shelf']
```

<base-warning>
  <base-warning-title>
    Удаление повторяющихся элементов
  </base-warning-title>
  <base-warning-content>
    Если значение встречается в списке несколько раз, будет удален только первый экземпляр этого значения.
  </base-warning-content>
</base-warning>

### pop()

По умолчанию `pop` удаляет и возвращает последний элемент списка. Вы также можете передать индекс элемента в качестве необязательного параметра:

```python
animals = ['cat', 'bat', 'rat', 'elephant']

animals.pop()
```

Output:

```plaintext
'elephant'
```

```python
animals
```

Output:

```plaintext
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

Output:

```plaintext
'cat'
```

```python
animals
```

Output:

```plaintext
['bat', 'rat']
```

## Сортировка значений с помощью sort()

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

Output:

```plaintext
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

Вы также можете передать `True` для именованного аргумента `reverse`, чтобы `sort()` отсортировал значения в обратном порядке:

```python
furniture.sort(reverse=True)
furniture
```

Output:

```plaintext
['table', 'shelf', 'rack', 'chair']
```

Если вам нужно отсортировать значения в обычном алфавитном порядке, передайте `str.lower` в качестве значения для именованного аргумента `key` при вызове метода `sort()`:

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

Output:

```plaintext
['a', 'A', 'z', 'Z']
```

Вы можете использовать встроенную функцию `sorted`, чтобы вернуть новый список:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

## Тип данных Кортеж (Tuple)

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each">Кортежи против Списков</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Ключевое различие между кортежами и списками заключается в том, что <code>кортежи</code> являются <i>неизменяемыми</i> (immutable) объектами, а <code>списки</code> — <i>изменяемыми</i> (mutable). Это означает, что кортежи нельзя изменять, в то время как списки можно модифицировать. Кортежи более эффективны по памяти, чем списки.
  </base-disclaimer-content>
</base-disclaimer>

```python
furniture = ('table', 'chair', 'rack', 'shelf')

furniture[0]
```

Output:

```plaintext
'table'
```

```python
furniture[1:3]
```

Output:

```plaintext
('chair', 'rack')
```

```python
len(furniture)
```

Output:

```plaintext
4
```

Основное отличие кортежей от списков заключается в том, что кортежи, как и строки, являются неизменяемыми.

## Преобразование между list() и tuple()

```python
tuple(['cat', 'dog', 5])
```

Output:

```plaintext
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

Output:

```plaintext
['cat', 'dog', 5]
```

```python
list('hello')
```

Output:

```plaintext
['h', 'e', 'l', 'l', 'o']
```

## Связанные ссылки

- <router-link to="/blog/python-data-types">Типы данных Python: Наглядное руководство для начинающих</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Понимание Python шаг за шагом</router-link>
- <router-link to="/cheatsheet/comprehensions">Понимание Python</router-link>
- <router-link to="/modules/itertools-module">Модуль itertools</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
