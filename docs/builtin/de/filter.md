---
title: 'Python filter()-Funktion – Python Spickzettel'
description: 'Erstellt einen Iterator aus den Elementen des Iterierbaren, für die die Funktion WAHR zurückgibt. Das Iterierbare kann eine Sequenz, ein Container mit Iterationsunterstützung oder ein Iterator sein. Ist die Funktion None, wird die Identitätsfunktion angenommen, d.h. alle Elemente des Iterierbaren, die falsch sind, werden entfernt.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python filter()-Built-in-Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Erstellt einen <router-link to="/builtin/iter">Iterator</router-link> aus jenen Elementen des iterierbaren Objekts, für die die Funktion `True` zurückgibt. Das iterierbare Objekt kann eine Sequenz, ein Container, der Iteration unterstützt, oder ein <router-link to="/builtin/iter">Iterator</router-link> sein. Wenn function `None` ist, wird die Identitätsfunktion angenommen, d.h. alle Elemente des iterierbaren Objekts, die falsch sind, werden entfernt.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `filter()`-Funktion in Python ist eine eingebaute Funktion, mit der Sie ein iterierbares Objekt verarbeiten und diejenigen Elemente extrahieren können, die eine bestimmte Bedingung erfüllen. Sie gibt einen <router-link to="/builtin/iter">Iterator</router-link> mit den Elementen zurück, die die Kriterien erfüllen.

## Syntax

```python
filter(function, iterable)
```

- **function**: Die Funktion, die für jedes Element im iterierbaren Objekt ausgeführt werden soll. Sie sollte für jedes Element `True` oder `False` zurückgeben.
- **iterable**: Das zu filternde iterierbare Objekt, z. B. eine Liste, ein Tupel oder ein String.

## Beschreibung

Die `filter()`-Funktion erstellt einen Iterator aus jenen Elementen des iterierbaren Objekts, für die die Funktion `True` zurückgibt. Wenn die Funktion `None` ist, entfernt sie alle Elemente des iterierbaren Objekts, die falsch sind.

## Beispiel

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

Ausgabe:

```plaintext
[2, 4, 6]
```

In diesem Beispiel wird die Funktion `is_even` definiert, um festzustellen, ob eine Zahl gerade ist oder nicht. Die `filter`-Methode nimmt `zwei Argumente` entgegen: das `erste Argument` ist die Funktion, die auf jedes Element der Liste angewendet wird, und das `zweite Argument` ist die zu filternde Liste. Die `filter`-Methode gibt einen <router-link to="/builtin/iter">Iterator</router-link> zurück, der dann in eine Liste umgewandelt und in der Variablen `even_numbers` gespeichert wird. Die endgültige Ausgabe ist die Liste der geraden Zahlen aus der ursprünglichen Liste.

## Relevante Links

- <router-link :to="'/builtin/map'">map()</router-link>: Wendet eine Funktion auf jedes Element eines iterierbaren Objekts an und gibt einen Iterator mit den Ergebnissen zurück.
- <router-link :to="'/builtin/iter'">iter()</router-link>: Gibt ein Iterator-Objekt zurück.
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: Eine prägnante Methode zur Erstellung von Listen, die oft als Alternative zu `filter()` verwendet wird.
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Funktionen</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
