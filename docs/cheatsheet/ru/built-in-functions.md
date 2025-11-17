---
title: 'Встроенные функции Python - Шпаргалка по Python'
description: 'Интерпретатор Python содержит ряд функций и типов, встроенных в него, которые всегда доступны.'
labUrl: 'https://labex.io/ru/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенные функции Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Интерпретатор Python имеет ряд встроенных функций и типов, которые всегда доступны.

## Встроенные функции Python

| Функция                                                              | Описание                                                                                        |
| :------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | Возвращает абсолютное значение числа.                                                           |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | Возвращает асинхронный итератор для асинхронного итерируемого объекта.                          |
| <router-link to='/builtin/all'>all()</router-link>                   | Возвращает True, если все элементы итерируемого объекта истинны.                                |
| <router-link to='/builtin/any'>any()</router-link>                   | Возвращает True, если хотя бы один элемент итерируемого объекта истинен.                        |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | Возвращает строку с печатным представлением объекта.                                            |
| <router-link to='/builtin/bin'>bin()</router-link>                   | Преобразует целое число в двоичную строку.                                                      |
| <router-link to='/builtin/bool'>bool()</router-link>                 | Возвращает логическое значение.                                                                 |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | Переводит вас в отладчик в месте вызова.                                                        |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | Возвращает новый массив байтов.                                                                 |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | Возвращает новый объект "bytes".                                                                |
| <router-link to='/builtin/callable'>callable()</router-link>         | Возвращает True, если аргумент объекта вызываемый, False в противном случае.                    |
| <router-link to='/builtin/chr'>chr()</router-link>                   | Возвращает строку, представляющую символ.                                                       |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | Преобразует метод в метод класса.                                                               |
| <router-link to='/builtin/compile'>compile()</router-link>           | Компилирует исходный код в объект кода или AST.                                                 |
| <router-link to='/builtin/complex'>complex()</router-link>           | Возвращает комплексное число со значением real + imag\*1j.                                      |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | Удаляет именованный атрибут, если объект это разрешает.                                         |
| <router-link to='/builtin/dict'>dict()</router-link>                 | Создает новый словарь.                                                                          |
| <router-link to='/builtin/dir'>dir()</router-link>                   | Возвращает список имен в текущей локальной области видимости.                                   |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | Возвращает пару чисел, состоящую из частного и остатка.                                         |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | Возвращает объект перечисления.                                                                 |
| <router-link to='/builtin/eval'>eval()</router-link>                 | Вычисляет и выполняет выражение.                                                                |
| <router-link to='/builtin/exec'>exec()</router-link>                 | Эта функция поддерживает динамическое выполнение кода Python.                                   |
| <router-link to='/builtin/filter'>filter()</router-link>             | Создает итератор из итерируемого объекта и возвращает истинные элементы.                        |
| <router-link to='/builtin/float'>float()</router-link>               | Возвращает число с плавающей запятой из числа или строки.                                       |
| <router-link to='/builtin/format'>format()</router-link>             | Преобразует значение в "форматированное" представление.                                         |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | Возвращает новый объект frozenset.                                                              |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | Возвращает значение именованного атрибута объекта.                                              |
| <router-link to='/builtin/globals'>globals()</router-link>           | Возвращает словарь, реализующий текущее пространство имен модуля.                               |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | Возвращает True, если объект имеет именованный атрибут.                                         |
| <router-link to='/builtin/hash'>hash()</router-link>                 | Возвращает хеш-значение объекта.                                                                |
| <router-link to='/builtin/help'>help()</router-link>                 | Запускает встроенную систему справки.                                                           |
| <router-link to='/builtin/hex'>hex()</router-link>                   | Преобразует целое число в шестнадцатеричную строку в нижнем регистре.                           |
| <router-link to='/builtin/id'>id()</router-link>                     | Возвращает "идентичность" объекта.                                                              |
| <router-link to='/builtin/input'>input()</router-link>               | Эта функция принимает ввод и преобразует его в строку.                                          |
| <router-link to='/builtin/int'>int()</router-link>                   | Возвращает целочисленный объект, созданный из числа или строки.                                 |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | Возвращает True, если аргумент объекта является экземпляром объекта.                            |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | Возвращает True, если class является подклассом classinfo.                                      |
| <router-link to='/builtin/iter'>iter()</router-link>                 | Возвращает объект итератора.                                                                    |
| <router-link to='/builtin/len'>len()</router-link>                   | Возвращает длину (количество элементов) объекта.                                                |
| <router-link to='/builtin/list'>list()</router-link>                 | Является не функцией, а изменяемым типом последовательности.                                    |
| <router-link to='/builtin/locals'>locals()</router-link>             | Обновляет и возвращает словарь с текущей локальной таблицей символов.                           |
| <router-link to='/builtin/map'>map()</router-link>                   | Возвращает итератор, который применяет функцию к каждому элементу итерируемого объекта.         |
| <router-link to='/builtin/max'>max()</router-link>                   | Возвращает наибольший элемент в итерируемом объекте.                                            |
| <router-link to='/builtin/min'>min()</router-link>                   | Возвращает наименьший элемент в итерируемом объекте.                                            |
| <router-link to='/builtin/next'>next()</router-link>                 | Извлекает следующий элемент из итератора.                                                       |
| <router-link to='/builtin/object'>object()</router-link>             | Возвращает новый объект без особенностей.                                                       |
| <router-link to='/builtin/oct'>oct()</router-link>                   | Преобразует целое число в восьмеричную строку в нижнем регистре.                                |
| <router-link to='/builtin/open'>open()</router-link>                 | Открывает файл и возвращает соответствующий файловый объект.                                    |
| <router-link to='/builtin/ord'>ord()</router-link>                   | Возвращает целое число, представляющее кодовую точку Unicode символа.                           |
| <router-link to='/builtin/pow'>pow()</router-link>                   | Возвращает base в степени exp.                                                                  |
| <router-link to='/builtin/print'>print()</router-link>               | Выводит объекты в текстовый поток файла.                                                        |
| <router-link to='/builtin/property'>property()</router-link>         | Возвращает атрибут свойства.                                                                    |
| <router-link to='/builtin/repr'>repr()</router-link>                 | Возвращает строку, содержащую печатное представление объекта.                                   |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | Возвращает обратный итератор.                                                                   |
| <router-link to='/builtin/round'>round()</router-link>               | Возвращает число, округленное до ndigits знаков после десятичной точки.                         |
| <router-link to='/builtin/set'>set()</router-link>                   | Возвращает новый объект set.                                                                    |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | Это аналог getattr().                                                                           |
| <router-link to='/builtin/slice'>slice()</router-link>               | Возвращает срезанный объект, представляющий набор индексов.                                     |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | Возвращает новый отсортированный список из элементов итерируемого объекта.                      |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | Преобразует метод в статический метод.                                                          |
| <router-link to='/builtin/str'>str()</router-link>                   | Возвращает строковую версию объекта.                                                            |
| <router-link to='/builtin/sum'>sum()</router-link>                   | Суммирует start и элементы итерируемого объекта.                                                |
| <router-link to='/builtin/super'>super()</router-link>               | Возвращает прокси-объект, который делегирует вызовы методов родительскому или соседнему классу. |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | Является не функцией, а неизменяемым типом последовательности.                                  |
| <router-link to='/builtin/type'>type()</router-link>                 | Возвращает тип объекта.                                                                         |
| <router-link to='/builtin/vars'>vars()</router-link>                 | Возвращает атрибут dict для любого другого объекта, имеющего атрибут dict.                      |
| <router-link to='/builtin/zip'>zip()</router-link>                   | Итерирует по нескольким итерируемым объектам параллельно.                                       |
| <router-link to='/builtin/import'>**import**()</router-link>         | Эта функция вызывается оператором import.                                                       |
