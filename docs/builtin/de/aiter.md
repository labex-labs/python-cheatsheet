---
title: 'Python aiter()-Funktion – Python Spickzettel'
description: 'Gibt einen asynchronen Iterator für ein asynchrones iterierbares Objekt zurück. Entspricht dem Aufruf von x.__aiter__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion aiter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Gibt einen asynchronen Iterator für ein asynchrones iterierbares Objekt zurück. Entspricht dem Aufruf von x.__aiter__(). aiter() ist ein asynchrones Äquivalent zu iter()
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `aiter()` gibt einen asynchronen Iterator aus einem asynchron iterierbaren Objekt zurück. Sie ist das asynchrone Äquivalent der Funktion `iter()`.

Normalerweise verwenden Sie `aiter()` implizit, wenn Sie eine `async for`-Schleife verwenden, aber Sie können sie direkt aufrufen, wenn Sie manuell mit dem Iterator arbeiten müssen, oft in Verbindung mit `anext()`.

## Beispiel

Hier ist ein Beispiel für ein asynchron iterierbares Objekt. Die `async for`-Schleife ruft automatisch `aiter()` für das `AsyncCounter`-Objekt auf, um einen Iterator zu erhalten.

```python
import asyncio

class AsyncCounter:
    def __init__(self, stop):
        self.stop = stop
        self.current = 0

    def __aiter__(self):
        return self

    async def __anext__(self):
        if self.current < self.stop:
            await asyncio.sleep(0.1)
            value = self.current
            self.current += 1
            return value
        else:
            raise StopAsyncIteration

async def main():
    async for number in AsyncCounter(3):
        print(number)

# Um dies in einer realen Umgebung auszuführen:
# asyncio.run(main())
```

```output
0
1
2
```

## Relevante Links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Kontrollfluss (async for)</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funktionen (async def)</router-link>
- <router-link to="/modules/itertools-module">Modul: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
