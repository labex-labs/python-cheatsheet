---
title: 'Множества Python: Что, Зачем и Как - Шпаргалка по Python'
description: 'При написании кода его можно реализовать по-разному. Некоторые способы считаются плохими, другие — ясными, лаконичными и поддерживаемыми, или «питоничными». В этой статье мы рассмотрим, как множества Python могут помочь нам не только с читаемостью, но и с ускорением выполнения наших программ.'
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Множества Python: Что, Зачем и Как - Шпаргалка по Python"
    description: "При написании кода его можно реализовать по-разному. Некоторые способы считаются плохими, другие — ясными, лаконичными и поддерживаемыми, или «питоничными». В этой статье мы рассмотрим, как множества Python могут помочь нам не только с читаемостью, но и с ускорением выполнения наших программ."
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Множества Python: Что, Зачем и Как - Шпаргалка по Python" />

Python оснащен несколькими встроенными типами данных, которые помогают нам организовывать наши данные. Эти структуры включают `lists` (списки), `dictionaries` (словари), `tuples` (кортежи) и `sets` (множества).

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>set</code> — это <b>неупорядоченная коллекция</b> без <b>повторяющихся элементов</b>. Основные варианты использования включают <b>проверку членства</b> и <b>удаление повторяющихся записей</b>. Объекты множеств также поддерживают математические операции, такие как <b>объединение</b> (union), <b>пересечение</b> (intersection), <b>разность</b> (difference) и <b>симметричная разность</b> (symmetric difference).
  </base-disclaimer-content>
</base-disclaimer>

В этой статье мы рассмотрим каждый из элементов, перечисленных в приведенном выше определении. Давайте начнем прямо сейчас и посмотрим, как мы можем их создать.

## Инициализация множества (Initializing a Set)

Существует два способа создания множества: один — использовать встроенную функцию `set()` и передать `list` элементов, а другой — использовать фигурные скобки `{}`.

### Инициализация множества с помощью встроенной функции `set()`

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### Инициализация множества с помощью фигурных скобок `{}`

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    Пустые множества (Empty Sets)
  </base-warning-title>
  <base-warning-content>
    При создании множества убедитесь, что вы не используете пустые фигурные скобки <code>{}</code>, иначе вы получите пустой словарь.
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

