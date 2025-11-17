---
title: 'Python 正则表达式 - Python 速查表'
description: '正则表达式（Regex）是一系列字符，用于在文本中指定搜索模式，并被字符串搜索算法使用。'
labUrl: 'https://labex.io/zh/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 正则表达式 - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">正则表达式</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    正则表达式（缩写为 regex）是一系列字符，用于在文本中指定搜索模式。[...] 供字符串搜索算法用于对字符串执行“查找”或“查找和替换”操作，或用于输入验证。
  </base-disclaimer-content>
</base-disclaimer>

1. 使用 `import re` 导入 regex 模块。
2. 使用 `re.compile()` 函数创建 Regex 对象。（记住使用原始字符串。）
3. 将要搜索的字符串传递给 Regex 对象的 `search()` 方法。这将返回一个 `Match` 对象。
4. 调用 `Match` 对象的 `group()` 方法以返回实际匹配文本的字符串。

Python 中所有的 regex 函数都在 re 模块中：

```python
# 导入 re 模块以进行正则表达式操作
import re
```

## Regex 符号

| 符号                     | 匹配内容                             |
| :----------------------- | :----------------------------------- |
| `?`                      | 前一个组的零个或一个。               |
| `*`                      | 前一个组的零个或多个。               |
| `+`                      | 前一个组的一个或多个。               |
| `{n}`                    | 前一个组的正好 n 个。                |
| `{n,}`                   | 前一个组的 n 个或更多。              |
| `{,m}`                   | 前一个组的 0 到 m 个。               |
| `{n,m}`                  | 前一个组的至少 n 个，最多 m 个。     |
| `{n,m}?` 或 `*?` 或 `+?` | 对前一个模式执行非贪婪匹配。         |
| `^spam`                  | 字符串必须以 spam 开头。             |
| `spam$`                  | 字符串必须以 spam 结尾。             |
| `.`                      | 任何字符，换行符除外。               |
| `\d`, `\w`, 和 `\s`      | 分别表示数字、单词或空格字符。       |
| `\D`, `\W`, 和 `\S`      | 分别表示非数字、非单词或非空格字符。 |
| `[abc]`                  | 方括号之间的任何字符（如 a、b、）。  |
| `[^abc]`                 | 方括号之间以外的任何字符。           |

## 匹配 Regex 对象

```python
# re.compile(): 创建正则表达式模式对象（使用原始字符串 r'' 避免转义）
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # 模式：3 位数字 -3 位数字 -4 位数字

mo = phone_num_regex.search('我的号码是 415-555-4242。')  # 搜索模式

print(f'找到的电话号码：{mo.group()}')  # group() 返回匹配的文本
```

输出：

```plaintext
找到的电话号码: 415-555-4242
```

## 用圆括号分组

```python
# 圆括号创建组：group(1) 返回第一组，group(2) 返回第二组
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # 两组圆括号
mo = phone_num_regex.search('我的号码是 415-555-4242。')

mo.group(1)  # 返回第一组：'415'
```

输出：

```plaintext
'415'
```

```python
mo.group(2)
```

输出：

```plaintext
'555-4242'
```

```python
mo.group(0)
```

输出：

```plaintext
'415-555-4242'
```

```python
mo.group()
```

输出：

```plaintext
'415-555-4242'
```

要一次性获取所有组，请使用 `groups()` 方法：

```python
# groups(): 返回所有组的元组
mo.groups()  # 返回 ('415', '555-4242')
```

输出：

```plaintext
('415', '555-4242')
```

```python
area_code, main_number = mo.groups()

print(area_code)
```

输出：

```plaintext
415
```

```python
print(main_number)
```

输出：

```plaintext
555-4242
```

## 管道符的多组匹配

您可以使用 `|` 字符在任何您想匹配多个表达式中的一个的地方使用它。

```python
hero_regex = re.compile (r'Batman|Tina Fey')

mo1 = hero_regex.search('Batman 和 Tina Fey。')
mo1.group()
```

输出：

```plaintext
'Batman'
```

```python
mo2 = hero_regex.search('Tina Fey 和 Batman。')
mo2.group()
```

输出：

```plaintext
'Tina Fey'
```

