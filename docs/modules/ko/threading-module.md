---
title: "Python Threading 모듈 - Python 치트시트"
description: "`threading` 모듈은 같은 프로세스에서 여러 스레드를 실행하고 락으로 조정할 수 있게 해줍니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Threading 모듈
</base-title>

`threading` 모듈은 같은 프로세스에서 여러 스레드를 실행하고 락으로 조정할 수 있게 해줍니다.

```python
import threading
```

스레드는 네트워크 요청이나 파일 작업처럼 I/O를 기다릴 때 유용합니다. 하지만 CPU를 많이 쓰는 Python 코드를 빠르게 만드는 데는 보통 가장 좋은 방법이 아닙니다.

## 스레드 시작하기

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

`start()`는 스레드를 시작합니다. `join()`은 스레드가 끝날 때까지 기다린 뒤 메인 프로그램을 계속 진행합니다.

## 인자 전달하기

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

`args`는 위치 인자에, `kwargs`는 키워드 인자에 사용합니다.

## 락 사용하기

락은 공유 상태를 보호하는 데 도움이 됩니다.

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

## 여러 스레드 실행하기

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

스레드는 동시에 실행되므로 실제 완료 순서는 달라질 수 있습니다. 그래서 이 예제는 출력하기 전에 결과를 정렬합니다.

## 관련 링크

- <router-link to="/modules/subprocess-module">모듈: subprocess</router-link>
- <router-link to="/cheatsheet/functions">치트시트: 함수</router-link>
- <router-link to="/cheatsheet/context-manager">치트시트: 컨텍스트 매니저</router-link>
