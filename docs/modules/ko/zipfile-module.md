---
title: '파이썬 Zipfile 모듈 - 파이썬 치트 시트'
description: '이 모듈은 ZIP 파일을 생성, 읽기, 쓰기, 추가 및 나열하는 도구를 제공합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zipfile 모듈
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   이 모듈은 ZIP 파일을 생성, 읽기, 쓰기, 추가 및 나열하기 위한 도구를 제공합니다.
  </base-disclaimer-content>
</base-disclaimer>

## ZIP 파일 읽기

```python
import zipfile

# ZIP 파일 열기 및 내용 읽기
with zipfile.ZipFile('example.zip') as example_zip:
    # ZIP 내의 모든 파일 및 디렉토리 나열
    print(example_zip.namelist())
    # 특정 파일에 대한 메타데이터 가져오기
    spam_info = example_zip.getinfo('spam.txt')
    # 원본 파일 크기 출력
    print(spam_info.file_size)
    # 압축된 파일 크기 출력
    print(spam_info.compress_size)
    # 압축률 계산
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

출력:

```plaintext
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Compressed file is 3.63x smaller!
```

## ZIP 파일에서 압축 해제하기

ZipFile 객체의 `extractall()` 메서드는 ZIP 파일의 모든 파일과 폴더를 현재 작업 디렉토리에 압축 해제합니다.

```python
# ZIP 에서 모든 파일을 현재 디렉토리로 압축 해제
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

ZipFile 객체의 `extract()` 메서드는 ZIP 파일에서 단일 파일을 압축 해제합니다.

```python
# ZIP 에서 단일 파일 압축 해제
with zipfile.ZipFile('example.zip') as example_zip:
    # 현재 디렉토리로 압축 해제 (경로 반환)
    print(example_zip.extract('spam.txt'))
    # 특정 디렉토리로 압축 해제
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

출력:

```plaintext
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## ZIP 파일 생성 및 추가

```python
import zipfile

# 새 ZIP 파일 생성 및 파일 추가
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # 압축과 함께 파일 추가
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

이 코드는 spam.txt 의 압축된 내용을 포함하는 new.zip 이라는 새 ZIP 파일을 생성합니다.

## ZIP 파일 메타데이터 읽기

### namelist() 로 파일 이름 가져오기

```python
import zipfile

# ZIP 파일 읽기 및 모든 파일 이름 나열
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

출력:

```plaintext
['README.txt']
```

### infolist() 로 모든 메타데이터 가져오기

```python
import datetime
import zipfile

# ZIP 내의 모든 파일에 대한 상세 메타데이터 가져오기
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # 운영 체제 결정 (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # date_time 튜플을 datetime 객체로 변환
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Comment     : {info.comment}')
        print(f'Modified    : {modified}')
        print(f'System      : {system}')
        print(f'ZIP version : {info.create_version}')
        print(f'Compressed  : {info.compress_size} bytes')
        print(f'Uncompressed: {info.file_size} bytes')
```

출력:

```plaintext
README.txt
Comment     : b''
Modified    : 2022-11-15 06:48:02
System      : Unix
ZIP version : 30
Compressed  : 65 bytes
Uncompressed: 76 bytes
```

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/cheatsheet/file-directory-path">치트시트: 파일 및 디렉토리 경로</router-link>
- <router-link to="/cheatsheet/context-manager">치트시트: 컨텍스트 관리자</router-link>
- <router-link to="/modules/os-module">모듈: os</router-link>
- <router-link to="/modules/pathlib-module">모듈: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
