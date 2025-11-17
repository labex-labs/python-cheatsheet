---
title: 'Python divmod()-Funktion – Python Spickzettel'
description: 'Nimmt zwei (nicht-komplexe) Zahlen als Argumente und gibt ein Zahlenpaar zurück, bestehend aus Quotient und Rest bei Ganzzahldivision. Bei gemischten Operanden gelten die Regeln für binäre arithmetische Operatoren.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python divmod() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Nimmt zwei (nicht-komplexe) Zahlen als Argumente entgegen und gibt ein Paar von Zahlen zurück, bestehend aus ihrem Quotienten und Rest bei Verwendung der Ganzzahldivision. Bei gemischten Operanden-Typen gelten die Regeln für binäre arithmetische Operatoren.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `divmod()` nimmt zwei Zahlen als Argumente entgegen und gibt ein Tupel zurück, das den Quotienten und den Rest ihrer Ganzzahldivision enthält. Es ist eine bequeme Möglichkeit, beide Ergebnisse in einem einzigen Aufruf zu erhalten.

### Beispiele

```python
# Quotient und Rest erhalten
quotient, remainder = divmod(10, 3)
print(quotient)
print(remainder)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

Ausgabe:

```plaintext
3
1
(1, 0)
(5, 0)
(3, 1)
```

## Relevante Links

- <router-link :to="'/cheatsheet/lists-and-tuples'">Listen und Tupel</router-link>
- <router-link :to="'/blog/python-data-types'">Python Datentypen</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
