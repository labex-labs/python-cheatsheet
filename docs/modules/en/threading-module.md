---
title: Python Threading Module - Python Cheatsheet
description: The threading module lets you run multiple threads in the same process and coordinate them with locks.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Threading Module
</base-title>

The `threading` module lets you run multiple threads in the same process and coordinate them with locks.

```python
import threading
```

Threads are useful for waiting on I/O, such as network requests or file operations. They are not usually the best way to speed up CPU-heavy Python code.

## Starting a thread

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

`start()` begins the thread. `join()` waits for it to finish before the main program continues.

## Passing arguments

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

Use `args` for positional arguments and `kwargs` for keyword arguments.

## Using a lock

Locks help protect shared state.

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

## Running several threads

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

The actual completion order may vary because threads run concurrently, so this example sorts the result before printing.

## Relevant links

- <router-link to="/modules/subprocess-module">Module: subprocess</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Context Manager</router-link>
