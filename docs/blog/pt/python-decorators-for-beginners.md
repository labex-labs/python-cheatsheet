---
title: 'Decoradores Python - Padrões Simples para Elevar Seu Código - Guia Rápido Python'
description: 'Se você sabe escrever uma função, sabe escrever um decorador. Aprenda a adicionar recursos como temporizadores e registradores ao seu código com estes padrões fáceis e amigáveis para iniciantes.'
date: 'Aug 16, 2025'
updated: 'Aug 16, 2025'
tags: 'python, intermediate, decorators'
socialImage: '/blog/python-decorators.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Decoradores Python - Padrões Simples para Elevar Seu Código - Guia Rápido Python"
    description: "Se você sabe escrever uma função, sabe escrever um decorador. Aprenda a adicionar recursos como temporizadores e registradores ao seu código com estes padrões fáceis e amigáveis para iniciantes."
    date: "Aug 16, 2025"
    updated: "Aug 16, 2025"
    tags: "python, intermediate, decorators"
    socialImage: "/blog/python-decorators.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Decoradores Python - Padrões Simples para Elevar Seu Código - Guia Rápido Python" />

Você conhece aquela sensação quando vê `@algo` acima de uma função e se pergunta que mágica negra está acontecendo? Eu também já passei por isso. Decoradores podem parecer intimidantes, mas na verdade são um dos recursos mais elegantes do Python assim que você entende o básico — veja <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link> para uma referência compacta.

Pense em decoradores como embrulho de presente para suas funções. A função interna permanece a mesma, mas o decorador adiciona um belo laço por cima — funcionalidade extra sem alterar o código original.

## O Decorador Mais Simples

Vamos começar com o exemplo mais básico para entender o que está acontecendo:

```python
def my_decorator(func):
    def wrapper():
        print("Something happens before!")
        func()
        print("Something happens after!")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Something happens before!
# Hello!
# Something happens after!
```

É isso! Um decorador é apenas uma função que recebe outra função e a envolve com comportamento extra. A sintaxe `@my_decorator` é apenas uma maneira mais limpa de escrever `say_hello = my_decorator(say_hello)`.

## Seu Primeiro Decorador Útil: Timer

Aqui está um decorador que você realmente vai querer usar — um que informa quanto tempo suas funções levam para serem executadas:

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # Preserva o nome e as docstrings da função original
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done!"

result = slow_function()
# slow_function took 1.0041 seconds
print(result)  # Done!
```

Veja o <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link> para modelos de decoradores adicionais e padrões comuns.

Note como usamos `*args` e `**kwargs` (veja <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs</router-link>)? Isso faz com que nosso decorador funcione com qualquer função, independentemente de quantos argumentos ela aceite.

## Depure Seu Código: Decorador Logger

Quando você está tentando descobrir o que está dando errado, este decorador é incrivelmente útil — confira também o <router-link to="/cheatsheet/debugging">Debugging (cheatsheet)</router-link> para dicas e técnicas complementares:

```python
def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ', '.join(repr(arg) for arg in args)
        kwargs_str = ', '.join(f"{k}={v!r}" for k, v in kwargs.items())
        all_args = ', '.join(filter(None, [args_str, kwargs_str]))
        print(f"Calling {func.__name__}({all_args})")

        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result
    return wrapper

@debug
def add_numbers(a, b, multiply_by=1):
    return (a + b) * multiply_by

result = add_numbers(5, 3, multiply_by=2)
# Calling add_numbers(5, 3, multiply_by=2)
# add_numbers returned 16
```

## Controle de Acesso: Decorador de Autenticação

Quer garantir que apenas usuários específicos possam executar uma função? Veja como:

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Em um aplicativo real, você verificaria a autenticação real
        user_logged_in = True  # Isso viria do seu sistema de autenticação

        if not user_logged_in:
            return "Access denied! Please log in."

        return func(*args, **kwargs)
    return wrapper

@requires_auth
def delete_everything():
    return "💥 Everything deleted! (just kidding)"

result = delete_everything()
print(result)  # 💥 Everything deleted! (just kidding)
```

## Acelere as Coisas: Decorador de Cache

Se você tem uma função que faz cálculos caros com as mesmas entradas, armazene os resultados em cache:

```python
def cache(func):
    cached_results = {}

    @functools.wraps(func)
    def wrapper(*args):
        if args in cached_results:
            print(f"Cache hit for {func.__name__}{args}")
            return cached_results[args]

        print(f"Computing {func.__name__}{args}")
        result = func(*args)
        cached_results[args] = result
        return result

    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
# Computing fibonacci(10)
# Computing fibonacci(9)
# Computing fibonacci(8)
# ... (muitos cálculos)
# Cache hit for fibonacci(2)
# Cache hit for fibonacci(3)
# ... (cache hits)
# 55
```

## Tentar Novamente Operações Falhas

Às vezes, as funções falham devido a problemas de rede ou problemas temporários. Este decorador tenta novamente automaticamente:

