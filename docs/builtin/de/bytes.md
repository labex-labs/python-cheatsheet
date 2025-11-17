---
title: 'Python bytes()-Funktion – Python Spickzettel'
description: 'Gibt ein neues „bytes“-Objekt zurück, eine unveränderliche Sequenz von Ganzzahlen im Bereich [...]. bytes ist eine unveränderliche Version von bytearray – sie hat dieselben nicht-mutierenden Methoden sowie dasselbe Indexierungs- und Slicing-Verhalten.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytes() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt ein neues „bytes“-Objekt zurück, das eine unveränderliche Sequenz von ganzen Zahlen im Bereich [...] ist. bytes ist eine unveränderliche Version von bytearray – es hat dieselben nicht-mutierenden Methoden und dasselbe Indexierungs- und Slicing-Verhalten.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

In Python ist der Typ `bytes` eine unveränderliche Sequenz einzelner Bytes. Er repräsentiert eine Sequenz von ganzen Zahlen im Bereich von 0 bis 255, die zur Darstellung von Binärdaten wie Bildern, Audio oder anderen Dateitypen verwendet werden kann.

Sie können ein bytes-Objekt auf verschiedene Arten erstellen. Eine Möglichkeit besteht darin, den `bytes()`-Konstruktor zu verwenden und ihm einen String, ein bytearray-Objekt oder ein bytes-Objekt zu übergeben. Zum Beispiel:

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

Ausgabe:

```plaintext
b'Hello, World!'
```

Eine andere Möglichkeit besteht darin, eine literale Notation zu verwenden, indem dem String das Präfix `b` oder `B` vorangestellt wird:

```python
data = b"Hello, World!"
print(data)
```

Ausgabe:

```plaintext
b'Hello, World!'
```

## Relevante Links

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">Dateien lesen und schreiben</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
