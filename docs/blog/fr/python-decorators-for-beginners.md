---
title: 'Décorateurs Python - Motifs Simples pour Améliorer Votre Code - Aide-mémoire Python'
description: 'Si vous savez écrire une fonction, vous savez écrire un décorateur. Apprenez à ajouter des fonctionnalités comme des minuteurs et des journaux à votre code avec ces motifs faciles et adaptés aux débutants.'
date: 'Aug 16, 2025'
updated: 'Aug 16, 2025'
tags: 'python, intermediate, decorators'
socialImage: '/blog/python-decorators.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Décorateurs Python - Motifs Simples pour Améliorer Votre Code - Aide-mémoire Python"
    description: "Si vous savez écrire une fonction, vous savez écrire un décorateur. Apprenez à ajouter des fonctionnalités comme des minuteurs et des journaux à votre code avec ces motifs faciles et adaptés aux débutants."
    date: "Aug 16, 2025"
    updated: "Aug 16, 2025"
    tags: "python, intermediate, decorators"
    socialImage: "/blog/python-decorators.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Décorateurs Python - Motifs Simples pour Améliorer Votre Code - Aide-mémoire Python" />

Vous connaissez cette sensation lorsque vous voyez `@quelque chose` au-dessus d'une fonction et que vous vous demandez quelle magie noire s'opère ? J'y suis aussi passé. Les décorateurs peuvent sembler intimidants, mais ils sont en fait l'une des fonctionnalités les plus élégantes de Python une fois que vous en comprenez les bases — consultez <router-link to="/cheatsheet/decorators">Décorateurs (aide-mémoire)</router-link> pour une référence compacte.

Considérez les décorateurs comme un emballage cadeau pour vos fonctions. La fonction à l'intérieur reste la même, mais le décorateur ajoute un joli nœud sur le dessus – une fonctionnalité supplémentaire sans modifier le code original.

## Le Décorateur le Plus Simple

Commençons par l'exemple le plus basique pour comprendre ce qui se passe :

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

C'est tout ! Un décorateur n'est qu'une fonction qui prend une autre fonction et l'enveloppe d'un comportement supplémentaire. La syntaxe `@my_decorator` n'est qu'une manière plus propre d'écrire `say_hello = my_decorator(say_hello)`.

## Votre Premier Décorateur Utile : Timer

Voici un décorateur que vous voudrez réellement utiliser – un qui vous indique le temps que prennent vos fonctions à s'exécuter :

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # Préserve le nom et la documentation de la fonction originale
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

Consultez le <router-link to="/cheatsheet/decorators">Décorateurs (aide-mémoire)</router-link> pour des modèles de décorateurs supplémentaires et des schémas courants.

Remarquez comment nous utilisons `*args` et `**kwargs` (voir <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs</router-link>) ? Cela permet à notre décorateur de fonctionner avec n'importe quelle fonction, quel que soit le nombre d'arguments qu'elle prend.

## Déboguez Votre Code : Décorateur Logger

Lorsque vous essayez de comprendre ce qui ne va pas, ce décorateur est incroyablement utile — consultez également le <router-link to="/cheatsheet/debugging">Débogage (aide-mémoire)</router-link> pour des conseils et techniques complémentaires :

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

## Contrôler l'Accès : Décorateur d'Authentification

Vous voulez vous assurer que seuls certains utilisateurs peuvent exécuter une fonction ? Voici comment faire :

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # Dans une vraie application, vous vérifieriez l'authentification réelle
        user_logged_in = True  # Ceci proviendrait de votre système d'authentification

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

## Accélérer les Choses : Décorateur Cache

Si vous avez une fonction qui effectue des calculs coûteux avec les mêmes entrées, mettez les résultats en cache :

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
# ... (beaucoup de calculs)
# Cache hit for fibonacci(2)
# Cache hit for fibonacci(3)
# ... (cache hits)
# 55
```

## Réessayer les Opérations Échouées

Parfois, les fonctions échouent en raison de problèmes réseau ou de problèmes temporaires. Ce décorateur réessaie automatiquement :

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
    if random.random() < 0.7:  # 70% de chance d'échec
        raise Exception("Network error")
    return "Success!"

# Ceci réessaiera jusqu'à 3 fois si cela échoue
result = unreliable_api_call()
```

## Limitation de Débit : Ralentir Votre Code

Parfois, vous devez être prudent avec les API ou les bases de données :

