---
title: Модуль re Python - Шпаргалка Python
description: Модуль `re` позволяет искать, сопоставлять, разделять и заменять текст с помощью регулярных выражений.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль re Python
</base-title>

Модуль `re` позволяет искать, сопоставлять, разделять и заменять текст с помощью регулярных выражений.

```python
import re
```

Регулярные выражения — это шаблоны для текста. Используйте raw string, например `r'\d+'`, чтобы обратные слеши корректно передавались движку регулярных выражений.

## search()

`search` находит первое совпадение в любой части строки.

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` возвращает все непересекающиеся совпадения.

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` заменяет совпадающий текст.

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## Компиляция шаблонов

Скомпилированные шаблоны полезны, когда вы многократно используете одно и то же выражение.

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## Захватывающие группы

Скобки захватывают часть совпадения.

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## Обработка отсутствия совпадения

Всегда проверяйте, существует ли совпадение, прежде чем вызывать `group()`.

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## Ссылки по теме

- <router-link to="/cheatsheet/regular-expressions">Шпаргалка: регулярные выражения</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Шпаргалка: работа со строками</router-link>
- <router-link to="/builtin/str">str()</router-link>
