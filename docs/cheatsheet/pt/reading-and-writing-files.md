---
title: 'Leitura e Escrita de Arquivos - Guia Rápido Python'
description: "Para ler/escrever em um arquivo no Python, use a instrução 'with', que fechará o arquivo automaticamente, gerenciando os recursos disponíveis para você."
labUrl: 'https://labex.io/pt/labs/python-python-reading-and-writing-files-633663?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Leitura e Escrita de Arquivos
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Para um olhar mais aprofundado sobre a manipulação de caminhos de arquivos e diretórios, consulte a página <router-link to="/cheatsheet/file-directory-path">Caminhos de Arquivos e Diretórios</router-link>.

## O processo de Leitura/Escrita de arquivos

Para ler/escrever em um arquivo em Python, você desejará usar a instrução `with`, que fechará o arquivo para você após terminar, gerenciando os recursos disponíveis.

## Abrindo e lendo arquivos

A função `open` abre um arquivo e retorna um objeto de arquivo correspondente.

```python
# Ler arquivo usando a instrução 'with': fecha automaticamente o arquivo ao terminar
with open('/home/labex/project/hi.txt') as hello_file:
    hello_content = hello_file.read()  # Lê o conteúdo inteiro do arquivo

hello_content
```

```output
'Hello World!'
```

Alternativamente, você pode usar o método _readlines()_ para obter uma lista de valores de string do arquivo, uma string para cada linha de texto:

```python
# Método readlines(): retorna lista de strings, uma por linha
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()  # Retorna lista com cada linha como uma string
```

```output
['When, in disgrace with fortune and men's eyes,\n',
 ' I all alone beweep my  outcast state,\n',
 "And trouble deaf heaven with my bootless cries,\n",
 "And look upon myself and curse my fate,']
```

Você também pode iterar pelo arquivo linha por linha:

```python
# Iterar pelo arquivo linha por linha (eficiente em memória para arquivos grandes)
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file:  # O objeto de arquivo é iterável
        print(line, end='')  # Imprime sem nova linha extra
```

```output
When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
```

## Escrevendo em arquivos

```python
# Escrever no arquivo: o modo 'w' sobrescreve o arquivo existente
with open('bacon.txt', 'w') as bacon_file:  # 'w' = modo de escrita
    bacon_file.write('Hello world!\n')  # Retorna o número de caracteres escritos
```

```output
13
```

```python
# Anexar ao arquivo: o modo 'a' anexa ao arquivo existente
with open('bacon.txt', 'a') as bacon_file:  # 'a' = modo de anexar
    bacon_file.write('Bacon is not a vegetable.')
```

```output
25
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

```output
Hello world!
Bacon is not a vegetable.
```

## Links relevantes

- <router-link to="/cheatsheet/file-directory-path">Caminhos de Arquivos e Diretórios</router-link>
- <router-link to="/cheatsheet/json-yaml">JSON e YAML</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operações Essenciais do Sistema de Arquivos que Todo Desenvolvedor Deve Conhecer</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/print">print()</router-link>
