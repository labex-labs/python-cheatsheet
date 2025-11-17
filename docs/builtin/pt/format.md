---
title: 'Função Embutida format() do Python - Folha de Dicas Python'
description: 'Converte um valor para uma representação “formatada”, conforme controlado por format_spec. A interpretação de format_spec dependerá do tipo do argumento value. [...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in format() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Converte um valor para uma representação "formatada", conforme controlado por format_spec. A interpretação de format_spec dependerá do tipo do argumento value. [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `format()` em Python é uma função built-in versátil que permite criar strings formatadas. Ela fornece uma maneira de incorporar valores em uma string, controlar seu alinhamento e especificar sua apresentação, como o número de casas decimais ou o preenchimento.

A função <router-link to="/builtin/format">format()</router-link> formata um valor especificado em um formato especificado.

## Exemplos

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatting string (faster and easier)
print(f"My name is {name} and I work for {company}.")
```

Output:

```plaintext
My name is Micheal and I work for Dunder Mifflin.
My name is Micheal and I work for Dunder Mifflin.
```

## Links relevantes

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatação de Strings</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulação de Strings</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
