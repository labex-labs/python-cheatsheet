---
title: 'Python Context Manager - Python Spickzettel'
description: 'Obwohl Python-Kontextmanager weit verbreitet sind, verstehen nur wenige den Zweck dahinter. Diese Anweisungen, die häufig beim Lesen und Schreiben von Dateien verwendet werden, helfen der Anwendung, Systemspeicher zu schonen und die Ressourcenverwaltung zu verbessern, indem sichergestellt wird, dass bestimmte Ressourcen nur für bestimmte Prozesse genutzt werden.'
labUrl: 'https://labex.io/de/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Context Manager
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Obwohl Pythons Context Manager weit verbreitet sind, verstehen nur wenige den Zweck hinter ihrer Verwendung. Diese Anweisungen, die üblicherweise beim Lesen und Schreiben von Dateien verwendet werden, helfen der Anwendung, Systemspeicher zu schonen und die Ressourcenverwaltung zu verbessern, indem sichergestellt wird, dass bestimmte Ressourcen nur für bestimmte Prozesse verwendet werden.

## Die with-Anweisung

Ein Context Manager ist ein Objekt, das benachrichtigt wird, wenn ein Kontext (ein Codeblock) beginnt und endet. Man verwendet ihn üblicherweise mit der `with`-Anweisung. Sie kümmert sich um die Benachrichtigung.

Zum Beispiel sind Datei-Objekte Context Manager. Wenn ein Kontext endet, wird das Datei-Objekt automatisch geschlossen:

```python
# Context Manager: kümmert sich automatisch um die Ressourcenbereinigung
# Die Datei wird automatisch geschlossen, wenn der 'with'-Block verlassen wird
with open(filename) as f:  # 'f' ist das Datei-Objekt
    file_contents = f.read()

# Die Datei ist hier automatisch geschlossen, auch wenn ein Fehler aufgetreten ist
```

Alles, was die Ausführung des Blocks beendet, bewirkt, dass die Exit-Methode des Context Managers aufgerufen wird. Dies schließt Ausnahmen ein und kann nützlich sein, wenn ein Fehler dazu führt, dass Sie vorzeitig eine geöffnete Datei oder Verbindung verlassen. Das Skript zu beenden, ohne Dateien/Verbindungen ordnungsgemäß zu schließen, ist eine schlechte Idee, die zu Datenverlust oder anderen Problemen führen kann. Durch die Verwendung eines Context Managers können Sie sicherstellen, dass Vorkehrungen getroffen werden, um Schäden oder Verluste auf diese Weise zu verhindern.

## Schreiben Ihres eigenen Context Managers

Es ist auch möglich, einen Context Manager mithilfe der Generator-Syntax dank des Decorators `contextlib.contextmanager` zu schreiben:

```python
# Funktionsbasierter Context Manager unter Verwendung des contextlib Decorators
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # Code vor yield wird bei __enter__ ausgeführt
    yield num + 1   # Der übergebene Wert wird zur 'cm' Variable
    print('Exit')    # Code nach yield wird bei __exit__ ausgeführt

with context_manager(2) as cm:  # cm empfängt den übergebenen Wert (3)
    print('Right in the middle with cm = {}'.format(cm))
```

Ausgabe:

```plaintext
Enter
Right in the middle with cm = 3
Exit
```

## Klassenbasierter Context Manager

Sie können einen klassenbasierten Context Manager definieren. Die Schlüsselmethoden sind `__enter__` und `__exit__`

```python
# Klassenbasierter Context Manager: Implementieren Sie die Methoden __enter__ und __exit__
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Wird beim Betreten des 'with'-Blocks aufgerufen
        print("--enter--")
        return self  # Kann ein Objekt zurückgeben, das als 'as'-Variable verwendet wird

    def __exit__(self, *args):  # Wird beim Verlassen des 'with'-Blocks aufgerufen
        print("--exit--")

with ContextManager():  # Ruft __enter__ auf, dann __exit__, wenn fertig
    print("test")
```

Ausgabe:

```plaintext
--enter--
test
--exit--
```

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/exception-handling">Exception Handling</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>
- <router-link to="/builtin/open">open()</router-link>