Сейчас подходящий момент упомянуть, что для простоты все примеры, приведенные в этой статье, будут использовать целые числа из одной цифры, но множества могут содержать все [хешируемые](https://docs.python.org/3/glossary.html#term-hashable) типы данных, которые поддерживает Python. Другими словами, целые числа, строки и кортежи, но не _изменяемые_ элементы, такие как _списки_ или _словари_:

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

Теперь, когда вы знаете, как создать множество и какие элементы оно может содержать, давайте продолжим и посмотрим, _почему_ оно всегда должно быть в нашем арсенале.

## Почему их следует использовать (Why you should Use them)

Мы можем писать код не одним, а несколькими способами. Некоторые считаются довольно плохими, а другие — _понятными, лаконичными и поддерживаемыми_. Или "[_pythonic_](http://docs.python-guide.org/en/latest/writing/style/)".

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Когда опытный разработчик Python (Pythonista) называет части кода не «Pythonic», он обычно имеет в виду, что эти строки кода не соответствуют общим рекомендациям и не выражают свое намерение в том, что считается лучшим (читай: наиболее читаемым) способом.
  </base-disclaimer-content>
</base-disclaimer>

Давайте начнем изучать, как множества Python могут помочь нам не только с читаемостью, но и со временем выполнения нашей программы.

## Неупорядоченная коллекция элементов (Unordered collection of elements)

Прежде всего: вы не можете получить доступ к объекту `set` по индексам.

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

Или изменять их с помощью срезов:

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

_НО_, если нам нужно удалить дубликаты или выполнить математические операции, такие как объединение списков (объединение), мы можем и _ВСЕГДА ДОЛЖНЫ_ использовать множества.

Я должен упомянуть, что **при итерации списки превосходят множества по производительности**, поэтому отдавайте им предпочтение, если это то, что вам нужно. Почему? Что ж, эта статья не призвана объяснять внутреннее устройство множеств, но вот несколько ссылок, где вы можете об этом прочитать:

- [Time Complexity](https://wiki.python.org/moin/TimeComplexity)
- [How is set() implemented?](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python Sets vs Lists](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## Отсутствие повторяющихся элементов (No duplicate items)

Пиша это, я не могу перестать думать о том, сколько раз я использовал цикл _for_ и оператор _if_ для проверки и удаления повторяющихся элементов в списке. Мое лицо краснеет, когда я вспоминаю, что не раз писал что-то вроде этого:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

Или использовал списковое включение (list comprehension):

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

Но это нормально, все это больше не имеет значения, потому что теперь у нас есть множества:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## Производительность множеств (Sets performance)

Теперь давайте используем модуль _timeit_ и посмотрим на время выполнения списков и множеств при удалении дубликатов:

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # сначала посмотрим, как работает список:
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # а теперь множество:
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # быстрее и чище =)
```

С помощью множеств мы не только пишем _меньше строк кода_, чем с использованием списковых включений, но и получаем более _читаемый_ и _производительный_ код.

<base-warning>
  <base-warning-title>
    помните, что множества неупорядочены
  </base-warning-title>
  <base-warning-content>
    Нет гарантии, что при преобразовании их обратно в список порядок элементов будет сохранен.
  </base-warning-content>
</base-warning>

Из [Дзена Python](https://www.python.org/dev/peps/pep-0020/):

> Красивое лучше, чем уродливое. <br>
> Явное лучше, чем неявное.<br>
> Простое лучше, чем сложное.<br>
> Плоское лучше, чем вложенное.

Разве множества не являются Красивыми, Явными, Простыми и Плоскими?

## Проверка членства (Membership tests)

Каждый раз, когда мы используем оператор _if_ для проверки, находится ли элемент, например, в списке, мы выполняем проверку членства:

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

И множества более производительны, чем списки при их выполнении:

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

Приведенные выше тесты взяты из этой [ветки Stack Overflow](https://stackoverflow.com/questions/2831212/python-sets-vs-lists).

Поэтому, если вы выполняете такие сравнения в огромных списках, преобразование этого списка во множество значительно ускорит работу.

## Добавление элементов (Adding Elements)

В зависимости от количества добавляемых элементов нам придется выбирать между методами `add()` и `update()`.

`add()` добавит один элемент:

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

А `update()` — несколько:

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

Помните, множества удаляют дубликаты.

## Удаление элементов (Removing Elements)

Если вы хотите получить уведомление, когда ваш код пытается удалить элемент, которого нет в множестве, используйте `remove()`. В противном случае `discard()` предоставляет подходящую альтернативу:

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` не вызовет ошибок:

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # ничего не происходит!
```

Мы также можем использовать `pop()` для случайного удаления элемента:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # удаляет произвольный элемент
1
>>> s
{2, 3, 4, 5}
```

Или `clear()` для удаления всех значений из множества:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # отбросить все элементы
>>> s
set()
```

## Метод union()

`union()` или `|` создаст новое множество, содержащее все элементы из предоставленных нами множеств:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # или 's1 | s2'
{1, 2, 3, 4, 5}
```

## Метод intersection()

`intersection` или `&` вернет множество, содержащее только те элементы, которые являются общими для всех них:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # или 's1 & s2 & s3'
{3}
```

## Метод difference()

Разность создает новое множество со значениями, которые есть в "s1", но отсутствуют в "s2":

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # или 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` или `^` вернет все значения, которые не являются общими для множеств.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # или 's1 ^ s2'
{1, 4}
```

## Заключение (Conclusions)

Я надеюсь, что после прочтения этой статьи вы узнаете, что такое множество, как манипулировать его элементами и какие операции оно может выполнять. Знание того, когда использовать множество, определенно поможет вам писать более чистый код и ускорять ваши программы.
