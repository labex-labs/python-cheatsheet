---
title: 'Python Ausnahmebehandlung - Python Spickzettel'
description: 'In Python ist die Ausnahmebehandlung der Prozess der Reaktion auf das Auftreten von Ausnahmen.'
labUrl: 'https://labex.io/de/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Ausnahmebehandlung
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">Exception Handling</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Im Bereich des Rechnens und der Computerprogrammierung ist die Ausnahmebehandlung der Prozess der Reaktion auf das Auftreten von Ausnahmen – anomalen oder außergewöhnlichen Bedingungen, die eine spezielle Verarbeitung erfordern.
  </base-disclaimer-content>
</base-disclaimer>

Python verfügt über viele [eingebaute Ausnahmen](https://docs.python.org/3/library/exceptions.html), die ausgelöst werden, wenn ein Programm auf einen Fehler stößt, und die meisten externen Bibliotheken, wie die beliebte [Requests](https://requests.readthedocs.io/en/latest), enthalten eigene [benutzerdefinierte Ausnahmen](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions), mit denen wir umgehen müssen.

## Grundlegende Ausnahmebehandlung

Man kann nicht durch Null teilen, das ist eine mathematische Wahrheit, und wenn man versucht, dies in Python zu tun, löst der Interpreter die eingebaute Ausnahme [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError) aus:

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

Ausgabe:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Ausgabe:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Angenommen, wir möchten nicht, dass unser Programm seine Ausführung stoppt oder dem Benutzer eine Ausgabe zeigt, die er nicht versteht. Sagen wir, wir möchten eine nützliche und klare Nachricht ausgeben, dann müssen wir die Ausnahme mit den Schlüsselwörtern `try` und `except` **_behandeln_**:

```python
# try-except: Ausnahmen elegant behandeln
def divide(dividend , divisor):
    try:  # Versuche, diesen Code auszuführen
        print(dividend / divisor)
    except ZeroDivisionError:  # Fange spezifischen Ausnahmetyp ab
        print('Sie können nicht durch 0 teilen')

divide(dividend=10, divisor=5)
```

Ausgabe:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Ausgabe:

```plaintext
Sie können nicht durch 0 teilen
```

## Behandlung mehrerer Ausnahmen mit einem Ausnahmeblock

Sie können auch mehrere Ausnahmen in einer Zeile wie folgt behandeln, ohne mehrere Ausnahmeblöcke erstellen zu müssen.

```python
# Mehrere Ausnahmen in einem except-Block behandeln
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # Dies löst TypeError aus
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # Mehrere Ausnahmetypen abfangen
        print(error)  # Die Fehlermeldung ausgeben

divide(dividend=20, divisor=5)
```

Ausgabe:

```plaintext
4
```

```python
divide(dividend=10, divisor=5)
```

Ausgabe:

```plaintext
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

Ausgabe:

```plaintext
division by zero
```

## Finally-Code in der Ausnahmebehandlung

Der Code im `finally`-Abschnitt wird immer ausgeführt, unabhängig davon, ob eine Ausnahme ausgelöst wurde oder nicht:

```python
# finally-Block: wird immer ausgeführt, unabhängig von Ausnahmen
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('Sie können nicht durch 0 teilen')
    finally:  # Wird immer ausgeführt, auch wenn eine Ausnahme auftritt
        print('Ausführung beendet')

divide(dividend=10, divisor=5)
```

Ausgabe:

```plaintext
2.0
Ausführung beendet
```

```python
divide(dividend=10, divisor=0)
```

Ausgabe:

```plaintext
Sie können nicht durch 0 teilen
Ausführung beendet
```

## Benutzerdefinierte Ausnahmen

Benutzerdefinierte Ausnahmen werden initialisiert, indem eine `class` erstellt wird, die von der Basisklasse `Exception` von Python erbt, und mit dem Schlüsselwort `raise` ausgelöst werden:

```python
# Benutzerdefinierte Ausnahme: Erstellung durch Vererbung von der Exception-Klasse
class MyCustomException(Exception):
    pass

raise MyCustomException  # Löst die benutzerdefinierte Ausnahme aus
```

Ausgabe:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

Um eine benutzerdefinierte Fehlermeldung zu deklarieren, können Sie diese als Parameter übergeben:

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('Eine benutzerdefinierte Nachricht für meine benutzerdefinierte Ausnahme')
```

Ausgabe:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: Eine benutzerdefinierte Nachricht für meine benutzerdefinierte Ausnahme
```

Die Behandlung einer benutzerdefinierten Ausnahme ist dieselbe wie bei jeder anderen:

```python
try:
    raise MyCustomException('Eine benutzerdefinierte Nachricht für meine benutzerdefinierte Ausnahme')
except MyCustomException:
    print('Meine benutzerdefinierte Ausnahme wurde ausgelöst')
```

Ausgabe:

```plaintext
Meine benutzerdefinierte Ausnahme wurde ausgelöst
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Kontrollfluss</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
