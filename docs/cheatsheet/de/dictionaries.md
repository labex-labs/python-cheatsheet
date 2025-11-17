---
title: 'Python Dictionaries – Python Spickzettel'
description: 'Ein Python-Dictionary ist eine (ab Python > 3.7) einfügegeordnete Sammlung von Schlüssel-Wert-Paaren.'
labUrl: 'https://labex.io/de/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Wörterbücher
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

In Python ist ein Wörterbuch (Dictionary) eine _geordnete_ (ab Python > 3.7) Sammlung von `Schlüssel`: `Wert`-Paaren.

<base-disclaimer>
  <base-disclaimer-title>
    Aus der Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Die Hauptoperationen für ein Wörterbuch sind das Speichern eines Wertes mit einem bestimmten Schlüssel und das Extrahieren des Wertes anhand des Schlüssels. Es ist auch möglich, ein Schlüssel:Wert-Paar mit <code>del</code> zu löschen.
  </base-disclaimer-content>
</base-disclaimer>

Beispiel-Wörterbuch:

```python
# Dictionary: Sammlung von Schlüssel-Wert-Paaren
my_cat = {
    'size': 'fat',          # Schlüssel: 'size', Wert: 'fat'
    'color': 'gray',         # Schlüssel: 'color', Wert: 'gray'
    'disposition': 'loud'    # Schlüssel: 'disposition', Wert: 'loud'
}
```

## Schlüssel, Wert mit dem Subskript-Operator `[]` setzen

```python
# Wörterbucheintrag hinzufügen oder aktualisieren mit dem Subskript-Operator
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
my_cat['age_years'] = 2  # Neues Schlüssel-Wert-Paar hinzufügen
print(my_cat)
```

Ausgabe:

```plaintext
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## Wert mit dem Subskript-Operator `[]` abrufen

Falls der Schlüssel nicht im Wörterbuch vorhanden ist, wird <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a> ausgelöst.

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

Ausgabe:

```plaintext
fat
```

```python
print(my_cat['eye_color'])
```

Ausgabe:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

Die Methode `values()` ruft die **Werte** des Wörterbuchs ab:

```python
# Über Wörterbuchwerte mit der .values()-Methode iterieren
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # Durch alle Werte iterieren
    print(value)
```

Ausgabe:

```plaintext
red
42
```

## keys()

Die Methode `keys()` ruft die **Schlüssel** des Wörterbuchs ab:

```python
# Über Wörterbuchschlüssel mit der .keys()-Methode iterieren
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # Durch alle Schlüssel iterieren
    print(key)
```

Ausgabe:

```plaintext
color
age
```

Es ist nicht notwendig, **.keys()** zu verwenden, da standardmäßig über die Schlüssel iteriert wird:

```python
# Die direkte Iteration über ein Wörterbuch iteriert über die Schlüssel (Standardverhalten)
pet = {'color': 'red', 'age': 42}
for key in pet:  # Äquivalent zu for key in pet.keys()
    print(key)
```

Ausgabe:

```plaintext
color
age
```

## items()

Die Methode `items()` ruft die **Elemente** eines Wörterbuchs ab und gibt sie als <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>Tupel</router-link> zurück:

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

Ausgabe:

```plaintext
('color', 'red')
('age', 42)
```

Mithilfe der Methoden `keys()`, `values()` und `items()` kann eine for-Schleife über die Schlüssel, Werte bzw. Schlüssel-Wert-Paare in einem Wörterbuch iterieren.

```python
# Über Schlüssel-Wert-Paare mit der .items()-Methode iterieren
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # Tupel in Schlüssel und Wert entpacken
    print(f'Key: {key} Value: {value}')
```

Ausgabe:

```plaintext
Key: color Value: red
Key: age Value: 42
```

## get()

Die Methode `get()` gibt den Wert eines Elements mit dem angegebenen Schlüssel zurück. Wenn der Schlüssel nicht existiert, gibt sie `None` zurück:

```python
# .get()-Methode: Wert sicher abrufen, gibt None zurück, wenn Schlüssel nicht existiert
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # Gibt 'Rose' zurück
```

Ausgabe:

```plaintext
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

Ausgabe:

```plaintext
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

Ausgabe:

```plaintext
'She is deeply in love with None'
```

Sie können auch den Standardwert `None` durch einen von Ihnen gewählten Wert ersetzen:

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

Ausgabe:

```plaintext
'She is deeply in love with lover'
```

## Elemente mit setdefault() hinzufügen

Es ist möglich, ein Element auf diese Weise zu einem Wörterbuch hinzuzufügen:

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

Mit der Methode `setdefault` können wir denselben Code kürzer schreiben:

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

Ausgabe:

```plaintext
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## Elemente entfernen

### pop()

Die Methode `pop()` entfernt und gibt ein Element basierend auf einem gegebenen Schlüssel zurück.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

Ausgabe:

```plaintext
33
```

```python
wife
```

Ausgabe:

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### popitem()

Die Methode `popitem()` entfernt das letzte Element in einem Wörterbuch und gibt es zurück.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

Ausgabe:

```plaintext
('hair', 'brown')
```

```python
wife
```

Ausgabe:

```plaintext
{'name': 'Rose', 'age': 33}
```

### del()

Die Methode `del()` entfernt ein Element basierend auf einem gegebenen Schlüssel.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

Ausgabe:

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

Die Methode `clear()` entfernt alle Elemente in einem Wörterbuch.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

Ausgabe:

```plaintext
{}
```

## Schlüssel in einem Wörterbuch überprüfen

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

Ausgabe:

```plaintext
True
```

```python
'height' in person.keys()
```

Ausgabe:

```plaintext
False
```

```python
'skin' in person # Sie können keys() weglassen
```

Ausgabe:

```plaintext
False
```

## Werte in einem Wörterbuch überprüfen

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

Ausgabe:

```plaintext
True
```

```python
33 in person.values()
```

Ausgabe:

```plaintext
True
```

## Pretty Printing

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

Ausgabe:

```plaintext
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## Zwei Wörterbücher zusammenführen

Für Python 3.5+:

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_a, **dict_b}
dict_c
```

Ausgabe:

```plaintext
{'a': 1, 'b': 3, 'c': 4}
```

## Relevante Links

- <router-link to="/blog/python-data-types">Python Datentypen Blogbeitrag</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args und \*\*kwargs leicht gemacht</router-link>
- <router-link to="/cheatsheet/comprehensions">Comprehensions</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args und Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions Schritt für Schritt</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
