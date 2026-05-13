---
title: "Python Sys 모듈 - Python 치트시트"
description: "`sys` 모듈은 명령줄 인자, import 경로, 현재 인터프리터 버전 같은 Python 런타임 세부 정보에 접근할 수 있게 해줍니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Sys 모듈
</base-title>

`sys` 모듈은 명령줄 인자, import 경로, 현재 인터프리터 버전 같은 Python 런타임 세부 정보에 접근할 수 있게 해줍니다.

```python
import sys
```

자신의 애플리케이션 객체뿐 아니라 Python 인터프리터 자체와 대화해야 할 때 `sys`를 사용합니다.

## 명령줄 인자

`sys.argv`는 현재 스크립트에 전달된 인자 목록입니다.

```python
import sys

sys.argv = ['main.py', '--debug', 'app']
print(sys.argv[0])
print(sys.argv[1:])
```

```output
main.py
['--debug', 'app']
```

실제 명령줄 애플리케이션에서는 <router-link to="/modules/argparse-module">argparse</router-link>를 권장합니다. 같은 개념 위에 검증과 도움말을 제공합니다.

## Python 버전

```python
import sys

print(sys.version_info.major)
print(sys.version_info.minor)
```

```output
3
14
```

## import 검색 경로

`sys.path`는 Python이 모듈을 찾는 위치를 제어합니다.

```python
import sys

print(type(sys.path).__name__)
print(len(sys.path) > 0)
```

```output
list
True
```

`sys.path`의 앞부분에는 보통 현재 프로젝트가 포함되므로, 로컬 모듈을 import할 수 있습니다.

## 표준 입력과 출력

`sys.stdin`, `sys.stdout`, `sys.stderr`는 인터프리터가 사용하는 파일 같은 객체입니다.

```python
import sys

print(sys.stdout.writable())
print(sys.stderr.writable())
```

```output
True
True
```

## 프로그램 종료하기

```python
import sys

try:
    sys.exit(0)
except SystemExit as exc:
    print(exc.code)
```

```output
0
```

## 관련 링크

- <router-link to="/modules/argparse-module">모듈: argparse</router-link>
- <router-link to="/modules/subprocess-module">모듈: subprocess</router-link>
- <router-link to="/cheatsheet/main">치트시트: Main: 최상위 스크립트</router-link>
