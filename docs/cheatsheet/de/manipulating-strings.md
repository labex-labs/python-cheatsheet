---
title: 'String-Manipulation - Python Spickzettel'
description: "Ein Escape-Zeichen wird durch Eingabe eines Backslashs \ gefolgt von dem einzufügenden Zeichen erstellt."
labUrl: 'https://labex.io/de/labs/python-python-string-manipulation-633668?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Bearbeiten von Strings
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## Escape-Zeichen

Ein Escape-Zeichen wird erzeugt, indem man einen Backslash `\` gefolgt von dem Zeichen eingibt, das eingefügt werden soll.

| Escape-Zeichen | Ausgabe als                 |
| :------------- | :-------------------------- |
| `\'`           | Einfaches Anführungszeichen |
| `\"`           | Doppeltes Anführungszeichen |
| `\t`           | Tabulator                   |
| `\n`           | Neue Zeile (Zeilenumbruch)  |
| `\\`           | Backslash                   |
| `\b`           | Rückschritt                 |
| `\ooo`         | Oktalwert                   |
| `\r`           | Wagenrücklauf               |

```python
# Escape-Zeichen: Backslash verwenden, um Sonderzeichen einzufügen
# \n = neue Zeile, \' = einfaches Anführungszeichen
print("Hello there!\nHow are you?\nI\'m doing fine.")
```

Ausgabe:

```plaintext
Hello there!
How are you?
I'm doing fine.
```

## Raw Strings (Rohe Strings)

Ein Raw String ignoriert alle Escape-Zeichen vollständig und gibt jeden Backslash aus, der im String vorkommt.

```python
# Raw String (r-Präfix): behandelt Backslashes als literale Zeichen
print(r"Hello there!\nHow are you?\nI\'m doing fine.")  # \n wird wörtlich ausgegeben
```

Ausgabe:

```plaintext
Hello there!\nHow are you?\nI\'m doing fine.
```

Raw Strings werden hauptsächlich für die Definition von <router-link to="/cheatsheet/regular-expressions">Regulären Ausdrücken</router-link> verwendet.

## Mehrzeilige Strings

```python
print(
"""Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob"""
)
```

Ausgabe:

```plaintext
Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob
```

## Indizierung und Slicing von Strings

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

### Indizierung

```python
# String-Indizierung: Zugriff auf Zeichen über die Position (0-basiert)
spam = 'Hello world!'

spam[0]  # Gibt das erste Zeichen zurück: 'H'
```

Ausgabe:

```plaintext
'H'
```

```python
spam[4]
```

Ausgabe:

```plaintext
'o'
```

```python
spam[-1]
```

Ausgabe:

```plaintext
'!'
```

### Slicing

```python
# String-Slicing: Teilstring extrahieren mit der [start:ende]-Syntax
spam = 'Hello world!'

spam[0:5]  # Gibt die Zeichen von Index 0 bis 4 zurück: 'Hello'
```

Ausgabe:

```plaintext
'Hello'
```

```python
spam[:5]
```

Ausgabe:

```plaintext
'Hello'
```

```python
spam[6:]
```

Ausgabe:

```plaintext
'world!'
```

```python
spam[6:-1]
```

Ausgabe:

```plaintext
'world'
```

```python
spam[:-1]
```

Ausgabe:

```plaintext
'Hello world'
```

```python
spam[::-1]
```

Ausgabe:

