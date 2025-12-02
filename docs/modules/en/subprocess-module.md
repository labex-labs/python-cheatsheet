---
title: Python Subprocess Module - Python Cheatsheet
description: The subprocess module allows us to start and manage system processes.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Subprocess Module
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) is a built-in module that allows us to spawn new system processes, connect to their input/output/error streams, and obtain their return codes.

```python
import subprocess
```

## Running a System Command

The `run` function is used to execute a system command.

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

If you want to run a command as a single string instead of a list, use:

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

Both will automatically print the output to the terminal.

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Avoid `shell=True` with untrusted input (risk of shell injection).
  </base-warning-content>
</base-warning>

## Capturing the Output

To capture the output, set `capture_output` to `True`:

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

Here, `text=True` tells the function to read the output as text instead of bytes.

A `returncode` of 0 indicates success; any non-zero value indicates an error.

## Checking for Errors

While we can check for success using the return code, there is a more Pythonic way of doing it:

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

If `check` is set to `True` and the returncode is not 0 (unsuccessful operation), subprocess will raise a `subprocess.CalledProcessError`, which can be handled in the usual way using an except block.

## Running Commands with Timeout

You can set a timeout for a process. If it takes longer than the specified time, `subprocess.TimeoutExpired` is raised:

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## Writing Output to a File

You can redirect the output to a file by setting `stdout` (and `stderr`, if needed) to a file object:

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

Here, both normal output and errors will appear in the file, in the order they are generated.

**Note:** `text=True` is helpful when you want to manipulate the output as a string in Python. It is not strictly required when redirecting output directly to a file.

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: File & Directory Path</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet: Exception Handling</router-link>
- <router-link to="/modules/os-module">Module: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
