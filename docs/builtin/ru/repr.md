---
title: 'Встроенная функция Python repr() - Шпаргалка по Python'
description: 'Возвращает строку, содержащую печатное представление объекта. Для многих типов эта функция пытается вернуть строку, которая при передаче в eval() даст объект с тем же значением; в противном случае представление представляет собой строку в угловых скобках, содержащую имя типа объекта, а также дополнительную информацию, часто включающую имя и адрес объекта. Класс может контролировать, что возвращает эта функция для своих экземпляров, определяя метод __repr__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python repr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает строку, содержащую печатное представление объекта. Для многих типов эта функция пытается вернуть строку, которая при передаче в eval() даст объект с тем же значением; в противном случае представление представляет собой строку в угловых скобках, содержащую имя типа объекта вместе с дополнительной информацией, часто включающей имя и адрес объекта. Класс может контролировать, что возвращает эта функция для своих экземпляров, определяя метод __repr__().
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `repr()` возвращает строку, содержащую печатное представление объекта. Цель `repr()` — быть однозначной. Для многих типов `repr()` возвращает строку, которая может быть выполнена с помощью <router-link to="/builtin/eval">eval()</router-link> для создания идентичного объекта.

Это отличается от <router-link to="/builtin/str">str()</router-link>, которая предназначена для чтения человеком.

### Пример

```python
import datetime

# Для строки repr() добавляет кавычки
print(repr("hello"))

# Для объекта datetime он однозначен
now = datetime.datetime.now()
print(repr(now))

# Вы можете определить __repr__ для своих собственных классов
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

Вывод:

```plaintext
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## Связанные ссылки

- <router-link to="/cheatsheet/oop-basics">Шпаргалка: Основы ООП</router-link>
- <router-link to="/cheatsheet/debugging">Шпаргалка: Отладка</router-link>
- <router-link to="/cheatsheet/string-formatting">Шпаргалка: Форматирование строк</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
