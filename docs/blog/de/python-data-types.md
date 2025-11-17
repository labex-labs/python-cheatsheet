---
title: 'Python Datentypen Erklärt – Ein Visueller Leitfaden für Anfänger'
description: 'Dieser Leitfaden bietet einen umfassenden Überblick über Pythons eingebaute Datentypen, deren Eigenschaften und Anwendungsfälle.'
date: 'Jul 20, 2025'
updated: 'Jul 20, 2025'
tags: 'python, beginner, data types'
socialImage: '/blog/python-data-types.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python Datentypen Erklärt – Ein Visueller Leitfaden für Anfänger"
    description: "Dieser Leitfaden bietet einen umfassenden Überblick über Pythons eingebaute Datentypen, deren Eigenschaften und Anwendungsfälle."
    date: "Jul 20, 2025"
    updated: "Jul 20, 2025"
    tags: "python, beginner, data types"
    socialImage: "/blog/python-data-types.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python Datentypen Erklärt – Ein Visueller Leitfaden für Anfänger" />

Python wird mit neun Kerndatentypen geliefert, die fast alles abdecken, was Sie benötigen. Die Wahl des richtigen Typs macht Ihren Code klarer, schneller und sicherer. Dieser Leitfaden zeigt, wie jeder Typ funktioniert, wann er verwendet werden sollte und worauf Sie achten müssen. Für einen schnellen Überblick sehen Sie sich auch unseren <router-link to="/cheatsheet/basics#data-types">Grundlagen-Leitfaden</router-link> an.

Diagramm der eingebauten Python-Datentypkategorien und der Änderbarkeit (Mutability).

## 1. Zahlen – `int`, `float`, `complex`

Python verfügt über drei Typen für die Arbeit mit Zahlen, die jeweils für unterschiedliche Situationen konzipiert sind.

### Zuerst einfache Beispiele

```python
# Integers - ganze Zahlen
age = 25
score = 100
negative = -10

# Floats - Zahlen mit Dezimalstellen
price = 19.99
temperature = 98.6
pi = 3.14159

# Complex - Zahlen mit Real- und Imaginärteil (fortgeschrittene Mathematik)
z = 2 + 3j  # j repräsentiert die imaginäre Einheit in Python
```

| Typ                                                        | Typisches Literal      | Wichtige Merkmale                                                                                                                    | Wann zu verwenden                                               | Nützliche Methoden/Operationen           |
| :--------------------------------------------------------- | :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- | :--------------------------------------- |
| <router-link to='/builtin/int'>`int`</router-link>         | `42`, `0xFF`           | Ganze Zahlen, die so groß sein können, wie es Ihr Speicher zulässt; unterstützt binäre `0b`, oktale `0o`, hexadezimale `0x` Literale | Zählen, Indizieren, Speichern ganzer Mengen                     | `bit_length()`, `to_bytes()`             |
| <router-link to='/builtin/float'>`float`</router-link>     | `3.14`, `1.2e3`        | Zahlen mit Dezimalpunkten; können bei Berechnungen kleine Rundungsfehler aufweisen                                                   | Messungen, Durchschnittswerte, wissenschaftliche Berechnungen   | `.is_integer()`, `.hex()`, math Modul    |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j`, `complex(a,b)` | Zahlen mit Real- und Imaginärteil (verwendet in fortgeschrittener Mathematik); `.real`, `.imag`, `.conjugate()`                      | Fortgeschrittene Mathematik, Ingenieurwesen, Signalverarbeitung | Alle Arithmetik, `abs()` gibt den Betrag |

### Weitere Beispiele

```python
# Arbeiten mit Integers
items = 5
total_items = items * 3  # 15

# Arbeiten mit Floats
radius = 2.5
area = 3.14159 * radius * radius  # 19.634...

# Vorsicht bei der Float-Genauigkeit
result = 0.1 + 0.2  # 0.30000000000000004 (nicht exakt 0.3!)

