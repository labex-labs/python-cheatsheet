---
title: 'Модуль Python Datetime - Шпаргалка по Python'
description: 'Модуль Datetime позволяет работать с датой и временем, предоставляя 3 дополнительных типа данных: date, time и datetime.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python Datetime
</base-title>

Модуль Datetime позволяет нам работать с объектами даты и времени. Он предоставляет три дополнительных типа данных: `date`, `time` и `datetime`.

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

Метод date возвращает объект date с атрибутами `year`, `month` и `day`:

```python
from datetime import date
# Создать объект date
obj = date(2022, 12, 1)
# Доступ к атрибуту year
obj.year
```

Вывод:

```plaintext
2022
```

```python
obj.month
```

Вывод:

```plaintext
12
```

```python
obj.day
```

Вывод:

```plaintext
1
```

## time()

```python
datetime.time(hour: int, minute: int, second: int)
```

Метод `time` возвращает объект time с атрибутами `hour`, `minute`, `second`, `microsecond` и `tzinfo`:

```python
from datetime import time
# Создать объект time
obj = time(10, 20, 33)
# Доступ к атрибуту hour
obj.hour
```

Вывод:

```plaintext
10
```

```python
obj.second
```

Вывод:

```plaintext
33
```

```python
obj.microsecond
```

Вывод:

```plaintext
0
```

## datetime()

```python
datetime.datetime(year, month, day, hour, minute, second)
```

`datetime` возвращает объект, содержащий атрибуты как `date`, так и `time`:

```python
from datetime import datetime
# Создать объект datetime с датой и временем
obj = datetime(2024, 12, 1, 15, 35, 59)
# Доступ к атрибуту year
obj.year
```

Вывод:

```plaintext
2024
```

```python
obj.month
```

Вывод:

```plaintext
12
```

```python
obj.day
```

Вывод:

```plaintext
1
```

```python
obj.hour
```

Вывод:

```plaintext
15
```

```python
obj.second
```

Вывод:

```plaintext
59
```

## now() и today()

Методы `now` и `today` возвращают объект `datetime` с точным системным днем и временем:

```python
from datetime import datetime
# Получить текущую дату и время
now = datetime.now()
now
```

Вывод:

```plaintext
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

Поскольку возвращаемый объект является `datetime`, мы можем получить доступ как к атрибутам `date`, так и к `time`:

```python
now.date()
```

Вывод:

```plaintext
datetime.date(2022, 7, 23)
```

```python
now.time()
```

Вывод:

```plaintext
datetime.time(19, 56, 49, 589806)
```

```python
now.year
```

Вывод:

```plaintext
2022
```

```python
now.month
```

Вывод:

```plaintext
7
```

```python
now.day
```

Вывод:

```plaintext
23
```

```python
now.hour
```

Вывод:

```plaintext
19
```

```python
now.minute
```

Вывод:

```plaintext
56
```

```python
now.second
```

Вывод:

```plaintext
49
```

```python
now.microsecond
```

Вывод:

```plaintext
589806
```

Кроме того, `now` может принимать объект [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) в качестве необязательного параметра:

```python
from datetime import datetime, timezone
# Получить текущее время UTC
datetime.now(timezone.utc)
```

Вывод:

```plaintext
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

Если параметр _timezone_ не указан, `now` по умолчанию использует системный часовой пояс.

## strftime() и strptime()

Вы можете легко преобразовывать строки в объекты datetime и обратно с помощью методов `strftime` и `strptime`.

### strftime()

`strftime` позволяет нам создавать отформатированные для человека строки из объекта Python datetime:

```python
from datetime import datetime
# Получить текущую дату и время для примеров форматирования
now = datetime.now()
now
```

Вывод:

```plaintext
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# Форматировать datetime как день-месяц-год с сокращенным месяцем
now.strftime("%d-%b-%Y")
```

Вывод:

```plaintext
'23-Jul-2022'
```

```python
# Форматировать datetime как день-месяц-год с числовым месяцем
now.strftime("%d-%m-%Y")
```

Вывод:

```plaintext
'23-07-2022'
```

```python
# Форматировать datetime как месяц/день/год
now.strftime("%m/%d/%Y")
```

Вывод:

```plaintext
'07/23/2022'
```

```python
# Форматировать datetime с датой и временем
now.strftime("%b/%d/%Y - %H:%M:%S")
```

Вывод:

```plaintext
'Jul/23/2022 - 20:31:19'
```

Строки, передаваемые в `strftime`, могут показаться немного странными, но их значение довольно легко понять. Например, `%m/%d/%Y` вернет месяц, день и год, разделенные `/` (07/23/2022).

### strptime()

Метод `strptime` создает объект `datetime` из строки.

Этот метод принимает два параметра:

```python
obj.strptime(datetime_string, format)
```

- Строка, представляющая объект datetime.
- Эквивалентный этой строке код формата Python.

