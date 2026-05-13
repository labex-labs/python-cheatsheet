---
title: "Module urllib.request Python - Aide-mémoire Python"
description: "Le module `urllib.request` vous permet de récupérer des données depuis des URL en utilisant la bibliothèque standard Python."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module urllib.request Python
</base-title>

Le module `urllib.request` vous permet de récupérer des données depuis des URL en utilisant la bibliothèque standard Python.

```python
from urllib import request
```

Pour beaucoup de projets, des bibliothèques tierces comme Requests sont plus pratiques. Utilisez `urllib.request` lorsque vous voulez une solution reposant uniquement sur la bibliothèque standard.

## Ouvrir une URL

`urlopen` renvoie un objet de réponse.

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## Lire les données de réponse

Le corps de la réponse est renvoyé sous forme d’octets.

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

## Ajouter un délai d’attente

Lorsque vous ouvrez de vraies URL réseau, définissez un délai d’attente pour que votre programme n’attende pas indéfiniment.

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
    Les appels réseau peuvent échouer pour de nombreuses raisons. Gérez des exceptions comme <code>urllib.error.URLError</code> et soyez prudent lorsque vous récupérez des URL non fiables.
  </base-warning-content>
</base-warning>

## Liens pertinents

- <router-link to="/modules/json-module">Module : json</router-link>
- <router-link to="/cheatsheet/exception-handling">Aide-mémoire : Gestion des exceptions</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Aide-mémoire : Lire et écrire des fichiers</router-link>
