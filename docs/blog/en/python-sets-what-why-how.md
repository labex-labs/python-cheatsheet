---
title: 'Python Sets: What, Why and How - Python Cheatsheet'
description: When writing code, you can do it in more than a single way. Some are considered to be bad, and others, clear, concise and maintainable. Or pythonic. In this Article we are going to explore the way that Python Sets can help us not just with readability, but also speeding up our programs execution time.
date: July 27, 2018
updated: July 3, 2022
tags: python, basics
socialImage: /blog/sets.jpg
---

<route lang="yaml">
meta:
    layout: article
    title: 'Python Sets: What, Why and How'
    description: When writing code, you can do it in more than a single way. Some are considered to be bad, and others, clear, concise and maintainable. Or pythonic In this Article we are going to explore the way that Python Sets can help us not just with readability, but also speeding up our programs execution time.
    date: July 27, 2018
    updated: July 3, 2022
    tags: python, basics
    socialImage: /blog/sets.jpg
</route>

<blog-title-header :frontmatter="frontmatter" title="Python Sets: What, Why and How" />

Python comes equipped with several built-in data types to help us organize our data. These structures include `lists`, `dictionaries`, `tuples` and `sets`.

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A <code>set</code> is an <b>unordered collection</b> with no <b>duplicate elements</b>. Basic uses include <b>membership testing</b> and <b>eliminating duplicate entries</b>. Set objects also support mathematical operations like <b>union</b>, <b>intersection</b>, <b>difference</b>, and <b>symmetric difference</b>
  </base-disclaimer-content>
</base-disclaimer>

In this article, we are going to review every one of the elements listed in the above definition. Let's start right away and see how we can create them.

## Initializing a Set

There are two ways to create a set: one is to use the built-in function `set()` and pass a `list` of elements, and the other is to use the curly braces `{}`.

### Initializing a set using the `set()` built-in function

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### Initializing a set using curly braces `{}`

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    Empty Sets
  </base-warning-title>
  <base-warning-content>
    When creating set, be sure to not use empty curly braces <code>{}</code> or you will get an empty dictionary instead.
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

It's a good moment to mention that for the sake of simplicity, all the examples provided in this article will use single digit integers, but sets can have all the [hashable](https://docs.python.org/3/glossary.html#term-hashable) data types that Python support. In other words, integers, strings and tuples, but not _mutable_ items like _lists_ or _dictionaries_:

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

Now that you know how to create a set and what type of elements it can have, let's continue and see _why_ we should always have them in our arsenals.

## Why you should Use them

We can write code in more than a single way. Some are considered to be pretty bad, and others, _clear, concise and maintainable_. Or "[_pythonic_](http://docs.python-guide.org/en/latest/writing/style/)".

<base-disclaimer>
  <base-disclaimer-title>
    From <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    When a veteran Python developer (a Pythonista) calls portions of code not “Pythonic”, they usually mean that these lines of code do not follow the common guidelines and fail to express its intent in what is considered the best (hear: most readable) way.
  </base-disclaimer-content>
</base-disclaimer>

Let's start exploring the way that Python sets can help us not just with readability, but also with our program's execution time.

## Unordered collection of elements

First things first: you can't access a `set` object using indexes.

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

Or modify them with slices:

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

_BUT_, if what we need is to remove duplicates, or do mathematical operations like combining lists (unions), we can, and _SHOULD_ always use sets.

I have to mention that **when iterating over, lists outperform sets**, so prefer them if that is what you need. Why? Well, this article does not intend to explain the inner workings of sets, but here are a couple of links where you can read about it:

- [Time Complexity](https://wiki.python.org/moin/TimeComplexity)
- [How is set() implemented?](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python Sets vs Lists](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## No duplicate items

While writing this, I cannot stop thinking in all the times I used a _for_ loop and the _if_ statement to check and remove duplicate elements in a list. My face turns red remembering that, more than once, I wrote something like this:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

Or used a list comprehension:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

But it's ok, nothing of that matters anymore because we now have the sets:

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## Sets performance

Now let's use the _timeit_ module and see the execution time of lists and sets when removing duplicates:

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # first, let's see how the list perform:
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # and the set:
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # faster and cleaner =)
```

Not only we write _fewer lines of code_ with sets than with lists comprehensions, we also obtain more _readable_ and _performant_ code.

<base-warning>
  <base-warning-title>
    remember that sets are unordered
  </base-warning-title>
  <base-warning-content>
    There is no guarantee that when converting them back to a list, the order of the elements will be preserved.
  </base-warning-content>
</base-warning>

From the [Zen of Python](https://www.python.org/dev/peps/pep-0020/):

> Beautiful is better than ugly. <br>
> Explicit is better than implicit.<br>
> Simple is better than complex.<br>
> Flat is better than nested.

Aren't sets just Beautiful, Explicit, Simple, and Flat?

## Membership tests

Every time we use an _if_ statement to check if an element is, for example, in a list, you are doing a membership test:

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

And sets are more performant than lists when doing them:

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

The above tests come from this [Stack Overflow thread](https://stackoverflow.com/questions/2831212/python-sets-vs-lists).

So if you are doing comparisons like this in massive lists, it should speed you a good bit if you convert that list into a set.

## Adding Elements

Depending on the number of elements to add, we will have to choose between the `add()` and `update()` methods.

`add()` Will add a single element:

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

And `update()` multiple ones:

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

Remember, sets remove duplicates.

## Removing Elements

If you want to be alerted when your code tries to remove an element that is not in the set, use `remove()`. Otherwise, `discard()` provides a suitable alternative:

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` won't raise any errors:

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # nothing happens!
```

We can also use `pop()` to randomly discard an element:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # removes an arbitrary element
1
>>> s
{2, 3, 4, 5}
```

Or `clear()` to remove all the values from a set:

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # discard all the items
>>> s
set()
```

## The union() method

`union()` or `|` will create a new set that contains all the elements from the sets we provide:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # or 's1 | s2'
{1, 2, 3, 4, 5}
```

## The intersection() method

`intersection` or `&` will return a set containing only the elements that are common in all of them:

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # or 's1 & s2 & s3'
{3}
```

## The difference() method

Difference creates a new set with the values that are in "s1" but not in "s2":

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # or 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` or `^` will return all the values that are not common between the sets.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # or 's1 ^ s2'
{1, 4}
```

## Conclusions

I hope that after reading this article you know what a set is, how to manipulate their elements and the operations they can perform. Knowing when to use a set will definitely help you write cleaner code and speed up your programs.
