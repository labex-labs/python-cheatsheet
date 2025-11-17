---
title: 'Python open()-Funktion – Python Spickzettel'
description: 'Öffnet eine Datei und gibt ein entsprechendes Datei-Objekt zurück. Wenn die Datei nicht geöffnet werden kann, wird ein OSError ausgelöst. Weitere Beispiele zur Verwendung dieser Funktion finden Sie unter Lesen und Schreiben von Dateien.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python open() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Öffnet eine Datei und gibt ein entsprechendes Datei-Objekt zurück. Wenn die Datei nicht geöffnet werden kann, wird ein OSError ausgelöst. Weitere Beispiele zur Verwendung dieser Funktion finden Sie unter <router-link to="/cheatsheet/file-directory-path">Dateien lesen und schreiben</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die `open()` Funktion in Python wird verwendet, um eine Datei zu öffnen und gibt ein Datei-Objekt zurück. Es ist der Standardweg, um mit Dateien auf Ihrem System zu interagieren. Sie können den Modus für das Öffnen der Datei angeben, z. B. Lesen, Schreiben oder Anhängen.

## Beispiele

```python
# Öffnet eine brandneue Datei (im 'x' Modus wird ein Fehler ausgelöst, wenn sie bereits existiert)
spam = open('spam.txt', mode='x')
spam.write('Meine erste Zeile\n\n')
spam.close()
```

```python
# Hängt an die Datei an und schließt sie danach automatisch
with open('spam.txt', mode='a') as spam:
    spam.write('Meine zweite Zeile')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

Ausgabe:

```plaintext
Meine erste Zeile

Meine zweite Zeile
```

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Spickzettel: Dateien lesen und schreiben</router-link>
- <router-link to="/cheatsheet/file-directory-path">Spickzettel: Datei- & Verzeichnispfad</router-link>
- <router-link to="/cheatsheet/context-manager">Spickzettel: Kontextmanager (with Anweisung)</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Pathlib Grundlagen</router-link>
- <router-link to="/modules/os-module">Modul: os</router-link>
- <router-link to="/modules/pathlib-module">Modul: pathlib</router-link>
