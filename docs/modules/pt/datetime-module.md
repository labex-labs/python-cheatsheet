---
title: 'Módulo Datetime Python - Folha de Dicas Python'
description: 'O módulo Datetime permite trabalhar com data e hora, fornecendo 3 tipos de dados adicionais: date, time e datetime.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Datetime
</base-title>

O módulo Datetime permite-nos trabalhar com objetos de data e hora. Ele fornece três tipos de dados adicionais: `date`, `time` e `datetime`.

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

O método date retorna um objeto date com os atributos `year`, `month` e `day`:

```python
from datetime import date
# Criar um objeto date
obj = date(2022, 12, 1)
# Acessar o atributo year
obj.year
```

Output:

```plaintext
2022
```

```python
obj.month
```

Output:

```plaintext
12
```

```python
obj.day
```

Output:

```plaintext
1
```

## time()

```python
datetime.time(hour: int, minute: int, second: int)
```

O método `time` retorna um objeto time com os atributos `hour`, `minute`, `second`, `microsecond` e `tzinfo`:

```python
from datetime import time
# Criar um objeto time
obj = time(10, 20, 33)
# Acessar o atributo hour
obj.hour
```

Output:

```plaintext
10
```

```python
obj.second
```

Output:

```plaintext
33
```

```python
obj.microsecond
```

Output:

```plaintext
0
```

## datetime()

```python
datetime.datetime(year, month, day, hour, minute, second)
```

O `datetime` retorna um objeto com atributos de objetos `date` e `time`:

```python
from datetime import datetime
# Criar um objeto datetime com data e hora
obj = datetime(2024, 12, 1, 15, 35, 59)
# Acessar o atributo year
obj.year
```

Output:

```plaintext
2024
```

```python
obj.month
```

Output:

```plaintext
12
```

```python
obj.day
```

Output:

```plaintext
1
```

```python
obj.hour
```

Output:

```plaintext
15
```

```python
obj.second
```

Output:

```plaintext
59
```

## now() e today()

Os métodos `now` e `today` retornam um objeto `datetime` com o dia e a hora exatos do sistema:

```python
from datetime import datetime
# Obter data e hora atuais
now = datetime.now()
now
```

Output:

```plaintext
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

Como o objeto retornado é um `datetime`, podemos acessar os atributos `date` e `time`:

```python
now.date()
```

Output:

```plaintext
datetime.date(2022, 7, 23)
```

```python
now.time()
```

Output:

```plaintext
datetime.time(19, 56, 49, 589806)
```

```python
now.year
```

Output:

```plaintext
2022
```

```python
now.month
```

Output:

```plaintext
7
```

```python
now.day
```

Output:

```plaintext
23
```

```python
now.hour
```

Output:

```plaintext
19
```

```python
now.minute
```

Output:

```plaintext
56
```

```python
now.second
```

Output:

```plaintext
49
```

```python
now.microsecond
```

Output:

```plaintext
589806
```

Além disso, `now` pode aceitar um objeto [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) como um parâmetro opcional:

```python
from datetime import datetime, timezone
# Obter a hora UTC atual
datetime.now(timezone.utc)
```

Output:

```plaintext
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

Se um parâmetro _timezone_ não for especificado, `now` usará o fuso horário do sistema como padrão.

## strftime() e strptime()

Você pode facilmente transformar entre strings e objetos datetime com os métodos `strftime` e `strptime`.

### strftime()

`strftime` permite-nos criar strings formatadas de forma legível a partir de um objeto datetime do Python:

```python
from datetime import datetime
# Obter a data e hora atuais para exemplos de formatação
now = datetime.now()
now
```

Output:

```plaintext
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# Formatar datetime como dia-mês-ano com mês abreviado
now.strftime("%d-%b-%Y")
```

Output:

```plaintext
'23-Jul-2022'
```

```python
# Formatar datetime como dia-mês-ano com mês numérico
now.strftime("%d-%m-%Y")
```

Output:

```plaintext
'23-07-2022'
```

```python
# Formatar datetime como mês/dia/ano
now.strftime("%m/%d/%Y")
```

Output:

```plaintext
'07/23/2022'
```

```python
# Formatar datetime com data e hora
now.strftime("%b/%d/%Y - %H:%M:%S")
```

Output:

```plaintext
'Jul/23/2022 - 20:31:19'
```

Você pode achar as strings passadas para `strftime` um pouco estranhas, mas é bem fácil entender o seu significado. Por exemplo, `%m/%d/%Y` retornará o mês, o dia e o ano separados por `/` (07/23/2022).

### strptime()

O método `strptime` cria um objeto `datetime` a partir de uma string.

Este método aceita dois parâmetros:

```python
obj.strptime(datetime_string, format)
```

- Uma string representando um objeto datetime.
- O código de formato python equivalente a essa string.

```python
from datetime import datetime

# Analisar string para objeto datetime
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

Output:

```plaintext
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# Analisar string com data e hora
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

