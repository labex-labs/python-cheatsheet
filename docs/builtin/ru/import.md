---
title: 'Встроенная функция Python __import__() - Справочник по Python'
description: 'Эта функция вызывается оператором import. Ее можно заменить [...] для изменения семантики оператора импорта, но это крайне не рекомендуется, так как обычно проще использовать хуки импорта [...]. Прямое использование __import__() также не рекомендуется в пользу importlib.import_module().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python `__import__`
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Эта функция вызывается оператором import. Ее можно заменить [...] для изменения семантики оператора import, но это настоятельно не рекомендуется, поскольку обычно проще использовать хуки импорта [...]. Прямое использование __import__() также не рекомендуется в пользу importlib.import_module().
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Встроенная функция `__import__()` — это базовая функция, которая вызывается оператором `import`. Хотя возможно использовать ее напрямую, это, как правило, не рекомендуется. Для динамического импорта модулей рекомендуется использовать функцию `importlib.import_module()`.

### Пример

Вот как можно использовать `__import__()` для динамического импорта модуля `math`:

```python
# Динамический импорт модуля 'math'
math_module = __import__('math')

# Теперь вы можете использовать его как обычный импорт
print(math_module.sqrt(4))
```

Вывод:

```plaintext
2.0
```

Однако рекомендуемый способ с использованием `importlib`:

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

Вывод:

```plaintext
2.0
```

## Соответствующие ссылки

- <router-link :to="'/modules/importlib'">Модуль importlib</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Проекты Python с Poetry и VS Code (Часть 1)</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
