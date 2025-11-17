---
title: 'Módulo Shelve de Python - Hoja de Trucos de Python'
description: "Un 'estante' (shelf) es un objeto persistente similar a un diccionario. En un estante se pueden almacenar objetos de Python arbitrarios, cualquier cosa que el módulo pickle pueda manejar."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Shelve de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/shelve.html">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Un "shelf" (estante) es un objeto persistente similar a un diccionario. La diferencia con las bases de datos "dbm" es que los valores (¡no las claves!) en un shelf pueden ser esencialmente objetos arbitrarios de Python; cualquier cosa que el módulo pickle pueda manejar. Esto incluye la mayoría de las instancias de clases, tipos de datos recursivos y objetos que contienen muchos subobjetos compartidos. Las claves son cadenas de caracteres normales.
  </base-disclaimer-content>
</base-disclaimer>

## Guardar variables

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# Abrir archivo shelf y guardar datos
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## Abrir y leer variables

```python
# Abrir archivo shelf y leer datos
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # Acceder al valor almacenado por clave
    print(shelf_file['wife'])
```

Output:

```plaintext
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

Al igual que los diccionarios, los valores de `shelf` tienen métodos `keys()` y `values()` que devolverán valores similares a listas de las claves y los valores en el shelf. Dado que estos métodos devuelven valores similares a listas en lugar de listas verdaderas, debe pasarlos a la función `list()` para obtenerlos en formato de lista.

```python
# Acceder a todas las claves y valores en el shelf
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

Output:

```plaintext
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## Enlaces relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Diccionarios</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Gestores de Contexto</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
