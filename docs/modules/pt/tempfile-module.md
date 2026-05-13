---
title: "Módulo Tempfile do Python - Folha de Referência Python"
description: "O módulo `tempfile` cria arquivos e diretórios temporários com segurança."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Tempfile do Python
</base-title>

O módulo `tempfile` cria arquivos e diretórios temporários com segurança.

```python
import tempfile
```

Use `tempfile` para dados que devem existir apenas enquanto o programa estiver em execução, como saída de testes, downloads ou arquivos intermediários.

## TemporaryFile()

`TemporaryFile` cria um objeto de arquivo que é limpo automaticamente.

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

O arquivo é removido automaticamente quando o bloco `with` termina.

## NamedTemporaryFile()

`NamedTemporaryFile` fornece um caminho no disco.

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

Isso é útil quando outra API precisa de um nome de arquivo em vez de um objeto de arquivo.

## TemporaryDirectory()

Diretórios temporários são úteis para testes e espaços de trabalho de curta duração.

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

Os arquivos dentro do diretório são removidos junto com ele quando o bloco termina.

## Escolhendo um local temporário

`gettempdir()` mostra o diretório usado por padrão pelo Python.

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## Links relacionados

- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Folha de Referência: Leitura e escrita de arquivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
