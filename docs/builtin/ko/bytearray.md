---
title: 'Python bytearray() 내장 함수 - Python 치트 시트'
description: '새로운 바이트 배열을 반환합니다. bytearray 클래스는 0 에서 255 사이의 정수로 이루어진 변경 가능한 시퀀스입니다. 변경 가능한 시퀀스 유형에 설명된 대부분의 일반적인 메서드와 bytes 타입이 가진 대부분의 메서드를 가지고 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytearray() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    새로운 바이트 배열을 반환합니다. bytearray 클래스는 범위 [...]. 내의 정수들의 변경 가능한 시퀀스입니다. 이는 변경 가능한 시퀀스 유형에 설명된 대부분의 일반적인 변경 가능한 시퀀스 메서드와 bytes 타입이 가진 대부분의 메서드를 가지고 있습니다 [...].
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`bytearray()` 함수는 새로운 바이트 배열을 반환합니다. 이 객체는 0 <= x < 256 범위 내의 정수들로 이루어진 변경 가능한 시퀀스입니다. 이는 본질적으로 `bytes` 객체의 변경 가능한 버전으로, 생성 후 내용을 수정할 수 있음을 의미합니다. 이는 제자리에서 수정되어야 하는 바이너리 데이터를 처리할 때 유용합니다.

## 예시

```python
# 특정 인코딩을 사용하여 문자열에서 bytearray 생성
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

```output
bytearray(b'hello')
```

```python
# 정수 리스트에서 bytearray 생성
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

```output
bytearray(b'Hello')
```

```python
# bytearray 수정 (변경 가능)
ba2[0] = 104  # 'h'의 ASCII 코드
ba2.append(33)  # '!'의 ASCII 코드
print(ba2)
```

```output
bytearray(b'hello!')
```

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">치트 시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트와 튜플</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
