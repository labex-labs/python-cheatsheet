---
title: 'Встроенная функция Python globals() - Шпаргалка по Python'
description: 'Возвращает словарь, реализующий текущее пространство имен модуля. Для кода внутри функций это устанавливается при определении функции и остается неизменным независимо от того, где функция вызывается.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python globals()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает словарь, реализующий текущее пространство имен модуля. Для кода внутри функций оно устанавливается при определении функции и остается неизменным независимо от того, где вызывается функция.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `globals()` в Python возвращает словарь, представляющий текущую глобальную таблицу символов. Она включает все глобальные переменные, функции и другие объекты в текущей области видимости.

Она может быть полезна для инспектирования глобального пространства имен или для динамического доступа к глобальным переменным по их строковым именам.

### Примеры

```python
# Определяем глобальную переменную
global_var = "I am global"

def my_function():
    # Доступ к глобальным переменным с помощью globals()
    global_dict = globals()
    print(global_dict["global_var"])

    # Изменяем глобальную переменную
    global_dict["global_var"] = "Modified global"

my_function()
print(global_var)
```

Вывод:

```plaintext
I am global
Modified global
```

Вы также можете использовать `globals()` для создания новых глобальных переменных изнутри функции:

```python
def create_global():
    globals()["new_global"] = "This was created dynamically"

create_global()
print(new_global)
```

Вывод:

```plaintext
This was created dynamically
```

## Связанные ссылки

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
