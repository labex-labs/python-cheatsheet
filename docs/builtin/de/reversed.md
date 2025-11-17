---
title: 'Python reversed()-Funktion – Python Spickzettel'
description: 'Gibt einen umgekehrten Iterator zurück. seq muss ein Objekt sein, das eine __reversed__()-Methode besitzt oder das Sequenzprotokoll unterstützt (__len__() und __getitem__() mit ganzzahligen Argumenten ab 0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion reversed()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt einen umgekehrten Iterator zurück. seq muss ein Objekt sein, das eine __reversed__() Methode hat oder das Sequenzprotokoll unterstützt (die __len__() Methode und die __getitem__() Methode mit ganzzahligen Argumenten beginnend bei 0).
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `reversed()` gibt einen umgekehrten Iterator zurück. Das bedeutet, sie kann verwendet werden, um eine Sequenz (wie eine <router-link to="/builtin/list">Liste</router-link>, ein <router-link to="/builtin/tuple">Tupel</router-link> oder einen <router-link to="/builtin/str">String</router-link>) in umgekehrter Reihenfolge zu durchlaufen. Sie modifiziert die ursprüngliche Sequenz nicht, sondern stellt einen neuen Iterator bereit, der Elemente vom Ende zum Anfang liefert.

### Beispiele

Um eine umgekehrte Liste zu erhalten, können Sie den Iterator in eine Liste umwandeln:

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

Ausgabe:

```plaintext
[5, 4, 3, 2, 1]
```

Sie können auch direkt in einer `for`-Schleife darüber iterieren:

```python
for char in reversed("hello"):
    print(char)
```

Ausgabe:

```plaintext
o
l
l
e
h
```

Hier ist ein weiteres Beispiel, das das Iterator-Verhalten demonstriert:

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

Ausgabe:

```plaintext
3
2
1
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Spickzettel: Kontrollfluss (for-Schleifen)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
