---
title: 'Отладка Python - Шпаргалка по Python'
description: 'В программировании отладка — это процесс поиска и устранения ошибок (дефектов или проблем, препятствующих корректной работе) в компьютерных программах, программном обеспечении или системах.'
labUrl: 'https://labex.io/ru/labs/python-python-debugging-633653?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Отладка Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Debugging">Поиск и устранение ошибок</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    В компьютерном программировании и разработке программного обеспечения отладка — это процесс поиска и устранения ошибок (дефектов или проблем, препятствующих корректной работе) в компьютерных программах, программном обеспечении или системах.
  </base-disclaimer-content>
</base-disclaimer>

## Вызов исключений

Исключения вызываются с помощью оператора `raise`. В коде оператор `raise` состоит из следующего:

- Ключевое слово `raise`
- Вызов функции `Exception()`
- Строка с полезным сообщением об ошибке, переданная в функцию `Exception()`

```python
# оператор raise: принудительный вызов исключения с пользовательским сообщением
raise Exception('This is the error message.')
```

Вывод:

```plaintext
Traceback (most recent call last):
  File "<pyshell#191>", line 1, in <module>
    raise Exception('This is the error message.')
Exception: This is the error message.
```

Обычно код, вызывающий функцию, а не сама функция, знает, как обрабатывать исключение. Поэтому вы часто увидите оператор `raise` внутри функции, а операторы `try` и `except` — в коде, вызывающем эту функцию.

```python
# Вызов исключений в функции, обработка их в вызывающем коде
def box_print(symbol, width, height):
    if len(symbol) != 1:
      raise Exception('Symbol must be a single character string.')
    if width <= 2:
      raise Exception('Width must be greater than 2.')
    if height <= 2:
      raise Exception('Height must be greater than 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

# Обработка исключений при вызове функции
for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        box_print(sym, w, h)
    except Exception as err:  # Перехват исключения и вывод сообщения об ошибке
        print('An exception happened: ' + str(err))
```

Вывод:

```plaintext
****
*  *
*  *
****
OOOOOOOOOOOOOOOOOOOO
O                  O
O                  O
O                  O
OOOOOOOOOOOOOOOOOOOO
An exception happened: Width must be greater than 2.
An exception happened: Symbol must be a single character string.
```

Подробнее об [Обработке исключений](/cheatsheet/exception-handling).

## Получение трассировки как строки

`traceback` (трассировка стека) отображается Python всякий раз, когда вызванное исключение остается необработанным. Но его также можно получить в виде строки, вызвав `traceback.format_exc()`. Эта функция полезна, если вам нужна информация из трассировки исключения, но вы также хотите, чтобы оператор `except` корректно обработал исключение. Вам нужно будет импортировать модуль `traceback` Python перед вызовом этой функции.

```python
# traceback.format_exc(): получить трассировку как строку для логирования/отладки
import traceback

try:
    raise Exception('This is the error message.')
except:
    with open('errorInfo.txt', 'w') as error_file:
        error_file.write(traceback.format_exc())  # Записать трассировку в файл
    print('The traceback info was written to errorInfo.txt.')
```

Вывод:

```plaintext
116
The traceback info was written to errorInfo.txt.
```

Число 116 — это возвращаемое значение метода `write()`, поскольку в файл было записано 116 символов. Текст `traceback` был записан в errorInfo.txt.

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

## Утверждения (Assertions)

Утверждение — это проверка здравого смысла, чтобы убедиться, что ваш код не делает ничего заведомо неправильного. Эти проверки здравого смысла выполняются операторами `assert`. Если проверка здравого смысла не пройдена, вызывается исключение `AssertionError`. В коде оператор `assert` состоит из следующего:

- Ключевое слово `assert`
- Условие (т.е. выражение, которое оценивается как `True` или `False`)
- Запятая
- Строка (`string`), отображаемая, когда условие равно `False`

```python
# оператор assert: проверить условие, вызвать AssertionError, если False
pod_bay_door_status = 'open'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # Проходит

pod_bay_door_status = 'I\'m sorry, Dave. I\'m afraid I can\'t do that.'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # Вызывает AssertionError
```

Вывод:

```plaintext
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
AssertionError: The pod bay doors need to be "open".
```

