---
title: 'Python input()-Funktion – Python Spickzettel'
description: "Wenn das Argument 'prompt' vorhanden ist, wird es ohne abschließenden Zeilenumbruch auf die Standardausgabe geschrieben. Die Funktion liest dann eine Zeile von der Eingabe, konvertiert sie in einen String (entfernt den abschließenden Zeilenumbruch) und gibt diesen zurück. Bei EOF wird ein EOFError ausgelöst."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python input() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Wenn das Argument `prompt` vorhanden ist, wird es ohne abschließenden Zeilenumbruch auf die Standardausgabe geschrieben. Die Funktion liest dann eine Zeile von der Eingabe, wandelt sie in einen String um (wobei ein abschließender Zeilenumbruch entfernt wird) und gibt diesen zurück. Wenn EOF gelesen wird, wird EOFError ausgelöst.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `input()` in Python ist eine eingebaute Funktion, die es einem Programm ermöglicht, eine Textzeile von der Tastatur des Benutzers einzulesen. Sie ist ein wesentliches Werkzeug für die Erstellung interaktiver Anwendungen, da sie die Ausführung des Programms pausiert und darauf wartet, dass der Benutzer eine Eingabe macht. Die Funktion kann auch eine Eingabeaufforderung anzeigen, um den Benutzer anzuleiten, was er eingeben soll.

## Beispiele

Diese Funktion nimmt die Eingabe des Benutzers entgegen und wandelt sie in einen String um:

```python
# nach dem Namen fragen
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

Ausgabe:

```plaintext
What is your name?
Martha
Hi, Martha
```

`input()` kann auch eine Standardnachricht festlegen, ohne `print()` zu verwenden:

```python
# Standardnachricht
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

Ausgabe:

```plaintext
What is your name? Martha
Hi, Martha
```

## Relevante Links

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String-Formatierung</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Strings bearbeiten</router-link>
