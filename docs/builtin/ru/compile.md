---
title: 'Встроенная функция compile() Python - Шпаргалка по Python'
description: 'Компилирует исходный код в объект кода или AST. Объекты кода могут быть выполнены с помощью exec() или eval(). source может быть обычной строкой, байтовой строкой или объектом AST. См. документацию модуля ast для получения информации о работе с объектами AST.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python compile()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Компилирует исходный код в объект кода или AST. Объекты кода могут быть выполнены с помощью <router-link to="/builtin/exec">exec()</router-link> или <router-link to="/builtin/eval">eval()</router-link>. source может быть обычной строкой, байтовой строкой или объектом AST. Обратитесь к документации модуля ast за информацией о том, как работать с объектами AST.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `compile()` в Python используется для преобразования строки или объекта Абстрактного Синтаксического Дерева (AST) в объект кода. Этот объект кода затем может быть выполнен такими функциями, как <router-link to="/builtin/exec">exec()</router-link> или <router-link to="/builtin/eval">eval()</router-link>.

## Example

Вот базовый пример того, как это работает:

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# Компилируем строку в объект кода
# Режим 'exec' используется для последовательности операторов.
# Режим 'eval' используется для одного выражения.
# Режим 'single' используется для одного интерактивного оператора.
code_object = compile(code_string, '<string>', 'exec')

# Выполняем объект кода
exec(code_object)
```

```output
Hello, world!
```

## Relevant links

- <router-link to="/cheatsheet/debugging">Cheatsheet: Отладка</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
