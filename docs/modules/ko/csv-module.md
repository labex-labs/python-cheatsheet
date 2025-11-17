---
title: 'Python CSV 모듈 - Python 치트 시트'
description: 'Python 에는 CSV 파일을 쉽게 다룰 수 있게 해주는 csv 모듈이 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python CSV 모듈
</base-title>

csv 모듈은 데이터 교환에 흔히 사용되는 CSV 파일로부터 읽고 쓰는 도구를 제공합니다.

<base-disclaimer>
  <base-disclaimer-title>
    csv 모듈 대 수동 파일 읽기 - 쓰기
  </base-disclaimer-title>
  <base-disclaimer-content>
    기본 파일 작업과 문자열 메서드 (예: <code>read</code> 또는 <code>write</code> 및 <code>split()</code>이 포함된 <code>open()</code>) 를 사용하여 CSV 파일을 읽고 쓸 수는 있지만, <code>csv</code> 모듈은 따옴표로 묶인 필드, 내장된 구분 기호, 다른 줄 바꿈과 같은 엣지 케이스를 처리하도록 설계되었습니다. 이는 다른 프로그램 (예: Excel) 에서 생성된 CSV 파일과의 호환성을 보장하고 구문 분석 오류의 위험을 줄여줍니다. 대부분의 CSV 작업에는 수동 구문 분석보다 <code>csv</code> 모듈을 선호해야 합니다.
    <br>
    파일 처리 기본 사항에 대한 자세한 내용은 <router-link to="/cheatsheet/file-directory-path">파일 및 디렉터리 경로</router-link> 페이지를 참조하십시오.
  </base-disclaimer-content>
</base-disclaimer>

시작하려면 모듈을 가져옵니다:

```python
import csv
```

## csv.reader()

이 함수는 [문자열의 반복 가능 객체](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format)인 파일을 받습니다. 즉, 다음과 같이 열린 파일이어야 합니다.

```python
import csv

file_path = 'file.csv'

# CSV 파일 읽기
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # 각 행 반복
  for line in reader:
    print(line)
```

이 함수는 리더 객체를 반환하며, 이를 쉽게 반복하여 각 행을 얻을 수 있습니다. 해당 행의 각 열은 내장 함수 [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split)을 사용할 필요 없이 인덱스로 접근할 수 있습니다.

## csv.writer()

이 함수는 reader 함수와 유사하게 CSV 파일로 쓰기 위한 파일을 받으며, 다음과 같이 호출되어야 합니다.

```python
import csv

file_path = 'file.csv'

# CSV 쓰기를 위해 파일 열기
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # 무언가를 수행
```

"무언가를 수행" 블록은 다음 함수들을 사용하여 대체될 수 있습니다.

### writer.writerow()

CSV 파일에 단일 행을 씁니다.

```python
# 헤더 행 쓰기
writer.writerow(['name', 'age', 'city'])
# 데이터 행 쓰기
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

여러 행을 한 번에 씁니다.

```python
# 여러 행 준비
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# 모든 행 한 번에 쓰기
writer.writerows(rows)
```

## csv.DictReader

CSV 파일을 읽고 파일의 첫 번째 행을 기본적으로 키 (열 헤더) 로 사용하여 각 행을 사전 (dictionary) 으로 접근할 수 있게 해줍니다.

```python
import csv

# 딕셔너리로 CSV 읽기 (첫 번째 행이 키가 됨)
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # 인덱스 대신 이름으로 열 접근
    for row in reader:
        print(row['name'], row['age'])
```

- 각 `row`는 `OrderedDict`(Python 3.8 이상에서는 일반 `dict`) 입니다.
- CSV 에 헤더가 없는 경우, `fieldnames` 매개변수를 사용하여 헤더를 제공할 수 있습니다.

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

사전 (dictionary) 을 CSV 파일의 행으로 쓸 수 있게 해줍니다. 작성자를 생성할 때 필드 이름 (열 헤더) 을 지정해야 합니다.

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# 딕셔너리를 CSV 에 쓰기
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # 헤더 행을 씁니다
    writer.writerows(rows)
```

- `writer.writeheader()`를 사용하여 열 헤더를 첫 번째 행으로 씁니다.
- `writer.writerows()`의 각 딕셔너리는 작성자 생성 시 지정된 `fieldnames`와 일치하는 키를 가져야 합니다.

## csv.reader() 및 csv.writer() 에 대한 추가 매개변수

### delimiter

필드를 구분하는 데 사용되는 문자를 지정합니다. 파일 유형에서 알 수 있듯이 기본값은 쉼표 (,) 입니다. 로캘에 따라 Excel 은 세미콜론을 구분 기호로 사용하는 csv 파일을 생성할 수 있습니다.

```python
import csv

# 세미콜론 구분 기호로 CSV 읽기
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

줄을 끝내는 데 사용되는 문자 또는 문자 시퀀스입니다. 가장 일반적인 것은 "\r\n"이지만 "\n"일 수도 있습니다.

### quotechar

특수 문자를 포함하는 필드를 따옴표로 묶는 데 사용되는 문자입니다 (기본값은 `"`).

```python
# 따옴표 문자로 작은따옴표 사용
reader = csv.reader(csvfile, quotechar="'")
```

더 자세한 내용은 <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">공식 Python csv 모듈 설명서</a>를 참조하십시오.
