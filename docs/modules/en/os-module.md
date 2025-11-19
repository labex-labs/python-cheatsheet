---
title: Python OS Module - Python Cheatsheet
description: This module provides a portable way of using operating system dependent functionality.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OS Module
</base-title>

This module provides a portable way of using operating system dependent functionality.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs OS Module
  </base-disclaimer-title>
  <base-disclaimer-content>
    The <router-link to="/modules/pathlib-module">pathlib</router-link> module provides a lot more functionality than the ones listed here, like getting file name, getting file extension, reading/writing a file without manually opening it, etc. See the <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">official documentation</a> if you intend to know more.
    <br>
    For a more in-depth look at both, see the <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link> page.
  </base-disclaimer-content>
</base-disclaimer>

## Linux and Windows Paths

On Windows, paths are written using backslashes (`\`) as the separator between
folder names. On Unix based operating system such as macOS, Linux, and BSDs,
the forward slash (`/`) is used as the path separator. Joining paths can be
a headache if your code needs to work on different platforms.

Fortunately, Python provides us with `os.path.join` to handle this.

```python
import os

# Join path components using the correct separator for the OS
os.path.join('usr', 'bin', 'spam')
```

```output
usr\bin\spam
```

Joining paths is helpful if you need to create different file paths under
the same directory.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# Join each filename with the base directory
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## The current working directory

```python
import os

# Get the current working directory
os.getcwd()
```

```output
/home/labex/project
```

```python
# Change the current working directory
os.chdir('/usr/bin')

# Verify the change
os.getcwd()
```

```output
/usr/bin
```

## Creating new folders

```python
import os
# Create directories recursively (creates all parent directories if needed)
os.makedirs('/tmp/delicious/walnut/waffles')
```

## Absolute vs. Relative paths

There are two ways to specify a file path.

- An **absolute path**, which always begins with the root folder
- A **relative path**, which is relative to the program’s current working directory

There are also the dot (`.`) and dot-dot (`..`) folders. These are not real folders, but special names that can be used in a path. A single period (“dot”) for a folder name is shorthand for “this directory.” Two periods (“dot-dot”) means “the parent folder.”

### Handling Absolute paths

To see if a path is an absolute path:

```python
import os
# Check if path is absolute (starts with root)
os.path.isabs('/')
```

```output
True
```

```python
# Relative paths return False
os.path.isabs('..')
```

```output
False
```

You can also extract an absolute path:

```python
import os
# Get current directory first
os.getcwd()
```

```output
/home/labex/project
```

```python
# Convert relative path to absolute path
os.path.abspath('..')
```

```output
/home
```

### Handling Relative paths

You can get a relative path from a starting path to another path.

```python
import os
# Get relative path from start path to target path
os.path.relpath('/etc/passwd', '/')
```

```output
etc/passwd
```

## Path and File validity

### Checking if a file/directory exists

```python
import os

# Check if path exists (file or directory)
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

### Checking if a path is a file

```python
import os

# Check if path is a file
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

### Checking if a path is a directory

```python
import os

# Check if path is a directory
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

## Getting a file's size in bytes

```python
import os

# Get file size in bytes
os.path.getsize('/usr/bin/python3')
```

```output
776192
```

## Listing directories

```python
import os

# List all files and directories in the specified path
os.listdir('/usr/bin')
```

```output
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
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
import os
total_size = 0

# Calculate total size of all files in directory
for filename in os.listdir('/usr/bin'):
    # Join directory path with filename and get size
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

```output
1117846456
```

## Deleting files and folders

- Calling `os.unlink(path)` will delete the file at path.

- Calling `os.rmdir(path)` will delete the folder at path. This folder must be empty of any files or folders.

## Walking a Directory Tree

```python
import os

# Walk through directory tree recursively
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'The current folder is {folder_name}')
    # Iterate through subdirectories
    for subfolder in subfolders:
        print(f'SUBFOLDER OF {folder_name}: {subfolder}')
    # Iterate through files
    for filename in filenames:
        print(f'FILE INSIDE {folder_name}: filename{filename}')
    print('')
```

```output
The current folder is /tmp/delicious
SUBFOLDER OF /tmp/delicious: cats
SUBFOLDER OF /tmp/delicious: walnut
FILE INSIDE /tmp/delicious: spam.txt

The current folder is /tmp/delicious/cats
FILE INSIDE /tmp/delicious/cats: catnames.txt
FILE INSIDE /tmp/delicious/cats: zophie.jpg

The current folder is /tmp/delicious/walnut
SUBFOLDER OF /tmp/delicious/walnut: waffles

The current folder is /tmp/delicious/walnut/waffles
FILE INSIDE /tmp/delicious/walnut/waffles: butter.txt
```

## Relevant links

- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: File & Directory Path</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Pathlib Essentials</router-link>
- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
