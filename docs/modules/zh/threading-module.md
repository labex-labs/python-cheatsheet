---
title: "Python Threading 模块 - Python 速查表"
description: "`threading` 模块可以让你在同一个进程中运行多个线程，并使用锁来协调它们。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Threading 模块
</base-title>

`threading` 模块可以让你在同一个进程中运行多个线程，并使用锁来协调它们。

```python
import threading
```

线程适合等待 I/O，例如网络请求或文件操作。但它们通常不是加速 CPU 密集型 Python 代码的最佳方式。

## 启动线程

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

`start()` 会启动线程。`join()` 会等待它结束后再继续主程序。

## 传递参数

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

`args` 用于位置参数，`kwargs` 用于关键字参数。

## 使用锁

锁可以帮助保护共享状态。

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

## 运行多个线程

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

由于线程是并发运行的，实际完成顺序可能不同，所以这个示例在打印前先对结果排序。

## 相关链接

- <router-link to="/modules/subprocess-module">模块：subprocess</router-link>
- <router-link to="/cheatsheet/functions">速查表：函数</router-link>
- <router-link to="/cheatsheet/context-manager">速查表：上下文管理器</router-link>
