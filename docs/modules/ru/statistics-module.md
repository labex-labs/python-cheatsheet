---
title: "Модуль Statistics Python - Шпаргалка Python"
description: "Модуль `statistics` предоставляет простые инструменты для вычисления средних, медиан и другой описательной статистики."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Statistics Python
</base-title>

Модуль `statistics` предоставляет простые инструменты для вычисления средних, медиан и другой описательной статистики.

Модуль был добавлен в Python 3.4.

```python
import statistics
```

Используйте `statistics`, когда нужны обычные вычисления для небольшого списка чисел. Для продвинутого анализа данных библиотеки вроде NumPy и pandas мощнее, но они не входят в стандартную библиотеку.

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` возвращает среднее в виде числа с плавающей точкой и часто быстрее для числовых данных.

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode` возвращает наиболее часто встречающееся значение.

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

Если самых частых значений несколько, `multimode` вернет их все.

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` вычисляет выборочное стандартное отклонение.

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## Работа с пустыми данными

Большинство функций вызывают `StatisticsError` для пустого ввода.

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## Ссылки по теме

- <router-link to="/modules/math-module">Модуль: math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: списки и кортежи</router-link>
- <router-link to="/builtin/round">round()</router-link>
