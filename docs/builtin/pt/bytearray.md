---
title: 'Função Embutida Python bytearray() - Guia Rápido Python'
description: 'Retorna um novo array de bytes. A classe bytearray é uma sequência mutável de inteiros no intervalo [...]. Possui a maioria dos métodos usuais de sequências mutáveis, descritos em Tipos de Sequência Mutável, bem como a maioria dos métodos que o tipo bytes possui [...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python bytearray()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna um novo array de bytes. A classe bytearray é uma sequência mutável de inteiros no intervalo [...]. Ela possui a maioria dos métodos usuais de sequências mutáveis, descritos em Tipos de Sequência Mutável, bem como a maioria dos métodos que o tipo bytes possui [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `bytearray()` retorna um novo array de bytes. Este objeto é uma sequência mutável de inteiros no intervalo 0 <= x < 256. É essencialmente uma versão mutável do objeto `bytes`, o que significa que você pode alterar seu conteúdo depois de criado. Isso é útil para lidar com dados binários que precisam ser modificados no local.

## Exemplos

```python
# Cria um bytearray a partir de uma string com uma codificação específica
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

```output
bytearray(b'hello')
```

```python
# Cria um bytearray a partir de uma lista de inteiros
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

```output
bytearray(b'Hello')
```

```python
# Modifica um bytearray (é mutável)
ba2[0] = 104  # ASCII para 'h'
ba2.append(33)  # ASCII para '!'
print(ba2)
```

```output
bytearray(b'hello!')
```

## Links relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
