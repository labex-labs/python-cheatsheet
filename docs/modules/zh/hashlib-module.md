---
title: Python Hashlib 模块 - Python 速查表
description: `hashlib` 模块提供安全的哈希函数，例如 SHA-256 和 MD5。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Hashlib 模块
</base-title>

`hashlib` 模块提供安全的哈希函数，例如 SHA-256 和 MD5。

```python
import hashlib
```

哈希函数会把数据转换成固定长度的摘要。输入稍有变化，摘要结果就会非常不同。

## 创建哈希

通常先选择一种算法，并传入字节数据。

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

字符串必须先编码成字节：

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## 逐步更新

哈希值可以分块更新。

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## 比较算法

不同算法会生成不同长度的摘要。

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

## 对文件进行哈希

按块读取文件，这样大文件就不必一次性载入内存。

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
    在新代码中，优先使用 SHA-256 或 SHA-512 这类现代算法。MD5 和 SHA-1 仍然适合做校验和，但不适合用于安全敏感的场景。
  </base-warning-content>
</base-warning>

## 相关链接

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">速查表：读写文件</router-link>
- <router-link to="/builtin/open">open()</router-link>