# Komplexe Zahlen (werden Sie als Anfänger wahrscheinlich nicht brauchen)
z = complex(2, 3)     # Dasselbe wie 2+3j
magnitude = abs(z)    # 3.605...
```

## 2. Zeichenketten (Strings) – `str`

Strings speichern Text und sind einer der wichtigsten Typen, die Sie verwenden werden. Für detailliertere String-Operationen siehe unseren Leitfaden zur <router-link to="/cheatsheet/manipulating-strings">Bearbeitung von Strings</router-link>.

### Einfache Beispiele

```python
# Erstellen von Strings
name = "Alice"
message = 'Hello world'
long_text = """Dies ist ein
mehrzeiliger String"""

# Grundlegende Operationen
greeting = "Hello, " + name  # "Hello, Alice"
repeated = "Ha" * 3          # "HaHaHa"
length = len(message)        # 11
```

**Wichtige Merkmale:**

- Unveränderlich (Immutable): Sobald sie erstellt sind, können Sie sie nicht ändern (aber Sie können neue erstellen)
- Verwenden Sie einfache `'` oder doppelte `"` Anführungszeichen
- Dreifache Anführungszeichen `"""` für mehrzeiligen Text
- Unterstützt Unicode (Emojis, internationale Zeichen)

### Häufige String-Operationen

```python
text = "  Python Programming  "

# Nützliche Methoden
clean_text = text.strip()           # "Python Programming"
words = clean_text.split()          # ["Python", "Programming"]
joined = "-".join(words)            # "Python-Programming"
upper_text = clean_text.upper()     # "PYTHON PROGRAMMING"
replaced = clean_text.replace("Python", "Java")  # "Java Programming"

# Inhalt prüfen
starts_with_p = clean_text.startswith("Python")  # True
has_gram = "gram" in clean_text                   # True

# Moderne Formatierung (empfohlen)
age = 25
formatted = f"I am {age} years old"  # "I am 25 years old"
```

## 3. Boolesche Werte – `bool`

Boolesche Werte repräsentieren `True` oder `False` – unerlässlich, um Entscheidungen in Ihrem Code zu treffen. Erfahren Sie mehr über die <router-link to="/builtin/bool">bool()-Funktion</router-link>.

### Einfache Beispiele

```python
# Einfache boolesche Werte
is_student = True
is_graduated = False

# Boolesche Operationen
has_degree = is_student or is_graduated  # True
ready_to_work = is_graduated and not is_student  # False
```

**Wahrheitswerte (Truthiness)**: Python behandelt viele Werte in Bedingungen als Wahr oder Falsch:

```python
# Diese sind "truthy" (verhalten sich wie True)
if "hello":     # nicht-leere Strings
if [1, 2, 3]:   # nicht-leere Listen
if 42:          # Nicht-Null-Zahlen

# Diese sind "falsy" (verhalten sich wie False)
if "":          # leerer String
if []:          # leere Liste
if 0:           # Null
if None:        # None-Wert
```

### Praktische Beispiele

```python
items = []
if items:
    print("We have items!")
else:
    print("No items found")  # Dies wird gedruckt

score = 85
passed = score >= 60  # True
```

## 4. None-Typ – `NoneType`

`None` repräsentiert "nichts" oder "kein Wert" – Sie werden es überall in Python sehen.

### Einfache Beispiele

```python
# Variablen, die noch keinen Wert haben
result = None
user_input = None

# Funktionen geben standardmäßig None zurück
def greet(name):
    print(f"Hello, {name}")

return_value = greet("Alice")  # return_value ist None

# Prüfen auf None
if result is None:
    print("No result yet")

# Gängiges Muster: optionale Werte
def find_user(username):
    # ... Suchlogik ...
    if user_found:
        return user_data
    else:
        return None  # Nichts gefunden
```

**Wichtig**: Verwenden Sie beim Vergleich mit None immer `is` und `is not`, nicht `==`:

```python
# Korrekt
if value is None:
    # etwas tun

# Falsch (funktioniert aber)
if value == None:
    # etwas tun
```

