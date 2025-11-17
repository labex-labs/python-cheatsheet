---
title: 'Python pow() 内置函数 - Python 速查表'
description: 'pow() 函数返回一个数的幂运算结果。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python pow() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      pow() 函数用于计算一个数的幂。它接受两个或三个参数：
      pow(base, exp): 返回 base 的 exp 次方 (base ** exp)。
      pow(base, exp, mod): 返回 (base ** exp) % mod (用于模运算)。
      如果提供了 mod 参数，其计算效率高于 base ** exp % mod。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`pow()` 函数用于指数运算。它可以接受两个或三个参数。

- `pow(base, exp)`: 这等同于 `base ** exp`。
- `pow(base, exp, mod)`: 这等同于 `(base ** exp) % mod`，但效率更高。这对于模运算非常有用。

### 示例

```python
# 使用两个参数 (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # 等同于 1 / (2**3)

# 使用三个参数 ((base ** exp) % mod)
print(pow(3, 2, 4))  # 因为 3**2 是 9，而 9 % 4 是 1
print(pow(2, 3, 5))  # 因为 2**3 是 8，而 8 % 5 是 3
```

输出：

```plaintext
8
9
0.125
1
3
```

## 相关链接

- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
