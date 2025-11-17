---
title: 'Decoradores de Python: Patrones Sencillos para Mejorar tu Código - Hoja de Trucos'
description: 'Si sabes escribir una función, sabes escribir un decorador. Aprende a añadir funcionalidades como temporizadores y registradores a tu código con estos patrones fáciles y aptos para principiantes.'
date: 'Aug 16, 2025'
updated: 'Aug 16, 2025'
tags: 'python, intermediate, decorators'
socialImage: '/blog/python-decorators.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Decoradores de Python: Patrones Sencillos para Mejorar tu Código - Hoja de Trucos"
    description: "Si sabes escribir una función, sabes escribir un decorador. Aprende a añadir funcionalidades como temporizadores y registradores a tu código con estos patrones fáciles y aptos para principiantes."
    date: "Aug 16, 2025"
    updated: "Aug 16, 2025"
    tags: "python, intermediate, decorators"
    socialImage: "/blog/python-decorators.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Decoradores de Python: Patrones Sencillos para Mejorar tu Código - Hoja de Trucos" />

¿Conoces esa sensación cuando ves `@algo` encima de una función y te preguntas qué magia negra está ocurriendo? Yo también he estado ahí. Los decoradores pueden parecer intimidantes, pero en realidad son una de las características más elegantes de Python una vez que entiendes lo básico: consulta <router-link to="/cheatsheet/decorators">Decoradores (cheatsheet)</router-link> para una referencia compacta.

Piensa en los decoradores como envoltorios de regalo para tus funciones. La función de dentro sigue siendo la misma, pero el decorador le añade un bonito lazo encima: funcionalidad extra sin cambiar el código original.

## El Decorador Más Sencillo

Empecemos con el ejemplo más básico para entender lo que está sucediendo:

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

¡Eso es todo! Un decorador es solo una función que toma otra función y la envuelve con comportamiento adicional. La sintaxis `@my_decorator` es solo una forma más limpia de escribir `say_hello = my_decorator(say_hello)`.

## Tu Primer Decorador Útil: Temporizador

Aquí tienes un decorador que realmente querrás usar: uno que te dice cuánto tiempo tardan en ejecutarse tus funciones:

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # Preserva el nombre y la documentación de la función original
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

Consulta <router-link to="/cheatsheet/decorators">Decoradores (cheatsheet)</router-link> para plantillas de decoradores adicionales y patrones comunes.

¿Ves cómo usamos `*args` y `**kwargs` (consulta <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs</router-link>)? Esto hace que nuestro decorador funcione con cualquier función, independientemente de cuántos argumentos acepte.

## Depura Tu Código: Decorador de Registro (Logger)

Cuando intentas averiguar qué está fallando, este decorador es increíblemente útil. Consulta también el <router-link to="/cheatsheet/debugging">Depuración (cheatsheet)</router-link> para obtener consejos y técnicas complementarias:

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

## Controla el Acceso: Decorador de Autenticación

¿Quieres asegurarte de que solo ciertos usuarios puedan ejecutar una función? Así es como se hace:

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # En una aplicación real, comprobarías la autenticación real
        user_logged_in = True  # Esto vendría de tu sistema de autenticación

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

## Acelera las Cosas: Decorador de Caché

Si tienes una función que realiza cálculos costosos con las mismas entradas, guarda los resultados en caché:

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
# ... (mucha computación)
# Cache hit for fibonacci(2)
# Cache hit for fibonacci(3)
# ... (acceso a caché)
# 55
```

## Reintentar Operaciones Fallidas

A veces las funciones fallan debido a problemas de red o problemas temporales. Este decorador reintenta automáticamente:

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
    if random.random() < 0.7:  # 70% de probabilidad de fallo
        raise Exception("Network error")
    return "Success!"

# Esto reintentará hasta 3 veces si falla
result = unreliable_api_call()
```

## Limitación de Tasa (Rate Limiting): Ralentiza Tu Código

A veces necesitas ser suave con las API o las bases de datos:

