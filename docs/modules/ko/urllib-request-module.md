---
title: Python urllib.request 모듈 - Python 치트시트
description: `urllib.request` 모듈은 Python 표준 라이브러리로 URL에서 데이터를 가져올 수 있게 해줍니다.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python urllib.request 모듈
</base-title>

`urllib.request` 모듈은 Python 표준 라이브러리로 URL에서 데이터를 가져올 수 있게 해줍니다.

```python
from urllib import request
```

많은 프로젝트에서는 Requests 같은 서드파티 라이브러리가 더 편리합니다. 표준 라이브러리만으로 해결하고 싶을 때 `urllib.request`를 사용합니다.

## URL 열기

`urlopen`은 응답 객체를 반환합니다.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## 응답 데이터 읽기

응답 본문은 bytes로 반환됩니다.

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

## 타임아웃 추가하기

실제 네트워크 URL을 열 때는 타임아웃을 설정해 프로그램이 무한정 기다리지 않게 하세요.

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
    네트워크 호출은 여러 이유로 실패할 수 있습니다. <code>urllib.error.URLError</code> 같은 예외를 처리하고, 신뢰할 수 없는 URL을 가져올 때는 조심하세요.
  </base-warning-content>
</base-warning>

## 관련 링크

- <router-link to="/modules/json-module">모듈: json</router-link>
- <router-link to="/cheatsheet/exception-handling">치트시트: 예외 처리</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기와 쓰기</router-link>
