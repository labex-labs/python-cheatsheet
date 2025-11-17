---
title: 'Python globals()-Funktion – Python Spickzettel'
description: 'Gibt das Wörterbuch zurück, das den aktuellen Modul-Namespace implementiert. Für Code innerhalb von Funktionen wird dies bei der Definition der Funktion festgelegt und bleibt unabhängig davon, wo die Funktion aufgerufen wird, unverändert.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion globals()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt das Wörterbuch zurück, das den aktuellen Modul-Namensraum implementiert. Für Code innerhalb von Funktionen wird dies beim Definieren der Funktion festgelegt und bleibt unabhängig davon, wo die Funktion aufgerufen wird, gleich.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `globals()` in Python gibt ein Wörterbuch zurück, das die aktuelle globale Symboltabelle darstellt. Dies umfasst alle globalen Variablen, Funktionen und andere Objekte im aktuellen Gültigkeitsbereich.

Sie kann nützlich sein, um den globalen Namensraum zu untersuchen oder um dynamisch auf globale Variablen über deren Zeichenkettennamen zuzugreifen.

### Beispiele

```python
# Definiere eine globale Variable
global_var = "Ich bin global"

def my_function():
    # Greife auf globale Variablen mit globals() zu
    global_dict = globals()
    print(global_dict["global_var"])

    # Modifiziere eine globale Variable
    global_dict["global_var"] = "Global modifiziert"

my_function()
print(global_var)
```

Ausgabe:

```plaintext
I am global
Modified global
```

Sie können `globals()` auch verwenden, um neue globale Variablen innerhalb einer Funktion zu erstellen:

```python
def create_global():
    globals()["new_global"] = "Dies wurde dynamisch erstellt"

create_global()
print(new_global)
```

Ausgabe:

```plaintext
This was created dynamically
```

## Relevante Links

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
