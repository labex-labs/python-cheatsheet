---
title: 'Python eval()-Funktion – Python Spickzettel'
description: 'Die Argumente sind ein String sowie optionale Globals und Locals. Falls angegeben, muss Globals ein Dictionary sein. Falls angegeben, kann Locals jedes Mapping-Objekt sein.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Die eingebaute Python-Funktion eval()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Die Argumente sind ein String und optionale globals und locals. Wenn angegeben, muss globals ein Dictionary sein. Wenn angegeben, kann locals jedes Mapping-Objekt sein.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `eval()`-Funktion in Python ist eine eingebaute Funktion, die einen String als Python-Ausdruck analysiert und ihn auswertet. Sie kann verwendet werden, um beliebigen Python-Code aus einem String auszuführen, was sowohl mächtig als auch riskant sein kann. Sie wird oft in Situationen eingesetzt, in denen dynamisch generierte Ausdrücke ausgewertet werden müssen, sollte aber aufgrund potenzieller Sicherheitslücken mit Vorsicht verwendet werden.

## Beispiele

```python
eval('1 + 4')
```

Ausgabe:

```plaintext
5
```

```python
eval('print("Hello World!")')
```

Ausgabe:

```plaintext
Hello World!
```

```python
x = 10
eval('x == 10')
```

Ausgabe:

```plaintext
True
```

Die `eval()`-Funktion kann auch zusammen mit der <router-link to="/builtin/print">print()</router-link>-Funktion verwendet werden, um Ausgaben auf der Konsole anzuzeigen.

## Relevante Links

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
