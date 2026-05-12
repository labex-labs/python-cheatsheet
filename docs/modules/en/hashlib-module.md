---
title: Python Hashlib Module - Python Cheatsheet
description: The hashlib module provides secure hash functions such as SHA-256 and MD5.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Hashlib Module
</base-title>

The `hashlib` module provides secure hash functions such as SHA-256 and MD5.

```python
import hashlib
```

Hash functions turn data into a fixed-length digest. A small change in the input creates a very different digest.

## Creating a hash

You usually start by choosing an algorithm and passing bytes.

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

Strings must be encoded to bytes first:

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Updating incrementally

Hashes can be updated in chunks.

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Comparing algorithms

Different algorithms produce different digest sizes.

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

## Hashing a file

Read files in chunks so large files do not need to be loaded into memory all at once.

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
    Prefer modern algorithms such as SHA-256 or SHA-512 for new code. MD5 and SHA-1 are still useful for checksums, but they are not suitable for security-sensitive uses.
  </base-warning-content>
</base-warning>

## Relevant links

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/builtin/open">open()</router-link>
