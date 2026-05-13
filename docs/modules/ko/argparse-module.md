---
title: "Python Argparse 모듈 - Python 치트시트"
description: "`argparse` 모듈은 위치 인자, 옵션, 플래그, 도움말 메시지를 갖는 명령줄 인터페이스를 만들 때 도움이 됩니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Argparse 모듈
</base-title>

`argparse` 모듈은 위치 인자, 옵션, 플래그, 도움말 메시지를 갖는 명령줄 인터페이스를 만들 때 도움이 됩니다.

이 모듈은 Python 3.2에서 추가되었습니다. Python 3.14를 사용하면 `ArgumentParser`가 `suggest_on_error` 및 `color` 매개변수도 지원합니다.

```python
import argparse
```

Python 파일을 작은 터미널 프로그램처럼 동작하게 만들고 싶을 때 `argparse`를 사용합니다.

```bash
python greet.py Ada --count 2
```

이 모듈은 스크립트 이름 뒤의 텍스트를 읽고, 검증한 다음, 파싱된 값을 담은 Python 객체를 돌려줍니다.

## 파서 만들기

`ArgumentParser`는 프로그램이 받는 인자를 저장합니다.

```python
import argparse

parser = argparse.ArgumentParser(
    prog='greet',
    description='Greet a user from the command line',
)

parser.print_help()
```

```output
usage: greet [-h]

Greet a user from the command line

options:
  -h, --help  show this help message and exit
```

## 위치 인자

위치 인자는 기본적으로 필수입니다.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')

args = parser.parse_args(['Ada'])
print(args.name)
```

```output
Ada
```

## 선택적 인자와 플래그

선택적 인자는 보통 `-` 또는 `--`로 시작합니다.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--count', type=int, default=1)
parser.add_argument('-v', '--verbose', action='store_true')

args = parser.parse_args(['--count', '3', '--verbose'])
print(args.count)
print(args.verbose)
```

```output
3
True
```

## 선택값과 형 변환

값은 파싱할 때 검증할 수 있습니다.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--mode', choices=['dev', 'prod'])
parser.add_argument('--port', type=int, default=8000)

args = parser.parse_args(['--mode', 'dev', '--port', '9000'])
print(args.mode)
print(args.port)
```

```output
dev
9000
```

## 하위 명령

하위 명령은 `git commit`이나 `docker run` 같은 도구에서 유용합니다.

```python
import argparse

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(dest='command', required=True)

build_parser = subparsers.add_parser('build')
build_parser.add_argument('--release', action='store_true')

args = parser.parse_args(['build', '--release'])
print(args.command)
print(args.release)
```

```output
build
True
```

## 작은 완전한 예제

이 예제는 이름을 받아서 인사를 반복합니다.

```python
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('name')
parser.add_argument('--count', type=int, default=1)

args = parser.parse_args(['Ada', '--count', '2'])

for _ in range(args.count):
    print(f'Hello {args.name}!')
```

```output
Hello Ada!
Hello Ada!
```

## 관련 링크

- <router-link to="/modules/sys-module">모듈: sys</router-link>
- <router-link to="/cheatsheet/functions">치트시트: 함수</router-link>
- <router-link to="/cheatsheet/control-flow">치트시트: 제어 흐름</router-link>
