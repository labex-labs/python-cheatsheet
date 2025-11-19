---
title: 'Python Stringformatierung - Python Spickzettel'
description: 'Wenn Sie Python 3.6+ verwenden, sind String-f-Strings die empfohlene Methode zur Formatierung von Strings.'
labUrl: 'https://labex.io/de/labs/python-python-string-formatting-633667?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Stringformatierung
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a href="https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Die hier beschriebenen Formatierungsoperationen (<b>% Operator</b>) weisen eine Vielzahl von Eigenheiten auf, die zu einer Reihe häufiger Fehler führen [...]. Die Verwendung der neueren <a href="#formatted-string-literals-or-f-strings">formatierten String-Literale</a> [...] hilft, diese Fehler zu vermeiden. Diese Alternativen bieten auch leistungsfähigere, flexiblere und erweiterbarere Ansätze zur Textformatierung.
  </base-disclaimer-content>
</base-disclaimer>

## % operator

<base-warning>
  <base-warning-title>
    Bevorzugen Sie String-Literale
  </base-warning-title>
  <base-warning-content>
    Für neuen Code wird dringend empfohlen, <a href="#strformat">str.format</a> oder <a href="#formatted-string-literals-or-f-strings">formatierte String-Literale</a> (Python 3.6+) anstelle des <code>%</code> Operators zu verwenden.
  </base-warning-content>
</base-warning>

```python
# % operator: Stringformatierung alter Art (nicht empfohlen für neuen Code)
name = 'Pete'
'Hello %s' % name  # %s = Platzhalter für String
```

```output
"Hello Pete"
```

Wir können den Format-Spezifizierer `%d` verwenden, um einen int-Wert in einen String umzuwandeln:

```python
num = 5
'I have %d apples' % num
```

```output
"I have 5 apples"
```

## str.format

Python 3 führte eine neue Methode zur Stringformatierung ein, die später auch in Python 2.7 verfügbar gemacht wurde. Dies macht die Syntax für die Stringformatierung regelmäßiger.

```python
# str.format() Methode: moderne Stringformatierung (Python 2.7+)
name = 'John'
age = 20

"Hello I'm {}, my age is {}".format(name, age)  # {} = Platzhalter
```

```output
"Hello I'm John, my age is 20"
```

```python
"Hello I'm {0}, my age is {1}".format(name, age)
```

```output
"Hello I'm John, my age is 20"
```

## Formatted String Literals or f-Strings

Wenn Sie Python 3.6+ verwenden, sind String `f-Strings` die empfohlene Methode zur Formatierung von Strings.

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Ein formatierter String-Literal oder f-String ist ein String-Literal, dem `f` oder `F` vorangestellt ist. Diese Strings können Ersetzungsfelder enthalten, die durch geschweifte Klammern {} begrenzt sind. Während andere String-Literale immer einen konstanten Wert haben, sind formatierte Strings eigentlich Ausdrücke, die zur Laufzeit ausgewertet werden.
  </base-disclaimer-content>
</base-disclaimer>

```python
# f-string: empfohlene Methode zur Stringformatierung (Python 3.6+)
name = 'Elizabeth'
f'Hello {name}!'  # f Präfix erlaubt Ausdrücke in {}
```

```output
'Hello Elizabeth!'
```

Es ist sogar möglich, Inline-Arithmetik damit durchzuführen:

```python
# f-strings unterstützen Ausdrücke: können Berechnungen innerhalb von {} enthalten
a = 5
b = 10
f'Five plus ten is {a + b} and not {2 * (a + b)}.'  # Wertet Ausdrücke aus
```

```output
'Five plus ten is 15 and not 30.'
```

### Multiline f-Strings

```python
name = 'Robert'
messages = 12
(
f'Hi, {name}. '
f'You have {messages} unread messages'
)
```

```output
'Hi, Robert. You have 12 unread messages'
```

### Der = Spezifizierer

Dieser gibt sowohl den Ausdruck als auch seinen Wert aus:

```python
# = Spezifizierer: gibt sowohl den Variablennamen als auch den Wert aus (Python 3.8+)
from datetime import datetime
now = datetime.now().strftime("%b/%d/%Y - %H:%M:%S")
f'date and time: {now=}'  # Gibt "now='Nov/14/2022 - 20:50:01'" aus
```

```output
"date and time: now='Nov/14/2022 - 20:50:01'"
```

### Hinzufügen von Leerzeichen oder Zeichen

```python
name = 'Robert'
f"{name.upper() = :-^20}"
```

```output
'name.upper() = -------ROBERT-------'
```

```python
f"{name.upper() = :^20}"
```

```output
'name.upper() =        ROBERT       '
```

```python
f"{name.upper() = :20}"
```

```output
'name.upper() = ROBERT              '
```

## Formatierung von Ziffern

Hinzufügen eines Tausendertrennzeichens

```python
a = 10000000
f"{a:,}"
```

```output
'10,000,000'
```

Rundung

```python
a = 3.1415926
f"{a:.2f}"
```

```output
'3.14'
```

Als Prozentsatz anzeigen

```python
a = 0.816562
f"{a:.2%}"
```

```output
'81.66%'
```

### Zahlformatierungstabelle

| Zahl       | Format  | Ausgabe   | Beschreibung                                 |
| ---------- | ------- | --------- | -------------------------------------------- |
| 3.1415926  | {:.2f}  | 3.14      | Float mit 2 Dezimalstellen formatieren       |
| 3.1415926  | {:+.2f} | +3.14     | Float mit 2 Dezimalstellen und Vorzeichen    |
| -1         | {:+.2f} | -1.00     | Float mit 2 Dezimalstellen und Vorzeichen    |
| 2.71828    | {:.0f}  | 3         | Float ohne Dezimalstellen formatieren        |
| 4          | {:0>2d} | 04        | Mit Nullen auffüllen (linksbündig, Breite 2) |
| 4          | {:x<4d} | 4xxx      | Mit x auffüllen (rechtsbündig, Breite 4)     |
| 10         | {:x<4d} | 10xx      | Mit x auffüllen (rechtsbündig, Breite 4)     |
| 1000000    | {:,}    | 1,000,000 | Zahlenformat mit Komma als Trennzeichen      |
| 0.35       | {:.2%}  | 35.00%    | Prozentformatierung                          |
| 1000000000 | {:.2e}  | 1.00e+09  | Exponentialschreibweise                      |
| 11         | {:11d}  | 11        | Rechtsbündig (Standard, Breite 10)           |
| 11         | {:<11d} | 11        | Linksbündig (Breite 10)                      |
| 11         | {:^11d} | 11        | Zentriert ausgerichtet (Breite 10)           |

## Template Strings

Ein einfacherer und weniger leistungsfähiger Mechanismus, der jedoch empfohlen wird, wenn Strings verarbeitet werden, die von Benutzern generiert wurden. Aufgrund ihrer geringeren Komplexität sind Template-Strings die sicherere Wahl.

```python
from string import Template
name = 'Elizabeth'
t = Template('Hey $name!')
t.substitute(name=name)
```

```output
'Hey Elizabeth!'
```

## Relevante Links

- <router-link to="/cheatsheet/manipulating-strings">Strings bearbeiten</router-link>
- <router-link to="/blog/python-data-types">Python Datentypen Blogbeitrag</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
