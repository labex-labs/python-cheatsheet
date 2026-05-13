---
title: Python Threading Modul - Python Spickzettel
description: Das `threading`-Modul erlaubt dir, mehrere Threads im selben Prozess auszuführen und sie mit Sperren zu koordinieren.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Threading Modul
</base-title>

Das `threading`-Modul erlaubt dir, mehrere Threads im selben Prozess auszuführen und sie mit Sperren zu koordinieren.

```python
import threading
```

Threads sind nützlich, wenn auf E/A gewartet wird, etwa bei Netzwerkanfragen oder Dateioperationen. Sie sind normalerweise nicht der beste Weg, CPU-lastigen Python-Code zu beschleunigen.

## Einen Thread starten

```python
import threading

def worker():
    print('working')

thread = threading.Thread(target=worker)
thread.start()
thread.join()
```

```output
working
```

`start()` startet den Thread. `join()` wartet, bis er beendet ist, bevor das Hauptprogramm weiterläuft.

## Argumente übergeben

```python
import threading

def greet(name):
    print(f'hello {name}')

thread = threading.Thread(target=greet, args=('Ada',))
thread.start()
thread.join()
```

```output
hello Ada
```

Verwende `args` für Positionsargumente und `kwargs` für Schlüsselwortargumente.

## Eine Sperre verwenden

Sperren helfen, gemeinsam genutzten Zustand zu schützen.

```python
import threading

counter = 0
lock = threading.Lock()

with lock:
    counter += 1

print(counter)
```

```output
1
```

## Mehrere Threads ausführen

```python
import threading

results = []
lock = threading.Lock()

def worker(number):
    with lock:
        results.append(f'worker {number}')

threads = []
for number in range(3):
    thread = threading.Thread(target=worker, args=(number,))
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print(sorted(results))
```

```output
['worker 0', 'worker 1', 'worker 2']
```

Die tatsächliche Abschlussreihenfolge kann variieren, weil Threads parallel laufen. Daher sortiert dieses Beispiel das Ergebnis vor dem Ausgeben.

## Relevante Links

- <router-link to="/modules/subprocess-module">Modul: subprocess</router-link>
- <router-link to="/cheatsheet/functions">Spickzettel: Funktionen</router-link>
- <router-link to="/cheatsheet/context-manager">Spickzettel: Kontextmanager</router-link>
