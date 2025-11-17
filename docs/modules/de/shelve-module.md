---
title: 'Python Shelve Modul - Python Spickzettel'
description: "Ein 'Shelf' ist ein persistentes, wörterbuchähnliches Objekt. In einem Shelf können beliebige Python-Objekte gespeichert werden – alles, was das Pickle-Modul verarbeiten kann."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Shelve Modul
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/shelve.html">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Ein „Shelf“ ist ein persistentes, wörterbuchähnliches Objekt. Der Unterschied zu „dbm“-Datenbanken besteht darin, dass die Werte (nicht die Schlüssel!) in einem Shelf im Wesentlichen beliebige Python-Objekte sein können – alles, was das pickle-Modul verarbeiten kann. Dazu gehören die meisten Klasseninstanzen, rekursive Datentypen und Objekte, die viele gemeinsam genutzte Unterobjekte enthalten. Die Schlüssel sind gewöhnliche Strings.
  </base-disclaimer-content>
</base-disclaimer>

## Variablen speichern

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# Shelf-Datei öffnen und Daten speichern
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## Variablen öffnen und lesen

```python
# Shelf-Datei öffnen und Daten lesen
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # Auf den gespeicherten Wert über den Schlüssel zugreifen
    print(shelf_file['wife'])
```

Output:

```plaintext
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

Genau wie Wörterbücher haben `shelf`-Werte `keys()`- und `values()`-Methoden, die listenähnliche Werte der Schlüssel und Werte im Shelf zurückgeben. Da diese Methoden listenähnliche Werte anstelle von echten Listen zurückgeben, sollten Sie sie an die Funktion `list()` übergeben, um sie in Listenform zu erhalten.

```python
# Auf alle Schlüssel und Werte im Shelf zugreifen
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

Output:

```plaintext
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Dateien lesen und schreiben</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Wörterbücher</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Kontextmanager</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
