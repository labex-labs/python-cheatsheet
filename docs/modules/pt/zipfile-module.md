---
title: 'Módulo Zipfile do Python - Folha de Dicas Python'
description: 'Este módulo fornece ferramentas para criar, ler, escrever, anexar e listar um arquivo ZIP.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Zipfile do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Este módulo fornece ferramentas para criar, ler, escrever, anexar e listar um arquivo ZIP.
  </base-disclaimer-content>
</base-disclaimer>

## Lendo Arquivos ZIP

```python
import zipfile

# Abre o arquivo ZIP e lê seu conteúdo
with zipfile.ZipFile('example.zip') as example_zip:
    # Lista todos os arquivos e diretórios no ZIP
    print(example_zip.namelist())
    # Obtém metadados para um arquivo específico
    spam_info = example_zip.getinfo('spam.txt')
    # Imprime o tamanho original do arquivo
    print(spam_info.file_size)
    # Imprime o tamanho do arquivo compactado
    print(spam_info.compress_size)
    # Calcula a taxa de compressão
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

```output
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Compressed file is 3.63x smaller!
```

## Extraindo de Arquivos ZIP

O método `extractall()` para objetos ZipFile extrai todos os arquivos e pastas de um arquivo ZIP para o diretório de trabalho atual.

```python
# Extrai todos os arquivos do ZIP para o diretório atual
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

O método `extract()` para objetos ZipFile extrairá um único arquivo do arquivo ZIP:

```python
# Extrai um único arquivo do ZIP
with zipfile.ZipFile('example.zip') as example_zip:
    # Extrai para o diretório atual (retorna o caminho)
    print(example_zip.extract('spam.txt'))
    # Extrai para um diretório específico
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

```output
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## Criando e Adicionando a Arquivos ZIP

```python
import zipfile

# Cria um novo arquivo ZIP e adiciona um arquivo a ele
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # Adiciona arquivo com compressão
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

Este código criará um novo arquivo ZIP chamado new.zip que contém o conteúdo compactado de spam.txt.

## Lendo metadados de arquivos ZIP

### Obtendo os nomes dos arquivos com namelist()

```python
import zipfile

# Lê o arquivo ZIP e lista todos os nomes de arquivos
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

```output
['README.txt']
```

### Obtendo todos os metadados com infolist()

```python
import datetime
import zipfile

# Obtém metadados detalhados para todos os arquivos no ZIP
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # Determina o sistema operacional (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # Converte a tupla date_time para um objeto datetime
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Comment     : {info.comment}')
        print(f'Modified    : {modified}')
        print(f'System      : {system}')
        print(f'ZIP version : {info.create_version}')
        print(f'Compressed  : {info.compress_size} bytes')
        print(f'Uncompressed: {info.file_size} bytes')
```

```output
README.txt
Comment     : b''
Modified    : 2022-11-15 06:48:02
System      : Unix
ZIP version : 30
Compressed  : 65 bytes
Uncompressed: 76 bytes
```

## Links Relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Caminho de Arquivo e Diretório</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Gerenciadores de Contexto</router-link>
- <router-link to="/modules/os-module">Módulo: os</router-link>
- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