```python
from datetime import datetime

# Разобрать строку в объект datetime
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

Вывод:

```plaintext
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# Разобрать строку с датой и временем
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

Вывод:

```plaintext
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### Коды Формата

| Директива | Значение                                                                                                                                                                                     | Пример                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `%a`      | Сокращенное название дня недели по локали.                                                                                                                                                   | Sun, Mon, …, Sat (en_US)                              |
| `%A`      | Полное название дня недели по локали.                                                                                                                                                        | Sunday, Monday, …, Saturday (en_US)                   |
| `%w`      | День недели в виде десятичного числа, где 0 — воскресенье, а 6 — суббота.                                                                                                                    | 0, 1, …, 6                                            |
| `%d`      | День месяца в виде десятичного числа с заполнением нулями слева.                                                                                                                             | 01, 02, …, 31                                         |
| `%b`      | Сокращенное название месяца по локали.                                                                                                                                                       | Jan, Feb, …, Dec (en_US)                              |
| `%B`      | Полное название месяца по локали.                                                                                                                                                            | January, February, …, December (en_US)                |
| `%m`      | Месяц в виде десятичного числа с заполнением нулями слева.                                                                                                                                   | 01, 02, …, 12                                         |
| `%y`      | Год без века в виде десятичного числа с заполнением нулями слева.                                                                                                                            | 00, 01, …, 99                                         |
| `%Y`      | Год с веком в виде десятичного числа.                                                                                                                                                        | 0001, 0002, …, 2013, 2014, …, 9998, 9999              |
| `%H`      | Час (24-часовой формат) в виде десятичного числа с заполнением нулями слева.                                                                                                                 | 00, 01, …, 23                                         |
| `%I`      | Час (12-часовой формат) в виде десятичного числа с заполнением нулями слева.                                                                                                                 | 01, 02, …, 12                                         |
| `%p`      | Эквивалент AM или PM по локали.                                                                                                                                                              | AM, PM (en_US)                                        |
| `%M`      | Минута в виде десятичного числа с заполнением нулями слева.                                                                                                                                  | 00, 01, …, 59                                         |
| `%S`      | Секунда в виде десятичного числа с заполнением нулями слева.                                                                                                                                 | 00, 01, …, 59                                         |
| `%f`      | Микросекунда в виде десятичного числа, с заполнением нулями слева.                                                                                                                           | 000000, 000001, …, 999999                             |
| `%z`      | Смещение UTC в формате `±HHMM[SS[.ffffff]]` (пустая строка, если объект "наивный").                                                                                                          | (пусто), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z`      | Название часового пояса (пустая строка, если объект "наивный").                                                                                                                              | (пусто), UTC, GMT                                     |
| `%j`      | День года в виде десятичного числа с заполнением нулями слева.                                                                                                                               | 001, 002, …, 366                                      |
| `%U`      | Номер недели в году (воскресенье как первый день недели) в виде десятичного числа с заполнением нулями слева. Все дни в новом году, предшествующие первому воскресенью, считаются неделей 0. | 00, 01, …, 53                                         |
| `%W`      | Номер недели в году (понедельник как первый день недели) в виде десятичного числа. Все дни в новом году, предшествующие первому понедельнику, считаются неделей 0.                           | 00, 01, …, 53                                         |
| `%c`      | Соответствующее представление даты и времени по локали.                                                                                                                                      | Tue Aug 16 21:30:00 1988 (en_US)                      |
| `%x`      | Соответствующее представление даты по локали.                                                                                                                                                | 08/16/88 (None)                                       |
| `%X`      | Соответствующее представление времени по локали.                                                                                                                                             | 21:30:00 (en_US)                                      |
| `%%`      | Буквальный символ `'%'`.                                                                                                                                                                     | %                                                     |

## timedelta()

Объект `timedelta` представляет разницу между двумя датами или временами.

```python
from datetime import datetime

# Создать два объекта datetime
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# Вычислить разницу (возвращает timedelta)
difference = date_2 - date_1
difference
```

Вывод:

```plaintext
datetime.timedelta(days=173)
```

```python
# Получить количество дней из timedelta
difference.days
```

Вывод:

```plaintext
173
```

`timedelta` может добавлять `days`, `seconds` и `microseconds` к объекту datetime:

```python
from datetime import datetime, timedelta

# Получить текущую дату и время для операций с timedelta
now = datetime.now()
now
```

Вывод:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Добавить 10 дней и 15 секунд к текущей дате и времени
now + timedelta(days=10, seconds=15)
```

Вывод:

```plaintext
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

И может вычитать `days`, `seconds` и `microseconds` из объекта datetime:

```python
from datetime import datetime, timedelta

# Получить текущую дату и время для примера вычитания
now = datetime.now()
now
```

Вывод:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Вычесть 10 дней и 15 секунд из текущей даты и времени
now - timedelta(days=10, seconds=15)
```

Вывод:

```plaintext
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/string-formatting">Шпаргалка: Форматирование строк</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
