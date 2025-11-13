---
title: File and directory Paths - Python Cheatsheet
description: There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Handling file and directory Paths
</base-title>

For a deep dive into practical file system operations, check out our blog post: <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>.

There are two main modules in Python that deal with path manipulation.
One is the <router-link to="/modules/os-module">os.path</router-link> module and the other is the <router-link to="/modules/pathlib-module">pathlib</router-link> module.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs OS Module
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> provides a lot more functionality than the ones listed above, like getting file name, getting file extension, reading/writing a file without manually opening it, etc. See the <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">official documentation</a> if you intend to know more.
  </base-disclaimer-content>
</base-disclaimer>

## Linux and Windows Paths

On Windows, paths are written using backslashes (`\`) as the separator between
folder names. On Unix based operating system such as macOS, Linux, and BSDs,
the forward slash (`/`) is used as the path separator. Joining paths can be
a headache if your code needs to work on different platforms.

Fortunately, Python's `pathlib` module provides an easy way to handle this.

Using `pathlib` on \*nix:

```python
>>> from pathlib import Path

>>> print(Path('usr').joinpath('bin').joinpath('spam'))
# usr/bin/spam
```

`pathlib` also provides a shortcut to joinpath using the `/` operator:

```python
>>> from pathlib import Path

>>> print(Path('usr') / 'bin' / 'spam')
# usr/bin/spam
```

Notice the path separator is different between Windows and Unix based operating
system, that's why you want to use `pathlib` instead of
adding strings together to join paths together.

Joining paths is helpful if you need to create different file paths under
the same directory.

Using `pathlib` on \*nix:

```python
>>> my_files = ['accounts.txt', 'details.csv', 'invite.docx']
>>> home = Path.home()
>>> for filename in my_files:
...     print(home / filename)
...
# /home/asweigart/accounts.txt
# /home/asweigart/details.csv
# /home/asweigart/invite.docx
```

## The current working directory

You can get the current working directory using `pathlib`:

```python
>>> from pathlib import Path

>>> print(Path.cwd())
# /home/asweigart
```

## Creating new folders

Using `pathlib` on \*nix:

```python
>>> from pathlib import Path
>>> cwd = Path.cwd()
>>> (cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
#   File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
#     self._accessor.mkdir(self, mode)
#   File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
#     return strfunc(str(pathobj), *args)
# FileNotFoundError: [Errno 2] No such file or directory: '/home/asweigart/delicious/walnut/waffles'
```

Oh no, we got a nasty error! The reason is that the 'delicious' directory does
not exist, so we cannot make the 'walnut' and the 'waffles' directories under
it. To fix this, do:

```python
>>> from pathlib import Path
>>> cwd = Path.cwd()
>>> (cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

And all is good :)

## Absolute vs. Relative paths

There are two ways to specify a file path.

- An **absolute path**, which always begins with the root folder
- A **relative path**, which is relative to the program’s current working directory

There are also the dot (`.`) and dot-dot (`..`) folders. These are not real folders, but special names that can be used in a path. A single period (“dot”) for a folder name is shorthand for “this directory.” Two periods (“dot-dot”) means “the parent folder.”

### Handling Absolute paths

To see if a path is an absolute path using `pathlib`:

```python
>>> from pathlib import Path
>>> Path('/').is_absolute()
# True

>>> Path('..').is_absolute()
# False
```

You can extract an absolute path with `pathlib`:

```python
from pathlib import Path
print(Path.cwd())
# /home/asweigart

print(Path('..').resolve())
# /home
```

### Handling Relative paths

You can get a relative path from a starting path to another path using `pathlib`:

```python
>>> from pathlib import Path
>>> print(Path('/etc/passwd').relative_to('/'))
# etc/passwd
```

## Path and File validity

### Checking if a file/directory exists

Using `pathlib` on \*nix:

```python
from pathlib import Path

>>> Path('.').exists()
# True

>>> Path('setup.py').exists()
# True

>>> Path('/etc').exists()
# True

>>> Path('nonexistentfile').exists()
# False
```

### Checking if a path is a file

Using `pathlib` on \*nix:

```python
>>> from pathlib import Path

>>> Path('setup.py').is_file()
# True

>>> Path('/home').is_file()
# False

>>> Path('nonexistentfile').is_file()
# False
```

### Checking if a path is a directory

Using `pathlib` on \*nix:

```python
>>> from pathlib import Path

>>> Path('/').is_dir()
# True

>>> Path('setup.py').is_dir()
# False

>>> Path('/spam').is_dir()
# False
```

## Getting a file's size in bytes

Using `pathlib` on \*nix:

```python
>>> from pathlib import Path

>>> stat = Path('/bin/python3.6').stat()
>>> print(stat) # stat contains some other information about the file as well
# os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
# --snip--
# st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)

>>> print(stat.st_size) # size in bytes
# 10024
```

## Listing directories

Listing directory contents using `pathlib` on \*nix:

```python
>>> from pathlib import Path

>>> for f in Path('/usr/bin').iterdir():
...     print(f)
...
# ...
# /usr/bin/tiff2rgba
# /usr/bin/iconv
# /usr/bin/ldd
# /usr/bin/cache_restore
# /usr/bin/udiskie
# /usr/bin/unix2dos
# /usr/bin/t1reencode
# /usr/bin/epstopdf
# /usr/bin/idle3
# ...
```

## Directory file sizes

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Directories themselves also have a size! So, you might want to check for whether a path is a file or directory using the methods in the methods discussed in the above section.
  </base-warning-content>
</base-warning>

Using `pathlib` on \*nix:

```python
>>> from pathlib import Path

>>> total_size = 0
>>> for sub_path in Path('/usr/bin').iterdir():
...     total_size += sub_path.stat().st_size
...
>>> print(total_size)
# 1903178911
```

## Copying files and folders

The `shutil` module provides functions for copying files, as well as entire folders.

```python
>>> import shutil

>>> shutil.copy('C:\\spam.txt', 'C:\\delicious')
# C:\\delicious\\spam.txt'

>>> shutil.copy('C:\\eggs.txt', 'C:\\delicious\\eggs2.txt')
# 'C:\\delicious\\eggs2.txt'
```

While `shutil.copy()` will copy a single file, `shutil.copytree()` will copy an entire folder and every folder and file contained in it:

```python
>>> import shutil

>>> shutil.copytree('C:\\bacon', 'C:\\bacon_backup')
# 'C:\\bacon_backup'
```

## Moving and Renaming

```python
>>> import shutil

>>> shutil.move('C:\\bacon.txt', 'C:\\eggs')
# 'C:\\eggs\\bacon.txt'
```

The destination path can also specify a filename. In the following example, the source file is moved and renamed:

```python
>>> shutil.move('C:\\bacon.txt', 'C:\\eggs\\new_bacon.txt')
# 'C:\\eggs\\new_bacon.txt'
```

If there is no eggs folder, then `move()` will rename bacon.txt to a file named eggs:

```python
>>> shutil.move('C:\\bacon.txt', 'C:\\eggs')
# 'C:\\eggs'
```

## Deleting files and folders

- Calling `Path.unlink()` will delete the file at path.
- Calling `Path.rmdir()` will delete the folder at path. This folder must be empty of any files or folders.
- Calling `shutil.rmtree(path)` will remove the folder at path, and all files and folders it contains will also be deleted.

## Walking a Directory Tree

The `Path` object has an `rglob()` method for recursively iterating over files and directories.

```python
>>> from pathlib import Path
>>>
>>> p = Path('C:\\delicious')
>>> for i in p.rglob('*'):
...     print(i)
...
# C:\\delicious\\cats
# C:\\delicious\\walnut
# C:\\delicious\\spam.txt
# C:\\delicious\\cats\\catnames.txt
# C:\\delicious\\cats\\zophie.jpg
# C:\\delicious\\walnut\\waffles
# C:\\delicious\\walnut\\waffles\\butter.txt
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Reading and Writing Files</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>
- <router-link to="/builtin/open">open()</router-link>
