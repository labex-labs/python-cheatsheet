---
title: 'Python-Dekoratoren – Python-Spickzettel'
description: 'Ein Python-Decorator ist eine Syntax, die eine prägnante und wiederverwendbare Methode zur Erweiterung einer Funktion oder Klasse bietet.'
labUrl: 'https://labex.io/de/labs/python-python-decorators-633654?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Decorators
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Ein Python Decorator bietet eine prägnante und wiederverwendbare Möglichkeit, eine
Funktion oder eine Klasse zu erweitern. Lesen Sie den begleitenden Artikel <router-link to="/blog/python-decorators-for-beginners">Python Decorators: Simple Patterns to Level Up Your Code</router-link> für praktische Beispiele und Muster.

## Einfacher Decorator

Ein Decorator in seiner einfachsten Form ist eine Funktion, die eine andere
Funktion als Argument entgegennimmt und einen Wrapper zurückgibt. Das folgende Beispiel
zeigt die Erstellung eines Decorators und seine Verwendung.

```python
# Decorator: eine Funktion, die eine andere Funktion entgegennimmt und einen Wrapper zurückgibt
def your_decorator(func):
  def wrapper():
    # Dinge vor func tun...
    print("Before func!")
    func()  # Die ursprüngliche Funktion aufrufen
    # Dinge nach func tun...
    print("After func!")
  return wrapper  # Die Wrapper-Funktion zurückgeben

# @your_decorator ist syntaktischer Zucker für: foo = your_decorator(foo)
@your_decorator
def foo():
  print("Hello World!")

foo()  # Ruft wrapper auf, das foo mit zusätzlichem Verhalten aufruft
```

```output
Before func!
Hello World!
After func!
```

## Decorator für eine Funktion mit Parametern

```python
# Decorator, der mit Funktionen funktioniert, die Parameter haben
def your_decorator(func):
  def wrapper(*args,**kwargs):  # Beliebige Argumente akzeptieren
    # Dinge vor func tun...
    print("Before func!")
    func(*args,**kwargs)  # Argumente an die ursprüngliche Funktion übergeben
    # Dinge nach func tun...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # Argumente werden durch den Wrapper übergeben
```

```output
Before func!
My name is Jack
After func!
```

## Vorlage für einen Basis-Decorator

Diese Vorlage ist nützlich für die meisten Anwendungsfälle von Decorators. Sie ist gültig für Funktionen
mit oder ohne Parameter und mit oder ohne Rückgabewert.

```python
import functools

# Beste Praxis Decorator-Vorlage: bewahrt Funktionsmetadaten und Rückgabewert
def your_decorator(func):
  @functools.wraps(func)  # Name der Funktion, Docstring usw. beibehalten
  def wrapper(*args,**kwargs):
    # Dinge vor func tun...
    result = func(*args,**kwargs)  # Funktion aufrufen und Rückgabewert erfassen
    # Dinge nach func tun..
    return result  # Den Rückgabewert der ursprünglichen Funktion zurückgeben
  return wrapper
```

## Decorator mit Parametern

Sie können auch Parameter für den Decorator definieren, die dieser verwenden soll.

```python
import functools

# Decorator-Fabrik: gibt einen Decorator basierend auf Parametern zurück
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # Funktionsmetadaten beibehalten
    def wrapper(*args,**kwargs):
      # Dinge vor func tun, möglicherweise unter Verwendung von arg...
      result = func(*args,**kwargs)
      # Dinge nach func tun, möglicherweise unter Verwendung von arg...
      return result
    return wrapper
  return decorator  # Die eigentliche Decorator-Funktion zurückgeben
```

Um diesen Decorator zu verwenden:

```python
# Verwendung des Decorators mit Parametern: @your_decorator(arg='x') ruft your_decorator('x') auf,
# was einen Decorator zurückgibt, der dann auf foo angewendet wird
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## Klassenbasierte Decorators

Um eine Klassenmethode zu dekorieren, müssen Sie den Decorator innerhalb der Klasse definieren. Wenn
nur das implizite Argument `self` an die Methode übergeben wird, ohne zusätzliche explizite Argumente,
müssen Sie einen separaten Decorator für nur diese Methoden ohne zusätzliche Argumente erstellen. Ein Beispiel hierfür, unten gezeigt, ist, wenn Sie Ausnahmen auf eine bestimmte Weise abfangen und ausgeben möchten.

```python
# Klassenmethoden-Decorator: innerhalb der Klasse definiert
class DecorateMyMethod:

  # Statischer Methoden-Decorator für Methoden mit nur 'self' Parameter
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # Nimmt nur self entgegen
      try:
        return method(self)  # Ursprüngliche Methode aufrufen
      except Exception as e:
        print("\nWARNING: Please make note of the following:\n")
        print(e)
    return wrapper_for_class_method

  def __init__(self,succeed:bool):
    self.succeed = succeed

  @decorator_for_class_method_with_no_args
  def class_action(self):
    if self.succeed:
      print("You succeeded by choice.")
    else:
      raise Exception("Epic fail of your own creation.")

test_succeed = DecorateMyMethod(True)
test_succeed.class_action()
```

```output
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

```output
Exception: Epic fail of your own creation.
```

Ein Decorator kann auch als Klasse anstelle einer Methode definiert werden. Dies ist nützlich, um einen Zustand beizubehalten und zu aktualisieren, wie im folgenden Beispiel, in dem wir die Anzahl der Aufrufe einer Methode zählen:

```python
# Klassenbasierter Decorator: behält den Zustand zwischen Aufrufen bei
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # Die zu dekorierende Funktion speichern
    self.call_number = 0  # Aufrufzähler initialisieren

  def __call__(self, *args, **kwargs):  # Macht Instanz aufrufbar
    self.call_number += 1  # Zähler erhöhen
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # Ursprüngliche Funktion aufrufen

@CountCallNumber  # Erstellt eine Instanz von CountCallNumber
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # Ruft CountCallNumber.__call__() auf
```

```output
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

```output
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    Count Example
  </base-disclaimer-title>
  <base-disclaimer-content>
  This count example is inspired by Patrick Loeber's <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">YouTube tutorial</a>.
  </base-disclaimer-content>
</base-disclaimer>

## Relevante Links

- <router-link to="/blog/python-decorators-for-beginners">Python Decorators: Simple Patterns to Level Up Your Code</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link>
- <router-link to="/cheatsheet/functions">Functions</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args and Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
