---
title: 'Python setattr()-Funktion – Python Spickzettel'
description: "Das Gegenstück zu getattr(). Die Argumente sind ein Objekt, ein String und ein beliebiger Wert. Der String kann ein bestehendes oder ein neues Attribut benennen. Die Funktion weist dem Attribut den Wert zu, sofern das Objekt dies zulässt. Zum Beispiel entspricht setattr(x, 'foobar', 123) der Zuweisung x.foobar = 123."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python built-in Funktion setattr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Dies ist das Gegenstück zu <router-link to="/builtin/getattr">getattr()</router-link>. Die Argumente sind ein Objekt, ein String und ein beliebiger Wert. Der String kann ein vorhandenes Attribut oder ein neues Attribut benennen. Die Funktion weist dem Attribut den Wert zu, sofern das Objekt dies zulässt. Zum Beispiel ist setattr(x, 'foobar', 123) äquivalent zu x.foobar = 123.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `setattr()` ist eine eingebaute Python-Funktion, mit der Sie den Wert eines Attributs eines Objekts festlegen können. Sie benötigt drei Argumente: das Objekt, den Namen des Attributs (als String) und den Wert, den Sie diesem Attribut zuweisen möchten.

Dies ist besonders nützlich, wenn der Attributname dynamisch zur Laufzeit bestimmt wird. Anstatt der Punktnotation (`object.attribute = value`), die erfordert, dass Sie den Attributnamen im Voraus kennen, können Sie mit `setattr()` eine Variable verwenden.

### Beispiele

Hier sehen Sie, wie Sie `setattr()` verwenden können, um Attribute hinzuzufügen oder zu ändern:

```python
class Person:
    name = "John"

p = Person()

# Setze das Attribut 'age' auf 30
setattr(p, 'age', 30)

print(p.age)

# Ändere das Attribut 'name'
setattr(p, 'name', 'Jane')
print(p.name)
```

```output
30
Jane
```

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Grundlagen</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
