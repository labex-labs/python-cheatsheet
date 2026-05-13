---
title: "Módulo re de Python - Hoja de trucos de Python"
description: "El módulo `re` te permite buscar, comparar, dividir y reemplazar texto usando expresiones regulares."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo re de Python
</base-title>

El módulo `re` te permite buscar, comparar, dividir y reemplazar texto usando expresiones regulares.

```python
import re
```

Las expresiones regulares son patrones para texto. Usa cadenas en bruto, como `r'\d+'`, para que las barras invertidas se pasen correctamente al motor de expresiones regulares.

## search()

`search` encuentra la primera coincidencia en cualquier parte de la cadena.

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` devuelve todas las coincidencias que no se superponen.

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` reemplaza el texto coincidente.

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## Compilar patrones

Los patrones compilados son útiles cuando reutilizas la misma expresión.

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## Grupos de captura

Los paréntesis capturan una parte de la coincidencia.

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

## Manejar la ausencia de coincidencia

Comprueba siempre si existe una coincidencia antes de llamar a `group()`.

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

## Enlaces relacionados

- <router-link to="/cheatsheet/regular-expressions">Hoja de trucos: Expresiones regulares</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Hoja de trucos: Manipulación de cadenas</router-link>
- <router-link to="/builtin/str">str()</router-link>
