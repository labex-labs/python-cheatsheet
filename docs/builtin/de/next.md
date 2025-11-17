---
title: 'Python next()-Funktion – Python Spickzettel'
description: 'Ruft das nächste Element aus dem Iterator durch Aufruf seiner __next__()-Methode ab. Wenn ein Standardwert angegeben ist, wird dieser zurückgegeben, wenn der Iterator erschöpft ist, andernfalls wird StopIteration ausgelöst.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python next() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Ruft das nächste Element aus dem Iterator ab, indem seine __next__() Methode aufgerufen wird. Wenn default angegeben ist, wird es zurückgegeben, wenn der Iterator erschöpft ist, andernfalls wird StopIteration ausgelöst.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `next()` ruft das nächste Element aus einem Iterator ab. Wenn der Iterator erschöpft ist, löst sie eine `StopIteration`-Ausnahme aus.

Sie können auch einen Standardwert angeben, der zurückgegeben wird, wenn der Iterator erschöpft ist, wodurch die `StopIteration`-Ausnahme verhindert wird.

### Beispiele

**Verwendung von `next()` mit einem Iterator:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

Ausgabe:

```plaintext
1
2
Iterator is exhausted
```

**Verwendung von `next()` mit einem Standardwert:**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

Ausgabe:

```plaintext
1
default
```

Weitere Beispiele:

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

Ausgabe:

```plaintext
1
2
3
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Kontrollfluss (for-Schleifen)</router-link>
- <router-link to="/modules/itertools-module">Modul: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
