---
title: 'Python callable()-Funktion – Python Spickzettel'
description: 'Gibt True zurück, wenn das Objekt aufrufbar ist, andernfalls False. Ist das Ergebnis True, kann der Aufruf fehlschlagen; ist es False, wird der Aufruf immer fehlschlagen. Klassen sind aufrufbar (Rückgabe einer neuen Instanz); Instanzen sind aufrufbar, wenn ihre Klasse eine __call__()-Methode besitzt.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion callable()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt True zurück, wenn das Objektargument aufrufbar erscheint, andernfalls False. Wenn dies True zurückgibt, ist es immer noch möglich, dass ein Aufruf fehlschlägt, aber wenn es False ist, wird der Aufruf von object niemals erfolgreich sein. Beachten Sie, dass Klassen aufrufbar sind (das Aufrufen einer Klasse gibt eine neue Instanz zurück); Instanzen sind aufrufbar, wenn ihre Klasse eine __call__() Methode hat.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

In Python ist die Funktion `callable()` eine eingebaute Funktion, mit der festgestellt werden kann, ob ein Objekt aufrufbar ist, d. h. ob es als Funktion aufgerufen werden kann.

Sie gibt `True` zurück, wenn das übergebene Objekt aufrufbar ist, und andernfalls `False`. Zum Beispiel sind eine Funktion, eine Methode, eine Klasse, eine Lambda-Funktion und ein Generator allesamt aufrufbare Objekte in Python.

Hier ist ein Beispiel dafür, wie Sie die Funktion `callable()` verwenden können:

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

```output
False
True
True
True
```

Im obigen Beispiel ist `my_function` eine Funktion und ist aufrufbar, `MyClass` ist ebenfalls eine Klasse und ist aufrufbar, da sie eine `__call__` Methode hat, `z` ist eine Instanz der Klasse `MyClass` und ist ebenfalls aufrufbar, da sie eine `__call__` Methode hat, und `a` ist eine Lambda-Funktion, die aufrufbar ist.

Die Funktion `callable()` kann in Situationen nützlich sein, in denen Sie feststellen müssen, ob ein Objekt als Funktion aufgerufen werden kann, beispielsweise wenn Sie mit Callbacks oder anderen Arten von Funktionszeigern arbeiten.

## Relevante Links

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">Funktionen</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Grundlagen</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
