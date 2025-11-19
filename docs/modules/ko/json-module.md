---
title: '파이썬 JSON 모듈 - 파이썬 치트 시트'
description: '파이썬에는 JSON(JavaScript Object Notation) 데이터를 다룰 수 있게 해주는 내장 모듈인 json 이 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python JSON 모듈
</base-title>

JSON 은 JavaScript Object Notation 의 약자로, 데이터를 저장하고 전송하기 위한 경량 형식입니다. JSON 은 종종 데이터가 서버에서 웹 페이지로 전송될 때 사용됩니다.

Python 에는 JSON 데이터를 다룰 수 있게 해주는 내장 모듈인 `json`이 있습니다.

```python
import json
```

## JSON 데이터 타입

JSON 객체는 Python 딕셔너리와 유사하지만 다음과 같은 차이점이 있습니다.

- JSON 키는 항상 문자열입니다.
- 문자열은 항상 큰따옴표로 묶여야 합니다.
- JSON 불리언은 소문자로 시작합니다.
- `null`은 Python 의 `None`에 해당하는 JSON 값입니다.

JSON 이 지원하는 데이터 타입은 다음과 같습니다.

- String (문자열)
- Number (숫자)
- boolean (불리언)
- null
- Object (객체)
- Array (배열)

예시:

```json
{
  "name": "Charles",
  "age": 33,
  "has_hair": false,
  "hobbies": ["photography", "running"],
  "appearance": {
    "eyes": "brown",
    "hair_color": null
  }
}
```

## JSON loads() 메서드

`json.loads` 메서드를 사용하면 JSON 객체를 구문 분석하여 Python 딕셔너리로 변환할 수 있습니다.

```python
import json

# 구문 분석할 JSON 문자열
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# JSON 문자열을 Python 딕셔너리로 구문 분석
python_person = json.loads(json_person)
python_person
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
```

```python
type(python_person)
```

```output
<class 'dict'>
```

```python
# get 메서드를 사용하여 딕셔너리 값 접근
python_person.get("name")
```

```output
'Charles'
```

## JSON dumps() 메서드

그 반대의 경우입니다. `dumps()` 메서드는 Python 객체를 JSON 문자열로 변환합니다.

```python
import json

# 변환할 Python 딕셔너리
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Python 객체를 JSON 문자열로 변환
json_person = json.dumps(python_person)

json_person
```

```output
'{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
```

```python
type(json_person)
```

```output
<class 'str'>
```

## JSON 파일 읽기 및 쓰기

### JSON 파일 읽기

```python
import json
# JSON 파일 읽기
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# 참고: 이 줄은 중복된 것으로 보입니다 - json_content 는 이미 구문 분석되었습니다
json.loads(json_content)
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### JSON 파일 쓰기

```python
import json

person = {'name': 'Charles', 'age': 33}

# Python 딕셔너리를 JSON 파일에 쓰기
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## 관련 링크

- <router-link to="/cheatsheet/json-yaml">치트시트: JSON 및 YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">치트시트: 딕셔너리</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
