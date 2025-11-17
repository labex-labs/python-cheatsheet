---
title: 'Python print() 내장 함수 - Python 치트 시트'
description: '텍스트 스트림 파일에 객체를 출력하며, sep 으로 구분하고 end 로 끝냅니다. sep, end, file, flush 는 키워드 인수로 제공되어야 합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python print() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   텍스트 스트림 파일에 객체를 출력하며, 객체들은 sep 로 구분되고 end 로 끝납니다. sep, end, file, flush 는 키워드 인수로 제공되어야 합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`print()` 함수는 전달받은 인수의 값을 씁니다. [...] 이 함수는 여러 인수, 부동 소수점 수량, 문자열을 처리합니다. 문자열은 따옴표 없이 출력되며, 항목 사이에 공백이 삽입되어 깔끔하게 형식을 지정할 수 있습니다:

```python
print('Hello world!')
```

출력:

```plaintext
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

출력:

```plaintext
Hello world! 1
```

## end 키워드

`end` 키워드 인수를 사용하여 출력 후 줄 바꿈을 피하거나, 출력을 다른 문자열로 끝낼 수 있습니다:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

출력:

```plaintext
printed-with-a-dash-in-between-
```

## sep 키워드

`sep` 키워드는 둘 이상의 객체가 있을 경우 객체들을 구분하는 방법을 지정합니다:

```python
print('cats', 'dogs', 'mice', sep=',')
```

출력:

```plaintext
cats,dogs,mice
```

## 관련 링크

- <router-link to="/cheatsheet/string-formatting">치트 시트: 문자열 포매팅</router-link>
- <router-link to="/cheatsheet/manipulating-strings">치트 시트: 문자열 조작</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
