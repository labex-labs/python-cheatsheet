---
title: 'Python hasattr()-Funktion – Python Spickzettel'
description: 'Die Argumente sind ein Objekt und ein String. Das Ergebnis ist True, wenn der String der Name eines Attributs des Objekts ist, andernfalls False. (Dies wird durch Aufruf von getattr(object, name) und Prüfung, ob ein AttributeError ausgelöst wird, implementiert.)'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hasattr() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Die Argumente sind ein Objekt und ein String. Das Ergebnis ist True, wenn der String der Name eines der Attribute des Objekts ist, False andernfalls. (Dies wird implementiert, indem <router-link to="/builtin/getattr">getattr(object, name)</router-link> aufgerufen wird und geprüft wird, ob eine AttributeError ausgelöst wird oder nicht.)
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `hasattr()` prüft, ob ein Objekt ein gegebenes Attribut besitzt. Sie nimmt das Objekt und den Attributnamen (als String) als Argumente entgegen und gibt `True` zurück, wenn das Attribut existiert, andernfalls `False`.

### Beispiel

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

Ausgabe:

```plaintext
True
True
False
```

## Relevante Links

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Grundlagen</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
