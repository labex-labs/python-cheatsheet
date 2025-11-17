---
title: 'Python Pathlib 모듈 - Python 치트 시트'
description: 'pathlib 모듈은 Python 3.4 에 추가되었으며 파일 시스템 경로를 객체 지향 방식으로 처리하는 방법을 제공합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Pathlib 모듈
</base-title>

실용적인 파일 시스템 작업에 대한 심층적인 내용은 블로그 게시물을 확인하세요: <router-link to="/blog/python-pathlib-essentials">모든 개발자가 알아야 할 10 가지 필수 파일 시스템 작업</router-link>.

`pathlib` 모듈은 Python 3.4 에 추가되었으며 파일 시스템 경로를 처리하는 객체 지향적인 방법을 제공합니다.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib 대 OS 모듈
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code>은 파일 이름 가져오기, 파일 확장자 가져오기, 파일을 수동으로 열지 않고 읽기/쓰기 등 여기에 나열된 <code>os</code>의 기능보다 훨씬 더 많은 기능을 제공합니다. 더 자세히 알고 싶다면 <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">공식 문서</a>를 참조하세요.
    <br>
    두 가지를 더 자세히 살펴보려면 <router-link to="/cheatsheet/file-directory-path">파일 및 디렉터리 경로</router-link> 페이지를 참조하세요.
  </base-disclaimer-content>
</base-disclaimer>

## Linux 및 Windows 경로

Windows 에서는 폴더 이름 사이의 구분 기호로 백슬래시 (`\`) 를 사용하여 경로를 작성합니다. macOS, Linux 및 BSD 와 같은 Unix 기반 운영 체제에서는 경로 구분 기호로 슬래시 (`/`) 를 사용합니다. 코드가 다른 플랫폼에서 작동해야 하는 경우 경로를 연결하는 것이 까다로울 수 있습니다.

다행히 Python 은 `pathlib.Path.joinpath`를 제공하여 이를 쉽게 처리할 수 있습니다.

```python
from pathlib import Path

# 경로 구성 요소 연결
print(Path('usr').joinpath('bin').joinpath('spam'))
```

출력:

```plaintext
usr/bin/spam
```

`pathlib`은 `/` 연산자를 사용하여 joinpath 에 대한 바로 가기도 제공합니다.

```python
from pathlib import Path

# 경로 연결을 위해 / 연산자 사용
print(Path('usr') / 'bin' / 'spam')
```

출력:

```plaintext
usr/bin/spam
```

동일한 디렉터리 아래에 다른 파일 경로를 생성해야 하는 경우 경로 연결이 유용합니다.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# 사용자 홈 디렉터리 가져오기
home = Path.home()
# 각 파일 이름을 홈 디렉터리와 연결
for filename in my_files:
    print(home / filename)
```

출력:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 현재 작업 디렉터리

```python
from pathlib import Path
from os import chdir

# 현재 작업 디렉터리 가져오기
print(Path.cwd())
```

출력:

```plaintext
/home/labex/project
```

```python
# os 모듈을 사용하여 디렉터리 변경
chdir('/usr/lib/python3.10')
# 현재 디렉터리 확인
print(Path.cwd())
```

출력:

```plaintext
/usr/lib/python3.10
```

## 새 폴더 만들기

```python
from pathlib import Path
cwd = Path.cwd()
# 디렉터리 생성 (상위 디렉터리가 존재하지 않으면 실패함)
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

이 오류의 이유는 'delicious' 디렉터리가 존재하지 않으므로 그 아래에 'walnut' 및 'waffles' 디렉터리를 만들 수 없기 때문입니다. 이를 수정하려면 다음을 수행합니다.

```python
from pathlib import Path
cwd = Path.cwd()
# 모든 상위 디렉터리를 포함하여 디렉터리 생성
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## 절대 경로 대 상대 경로

파일 경로를 지정하는 두 가지 방법이 있습니다.

- **절대 경로**: 항상 루트 폴더로 시작합니다.
- **상대 경로**: 프로그램의 현재 작업 디렉터리에 상대적입니다.

또한 점 (`.`) 및 점 - 점 (`..`) 폴더도 있습니다. 이들은 실제 폴더가 아니라 경로에서 사용할 수 있는 특수 이름입니다. 폴더 이름에 대한 단일 마침표 ("점") 는 "이 디렉터리"의 약어입니다. 두 개의 마침표 ("점 - 점") 는 "상위 폴더"를 의미합니다.

### 절대 경로 처리

경로가 절대 경로인지 확인하려면:

```python
from pathlib import Path
# 경로가 절대 경로인지 확인
Path('/').is_absolute()
```

출력:

```plaintext
True
```

```python
# 상대 경로는 False 를 반환
Path('..').is_absolute()
```

출력:

```plaintext
False
```

절대 경로를 추출할 수도 있습니다.

```python
from pathlib import Path
# 현재 디렉터리 가져오기
print(Path.cwd())
```

출력:

```plaintext
/home/labex/project
```

```python
# 상대 경로를 절대 경로로 변환
print(Path('..').resolve())
```

출력:

```plaintext
/home
```

### 상대 경로 처리

시작 경로에서 다른 경로까지의 상대 경로를 가져올 수 있습니다.

```python
from pathlib import Path
# 기준 경로에서 상대 경로 가져오기
print(Path('/etc/passwd').relative_to('/'))
```

출력:

```plaintext
etc/passwd
```

## 경로 및 파일 유효성 검사

### 파일/디렉터리 존재 여부 확인

```python
from pathlib import Path

# 경로 존재 여부 확인
Path('.').exists()
```

출력:

```plaintext
True
```

```python
Path('setup.py').exists()
```

출력:

```plaintext
True
```

```python
Path('/etc').exists()
```

출력:

```plaintext
True
```

```python
Path('nonexistentfile').exists()
```

출력:

```plaintext
False
```

### 경로가 파일인지 확인

```python
from pathlib import Path

# 경로가 파일인지 확인
Path('setup.py').is_file()
```

출력:

```plaintext
True
```

```python
Path('/home').is_file()
```

출력:

```plaintext
False
```

```python
Path('nonexistentfile').is_file()
```

출력:

```plaintext
False
```

### 경로가 디렉터리인지 확인

```python
from pathlib import Path

# 경로가 디렉터리인지 확인
Path('/').is_dir()
```

출력:

```plaintext
True
```

```python
Path('setup.py').is_dir()
```

출력:

```plaintext
False
```

```python
Path('/spam').is_dir()
```

출력:

```plaintext
False
```

## 파일 크기를 바이트 단위로 가져오기

```python
from pathlib import Path

# 파일 통계 가져오기
stat = Path('/bin/python3.10').stat()
print(stat) # stat 에는 파일에 대한 다른 정보도 포함되어 있습니다
```

출력:

```plaintext
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# stat 객체에서 파일 크기 액세스
print(stat.st_size) # 바이트 단위 크기
```

출력:

```plaintext
10024
```

## 디렉터리 나열

```python
from pathlib import Path

# 디렉터리 내용 반복
for f in Path('/usr/bin').iterdir():
    print(f)
```

출력:

```plaintext
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

```python
from pathlib import Path

# 디렉터리 내 모든 파일의 총 크기 계산
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

출력:

```plaintext
1903178911
```

## 파일 및 폴더 삭제

- `Path.unlink()`을 호출하면 해당 경로의 파일이 삭제됩니다.

- `Path.rmdir()`을 호출하면 해당 경로의 폴더가 삭제됩니다. 이 폴더에는 파일이나 폴더가 없어야 합니다.

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">치트 시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/modules/os-module">모듈: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
