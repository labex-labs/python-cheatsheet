---
title: 'Python Context Manager - Python Spickzettel'
description: 'Obwohl Python-Kontextmanager weit verbreitet sind, verstehen nur wenige den Zweck hinter ihrer Verwendung. Diese Anweisungen, die häufig beim Lesen und Schreiben von Dateien verwendet werden, helfen der Anwendung, Systemressourcen zu schonen und die Ressourcenverwaltung zu verbessern, indem sichergestellt wird, dass bestimmte Ressourcen nur für bestimmte Prozesse genutzt werden.'
labUrl: 'https://labex.io/de/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Context Manager
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Obwohl Python-Kontextmanager weit verbreitet sind, verstehen nur wenige den Zweck hinter ihrer Verwendung. Diese Anweisungen, die üblicherweise beim Lesen und Schreiben von Dateien verwendet werden, helfen der Anwendung, Systemspeicher zu schonen und die Ressourcenverwaltung zu verbessern, indem sichergestellt wird, dass bestimmte Ressourcen nur für bestimmte Prozesse verwendet werden.

## Die with-Anweisung

Ein Kontextmanager ist ein Objekt, das benachrichtigt wird, wenn ein Kontext (ein Codeblock) beginnt und endet. Man verwendet ihn üblicherweise mit der `with`-Anweisung. Diese kümmert sich um die Benachrichtigung.

Zum Beispiel sind Datei-Objekte Kontextmanager. Wenn ein Kontext endet, wird das Datei-Objekt automatisch geschlossen:

```python
# Kontextmanager: kümmert sich automatisch um die Ressourcenbereinigung
# Die Datei wird automatisch geschlossen, wenn der 'with'-Block verlassen wird
with open(filename) as f:  # 'f' ist das Datei-Objekt
    file_contents = f.read()

# Die Datei ist hier automatisch geschlossen, auch wenn ein Fehler aufgetreten ist
```

<BaseQuiz id="cheatsheet-context-manager-1" correct="A">
<template #question>
Was ist der Hauptvorteil der Verwendung eines Kontextmanagers (der <code>with</code>-Anweisung)?
</template>

<BaseQuizOption value="A" correct>A. Automatische Bereinigung von Ressourcen, auch wenn ein Fehler auftritt</BaseQuizOption>
<BaseQuizOption value="B">B. Lässt Code schneller ausführen</BaseQuizOption>
<BaseQuizOption value="C">C. Ermöglicht das gleichzeitige Öffnen mehrerer Dateien</BaseQuizOption>
<BaseQuizOption value="D">D. Verhindert alle Fehler</BaseQuizOption>
<BaseQuizAnswer>Kontextmanager stellen sicher, dass Ressourcen (wie Dateien) ordnungsgemäß bereinigt werden, wenn der Block verlassen wird, auch wenn eine Ausnahme auftritt. Dies verhindert Ressourcenlecks und Datenverlust.</BaseQuizAnswer>
</BaseQuiz>

Alles, was die Ausführung des Blocks beendet, führt dazu, dass die Exit-Methode des Kontextmanagers aufgerufen wird. Dies schließt Ausnahmen ein und kann nützlich sein, wenn ein Fehler dazu führt, dass Sie vorzeitig eine geöffnete Datei oder Verbindung verlassen. Ein Skript zu beenden, ohne Dateien/Verbindungen ordnungsgemäß zu schließen, ist eine schlechte Idee, die zu Datenverlust oder anderen Problemen führen kann. Durch die Verwendung eines Kontextmanagers können Sie sicherstellen, dass Vorkehrungen immer getroffen werden, um auf diese Weise Schäden oder Verluste zu verhindern.

## Schreiben Ihres eigenen Kontextmanagers

Es ist auch möglich, einen Kontextmanager mithilfe der Generator-Syntax dank des Decorators `contextlib.contextmanager` zu schreiben:

```python
# Funktionsbasierter Kontextmanager unter Verwendung des contextlib-Decorators
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # Code vor yield wird bei __enter__ ausgeführt
    try:
        yield num + 1   # Der übergebene Wert wird zur 'cm'-Variable
    finally:
        print('Exit')    # Code nach yield wird bei __exit__ ausgeführt

with context_manager(2) as cm:  # cm empfängt den übergebenen Wert (3)
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## Klassenbasierter Kontextmanager

Sie können einen klassenbasierten Kontextmanager definieren. Die Schlüsselmethoden sind `__enter__` und `__exit__`

```python
# Klassenbasierter Kontextmanager: Implementieren Sie die Methoden __enter__ und __exit__
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Wird beim Betreten des 'with'-Blocks aufgerufen
        print("--enter--")
        return self  # Kann ein Objekt zurückgeben, das als 'as'-Variable verwendet wird

    def __exit__(self, *args):  # Wird beim Verlassen des 'with'-Blocks aufgerufen
        print("--exit--")

with ContextManager():  # Ruft __enter__ auf, dann __exit__, wenn fertig
    print("test")
```

```output
--enter--
test
--exit--
```

<BaseQuiz id="cheatsheet-context-manager-2" correct="B">
<template #question>
Welche Methoden muss eine Klasse implementieren, um als Kontextmanager verwendet werden zu können?
</template>

<BaseQuizOption value="A">A. <code>**init**</code> und <code>**del**</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>**enter**</code> und <code>**exit**</code></BaseQuizOption>
<BaseQuizOption value="C">C. <code>open</code> und <code>close</code></BaseQuizOption>
<BaseQuizOption value="D">D. <code>start</code> und <code>stop</code></BaseQuizOption>
<BaseQuizAnswer>Ein klassenbasierter Kontextmanager muss <code>**enter**</code> (aufgerufen beim Betreten des <code>with</code>-Blocks) und <code>**exit**</code> (aufgerufen beim Verlassen des Blocks) implementieren.</BaseQuizAnswer>
</BaseQuiz>

## Relevante Links

- <router-link to="/cheatsheet/reading-and-writing-files">Lesen und Schreiben von Dateien</router-link>
- <router-link to="/cheatsheet/exception-handling">Fehlerbehandlung</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 wesentliche Dateisystemoperationen, die jeder Entwickler kennen sollte</router-link>
- <router-link to="/builtin/open">open()</router-link>