## 5. Listen – `list`

Listen speichern mehrere Elemente in der Reihenfolge und ermöglichen es Ihnen, sie nach der Erstellung zu ändern. Für umfassende Listenoperationen siehe unseren Leitfaden zu <router-link to="/cheatsheet/lists-and-tuples">Listen und Tupeln</router-link>.

### Einfache Beispiele

```python
# Erstellen von Listen
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, None]  # Listen können verschiedene Typen enthalten
empty = []

# Zugriff auf Elemente (beginnt bei Index 0)
first_fruit = fruits[0]      # "apple"
last_fruit = fruits[-1]      # "orange"
```

### Häufige Operationen

```python
shopping_list = ["milk", "bread"]

# Elemente hinzufügen
shopping_list.append("eggs")         # ["milk", "bread", "eggs"]
shopping_list.insert(0, "butter")    # ["butter", "milk", "bread", "eggs"]
shopping_list.extend(["cheese", "ham"])  # Mehrere Elemente hinzufügen

# Elemente entfernen
shopping_list.remove("milk")         # Erste Übereinstimmung entfernen
last_item = shopping_list.pop()      # Letztes Element entfernen und zurückgeben
first_item = shopping_list.pop(0)    # Erstes Element entfernen und zurückgeben

# Nützliche Operationen
length = len(shopping_list)
has_bread = "bread" in shopping_list
```

### Wann Listen zu verwenden sind

- Wenn Sie geordnete Daten benötigen, die sich ändern können
- Wenn Sie Sammlungen Element für Element aufbauen
- Wenn Sie auf Elemente nach Position zugreifen müssen

```python
# Gute Anwendungsfälle
grades = [85, 92, 78, 96]
todo_items = ["wash dishes", "walk dog", "study Python"]

# Listen verarbeiten
total = sum(grades)
average = total / len(grades)

for item in todo_items:
    print(f"Task: {item}")
```

## 6. Dictionaries – `dict`

Dictionaries speichern Daten als Schlüssel-Wert-Paare, ähnlich einem echten Wörterbuch, bei dem Sie Wörter (Schlüssel) nachschlagen, um Definitionen (Werte) zu finden. Für umfassende Dictionary-Operationen siehe unseren Leitfaden zu <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>.

### Einfache Beispiele

```python
# Erstellen von Dictionaries
person = {"name": "Alice", "age": 30, "city": "New York"}
grades = {"math": 85, "english": 92, "science": 78}
empty = {}

# Werte abrufen
name = person["name"]        # "Alice"
age = person.get("age")      # 30 (sicherere Methode)
height = person.get("height", "unknown")  # "unknown", falls Schlüssel nicht existiert
```

### Häufige Operationen

```python
student = {"name": "Bob", "grade": 85}

# Werte hinzufügen/aktualisieren
student["age"] = 20           # Neues Schlüssel-Wert-Paar hinzufügen
student["grade"] = 90         # Bestehenden Wert aktualisieren

# Nützliche Methoden
keys = student.keys()         # dict_keys(['name', 'grade', 'age'])
values = student.values()     # dict_values(['Bob', 90, 20])
items = student.items()       # dict_items([('name', 'Bob'), ...])

# Auf Schlüssel prüfen
if "name" in student:
    print(f"Student name: {student['name']}")

# Elemente entfernen
age = student.pop("age")      # Wert entfernen und zurückgeben
student.pop("height", None)   # Sicheres Entfernen (kein Fehler, falls Schlüssel fehlt)
```

### Wann Dictionaries zu verwenden sind

- Wenn Sie Werte anhand eines eindeutigen Identifikators nachschlagen müssen
- Speichern strukturierter Daten (wie Datensätze)
- Zählen von Dingen
- Caching/Memoization

```python
# Gute Anwendungsfälle
inventory = {"apples": 50, "bananas": 30, "oranges": 25}
user_profile = {
    "username": "alice123",
    "email": "alice@example.com",
    "is_premium": True
}

# Zählbeispiel
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
# Ergebnis: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```

