---
title: "Python Functools Modul - Python Spickzettel"
description: "Das `functools`-Modul enthält Werkzeuge für höherstufige Funktionen wie `partial`, `reduce` und `lru_cache`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functools Modul
</base-title>

Das `functools`-Modul enthält Werkzeuge für höherstufige Funktionen wie `partial`, `reduce` und `lru_cache`.

```python
import functools
```

Höherstufige Funktionen sind Funktionen, die mit anderen Funktionen arbeiten. Anfänger verwenden `functools` meist, um eine Funktion mit fest vorgegebenen Argumenten wiederzuverwenden oder teure Ergebnisse zwischenzuspeichern.

## partial()

`partial` erzeugt einen neuen Callables, bei dem einige Argumente bereits vorbelegt sind.

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(5))
```

```output
25
```

Das ist hilfreich, wenn eine andere Funktion einen Callable mit weniger Argumenten erwartet:

```python
from functools import partial

def greet(greeting, name):
    return f'{greeting}, {name}!'

say_hello = partial(greet, 'Hello')
print(say_hello('Ada'))
```

```output
Hello, Ada!
```

## reduce()

`reduce` fasst ein Iterable zu einem einzelnen Wert zusammen.

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

Für einfache Summen solltest du die eingebaute Funktion `sum()` bevorzugen. `reduce` ist nützlicher, wenn die Kombinationsoperation speziell ist.

```python
from functools import reduce

words = ['Python', 'Cheatsheet']
title = reduce(lambda left, right: f'{left} {right}', words)
print(title)
```

```output
Python Cheatsheet
```

## lru_cache()

`lru_cache` speichert Funktionsergebnisse zwischen.

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
```

```output
55
```

Du kannst die Cache-Nutzung prüfen:

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## Relevante Links

- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen</router-link>
- <router-link to="/cheatsheet/decorators">Spickzettel: Dekoratoren</router-link>
- <router-link to="/modules/itertools-module">Modul: itertools</router-link>
