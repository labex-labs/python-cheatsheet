---
title: 'Модуль Python OS - Шпаргалка по Python'
description: 'Этот модуль предоставляет переносимый способ использования функциональности, зависящей от операционной системы.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль OS Python
</base-title>

Этот модуль предоставляет переносимый способ использования функциональности, зависящей от операционной системы.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib против модуля OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    Модуль <router-link to="/modules/pathlib-module">pathlib</router-link> предоставляет гораздо больше функциональности, чем перечислено здесь, например, получение имени файла, получение расширения файла, чтение/запись файла без ручного открытия и т. д. См. <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">официальную документацию</a>, если вы хотите узнать больше.
    <br>
    Для более глубокого изучения обоих см. страницу <router-link to="/cheatsheet/file-directory-path">Пути к файлам и каталогам</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Пути в Linux и Windows

В Windows пути записываются с использованием обратной косой черты (`\`) в качестве разделителя между именами папок. В операционных системах на базе Unix, таких как macOS, Linux и BSD, в качестве разделителя путей используется прямая косая черта (`/`). Объединение путей может быть головной болью, если ваш код должен работать на разных платформах.

К счастью, Python предоставляет нам `os.path.join` для обработки этого.

```python
import os

# Объединить компоненты пути, используя правильный разделитель для ОС
os.path.join('usr', 'bin', 'spam')
```

```output
usr\bin\spam
```

Объединение путей полезно, если вам нужно создать разные пути к файлам в одном и том же каталоге.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# Объединить каждое имя файла с базовым каталогом
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## Текущий рабочий каталог

```python
import os

# Получить текущий рабочий каталог
os.getcwd()
```

```output
/home/labex/project
```

```python
# Изменить текущий рабочий каталог
os.chdir('/usr/bin')

# Проверить изменение
os.getcwd()
```

```output
/usr/bin
```

## Создание новых папок

```python
import os
# Создать каталоги рекурсивно (создает все родительские каталоги при необходимости)
os.makedirs('/tmp/delicious/walnut/waffles')
```

## Абсолютные и относительные пути

Существует два способа указать путь к файлу.

- **Абсолютный путь**, который всегда начинается с корневой папки
- **Относительный путь**, который относителен к текущему рабочему каталогу программы

Также существуют папки с точкой (`.`) и двумя точками (`..`). Это не настоящие папки, а специальные имена, которые можно использовать в пути. Одна точка (“dot”) для имени папки — это сокращение для “текущий каталог”. Две точки (“dot-dot”) означают “родительский каталог”.

### Обработка абсолютных путей

Чтобы проверить, является ли путь абсолютным:

```python
import os
# Проверить, является ли путь абсолютным (начинается с корня)
os.path.isabs('/')
```

```output
True
```

```python
# Относительные пути возвращают False
os.path.isabs('..')
```

```output
False
```

Вы также можете извлечь абсолютный путь:

```python
import os
# Сначала получить текущий каталог
os.getcwd()
```

```output
/home/labex/project
```

```python
# Преобразовать относительный путь в абсолютный
os.path.abspath('..')
```

```output
/home
```

### Обработка относительных путей

Вы можете получить относительный путь от начального пути до другого пути.

```python
import os
# Получить относительный путь от начального пути до целевого пути
os.path.relpath('/etc/passwd', '/')
```

```output
etc/passwd
```

## Валидность пути и файла

### Проверка существования файла/каталога

```python
import os

# Проверить, существует ли путь (файл или каталог)
os.path.exists('.')
```

```output
True
```

```python
os.path.exists('setup.py')
```

```output
True
```

```python
os.path.exists('/etc')
```

```output
True
```

```python
os.path.exists('nonexistentfile')
```

```output
False
```

### Проверка, является ли путь файлом

```python
import os

# Проверить, является ли путь файлом
os.path.isfile('setup.py')
```

```output
True
```

```python
os.path.isfile('/home')
```

```output
False
```

```python
os.path.isfile('nonexistentfile')
```

```output
False
```

### Проверка, является ли путь каталогом

```python
import os

# Проверить, является ли путь каталогом
os.path.isdir('/')
```

```output
True
```

```python
os.path.isdir('setup.py')
```

```output
False
```

```python
os.path.isdir('/spam')
```

```output
False
```

## Получение размера файла в байтах

```python
import os

# Получить размер файла в байтах
os.path.getsize('/usr/bin/python3')
```

```output
776192
```

## Листинг каталогов

```python
import os

# Вывести список всех файлов и каталогов в указанном пути
os.listdir('/usr/bin')
```

```output
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
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
import os
total_size = 0

# Рассчитать общий размер всех файлов в каталоге
for filename in os.listdir('/usr/bin'):
    # Объединить путь к каталогу с именем файла и получить размер
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

```output
1117846456
```

## Удаление файлов и папок

- Вызов `os.unlink(path)` удалит файл по указанному пути.

- Вызов `os.rmdir(path)` удалит папку по указанному пути. Эта папка должна быть пуста от каких-либо файлов или папок.

## Обход дерева каталогов

```python
import os

# Рекурсивный обход дерева каталогов
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'Текущая папка {folder_name}')
    # Итерация по подкаталогам
    for subfolder in subfolders:
        print(f'ПОДПАПКА {folder_name}: {subfolder}')
    # Итерация по файлам
    for filename in filenames:
        print(f'ФАЙЛ ВНУТРИ {folder_name}: filename{filename}')
    print('')
```

```output
Текущая папка /tmp/delicious
ПОДПАПКА /tmp/delicious: cats
ПОДПАПКА /tmp/delicious: walnut
ФАЙЛ ВНУТРИ /tmp/delicious: spam.txt

Текущая папка /tmp/delicious/cats
ФАЙЛ ВНУТРИ /tmp/delicious/cats: catnames.txt
ФАЙЛ ВНУТРИ /tmp/delicious/cats: zophie.jpg

Текущая папка /tmp/delicious/walnut
ПОДПАПКА /tmp/delicious/walnut: waffles

Текущая папка /tmp/delicious/walnut/waffles
ФАЙЛ ВНУТРИ /tmp/delicious/walnut/waffles: butter.txt
```

## Связанные ссылки

- <router-link to="/cheatsheet/file-directory-path">Шпаргалка: Пути к файлам и каталогам</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: Чтение и запись файлов</router-link>
- <router-link to="/blog/python-pathlib-essentials">Блог: Основы Pathlib</router-link>
- <router-link to="/modules/pathlib-module">Модуль: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
