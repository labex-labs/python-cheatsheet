---
title: 'Função Embutida input() do Python - Folha de Dicas Python'
description: "Se o argumento 'prompt' estiver presente, ele é escrito na saída padrão sem uma nova linha final. A função então lê uma linha da entrada, a converte em uma string (removendo a nova linha final) e a retorna. Quando o EOF é lido, um EOFError é levantado."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in input() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Se o argumento prompt estiver presente, ele é escrito na saída padrão sem uma nova linha final. A função então lê uma linha da entrada, a converte em uma string (removendo uma nova linha final) e a retorna. Quando o EOF é lido, EOFError é levantado.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `input()` em Python é uma função built-in que permite que um programa leia uma linha de texto do teclado do usuário. É uma ferramenta essencial para criar aplicações interativas, pois pausa a execução do programa e espera que o usuário forneça a entrada. A função também pode exibir um prompt para guiar o usuário sobre o que inserir.

## Exemplos

Esta função recebe a entrada do usuário e a converte em uma string:

```python
# perguntar o nome
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

Saída:

```plaintext
What is your name?
Martha
Hi, Martha
```

`input()` também pode definir uma mensagem padrão sem usar `print()`:

```python
# mensagem padrão
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

Saída:

```plaintext
What is your name? Martha
Hi, Martha
```

## Links relevantes

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatação de String</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulação de Strings</router-link>
