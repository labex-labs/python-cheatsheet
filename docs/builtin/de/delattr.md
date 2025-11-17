---
title: 'Python delattr() eingebaute Funktion - Python Spickzettel'
description: "Dies ist ein Verwandter von setattr(). Die Argumente sind ein Objekt und ein String. Der String muss der Name eines der Attribute des Objekts sein. Die Funktion löscht das benannte Attribut, sofern das Objekt dies zulässt. Zum Beispiel entspricht delattr(x, 'foobar') dem Befehl del x.foobar."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python delattr() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Dies ist ein Verwandter von `setattr()`. Die Argumente sind ein Objekt und ein String. Der String muss der Name eines der Attribute des Objekts sein. Die Funktion löscht das benannte Attribut, sofern das Objekt dies zulässt. Zum Beispiel ist `delattr(x, 'foobar')` äquivalent zu `del x.foobar`.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `delattr()` in Python wird verwendet, um ein Attribut von einem Objekt zu löschen. Sie ist das Gegenstück zu `setattr()` und <router-link to="/builtin/getattr">`getattr()`</router-link>.

## Syntax

```python
delattr(object, name)
```

- **object**: Das Objekt, von dem das Attribut gelöscht werden soll.
- **name**: Der Name des zu löschenden Attributs, angegeben als String.

## Beispiele

### Löschen eines Attributs von einem Objekt

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

Ausgabe:

```plaintext
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### Löschen eines nicht existierenden Attributs

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

Ausgabe:

```plaintext
Error: age
```

## Relevante Links

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Grundlagen</router-link>
