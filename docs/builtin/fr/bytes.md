---
title: 'Fonction intégrée bytes() de Python - Aide-mémoire Python'
description: "Retourne un nouvel objet « bytes » qui est une séquence immuable d'entiers dans la plage [...]. bytes est une version immuable de bytearray – il possède les mêmes méthodes non mutables et le même comportement d'indexation et de découpage."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python bytes()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne un nouvel objet « bytes » qui est une séquence immuable d'entiers dans la plage [...]. bytes est une version immuable de bytearray – il possède les mêmes méthodes non mutantes et le même comportement d'indexation et de découpage.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

En Python, le type `bytes` est une séquence immuable d'octets uniques. Il représente une séquence d'entiers dans la plage de 0 à 255, qui peut être utilisée pour représenter des données binaires telles que des images, de l'audio ou d'autres types de fichiers.

Vous pouvez créer un objet bytes de plusieurs manières. Une façon est d'utiliser le constructeur `bytes()` et de lui passer une chaîne de caractères, un objet bytearray ou un objet bytes. Par exemple :

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

```output
b'Hello, World!'
```

Une autre façon est d'utiliser une notation littérale en préfixant la chaîne de caractères par `b` ou `B` :

```python
data = b"Hello, World!"
print(data)
```

```output
b'Hello, World!'
```

## Liens pertinents

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">Lecture et écriture de fichiers</router-link>
- <router-link :to="'/blog/python-data-types'">Types de données Python</router-link>
