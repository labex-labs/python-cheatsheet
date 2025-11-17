---
title: 'Tratamento de Exceções em Python - Guia Rápido Python'
description: 'Em Python, o tratamento de exceções é o processo de resposta à ocorrência de exceções.'
labUrl: 'https://labex.io/pt/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Tratamento de Exceções em Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">Tratamento de Exceções</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Em computação e programação de computadores, o tratamento de exceções é o processo de responder à ocorrência de exceções – condições anômalas ou excepcionais que requerem processamento especial.
  </base-disclaimer-content>
</base-disclaimer>

Python tem muitas [exceções internas](https://docs.python.org/3/library/exceptions.html) que são levantadas quando um programa encontra um erro, e a maioria das bibliotecas externas, como a popular [Requests](https://requests.readthedocs.io/en/latest), inclui suas próprias [exceções personalizadas](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions) com as quais precisaremos lidar.

## Tratamento básico de exceções

Você não pode dividir por zero, isso é uma verdade matemática, e se você tentar fazer isso em Python, o interpretador levantará a exceção interna [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError):

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

Output:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Digamos que não queremos que nosso programa pare sua execução ou mostre ao usuário uma saída que ele não entenderá. Digamos que queremos imprimir uma mensagem útil e clara, então precisamos **_tratar_** a exceção com as palavras-chave `try` e `except`:

```python
# try-except: lida com exceções graciosamente
def divide(dividend , divisor):
    try:  # Tenta executar este código
        print(dividend / divisor)
    except ZeroDivisionError:  # Captura o tipo de exceção específico
        print('Você não pode dividir por 0')

divide(dividend=10, divisor=5)
```

Output:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Output:

```plaintext
Você não pode dividir por 0
```

## Tratando múltiplas exceções usando um bloco de exceção

Você também pode tratar múltiplas exceções em uma única linha como a seguir, sem a necessidade de criar múltiplos blocos de exceção.

```python
# Lida com múltiplas exceções em um bloco except
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # Isso levantará TypeError
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # Captura múltiplos tipos de exceção
        print(error)  # Imprime a mensagem de erro

divide(dividend=20, divisor=5)
```

Output:

```plaintext
4
```

```python
divide(dividend=10, divisor=5)
```

Output:

```plaintext
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

Output:

```plaintext
division by zero
```

## Código Finally no tratamento de exceções

O código dentro da seção `finally` é sempre executado, independentemente de uma exceção ter sido levantada ou não:

```python
# Bloco finally: sempre executa independentemente de exceções
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('Você não pode dividir por 0')
    finally:  # Sempre executa, mesmo que ocorra uma exceção
        print('Execução finalizada')

divide(dividend=10, divisor=5)
```

Output:

```plaintext
2.0
Execução finalizada
```

```python
divide(dividend=10, divisor=0)
```

Output:

```plaintext
Você não pode dividir por 0
Execução finalizada
```

## Exceções Personalizadas

Exceções personalizadas são inicializadas criando uma `class` que herda da classe base `Exception` do Python, e são levantadas usando a palavra-chave `raise`:

```python
# Exceção personalizada: criada herdando da classe Exception
class MyCustomException(Exception):
    pass

raise MyCustomException  # Levanta a exceção personalizada
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

Para declarar uma mensagem de exceção personalizada, você pode passá-la como um parâmetro:

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('Uma mensagem personalizada para minha exceção personalizada')
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: Uma mensagem personalizada para minha exceção personalizada
```

Tratar uma exceção personalizada é o mesmo que qualquer outra:

```python
try:
    raise MyCustomException('Uma mensagem personalizada para minha exceção personalizada')
except MyCustomException:
    print('Minha exceção personalizada foi levantada')
```

Output:

```plaintext
Minha exceção personalizada foi levantada
```

## Links relevantes

- <router-link to="/cheatsheet/control-flow">Fluxo de Controle</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
