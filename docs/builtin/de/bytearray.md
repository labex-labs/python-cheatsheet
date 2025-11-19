---
title: 'Python bytearray()-Funktion – Python-Spickzettel'
description: 'Gibt ein neues Byte-Array zurück. Die bytearray-Klasse ist eine veränderliche Sequenz von ganzen Zahlen im Bereich [...]. Sie verfügt über die meisten üblichen Methoden von veränderlichen Sequenzen, beschrieben unter Veränderliche Sequenztypen, sowie über die meisten Methoden, die der bytes-Typ besitzt [...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytearray() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt ein neues Array von Bytes zurück. Die Klasse bytearray ist eine veränderliche Sequenz von ganzen Zahlen im Bereich [...]. Sie verfügt über die meisten üblichen Methoden von veränderlichen Sequenzen, die unter Mutable Sequence Types beschrieben sind, sowie über die meisten Methoden, die der Typ bytes besitzt [...].
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `bytearray()` gibt ein neues Array von Bytes zurück. Dieses Objekt ist eine veränderliche Sequenz von ganzen Zahlen im Bereich 0 <= x < 256. Es ist im Wesentlichen eine veränderliche Version des `bytes`-Objekts, was bedeutet, dass Sie seinen Inhalt ändern können, nachdem es erstellt wurde. Dies ist nützlich für die Handhabung von Binärdaten, die direkt geändert werden müssen.

## Beispiele

```python
# Erstellen eines bytearray aus einem String mit einer bestimmten Kodierung
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

```output
bytearray(b'hello')
```

```python
# Erstellen eines bytearray aus einer Liste von ganzen Zahlen
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

```output
bytearray(b'Hello')
```

```python
# Ändern eines bytearray (es ist veränderlich)
ba2[0] = 104  # ASCII für 'h'
ba2.append(33)  # ASCII für '!'
print(ba2)
```

```output
bytearray(b'hello!')
```

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Dateien lesen und schreiben</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listen und Tupel</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
