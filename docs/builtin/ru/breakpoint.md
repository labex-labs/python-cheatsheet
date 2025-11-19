---
title: 'Встроенная функция Python breakpoint() - Шпаргалка по Python'
description: 'Эта функция переводит вас в отладчик в месте вызова. Она вызывает sys.breakpointhook(), передавая аргументы. По умолчанию sys.breakpointhook() вызывает pdb.set_trace(). Это удобная функция, позволяющая войти в отладчик без явного импорта pdb. Однако sys.breakpointhook() можно настроить на другую функцию, и breakpoint() будет автоматически вызывать ее.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python breakpoint()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Эта функция переводит вас в отладчик по месту вызова [...].
    <br/>
    Python breakpoint() вызывает отладчик Python по заданной строке
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `breakpoint()` в Python, представленная в Python 3.7, предоставляет простой способ войти в отладчик Python (`pdb`) в определенной точке вашего кода. Это удобная альтернатива ручному импорту `pdb` и вызову `pdb.set_trace()`. Эта функция упрощает процесс отладки, позволяя интерактивно проверять переменные и пошагово выполнять ваш код.

## Пример

Вот как вы можете использовать `breakpoint()`, чтобы приостановить выполнение и проверить переменные:

```python
def calculate_sum(a, b):
    result = a + b
    # Мы хотим проверить 'result' перед возвратом
    breakpoint()
    return result

# Когда вы запустите это, отладчик начнется сразу после вычисления 'result'
# Затем вы можете ввести 'result' в приглашении (Pdb) для просмотра его значения
# Чтобы продолжить выполнение, введите 'c' или 'continue'
final_sum = calculate_sum(10, 20)
print(final_sum)
```

```output
(Pdb) result
30
(Pdb) c
30
```

## Связанные ссылки

- <router-link to="/cheatsheet/debugging">Шпаргалка: Отладка (Debugging)</router-link>
- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком (Control Flow)</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