Простыми словами, оператор `assert` гласит: «Я утверждаю, что это условие истинно, а если нет, то где-то в программе есть ошибка». В отличие от исключений, ваш код не должен обрабатывать операторы `assert` с помощью `try` и `except`; если `assert` не выполняется, ваша программа должна аварийно завершить работу. Такой быстрый сбой сокращает время между первопричиной ошибки и первым обнаружением ошибки. Это уменьшит объем кода, который вам придется проверять, прежде чем найти код, вызывающий ошибку.

### Отключение утверждений

Утверждения можно отключить, передав опцию `-O` при запуске Python.

## Логирование (Logging)

Чтобы модуль `logging` отображал сообщения журнала на экране по мере выполнения вашей программы, скопируйте следующее в начало вашей программы:

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

Предположим, вы написали функцию для вычисления факториала числа. В математике факториал 4 равен 1 × 2 × 3 × 4, или 24. Факториал 7 равен 1 × 2 × 3 × 4 × 5 × 6 × 7, или 5040. Откройте новое окно редактора файлов и введите следующий код. В нем есть ошибка, но вы также добавите несколько сообщений журнала, чтобы помочь себе выяснить, что идет не так. Сохраните программу как factorialLog.py.

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
logging.debug('Start of program')

def factorial(n):
    logging.debug('Start of factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))
    logging.debug('End of factorial(%s)' % (n))
    return total

print(factorial(5))
logging.debug('End of program')
```

Вывод:

```plaintext
2015-05-23 16:20:12,664 - DEBUG - Start of program
2015-05-23 16:20:12,664 - DEBUG - Start of factorial(5)
2015-05-23 16:20:12,665 - DEBUG - i is 0, total is 0
2015-05-23 16:20:12,668 - DEBUG - i is 1, total is 0
2015-05-23 16:20:12,670 - DEBUG - i is 2, total is 0
2015-05-23 16:20:12,673 - DEBUG - i is 3, total is 0
2015-05-23 16:20:12,675 - DEBUG - i is 4, total is 0
2015-05-23 16:20:12,678 - DEBUG - i is 5, total is 0
2015-05-23 16:20:12,680 - DEBUG - End of factorial(5)
0
2015-05-23 16:20:12,684 - DEBUG - End of program
```

## Уровни логирования

Уровни логирования предоставляют способ категоризировать ваши сообщения журнала по важности. Существует пять уровней логирования, описанных в Таблице 10-1 от наименее до наиболее важных. Сообщения могут быть занесены в журнал на каждом уровне с использованием разной функции логирования.

| Уровень    | Функция логирования  | Описание                                                                                                                                               |
| :--------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DEBUG`    | `logging.debug()`    | Самый низкий уровень. Используется для мелких подробностей. Обычно вас интересуют эти сообщения только при диагностике проблем.                        |
| `INFO`     | `logging.info()`     | Используется для записи информации об общих событиях в вашей программе или для подтверждения того, что что-то работает в определенном месте программы. |
| `WARNING`  | `logging.warning()`  | Используется для указания на потенциальную проблему, которая не мешает работе программы, но может сделать это в будущем.                               |
| `ERROR`    | `logging.error()`    | Используется для записи ошибки, из-за которой программа не смогла что-то сделать.                                                                      |
| `CRITICAL` | `logging.critical()` | Самый высокий уровень. Используется для указания на фатальную ошибку, которая привела или вот-вот приведет к полной остановке работы программы.        |

## Отключение логирования

После отладки программы вы, вероятно, не захотите, чтобы все эти сообщения журнала загромождали экран. Функция `logging.disable()` отключает их, чтобы вам не приходилось вручную удалять все вызовы логирования в вашей программе.

```python
import logging

logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
logging.critical('Critical error! Critical error!')
```

Вывод:

```plaintext
2015-05-22 11:10:48,054 - CRITICAL - Critical error! Critical error!
```

```python
logging.disable(logging.CRITICAL)
logging.critical('Critical error! Critical error!')
logging.error('Error! Error!')
```

## Логирование в файл

Вместо отображения сообщений журнала на экране вы можете записать их в текстовый файл. Функция `logging.basicConfig()` принимает именованный аргумент `filename`, вот так:

```python
import logging
logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

## Связанные ссылки

- <router-link to="/cheatsheet/exception-handling">Обработка исключений</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
