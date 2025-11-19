---
title: 'Função Embutida print() do Python - Folha de Dicas Python'
description: 'Imprime objetos no fluxo de texto do arquivo, separados por sep e seguidos por end. sep, end, file e flush, se presentes, devem ser fornecidos como argumentos de palavra-chave.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in print() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Imprime objetos no fluxo de texto arquivo, separados por sep e seguidos por end. sep, end, file e flush, se presentes, devem ser fornecidos como argumentos de palavra-chave.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `print()` escreve o valor do(s) argumento(s) que recebe. [...] ela lida com múltiplos argumentos, quantidades de ponto flutuante e strings. Strings são impressas sem aspas, e um espaço é inserido entre os itens, para que você possa formatar as coisas de forma agradável:

```python
print('Hello world!')
```

```output
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

```output
Hello world! 1
```

## A palavra-chave end

O argumento de palavra-chave `end` pode ser usado para evitar a nova linha após a saída, ou terminar a saída com uma string diferente:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

```output
printed-with-a-dash-in-between-
```

## A palavra-chave sep

A palavra-chave `sep` especifica como separar os objetos, se houver mais de um:

```python
print('cats', 'dogs', 'mice', sep=',')
```

```output
cats,dogs,mice
```

## Links relevantes

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formatação de Strings</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulação de Strings</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
