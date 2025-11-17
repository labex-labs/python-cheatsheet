---
title: 'Модуль Python CSV - Шпаргалка по Python'
description: 'В Python есть модуль csv, который позволяет легко работать с файлами CSV.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python CSV
</base-title>

Модуль `csv` предоставляет инструменты для чтения и записи файлов CSV, которые обычно используются для обмена данными.

<base-disclaimer>
  <base-disclaimer-title>
    Модуль csv против ручного чтения-записи файлов
  </base-disclaimer-title>
  <base-disclaimer-content>
    Хотя вы можете читать и записывать CSV-файлы с помощью базовых файловых операций и строковых методов (таких как <code>open()</code> с <code>read</code> или <code>write</code> и <code>split()</code>), модуль <code>csv</code> предназначен для обработки крайних случаев, таких как заключенные в кавычки поля, встроенные разделители и различные символы конца строки. Он обеспечивает совместимость с CSV-файлами, созданными другими программами (например, Excel), и снижает риск ошибок синтаксического анализа. Для большинства задач, связанных с CSV, предпочтительнее использовать модуль <code>csv</code>, а не ручной разбор.
    <br>
    Для получения дополнительной информации об основах работы с файлами см. страницу <router-link to="/cheatsheet/file-directory-path">Пути к файлам и каталогам</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

Чтобы начать, импортируйте модуль:

```python
import csv
```

## csv.reader()

Эта функция принимает файл, который должен быть [итерируемым объектом строк](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format). Другими словами, это должен быть открытый файл, как показано ниже:

```python
import csv

file_path = 'file.csv'

# Чтение CSV файла
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # Итерация по каждой строке
  for line in reader:
    print(line)
```

Эта функция возвращает объект reader, по которому можно легко итерироваться для получения каждой строки. Доступ к каждому столбцу в соответствующих строках можно получить по индексу, без необходимости использовать встроенную функцию [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split).

## csv.writer()

Эта функция принимает файл для записи в виде CSV-файла, аналогично функции reader, ее следует вызывать следующим образом:

```python
import csv

file_path = 'file.csv'

# Открытие файла для записи CSV
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # сделать что-то
```

Блок "сделать что-то" можно заменить использованием следующих функций:

### writer.writerow()

Записывает одну строку в CSV-файл.

```python
# Запись строки заголовка
writer.writerow(['name', 'age', 'city'])
# Запись строки данных
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

Записывает несколько строк за один раз.

```python
# Подготовка нескольких строк
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# Запись всех строк сразу
writer.writerows(rows)
```

## csv.DictReader

Позволяет читать CSV-файлы и получать доступ к каждой строке как к словарю, используя первую строку файла в качестве ключей (заголовков столбцов) по умолчанию.

```python
import csv

# Чтение CSV как словаря (первая строка становится ключами)
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # Доступ к столбцам по имени вместо индекса
    for row in reader:
        print(row['name'], row['age'])
```

- Каждый `row` является `OrderedDict` (или обычным `dict` в Python 3.8+).
- Если в вашем CSV нет заголовков, вы можете указать их с помощью параметра `fieldnames`:

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

Позволяет записывать словари в виде строк в CSV-файл. Вы должны указать имена полей (заголовки столбцов) при создании writer'а.

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# Запись словарей в CSV
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # записывает строку заголовка
    writer.writerows(rows)
```

- Используйте `writer.writeheader()`, чтобы записать заголовки столбцов в виде первой строки.
- Каждый словарь в `writer.writerows()` должен иметь ключи, соответствующие `fieldnames`, указанным при создании writer'а.

## Дополнительные параметры для csv.reader() и csv.writer()

### delimiter

Должен быть символ, используемый для разделения полей. Как следует из названия типа файла, по умолчанию это запятая ','. В зависимости от локали Excel может создавать CSV-файлы с точкой с запятой в качестве разделителя.

```python
import csv

# Чтение CSV с разделителем-точкой с запятой
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

Символ или последовательность символов для завершения строки. Наиболее распространенным является "\r\n", но это может быть "\n".

### quotechar

Символ, используемый для заключения в кавычки полей, содержащих специальные символы (по умолчанию `"`).

```python
# Использование одинарной кавычки в качестве символа кавычки
reader = csv.reader(csvfile, quotechar="'")
```

Для получения более подробной информации см. <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">официальную документацию модуля csv Python</a>.
