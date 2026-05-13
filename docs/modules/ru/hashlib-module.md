---
title: "Модуль Hashlib Python - Шпаргалка Python"
description: "Модуль `hashlib` предоставляет безопасные хеш-функции, такие как SHA-256 и MD5."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Hashlib Python
</base-title>

Модуль `hashlib` предоставляет безопасные хеш-функции, такие как SHA-256 и MD5.

```python
import hashlib
```

Хеш-функции преобразуют данные в дайджест фиксированной длины. Небольшое изменение входа дает совсем другой дайджест.

## Создание хеша

Обычно сначала выбирают алгоритм и передают байты.

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

Строки сначала нужно закодировать в байты.

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Постепенное обновление

Хеши можно обновлять по частям.

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Сравнение алгоритмов

Разные алгоритмы дают дайджесты разного размера.

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

## Хеширование файла

Читайте файлы по частям, чтобы не загружать большие файлы в память целиком.

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
    Для нового кода лучше выбирать современные алгоритмы, такие как SHA-256 или SHA-512. MD5 и SHA-1 все еще полезны для контрольных сумм, но не подходят для задач, чувствительных к безопасности.
  </base-warning-content>
</base-warning>

## Ссылки по теме

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: чтение и запись файлов</router-link>
- <router-link to="/builtin/open">open()</router-link>
