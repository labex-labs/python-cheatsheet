---
title: 'Python JSON e YAML - Folha de Dicas Python'
description: 'JSON (JavaScript Object Notation) é um formato leve para armazenar e transportar dados. JSON é frequentemente usado quando dados são enviados de um servidor para uma página web.'
labUrl: 'https://labex.io/pt/labs/python-python-json-and-yaml-633659?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON e YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON significa JavaScript Object Notation e é um formato leve para armazenar e transportar dados. JSON é frequentemente usado quando dados são enviados de um servidor para uma página web.

```python
# Read JSON file: json.load() parses JSON from file object
import json
with open("filename.json", "r") as f:  # Abrir arquivo no modo de leitura
    content = json.load(f)  # Analisar JSON e retornar dict/list Python
```

Escreva um arquivo JSON com:

```python
# Write JSON file: json.dump() writes Python object as JSON
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # Abrir arquivo no modo de escrita
    json.dump(content, f, indent=2)  # Escrever JSON com indentação de 2 espaços
```

## YAML

Comparado ao JSON, o YAML permite uma manutenibilidade humana muito melhor e dá a capacidade de adicionar comentários. É uma escolha conveniente para arquivos de configuração onde um humano terá que editar.

Existem duas bibliotecas principais que permitem acesso a arquivos YAML:

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Instale-as usando `pip install` no seu ambiente virtual.

A primeira é mais fácil de usar, mas a segunda, Ruamel, implementa muito melhor a especificação YAML e permite, por exemplo, modificar um conteúdo YAML sem alterar comentários.

Abra um arquivo YAML com:

```python
# Read YAML file using ruamel.yaml library
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # Criar instância do analisador YAML
    yaml.load(f)  # Analisar YAML e retornar dict/list Python
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) é um pacote muito útil, permitindo abstrair completamente o formato subjacente do arquivo de configuração. Ele permite carregar um dicionário Python de JSON, YAML, TOML, e assim por diante.

Instale-o com:

```bash
pip install anyconfig
```

Uso:

```python
# anyconfig: load configuration files in various formats (JSON, YAML, TOML, etc.)
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # Detecta o formato automaticamente
```

## Links Relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Leitura e Escrita de Arquivos</router-link>
- <router-link to="/cheatsheet/dictionaries">Dicionários Python</router-link>
- <router-link to="/modules/json-module">O Módulo json</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operações Essenciais do Sistema de Arquivos Que Todo Desenvolvedor Deve Conhecer</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
