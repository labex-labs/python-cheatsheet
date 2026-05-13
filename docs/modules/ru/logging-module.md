---
title: "Модуль Logging Python - Шпаргалка Python"
description: "Модуль `logging` позволяет последовательно записывать сообщения debug, info, warning, error и exception."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Logging Python
</base-title>

Модуль `logging` позволяет последовательно записывать сообщения debug, info, warning, error и exception.

```python
import logging
```

Используйте `logging` вместо `print()`, когда сообщения имеют разный уровень важности или когда позже их нужно отправить в файл.

## Базовая настройка

`basicConfig` настраивает логгер по умолчанию.

```python
import logging

logging.basicConfig(level=logging.INFO)
logging.info('Application started')
logging.warning('Low disk space')
```

```output
INFO:root:Application started
WARNING:root:Low disk space
```

Сообщения ниже настроенного уровня игнорируются.

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## Создание именованного логгера

Именованные логгеры полезны в больших приложениях.

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## Форматирование сообщений

Формат вывода можно настроить.

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s:%(name)s:%(message)s',
)

logger = logging.getLogger('app')
logger.info('Ready')
```

```output
INFO:app:Ready
```

## Логирование исключений

`logger.exception` автоматически записывает traceback внутри блока `except`.

```python
import logging

logging.basicConfig(level=logging.ERROR)
logger = logging.getLogger(__name__)

try:
    1 / 0
except ZeroDivisionError:
    logger.exception('Calculation failed')
```

```output
ERROR:__main__:Calculation failed
Traceback (most recent call last):
...
ZeroDivisionError: division by zero
```

## Ссылки по теме

- <router-link to="/cheatsheet/debugging">Шпаргалка: отладка</router-link>
- <router-link to="/cheatsheet/exception-handling">Шпаргалка: обработка исключений</router-link>
- <router-link to="/modules/sys-module">Модуль: sys</router-link>
