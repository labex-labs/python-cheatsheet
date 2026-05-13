---
title: Módulo urllib.request de Python - Hoja de trucos de Python
description: El módulo `urllib.request` te permite obtener datos desde URL usando la biblioteca estándar de Python.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo urllib.request de Python
</base-title>

El módulo `urllib.request` te permite obtener datos desde URL usando la biblioteca estándar de Python.

```python
from urllib import request
```

Para muchos proyectos, bibliotecas de terceros como Requests son más cómodas. Usa `urllib.request` cuando quieras una solución que solo dependa de la biblioteca estándar.

## Abrir una URL

`urlopen` devuelve un objeto de respuesta.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## Leer datos de respuesta

Los cuerpos de respuesta se devuelven como bytes.

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

## Añadir un tiempo de espera

Cuando abras URL reales de red, establece un tiempo de espera para que tu programa no espere para siempre.

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
    Las llamadas de red pueden fallar por muchas razones. Maneja excepciones como <code>urllib.error.URLError</code> y ten cuidado al obtener URL no confiables.
  </base-warning-content>
</base-warning>

## Enlaces relacionados

- <router-link to="/modules/json-module">Módulo: json</router-link>
- <router-link to="/cheatsheet/exception-handling">Hoja de trucos: Manejo de excepciones</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Hoja de trucos: Leer y escribir archivos</router-link>
