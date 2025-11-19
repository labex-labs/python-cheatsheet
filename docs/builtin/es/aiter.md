---
title: 'Función incorporada aiter() de Python - Hoja de trucos de Python'
description: 'Devuelve un iterador asíncrono para un iterable asíncrono. Equivalente a llamar a x.__aiter__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python aiter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve un iterador asíncrono para un objeto iterable asíncrono. Equivalente a llamar a x.__aiter__(). aiter() es el equivalente asíncrono de iter()
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `aiter()` devuelve un iterador asíncrono a partir de un objeto iterable asíncrono. Es el equivalente asíncrono de la función `iter()`.

Normalmente utilizarás `aiter()` implícitamente cuando uses un bucle `async for`, pero puedes llamarla directamente si necesitas trabajar con el iterador manualmente, a menudo junto con `anext()`.

## Ejemplo

Aquí tienes un ejemplo de un iterable asíncrono. El bucle `async for` llama automáticamente a `aiter()` en el objeto `AsyncCounter` para obtener un iterador.

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

# Para ejecutar esto en un entorno real:
# asyncio.run(main())
```

```output
0
1
2
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow (async for)</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions (async def)</router-link>
- <router-link to="/modules/itertools-module">Module: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