```python
import time
import functools

def rate_limit(seconds):
    """
    Un décorateur pour limiter la fréquence à laquelle une fonction peut être appelée.
    """
    def decorator(func):
        # Utilise une liste pour stocker une valeur flottante mutable pour l'heure du dernier appel.
        # Cela permet à la fonction wrapper interne de la modifier.
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Calcule le temps écoulé depuis le dernier appel
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # Si pas assez de temps s'est écoulé, dormir pour le reste
            if wait_time > 0:
                time.sleep(wait_time)

            # Met à jour l'heure du dernier appel et exécute la fonction
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # Autorise au maximum un appel par seconde
def call_api():
    print(f"API called at {time.time():.2f}")

# Ces appels seront espacés d'environ 1 seconde chacun
call_api()
call_api()
call_api()

# Sortie attendue :
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## Valider Vos Entrées

Assurez-vous que vos fonctions reçoivent les bons types de données :

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Obtenir les noms des paramètres de la fonction
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

# Cela fonctionne
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# Cela lève une TypeError
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## Quand Utiliser Chaque Décorateur

| Type de Décorateur | Idéal Pour                    | Exemples d'Utilisation                                           |
| :----------------- | :---------------------------- | :--------------------------------------------------------------- |
| **Timer**          | Surveillance des performances | Trouver des fonctions lentes, optimisation                       |
| **Debug/Logger**   | Développement et dépannage    | Comprendre les appels de fonction, débogage                      |
| **Auth**           | Sécurité et contrôle d'accès  | Protéger les fonctions d'administration, permissions utilisateur |
| **Cache**          | Calculs coûteux               | Requêtes de base de données, appels API, calculs complexes       |
| **Retry**          | Opérations peu fiables        | Requêtes réseau, opérations sur fichiers                         |
| **Rate Limit**     | Contrôle de la fréquence      | Appels API, prévention du spam                                   |
| **Validation**     | Intégrité des données         | Entrées utilisateur, paramètres API                              |

## Conseils pour Utiliser les Décorateurs

**Utilisez toujours `@functools.wraps`** – Cela préserve le nom et la documentation de la fonction originale, facilitant le débogage (voir <router-link to="/cheatsheet/decorators">Aide-mémoire Décorateurs</router-link> pour des exemples).

**Gardez-les simples** – Si votre décorateur devient complexe, envisagez s'il ne devrait pas plutôt être une classe ou une fonction séparée.

**Pensez à l'ordre** – Lors de l'empilement des décorateurs, celui le plus proche de la fonction s'exécute en premier :

```python
@timer
@debug
def my_function():
    pass

# Ceci est équivalent à :
# my_function = timer(debug(my_function))
```

**Ne les utilisez pas à l'excès** – Les décorateurs sont puissants, mais trop peuvent rendre le code difficile à suivre.

## Points Clés à Retenir

Les décorateurs vous permettent d'ajouter des fonctionnalités aux fonctions sans modifier leur code. Ils sont parfaits pour les préoccupations transversales telles que le chronométrage, la journalisation, l'authentification et la mise en cache.

Commencez par les modèles simples présentés ici. Une fois que vous êtes à l'aise, vous pouvez créer des décorateurs plus sophistiqués pour vos besoins spécifiques. L'essentiel est de comprendre que les décorateurs ne sont que des fonctions qui enveloppent d'autres fonctions – tout le reste n'est qu'une application astucieuse de ce concept de base.

Vous voulez vous entraîner ? Essayez d'ajouter le décorateur `@timer` à certaines de vos fonctions existantes et voyez lesquelles sont plus lentes que prévu. Vous pourriez être surpris de ce que vous découvrez !

## Liens Pertinents

Ajoutez ci-dessous des liens vers la documentation interne pertinente pour une lecture plus approfondie :

- <router-link to="/cheatsheet/decorators">Décorateurs (aide-mémoire)</router-link>
- <router-link to="/cheatsheet/functions">Fonctions (aide-mémoire)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args & kwargs (aide-mémoire)</router-link>
- <router-link to="/cheatsheet/debugging">Débogage (aide-mémoire)</router-link>
- <router-link to="/cheatsheet/oop-basics">Bases de l'OOP (aide-mémoire)</router-link>
- <router-link to="/builtin/callable">callable() (intégré)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (intégré)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python : Args & kwargs faciles (blog)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Compréhensions Python (blog)</router-link>
