---
title: 'Decoradores Python - Guia Rápido Python'
description: 'Um Decorador Python é uma sintaxe que oferece uma forma concisa e reutilizável de estender uma função ou classe.'
labUrl: 'https://labex.io/pt/labs/python-python-decorators-633654?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Decoradores Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Um Decorador Python fornece uma maneira concisa e reutilizável de estender
uma função ou uma classe. Leia o artigo complementar <router-link to="/blog/python-decorators-for-beginners">Python Decorators: Simple Patterns to Level Up Your Code</router-link> para exemplos práticos e padrões.

## Decorador básico

Um decorador em sua forma mais simples é uma função que recebe outra
função como argumento e retorna um _wrapper_. O exemplo a seguir
mostra a criação de um decorador e seu uso.

```python
# Decorator: uma função que recebe outra função e retorna um wrapper
def your_decorator(func):
  def wrapper():
    # Faça algo antes de func...
    print("Before func!")
    func()  # Chama a função original
    # Faça algo depois de func...
    print("After func!")
  return wrapper  # Retorna a função wrapper

# @your_decorator é açúcar sintático para: foo = your_decorator(foo)
@your_decorator
def foo():
  print("Hello World!")

foo()  # Chama wrapper, que chama foo com comportamento extra
```

```output
Before func!
Hello World!
After func!
```

## Decorador para uma função com parâmetros

```python
# Decorator que funciona com funções que têm parâmetros
def your_decorator(func):
  def wrapper(*args,**kwargs):  # Aceita quaisquer argumentos
    # Faça algo antes de func...
    print("Before func!")
    func(*args,**kwargs)  # Passa argumentos para a função original
    # Faça algo depois de func...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # Argumentos são passados através do wrapper
```

```output
Before func!
My name is Jack
After func!
```

## Template para um decorador básico

Este template é útil para a maioria dos casos de uso de decoradores. É válido para funções
com ou sem parâmetros, e com ou sem valor de retorno.

```python
import functools

# Template de decorador de melhores práticas: preserva metadados da função e valor de retorno
def your_decorator(func):
  @functools.wraps(func)  # Preserva nome da função, docstring, etc.
  def wrapper(*args,**kwargs):
    # Faça algo antes de func...
    result = func(*args,**kwargs)  # Chama a função e captura o valor de retorno
    # Faça algo depois de func..
    return result  # Retorna o valor de retorno da função original
  return wrapper
```

## Decorador com parâmetros

Você também pode definir parâmetros para o decorador usar.

```python
import functools

# Fábrica de decoradores: retorna um decorador baseado em parâmetros
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # Preserva metadados da função
    def wrapper(*args,**kwargs):
      # Faça algo antes de func possivelmente usando arg...
      result = func(*args,**kwargs)
      # Faça algo depois de func possivelmente usando arg...
      return result
    return wrapper
  return decorator  # Retorna a função decoradora real
```

Para usar este decorador:

```python
# Usando decorador com parâmetros: @your_decorator(arg='x') chama your_decorator('x')
# que retorna um decorador que é então aplicado a foo
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## Decoradores baseados em classes

Para decorar um método de classe, você deve definir o decorador dentro da classe. Quando
apenas o argumento implícito `self` é passado para o método, sem quaisquer argumentos
adicionais explícitos, você deve criar um decorador separado apenas para esses métodos
sem quaisquer argumentos adicionais. Um exemplo disso, mostrado abaixo, é quando você
quer capturar e imprimir exceções de uma certa maneira.

```python
# Decorador de método de classe: definido dentro da classe
class DecorateMyMethod:

  # Decorador de método estático para métodos com apenas parâmetro 'self'
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # Apenas recebe self
      try:
        return method(self)  # Chama o método original
      except Exception as e:
        print("\nWARNING: Please make note of the following:\n")
        print(e)
    return wrapper_for_class_method

  def __init__(self,succeed:bool):
    self.succeed = succeed

  @decorator_for_class_method_with_no_args
  def class_action(self):
    if self.succeed:
      print("You succeeded by choice.")
    else:
      raise Exception("Epic fail of your own creation.")

test_succeed = DecorateMyMethod(True)
test_succeed.class_action()
```

```output
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

```output
Exception: Epic fail of your own creation.
```

Um decorador também pode ser definido como uma classe em vez de um método. Isso é útil
para manter e atualizar um estado, como no exemplo a seguir, onde contamos o número de chamadas feitas a um método:

```python
# Decorador baseado em classe: mantém estado entre chamadas
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # Armazena a função a ser decorada
    self.call_number = 0  # Inicializa o contador de chamadas

  def __call__(self, *args, **kwargs):  # Torna a instância chamável
    self.call_number += 1  # Incrementa o contador
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # Chama a função original

@CountCallNumber  # Cria instância de CountCallNumber
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # Chama CountCallNumber.__call__()
```

```output
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

```output
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    Exemplo de Contagem
  </base-disclaimer-title>
  <base-disclaimer-content>
  Este exemplo de contagem é inspirado no <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">tutorial do YouTube</a> de Patrick Loeber.
  </base-disclaimer-content>
</base-disclaimer>

## Links relevantes

- <router-link to="/blog/python-decorators-for-beginners">Python Decorators: Simple Patterns to Level Up Your Code</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link>
- <router-link to="/cheatsheet/functions">Funções</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args e Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