```python
import time
import functools

def rate_limit(seconds):
    """
    Un decorador para limitar la frecuencia con la que se puede llamar a una función.
    """
    def decorator(func):
        # Usamos una lista para almacenar un valor flotante mutable para el tiempo de la última llamada.
        # Esto permite que la función interna 'wrapper' lo modifique.
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Calcular el tiempo transcurrido desde la última llamada
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # Si no ha pasado suficiente tiempo, espera el resto
            if wait_time > 0:
                time.sleep(wait_time)

            # Actualizar el tiempo de la última llamada y ejecutar la función
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # Permitir como máximo una llamada por segundo
def call_api():
    print(f"API called at {time.time():.2f}")

# Estas llamadas estarán espaciadas aproximadamente 1 segundo cada una
call_api()
call_api()
call_api()

# Salida Esperada:
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## Valida Tus Entradas

Asegúrate de que tus funciones reciban el tipo de datos correcto:

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Obtener los nombres de los parámetros de la función
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

# Esto funciona
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# Esto lanza TypeError
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## Cuándo Usar Cada Decorador

| Tipo de Decorador       | Mejor Para                         | Casos de Uso de Ejemplo                                        |
| :---------------------- | :--------------------------------- | :------------------------------------------------------------- |
| **Temporizador**        | Monitoreo de rendimiento           | Encontrar funciones lentas, optimización                       |
| **Depuración/Registro** | Desarrollo y solución de problemas | Comprender llamadas a funciones, depuración                    |
| **Auth**                | Seguridad y control de acceso      | Proteger funciones de administrador, permisos de usuario       |
| **Caché**               | Cálculos costosos                  | Consultas a bases de datos, llamadas a API, cálculos complejos |
| **Reintentar**          | Operaciones no fiables             | Solicitudes de red, operaciones de archivos                    |
| **Límite de Tasa**      | Control de frecuencia              | Llamadas a API, prevención de spam                             |
| **Validación**          | Integridad de datos                | Entrada de usuario, parámetros de API                          |

## Consejos para Usar Decoradores

**Siempre usa `@functools.wraps`** – Esto preserva el nombre y la documentación de la función original, facilitando la depuración (consulta <router-link to="/cheatsheet/decorators">Decorators cheatsheet</router-link> para ver ejemplos).

**Mantenlos sencillos** – Si tu decorador se está volviendo complejo, considera si debería ser una clase o una función separada en su lugar.

**Piensa en el orden** – Al apilar decoradores, el más cercano a la función se ejecuta primero:

```python
@timer
@debug
def my_function():
    pass

# Esto es lo mismo que:
# my_function = timer(debug(my_function))
```

**No los uses en exceso** – Los decoradores son potentes, pero demasiados pueden hacer que el código sea difícil de seguir.

## Conclusiones Clave

Los decoradores te permiten añadir funcionalidad a las funciones sin cambiar su código. Son perfectos para preocupaciones transversales como temporización, registro, autenticación y almacenamiento en caché.

Empieza con los patrones sencillos mostrados aquí. Una vez que te sientas cómodo, puedes crear decoradores más sofisticados para tus necesidades específicas. La clave es entender que los decoradores son solo funciones que envuelven otras funciones; todo lo demás es una aplicación inteligente de ese concepto básico.

¿Quieres practicar? Intenta añadir el decorador `@timer` a algunas de tus funciones existentes y comprueba cuáles son más lentas de lo que esperabas. ¡Podrías sorprenderte de lo que descubres!

## Enlaces Relevantes

Añade enlaces de documentación interna relevantes a continuación para una lectura adicional:

- <router-link to="/cheatsheet/decorators">Decoradores (cheatsheet)</router-link>
- <router-link to="/cheatsheet/functions">Funciones (cheatsheet)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs (cheatsheet)</router-link>
- <router-link to="/cheatsheet/debugging">Depuración (cheatsheet)</router-link>
- <router-link to="/cheatsheet/oop-basics">Conceptos básicos de OOP (cheatsheet)</router-link>
- <router-link to="/builtin/callable">callable() (builtin)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (builtin)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python: Args y kwargs sencillos (blog)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Comprensiones de Python (blog)</router-link>
