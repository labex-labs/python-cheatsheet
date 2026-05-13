---
title: Módulo urllib.request do Python - Folha de Referência Python
description: O módulo `urllib.request` permite buscar dados de URLs usando a biblioteca padrão do Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo urllib.request do Python
</base-title>

O módulo `urllib.request` permite buscar dados de URLs usando a biblioteca padrão do Python.

```python
from urllib import request
```

Para muitos projetos, bibliotecas de terceiros como Requests são mais convenientes. Use `urllib.request` quando quiser uma solução apenas com a biblioteca padrão.

## Abrindo uma URL

`urlopen` retorna um objeto de resposta.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## Lendo dados da resposta

Os corpos da resposta são retornados como bytes.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
content = response.read()
print(type(content).__name__)
print(content.decode('utf-8'))
```

```output
bytes
Hello Python
```

## Adicionando um timeout

Ao abrir URLs reais de rede, defina um timeout para o programa não esperar para sempre.

```python
from urllib import request

response = request.urlopen('data:text/plain,ok', timeout=5)
print(response.read().decode('utf-8'))
```

```output
ok
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Chamadas de rede podem falhar por muitos motivos. Trate exceções como <code>urllib.error.URLError</code> e tenha cuidado ao buscar URLs não confiáveis.
  </base-warning-content>
</base-warning>

## Links relacionados

- <router-link to="/modules/json-module">Módulo: json</router-link>
- <router-link to="/cheatsheet/exception-handling">Folha de Referência: Tratamento de exceções</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Folha de Referência: Leitura e escrita de arquivos</router-link>