```python
import random

def retry(max_attempts=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt + 1} failed: {e}")
                    if attempt == max_attempts - 1:
                        print("All attempts failed!")
                        raise
        return wrapper
    return decorator

@retry(max_attempts=3)
def unreliable_api_call():
    if random.random() < 0.7:  # 70% de chance de falha
        raise Exception("Network error")
    return "Success!"

# Isso tentará novamente até 3 vezes se falhar
result = unreliable_api_call()
```

## Limitação de Taxa (Rate Limiting): Diminua a Velocidade do Seu Código

Às vezes, você precisa ser gentil com APIs ou bancos de dados:

```python
import time
import functools

def rate_limit(seconds):
    """
    Um decorador para limitar a frequência com que uma função pode ser chamada.
    """
    def decorator(func):
        # Usa uma lista para armazenar um valor float mutável para o tempo da última chamada.
        # Isso permite que a função wrapper interna o modifique.
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Calcula o tempo decorrido desde a última chamada
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # Se tempo suficiente não passou, dorme pelo restante
            if wait_time > 0:
                time.sleep(wait_time)

            # Atualiza o tempo da última chamada e executa a função
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # Permite no máximo uma chamada por segundo
def call_api():
    print(f"API called at {time.time():.2f}")

# Estas chamadas serão espaçadas por aproximadamente 1 segundo cada
call_api()
call_api()
call_api()

# Saída Esperada:
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## Valide Suas Entradas

Certifique-se de que suas funções recebam os tipos corretos de dados:

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Obtém os nomes dos parâmetros da função
            import inspect
            sig = inspect.signature(func)
            bound_args = sig.bind(*args, **kwargs)
            bound_args.apply_defaults()

            for param_name, expected_type in expected_types.items():
                if param_name in bound_args.arguments:
                    value = bound_args.arguments[param_name]
                    if not isinstance(value, expected_type):
                        raise TypeError(
                            f"{param_name} must be {expected_type.__name__}, "
                            f"got {type(value).__name__}"
                        )

            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_types(name=str, age=int)
def create_user(name, age):
    return f"User {name}, age {age}"

# Isso funciona
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# Isso levanta TypeError
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## Quando Usar Cada Decorador

| Tipo de Decorador | Melhor Para                            | Casos de Uso de Exemplo                                         |
| :---------------- | :------------------------------------- | :-------------------------------------------------------------- |
| **Timer**         | Monitoramento de desempenho            | Encontrar funções lentas, otimização                            |
| **Debug/Logger**  | Desenvolvimento e solução de problemas | Entender chamadas de função, depuração                          |
| **Auth**          | Segurança e controle de acesso         | Proteger funções de administrador, permissões de usuário        |
| **Cache**         | Cálculos caros                         | Consultas a banco de dados, chamadas de API, cálculos complexos |
| **Retry**         | Operações não confiáveis               | Requisições de rede, operações de arquivo                       |
| **Rate Limit**    | Controle de frequência                 | Chamadas de API, prevenção de spam                              |
| **Validation**    | Integridade de dados                   | Entrada do usuário, parâmetros de API                           |

## Dicas para Usar Decoradores

**Sempre use `@functools.wraps`** — Isso preserva o nome e a documentação da função original, facilitando a depuração (veja <router-link to="/cheatsheet/decorators">Decorators cheatsheet</router-link> para exemplos).

**Mantenha-os simples** — Se o seu decorador estiver ficando complexo, considere se ele deveria ser uma classe ou uma função separada.

**Pense na ordem** — Ao empilhar decoradores, aquele mais próximo da função é executado primeiro:

```python
@timer
@debug
def my_function():
    pass

# Isso é o mesmo que:
# my_function = timer(debug(my_function))
```

**Não os use em excesso** — Decoradores são poderosos, mas muitos podem tornar o código difícil de acompanhar.

## Principais Conclusões

Decoradores permitem que você adicione funcionalidade a funções sem alterar seu código. Eles são perfeitos para preocupações transversais como tempo, registro (logging), autenticação e cache.

Comece com os padrões simples mostrados aqui. Assim que se sentir confortável, você pode criar decoradores mais sofisticados para suas necessidades específicas. A chave é entender que decoradores são apenas funções que envolvem outras funções — todo o resto é apenas uma aplicação inteligente desse conceito básico.

Quer praticar? Tente adicionar o decorador `@timer` a algumas de suas funções existentes e veja quais são mais lentas do que você esperava. Você pode se surpreender com o que descobrir!

## Links Relevantes

Adicione links de documentação interna relevantes abaixo para leitura adicional:

- <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link>
- <router-link to="/cheatsheet/functions">Functions (cheatsheet)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs (cheatsheet)</router-link>
- <router-link to="/cheatsheet/debugging">Debugging (cheatsheet)</router-link>
- <router-link to="/cheatsheet/oop-basics">OOP basics (cheatsheet)</router-link>
- <router-link to="/builtin/callable">callable() (builtin)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (builtin)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python: Easy args & kwargs (blog)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python comprehensions (blog)</router-link>