您也可以在正则表达式中将管道符用于匹配多个模式中的一个：

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile 掉了一个轮子')

mo.group()
```

输出：

```plaintext
'Batmobile'
```

```python
mo.group(1)
```

输出：

```plaintext
'mobile'
```

## 用问号进行可选匹配

`?` 字符将它前面的组标记为模式的可选部分。

```python
bat_regex = re.compile(r'Bat(wo)?man')

mo1 = bat_regex.search('蝙蝠侠的冒险')
mo1.group()
```

输出：

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('蝙蝠女侠的冒险')
mo2.group()
```

输出：

```plaintext
'Batwoman'
```

## 用星号匹配零个或多个

`*`（星号）表示“匹配零个或多个”。星号前面的组可以在文本中出现任意次数。

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('蝙蝠侠的冒险')
mo1.group()
```

输出：

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('蝙蝠女侠的冒险')
mo2.group()
```

输出：

```plaintext
'Batwoman'
```

```python
mo3 = bat_regex.search('蝙蝠哇哇哇侠的冒险')
mo3.group()
```

输出：

```plaintext
'Batwowowowoman'
```

## 用加号匹配一个或多个

`+`（加号）表示“匹配一个或多个”。加号前面的组必须至少出现一次：

```python
bat_regex = re.compile(r'Bat(wo)+man')

mo1 = bat_regex.search('蝙蝠女侠的冒险')
mo1.group()
```

输出：

```plaintext
'Batwoman'
```

```python
mo2 = bat_regex.search('蝙蝠哇哇哇侠的冒险')
mo2.group()
```

输出：

```plaintext
'Batwowowowoman'
```

```python
mo3 = bat_regex.search('蝙蝠侠的冒险')
mo3 is None
```

输出：

```plaintext
True
```

## 用花括号匹配特定重复次数

如果你有一个你想重复特定次数的组，在正则表达式中跟上花括号中的数字即可：

```python
ha_regex = re.compile(r'(Ha){3}')

mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

输出：

```plaintext
'HaHaHa'
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

输出：

```plaintext
True
```

你可以指定一个范围，在花括号中用最小和最大值分隔。例如，正则表达式 (Ha){3,5} 将匹配 'HaHaHa'、'HaHaHaHa' 和 'HaHaHaHaHa'。

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

输出：

```plaintext
'HaHaHa'
```

## 贪婪和非贪婪匹配

Python 的正则表达式默认是贪婪的：在有歧义的情况下，它们会匹配尽可能长的字符串。花括号的非贪婪版本（匹配尽可能短的字符串）在闭合花括号后跟一个问号。

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')

mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

输出：

```plaintext
'HaHaHaHaHa'
```

```python
non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

输出：

```plaintext
'HaHaHa'
```

## findall() 方法

`findall()` 方法将返回搜索字符串中每次匹配的字符串列表。

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # 没有组

phone_num_regex.findall('手机：415-555-9999 工作：212-555-0000')
```

输出：

```plaintext
['415-555-9999', '212-555-0000']
```

## 创建自定义字符集

你可以使用方括号定义自己的字符集。例如，字符集 `[aeiouAEIOU]` 将匹配任何元音字母，无论大小写。

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop 吃婴儿食品。婴儿食品。')
```

输出：

```plaintext
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

你也可以通过使用连字符包含字母或数字的范围。例如，字符集 `[a-zA-Z0-9]` 将匹配所有小写字母、大写字母和数字。

