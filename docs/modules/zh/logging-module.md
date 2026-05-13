---
title: "Python Logging 模块 - Python 速查表"
description: "`logging` 模块可以让你以统一的方式记录 debug、info、warning、error 和 exception 消息。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Logging 模块
</base-title>

`logging` 模块可以让你以一致的方式记录 debug、info、warning、error 和 exception 消息。

```python
import logging
```

当消息有不同的重要程度，或者以后可能要写入文件时，应该使用 `logging` 而不是 `print()`。

## 基本配置

`basicConfig` 用来配置默认的日志记录器。

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

低于配置级别的消息会被忽略：

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## 创建命名记录器

在较大的应用程序中，命名记录器很有用。

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## 格式化消息

你可以自定义输出格式。

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

## 记录异常

在 `except` 代码块中，`logger.exception` 会自动记录 traceback。

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

## 相关链接

- <router-link to="/cheatsheet/debugging">速查表：调试</router-link>
- <router-link to="/cheatsheet/exception-handling">速查表：异常处理</router-link>
- <router-link to="/modules/sys-module">模块：sys</router-link>
