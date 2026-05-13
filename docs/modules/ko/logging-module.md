---
title: Python Logging 모듈 - Python 치트시트
description: `logging` 모듈은 debug, info, warning, error, exception 메시지를 일관된 방식으로 기록할 수 있게 해줍니다.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Logging 모듈
</base-title>

`logging` 모듈은 debug, info, warning, error, exception 메시지를 일관된 방식으로 기록할 수 있게 해줍니다.

```python
import logging
```

메시지의 중요도가 다르거나, 나중에 파일로 보낼 가능성이 있으면 `print()` 대신 `logging`을 사용합니다.

## 기본 설정

`basicConfig`는 기본 로거를 설정합니다.

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

설정한 수준보다 낮은 메시지는 무시됩니다.

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## 이름 있는 로거 만들기

이름 있는 로거는 더 큰 애플리케이션에서 유용합니다.

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## 메시지 포맷 지정

출력 형식은 직접 지정할 수 있습니다.

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

## 예외 기록하기

`logger.exception`은 `except` 블록 안에서 traceback을 자동으로 기록합니다.

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

## 관련 링크

- <router-link to="/cheatsheet/debugging">치트시트: 디버깅</router-link>
- <router-link to="/cheatsheet/exception-handling">치트시트: 예외 처리</router-link>
- <router-link to="/modules/sys-module">모듈: sys</router-link>
