---
title: 'Python 内置函数 - Python 速查表'
description: 'Python 解释器内置了许多始终可用的函数和类型。'
labUrl: 'https://labex.io/zh/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 内置函数
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 解释器内置了许多始终可用的函数和类型。

## Python 内置函数

| 函数                                                                 | 描述                                                  |
| :------------------------------------------------------------------- | :---------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | 返回数字的绝对值。                                    |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | 返回异步可迭代对象的异步迭代器。                      |
| <router-link to='/builtin/all'>all()</router-link>                   | 如果可迭代对象中的所有元素都为真，则返回 True。       |
| <router-link to='/builtin/any'>any()</router-link>                   | 如果可迭代对象中的任何元素为真，则返回 True。         |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | 返回对象的“可打印”表示的字符串。                      |
| <router-link to='/builtin/bin'>bin()</router-link>                   | 将整数转换为二进制字符串。                            |
| <router-link to='/builtin/bool'>bool()</router-link>                 | 返回布尔值。                                          |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | 在调用点进入调试器。                                  |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | 返回一个新的字节数组。                                |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | 返回一个新的“字节”对象。                              |
| <router-link to='/builtin/callable'>callable()</router-link>         | 如果对象参数是可调用的，则返回 True，否则返回 False。 |
| <router-link to='/builtin/chr'>chr()</router-link>                   | 返回表示单个字符的字符串。                            |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | 将方法转换为类方法。                                  |
| <router-link to='/builtin/compile'>compile()</router-link>           | 将源代码编译成代码对象或 AST 对象。                   |
| <router-link to='/builtin/complex'>complex()</router-link>           | 返回一个值为 real + imag\*1j 的复数。                 |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | 删除命名属性，前提是对象允许这样做。                  |
| <router-link to='/builtin/dict'>dict()</router-link>                 | 创建一个新的字典。                                    |
| <router-link to='/builtin/dir'>dir()</router-link>                   | 返回当前局部作用域中的名称列表。                      |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | 返回一个包含商和余数的数对。                          |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | 返回一个枚举对象。                                    |
| <router-link to='/builtin/eval'>eval()</router-link>                 | 评估并执行表达式。                                    |
| <router-link to='/builtin/exec'>exec()</router-link>                 | 此函数支持动态执行 Python 代码。                      |
| <router-link to='/builtin/filter'>filter()</router-link>             | 从可迭代对象构造一个迭代器，并返回使函数为真的元素。  |
| <router-link to='/builtin/float'>float()</router-link>               | 从数字或字符串返回一个浮点数。                        |
| <router-link to='/builtin/format'>format()</router-link>             | 将值转换为“格式化”的表示形式。                        |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | 返回一个新的冻结集合对象。                            |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | 返回对象命名属性的值。                                |
| <router-link to='/builtin/globals'>globals()</router-link>           | 返回实现当前模块命名空间的字典。                      |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | 如果对象具有命名属性，则返回 True。                   |
| <router-link to='/builtin/hash'>hash()</router-link>                 | 返回对象的哈希值。                                    |
| <router-link to='/builtin/help'>help()</router-link>                 | 调用内置帮助系统。                                    |
| <router-link to='/builtin/hex'>hex()</router-link>                   | 将整数转换为小写十六进制字符串。                      |
| <router-link to='/builtin/id'>id()</router-link>                     | 返回对象的“身份”。                                    |
| <router-link to='/builtin/input'>input()</router-link>               | 此函数接受输入并将其转换为字符串。                    |
| <router-link to='/builtin/int'>int()</router-link>                   | 从数字或字符串返回一个整数对象。                      |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | 如果对象参数是对象的一个实例，则返回 True。           |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | 如果 class 是 classinfo 的子类，则返回 True。         |
| <router-link to='/builtin/iter'>iter()</router-link>                 | 返回一个迭代器对象。                                  |
| <router-link to='/builtin/len'>len()</router-link>                   | 返回对象的长度（项目数）。                            |
| <router-link to='/builtin/list'>list()</router-link>                 | 实际上是一个可变序列类型，而不是函数。                |
| <router-link to='/builtin/locals'>locals()</router-link>             | 更新并返回包含当前局部符号表的字典。                  |
| <router-link to='/builtin/map'>map()</router-link>                   | 返回一个迭代器，将函数应用于可迭代对象的每个项。      |
| <router-link to='/builtin/max'>max()</router-link>                   | 返回可迭代对象中最大的项。                            |
| <router-link to='/builtin/min'>min()</router-link>                   | 返回可迭代对象中最小的项。                            |
| <router-link to='/builtin/next'>next()</router-link>                 | 从迭代器中检索下一个项。                              |
| <router-link to='/builtin/object'>object()</router-link>             | 返回一个新的无特征对象。                              |
| <router-link to='/builtin/oct'>oct()</router-link>                   | 将整数转换为八进制字符串。                            |
| <router-link to='/builtin/open'>open()</router-link>                 | 打开文件并返回相应的文件对象。                        |
| <router-link to='/builtin/ord'>ord()</router-link>                   | 返回表示单个字符的 Unicode 代码点的整数。             |
| <router-link to='/builtin/pow'>pow()</router-link>                   | 返回 base 的 exp 次方。                               |
| <router-link to='/builtin/print'>print()</router-link>               | 将对象打印到文本流文件。                              |
| <router-link to='/builtin/property'>property()</router-link>         | 返回一个属性对象。                                    |
| <router-link to='/builtin/repr'>repr()</router-link>                 | 返回对象的字符串表示形式。                            |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | 返回一个反向迭代器。                                  |
| <router-link to='/builtin/round'>round()</router-link>               | 返回四舍五入到小数点后 ndigits 位的数字。             |
| <router-link to='/builtin/set'>set()</router-link>                   | 返回一个新的集合对象。                                |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | 这是 getattr() 的对应函数。                           |
| <router-link to='/builtin/slice'>slice()</router-link>               | 返回一个表示索引集的切片对象。                        |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | 从可迭代对象的项返回一个新排序的列表。                |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | 将方法转换为静态方法。                                |
| <router-link to='/builtin/str'>str()</router-link>                   | 返回对象的 str 版本。                                 |
| <router-link to='/builtin/sum'>sum()</router-link>                   | 将 start 和可迭代对象的项相加。                       |
| <router-link to='/builtin/super'>super()</router-link>               | 返回一个代理对象，将方法调用委托给父类或同级类。      |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | 实际上是一个不可变序列类型，而不是函数。              |
| <router-link to='/builtin/type'>type()</router-link>                 | 返回对象的类型。                                      |
| <router-link to='/builtin/vars'>vars()</router-link>                 | 返回任何其他具有 dict 属性的对象的 dict 属性。        |
| <router-link to='/builtin/zip'>zip()</router-link>                   | 对多个可迭代对象进行并行迭代。                        |
| <router-link to='/builtin/import'>**import**()</router-link>         | 此函数由 import 语句调用。                            |