```plaintext
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

Ausgabe:

```plaintext
'Hello'
```

## Die Operatoren in und not in

```python
'Hello' in 'Hello World'
```

Ausgabe:

```plaintext
True
```

```python
'Hello' in 'Hello'
```

Ausgabe:

```plaintext
True
```

```python
'HELLO' in 'Hello World'
```

Ausgabe:

```plaintext
False
```

```python
'' in 'spam'
```

Ausgabe:

```plaintext
True
```

```python
'cats' not in 'cats and dogs'
```

Ausgabe:

```plaintext
False
```

## upper(), lower() und title()

Wandelt einen String in Großbuchstaben, Kleinbuchstaben und Titel-Case um:

```python
greet = 'Hello world!'
greet.upper()
```

Ausgabe:

```plaintext
'HELLO WORLD!'
```

```python
greet.lower()
```

Ausgabe:

```plaintext
'hello world!'
```

```python
greet.title()
```

Ausgabe:

```plaintext
'Hello World!'
```

## isupper() und islower() Methoden

Gibt `True` oder `False` zurück, nachdem ausgewertet wurde, ob ein String in Groß- oder Kleinbuchstaben vorliegt:

```python
spam = 'Hello world!'
spam.islower()
```

Ausgabe:

```plaintext
False
```

```python
spam.isupper()
```

Ausgabe:

```plaintext
False
```

```python
'HELLO'.isupper()
```

Ausgabe:

```plaintext
True
```

```python
'abc12345'.islower()
```

Ausgabe:

```plaintext
True
```

```python
'12345'.islower()
```

Ausgabe:

```plaintext
False
```

```python
'12345'.isupper()
```

Ausgabe:

```plaintext
False
```

## Die isX String-Methoden

| Methode     | Beschreibung                                                                                                                         |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| isalpha()   | gibt `True` zurück, wenn der String nur aus Buchstaben besteht.                                                                      |
| isalnum()   | gibt `True` zurück, wenn der String nur aus Buchstaben und Zahlen besteht.                                                           |
| isdecimal() | gibt `True` zurück, wenn der String nur aus Zahlen besteht.                                                                          |
| isspace()   | gibt `True` zurück, wenn der String nur aus Leerzeichen, Tabs und Zeilenumbrüchen besteht.                                           |
| istitle()   | gibt `True` zurück, wenn der String nur aus Wörtern besteht, die mit einem Großbuchstaben beginnen, gefolgt von nur Kleinbuchstaben. |

## startswith() und endswith()

```python
'Hello world!'.startswith('Hello')
```

Ausgabe:

```plaintext
True
```

```python
'Hello world!'.endswith('world!')
```

Ausgabe:

```plaintext
True
```

```python
'abc123'.startswith('abcdef')
```

Ausgabe:

```plaintext
False
```

```python
'abc123'.endswith('12')
```

Ausgabe:

```plaintext
False
```

```python
'Hello world!'.startswith('Hello world!')
```

Ausgabe:

```plaintext
True
```

```python
'Hello world!'.endswith('Hello world!')
```

Ausgabe:

```plaintext
True
```

## join() und split()

### join()

Die Methode `join()` nimmt alle Elemente eines Iterierbaren, wie einer <router-link to="/cheatsheet/lists-and-tuples">Liste</router-link>, <router-link to="/cheatsheet/dictionaries">Dictionary</router-link>, <router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">Tupel</router-link> oder <router-link to="/cheatsheet/sets">Set</router-link>, und fügt sie zu einem String zusammen. Sie können auch ein Trennzeichen angeben.

```python
''.join(['My', 'name', 'is', 'Simon'])
```

Ausgabe:

```plaintext
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

Ausgabe:

```plaintext
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

Ausgabe:

```plaintext
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

Ausgabe:

```plaintext
'MyABCnameABCisABCSimon'
```

### split()

Die Methode `split()` teilt einen `String` in eine `Liste`. Standardmäßig verwendet sie Leerzeichen, um die Elemente zu trennen, aber Sie können auch ein anderes Zeichen Ihrer Wahl festlegen:

```python
'My name is Simon'.split()
```

Ausgabe:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

Ausgabe:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

Ausgabe:

```plaintext
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

Ausgabe:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

Ausgabe:

```plaintext
['', 'My', '', 'name', 'is', '', 'Simon']
```

## Textausrichtung mit rjust(), ljust() und center()

```python
'Hello'.rjust(10)
```

Ausgabe:

```plaintext
'     Hello'
```

```python
'Hello'.rjust(20)
```

Ausgabe:

```plaintext
'               Hello'
```

```python
'Hello World'.rjust(20)
```

Ausgabe:

```plaintext
'         Hello World'
```

```python
'Hello'.ljust(10)
```

Ausgabe:

```plaintext
'Hello     '
```

```python
'Hello'.center(20)
```

Ausgabe:

```plaintext
'       Hello       '
```

Ein optionales zweites Argument für `rjust()` und `ljust()` legt ein Füllzeichen außer dem Leerzeichen fest:

```python
'Hello'.rjust(20, '*')
```

Ausgabe:

```plaintext
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

Ausgabe:

```plaintext
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

Ausgabe:

```plaintext
'=======Hello========'
```

## Entfernen von Leerzeichen mit strip(), rstrip() und lstrip()

```python
spam = '    Hello World     '
spam.strip()
```

Ausgabe:

```plaintext
'Hello World'
```

```python
spam.lstrip()
```

Ausgabe:

```plaintext
'Hello World     '
```

```python
spam.rstrip()
```

Ausgabe:

```plaintext
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

Ausgabe:

```plaintext
'BaconSpamEggs'
```

## Die Count-Methode

Zählt die Anzahl der Vorkommen eines gegebenen Zeichens oder Substrings in dem String, auf den sie angewendet wird. Optional können Start- und Endindex angegeben werden.

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

Ausgabe:

```plaintext
3
```

```python
sentence.count('e')
```

Ausgabe:

```plaintext
9
```

```python
# zählt das Vorkommen von e nach 'one sh' d.h. 6 Zeichen vom Stringanfang
sentence.count('e', 6)
```

Ausgabe:

```plaintext
8
```

```python
sentence.count('e', 7)
```

Ausgabe:

```plaintext
7
```

## Replace-Methode

Ersetzt alle Vorkommen eines gegebenen Substrings durch einen anderen Substring. Optional kann ein drittes Argument angegeben werden, um die Anzahl der Ersetzungen zu begrenzen. Gibt einen neuen String zurück.

```python
text = "Hello, world!"
text.replace("world", "planet")
```

Ausgabe:

```plaintext
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

Ausgabe:

```plaintext
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

Ausgabe:

```plaintext
'I like oranges, Apples are my favorite fruit'
```

## Relevante Links

- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/cheatsheet/string-formatting">String Formatierung</router-link>
- <router-link to="/cheatsheet/regular-expressions">Reguläre Ausdrücke</router-link>