## 7. Tupel – `tuple`

Tupel sind wie Listen, können aber nach der Erstellung nicht mehr geändert werden. Betrachten Sie sie als "gesperrte" Listen. Erfahren Sie mehr über Tupel in unserem Leitfaden zu <router-link to="/cheatsheet/lists-and-tuples">Listen und Tupeln</router-link>.

### Einfache Beispiele

```python
# Erstellen von Tupeln
coordinates = (10, 20)
rgb_color = (255, 0, 128)
single_item = (42,)    # Beachten Sie das Komma für ein einzelnes Element Tupel
empty = ()

# Klammern sind oft optional
point = 5, 10          # Dasselbe wie (5, 10)
name_age = "Alice", 25 # Dasselbe wie ("Alice", 25)

# Zugriff auf Elemente (wie bei Listen)
x = coordinates[0]     # 10
y = coordinates[1]     # 20
```

### Entpacken von Tupeln (Unpacking)

```python
# Entpacken ist sehr nützlich
point = (100, 200)
x, y = point          # x=100, y=200

# Werte tauschen
a = 5
b = 10
a, b = b, a           # Jetzt a=10, b=5

# Funktion, die mehrere Werte zurückgibt
def get_name_age():
    return "Bob", 25

name, age = get_name_age()
```

### Wann Tupel zu verwenden sind

- Wenn Sie eine feste Sammlung haben, die sich nicht ändert
- Rückgabe mehrerer Werte aus Funktionen
- Als Dictionary-Schlüssel (da sie unveränderlich sind)
- Darstellung von Koordinaten, RGB-Werten usw.

```python
# Gute Anwendungsfälle
WINDOW_SIZE = (800, 600)        # Konstanten
DEFAULT_COLOR = (255, 255, 255) # RGB Weiß

# Dictionary mit Tupel-Schlüsseln
locations = {
    (0, 0): "origin",
    (1, 1): "northeast",
    (-1, -1): "southwest"
}
```

## 8. Mengen (Sets) – `set`

Mengen speichern eindeutige Elemente ohne Duplikate und ohne bestimmte Reihenfolge. Hervorragend geeignet für Mitgliedschaftstests und das Entfernen von Duplikaten. Für umfassende Mengenoperationen siehe unseren Leitfaden zu <router-link to="/cheatsheet/sets">Mengen</router-link>.

### Einfache Beispiele

```python
# Erstellen von Mengen
colors = {"red", "green", "blue"}
numbers = {1, 2, 3, 4, 5}
empty = set()  # Hinweis: {} erstellt ein leeres Dict, nicht eine Menge!

# Aus Listen (entfernt Duplikate)
mixed_list = [1, 2, 2, 3, 3, 3]
unique_numbers = set(mixed_list)  # {1, 2, 3}
```

### Häufige Operationen

```python
tags = {"python", "programming", "beginner"}

# Elemente hinzufügen
tags.add("tutorial")
tags.update(["coding", "learning"])  # Mehrere Elemente hinzufügen

# Elemente entfernen
tags.remove("beginner")     # Fehler, falls Element nicht existiert
tags.discard("advanced")    # Kein Fehler, falls Element nicht existiert

# Mitgliedschaftstest (sehr schnell!)
if "python" in tags:
    print("This is about Python!")

# Mengenoperationen
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2         # {1, 2, 3, 4, 5}
intersection = set1 & set2   # {3}
difference = set1 - set2     # {1, 2}
```

### Wann Mengen zu verwenden sind

- Entfernen von Duplikaten aus einer Sammlung
- Schneller Mitgliedschaftstest
- Mathematische Mengenoperationen
- Verfolgen eindeutiger Besucher, IDs usw.

```python
# Gute Anwendungsfälle
unique_visitors = set()
unique_visitors.add("user123")
unique_visitors.add("user456")
unique_visitors.add("user123")  # Fügt kein Duplikat hinzu
print(len(unique_visitors))     # 2

# Duplikate aus Liste entfernen
items = ["apple", "banana", "apple", "orange", "banana"]
unique_items = list(set(items))  # ['apple', 'banana', 'orange']
```

