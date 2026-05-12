---
title: Python Logging Module - Python Cheatsheet
description: The logging module lets you record debug, info, warning, error, and exception messages in a consistent way.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Logging Module
</base-title>

The `logging` module lets you record debug, info, warning, error, and exception messages in a consistent way.

```python
import logging
```

Use `logging` instead of `print()` when messages have different importance levels or when you may later send them to a file.

## Basic configuration

`basicConfig` configures the default logger.

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

Messages below the configured level are ignored:

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## Creating a named logger

Named loggers are useful in larger applications.

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## Formatting messages

You can customize the output format.

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

## Logging exceptions

`logger.exception` records the traceback automatically inside an `except` block.

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

## Relevant links

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet: Exception Handling</router-link>
- <router-link to="/modules/sys-module">Module: sys</router-link>
