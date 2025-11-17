---
title: 'Пути к файлам и каталогам - Шпаргалка по Python'
description: 'В Python есть два основных модуля для работы с путями: os.path и pathlib.'
labUrl: 'https://labex.io/ru/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Обработка путей к файлам и каталогам
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Для глубокого погружения в практические операции с файловой системой ознакомьтесь с нашей статьей в блоге: <router-link to="/blog/python-pathlib-essentials">10 основных операций с файловой системой, которые должен знать каждый разработчик</router-link>.

В Python есть два основных модуля, которые занимаются манипулированием путями.
Один из них — модуль <router-link to="/modules/os-module">os.path</router-link>, а другой — модуль <router-link to="/modules/pathlib-module">pathlib</router-link>.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib против модуля OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> предоставляет гораздо больше функциональных возможностей, чем перечислено выше, например, получение имени файла, получение расширения файла, чтение/запись файла без его ручного открытия и т. д. См. <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">официальную документацию</a>, если хотите узнать больше.
  </base-disclaimer-content>
</base-disclaimer>

## Пути в Linux и Windows

В Windows пути записываются с использованием обратных слешей (`\`) в качестве разделителя между
именами папок. В операционных системах на базе Unix, таких как macOS, Linux и BSD,
в качестве разделителя путей используется прямая косая черта (`/`). Объединение путей может
быть головной болью, если ваш код должен работать на разных платформах.

К счастью, модуль `pathlib` в Python предоставляет простой способ справиться с этим.

Использование `pathlib` в \*nix:

```python
# pathlib.Path: кроссплатформенная обработка путей
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # Объединить компоненты пути
```

Вывод:

```plaintext
usr/bin/spam
```

`pathlib` также предоставляет ярлык для `joinpath` с использованием оператора `/`:

```python
# Оператор Path (/): удобный способ объединения путей (кроссплатформенный)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # Использовать оператор / вместо joinpath()
```

Вывод:

```plaintext
usr/bin/spam
```

Обратите внимание, что разделитель путей отличается между Windows и операционными системами на базе Unix, поэтому вам следует использовать `pathlib` вместо
склеивания строк для объединения путей.

Объединение путей полезно, если вам нужно создать разные пути к файлам в одном и том же каталоге.

Использование `pathlib` в \*nix:

```python
# Path.home(): получить домашний каталог пользователя, объединить с именами файлов
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # Получить путь к домашнему каталогу
for filename in my_files:
    print(home / filename)  # Объединить домашний путь с каждым именем файла
```

Вывод:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Текущий рабочий каталог

Вы можете получить текущий рабочий каталог с помощью `pathlib`:

```python
# Path.cwd(): получить текущий рабочий каталог
from pathlib import Path

print(Path.cwd())  # Возвращает текущий рабочий каталог в виде объекта Path
```

Вывод:

```plaintext
/home/labex/project
```

## Создание новых папок

Использование `pathlib` в \*nix:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

Вывод:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

О нет, мы получили досадную ошибку! Причина в том, что каталог 'delicious' не существует, поэтому мы не можем создать каталоги 'walnut' и 'waffles' внутри него. Чтобы исправить это, сделайте следующее:

```python
# mkdir(parents=True): создать каталог и все родительские каталоги, если необходимо
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # Создать вложенные каталоги
```

И все в порядке :)

## Абсолютные и относительные пути

Существует два способа указать путь к файлу.

- **Абсолютный путь**, который всегда начинается с корневой папки
- **Относительный путь**, который относителен к текущему рабочему каталогу программы

Также существуют папки с точкой (`.`) и двумя точками (`..`). Это не настоящие папки, а специальные имена, которые можно использовать в пути. Одна точка («точка») для имени папки является сокращением для «этот каталог». Две точки («две точки») означают «родительский каталог».

### Обработка абсолютных путей

Чтобы проверить, является ли путь абсолютным, используя `pathlib`:

```python
from pathlib import Path
Path('/').is_absolute()
```

Вывод:

```plaintext
True
```

```python
Path('..').is_absolute()
```

Вывод:

```plaintext
False
```

Вы можете извлечь абсолютный путь с помощью `pathlib`:

```python
from pathlib import Path
print(Path.cwd())
```

Вывод:

```plaintext
/home/labex/project
```

```python
print(Path('..').resolve())
```

Вывод:

```plaintext
/home
```

### Обработка относительных путей

Вы можете получить относительный путь от начального пути к другому пути, используя `pathlib`:

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

Вывод:

```plaintext
etc/passwd
```

## Проверка допустимости пути и файла

### Проверка существования файла/каталога

Использование `pathlib` в \*nix:

```python
from pathlib import Path

Path('.').exists()
```

Вывод:

```plaintext
True
```

```python
Path('setup.py').exists()
```

Вывод:

```plaintext
True
```

```python
Path('/etc').exists()
```

Вывод:

```plaintext
True
```

```python
Path('nonexistentfile').exists()
```

Вывод:

```plaintext
False
```

### Проверка, является ли путь файлом

Использование `pathlib` в \*nix:

```python
from pathlib import Path

Path('setup.py').is_file()
```

Вывод:

```plaintext
True
```

```python
Path('/home').is_file()
```

Вывод:

```plaintext
False
```

```python
Path('nonexistentfile').is_file()
```

Вывод:

```plaintext
False
```

### Проверка, является ли путь каталогом

Использование `pathlib` в \*nix:

```python
from pathlib import Path

Path('/').is_dir()
```

Вывод:

```plaintext
True
```

```python
Path('setup.py').is_dir()
```

Вывод:

```plaintext
False
```

```python
Path('/spam').is_dir()
```

Вывод:

```plaintext
False
```

## Получение размера файла в байтах

Использование `pathlib` в \*nix:

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat содержит некоторую другую информацию о файле
```

Вывод:

```plaintext
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # размер в байтах
```

Вывод:

```plaintext
10024
```

## Перечисление каталогов

Перечисление содержимого каталога с помощью `pathlib` в \*nix:

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

Вывод:

```plaintext
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
    Сами каталоги также имеют размер! Поэтому вам может понадобиться проверить, является ли путь файлом или каталогом, используя методы, обсуждавшиеся в предыдущем разделе.
  </base-warning-content>
</base-warning>

Использование `pathlib` в \*nix:

```python
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

Вывод:

```plaintext
1903178911
```

## Копирование файлов и папок

Модуль `shutil` предоставляет функции для копирования файлов, а также целых папок.

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

Вывод:

```plaintext
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

Вывод:

```plaintext
/tmp/delicious/eggs2.txt
```

В то время как `shutil.copy()` скопирует один файл, `shutil.copytree()` скопирует всю папку и все папки и файлы, содержащиеся в ней:

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

Вывод:

```plaintext
/tmp/bacon_backup
```

## Перемещение и переименование

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

Вывод:

```plaintext
/tmp/eggs/bacon.txt
```

В целевом пути также может быть указано имя файла. В следующем примере исходный файл перемещается и переименовывается:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

Вывод:

```plaintext
/tmp/eggs/new_bacon.txt
```

Если папки eggs не существует, то `move()` переименует bacon.txt в файл с именем eggs:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

Вывод:

```plaintext
/tmp/eggs
```

## Удаление файлов и папок

- Вызов `Path.unlink()` удалит файл по указанному пути.
- Вызов `Path.rmdir()` удалит папку по указанному пути. Эта папка должна быть пуста от любых файлов или папок.
- Вызов `shutil.rmtree(path)` удалит папку по указанному пути, а также все содержащиеся в ней файлы и папки.

## Обход дерева каталогов

Объект `Path` имеет метод `rglob()` для рекурсивной итерации по файлам и каталогам.

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

Вывод:

```plaintext
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## Связанные ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Чтение и запись файлов</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 основных операций с файловой системой, которые должен знать каждый разработчик</router-link>
- <router-link to="/builtin/open">open()</router-link>
