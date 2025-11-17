---
title: 'Python CSV Modul - Python Spickzettel'
description: 'Python bietet ein csv-Modul, das die einfache Bearbeitung von CSV-Dateien ermöglicht.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python CSV Modul
</base-title>

Das `csv`-Modul bietet Werkzeuge zum Lesen und Schreiben von CSV-Dateien, die üblicherweise für den Datenaustausch verwendet werden.

<base-disclaimer>
  <base-disclaimer-title>
    csv Modul vs. Manuelles Lesen/Schreiben von Dateien
  </base-disclaimer-title>
  <base-disclaimer-content>
    Obwohl Sie CSV-Dateien mit grundlegenden Dateioperationen und String-Methoden lesen und schreiben können (wie <code>open()</code> mit <code>read</code> oder <code>write</code> und <code>split()</code>), ist das <code>csv</code>-Modul dafür konzipiert, Randfälle wie Anführungszeichen in Feldern, eingebettete Trennzeichen und unterschiedliche Zeilenenden zu behandeln. Es gewährleistet die Kompatibilität mit CSV-Dateien, die von anderen Programmen (wie Excel) generiert wurden, und reduziert das Risiko von Parsing-Fehlern. Für die meisten CSV-Aufgaben sollten Sie das <code>csv</code>-Modul gegenüber manuellem Parsing bevorzugen.
    <br>
    Weitere Informationen zu den Grundlagen der Dateibehandlung finden Sie auf der Seite <router-link to="/cheatsheet/file-directory-path">Datei- und Verzeichnispfade</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

Um zu beginnen, importieren Sie das Modul:

```python
import csv
```

## csv.reader()

Diese Funktion empfängt eine Datei, die ein [Iterable von Strings](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format) sein muss. Mit anderen Worten, es sollte die geöffnete Datei sein, wie folgt:

```python
import csv

file_path = 'file.csv'

# CSV-Datei lesen
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # Über jede Zeile iterieren
  for line in reader:
    print(line)
```

Diese Funktion gibt ein Reader-Objekt zurück, über das leicht iteriert werden kann, um jede Zeile zu erhalten. Auf jede Spalte in den entsprechenden Zeilen kann über den Index zugegriffen werden, ohne die eingebaute Funktion [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split) verwenden zu müssen.

## csv.writer()

Diese Funktion empfängt die Datei, in die geschrieben werden soll, als CSV-Datei. Ähnlich wie bei der Reader-Funktion sollte sie wie folgt aufgerufen werden:

```python
import csv

file_path = 'file.csv'

# Datei zum Schreiben von CSV öffnen
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # etwas tun
```

Der Block "etwas tun" kann durch die Verwendung der folgenden Funktionen ersetzt werden:

### writer.writerow()

Schreibt eine einzelne Zeile in die CSV-Datei.

```python
# Kopfzeile schreiben
writer.writerow(['name', 'age', 'city'])
# Datenzeile schreiben
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

Schreibt mehrere Zeilen auf einmal.

```python
# Mehrere Zeilen vorbereiten
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# Alle Zeilen auf einmal schreiben
writer.writerows(rows)
```

## csv.DictReader

Ermöglicht das Lesen von CSV-Dateien und den Zugriff auf jede Zeile als Wörterbuch, wobei standardmäßig die erste Zeile der Datei als Schlüssel (Spaltenüberschriften) verwendet wird.

```python
import csv

# CSV als Wörterbuch lesen (erste Zeile wird zu Schlüsseln)
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # Auf Spalten nach Namen statt nach Index zugreifen
    for row in reader:
        print(row['name'], row['age'])
```

- Jede `row` ist ein `OrderedDict` (oder ein reguläres `dict` in Python 3.8+).
- Wenn Ihre CSV-Datei keine Kopfzeilen hat, können Sie diese mit dem Parameter `fieldnames` angeben:

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

Ermöglicht das Schreiben von Wörterbüchern als Zeilen in eine CSV-Datei. Sie müssen die Feldnamen (Spaltenüberschriften) beim Erstellen des Writers angeben.

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# Wörterbücher in CSV schreiben
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # schreibt die Kopfzeile
    writer.writerows(rows)
```

- Verwenden Sie `writer.writeheader()`, um die Spaltenüberschriften als erste Zeile zu schreiben.
- Jedes Wörterbuch in `writer.writerows()` muss Schlüssel haben, die den beim Erstellen des Writers angegebenen `fieldnames` entsprechen.

## Zusätzliche Parameter für csv.reader() und csv.writer()

### delimiter

Sollte das Zeichen sein, das zur Trennung der Felder verwendet wird. Wie der Dateityp besagt, ist der Standardwert das Komma ','. Abhängig von der lokalen Einstellung kann Excel CSV-Dateien mit dem Semikolon als Trennzeichen generieren.

```python
import csv

# CSV mit Semikolon als Trennzeichen lesen
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

Zeichen oder Zeichenfolge, die eine Zeile beendet. Am häufigsten ist "\r\n", es kann aber auch "\n" sein.

### quotechar

Zeichen, das verwendet wird, um Felder zu kennzeichnen, die Sonderzeichen enthalten (Standard ist `"`).

```python
# Einfaches Anführungszeichen als Kennzeichnungszeichen verwenden
reader = csv.reader(csvfile, quotechar="'")
```

Weitere Details finden Sie in der <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">offiziellen Python csv Moduldokumentation</a>.
