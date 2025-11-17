---
title: 'Python 内置函数 breakpoint() - Python 速查表'
description: '此函数在调用点进入调试器。它会调用 sys.breakpointhook()，并直接传递参数。默认情况下，sys.breakpointhook() 调用 pdb.set_trace()。它是一个便捷函数，无需显式导入 pdb 或输入更多代码即可进入调试器。然而，sys.breakpointhook() 可以设置为其他函数，breakpoint() 将自动调用该函数，允许您进入首选的调试器。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python breakpoint() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    此函数会在调用点将您置于调试器中 [...].
    <br/>
    Python breakpoint() 在给定行调用 Python 调试器
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `breakpoint()` 函数（引入于 Python 3.7）提供了一种在代码的特定位置进入 Python 调试器 (`pdb`) 的简便方法。它是手动导入 `pdb` 并调用 `pdb.set_trace()` 的便捷替代方案。此函数简化了调试过程，允许您交互式地检查变量和单步执行代码。

## 示例

以下是如何使用 `breakpoint()` 来暂停执行并检查变量的方法：

```python
def calculate_sum(a, b):
    result = a + b
    # 我们想在返回前检查 'result'
    breakpoint()
    return result

# 当您运行此代码时，调试器将在计算完 'result' 后立即启动
# 然后您可以在 (Pdb) 提示符中输入 'result' 来查看其值
# 要继续执行，请输入 'c' 或 'continue'
final_sum = calculate_sum(10, 20)
print(final_sum)
```

输出：

```plaintext
(Pdb) result
30
(Pdb) c
30
```

## 相关链接

- <router-link to="/cheatsheet/debugging">备忘单：调试 (Debugging)</router-link>
- <router-link to="/cheatsheet/control-flow">备忘单：控制流 (Control Flow)</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
