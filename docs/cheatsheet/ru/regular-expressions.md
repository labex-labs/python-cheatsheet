---
title: 'Регулярные выражения Python - Шпаргалка по Python'
description: 'Регулярное выражение (сокращенно regex) — это последовательность символов, определяющая шаблон поиска в тексте, используемый алгоритмами поиска строк.'
labUrl: 'https://labex.io/ru/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Регулярные выражения
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">Регулярные выражения</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Регулярное выражение (сокращенно regex [...]) — это последовательность символов, которая определяет шаблон поиска в тексте. [...] используется алгоритмами поиска строк для операций «найти» или «найти и заменить» в строках, или для проверки входных данных.
  </base-disclaimer-content>
</base-disclaimer>

1. Импортируйте модуль regex с помощью `import re`.
2. Создайте объект Regex с помощью функции `re.compile()`. (Не забудьте использовать "сырую" строку.)
3. Передайте строку, которую вы хотите искать, в метод `search()` объекта Regex. Это возвращает объект `Match`.
4. Вызовите метод `group()` объекта Match, чтобы вернуть строку фактически сопоставленного текста.

Все функции regex в Python находятся в модуле re:

```python
# Импорт модуля re для операций с регулярными выражениями
import re
```

## Символы Regex

| Символ                     | Соответствует                                               |
| :------------------------- | :---------------------------------------------------------- |
| `?`                        | ноль или одно из предыдущей группы.                         |
| `*`                        | ноль или более из предыдущей группы.                        |
| `+`                        | одно или более из предыдущей группы.                        |
| `{n}`                      | ровно n из предыдущей группы.                               |
| `{n,}`                     | n или более из предыдущей группы.                           |
| `{,m}`                     | от 0 до m из предыдущей группы.                             |
| `{n,m}`                    | не менее n и не более m из предыдущей группы.               |
| `{n,m}?` или `*?` или `+?` | выполняет нежадный поиск предыдущей группы.                 |
| `^spam`                    | означает, что строка должна начинаться с spam.              |
| `spam$`                    | означает, что строка должна заканчиваться на spam.          |
| `.`                        | любой символ, кроме символов новой строки.                  |
| `\d`, `\w`, и `\s`         | цифра, слово или пробельный символ, соответственно.         |
| `\D`, `\W`, и `\S`         | что угодно, кроме цифры, слова или пробела, соответственно. |
| `[abc]`                    | любой символ между скобками (например, a, b, ).             |
| `[^abc]`                   | любой символ, который не находится между скобками.          |

## Объекты сопоставления regex

```python
# re.compile(): создание объекта шаблона regex (используйте сырую строку r'', чтобы избежать экранирования)
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # Шаблон: 3 цифры-3 цифры-4 цифры

mo = phone_num_regex.search('My number is 415-555-4242.')  # Поиск шаблона

print(f'Phone number found: {mo.group()}')  # group() возвращает сопоставленный текст
```

```output
Phone number found: 415-555-4242
```

## Группировка с помощью скобок

```python
# Скобки создают группы: group(1) возвращает первую группу, group(2) возвращает вторую
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # Две группы в скобках
mo = phone_num_regex.search('My number is 415-555-4242.')

mo.group(1)  # Возвращает первую группу: '415'
```

```output
'415'
```

```python
mo.group(2)
```

```output
'555-4242'
```

```python
mo.group(0)
```

```output
'415-555-4242'
```

```python
mo.group()
```

```output
'415-555-4242'
```

Чтобы получить все группы сразу, используйте метод `groups()`:

```python
# groups(): возвращает кортеж всех групп
mo.groups()  # Возвращает ('415', '555-4242')
```

```output
('415', '555-4242')
```

```python
area_code, main_number = mo.groups()

print(area_code)
```

```output
415
```

```python
print(main_number)
```

```output
555-4242
```

## Несколько групп с помощью "Пайп"

Вы можете использовать символ `|` везде, где хотите сопоставить одно из нескольких выражений.

```python
hero_regex = re.compile (r'Batman|Tina Fey')

mo1 = hero_regex.search('Batman and Tina Fey.')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = hero_regex.search('Tina Fey and Batman.')
mo2.group()
```

```output
'Tina Fey'
```

Вы также можете использовать "пайп" для сопоставления одного из нескольких шаблонов как части вашего regex:

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')

mo.group()
```

```output
'Batmobile'
```

```python
mo.group(1)
```

```output
'mobile'
```

## Необязательное сопоставление с помощью вопросительного знака

Символ `?` помечает группу, предшествующую ему, как необязательную часть шаблона.

```python
bat_regex = re.compile(r'Bat(wo)?man')

mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```output
'Batwoman'
```

## Сопоставление нуля или более с помощью Звездочки

`*` (звездочка или астериск) означает "сопоставить ноль или более". Группа, предшествующая звездочке, может встречаться в тексте любое количество раз.

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```output
'Batwoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batwowowowoman')
mo3.group()
```

```output
'Batwowowowoman'
```

## Сопоставление одного или более с помощью Плюса

`+` (или плюс) _означает сопоставить один или более_. Группа, предшествующая плюсу, должна встречаться как минимум один раз:

```python
bat_regex = re.compile(r'Bat(wo)+man')

mo1 = bat_regex.search('The Adventures of Batwoman')
mo1.group()
```

```output
'Batwoman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwowowowoman')
mo2.group()
```

```output
'Batwowowowoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batman')
mo3 is None
```

```output
True
```

## Сопоставление определенных повторений с помощью фигурных скобок

Если у вас есть группа, которую вы хотите повторить определенное количество раз, следуйте за группой в вашем regex числом в фигурных скобках:

```python
ha_regex = re.compile(r'(Ha){3}')

mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

```output
'HaHaHa'
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

```output
True
```

Вместо одного числа вы можете указать диапазон с минимумом и максимумом между фигурными скобками. Например, regex (Ha){3,5} сопоставит 'HaHaHa', 'HaHaHaHa' и 'HaHaHaHaHa'.

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

```output
'HaHaHa'
```

## Жадноe и нежадное сопоставление

Регулярные выражения Python по умолчанию являются жадными: в неоднозначных ситуациях они будут сопоставлять максимально длинную возможную строку. Нежадная версия фигурных скобок, которая сопоставляет минимально возможную строку, имеет закрывающую фигурную скобку, за которой следует вопросительный знак.

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')

mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

```output
'HaHaHaHaHa'
```

```python
non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

```output
'HaHaHa'
```

## Метод findall()

Метод `findall()` вернет строки всех совпадений в искомой строке.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # не имеет групп

phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
```

```output
['415-555-9999', '212-555-0000']
```

## Создание собственных классов символов

Вы можете определить свой собственный класс символов, используя квадратные скобки. Например, класс символов _[aeiouAEIOU]_ будет соответствовать любой гласной, как строчной, так и заглавной.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
```

```output
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

Вы также можете включать диапазоны букв или чисел, используя дефис. Например, класс символов _[a-zA-Z0-9]_ будет соответствовать всем строчным буквам, заглавным буквам и цифрам.

Поместив символ каретки (`^`) сразу после открывающей скобки класса символов, вы можете создать отрицательный класс символов, который будет соответствовать всем символам, которых нет в классе символов:

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
```

```output
['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', ' ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

## Символы Каретка и Знак доллара

- Вы также можете использовать символ каретки `^` в начале regex, чтобы указать, что совпадение должно произойти в начале искомого текста.

- Аналогично, вы можете поместить знак доллара `$` в конец regex, чтобы указать, что строка должна заканчиваться этим шаблоном regex.

- И вы можете использовать `^` и `$` вместе, чтобы указать, что вся строка должна соответствовать regex.

Регулярное выражение `r'^Hello'` соответствует строкам, начинающимся с 'Hello':

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

```output
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
```

```python
begins_with_hello.search('He said hello.') is None
```

```output
True
```

Регулярное выражение `r'\d\$'` соответствует строкам, которые заканчиваются числовым символом от 0 до 9:

```python
whole_string_is_num = re.compile(r'^\d+$')

whole_string_is_num.search('1234567890')
```

```output
<_sre.SRE_Match object; span=(0, 10), match='1234567890'>
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

```output
True
```

```python
whole_string_is_num.search('12 34567890') is None
```

```output
True
```

## Символ подстановки (Wildcard)

Символ `.` (или точка) в регулярном выражении соответствует любому символу, кроме символа новой строки:

```python
at_regex = re.compile(r'.at')

at_regex.findall('The cat in the hat sat on the flat mat.')
```

```output
['cat', 'hat', 'sat', 'lat', 'mat']
```

## Сопоставление всего с помощью Dot-Star

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

mo = name_regex.search('First Name: Al Last Name: Sweigart')
mo.group(1)
```

```output
'Al'
```

```python
mo.group(2)
```

```output
'Sweigart'
```

`.*` использует жадный режим: он всегда будет пытаться сопоставить как можно больше текста. Чтобы сопоставить любой текст в нежадном режиме, используйте точку, звездочку и вопросительный знак (`.*?`). Вопросительный знак указывает Python сопоставлять нежадным образом:

```python
non_greedy_regex = re.compile(r'<.*?>')
mo = non_greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```output
'<To serve man>'
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```output
'<To serve man> for dinner.>'
```

## Сопоставление новых строк с помощью символа Dot

Dot-star сопоставляет все, кроме новой строки. Передавая `re.DOTALL` в качестве второго аргумента в `re.compile()`, вы можете заставить символ точки сопоставлять все символы, включая символ новой строки:

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```output
'Serve the public trust.'
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```output
'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

## Регистронезависимое сопоставление

Чтобы сделать ваш regex регистронезависимым, вы можете передать `re.IGNORECASE` или `re.I` в качестве второго аргумента в `re.compile()`:

```python
robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop is part man, part machine, all cop.').group()
```

```output
'Robocop'
```

```python
robocop.search('ROBOCOP protects the innocent.').group()
```

```output
'ROBOCOP'
```

```python
robocop.search('Al, why does your programming book talk about robocop so much?').group()
```

```output
'robocop'
```

## Замена строк с помощью метода sub()

Метод `sub()` для объектов Regex принимает два аргумента:

1. Первый аргумент — это строка для замены любых совпадений.
2. Второй — это строка для регулярного выражения.

Метод `sub()` возвращает строку с примененными заменами:

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

```output
'CENSORED gave the secret documents to CENSORED.'
```

## Управление сложными Regexes

Чтобы указать функции `re.compile()` игнорировать пробелы и комментарии внутри строки регулярного выражения, можно включить "подробный режим", передав переменную `re.VERBOSE` в качестве второго аргумента в `re.compile()`.

Теперь вместо трудночитаемого регулярного выражения, такого как это:

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

вы можете разбить регулярное выражение на несколько строк с комментариями, как это:

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # area code
    (\s|-|\.)?                    # separator
    \d{3}                         # first 3 digits
    (\s|-|\.)                     # separator
    \d{4}                         # last 4 digits
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extension
    )''', re.VERBOSE)
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/manipulating-strings">Манипулирование строками</router-link>
- <router-link to="/cheatsheet/string-formatting">Форматирование строк</router-link>
- <router-link to="/blog/python-data-types">Блог о типах данных Python</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
