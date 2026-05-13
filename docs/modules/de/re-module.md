---
title: "Python re Modul - Python Spickzettel"
description: "Das `re`-Modul erlaubt dir, Text mit regulären Ausdrücken zu suchen, abzugleichen, zu teilen und zu ersetzen."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python re Modul
</base-title>

Das `re`-Modul erlaubt dir, Text mit regulären Ausdrücken zu suchen, abzugleichen, zu teilen und zu ersetzen.

```python
import re
```

Reguläre Ausdrücke sind Muster für Text. Verwende Rohstrings wie `r'\d+'`, damit Backslashes korrekt an die Engine für reguläre Ausdrücke übergeben werden.

## search()

`search` findet die erste Übereinstimmung an beliebiger Stelle im String.

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` gibt alle sich nicht überlappenden Übereinstimmungen zurück.

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` ersetzt passenden Text.

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## Muster kompilieren

Kompilierte Muster sind nützlich, wenn du denselben Ausdruck mehrfach verwendest.

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## Gruppen erfassen

Klammern erfassen einen Teil der Übereinstimmung.

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## Keine Übereinstimmung behandeln

Prüfe immer, ob eine Übereinstimmung existiert, bevor du `group()` aufrufst.

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## Relevante Links

- <router-link to="/cheatsheet/regular-expressions">Spickzettel: Reguläre Ausdrücke</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Spickzettel: Zeichenketten bearbeiten</router-link>
- <router-link to="/builtin/str">str()</router-link>
