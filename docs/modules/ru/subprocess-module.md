---
title: 'Модуль Python Subprocess - Шпаргалка по Python'
description: 'Модуль subprocess позволяет запускать и управлять системными процессами.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python Subprocess
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) — это встроенный модуль, который позволяет нам запускать новые системные процессы, подключаться к их потокам ввода/вывода/ошибок и получать их коды возврата.

```python
import subprocess
```

## Запуск системной команды

Функция `run` используется для выполнения системной команды.

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

Если вы хотите выполнить команду как одну строку, а не как список, используйте:

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

Обе команды автоматически выведут результат в терминал.

<base-warning>
  <base-warning-title>
    ПРЕДУПРЕЖДЕНИЕ
  </base-warning-title>
  <base-warning-content>
    Избегайте использования `shell=True` с недоверенным вводом (риск внедрения команд оболочки).
  </base-warning-content>
</base-warning>

## Захват вывода

Чтобы захватить вывод, установите `capture_output` в `True`:

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

Здесь `text=True` указывает функции считывать вывод как текст, а не как байты.

Код возврата `returncode` 0 указывает на успех; любое ненулевое значение указывает на ошибку.

## Проверка ошибок

Хотя мы можем проверить успех, используя код возврата, существует более питонический способ сделать это:

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

Если `check` установлено в `True`, а код возврата не равен 0 (неуспешная операция), subprocess вызовет исключение `subprocess.CalledProcessError`, которое можно обработать обычным способом с помощью блока `except`.

## Запуск команд с таймаутом

Вы можете установить таймаут для процесса. Если он займет больше указанного времени, будет вызвано исключение `subprocess.TimeoutExpired`:

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## Запись вывода в файл

Вы можете перенаправить вывод в файл, установив `stdout` (и `stderr`, если необходимо) в файловый объект:

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

Здесь как обычный вывод, так и ошибки появятся в файле в том порядке, в котором они генерируются.

**Примечание:** `text=True` полезен, когда вы хотите обрабатывать вывод как строку в Python. Он не является строго необходимым при прямом перенаправлении вывода в файл.

## Соответствующие ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Чтение и запись файлов</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Путь к файлу и каталогу</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet: Обработка исключений</router-link>
- <router-link to="/modules/os-module">Module: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
