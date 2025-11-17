---
title: 'Встроенная функция format() Python - Шпаргалка по Python'
description: 'Преобразует значение в «форматированное» представление, управляемое format_spec. Интерпретация format_spec зависит от типа аргумента value. [...].'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python format()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Преобразует значение в «отформатированное» представление, управляемое format_spec. Интерпретация format_spec будет зависеть от типа аргумента value. [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `format()` в Python — это универсальная встроенная функция, которая позволяет создавать отформатированные строки. Она предоставляет способ встраивать значения в строку, контролировать их выравнивание и указывать их представление, например, количество десятичных знаков или заполнение.

Функция <router-link to="/builtin/format">format()</router-link> форматирует указанное значение в указанный формат.

## Examples

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

## Relevant links

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String Formatting</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulating Strings</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
