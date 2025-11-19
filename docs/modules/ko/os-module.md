---
title: 'Python OS 모듈 - Python 치트 시트'
description: '운영 체제 종속 기능을 이식성 있게 사용할 수 있도록 지원하는 모듈입니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OS 모듈
</base-title>

이 모듈은 운영 체제 종속적인 기능을 사용할 수 있는 이식 가능한 방법을 제공합니다.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib 대 OS 모듈
  </base-disclaimer-title>
  <base-disclaimer-content>
    <router-link to="/modules/pathlib-module">pathlib</router-link> 모듈은 파일 이름 가져오기, 파일 확장자 가져오기, 파일을 수동으로 열지 않고 읽기/쓰기와 같이 여기에 나열된 것보다 훨씬 더 많은 기능을 제공합니다. 더 자세히 알고 싶다면 <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">공식 문서</a>를 참조하십시오.
    <br>
    둘 다에 대해 더 자세히 알아보려면 <router-link to="/cheatsheet/file-directory-path">파일 및 디렉터리 경로</router-link> 페이지를 참조하십시오.
  </base-disclaimer-content>
</base-disclaimer>

## Linux 및 Windows 경로

Windows 에서는 폴더 이름 사이의 구분 기호로 백슬래시 (`\`) 를 사용하여 경로를 작성합니다. macOS, Linux 및 BSD 와 같은 Unix 기반 운영 체제에서는 경로 구분 기호로 슬래시 (`/`) 가 사용됩니다. 코드가 다른 플랫폼에서 작동해야 하는 경우 경로를 연결하는 것이 까다로울 수 있습니다.

다행히 Python 은 `os.path.join`을 제공하여 이를 처리합니다.

```python
import os

# OS 에 맞는 구분 기호를 사용하여 경로 구성 요소 연결
os.path.join('usr', 'bin', 'spam')
```

```output
usr\bin\spam
```

경로를 연결하는 것은 동일한 디렉터리 아래에 다른 파일 경로를 생성해야 할 때 유용합니다.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# 각 파일 이름을 기본 디렉터리와 연결
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 현재 작업 디렉터리

```python
import os

# 현재 작업 디렉터리 가져오기
os.getcwd()
```

```output
/home/labex/project
```

```python
# 현재 작업 디렉터리 변경
os.chdir('/usr/bin')

# 변경 사항 확인
os.getcwd()
```

```output
/usr/bin
```

## 새 폴더 만들기

```python
import os
# 디렉터리를 재귀적으로 생성 (필요한 경우 모든 상위 디렉터리 생성)
os.makedirs('/tmp/delicious/walnut/waffles')
```

## 절대 경로 대 상대 경로

파일 경로를 지정하는 두 가지 방법이 있습니다.

- **절대 경로**: 항상 루트 폴더로 시작합니다.
- **상대 경로**: 프로그램의 현재 작업 디렉터리에 상대적입니다.

또한 점 (`.`) 및 점 - 점 (`..`) 폴더도 있습니다. 이들은 실제 폴더가 아니라 경로에서 사용할 수 있는 특수 이름입니다. 폴더 이름의 단일 마침표 (“점”) 는“현재 디렉터리”의 약어입니다. 두 개의 마침표 (“점 - 점”) 는“상위 폴더”를 의미합니다.

### 절대 경로 처리

경로가 절대 경로인지 확인하려면:

```python
import os
# 경로가 절대 경로인지 확인 (루트로 시작)
os.path.isabs('/')
```

```output
True
```

```python
# 상대 경로는 False 반환
os.path.isabs('..')
```

```output
False
```

절대 경로를 추출할 수도 있습니다.

```python
import os
# 먼저 현재 디렉터리 가져오기
os.getcwd()
```

```output
/home/labex/project
```

```python
# 상대 경로를 절대 경로로 변환
os.path.abspath('..')
```

```output
/home
```

### 상대 경로 처리

시작 경로에서 다른 경로까지의 상대 경로를 얻을 수 있습니다.

```python
import os
# 시작 경로에서 대상 경로까지의 상대 경로 가져오기
os.path.relpath('/etc/passwd', '/')
```

```output
etc/passwd
```

## 경로 및 파일 유효성 검사

### 파일/디렉터리 존재 여부 확인

```python
import os

# 경로 존재 여부 확인 (파일 또는 디렉터리)
os.path.exists('.')
```

```output
True
```

```python
os.path.exists('setup.py')
```

```output
True
```

```python
os.path.exists('/etc')
```

```output
True
```

```python
os.path.exists('nonexistentfile')
```

```output
False
```

### 경로가 파일인지 확인

```python
import os

# 경로가 파일인지 확인
os.path.isfile('setup.py')
```

```output
True
```

```python
os.path.isfile('/home')
```

```output
False
```

```python
os.path.isfile('nonexistentfile')
```

```output
False
```

### 경로가 디렉터리인지 확인

```python
import os

# 경로가 디렉터리인지 확인
os.path.isdir('/')
```

```output
True
```

```python
os.path.isdir('setup.py')
```

```output
False
```

```python
os.path.isdir('/spam')
```

```output
False
```

## 파일 크기를 바이트 단위로 가져오기

```python
import os

# 파일 크기를 바이트 단위로 가져오기
os.path.getsize('/usr/bin/python3')
```

```output
776192
```

## 디렉터리 나열

```python
import os

# 지정된 경로의 모든 파일 및 디렉터리 나열
os.listdir('/usr/bin')
```

```output
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

## 디렉터리 파일 크기

<base-warning>
  <base-warning-title>
    경고
  </base-warning-title>
  <base-warning-content>
    디렉터리 자체에도 크기가 있습니다! 따라서 위 섹션에서 논의된 메서드를 사용하여 경로가 파일인지 디렉터리인지 확인하는 것이 좋습니다.
  </base-warning-content>
</base-warning>

```python
import os
total_size = 0

# 디렉터리 내 모든 파일의 총 크기 계산
for filename in os.listdir('/usr/bin'):
    # 디렉터리 경로와 파일 이름을 연결하고 크기 가져오기
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

```output
1117846456
```

## 파일 및 폴더 삭제

- `os.unlink(path)`를 호출하면 해당 경로의 파일이 삭제됩니다.

- `os.rmdir(path)`를 호출하면 해당 경로의 폴더가 삭제됩니다. 이 폴더에는 파일이나 폴더가 없어야 합니다.

## 디렉터리 트리 탐색

```python
import os

# 디렉터리 트리를 재귀적으로 탐색
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'현재 폴더는 {folder_name}')
    # 하위 디렉터리 반복
    for subfolder in subfolders:
        print(f'{folder_name}의 하위 폴더: {subfolder}')
    # 파일 반복
    for filename in filenames:
        print(f'{folder_name} 내부 파일: filename{filename}')
    print('')
```

```output
현재 폴더는 /tmp/delicious
/tmp/delicious의 하위 폴더: cats
/tmp/delicious의 하위 폴더: walnut
/tmp/delicious 내부 파일: spam.txt

현재 폴더는 /tmp/delicious/cats
/tmp/delicious/cats 내부 파일: catnames.txt
/tmp/delicious/cats 내부 파일: zophie.jpg

현재 폴더는 /tmp/delicious/walnut
/tmp/delicious/walnut의 하위 폴더: waffles

현재 폴더는 /tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles 내부 파일: butter.txt
```

## 관련 링크

- <router-link to="/cheatsheet/file-directory-path">치트 시트: 파일 및 디렉터리 경로</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">치트 시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/blog/python-pathlib-essentials">블로그: Pathlib 필수 사항</router-link>
- <router-link to="/modules/pathlib-module">모듈: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
