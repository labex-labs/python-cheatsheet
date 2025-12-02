---
title: 'Python 서브프로세스 모듈 - Python 치트 시트'
description: 'subprocess 모듈은 시스템 프로세스를 시작하고 관리할 수 있게 해줍니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Subprocess 모듈
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html)는 새로운 시스템 프로세스를 생성하고, 해당 프로세스의 입력/출력/오류 스트림에 연결하며, 반환 코드를 얻을 수 있게 해주는 내장 모듈입니다.

```python
import subprocess
```

## 시스템 명령어 실행하기

`run` 함수는 시스템 명령어를 실행하는 데 사용됩니다.

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

명령어를 리스트 대신 단일 문자열로 실행하려면 다음을 사용합니다:

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

두 방법 모두 자동으로 출력을 터미널에 인쇄합니다.

<base-warning>
  <base-warning-title>
    경고
  </base-warning-title>
  <base-warning-content>
    신뢰할 수 없는 입력에는 `shell=True` 사용을 피하십시오 (쉘 인젝션 위험).
  </base-warning-content>
</base-warning>

## 출력 캡처하기

출력을 캡처하려면 `capture_output`을 `True`로 설정합니다:

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

여기서 `text=True`는 함수에게 출력을 바이트가 아닌 텍스트로 읽도록 지시합니다.

`returncode`가 0 이면 성공을 나타내며, 0 이 아닌 값은 오류를 나타냅니다.

## 오류 확인하기

반환 코드를 사용하여 성공 여부를 확인할 수 있지만, 더 파이썬스러운 방법이 있습니다:

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

`check`가 `True`로 설정되어 있고 반환 코드가 0 이 아닌 경우 (작업 실패), subprocess 는 `subprocess.CalledProcessError`를 발생시키며, 이는 일반적인 방식으로 except 블록을 사용하여 처리할 수 있습니다.

## 타임아웃을 가진 명령어 실행하기

프로세스에 타임아웃을 설정할 수 있습니다. 지정된 시간보다 오래 걸리면 `subprocess.TimeoutExpired`가 발생합니다:

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## 출력을 파일에 쓰기

출력을 파일로 리디렉션하려면 `stdout` (필요한 경우 `stderr`도) 을 파일 객체로 설정합니다:

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

여기서 일반 출력과 오류 모두 생성된 순서대로 파일에 나타납니다.

**참고:** `text=True`는 파이썬에서 출력을 문자열로 조작하려는 경우 유용합니다. 출력을 파일로 직접 리디렉션할 때는 필수가 아닙니다.

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기 및 쓰기</router-link>
- <router-link to="/cheatsheet/file-directory-path">치트시트: 파일 및 디렉토리 경로</router-link>
- <router-link to="/cheatsheet/exception-handling">치트시트: 예외 처리</router-link>
- <router-link to="/modules/os-module">모듈: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
