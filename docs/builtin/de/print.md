---
title: 'Python print()-Funktion – Python Spickzettel'
description: 'Gibt Objekte im Textstrom aus, getrennt durch sep und gefolgt von end. sep, end, file und flush müssen, falls vorhanden, als Schlüsselwortargumente angegeben werden.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python print()-Funktion (eingebaut)
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Druckt Objekte in den Textstrom Datei, getrennt durch sep und gefolgt von end. sep, end, file und flush, falls vorhanden, müssen als Schlüsselwortargumente angegeben werden.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `print()` schreibt den Wert des/der ihr übergebenen Argument(e). [...] sie verarbeitet mehrere Argumente, Gleitkomma-Größen und Zeichenketten. Zeichenketten werden ohne Anführungszeichen gedruckt, und zwischen den Elementen wird ein Leerzeichen eingefügt, sodass Sie Dinge schön formatieren können:

```python
print('Hello world!')
```

Ausgabe:

```plaintext
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

Ausgabe:

```plaintext
Hello world! 1
```

## Das end-Schlüsselwort

Das Schlüsselwortargument `end` kann verwendet werden, um den Zeilenumbruch nach der Ausgabe zu vermeiden oder die Ausgabe mit einer anderen Zeichenkette zu beenden:

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

Ausgabe:

```plaintext
printed-with-a-dash-in-between-
```

## Das sep-Schlüsselwort

Das Schlüsselwort `sep` gibt an, wie die Objekte getrennt werden sollen, wenn es mehr als eines gibt:

```python
print('cats', 'dogs', 'mice', sep=',')
```

Ausgabe:

```plaintext
cats,dogs,mice
```

## Relevante Links

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String-Formatierung</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Zeichenketten bearbeiten</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
