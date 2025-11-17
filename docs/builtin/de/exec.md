---
title: 'Python exec()-Funktion – Python Spickzettel'
description: 'Diese Funktion unterstützt die dynamische Ausführung von Python-Code. Das Objekt muss entweder ein String oder ein Code-Objekt sein. Wenn es ein String ist, wird dieser als eine Reihe von Python-Anweisungen analysiert und dann ausgeführt (sofern kein Syntaxfehler auftritt) [...].'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python exec()-Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Diese Funktion unterstützt die dynamische Ausführung von Python-Code. object muss entweder ein String oder ein Code-Objekt sein. Wenn es ein String ist, wird der String als eine Suite von Python-Anweisungen geparst, die dann ausgeführt wird (es sei denn, es tritt ein Syntaxfehler auf) [...].
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `exec()`-Funktion in Python ist eine eingebaute Funktion, mit der Sie Python-Code, der in einem String gespeichert ist, dynamisch ausführen können. Dies kann sehr nützlich sein für Szenarien, in denen Sie von Benutzern bereitgestellten Code ausführen, Code zur Laufzeit generieren und ausführen oder sogar Mini-Interpreter oder Skripting-Umgebungen innerhalb Ihrer Anwendung erstellen möchten. Es sollte jedoch mit Vorsicht verwendet werden, da es bei unsachgemäßer Handhabung potenzielle Sicherheitsrisiken darstellen kann.

## Syntax

```python
exec(object[, globals[, locals]])
```

- `object`: Der String, der den auszuführenden Python-Code enthält.
- `globals` (optional): Ein Dictionary, das den globalen Namensraum darstellt. Wenn nicht angegeben, wird der aktuelle globale Namensraum verwendet.
- `locals` (optional): Ein Dictionary, das den lokalen Namensraum darstellt. Wenn nicht angegeben, wird der aktuelle lokale Namensraum verwendet.

## Grundlegende Verwendung

```python
code_to_execute = "print('Hallo, exec()!')"
exec(code_to_execute)
```

Ausgabe:

```plaintext
Hallo, exec()!
```

Die `exec()`-Funktion kann auch zusammen mit der <router-link to="/builtin/print">print()</router-link>-Funktion verwendet werden, um Ausgaben auf der Konsole anzuzeigen.

## Ausführen mehrerer Anweisungen

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

Ausgabe:

```plaintext
0
1
2
3
4
```

In diesem Beispiel wird die `exec()`-Funktion verwendet, um eine for-Schleife auszuführen, die über einen <router-link to="/builtin/range">Bereich</router-link> von Zahlen iteriert und jede Zahl auf der Konsole <router-link to="/builtin/print">ausgibt</router-link>.

## Variablen modifizieren

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

Ausgabe:

```plaintext
15
```

## Verwendung von `globals` und `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

Ausgabe:

```plaintext
5
{'x': 10}
{'x': 40}
```

## Dynamische Funktionserstellung

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

Ausgabe:

```plaintext
10
```

In diesem Beispiel wird die `exec()`-Funktion verwendet, um eine dynamische Funktion zu erstellen, die eine Liste von Argumenten entgegennimmt und deren <router-link to="/builtin/sum">Summe</router-link> zurückgibt.

## Fehlerbehandlung

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Fehler: {e}")
"""
exec(code)
```

Ausgabe:

```plaintext
Fehler: name 'undefined_variable' is not defined
```

## Sicherheitshinweis

```python
user_input = input("Geben Sie Code zum Ausführen ein: ")
exec(user_input)  # Achtung: Dies kann ein Sicherheitsrisiko darstellen, wenn es nicht ordnungsgemäß bereinigt wird.
```

## Relevante Links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">Exception Handling</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
