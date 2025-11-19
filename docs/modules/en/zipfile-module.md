---
title: Python Zipfile Module - Python Cheatsheet
description: This module provides tools to create, read, write, append, and list a ZIP file.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zipfile Module
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   This module provides tools to create, read, write, append, and list a ZIP file.
  </base-disclaimer-content>
</base-disclaimer>

## Reading ZIP files

```python
import zipfile

# Open ZIP file and read its contents
with zipfile.ZipFile('example.zip') as example_zip:
    # List all files and directories in the ZIP
    print(example_zip.namelist())
    # Get metadata for a specific file
    spam_info = example_zip.getinfo('spam.txt')
    # Print original file size
    print(spam_info.file_size)
    # Print compressed file size
    print(spam_info.compress_size)
    # Calculate compression ratio
    print('Compressed file is %sx smaller!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

```output
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
Compressed file is 3.63x smaller!
```

## Extracting from ZIP Files

The `extractall()` method for ZipFile objects extracts all the files and folders from a ZIP file into the current working directory.

```python
# Extract all files from ZIP to current directory
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

The `extract()` method for ZipFile objects will extract a single file from the ZIP file:

```python
# Extract a single file from ZIP
with zipfile.ZipFile('example.zip') as example_zip:
    # Extract to current directory (returns path)
    print(example_zip.extract('spam.txt'))
    # Extract to a specific directory
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

```output
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## Creating and Adding to ZIP Files

```python
import zipfile

# Create a new ZIP file and add a file to it
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # Add file with compression
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

This code will create a new ZIP file named new.zip that has the compressed contents of spam.txt.

## Reading metadata of ZIP files

### Getting the filenames with namelist()

```python
import zipfile

# Read ZIP file and list all filenames
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

```output
['README.txt']
```

### Getting all metadata with infolist()

```python
import datetime
import zipfile

# Get detailed metadata for all files in ZIP
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # Determine operating system (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # Convert date_time tuple to datetime object
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Comment     : {info.comment}')
        print(f'Modified    : {modified}')
        print(f'System      : {system}')
        print(f'ZIP version : {info.create_version}')
        print(f'Compressed  : {info.compress_size} bytes')
        print(f'Uncompressed: {info.file_size} bytes')
```

```output
README.txt
Comment     : b''
Modified    : 2022-11-15 06:48:02
System      : Unix
ZIP version : 30
Compressed  : 65 bytes
Uncompressed: 76 bytes
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: File & Directory Path</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Context Managers</router-link>
- <router-link to="/modules/os-module">Module: os</router-link>
- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
