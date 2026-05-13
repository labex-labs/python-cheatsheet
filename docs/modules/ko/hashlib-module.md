---
title: "Python Hashlib 모듈 - Python 치트시트"
description: "`hashlib` 모듈은 SHA-256, MD5 같은 안전한 해시 함수를 제공합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Hashlib 모듈
</base-title>

`hashlib` 모듈은 SHA-256, MD5 같은 안전한 해시 함수를 제공합니다.

```python
import hashlib
```

해시 함수는 데이터를 고정 길이 다이제스트로 바꿉니다. 입력이 조금만 달라도 결과 다이제스트는 크게 달라집니다.

## 해시 만들기

보통 알고리즘을 선택하고 bytes를 전달하는 것부터 시작합니다.

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

문자열은 먼저 bytes로 인코딩해야 합니다.

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## 점진적으로 업데이트하기

해시는 청크 단위로 업데이트할 수 있습니다.

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## 알고리즘 비교

알고리즘마다 다이제스트 크기가 다릅니다.

```python
print(hashlib.md5(b'abc').hexdigest())
print(hashlib.sha1(b'abc').hexdigest())
print(hashlib.sha256(b'abc').hexdigest())
```

```output
900150983cd24fb0d6963f7d28e17f72
a9993e364706816aba3e25717850c26c9cd0d89d
ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```

## 파일 해시 계산하기

큰 파일을 한 번에 메모리에 올리지 않도록 청크 단위로 읽습니다.

```python
import hashlib
from pathlib import Path

path = Path('example.txt')
path.write_text('hello world')

hasher = hashlib.sha256()
with path.open('rb') as file:
    for chunk in iter(lambda: file.read(8192), b''):
        hasher.update(chunk)

print(hasher.hexdigest())
path.unlink()
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    새 코드에서는 SHA-256이나 SHA-512 같은 현대적인 알고리즘을 우선 사용하세요. MD5와 SHA-1은 체크섬에는 여전히 유용하지만, 보안이 중요한 용도에는 적합하지 않습니다.
  </base-warning-content>
</base-warning>

## 관련 링크

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">치트시트: 파일 읽기와 쓰기</router-link>
- <router-link to="/builtin/open">open()</router-link>
