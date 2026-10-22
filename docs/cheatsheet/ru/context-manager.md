---
title: 'Менеджер контекста Python - Шпаргалка по Python'
description: 'Хотя менеджеры контекста Python широко используются, немногие понимают цель их применения. Эти операторы, часто используемые при чтении и записи файлов, помогают приложению экономить системную память и улучшать управление ресурсами, гарантируя, что определенные ресурсы используются только для конкретных процессов.'
labUrl: 'https://labex.io/ru/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Менеджер контекста Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Хотя менеджеры контекста Python широко используются, немногие понимают цель их использования. Эти операторы, обычно используемые при чтении и записи файлов, помогают приложению сохранять системную память и улучшать управление ресурсами, гарантируя, что определенные ресурсы используются только для конкретных процессов.

## Оператор with

Менеджер контекста — это объект, который уведомляется о начале и конце контекста (блока кода). Обычно вы используете его с оператором `with`. Он берет на себя уведомление.

Например, файловые объекты являются менеджерами контекста. Когда контекст заканчивается, файловый объект закрывается автоматически:

```python
# Менеджер контекста: автоматически обрабатывает очистку ресурсов
# Файл автоматически закрывается при выходе из блока 'with'
with open(filename) as f:  # 'f' — это файловый объект
    file_contents = f.read()

# Файл автоматически закрыт здесь, даже если произошла ошибка
```

<BaseQuiz id="cheatsheet-context-manager-1" correct="A">
<template #question>
Каково основное преимущество использования менеджера контекста (оператора <code>with</code>)?
</template>

<BaseQuizOption value="A" correct>A. Автоматически обрабатывает очистку ресурсов, даже если возникает ошибка</BaseQuizOption>
<BaseQuizOption value="B">B. Ускоряет выполнение кода</BaseQuizOption>
<BaseQuizOption value="C">C. Позволяет одновременно открывать несколько файлов</BaseQuizOption>
<BaseQuizOption value="D">D. Предотвращает все ошибки</BaseQuizOption>
<BaseQuizAnswer>Менеджеры контекста гарантируют, что ресурсы (например, файлы) будут должным образом очищены при выходе из блока, даже если возникает исключение. Это предотвращает утечки ресурсов и потерю данных.</BaseQuizAnswer>
</BaseQuiz>

Все, что приводит к завершению выполнения блока, вызывает вызов метода выхода менеджера контекста. Это включает исключения и может быть полезно, когда ошибка приводит к преждевременному выходу из открытого файла или соединения. Завершение работы скрипта без надлежащего закрытия файлов/соединений — плохая идея, которая может привести к потере данных или другим проблемам. Используя менеджер контекста, вы можете гарантировать, что меры предосторожности всегда принимаются для предотвращения повреждения или потерь таким образом.

## Написание собственного менеджера контекста

Также возможно написать менеджер контекста, используя синтаксис генератора благодаря декоратору `contextlib.contextmanager`:

```python
# Менеджер контекста на основе функции с использованием декоратора contextlib
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # Код до yield выполняется при __enter__
    try:
        yield num + 1   # Значение, возвращаемое через yield, становится переменной 'cm'
    finally:
        print('Exit')    # Код после yield выполняется при __exit__

with context_manager(2) as cm:  # cm получает возвращенное значение (3)
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## Менеджер контекста на основе класса

Вы можете определить менеджер контекста на основе класса. Ключевыми методами являются `__enter__` и `__exit__`

```python
# Менеджер контекста на основе класса: реализуйте методы __enter__ и __exit__
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Вызывается при входе в блок 'with'
        print("--enter--")
        return self  # Может вернуть объект для использования в качестве переменной 'as'

    def __exit__(self, *args):  # Вызывается при выходе из блока 'with'
        print("--exit--")

with ContextManager():  # Вызывает __enter__, затем __exit__ по завершении
    print("test")
```

```output
--enter--
test
--exit--
```

<BaseQuiz id="cheatsheet-context-manager-2" correct="B">
<template #question>
Какие методы должен реализовать класс, чтобы использоваться в качестве менеджера контекста?
</template>

<BaseQuizOption value="A">A. <code>**init**</code> и <code>**del**</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>**enter**</code> и <code>**exit**</code></BaseQuizOption>
<BaseQuizOption value="C">C. <code>open</code> и <code>close</code></BaseQuizOption>
<BaseQuizOption value="D">D. <code>start</code> и <code>stop</code></BaseQuizOption>
<BaseQuizAnswer>Менеджер контекста на основе класса должен реализовать <code>**enter**</code> (вызывается при входе в блок <code>with</code>) и <code>**exit**</code> (вызывается при выходе из блока).</BaseQuizAnswer>
</BaseQuiz>

## Связанные ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Чтение и запись файлов</router-link>
- <router-link to="/cheatsheet/exception-handling">Обработка исключений</router-link>
- <router-link to="/cheatsheet/decorators">Декораторы</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 основных операций с файловой системой, которые должен знать каждый разработчик</router-link>
- <router-link to="/builtin/open">open()</router-link>
