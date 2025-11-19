---
title: 'Função Embutida Python open() - Folha de Dicas Python'
description: 'Abre um arquivo e retorna um objeto de arquivo correspondente. Se o arquivo não puder ser aberto, um OSError é levantado. Veja Leitura e Escrita de Arquivos para mais exemplos de como usar esta função.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in open() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Abre o arquivo e retorna um objeto de arquivo correspondente. Se o arquivo não puder ser aberto, um OSError é levantado. Veja <router-link to="/cheatsheet/file-directory-path">Leitura e Escrita de Arquivos</router-link> para mais exemplos de como usar esta função.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `open()` em Python é usada para abrir um arquivo e retorna um objeto de arquivo. É a maneira padrão de interagir com arquivos no seu sistema. Você pode especificar o modo para abrir o arquivo, como leitura, escrita ou anexação.

## Exemplos

```python
# Abre um arquivo totalmente novo (no modo 'x' levantará um erro se já existir)
spam = open('spam.txt', mode='x')
spam.write('Minha primeira linha\n\n')
spam.close()
```

```python
# Anexa ao arquivo e fecha automaticamente depois
with open('spam.txt', mode='a') as spam:
    spam.write('Minha segunda linha')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

```output
Minha primeira linha

Minha segunda linha
```

## Links Relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Caminho de Arquivo e Diretório</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Gerenciadores de Contexto (instrução with)</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Essenciais do Pathlib</router-link>
- <router-link to="/modules/os-module">Módulo: os</router-link>
- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
