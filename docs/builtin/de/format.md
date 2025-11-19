---
title: 'Python format()-Funktion – Python Spickzettel'
description: 'Konvertiert einen Wert in eine „formatierte“ Darstellung, gesteuert durch format_spec. Die Interpretation von format_spec hängt vom Typ des Wertarguments ab. [...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python format()-Funktion (eingebaut)
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Konvertiert einen Wert in eine „formatierte“ Darstellung, gesteuert durch format_spec. Die Interpretation von format_spec hängt vom Typ des value-Arguments ab. [...].
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `format()`-Funktion in Python ist eine vielseitige eingebaute Funktion, mit der Sie formatierte Zeichenketten erstellen können. Sie bietet eine Möglichkeit, Werte in eine Zeichenkette einzubetten, deren Ausrichtung zu steuern und ihre Darstellung festzulegen, wie z. B. die Anzahl der Dezimalstellen oder die Auffüllung.

Die <router-link to="/builtin/format">format()</router-link>-Funktion formatiert einen angegebenen Wert in ein angegebenes Format.

## Beispiele

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatierung von Zeichenketten (schneller und einfacher)
print(f"My name is {name} and I work for {company}.")
```

```output
My name is Micheal and I work for Dunder Mifflin.
My name is Micheal and I work for Dunder Mifflin.
```

## Relevante Links

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Stringformatierung</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Zeichenketten bearbeiten</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
