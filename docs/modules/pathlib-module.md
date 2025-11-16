---
title: Python Pathlib Module - Python Cheatsheet
description: The pathlib module was added in Python 3.4, offering an object-oriented way to handle file system paths.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Pathlib Module
</base-title>

For a deep dive into practical file system operations, check out our blog post: <router-link to="/blog/python-pathlib-essentials">10 Essential File System Operations Every Developer Should Know</router-link>.

The `pathlib` module was added in Python 3.4, offering an object-oriented way to handle file system paths.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs OS Module
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> provides a lot more functionality than the ones from <code>os</code> and listed here, like getting file name, getting file extension, reading/writing a file without manually opening it, etc. See the <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">official documentation</a> if you intend to know more.
    <br>
    For a more in-depth look at both, see the <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link> page.
  </base-disclaimer-content>
</base-disclaimer>

## Linux and Windows Paths

On Windows, paths are written using backslashes (`\`) as the separator between
folder names. On Unix based operating system such as macOS, Linux, and BSDs,
the forward slash (`/`) is used as the path separator. Joining paths can be
a headache if your code needs to work on different platforms.

Fortunately, Python provides us with `pathlib.Path.joinpath` to easily handle this.

```python
from pathlib import Path

# Join path components
print(Path('usr').joinpath('bin').joinpath('spam'))
```

Output:

```plaintext
usr/bin/spam
```

`pathlib` also provides a shortcut to joinpath using the `/` operator:

```python
from pathlib import Path

# Use / operator to join paths
print(Path('usr') / 'bin' / 'spam')
```

Output:

```plaintext
usr/bin/spam
```

Joining paths is helpful if you need to create different file paths under
the same directory.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# Get user's home directory
home = Path.home()
# Join each filename with home directory
for filename in my_files:
    print(home / filename)
```

Output:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## The current working directory

```python
from pathlib import Path
from os import chdir

# Get current working directory
print(Path.cwd())
```

Output:

```plaintext
/home/labex/project
```

```python
# Change directory using os module
chdir('/usr/lib/python3.10')
# Verify current directory
print(Path.cwd())
```

Output:

```plaintext
/usr/lib/python3.10
```

## Creating new folders

```python
from pathlib import Path
cwd = Path.cwd()
# Create directory (will fail if parent directories don't exist)
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

The reason of this error is that the 'delicious' directory does
not exist, so we cannot make the 'walnut' and the 'waffles' directories under
it. To fix this, do:

```python
from pathlib import Path
cwd = Path.cwd()
# Create directory with all parent directories
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## Absolute vs. Relative paths

There are two ways to specify a file path.

- An **absolute path**, which always begins with the root folder
- A **relative path**, which is relative to the program’s current working directory

There are also the dot (`.`) and dot-dot (`..`) folders. These are not real folders, but special names that can be used in a path. A single period (“dot”) for a folder name is shorthand for “this directory.” Two periods (“dot-dot”) means “the parent folder.”

### Handling Absolute paths

To see if a path is an absolute path:

```python
from pathlib import Path
# Check if path is absolute
Path('/').is_absolute()
```

Output:

```plaintext
True
```

```python
# Relative paths return False
Path('..').is_absolute()
```

Output:

```plaintext
False
```

You can also extract an absolute path:

```python
from pathlib import Path
# Get current directory
print(Path.cwd())
```

Output:

```plaintext
/home/labex/project
```

```python
# Resolve relative path to absolute path
print(Path('..').resolve())
```

Output:

```plaintext
/home
```

### Handling Relative paths

You can get a relative path from a starting path to another path.

```python
from pathlib import Path
# Get relative path from base path
print(Path('/etc/passwd').relative_to('/'))
```

Output:

```plaintext
etc/passwd
```

## Path and File validity

### Checking if a file/directory exists

```python
from pathlib import Path

# Check if path exists
Path('.').exists()
```

Output:

```plaintext
True
```

```python
Path('setup.py').exists()
```

Output:

```plaintext
True
```

```python
Path('/etc').exists()
```

Output:

```plaintext
True
```

```python
Path('nonexistentfile').exists()
```

Output:

```plaintext
False
```

### Checking if a path is a file

```python
from pathlib import Path

# Check if path is a file
Path('setup.py').is_file()
```

Output:

```plaintext
True
```

```python
Path('/home').is_file()
```

Output:

```plaintext
False
```

```python
Path('nonexistentfile').is_file()
```

Output:

```plaintext
False
```

### Checking if a path is a directory

```python
from pathlib import Path

# Check if path is a directory
Path('/').is_dir()
```

Output:

```plaintext
True
```

```python
Path('setup.py').is_dir()
```

Output:

```plaintext
False
```

```python
Path('/spam').is_dir()
```

Output:

```plaintext
False
```

## Getting a file's size in bytes

```python
from pathlib import Path

# Get file statistics
stat = Path('/bin/python3.10').stat()
print(stat) # stat contains some other information about the file as well
```

Output:

```plaintext
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# Access file size from stat object
print(stat.st_size) # size in bytes
```

Output:

```plaintext
10024
```

## Listing directories

```python
from pathlib import Path

# Iterate through directory contents
for f in Path('/usr/bin').iterdir():
    print(f)
```

Output:

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

## Directory file sizes

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Directories themselves also have a size! So, you might want to check for whether a path is a file or directory using the methods in the methods discussed in the above section.
  </base-warning-content>
</base-warning>

```python
from pathlib import Path

# Calculate total size of all files in directory
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

Output:

```plaintext
1903178911
```

## Deleting files and folders

- Calling `Path.unlink()` will delete the file at path.

- Calling `Path.rmdir()` will delete the folder at path. This folder must be empty of any files or folders.

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/modules/os-module">Module: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
