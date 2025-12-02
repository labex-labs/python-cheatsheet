---
title: 'Python Subprocess Modul - Python Spickzettel'
description: 'Das Subprocess-Modul ermöglicht das Starten und Verwalten von Systemprozessen.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Subprocess Modul
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) ist ein eingebautes Modul, das es uns ermöglicht, neue Systemprozesse zu starten, sich mit deren Eingabe-/Ausgabe-/Fehlerströmen zu verbinden und ihre Rückgabecodes abzurufen.

```python
import subprocess
```

## Ausführen eines Systembefehls

Die Funktion `run` wird verwendet, um einen Systembefehl auszuführen.

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

Wenn Sie einen Befehl als einzelnen String anstelle einer Liste ausführen möchten, verwenden Sie:

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

Beide geben die Ausgabe automatisch im Terminal aus.

<base-warning>
  <base-warning-title>
    WARNUNG
  </base-warning-title>
  <base-warning-content>
    Vermeiden Sie `shell=True` mit nicht vertrauenswürdigen Eingaben (Risiko einer Shell-Injection).
  </base-warning-content>
</base-warning>

## Erfassen der Ausgabe

Um die Ausgabe zu erfassen, setzen Sie `capture_output` auf `True`:

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

Hier weist `text=True` die Funktion an, die Ausgabe als Text anstelle von Bytes zu lesen.

Ein `returncode` von 0 zeigt Erfolg an; jeder ungleich Null Wert zeigt einen Fehler an.

## Überprüfung auf Fehler

Obwohl wir den Erfolg anhand des Rückgabecodes überprüfen können, gibt es eine pythonischere Methode, dies zu tun:

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

Wenn `check` auf `True` gesetzt ist und der Rückgabecode nicht 0 ist (erfolgloser Vorgang), löst subprocess einen `subprocess.CalledProcessError` aus, der wie gewohnt mit einem except-Block behandelt werden kann.

## Ausführen von Befehlen mit Timeout

Sie können ein Timeout für einen Prozess festlegen. Wenn es länger als die angegebene Zeit dauert, wird `subprocess.TimeoutExpired` ausgelöst:

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## Schreiben der Ausgabe in eine Datei

Sie können die Ausgabe in eine Datei umleiten, indem Sie `stdout` (und `stderr`, falls erforderlich) auf ein Datei-Objekt setzen:

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

Hier erscheinen sowohl die normale Ausgabe als auch Fehler in der Datei, in der Reihenfolge, in der sie generiert werden.

**Hinweis:** `text=True` ist hilfreich, wenn Sie die Ausgabe als String in Python bearbeiten möchten. Es ist nicht unbedingt erforderlich, wenn die Ausgabe direkt in eine Datei umgeleitet wird.

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Lesen und Schreiben von Dateien</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Datei- & Verzeichnispfad</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet: Ausnahmebehandlung</router-link>
- <router-link to="/modules/os-module">Modul: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
