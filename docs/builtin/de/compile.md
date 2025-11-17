---
title: 'Python compile()-Funktion – Python Spickzettel'
description: 'Kompiliert die Quelle in ein Code- oder AST-Objekt. Code-Objekte können mit exec() oder eval() ausgeführt werden. Die Quelle kann ein normaler String, ein Byte-String oder ein AST-Objekt sein. Informationen zur Arbeit mit AST-Objekten finden Sie in der Dokumentation des ast-Moduls.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python built-in Funktion compile()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Kompiliert den Quellcode in ein Code- oder AST-Objekt. Code-Objekte können durch <router-link to="/builtin/exec">exec()</router-link> oder <router-link to="/builtin/eval">eval()</router-link> ausgeführt werden. source kann entweder ein normaler String, ein Byte-String oder ein AST-Objekt sein. Informationen zur Arbeit mit AST-Objekten finden Sie in der Dokumentation des ast-Moduls.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `compile()` in Python ist eine eingebaute Funktion, die verwendet wird, um einen String oder ein Abstract Syntax Tree (AST)-Objekt in ein Code-Objekt umzuwandeln. Dieses Code-Objekt kann dann von Funktionen wie <router-link to="/builtin/exec">exec()</router-link> oder <router-link to="/builtin/eval">eval()</router-link> ausgeführt werden.

## Beispiel

Hier ist ein grundlegendes Beispiel dafür, wie es funktioniert:

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# Kompiliere den String in ein Code-Objekt
# Der Modus 'exec' wird für eine Abfolge von Anweisungen verwendet.
# Der Modus 'eval' ist für einen einzelnen Ausdruck.
# Der Modus 'single' ist für eine einzelne interaktive Anweisung.
code_object = compile(code_string, '<string>', 'exec')

# Führe das Code-Objekt aus
exec(code_object)
```

Ausgabe:

```plaintext
Hello, world!
```

## Relevante Links

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
