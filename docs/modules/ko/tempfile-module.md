---
title: Python Tempfile 모듈 - Python 치트시트
description: `tempfile` 모듈은 임시 파일과 디렉터리를 안전하게 만듭니다.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Tempfile 모듈
</base-title>

`tempfile` 모듈은 임시 파일과 디렉터리를 안전하게 만듭니다.

```python
import tempfile
```

`tempfile`는 테스트 출력, 다운로드, 중간 파일처럼 프로그램이 실행되는 동안만 존재하면 되는 데이터에 사용합니다.

## TemporaryFile()

`TemporaryFile`은 자동으로 정리되는 파일 객체를 만듭니다.

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

`with` 블록이 끝나면 파일이 자동으로 삭제됩니다.

## NamedTemporaryFile()

`NamedTemporaryFile`은 디스크상의 경로를 제공합니다.

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

다른 API가 파일 객체 대신 파일 이름을 필요로 할 때 유용합니다.

## TemporaryDirectory()

임시 디렉터리는 테스트나 짧게 쓰는 작업 공간에 유용합니다.

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

디렉터리 안의 파일도 블록이 끝날 때 디렉터리와 함께 삭제됩니다.

## 임시 위치 선택하기

`gettempdir()`는 Python이 기본으로 사용하는 디렉터리를 보여줍니다.

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## 관련 링크

- <router-link to="/modules/pathlib-module">모듈: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기와 쓰기</router-link>
- <router-link to="/builtin/open">open()</router-link>
