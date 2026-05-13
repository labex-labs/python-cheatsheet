---
title: Модуль urllib.request Python - Шпаргалка Python
description: Модуль `urllib.request` позволяет получать данные по URL с помощью стандартной библиотеки Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль urllib.request Python
</base-title>

Модуль `urllib.request` позволяет получать данные по URL с помощью стандартной библиотеки Python.

```python
from urllib import request
```

Для многих проектов сторонние библиотеки, такие как Requests, удобнее. Используйте `urllib.request`, когда нужна только стандартная библиотека.

## Открытие URL

`urlopen` возвращает объект ответа.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## Чтение данных ответа

Тело ответа возвращается в виде bytes.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
content = response.read()
print(type(content).__name__)
print(content.decode('utf-8'))
```

```output
bytes
Hello Python
```

## Добавление таймаута

При открытии реальных сетевых URL задавайте таймаут, чтобы программа не ждала бесконечно.

```python
from urllib import request

response = request.urlopen('data:text/plain,ok', timeout=5)
print(response.read().decode('utf-8'))
```

```output
ok
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Сетевые вызовы могут завершаться ошибкой по многим причинам. Обрабатывайте исключения вроде <code>urllib.error.URLError</code> и будьте осторожны при получении ненадежных URL.
  </base-warning-content>
</base-warning>

## Ссылки по теме

- <router-link to="/modules/json-module">Модуль: json</router-link>
- <router-link to="/cheatsheet/exception-handling">Шпаргалка: обработка исключений</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: чтение и запись файлов</router-link>
