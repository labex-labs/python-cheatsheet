---
title: 'Встроенная функция Python open() - Шпаргалка по Python'
description: 'Открывает файл и возвращает соответствующий файловый объект. Если файл не может быть открыт, вызывается OSError. См. раздел Чтение и запись файлов для получения дополнительных примеров использования этой функции.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python open()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Открывает файл и возвращает соответствующий файловый объект. Если файл не может быть открыт, вызывается OSError. См. <router-link to="/cheatsheet/file-directory-path">Чтение и запись файлов</router-link> для получения дополнительных примеров использования этой функции.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `open()` в Python используется для открытия файла и возвращает файловый объект. Это стандартный способ взаимодействия с файлами в вашей системе. Вы можете указать режим открытия файла, например, чтение (`read`), запись (`write`) или добавление (`append`).

## Примеры

```python
# Открывает совершенно новый файл (в режиме 'x' вызовет ошибку, если он уже существует)
spam = open('spam.txt', mode='x')
spam.write('My first line\n\n')
spam.close()
```

```python
# Добавляет содержимое в файл и автоматически закрывает его после этого
with open('spam.txt', mode='a') as spam:
    spam.write('My second line')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

```output
My first line

My second line
```

## Связанные ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: Чтение и запись файлов</router-link>
- <router-link to="/cheatsheet/file-directory-path">Шпаргалка: Путь к файлу и каталогу</router-link>
- <router-link to="/cheatsheet/context-manager">Шпаргалка: Менеджеры контекста (оператор with)</router-link>
- <router-link to="/blog/python-pathlib-essentials">Блог: Основы Pathlib</router-link>
- <router-link to="/modules/os-module">Модуль: os</router-link>
- <router-link to="/modules/pathlib-module">Модуль: pathlib</router-link>
