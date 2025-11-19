---
title: 'Модуль Python JSON - Шпаргалка по Python'
description: 'В Python есть встроенный модуль json, который позволяет работать с данными JSON (JavaScript Object Notation).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль JSON в Python
</base-title>

JSON расшифровывается как JavaScript Object Notation и представляет собой легковесный формат для хранения и передачи данных. JSON часто используется, когда данные отправляются с сервера на веб-страницу.

В Python есть встроенный модуль `json`, который позволяет нам работать с данными JSON.

```python
import json
```

## Типы данных JSON

Объект JSON похож на словарь Python, но имеет следующие отличия:

- Ключи JSON всегда являются строками (string).
- Строки всегда заключаются в двойные кавычки.
- Логическое значение JSON начинается со строчных букв.
- `null` является эквивалентом Python `None` в JSON.

Типы данных, которые поддерживает JSON:

- String (Строка)
- Number (Число)
- boolean (Логическое значение)
- null
- Object (Объект)
- Array (Массив)

Пример:

```json
{
  "name": "Charles",
  "age": 33,
  "has_hair": false,
  "hobbies": ["photography", "running"],
  "appearance": {
    "eyes": "brown",
    "hair_color": null
  }
}
```

## Метод JSON loads()

С помощью метода `json.loads` вы можете разобрать (parse) объект JSON и преобразовать его в словарь Python:

```python
import json

# Строка JSON для разбора
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# Разбор строки JSON в словарь Python
python_person = json.loads(json_person)
python_person
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
```

```python
type(python_person)
```

```output
<class 'dict'>
```

```python
# Доступ к значению словаря с помощью метода get
python_person.get("name")
```

```output
'Charles'
```

## Метод JSON dumps()

Обратный процесс. Метод `dumps()` преобразует объект Python в строку JSON:

```python
import json

# Словарь Python для преобразования
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Преобразование объекта Python в строку JSON
json_person = json.dumps(python_person)

json_person
```

```output
'{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
```

```python
type(json_person)
```

```output
<class 'str'>
```

## Чтение и запись файлов JSON

### Чтение файла JSON

```python
import json
# Чтение файла JSON
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# Примечание: эта строка кажется избыточной - json_content уже разобран
json.loads(json_content)
```

```output
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### Запись файла JSON

```python
import json

person = {'name': 'Charles', 'age': 33}

# Запись словаря Python в файл JSON
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## Связанные ссылки

- <router-link to="/cheatsheet/json-yaml">Шпаргалка: JSON и YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">Шпаргалка: Словари</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: Чтение и запись файлов</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
