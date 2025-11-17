---
title: 'Python-Dekoratoren - Einfache Muster zur Code-Optimierung - Python-Spickzettel'
description: 'Wenn Sie eine Funktion schreiben können, können Sie einen Dekorator schreiben. Lernen Sie mit diesen einfachen, anfängerfreundlichen Mustern, Ihrem Code Funktionen wie Timer und Logger hinzuzufügen.'
date: 'Aug 16, 2025'
updated: 'Aug 16, 2025'
tags: 'python, intermediate, decorators'
socialImage: '/blog/python-decorators.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python-Dekoratoren - Einfache Muster zur Code-Optimierung - Python-Spickzettel"
    description: "Wenn Sie eine Funktion schreiben können, können Sie einen Dekorator schreiben. Lernen Sie mit diesen einfachen, anfängerfreundlichen Mustern, Ihrem Code Funktionen wie Timer und Logger hinzuzufügen."
    date: "Aug 16, 2025"
    updated: "Aug 16, 2025"
    tags: "python, intermediate, decorators"
    socialImage: "/blog/python-decorators.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python-Dekoratoren - Einfache Muster zur Code-Optimierung - Python-Spickzettel" />

Sie kennen dieses Gefühl, wenn Sie `@something` über einer Funktion sehen und sich fragen, welche schwarze Magie da vor sich geht? Ich war auch schon dort. Decorators mögen einschüchternd wirken, sind aber tatsächlich eines der elegantesten Features von Python, sobald man die Grundlagen versteht – siehe <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link> für eine kompakte Referenz.

Stellen Sie sich Decorators wie Geschenkverpackungen für Ihre Funktionen vor. Die Funktion im Inneren bleibt gleich, aber der Decorator legt eine schöne Schleife obenauf – zusätzliche Funktionalität, ohne den ursprünglichen Code zu ändern.

## Der einfachste Decorator

Beginnen wir mit dem grundlegendsten Beispiel, um zu verstehen, was passiert:

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

Das ist alles! Ein Decorator ist nur eine Funktion, die eine andere Funktion entgegennimmt und sie mit zusätzlichem Verhalten umhüllt. Die Syntax `@my_decorator` ist nur eine sauberere Schreibweise für `say_hello = my_decorator(say_hello)`.

## Ihr erster nützlicher Decorator: Timer

Hier ist ein Decorator, den Sie tatsächlich verwenden möchten – einer, der Ihnen mitteilt, wie lange Ihre Funktionen zum Ausführen benötigen:

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # Preserves the original function's name and docs
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

Siehe <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link> für zusätzliche Decorator-Vorlagen und gängige Muster.

Sehen Sie, wie wir `*args` und `**kwargs` verwenden (siehe <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs</router-link>)? Dies ermöglicht es unserem Decorator, mit jeder Funktion zu arbeiten, unabhängig davon, wie viele Argumente sie entgegennimmt.

## Debuggen Sie Ihren Code: Logger Decorator

Wenn Sie versuchen herauszufinden, was schief läuft, ist dieser Decorator unglaublich nützlich – schauen Sie sich auch das <router-link to="/cheatsheet/debugging">Debugging (cheatsheet)</router-link> für ergänzende Tipps und Techniken an:

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

## Zugriff kontrollieren: Authentifizierungs-Decorator

Möchten Sie sicherstellen, dass nur bestimmte Benutzer eine Funktion ausführen können? So geht's:

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # In einer echten Anwendung würden Sie die tatsächliche Authentifizierung prüfen
        user_logged_in = True  # Dies würde von Ihrem Authentifizierungssystem kommen

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

## Beschleunigen Sie Dinge: Cache Decorator

Wenn Sie eine Funktion haben, die aufwendige Berechnungen mit denselben Eingaben durchführt, speichern Sie die Ergebnisse im Cache:

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
# ... (lots of computation)
# Cache hit for fibonacci(2)
# Cache hit for fibonacci(3)
# ... (cache hits)
# 55
```

## Fehlgeschlagene Operationen wiederholen

Manchmal schlagen Funktionen aufgrund von Netzwerkproblemen oder vorübergehenden Problemen fehl. Dieser Decorator wiederholt den Vorgang automatisch:

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
    if random.random() < 0.7:  # 70% chance of failure
        raise Exception("Network error")
    return "Success!"

# This will retry up to 3 times if it fails
result = unreliable_api_call()
```

