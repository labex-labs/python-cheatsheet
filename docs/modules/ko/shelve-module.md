---
title: '파이썬 Shelve 모듈 - 파이썬 치트 시트'
description: '‘선반 (shelf)’은 영구적인 딕셔너리형 객체입니다. 선반에는 피클 (pickle) 모듈이 처리할 수 있는 임의의 파이썬 객체를 저장할 수 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Shelve 모듈
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/shelve.html">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   "선반 (shelf)"은 영구적인, 딕셔너리 같은 객체입니다. "dbm" 데이터베이스와의 차이점은 선반의 값 (키가 아님!) 은 본질적으로 임의의 Python 객체일 수 있다는 것입니다. 이는 pickle 모듈이 처리할 수 있는 모든 것입니다. 여기에는 대부분의 클래스 인스턴스, 재귀적 데이터 유형 및 많은 공유 하위 객체를 포함하는 객체가 포함됩니다. 키는 일반적인 문자열입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 변수 저장

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# 선반 파일을 열고 데이터 저장
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## 변수 열기 및 읽기

```python
# 선반 파일을 열고 데이터 읽기
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # 키로 저장된 값에 접근
    print(shelf_file['wife'])
```

```output
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

딕셔너리와 마찬가지로 `shelf` 값에는 선반의 키와 값 목록과 유사한 값을 반환하는 `keys()` 및 `values()` 메서드가 있습니다. 이 메서드들은 실제 리스트 대신 목록과 유사한 값을 반환하므로, 리스트 형태로 얻으려면 `list()` 함수에 전달해야 합니다.

```python
# 선반의 모든 키와 값에 접근
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

```output
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/cheatsheet/dictionaries">치트시트: 딕셔너리</router-link>
- <router-link to="/cheatsheet/context-manager">치트시트: 컨텍스트 관리자</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
