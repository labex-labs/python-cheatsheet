---
title: "Módulo Threading do Python - Folha de Referência Python"
description: "O módulo `threading` permite executar várias threads no mesmo processo e coordená-las com locks."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Threading do Python
</base-title>

O módulo `threading` permite executar várias threads no mesmo processo e coordená-las com locks.

```python
import threading
```

Threads são úteis quando se espera por E/S, como requisições de rede ou operações de arquivo. Normalmente não são a melhor forma de acelerar código Python pesado em CPU.

## Iniciando uma thread

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

`start()` inicia a thread. `join()` espera que ela termine antes de continuar o programa principal.

## Passando argumentos

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

Use `args` para argumentos posicionais e `kwargs` para argumentos nomeados.

## Usando um lock

Locks ajudam a proteger estado compartilhado.

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

## Executando várias threads

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

A ordem real de conclusão pode variar porque as threads rodam em paralelo, então este exemplo ordena o resultado antes de imprimir.

## Links relacionados

- <router-link to="/modules/subprocess-module">Módulo: subprocess</router-link>
- <router-link to="/cheatsheet/functions">Folha de Referência: Funções</router-link>
- <router-link to="/cheatsheet/context-manager">Folha de Referência: Gerenciadores de contexto</router-link>
