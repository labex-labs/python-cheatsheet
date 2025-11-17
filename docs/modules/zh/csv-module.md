---
title: 'Python CSV 模块 - Python 速查表'
description: 'Python 内置 csv 模块，可轻松处理 CSV 文件。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python CSV 模块
</base-title>

`csv` 模块提供了用于读取和写入 CSV 文件（常用于数据交换）的工具。

<base-disclaimer>
  <base-disclaimer-title>
    csv 模块 vs 手动文件读写
  </base-disclaimer-title>
  <base-disclaimer-content>
    虽然您可以使用基本的文件操作和字符串方法（如使用 <code>read</code> 或 <code>write</code> 和 <code>split()</code> 的 <code>open()</code>）来读写 CSV 文件，但 <code>csv</code> 模块旨在处理边缘情况，例如带引号的字段、嵌入的分隔符和不同的行尾。它确保了与由其他程序（如 Excel）生成的 CSV 文件的兼容性，并降低了解析错误的风险。对于大多数 CSV 任务，请优先使用 <code>csv</code> 模块而不是手动解析。
    <br>
    有关文件处理基础知识的更多信息，请参阅 <router-link to="/cheatsheet/file-directory-path">文件和目录路径</router-link> 页面。
  </base-disclaimer-content>
</base-disclaimer>

要开始使用，请导入该模块：

```python
import csv
```

## csv.reader()

此函数接收一个文件，该文件必须是[字符串的可迭代对象](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format)。换句话说，它应该是打开的文件，如下所示：

```python
import csv

file_path = 'file.csv'

# 读取 CSV 文件
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # 遍历每一行
  for line in reader:
    print(line)
```

此函数返回一个 reader 对象，可以轻松地对其进行迭代以获取每一行。相应行中的每个列都可以通过索引访问，而无需使用内置函数 [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split)。

## csv.writer()

此函数接收要写入的 CSV 文件，与 reader 函数类似，应如下调用：

```python
import csv

file_path = 'file.csv'

# 以写入 CSV 的模式打开文件
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # 执行某些操作
```

“执行某些操作”部分可以用以下函数替换：

### writer.writerow()

将单行写入 CSV 文件。

```python
# 写入标题行
writer.writerow(['name', 'age', 'city'])
# 写入数据行
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

一次写入多行。

```python
# 准备多行
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# 一次性写入所有行
writer.writerows(rows)
```

## csv.DictReader

允许您读取 CSV 文件并将每一行作为字典访问，默认使用文件中的第一行作为键（列标题）。

```python
import csv

# 将 CSV 读取为字典（第一行成为键）
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # 按名称而不是索引访问列
    for row in reader:
        print(row['name'], row['age'])
```

- 每个 `row` 是一个 `OrderedDict`（在 Python 3.8+ 中是常规的 `dict`）。
- 如果您的 CSV 没有标题，您可以使用 `fieldnames` 参数提供它们：

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

允许您将字典作为行写入 CSV 文件。创建 writer 时必须指定字段名（列标题）。

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# 将字典写入 CSV
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # 写入标题行
    writer.writerows(rows)
```

- 使用 `writer.writeheader()` 将列标题作为第一行写入。
- `writer.writerows()` 中的每个字典的键必须与创建 writer 时指定的 `fieldnames` 匹配。

## csv.reader() 和 csv.writer() 的附加参数

### delimiter

应作为分隔字段的字符。正如文件类型所示，默认值为逗号 `,`。根据区域设置，Excel 可能会生成以分号作为分隔符的 csv 文件。

```python
import csv

# 使用分号分隔符读取 CSV
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

用于结束一行的字符或字符序列。最常见的是 "\r\n"，但也可能是 "\n"。

### quotechar

用于引用包含特殊字符的字段的字符（默认为 `"`）。

```python
# 使用单引号作为引用字符
reader = csv.reader(csvfile, quotechar="'")
```

有关更多详细信息，请参阅<a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">官方 Python csv 模块文档</a>。
