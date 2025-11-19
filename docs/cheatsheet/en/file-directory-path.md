---
title: File and directory Paths - Python Cheatsheet
description: There are two main modules in Python that deals with path manipulation. One is the os.path module and the other is the pathlib module.
labUrl: https://labex.io/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Handling file and directory Paths
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

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
# pathlib.Path: cross-platform path handling
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # Join path components
```

```output
usr/bin/spam
```

`pathlib` also provides a shortcut to joinpath using the `/` operator:

```python
# Path operator (/): convenient way to join paths (cross-platform)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # Use / operator instead of joinpath()
```

```output
usr/bin/spam
```

Notice the path separator is different between Windows and Unix based operating
system, that's why you want to use `pathlib` instead of
adding strings together to join paths together.

Joining paths is helpful if you need to create different file paths under
the same directory.

Using `pathlib` on \*nix:

```python
# Path.home(): get user's home directory, combine with filenames
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # Get home directory path
for filename in my_files:
    print(home / filename)  # Combine home path with each filename
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## The current working directory

You can get the current working directory using `pathlib`:

```python
# Path.cwd(): get current working directory
from pathlib import Path

print(Path.cwd())  # Returns current working directory as Path object
```

```output
/home/labex/project
```

## Creating new folders

Using `pathlib` on \*nix:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

Oh no, we got a nasty error! The reason is that the 'delicious' directory does
not exist, so we cannot make the 'walnut' and the 'waffles' directories under
it. To fix this, do:

```python
# mkdir(parents=True): create directory and all parent directories if needed
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # Create nested directories
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
from pathlib import Path
Path('/').is_absolute()
```

```output
True
```

```python
Path('..').is_absolute()
```

```output
False
```

You can extract an absolute path with `pathlib`:

```python
from pathlib import Path
print(Path.cwd())
```

```output
/home/labex/project
```

```python
print(Path('..').resolve())
```

```output
/home
```

### Handling Relative paths

You can get a relative path from a starting path to another path using `pathlib`:

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## Path and File validity

### Checking if a file/directory exists

Using `pathlib` on \*nix:

```python
from pathlib import Path

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

### Checking if a path is a file

Using `pathlib` on \*nix:

```python
from pathlib import Path

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

### Checking if a path is a directory

Using `pathlib` on \*nix:

```python
from pathlib import Path

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

## Getting a file's size in bytes

Using `pathlib` on \*nix:

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat contains some other information about the file as well
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # size in bytes
```

```output
10024
```

## Listing directories

Listing directory contents using `pathlib` on \*nix:

```python
from pathlib import Path

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
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

```output
1903178911
```

## Copying files and folders

The `shutil` module provides functions for copying files, as well as entire folders.

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

```output
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

```output
/tmp/delicious/eggs2.txt
```

While `shutil.copy()` will copy a single file, `shutil.copytree()` will copy an entire folder and every folder and file contained in it:

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

```output
/tmp/bacon_backup
```

## Moving and Renaming

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs/bacon.txt
```

The destination path can also specify a filename. In the following example, the source file is moved and renamed:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

```output
/tmp/eggs/new_bacon.txt
```

If there is no eggs folder, then `move()` will rename bacon.txt to a file named eggs:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs
```

## Deleting files and folders

- Calling `Path.unlink()` will delete the file at path.
- Calling `Path.rmdir()` will delete the folder at path. This folder must be empty of any files or folders.
- Calling `shutil.rmtree(path)` will remove the folder at path, and all files and folders it contains will also be deleted.

## Walking a Directory Tree

The `Path` object has an `rglob()` method for recursively iterating over files and directories.

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

```output
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Reading and Writing Files</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>
- <router-link to="/builtin/open">open()</router-link>