通过在字符集的开方括号后放置一个脱字符号 (`^`)，你可以创建一个负字符集，它将匹配字符集中不包含的所有字符：

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop 吃婴儿食品。婴儿食品。')
```

输出：

```plaintext
['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', ' ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

## 脱字符号和美元符号

- 你也可以在正则表达式的开头使用脱字符号 `^` 来指示匹配必须发生在搜索文本的开头。

- 同样，你可以在正则表达式的末尾放置一个美元符号 `$` 来指示字符串必须以该正则表达式模式结尾。

- 你可以同时使用 `^` 和 `$` 来指示整个字符串必须匹配该正则表达式。

正则表达式字符串 `r'^Hello'` 匹配以 'Hello' 开头的字符串：

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

输出：

```plaintext
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
```

```python
begins_with_hello.search('他说 hello.') is None
```

输出：

```plaintext
True
```

正则表达式字符串 `r'\d\$'` 匹配以 0 到 9 的数字字符结尾的字符串：

```python
whole_string_is_num = re.compile(r'^\d+$')

whole_string_is_num.search('1234567890')
```

输出：

```plaintext
<_sre.SRE_Match object; span=(0, 10), match='1234567890'>
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

输出：

```plaintext
True
```

```python
whole_string_is_num.search('12 34567890') is None
```

输出：

```plaintext
True
```

## 通配符

正则表达式中的 `.`（点）字符将匹配除换行符外的任何字符：

```python
at_regex = re.compile(r'.at')

at_regex.findall('猫在平坦的垫子上坐着。')
```

输出：

```plaintext
['cat', 'hat', 'sat', 'lat', 'mat']
```

## 用点星匹配所有内容

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

mo = name_regex.search('First Name: Al Last Name: Sweigart')
mo.group(1)
```

输出：

```plaintext
'Al'
```

```python
mo.group(2)
```

输出：

```plaintext
'Sweigart'
```

`.*` 默认使用贪婪模式：它总是会尝试匹配尽可能多的文本。要以非贪婪方式匹配任何和所有文本，请使用点、星号和问号 (`.*?`)。问号告诉 Python 以非贪婪方式匹配：

```python
non_greedy_regex = re.compile(r'<.*?>')
mo = non_greedy_regex.search('<为晚餐上菜>。>')
mo.group()
```

输出：

```plaintext
'<为晚餐上菜>'
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<为晚餐上菜>。>')
mo.group()
```

输出：

```plaintext
'<为晚餐上菜>。>'
```

## 用点字符匹配换行符

点星会匹配除换行符外的所有内容。通过将 `re.DOTALL` 作为 `re.compile()` 的第二个参数传递，你可以使点字符匹配所有字符，包括换行符：

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('相信公众的信任。\n保护无辜者。\n维护法律。').group()
```

输出：

```plaintext
'相信公众的信任。'
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('相信公众的信任。\n保护无辜者。\n维护法律。').group()
```

输出：

```plaintext
'相信公众的信任。\n保护无辜者。\n维护法律。'
```

## 忽略大小写的匹配

要使正则表达式不区分大小写，可以在调用 `re.compile()` 时将 `re.IGNORECASE` 或 `re.I` 作为第二个参数传递：

```python
robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop 是半人半机器，完全是警察。').group()
```

输出：

```plaintext
'Robocop'
```

```python
robocop.search('ROBOCOP 保护无辜者。').group()
```

输出：

```plaintext
'ROBOCOP'
```

```python
robocop.search('Al，你的编程书为什么老是提到 robocop？').group()
```

输出：

```plaintext
'robocop'
```

## 用 sub() 方法替换字符串

Regex 对象的 `sub()` 方法接收两个参数：

1. 第一个参数是要替换匹配项的字符串。
2. 第二个参数是正则表达式字符串。

`sub()` 方法返回一个应用了替换的字符串：

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('已审查', '特工 Alice 将机密文件交给了特工 Bob。')
```

输出：

```plaintext
'已审查 将机密文件交给了 已审查。'
```

## 管理复杂的 Regexes

为了告诉 `re.compile()` 函数忽略正则表达式字符串中的空格和注释，“详细模式”可以通过向 `re.compile()` 传递变量 `re.VERBOSE` 作为第二个参数来启用。

现在，与其使用像下面这样难以阅读的正则表达式：

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

你可以像这样将正则表达式分布在多行上并添加注释：

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # 区号
    (\s|-|\.)?                    # 分隔符
    \d{3}                         # 前 3 位数字
    (\s|-|\.)                     # 分隔符
    \d{4}                         # 后 4 位数字
    (\s*(ext|x|ext.)\s*\d{2,5})?  # 分机号
    )''', re.VERBOSE)
```

## 相关链接

- <router-link to="/cheatsheet/manipulating-strings">操作字符串</router-link>
- <router-link to="/cheatsheet/string-formatting">字符串格式化</router-link>
- <router-link to="/blog/python-data-types">Python 数据类型博客文章</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
