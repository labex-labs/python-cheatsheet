---
title: 'Модуль Python Pathlib - Шпаргалка по Python'
description: 'Модуль pathlib, добавленный в Python 3.4, предлагает объектно-ориентированный способ работы с путями файловой системы.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python Pathlib
</base-title>

Для глубокого погружения в практические операции с файловой системой ознакомьтесь с нашей статьей в блоге: <router-link to="/blog/python-pathlib-essentials">10 основных операций с файловой системой, которые должен знать каждый разработчик</router-link>.

Модуль `pathlib` был добавлен в Python 3.4 и предлагает объектно-ориентированный способ работы с путями файловой системы.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib против модуля OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> предоставляет гораздо больше функциональных возможностей, чем те, что есть в <code>os</code> и перечислены здесь, например, получение имени файла, получение расширения файла, чтение/запись файла без его ручного открытия и т. д. См. <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">официальную документацию</a>, если хотите узнать больше.
    <br>
    Для более подробного рассмотрения обоих см. страницу <router-link to="/cheatsheet/file-directory-path">Пути к файлам и каталогам</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Пути Linux и Windows

В Windows пути записываются с использованием обратных слешей (`\`) в качестве разделителя между
именами папок. В операционных системах на базе Unix, таких как macOS, Linux и BSD,
в качестве разделителя путей используется прямая косая черта (`/`). Объединение путей может
быть головной болью, если ваш код должен работать на разных платформах.

К счастью, Python предоставляет нам `pathlib.Path.joinpath` для простого решения этой проблемы.

```python
from pathlib import Path

# Объединение компонентов пути
print(Path('usr').joinpath('bin').joinpath('spam'))
```

```output
usr/bin/spam
```

`pathlib` также предоставляет ярлык для joinpath с использованием оператора `/`:

```python
from pathlib import Path

# Использование оператора / для объединения путей
print(Path('usr') / 'bin' / 'spam')
```

```output
usr/bin/spam
```

Объединение путей полезно, если вам нужно создать разные пути к файлам в одном и том же каталоге.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# Получить домашний каталог пользователя
home = Path.home()
# Объединить каждое имя файла с домашним каталогом
for filename in my_files:
    print(home / filename)
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Текущий рабочий каталог

```python
from pathlib import Path
from os import chdir

# Получить текущий рабочий каталог
print(Path.cwd())
```

```output
/home/labex/project
```

```python
# Смена каталога с использованием модуля os
chdir('/usr/lib/python3.10')
# Проверить текущий каталог
print(Path.cwd())
```

```output
/usr/lib/python3.10
```

## Создание новых папок

```python
from pathlib import Path
cwd = Path.cwd()
# Создать каталог (вызовет ошибку, если родительские каталоги не существуют)
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

Причина этой ошибки в том, что каталог 'delicious' не существует, поэтому мы не можем создать каталоги 'walnut' и 'waffles' внутри него. Чтобы исправить это, сделайте следующее:

```python
from pathlib import Path
cwd = Path.cwd()
# Создать каталог со всеми родительскими каталогами
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## Абсолютные и относительные пути

Существует два способа указать путь к файлу.

- **Абсолютный путь**, который всегда начинается с корневой папки
- **Относительный путь**, который относителен к текущему рабочему каталогу программы

Также существуют папки с точкой (`.`) и двумя точками (`..`). Это не настоящие папки, а специальные имена, которые можно использовать в пути. Одна точка (“точка”) для имени папки является сокращением для “этот каталог”. Две точки (“точка-точка”) означают “родительский каталог”.

### Работа с абсолютными путями

Чтобы проверить, является ли путь абсолютным:

```python
from pathlib import Path
# Проверить, является ли путь абсолютным
Path('/').is_absolute()
```

```output
True
```

```python
# Относительные пути возвращают False
Path('..').is_absolute()
```

```output
False
```

Вы также можете извлечь абсолютный путь:

```python
from pathlib import Path
# Получить текущий каталог
print(Path.cwd())
```

```output
/home/labex/project
```

```python
# Разрешить относительный путь в абсолютный путь
print(Path('..').resolve())
```

```output
/home
```

### Работа с относительными путями

Вы можете получить относительный путь от начального пути к другому пути.

```python
from pathlib import Path
# Получить относительный путь от базового пути
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## Валидность пути и файла

### Проверка существования файла/каталога

```python
from pathlib import Path

# Проверить, существует ли путь
Path('.').exists()
```

```output
True
```

```python
Path('setup.py').exists()
```

```output
True
```

```python
Path('/etc').exists()
```

```output
True
```

```python
Path('nonexistentfile').exists()
```

```output
False
```

### Проверка, является ли путь файлом

```python
from pathlib import Path

# Проверить, является ли путь файлом
Path('setup.py').is_file()
```

```output
True
```

```python
Path('/home').is_file()
```

```output
False
```

```python
Path('nonexistentfile').is_file()
```

```output
False
```

### Проверка, является ли путь каталогом

```python
from pathlib import Path

# Проверить, является ли путь каталогом
Path('/').is_dir()
```

```output
True
```

```python
Path('setup.py').is_dir()
```

```output
False
```

```python
Path('/spam').is_dir()
```

```output
False
```

## Получение размера файла в байтах

```python
from pathlib import Path

# Получить статистику файла
stat = Path('/bin/python3.10').stat()
print(stat) # stat содержит некоторую другую информацию о файле
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# Доступ к размеру файла из объекта stat
print(stat.st_size) # размер в байтах
```

```output
10024
```

## Листинг каталогов

```python
from pathlib import Path

# Итерация по содержимому каталога
for f in Path('/usr/bin').iterdir():
    print(f)
```

```output
...
/usr/bin/tiff2rgba
/usr/bin/iconv
/usr/bin/ldd
/usr/bin/cache_restore
/usr/bin/udiskie
/usr/bin/unix2dos
/usr/bin/t1reencode
/usr/bin/epstopdf
/usr/bin/idle3
...
```

## Размеры файлов каталогов

<base-warning>
  <base-warning-title>
    ПРЕДУПРЕЖДЕНИЕ
  </base-warning-title>
  <base-warning-content>
    Сами по себе каталоги также имеют размер! Поэтому вам может понадобиться проверить, является ли путь файлом или каталогом, используя методы, обсуждавшиеся в предыдущем разделе.
  </base-warning-content>
</base-warning>

```python
from pathlib import Path

# Расчет общего размера всех файлов в каталоге
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

```output
1903178911
```

## Удаление файлов и папок

- Вызов `Path.unlink()` удалит файл по указанному пути.

- Вызов `Path.rmdir()` удалит папку по указанному пути. Эта папка должна быть пуста от каких-либо файлов или папок.

## Связанные ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: Чтение и запись файлов</router-link>
- <router-link to="/modules/os-module">Модуль: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
