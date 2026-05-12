---
title: Python urllib.request Module - Python Cheatsheet
description: The urllib.request module lets you fetch data from URLs using the Python standard library.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python urllib.request Module
</base-title>

The `urllib.request` module lets you fetch data from URLs using the Python standard library.

```python
from urllib import request
```

For many projects, third-party libraries such as Requests are more convenient. Use `urllib.request` when you want a standard-library-only solution.

## Opening a URL

`urlopen` returns a response object.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## Reading response data

Response bodies are returned as bytes.

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

## Adding a timeout

When you open real network URLs, set a timeout so your program does not wait forever.

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
    Network calls can fail for many reasons. Handle exceptions such as <code>urllib.error.URLError</code> and be careful when fetching untrusted URLs.
  </base-warning-content>
</base-warning>

## Relevant links

- <router-link to="/modules/json-module">Module: json</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet: Exception Handling</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
