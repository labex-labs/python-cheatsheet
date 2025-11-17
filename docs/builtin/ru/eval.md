---
title: 'Встроенная функция Python eval() - Шпаргалка по Python'
description: 'Аргументы: строка, а также необязательные словари globals и locals. Если предоставлен, globals должен быть словарем. Если предоставлен, locals может быть любым отображаемым объектом.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python eval()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Аргументами являются строка и необязательные globals и locals. Если предоставлены, globals должны быть словарем. Если предоставлены, locals может быть любым отображающим объектом.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `eval()` в Python разбирает строку как выражение Python и вычисляет его. Ее можно использовать для выполнения произвольного кода Python из строки, что может быть как мощным, так и рискованным. Она часто используется в ситуациях, когда необходимо вычислить динамически сгенерированные выражения, но ее следует использовать с осторожностью из-за потенциальных уязвимостей безопасности.

## Examples

```python
eval('1 + 4')
```

Output:

```plaintext
5
```

```python
eval('print("Hello World!")')
```

Output:

```plaintext
Hello World!
```

```python
x = 10
eval('x == 10')
```

Output:

```plaintext
True
```

Функция `eval()` также может использоваться с функцией <router-link to="/builtin/print">print()</router-link> для вывода результата в консоль.

## Relevant links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
