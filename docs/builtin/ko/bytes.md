---
title: 'Python bytes() 내장 함수 - Python 치트 시트'
description: "0 에서 255 사이의 정수로 구성된 변경 불가능한 시퀀스인 새 'bytes' 객체를 반환합니다. bytes 는 bytearray 의 변경 불가능한 버전으로, 동일한 비변경 메서드와 동일한 인덱싱 및 슬라이싱 동작을 가집니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytes() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    범위 내의 정수 시퀀스인 새 "bytes" 객체를 반환합니다 [...]. bytes 는 bytearray 의 변경 불가능한 버전입니다. 동일한 비변경 메서드와 동일한 인덱싱 및 슬라이싱 동작을 가집니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 에서 `bytes` 타입은 단일 바이트의 변경 불가능한 시퀀스입니다. 이는 0 에서 255 범위의 정수 시퀀스를 나타내며, 이미지, 오디오 또는 기타 유형의 파일과 같은 이진 데이터를 나타내는 데 사용될 수 있습니다.

여러 가지 방법으로 bytes 객체를 생성할 수 있습니다. 한 가지 방법은 `bytes()` 생성자를 사용하고 문자열, bytearray 객체 또는 bytes 객체를 전달하는 것입니다. 예를 들면 다음과 같습니다.

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

출력:

```plaintext
b'Hello, World!'
```

다른 방법은 문자열 앞에 `b` 또는 `B`를 접두사로 붙이는 리터럴 표기법을 사용하는 것입니다.

```python
data = b"Hello, World!"
print(data)
```

출력:

```plaintext
b'Hello, World!'
```

## 관련 링크

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">파일 읽기 및 쓰기</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 타입</router-link>
