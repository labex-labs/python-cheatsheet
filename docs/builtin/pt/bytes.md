---
title: 'Função Embutida bytes() do Python - Guia Rápido Python'
description: 'Retorna um novo objeto “bytes”, que é uma sequência imutável de inteiros no intervalo [...]. bytes é uma versão imutável de bytearray – possui os mesmos métodos não mutáveis e o mesmo comportamento de indexação e fatiamento.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
A função built-in bytes() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna um novo objeto "bytes" que é uma sequência imutável de inteiros no intervalo de [...]. bytes é uma versão imutável de bytearray – tem os mesmos métodos não mutáveis e o mesmo comportamento de indexação e fatiamento.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

Em Python, o tipo `bytes` é uma sequência imutável de bytes únicos. Ele representa uma sequência de inteiros no intervalo de 0 a 255, que pode ser usada para representar dados binários como imagens, áudio ou outros tipos de arquivos.

Você pode criar um objeto bytes de várias maneiras. Uma maneira é usar o construtor `bytes()` e passar-lhe uma string, um objeto bytearray ou um objeto bytes. Por exemplo:

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

Saída:

```plaintext
b'Hello, World!'
```

Outra maneira é usar uma notação literal prefixando a string com `b` ou `B`:

```python
data = b"Hello, World!"
print(data)
```

Saída:

```plaintext
b'Hello, World!'
```

## Links Relevantes

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">Leitura e Escrita de Arquivos</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados Python</router-link>
