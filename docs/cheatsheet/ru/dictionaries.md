---
title: 'Словари Python - Шпаргалка по Python'
description: 'В Python словарь — это упорядоченная по вставке (начиная с Python > 3.7) коллекция пар ключ-значение.'
labUrl: 'https://labex.io/ru/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Словари Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

В Python словарь — это _упорядоченная_ (начиная с Python > 3.7) коллекция пар `ключ`: `значение`.

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">документации</a> Python 3
  </base-disclaimer-title>
  <base-disclaimer-content>
    Основные операции со словарем — это сохранение значения с некоторым ключом и извлечение значения по заданному ключу. Также можно удалить пару ключ:значение с помощью <code>del</code>.
  </base-disclaimer-content>
</base-disclaimer>

Пример словаря:

```python
# Dictionary: collection of key-value pairs
my_cat = {
    'size': 'fat',          # key: 'size', value: 'fat'
    'color': 'gray',         # key: 'color', value: 'gray'
    'disposition': 'loud'    # key: 'disposition', value: 'loud'
}
```

## Установка ключа, значения с помощью оператора подстроки `[]`

```python
# Add or update dictionary entry using subscript operator
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
my_cat['age_years'] = 2  # Add new key-value pair
print(my_cat)
```

```output
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## Получение значения с помощью оператора подстроки `[]`

В случае, если ключ не присутствует в словаре, вызывается исключение <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a>.

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

```output
fat
```

```python
print(my_cat['eye_color'])
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

Метод `values()` получает **значения** словаря:

```python
# Iterate over dictionary values using .values() method
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # Loop through all values
    print(value)
```

```output
red
42
```

## keys()

Метод `keys()` получает **ключи** словаря:

```python
# Iterate over dictionary keys using .keys() method
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # Loop through all keys
    print(key)
```

```output
color
age
```

Нет необходимости использовать **.keys()**, так как по умолчанию вы будете перебирать ключи:

```python
# Iterating over dictionary directly loops through keys (default behavior)
pet = {'color': 'red', 'age': 42}
for key in pet:  # Equivalent to for key in pet.keys()
    print(key)
```

```output
color
age
```

## items()

Метод `items()` получает **элементы** словаря и возвращает их в виде <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>кортежа</router-link> (Tuple):

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

Используя методы `keys()`, `values()` и `items()`, цикл for может перебирать ключи, значения или пары ключ-значение в словаре соответственно.

```python
# Iterate over key-value pairs using .items() method
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # Unpack tuple into key and value
    print(f'Key: {key} Value: {value}')
```

```output
Key: color Value: red
Key: age Value: 42
```

## get()

Метод `get()` возвращает значение элемента с заданным ключом. Если ключ не существует, он возвращает `None`:

```python
# .get() method: safely retrieve value, returns None if key doesn't exist
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # Returns 'Rose'
```

```output
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

```output
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

```output
'She is deeply in love with None'
```

Вы также можете изменить значение по умолчанию `None` на то, которое выберете:

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

```output
'She is deeply in love with lover'
```

## Добавление элементов с помощью setdefault()

Можно добавить элемент в словарь таким образом:

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

Используя метод `setdefault`, мы можем сделать тот же код короче:

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

```output
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## Удаление элементов

### pop()

Метод `pop()` удаляет и возвращает элемент по заданному ключу.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

```output
33
```

```python
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

<BaseQuiz id="cheatsheet-dictionaries-1" correct="B">
<template #question>
Что делает <code>pop()</code> при вызове на словаре?
</template>

<BaseQuizOption value="A">A. Только удаляет пару ключ-значение</BaseQuizOption>
<BaseQuizOption value="B" correct>B. Удаляет и возвращает значение для указанного ключа</BaseQuizOption>
<BaseQuizOption value="C">C. Только возвращает значение, не удаляя его</BaseQuizOption>
<BaseQuizOption value="D">D. Удаляет все элементы из словаря</BaseQuizOption>
<BaseQuizAnswer>Метод <code>pop()</code> удаляет пару ключ-значение для указанного ключа и возвращает значение. Если ключ не существует, он вызывает <code>KeyError</code> (если не предоставлено значение по умолчанию).</BaseQuizAnswer>
</BaseQuiz>

### popitem()

Метод `popitem()` удаляет последний элемент в словаре и возвращает его.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

```output
('hair', 'brown')
```

```python
wife
```

```output
{'name': 'Rose', 'age': 33}
```

### del

Метод `del` удаляет элемент по заданному ключу.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

Метод `clear()` удаляет все элементы в словаре.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

```output
{}
```

## Проверка ключей в словаре

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

```output
True
```

```python
'height' in person.keys()
```

```output
False
```

```python
'skin' in person # You can omit keys()
```

```output
False
```

## Проверка значений в словаре

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

```output
True
```

```python
33 in person.values()
```

```output
True
```

## Красивый вывод (Pretty Printing)

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

```output
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## Объединение двух словарей

Для Python 3.5+:

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_b, **dict_a}
dict_c
```

```output
{'b': 2, 'c': 4, 'a': 1}
```

<BaseQuiz id="cheatsheet-dictionaries-2" correct="B">
<template #question>
При объединении двух словарей с помощью <code>{**dict_b, **dict_a}</code>, что произойдет, если у обоих словарей есть один и тот же ключ?
</template>

<BaseQuizOption value="A">A. Значение из <code>dict_b</code> перезаписывает значение из <code>dict_a</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. Значение из <code>dict_a</code> перезаписывает значение из <code>dict_b</code></BaseQuizOption>
<BaseQuizOption value="C">C. Оба значения сохраняются в списке</BaseQuizOption>
<BaseQuizOption value="D">D. Вызывается ошибка</BaseQuizOption>
<BaseQuizAnswer>При объединении словарей с помощью оператора распаковки <code>\*\*</code>, если у обоих словарей есть один и тот же ключ, значение из словаря, который идет позже (в данном случае <code>dict_a</code>), перезаписывает значение из предыдущего словаря.</BaseQuizAnswer>
</BaseQuiz>

## Связанные ссылки

- <router-link to="/blog/python-data-types">Блог-пост о типах данных Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args и \*\*kwargs: Простое объяснение</router-link>
- <router-link to="/cheatsheet/comprehensions">Генераторы (Comprehensions)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args и Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Генераторы Python по шагам</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
