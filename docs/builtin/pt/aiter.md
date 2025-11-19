---
title: 'Função Embutida Python aiter() - Guia Rápido Python'
description: 'Retorna um iterador assíncrono para um iterável assíncrono. Equivalente a chamar x.__aiter__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python aiter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna um iterador assíncrono para um objeto iterável assíncrono. Equivalente a chamar x.__aiter__(). aiter() é um equivalente assíncrono de iter()
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `aiter()` retorna um iterador assíncrono a partir de um objeto iterável assíncrono. É o equivalente assíncrono da função `iter()`.

Você tipicamente usará `aiter()` implicitamente ao usar um loop `async for`, mas pode chamá-la diretamente se precisar trabalhar com o iterador manualmente, frequentemente em conjunto com `anext()`.

## Exemplo

Aqui está um exemplo de um iterável assíncrono. O loop `async for` chama `aiter()` automaticamente no objeto `AsyncCounter` para obter um iterador.

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

# Para executar isto em um ambiente real:
# asyncio.run(main())
```

```output
0
1
2
```

## Links relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Fluxo de Controle (async for)</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funções (async def)</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
