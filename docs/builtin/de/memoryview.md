---
title: 'Python memoryview()-Funktion – Python-Spickzettel'
description: 'Gibt ein aus dem angegebenen Argument erstelltes „Memory View“-Objekt zurück. Weitere Informationen finden Sie unter Memory Views.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python memoryview() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt ein „Memory View“-Objekt zurück, das aus dem angegebenen Argument erstellt wurde. Weitere Informationen finden Sie unter Memory Views.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `memoryview()` erstellt ein Memory-View-Objekt aus einem gegebenen Argument. Eine Speicheransicht ermöglicht Ihnen den Zugriff auf den Speicher eines anderen Objekts, wie z. B. eines `<router-link to="/builtin/bytes">bytes</router-link>`- oder `<router-link to="/builtin/bytearray">bytearray</router-link>`-Objekts, ohne eine Kopie zu erstellen. Dies ist für große Datenmengen sehr effizient, da es eine Speicherduplizierung vermeidet.

### Beispiele

Hier sehen Sie, wie Sie `memoryview()` verwenden können:

```python
# Erstellen eines bytearray
data = bytearray(b'hello world')

# Erstellen einer Speicheransicht der Daten
view = memoryview(data)

# Zugriff auf die Daten über die Ansicht
print(view[0])  # ASCII für 'h'
print(view[6:11])  # ein Slice des Speichers
print(view[6:11].tobytes())

# Sie können die zugrunde liegenden Daten auch über die Ansicht ändern
view[0] = 72  # ASCII für 'H'
print(data)
```

```output
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## Relevante Links

- <router-link to="/blog/python-data-types">Blog: Python Datentypen</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
