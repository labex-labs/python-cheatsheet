---
title: 'Dateien lesen und schreiben - Python Spickzettel'
description: "Zum Lesen/Schreiben in eine Datei in Python verwenden Sie die 'with'-Anweisung, die die Datei nach Gebrauch automatisch schließt und die Ressourcenverwaltung übernimmt."
labUrl: 'https://labex.io/de/labs/python-python-reading-and-writing-files-633663?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Dateien lesen und schreiben
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Für eine eingehendere Betrachtung der Manipulation von Datei- und Verzeichnispfaden siehe die Seite <router-link to="/cheatsheet/file-directory-path">Datei- und Verzeichnispfade</router-link>.

## Der Prozess des Datei lesens/schreibens

Um in Python in eine Datei zu lesen/schreiben, sollten Sie die `with`-Anweisung verwenden, die die Datei für Sie schließt, sobald Sie fertig sind, und die verfügbaren Ressourcen für Sie verwaltet.

## Dateien öffnen und lesen

Die Funktion `open` öffnet eine Datei und gibt ein entsprechendes Datei-Objekt zurück.

```python
# Datei mit 'with'-Anweisung lesen: schließt die Datei automatisch, wenn fertig
with open('/home/labex/project/hi.txt') as hello_file:
    hello_content = hello_file.read()  # Gesamten Dateiinhalt lesen

hello_content
```

```output
'Hello World!'
```

Alternativ können Sie die Methode _readlines()_ verwenden, um eine Liste von String-Werten aus der Datei zu erhalten, einen String für jede Textzeile:

```python
# readlines()-Methode: gibt Liste von Strings zurück, einen pro Zeile
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()  # Gibt Liste mit jeder Zeile als String zurück
```

```output
['When, in disgrace with fortune and men's eyes,\n',
 ' I all alone beweep my  outcast state,\n',
 "And trouble deaf heaven with my bootless cries,\n",
 "And look upon myself and curse my fate,']
```

Sie können auch zeilenweise durch die Datei iterieren:

```python
# Zeilenweise durch Datei iterieren (speichereffizient für große Dateien)
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file:  # Datei-Objekt ist iterierbar
        print(line, end='')  # Ohne zusätzliche neue Zeile ausgeben
```

```output
When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
```

## In Dateien schreiben

```python
# In Datei schreiben: 'w'-Modus überschreibt vorhandene Datei
with open('bacon.txt', 'w') as bacon_file:  # 'w' = Schreibmodus
    bacon_file.write('Hello world!\n')  # Gibt die Anzahl der geschriebenen Zeichen zurück
```

```output
13
```

```python
# An Datei anhängen: 'a'-Modus hängt an vorhandene Datei an
with open('bacon.txt', 'a') as bacon_file:  # 'a' = Anhängemodus
    bacon_file.write('Bacon is not a vegetable.')
```

```output
25
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

```output
Hello world!
Bacon is not a vegetable.
```

## Relevante Links

- <router-link to="/cheatsheet/file-directory-path">Datei- und Verzeichnispfade</router-link>
- <router-link to="/cheatsheet/json-yaml">JSON und YAML</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 wesentliche Dateisystemoperationen, die jeder Entwickler kennen sollte</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/print">print()</router-link>
