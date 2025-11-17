---
title: 'Python JSON и YAML - Справочник по Python'
description: 'JSON (JavaScript Object Notation) — это легкий формат для хранения и передачи данных. JSON часто используется при отправке данных с сервера на веб-страницу.'
labUrl: 'https://labex.io/ru/labs/python-python-json-and-yaml-633659?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON и YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON (JavaScript Object Notation) — это легковесный формат для хранения и передачи данных. JSON часто используется, когда данные отправляются с сервера на веб-страницу.

```python
# Read JSON file: json.load() parses JSON from file object
import json
with open("filename.json", "r") as f:  # Открыть файл в режиме чтения
    content = json.load(f)  # Разобрать JSON и вернуть Python dict/list
```

Запись в JSON файл с помощью:

```python
# Write JSON file: json.dump() writes Python object as JSON
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # Открыть файл в режиме записи
    json.dump(content, f, indent=2)  # Записать JSON с отступом в 2 пробела
```

## YAML

По сравнению с JSON, YAML обеспечивает гораздо лучшую читаемость человеком и дает возможность добавлять комментарии. Это удобный выбор для конфигурационных файлов, которые будут редактироваться человеком.

Существуют две основные библиотеки, позволяющие работать с YAML файлами:

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Установите их с помощью `pip install` в вашей виртуальной среде.

Первая проще в использовании, но вторая, Ruamel, гораздо лучше реализует спецификацию YAML и позволяет, например, изменять содержимое YAML без изменения комментариев.

Открыть YAML файл с помощью:

```python
# Read YAML file using ruamel.yaml library
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # Создать экземпляр парсера YAML
    yaml.load(f)  # Разобрать YAML и вернуть Python dict/list
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) — очень удобный пакет, позволяющий полностью абстрагироваться от базового формата конфигурационного файла. Он позволяет загружать словарь Python из JSON, YAML, TOML и других форматов.

Установите его с помощью:

```bash
pip install anyconfig
```

Использование:

```python
# anyconfig: load configuration files in various formats (JSON, YAML, TOML, etc.)
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # Автоматическое определение формата
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Чтение и запись файлов</router-link>
- <router-link to="/cheatsheet/dictionaries">Словари Python</router-link>
- <router-link to="/modules/json-module">Модуль json</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 основных операций с файловой системой, которые должен знать каждый разработчик</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
