---
title: 'Python __import__()-Funktion – Python Spickzettel'
description: 'Diese Funktion wird durch die import-Anweisung aufgerufen. Sie kann ersetzt werden [...], um die Semantik der import-Anweisung zu ändern, was jedoch dringend abgeraten wird, da es meist einfacher ist, Import-Hooks zu verwenden [...]. Die direkte Verwendung von __import__() wird ebenfalls zugunsten von importlib.import_module() nicht empfohlen.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python `__import__` eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Diese Funktion wird durch die import-Anweisung aufgerufen. Sie kann [...] ersetzt werden, um die Semantik der import-Anweisung zu ändern, was jedoch dringend davon abgeraten wird, da es normalerweise einfacher ist, Import-Hooks [...] zu verwenden. Die direkte Verwendung von __import__() wird ebenfalls zugunsten von importlib.import_module() abgeraten.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `__import__()` ist die zugrunde liegende Funktion, die von der `import`-Anweisung aufgerufen wird. Obwohl es möglich ist, sie direkt zu verwenden, wird dies im Allgemeinen nicht empfohlen. Für das dynamische Importieren von Modulen ist die Funktion `importlib.import_module()` der empfohlene Ansatz.

### Beispiel

Hier sehen Sie, wie Sie `__import__()` verwenden könnten, um das `math`-Modul dynamisch zu importieren:

```python
# Dynamisch das 'math'-Modul importieren
math_module = __import__('math')

# Jetzt können Sie es wie einen regulären Import verwenden
print(math_module.sqrt(4))
```

Ausgabe:

```plaintext
2.0
```

Die empfohlene Methode mit `importlib` ist jedoch:

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

Ausgabe:

```plaintext
2.0
```

## Relevante Links

- <router-link :to="'/modules/importlib'">importlib Modul</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Python Projekte mit Poetry und VS Code (Teil 1)</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