## Auswahl des richtigen Typs – Tipps aus der Praxis

| Szenario                                       | Bester Typ                                                     | Begründung                                            |
| :--------------------------------------------- | :------------------------------------------------------------- | :---------------------------------------------------- |
| Speichern des Alters eines Benutzers           | <router-link to='/builtin/int'>`int`</router-link>             | Ganze Zahlen, keine Dezimalstellen erforderlich       |
| Produktpreis                                   | <router-link to='/builtin/float'>`float`</router-link>         | Benötigt Dezimalstellen                               |
| Anmeldestatus des Benutzers                    | <router-link to='/builtin/bool'>`bool`</router-link>           | Einfacher Wahr/Falsch-Wert                            |
| Der zweite Vorname des Benutzers (kann fehlen) | <router-link to='/builtin/str'>`str`</router-link> oder `None` | Kann fehlen                                           |
| Artikel im Warenkorb                           | <router-link to='/builtin/list'>`list`</router-link>           | Geordnet, Elemente können hinzugefügt/entfernt werden |
| Benutzerprofil-Daten                           | <router-link to='/builtin/dict'>`dict`</router-link>           | Schlüssel-Wert-Paare (Name, E-Mail usw.)              |
| GPS-Koordinaten                                | <router-link to='/builtin/tuple'>`tuple`</router-link>         | Festes Paar, das sich nicht ändert                    |
| Eindeutige Produktkategorien                   | <router-link to='/builtin/set'>`set`</router-link>             | Keine Duplikate, schnelle Suche                       |

## Spickzettel für Änderbarkeit (Mutability) & Hashbarkeit (Hashability)

| Typ                                                                                                                                                                    | Änderbar? | Hashbar? | Kann Dict-Schlüssel sein? |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- | :------- | :------------------------ |
| <router-link to='/builtin/int'>`int`</router-link>, <router-link to='/builtin/float'>`float`</router-link>, <router-link to='/builtin/complex'>`complex`</router-link> | Nein      | Ja       | ✔                        |
| <router-link to='/builtin/str'>`str`</router-link>                                                                                                                     | Nein      | Ja       | ✔                        |
| <router-link to='/builtin/bool'>`bool`</router-link>                                                                                                                   | Nein      | Ja       | ✔                        |
| `None`                                                                                                                                                                 | Nein      | Ja       | ✔                        |
| <router-link to='/builtin/tuple'>`tuple`</router-link> (mit unveränderlichen Elementen)                                                                                | Nein      | Ja       | ✔                        |
| <router-link to='/builtin/list'>`list`</router-link>                                                                                                                   | Ja        | Nein     | ✘                         |
| <router-link to='/builtin/dict'>`dict`</router-link>                                                                                                                   | Ja        | Nein     | ✘                         |
| <router-link to='/builtin/set'>`set`</router-link>                                                                                                                     | Ja        | Nein     | ✘                         |

## Wichtigste Erkenntnisse für Anfänger

1. **Beginnen Sie einfach**: Verwenden Sie `int` für ganze Zahlen, `float` für Dezimalzahlen, `str` für Text, `bool` für wahr/falsch und `None` für "kein Wert".

2. **Sammlungen leicht gemacht**: Verwenden Sie `list`, wenn Sie Dinge ändern müssen, `tuple`, wenn Sie es nicht müssen, `dict` für Schlüssel-Wert-Paare und `set` für eindeutige Elemente.

3. **Im Zweifelsfall**: `list` und `dict` decken die meisten Sammlungsanforderungen für Anfänger ab.

4. **Üben Sie mit einfachen Beispielen**, bevor Sie zu komplexen Anwendungsfällen übergehen.

5. **Denken Sie daran**: Python ist nachsichtig – Sie können bei Bedarf immer zwischen kompatiblen Typen konvertieren.
