---
title: 'Módulo Shelve Python - Guia Rápido Python'
description: "Uma 'prateleira' (shelf) é um objeto persistente, semelhante a um dicionário. Em uma prateleira podem estar essencialmente objetos Python arbitrários — tudo o que o módulo pickle pode manipular."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Shelve do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/shelve.html">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Uma “prateleira” (shelf) é um objeto persistente, semelhante a um dicionário. A diferença em relação aos bancos de dados “dbm” é que os valores (não as chaves!) em uma prateleira podem ser essencialmente objetos Python arbitrários — qualquer coisa que o módulo pickle possa manipular. Isso inclui a maioria das instâncias de classe, tipos de dados recursivos e objetos que contêm muitos sub-objetos compartilhados. As chaves são strings comuns.
  </base-disclaimer-content>
</base-disclaimer>

## Salvar variáveis

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# Abrir arquivo de prateleira e salvar dados
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## Abrir e ler variáveis

```python
# Abrir arquivo de prateleira e ler dados
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # Acessar valor armazenado pela chave
    print(shelf_file['wife'])
```

Output:

```plaintext
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

Assim como os dicionários, os valores de `shelf` têm métodos `keys()` e `values()` que retornarão valores semelhantes a listas das chaves e valores na prateleira. Como esses métodos retornam valores semelhantes a listas em vez de listas verdadeiras, você deve passá-los para a função `list()` para obtê-los em formato de lista.

```python
# Acessar todas as chaves e valores na prateleira
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

Output:

```plaintext
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## Links relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dicionários</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Gerenciadores de Contexto</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
