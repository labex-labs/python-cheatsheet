---
title: 'Python open() 내장 함수 - Python 치트 시트'
description: '파일을 열고 해당 파일 객체를 반환합니다. 파일을 열 수 없으면 OSError 가 발생합니다. 이 함수의 사용 예시는 파일 읽기 및 쓰기를 참조하십시오.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python open() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   파일을 열고 해당 파일 객체를 반환합니다. 파일이 열릴 수 없으면 OSError 가 발생합니다. 이 함수를 사용하는 방법에 대한 자세한 예는 <router-link to="/cheatsheet/file-directory-path">파일 읽기 및 쓰기</router-link> 를 참조하십시오.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `open()` 함수는 파일을 여는 데 사용되며 파일 객체를 반환합니다. 이는 시스템의 파일과 상호 작용하는 표준 방법입니다. 읽기, 쓰기 또는 추가와 같이 파일을 여는 모드를 지정할 수 있습니다.

## 예시

```python
# 새 파일을 엽니다 ('x' 모드에서는 이미 파일이 존재하면 오류 발생)
spam = open('spam.txt', mode='x')
spam.write('My first line\n\n')
spam.close()
```

```python
# 파일에 추가하고 자동으로 닫습니다
with open('spam.txt', mode='a') as spam:
    spam.write('My second line')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

출력:

```plaintext
My first line

My second line
```

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">치트 시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/cheatsheet/file-directory-path">치트 시트: 파일 및 디렉터리 경로</router-link>
- <router-link to="/cheatsheet/context-manager">치트 시트: 컨텍스트 관리자 (with 문)</router-link>
- <router-link to="/blog/python-pathlib-essentials">블로그: Pathlib 필수 사항</router-link>
- <router-link to="/modules/os-module">모듈: os</router-link>
- <router-link to="/modules/pathlib-module">모듈: pathlib</router-link>
