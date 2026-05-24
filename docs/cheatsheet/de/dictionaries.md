---
title: 'Python Dictionaries – Python Spickzettel'
description: 'In Python ist ein Dictionary eine (ab Python > 3.7) in der Einfügereihenfolge geordnete Sammlung von Schlüssel-Wert-Paaren.'
labUrl: 'https://labex.io/de/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Dictionaries
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

In Python ist ein Dictionary eine _geordnete_ (ab Python > 3.7) Sammlung von `key`: `value`-Paaren.

<base-disclaimer>
  <base-disclaimer-title>
    Aus der Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Die Hauptoperationen für ein Dictionary sind das Speichern eines Wertes mit einem bestimmten Schlüssel und das Extrahieren des Wertes anhand des Schlüssels. Es ist auch möglich, ein Schlüssel:Wert-Paar mit <code>del</code> zu löschen.
  </base-disclaimer-content>
</base-disclaimer>

Beispiel-Dictionary:

```python
# Dictionary: collection of key-value pairs
my_cat = {
    'size': 'fat',          # key: 'size', value: 'fat'
    'color': 'gray',         # key: 'color', value: 'gray'
    'disposition': 'loud'    # key: 'disposition', value: 'loud'
}
```

## Schlüssel, Wert mit dem Subskriptoperator `[]` setzen

```python
# Add or update dictionary entry using subscript operator
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
my_cat['age_years'] = 2  # Add new key-value pair
print(my_cat)
```

```output
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## Wert mit dem Subskriptoperator `[]` abrufen

Falls der Schlüssel nicht im Dictionary vorhanden ist, wird <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a> ausgelöst.

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

```output
fat
```

```python
print(my_cat['eye_color'])
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

Die Methode `values()` gibt die **Werte** des Dictionaries zurück:

```python
# Iterate over dictionary values using .values() method
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # Loop through all values
    print(value)
```

```output
red
42
```

## keys()

Die Methode `keys()` gibt die **Schlüssel** des Dictionaries zurück:

```python
# Iterate over dictionary keys using .keys() method
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # Loop through all keys
    print(key)
```

```output
color
age
```

Es ist nicht notwendig, **.keys()** zu verwenden, da standardmäßig über die Schlüssel iteriert wird:

```python
# Iterating over dictionary directly loops through keys (default behavior)
pet = {'color': 'red', 'age': 42}
for key in pet:  # Equivalent to for key in pet.keys()
    print(key)
```

```output
color
age
```

## items()

Die Methode `items()` gibt die **Elemente** eines Dictionaries zurück und liefert sie als <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>Tupel</router-link>:

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

Mithilfe der Methoden `keys()`, `values()` und `items()` kann eine for-Schleife über die Schlüssel, Werte bzw. Schlüssel-Wert-Paare in einem Dictionary iterieren.

```python
# Iterate over key-value pairs using .items() method
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # Unpack tuple into key and value
    print(f'Key: {key} Value: {value}')
```

```output
Key: color Value: red
Key: age Value: 42
```

## get()

Die Methode `get()` gibt den Wert eines Elements mit dem angegebenen Schlüssel zurück. Wenn der Schlüssel nicht existiert, wird `None` zurückgegeben:

```python
# .get() method: safely retrieve value, returns None if key doesn't exist
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # Returns 'Rose'
```

```output
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

```output
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

```output
'She is deeply in love with None'
```

Sie können den Standardwert `None` auch durch einen von Ihnen gewählten Wert ersetzen:

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

```output
'She is deeply in love with lover'
```

## Elemente mit setdefault() hinzufügen

Es ist möglich, ein Element auf diese Weise zu einem Dictionary hinzuzufügen:

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

Mit der Methode `setdefault` können wir denselben Code kürzer gestalten:

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

```output
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## Elemente entfernen

### pop()

Die Methode `pop()` entfernt und gibt ein Element basierend auf einem angegebenen Schlüssel zurück.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

```output
33
```

```python
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

<BaseQuiz id="cheatsheet-dictionaries-1" correct="B">
<template #question>
Was bewirkt <code>pop()</code>, wenn es auf einem Dictionary aufgerufen wird?
</template>

<BaseQuizOption value="A">A. Entfernt nur das Schlüssel-Wert-Paar</BaseQuizOption>
<BaseQuizOption value="B" correct>B. Entfernt und gibt den Wert für den angegebenen Schlüssel zurück</BaseQuizOption>
<BaseQuizOption value="C">C. Gibt nur den Wert zurück, ohne ihn zu entfernen</BaseQuizOption>
<BaseQuizOption value="D">D. Entfernt alle Elemente aus dem Dictionary</BaseQuizOption>
<BaseQuizAnswer>Die Methode <code>pop()</code> entfernt das Schlüssel-Wert-Paar für den angegebenen Schlüssel und gibt den Wert zurück. Wenn der Schlüssel nicht existiert, wird ein <code>KeyError</code> ausgelöst (es sei denn, Sie geben einen Standardwert an).</BaseQuizAnswer>
</BaseQuiz>

### popitem()

Die Methode `popitem()` entfernt das letzte Element in einem Dictionary und gibt es zurück.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

```output
('hair', 'brown')
```

```python
wife
```

```output
{'name': 'Rose', 'age': 33}
```

### del

Die Methode `del` entfernt ein Element basierend auf einem angegebenen Schlüssel.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

Die Methode `clear()` entfernt alle Elemente in einem Dictionary.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

```output
{}
```

## Überprüfen von Schlüsseln in einem Dictionary

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

```output
True
```

```python
'height' in person.keys()
```

```output
False
```

```python
'skin' in person # You can omit keys()
```

```output
False
```

## Überprüfen von Werten in einem Dictionary

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

```output
True
```

```python
33 in person.values()
```

```output
True
```

## Pretty Printing

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

```output
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## Zwei Dictionaries zusammenführen

Für Python 3.5+:

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_b, **dict_a}
dict_c
```

```output
{'b': 2, 'c': 4, 'a': 1}
```

<BaseQuiz id="cheatsheet-dictionaries-2" correct="B">
<template #question>
Was passiert beim Zusammenführen von zwei Dictionaries mit <code>{**dict_b, **dict_a}</code>, wenn beide Dictionaries denselben Schlüssel haben?
</template>

<BaseQuizOption value="A">A. Der Wert von <code>dict_b</code> überschreibt den Wert von <code>dict_a</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. Der Wert von <code>dict_a</code> überschreibt den Wert von <code>dict_b</code></BaseQuizOption>
<BaseQuizOption value="C">C. Beide Werte werden in einer Liste beibehalten</BaseQuizOption>
<BaseQuizOption value="D">D. Es wird ein Fehler ausgelöst</BaseQuizOption>
<BaseQuizAnswer>Beim Zusammenführen von Dictionaries mit dem Entpackungsoperator <code>\*\*</code> überschreibt der Wert des Dictionaries, das später kommt (in diesem Fall <code>dict_a</code>), den Wert des früheren Dictionaries, falls beide denselben Schlüssel haben.</BaseQuizAnswer>
</BaseQuiz>

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
