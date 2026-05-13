---
title: "Módulo re do Python - Folha de Referência Python"
description: "O módulo `re` permite pesquisar, comparar, dividir e substituir texto usando expressões regulares."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo re do Python
</base-title>

O módulo `re` permite pesquisar, comparar, dividir e substituir texto usando expressões regulares.

```python
import re
```

Expressões regulares são padrões para texto. Use strings brutas, como `r'\d+'`, para que as barras invertidas sejam passadas corretamente para o mecanismo de expressões regulares.

## search()

`search` encontra a primeira correspondência em qualquer ponto da string.

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` retorna todas as correspondências que não se sobrepõem.

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` substitui o texto correspondente.

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## Compilando padrões

Padrões compilados são úteis quando você reutiliza a mesma expressão.

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## Grupos de captura

Parênteses capturam parte de uma correspondência.

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## Lidando com ausência de correspondência

Sempre verifique se existe correspondência antes de chamar `group()`.

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## Links relacionados

- <router-link to="/cheatsheet/regular-expressions">Folha de Referência: Expressões regulares</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Folha de Referência: Manipulação de strings</router-link>
- <router-link to="/builtin/str">str()</router-link>
