---
title: Módulo Hashlib do Python - Folha de Referência Python
description: O módulo `hashlib` fornece funções hash seguras como SHA-256 e MD5.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Hashlib do Python
</base-title>

O módulo `hashlib` fornece funções hash seguras como SHA-256 e MD5.

```python
import hashlib
```

Funções hash transformam dados em um digest de tamanho fixo. Uma pequena mudança na entrada gera um digest bem diferente.

## Criando um hash

Normalmente você começa escolhendo um algoritmo e passando bytes.

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

Strings precisam ser codificadas para bytes primeiro.

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Atualização incremental

Hashes podem ser atualizados em partes.

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Comparando algoritmos

Algoritmos diferentes produzem tamanhos de digest diferentes.

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

## Fazendo hash de um arquivo

Leia arquivos em partes para não precisar carregar arquivos grandes inteiros na memória.

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
    Para código novo, prefira algoritmos modernos como SHA-256 ou SHA-512. MD5 e SHA-1 ainda são úteis para checksums, mas não servem para usos sensíveis à segurança.
  </base-warning-content>
</base-warning>

## Links relacionados

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Folha de Referência: Leitura e escrita de arquivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
