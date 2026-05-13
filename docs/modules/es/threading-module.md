---
title: "Módulo Threading de Python - Hoja de trucos de Python"
description: "El módulo `threading` te permite ejecutar varios hilos en el mismo proceso y coordinarlos con bloqueos."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Threading de Python
</base-title>

El módulo `threading` te permite ejecutar varios hilos en el mismo proceso y coordinarlos con bloqueos.

```python
import threading
```

Los hilos son útiles cuando hay que esperar E/S, como peticiones de red u operaciones con archivos. Normalmente no son la mejor forma de acelerar código Python muy exigente para la CPU.

## Iniciar un hilo

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

`start()` inicia el hilo. `join()` espera a que termine antes de que continúe el programa principal.

## Pasar argumentos

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

Usa `args` para argumentos posicionales y `kwargs` para argumentos con nombre.

## Usar un bloqueo

Los bloqueos ayudan a proteger el estado compartido.

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

## Ejecutar varios hilos

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

El orden real de finalización puede variar porque los hilos se ejecutan concurrentemente, así que este ejemplo ordena el resultado antes de imprimirlo.

## Enlaces relacionados

- <router-link to="/modules/subprocess-module">Módulo: subprocess</router-link>
- <router-link to="/cheatsheet/functions">Hoja de trucos: Funciones</router-link>
- <router-link to="/cheatsheet/context-manager">Hoja de trucos: Gestor de contexto</router-link>
