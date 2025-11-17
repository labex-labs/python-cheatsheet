---
title: 'Módulo JSON em Python - Folha de Dicas Python'
description: 'Python possui o módulo json integrado, que permite trabalhar com dados JSON (JavaScript Object Notation).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo JSON do Python
</base-title>

JSON significa JavaScript Object Notation e é um formato leve para armazenar e transportar dados. JSON é frequentemente usado quando dados são enviados de um servidor para uma página web.

Python tem o módulo embutido `json`, que nos permite trabalhar com dados JSON.

```python
import json
```

## Tipos de Dados JSON

Um objeto JSON é semelhante a um dicionário Python, mas tem as seguintes diferenças:

- As Chaves JSON são sempre strings.
- Strings estão sempre entre aspas duplas.
- Um booleano JSON começa com letras minúsculas.
- `null` é o equivalente JSON do `None` do Python.

Os tipos de dados que o JSON suporta são:

- String
- Number
- boolean
- null
- Object
- Array

Exemplo:

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

## Método JSON loads()

Com o método `json.loads`, você pode analisar um objeto JSON e transformá-lo em um dicionário Python:

```python
import json

# String JSON para analisar
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# Analisa a string JSON em um dicionário Python
python_person = json.loads(json_person)
python_person
```

Saída:

```plaintext
{'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
```

```python
type(python_person)
```

Saída:

```plaintext
<class 'dict'>
```

```python
# Acessa o valor do dicionário usando o método get
python_person.get("name")
```

Saída:

```plaintext
'Charles'
```

## Método JSON dumps()

O caminho inverso. O método `dumps()` transforma um objeto Python em uma string JSON:

```python
import json

# Dicionário Python para converter
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# Converte o objeto Python em uma string JSON
json_person = json.dumps(python_person)

json_person
```

Saída:

```plaintext
'{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
```

```python
type(json_person)
```

Saída:

```plaintext
<class 'str'>
```

## Leitura e Escrita de Arquivos JSON

### Leitura de um Arquivo JSON

```python
import json
# Lê o arquivo JSON
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# Nota: Esta linha parece redundante - json_content já está analisado
json.loads(json_content)
```

Saída:

```plaintext
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### Escrita de um Arquivo JSON

```python
import json

person = {'name': 'Charles', 'age': 33}

# Escreve o dicionário Python no arquivo JSON
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## Links Relevantes

- <router-link to="/cheatsheet/json-yaml">Cheatsheet: JSON e YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dicionários</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
