---
title: '파일 및 디렉토리 경로 - Python 치트 시트'
description: 'Python 에는 경로 조작을 다루는 두 가지 주요 모듈이 있습니다. 하나는 os.path 모듈이고 다른 하나는 pathlib 모듈입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
파일 및 디렉터리 경로 처리
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

실제 파일 시스템 작업에 대한 심층적인 내용은 블로그 게시물을 확인하세요: <router-link to="/blog/python-pathlib-essentials">모든 개발자가 알아야 할 10 가지 필수 파일 시스템 작업</router-link>.

Python 에서 경로 조작을 다루는 두 가지 주요 모듈이 있습니다.
하나는 <router-link to="/modules/os-module">os.path</router-link> 모듈이고 다른 하나는 <router-link to="/modules/pathlib-module">pathlib</router-link> 모듈입니다.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib 대 OS 모듈
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code>은 파일 이름 가져오기, 파일 확장자 가져오기, 파일을 수동으로 열지 않고 읽기/쓰기 등 위에 나열된 것보다 훨씬 더 많은 기능을 제공합니다. 더 자세히 알고 싶다면 <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">공식 문서</a>를 참조하세요.
  </base-disclaimer-content>
</base-disclaimer>

## Linux 및 Windows 경로

Windows 에서는 경로가 백슬래시 (`\`) 를 폴더 이름 사이의 구분 기호로 사용하여 작성됩니다. macOS, Linux 및 BSD 와 같은 Unix 기반 운영 체제에서는 슬래시 (`/`) 가 경로 구분 기호로 사용됩니다. 코드가 다른 플랫폼에서 작동해야 하는 경우 경로를 연결하는 것이 까다로울 수 있습니다.

다행히도 Python 의 `pathlib` 모듈은 이를 처리하는 쉬운 방법을 제공합니다.

\*nix 에서 `pathlib` 사용:

```python
# pathlib.Path: 크로스 플랫폼 경로 처리
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # 경로 구성 요소 결합
```

```output
usr/bin/spam
```

`pathlib`은 `/` 연산자를 사용하여 joinpath 에 대한 바로 가기도 제공합니다:

```python
# Path 연산자 (/): 경로를 결합하는 편리한 방법 (크로스 플랫폼)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # joinpath() 대신 / 연산자 사용
```

```output
usr/bin/spam
```

경로 구분 기호가 Windows 와 Unix 기반 운영 체제 간에 다르다는 점에 유의하세요. 이것이 바로 문자열을 연결하여 경로를 결합하는 대신 `pathlib`을 사용하려는 이유입니다.

경로를 결합하는 것은 동일한 디렉터리 아래에 다른 파일 경로를 생성해야 할 때 유용합니다.

\*nix 에서 `pathlib` 사용:

```python
# Path.home(): 사용자의 홈 디렉터리 가져오기, 파일 이름과 결합
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # 홈 디렉터리 경로 가져오기
for filename in my_files:
    print(home / filename)  # 홈 경로를 각 파일 이름과 결합
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 현재 작업 디렉터리

`pathlib`을 사용하여 현재 작업 디렉터리를 가져올 수 있습니다:

```python
# Path.cwd(): 현재 작업 디렉터리 가져오기
from pathlib import Path

print(Path.cwd())  # Path 객체로 현재 작업 디렉터리 반환
```

```output
/home/labex/project
```

## 새 폴더 만들기

\*nix 에서 `pathlib` 사용:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

이런, 심각한 오류가 발생했습니다! 'delicious' 디렉터리가 존재하지 않기 때문에 그 아래에 'walnut' 및 'waffles' 디렉터리를 만들 수 없습니다. 이를 수정하려면 다음을 수행하세요:

```python
# mkdir(parents=True): 필요한 경우 디렉터리와 모든 상위 디렉터리 생성
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # 중첩된 디렉터리 생성
```

그러면 모든 것이 잘 됩니다 :)

## 절대 경로 대 상대 경로

파일 경로를 지정하는 두 가지 방법이 있습니다.

- **절대 경로**: 항상 루트 폴더로 시작합니다.
- **상대 경로**: 프로그램의 현재 작업 디렉터리에 상대적입니다.

