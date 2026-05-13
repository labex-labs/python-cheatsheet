---
title: Python Tomllib 모듈 - Python 치트시트
description: `tomllib` 모듈은 Python에서 TOML 설정 파일을 파싱합니다.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tomllib 모듈
</base-title>

`tomllib` 모듈은 Python에서 TOML 설정 파일을 파싱합니다.

이 모듈은 Python 3.11에서 추가되었습니다. 읽기 전용이므로 TOML을 파싱하는 데만 사용하고, 쓰는 데는 사용하지 마세요.

```python
import tomllib
```

TOML은 `pyproject.toml` 같은 설정 파일에 자주 사용됩니다. 단순한 키-값 쌍과 섹션처럼 보입니다.

## 문자열에서 TOML 파싱하기

`loads`는 문자열에 저장된 TOML 문서를 파싱합니다.

```python
import tomllib

config = tomllib.loads("""
name = "python-cheatsheet"
version = "1.0"
[database]
port = 5432
""")

print(config['name'])
print(config['database']['port'])
```

```output
python-cheatsheet
5432
```

TOML 값은 Python 값으로 변환됩니다.

```python
import tomllib

config = tomllib.loads("""
debug = true
ports = [8000, 8001]
""")

print(config['debug'])
print(config['ports'])
```

```output
True
[8000, 8001]
```

## TOML 파일 읽기

`load`는 바이너리 파일 객체를 기대합니다.

```python
import tomllib
from io import BytesIO

data = b'name = "demo"'
config = tomllib.load(BytesIO(data))
print(config)
```

```output
{'name': 'demo'}
```

실제 파일을 열 때는 바이너리 모드를 사용하세요.

```python
import tomllib

with open('pyproject.toml', 'rb') as file:
    config = tomllib.load(file)
```

## 관련 링크

- <router-link to="/modules/json-module">모듈: json</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기와 쓰기</router-link>
- <router-link to="/builtin/open">open()</router-link>
