---
title: 'Python repr()-Funktion – Python Spickzettel'
description: 'Gibt eine Zeichenkette zurück, die eine druckbare Darstellung eines Objekts enthält. Bei vielen Typen versucht diese Funktion, eine Zeichenkette zurückzugeben, die beim Übergeben an eval() ein Objekt mit demselben Wert ergibt; andernfalls ist die Darstellung eine in spitze Klammern eingeschlossene Zeichenkette, die den Typnamen des Objekts zusammen mit zusätzlichen Informationen enthält, oft einschließlich des Namens und der Adresse des Objekts. Eine Klasse kann steuern, was diese Funktion für ihre Instanzen zurückgibt, indem sie eine __repr__()-Methode definiert.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python repr() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt eine Zeichenkette zurück, die eine druckbare Darstellung eines Objekts enthält. Für viele Typen versucht diese Funktion, eine Zeichenkette zurückzugeben, die bei Übergabe an eval() ein Objekt mit demselben Wert ergibt; andernfalls ist die Darstellung eine in spitze Klammern eingeschlossene Zeichenkette, die den Typ des Objekts zusammen mit zusätzlichen Informationen enthält, oft einschließlich des Namens und der Adresse des Objekts. Eine Klasse kann steuern, was diese Funktion für ihre Instanzen zurückgibt, indem sie eine __repr__() Methode definiert.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `repr()` Funktion gibt eine Zeichenkette zurück, die eine druckbare Darstellung eines Objekts enthält. Das Ziel von `repr()` ist es, eindeutig zu sein. Für viele Typen gibt `repr()` eine Zeichenkette zurück, die von <router-link to="/builtin/eval">eval()</router-link> ausgeführt werden kann, um ein identisches Objekt zu erstellen.

Dies unterscheidet sich von <router-link to="/builtin/str">str()</router-link>, das für die menschliche Lesbarkeit gedacht ist.

### Beispiel

```python
import datetime

# Für einen String fügt repr() Anführungszeichen hinzu
print(repr("hello"))

# Für ein datetime-Objekt ist es eindeutig
now = datetime.datetime.now()
print(repr(now))

# Sie können __repr__ für Ihre eigenen Klassen definieren
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

```output
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## Relevante Links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Grundlagen</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String-Formatierung</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
