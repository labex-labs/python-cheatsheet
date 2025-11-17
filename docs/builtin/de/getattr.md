---
title: 'Python getattr()-Funktion – Python Spickzettel'
description: 'Gibt den Wert des benannten Attributs eines Objekts zurück. Name muss ein String sein. Wenn der String der Name eines Attributs des Objekts ist, ist das Ergebnis der Wert dieses Attributs.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python getattr() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Gibt den Wert des benannten Attributs von object zurück. name muss ein String sein. Wenn der String der Name eines der Attribute des Objekts ist, ist das Ergebnis der Wert dieses Attributs.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `getattr()` Funktion in Python ist eine eingebaute Funktion, mit der Sie auf das Attribut eines Objekts anhand seines Namens zugreifen können, der als String übergeben wird. Dies ist eine leistungsstarke Funktion für die dynamische Programmierung, da sie es Ihnen ermöglicht, ein Attribut abzurufen, dessen Name erst zur Laufzeit bekannt ist. Sie können auch einen Standardwert angeben, der zurückgegeben wird, falls das Attribut nicht existiert, was hilft, Fehler zu vermeiden.

## Syntax

```python
getattr(object, name)
```

oder

```python
getattr(object, name, default)
```

-`object`: Das Objekt, dessen Attribut Sie abrufen möchten.

-`name`: Der Name des Attributs, das Sie abrufen möchten.

-`default`: (Optional) Der Wert, der zurückgegeben wird, falls das Attribut nicht gefunden wird. Wenn nicht angegeben, wird `None` zurückgegeben.

## Beispiel

```python
class Example:
    attribute = "Hello, World!"

# Erstellen einer Instanz der Klasse
obj = Example()

# Verwenden von getattr, um auf das Attribut zuzugreifen
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

Ausgabe:

```plaintext
Hello, World!
```

Hinweis: Wenn das 'attribute' nicht existiert, wird 'Nothing found' ausgegeben.

## Relevante Links

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Grundlagen</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