## Ratenbegrenzung: Verlangsamen Sie Ihren Code

Manchmal müssen Sie API- oder Datenbankaufrufe schonen:

```python
import time
import functools

def rate_limit(seconds):
    """
    A decorator to limit how frequently a function can be called.
    """
    def decorator(func):
        # Use a list to store a mutable float value for the last call time.
        # This allows the inner wrapper function to modify it.
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Calculate time elapsed since the last call
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # If not enough time has passed, sleep for the remainder
            if wait_time > 0:
                time.sleep(wait_time)

            # Update the last call time and execute the function
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # Allow at most one call per second
def call_api():
    print(f"API called at {time.time():.2f}")

# These calls will be spaced out by approximately 1 second each
call_api()
call_api()
call_api()

# Expected Output:
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## Validieren Sie Ihre Eingaben

Stellen Sie sicher, dass Ihre Funktionen die richtigen Datentypen erhalten:

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Get function parameter names
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

# This works
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# This raises TypeError
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## Wann man welchen Decorator verwendet

| Decorator Type   | Best For                       | Example Use Cases                                 |
| :--------------- | :----------------------------- | :------------------------------------------------ |
| **Timer**        | Performance monitoring         | Finding slow functions, optimization              |
| **Debug/Logger** | Development \& troubleshooting | Understanding function calls, debugging           |
| **Auth**         | Security \& access control     | Protecting admin functions, user permissions      |
| **Cache**        | Expensive computations         | Database queries, API calls, complex calculations |
| **Retry**        | Unreliable operations          | Network requests, file operations                 |
| **Rate Limit**   | Controlling frequency          | API calls, preventing spam                        |
| **Validation**   | Data integrity                 | User input, API parameters                        |

## Tipps zur Verwendung von Decorators

**Verwenden Sie immer `@functools.wraps`** – Dies bewahrt den Namen und die Dokumentation der ursprünglichen Funktion und erleichtert das Debuggen (siehe <router-link to="/cheatsheet/decorators">Decorators cheatsheet</router-link> für Beispiele).

**Halten Sie sie einfach** – Wenn Ihr Decorator kompliziert wird, überlegen Sie, ob er stattdessen eine Klasse oder eine separate Funktion sein sollte.

**Denken Sie an die Reihenfolge** – Beim Stapeln von Decorators wird derjenige, der der Funktion am nächsten liegt, zuerst ausgeführt:

```python
@timer
@debug
def my_function():
    pass

# This is the same as:
# my_function = timer(debug(my_function))
```

**Überverwenden Sie sie nicht** – Decorators sind mächtig, aber zu viele können den Code schwer nachvollziehbar machen.

## Wichtigste Erkenntnisse

Decorators ermöglichen es Ihnen, Funktionen Funktionalität hinzuzufügen, ohne deren Code zu ändern. Sie eignen sich perfekt für übergreifende Anliegen wie Zeitmessung, Protokollierung, Authentifizierung und Caching.

Beginnen Sie mit den hier gezeigten einfachen Mustern. Sobald Sie sich sicher fühlen, können Sie ausgefeiltere Decorators für Ihre spezifischen Bedürfnisse erstellen. Der Schlüssel liegt darin zu verstehen, dass Decorators nur Funktionen sind, die andere Funktionen umhüllen – alles andere ist nur eine clevere Anwendung dieses grundlegenden Konzepts.

Möchten Sie üben? Versuchen Sie, den Decorator `@timer` zu einigen Ihrer bestehenden Funktionen hinzuzufügen und sehen Sie, welche langsamer sind als erwartet. Sie werden vielleicht überrascht sein, was Sie entdecken!

## Relevante Links

Fügen Sie unten relevante interne Dokumentationslinks für weiterführende Lektüre hinzu:

- <router-link to="/cheatsheet/decorators">Decorators (cheatsheet)</router-link>
- <router-link to="/cheatsheet/functions">Functions (cheatsheet)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs (cheatsheet)</router-link>
- <router-link to="/cheatsheet/debugging">Debugging (cheatsheet)</router-link>
- <router-link to="/cheatsheet/oop-basics">OOP basics (cheatsheet)</router-link>
- <router-link to="/builtin/callable">callable() (builtin)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (builtin)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python: Easy args & kwargs (blog)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python comprehensions (blog)</router-link>