Output:

```plaintext
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### Códigos de Formato

| Diretiva | Significado                                                                                                                                                                                          | Exemplo                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `%a`     | Dia da semana como nome abreviado da localidade.                                                                                                                                                     | Dom, Seg, …, Sáb (pt_BR)                              |
| `%A`     | Dia da semana como nome completo da localidade.                                                                                                                                                      | Domingo, Segunda-feira, …, Sábado (pt_BR)             |
| `%w`     | Dia da semana como um número decimal, onde 0 é Domingo e 6 é Sábado.                                                                                                                                 | 0, 1, …, 6                                            |
| `%d`     | Dia do mês como um número decimal preenchido com zero.                                                                                                                                               | 01, 02, …, 31                                         |
| `%b`     | Mês como nome abreviado da localidade.                                                                                                                                                               | Jan, Fev, …, Dez (pt_BR)                              |
| `%B`     | Mês como nome completo da localidade.                                                                                                                                                                | Janeiro, Fevereiro, …, Dezembro (pt_BR)               |
| `%m`     | Mês como um número decimal preenchido com zero.                                                                                                                                                      | 01, 02, …, 12                                         |
| `%y`     | Ano sem século como um número decimal preenchido com zero.                                                                                                                                           | 00, 01, …, 99                                         |
| `%Y`     | Ano com século como um número decimal.                                                                                                                                                               | 0001, 0002, …, 2013, 2014, …, 9998, 9999              |
| `%H`     | Hora (relógio de 24 horas) como um número decimal preenchido com zero.                                                                                                                               | 00, 01, …, 23                                         |
| `%I`     | Hora (relógio de 12 horas) como um número decimal preenchido com zero.                                                                                                                               | 01, 02, …, 12                                         |
| `%p`     | Equivalente local de AM ou PM.                                                                                                                                                                       | AM, PM (en_US)                                        |
| `%M`     | Minuto como um número decimal preenchido com zero.                                                                                                                                                   | 00, 01, …, 59                                         |
| `%S`     | Segundo como um número decimal preenchido com zero.                                                                                                                                                  | 00, 01, …, 59                                         |
| `%f`     | Microssegundo como um número decimal, preenchido à esquerda com zero.                                                                                                                                | 000000, 000001, …, 999999                             |
| `%z`     | Deslocamento UTC na forma `±HHMM[SS[.ffffff]]` (string vazia se o objeto for ingênuo).                                                                                                               | (vazio), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z`     | Nome do fuso horário (string vazia se o objeto for ingênuo).                                                                                                                                         | (vazio), UTC, GMT                                     |
| `%j`     | Dia do ano como um número decimal preenchido com zero.                                                                                                                                               | 001, 002, …, 366                                      |
| `%U`     | Número da semana do ano (Domingo como o primeiro dia da semana) como um número decimal preenchido com zero. Todos os dias em um novo ano precedendo o primeiro Domingo são considerados na semana 0. | 00, 01, …, 53                                         |
| `%W`     | Número da semana do ano (Segunda-feira como o primeiro dia da semana) como um número decimal. Todos os dias em um novo ano precedendo a primeira Segunda-feira são considerados na semana 0.         | 00, 01, …, 53                                         |
| `%c`     | Representação de data e hora apropriada da localidade.                                                                                                                                               | Ter Ago 16 21:30:00 1988 (en_US)                      |
| `%x`     | Representação de data apropriada da localidade.                                                                                                                                                      | 08/16/88 (None)                                       |
| `%X`     | Representação de hora apropriada da localidade.                                                                                                                                                      | 21:30:00 (en_US)                                      |
| `%%`     | Um caractere `'%'` literal.                                                                                                                                                                          | %                                                     |

## timedelta()

O objeto `timedelta` representa a diferença entre duas datas ou horas.

```python
from datetime import datetime

# Criar dois objetos datetime
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# Calcular a diferença (retorna timedelta)
difference = date_2 - date_1
difference
```

Output:

```plaintext
datetime.timedelta(days=173)
```

```python
# Obter o número de dias do timedelta
difference.days
```

Output:

```plaintext
173
```

`timedelta` pode adicionar `days`, `seconds` e `microseconds` a um objeto datetime:

```python
from datetime import datetime, timedelta

# Obter a data e hora atuais para exemplos de timedelta
now = datetime.now()
now
```

Output:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Adicionar 10 dias e 15 segundos à data e hora atuais
now + timedelta(days=10, seconds=15)
```

Output:

```plaintext
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

E pode subtrair `days`, `seconds` e `microseconds` de um objeto datetime:

```python
from datetime import datetime, timedelta

# Obter a data e hora atuais para exemplo de subtração
now = datetime.now()
now
```

Output:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Subtrair 10 dias e 15 segundos da data e hora atuais
now - timedelta(days=10, seconds=15)
```

Output:

```plaintext
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## Links Relevantes

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formatação de Strings</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
