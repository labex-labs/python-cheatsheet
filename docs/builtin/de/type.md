---
title: 'Python type()-Funktion – Python Spickzettel'
description: 'Gibt bei einem Argument den Typ eines Objekts zurück. Der Rückgabewert ist ein Typobjekt und im Allgemeinen dasselbe Objekt wie von object.__class__.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion type()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Mit einem Argument gibt den Typ eines Objekts zurück. Der Rückgabewert ist ein Typobjekt und im Allgemeinen dasselbe Objekt wie das, das von object.__class__ zurückgegeben wird.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `type()` Funktion in Python ist eine eingebaute Funktion, die den Typ eines Objekts zurückgibt. Sie ist ein grundlegendes Werkzeug, um die Datentypen zu verstehen, mit denen Sie in Python arbeiten.

## Beispiele

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

```output
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## Relevante Links

- <router-link to="/blog/python-data-types/">Python Datentypen</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