점 (`.`) 및 점두개 (`..`) 폴더도 있습니다. 이들은 실제 폴더는 아니지만 경로에서 사용할 수 있는 특수 이름입니다. 폴더 이름에 대한 단일 마침표 ("점") 는 "현재 디렉터리"의 약어입니다. 두 개의 마침표 ("점두개") 는 "상위 폴더"를 의미합니다.

### 절대 경로 처리

`pathlib`을 사용하여 경로가 절대 경로인지 확인하려면:

```python
from pathlib import Path
Path('/').is_absolute()
```

```output
True
```

```python
Path('..').is_absolute()
```

```output
False
```

`pathlib`을 사용하여 절대 경로를 추출할 수 있습니다:

```python
from pathlib import Path
print(Path.cwd())
```

```output
/home/labex/project
```

```python
print(Path('..').resolve())
```

```output
/home
```

### 상대 경로 처리

`pathlib`을 사용하여 시작 경로에서 다른 경로까지의 상대 경로를 가져올 수 있습니다:

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## 경로 및 파일 유효성 검사

### 파일/디렉터리 존재 여부 확인

\*nix 에서 `pathlib` 사용:

```python
from pathlib import Path

Path('.').exists()
```

```output
True
```

```python
Path('setup.py').exists()
```

```output
True
```

```python
Path('/etc').exists()
```

```output
True
```

```python
Path('nonexistentfile').exists()
```

```output
False
```

### 경로가 파일인지 확인

\*nix 에서 `pathlib` 사용:

```python
from pathlib import Path

Path('setup.py').is_file()
```

```output
True
```

```python
Path('/home').is_file()
```

```output
False
```

```python
Path('nonexistentfile').is_file()
```

```output
False
```

### 경로가 디렉터리인지 확인

\*nix 에서 `pathlib` 사용:

```python
from pathlib import Path

Path('/').is_dir()
```

```output
True
```

```python
Path('setup.py').is_dir()
```

```output
False
```

```python
Path('/spam').is_dir()
```

```output
False
```

## 파일 크기를 바이트 단위로 가져오기

\*nix 에서 `pathlib` 사용:

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat 에는 파일에 대한 다른 정보도 포함되어 있습니다
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # 바이트 단위 크기
```

```output
10024
```

## 디렉터리 나열

\*nix 에서 `pathlib`을 사용하여 디렉터리 내용 나열:

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

```output
...
/usr/bin/tiff2rgba
/usr/bin/iconv
/usr/bin/ldd
/usr/bin/cache_restore
/usr/bin/udiskie
/usr/bin/unix2dos
/usr/bin/t1reencode
/usr/bin/epstopdf
/usr/bin/idle3
...
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

\*nix 에서 `pathlib` 사용:

```python
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

```output
1903178911
```

## 파일 및 폴더 복사

`shutil` 모듈은 파일을 복사하는 함수와 전체 폴더를 복사하는 함수를 제공합니다.

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

```output
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

```output
/tmp/delicious/eggs2.txt
```

`shutil.copy()`는 단일 파일을 복사하는 반면, `shutil.copytree()`는 전체 폴더와 그 안에 포함된 모든 폴더 및 파일을 복사합니다:

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

```output
/tmp/bacon_backup
```

## 이동 및 이름 바꾸기

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs/bacon.txt
```

대상 경로에 파일 이름도 지정할 수 있습니다. 다음 예제에서는 소스 파일이 이동되고 이름이 바뀝니다:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

```output
/tmp/eggs/new_bacon.txt
```

eggs 폴더가 없으면 `move()`는 bacon.txt 의 이름을 eggs 라는 파일로 바꿉니다:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs
```

## 파일 및 폴더 삭제

- `Path.unlink()`을 호출하면 해당 경로의 파일이 삭제됩니다.
- `Path.rmdir()`을 호출하면 해당 경로의 폴더가 삭제됩니다. 이 폴더에는 파일이나 폴더가 없어야 합니다.
- `shutil.rmtree(path)`를 호출하면 해당 경로의 폴더가 제거되고 포함된 모든 파일 및 폴더도 삭제됩니다.

## 디렉터리 트리 순회

`Path` 객체에는 파일을 재귀적으로 반복하는 `rglob()` 메서드가 있습니다.

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

```output
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">파일 읽기 및 쓰기</router-link>
- <router-link to="/blog/python-pathlib-essentials">모든 개발자가 알아야 할 10 가지 필수 파일 시스템 작업</router-link>
- <router-link to="/builtin/open">open()</router-link>
