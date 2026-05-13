---
title: Модуль Threading Python - Шпаргалка Python
description: Модуль `threading` позволяет запускать несколько потоков в одном процессе и координировать их с помощью блокировок.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Threading Python
</base-title>

Модуль `threading` позволяет запускать несколько потоков в одном процессе и координировать их с помощью блокировок.

```python
import threading
```

Потоки полезны, когда нужно ждать ввода-вывода, например сетевых запросов или операций с файлами. Обычно это не лучший способ ускорить Python-код, сильно нагружающий CPU.

## Запуск потока

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

`start()` запускает поток. `join()` ждет его завершения, прежде чем продолжить основную программу.

## Передача аргументов

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

Используйте `args` для позиционных аргументов и `kwargs` для именованных.

## Использование блокировки

Блокировки помогают защищать общее состояние.

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

## Запуск нескольких потоков

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

Фактический порядок завершения может отличаться, потому что потоки работают одновременно, поэтому пример сортирует результат перед выводом.

## Ссылки по теме

- <router-link to="/modules/subprocess-module">Модуль: subprocess</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: функции</router-link>
- <router-link to="/cheatsheet/context-manager">Шпаргалка: менеджеры контекста</router-link>
