---
title: 'Fonctions intégrées Python - Aide-mémoire Python'
description: "L'interpréteur Python contient de nombreuses fonctions et types intégrés toujours disponibles."
labUrl: 'https://labex.io/fr/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonctions Intégrées de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

L'interpréteur Python dispose d'un certain nombre de fonctions et de types intégrés qui sont toujours disponibles.

## Fonctions Intégrées de Python

| Fonction                                                             | Description                                                                         |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | Retourne la valeur absolue d'un nombre.                                             |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | Retourne un itérateur asynchrone pour un itérable asynchrone.                       |
| <router-link to='/builtin/all'>all()</router-link>                   | Retourne True si tous les éléments de l'itérable sont vrais.                        |
| <router-link to='/builtin/any'>any()</router-link>                   | Retourne True si n'importe quel élément de l'itérable est vrai.                     |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | Retourne une chaîne avec une représentation imprimable d'un objet.                  |
| <router-link to='/builtin/bin'>bin()</router-link>                   | Convertit un nombre entier en une chaîne binaire.                                   |
| <router-link to='/builtin/bool'>bool()</router-link>                 | Retourne une valeur booléenne.                                                      |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | Vous fait entrer dans le débogueur au point d'appel.                                |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | Retourne un nouveau tableau d'octets.                                               |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | Retourne un nouvel objet « bytes ».                                                 |
| <router-link to='/builtin/callable'>callable()</router-link>         | Retourne True si l'argument objet est appelable, False sinon.                       |
| <router-link to='/builtin/chr'>chr()</router-link>                   | Retourne la chaîne représentant un caractère.                                       |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | Transforme une méthode en méthode de classe.                                        |
| <router-link to='/builtin/compile'>compile()</router-link>           | Compile la source en un objet code ou AST.                                          |
| <router-link to='/builtin/complex'>complex()</router-link>           | Retourne un nombre complexe de valeur real + imag\*1j.                              |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | Supprime l'attribut nommé, à condition que l'objet le permette.                     |
| <router-link to='/builtin/dict'>dict()</router-link>                 | Crée un nouveau dictionnaire.                                                       |
| <router-link to='/builtin/dir'>dir()</router-link>                   | Retourne la liste des noms dans la portée locale actuelle.                          |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | Retourne une paire de nombres constituée de leur quotient et de leur reste.         |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | Retourne un objet enumerate.                                                        |
| <router-link to='/builtin/eval'>eval()</router-link>                 | Évalue et exécute une expression.                                                   |
| <router-link to='/builtin/exec'>exec()</router-link>                 | Cette fonction prend en charge l'exécution dynamique de code Python.                |
| <router-link to='/builtin/filter'>filter()</router-link>             | Construit un itérateur à partir d'un itérable et retourne les éléments vrais.       |
| <router-link to='/builtin/float'>float()</router-link>               | Retourne un nombre à virgule flottante à partir d'un nombre ou d'une chaîne.        |
| <router-link to='/builtin/format'>format()</router-link>             | Convertit une valeur en une représentation « formatée ».                            |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | Retourne un nouvel objet frozenset.                                                 |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | Retourne la valeur de l'attribut nommé de l'objet.                                  |
| <router-link to='/builtin/globals'>globals()</router-link>           | Retourne le dictionnaire implémentant l'espace de noms du module actuel.            |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | Retourne True si l'objet a l'attribut nommé.                                        |
| <router-link to='/builtin/hash'>hash()</router-link>                 | Retourne la valeur de hachage de l'objet.                                           |
| <router-link to='/builtin/help'>help()</router-link>                 | Déclenche le système d'aide intégré.                                                |
| <router-link to='/builtin/hex'>hex()</router-link>                   | Convertit un nombre entier en une chaîne hexadécimale en minuscules.                |
| <router-link to='/builtin/id'>id()</router-link>                     | Retourne « l'identité » d'un objet.                                                 |
| <router-link to='/builtin/input'>input()</router-link>               | Cette fonction prend une entrée et la convertit en une chaîne.                      |
| <router-link to='/builtin/int'>int()</router-link>                   | Retourne un objet entier construit à partir d'un nombre ou d'une chaîne.            |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | Retourne True si l'argument objet est une instance d'un objet.                      |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | Retourne True si class est une sous-classe de classinfo.                            |
| <router-link to='/builtin/iter'>iter()</router-link>                 | Retourne un objet itérateur.                                                        |
| <router-link to='/builtin/len'>len()</router-link>                   | Retourne la longueur (le nombre d'éléments) d'un objet.                             |
| <router-link to='/builtin/list'>list()</router-link>                 | Plutôt que d'être une fonction, list est un type de séquence mutable.               |
| <router-link to='/builtin/locals'>locals()</router-link>             | Met à jour et retourne un dictionnaire avec la table des symboles locale actuelle.  |
| <router-link to='/builtin/map'>map()</router-link>                   | Retourne un itérateur qui applique une fonction à chaque élément de l'itérable.     |
| <router-link to='/builtin/max'>max()</router-link>                   | Retourne l'élément le plus grand dans un itérable.                                  |
| <router-link to='/builtin/min'>min()</router-link>                   | Retourne l'élément le plus petit dans un itérable.                                  |
| <router-link to='/builtin/next'>next()</router-link>                 | Récupère l'élément suivant de l'itérateur.                                          |
| <router-link to='/builtin/object'>object()</router-link>             | Retourne un nouvel objet sans caractéristiques.                                     |
| <router-link to='/builtin/oct'>oct()</router-link>                   | Convertit un nombre entier en une chaîne octale.                                    |
| <router-link to='/builtin/open'>open()</router-link>                 | Ouvre un fichier et retourne un objet fichier correspondant.                        |
| <router-link to='/builtin/ord'>ord()</router-link>                   | Retourne un entier représentant le point de code Unicode d'un caractère.            |
| <router-link to='/builtin/pow'>pow()</router-link>                   | Retourne base à la puissance exp.                                                   |
| <router-link to='/builtin/print'>print()</router-link>               | Imprime des objets sur le flux de fichier texte.                                    |
| <router-link to='/builtin/property'>property()</router-link>         | Retourne un attribut de propriété.                                                  |
| <router-link to='/builtin/repr'>repr()</router-link>                 | Retourne une chaîne contenant une représentation imprimable d'un objet.             |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | Retourne un itérateur inversé.                                                      |
| <router-link to='/builtin/round'>round()</router-link>               | Retourne le nombre arrondi à la précision ndigits après le point décimal.           |
| <router-link to='/builtin/set'>set()</router-link>                   | Retourne un nouvel objet set.                                                       |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | C'est le pendant de getattr().                                                      |
| <router-link to='/builtin/slice'>slice()</router-link>               | Retourne un objet tranché représentant un ensemble d'indices.                       |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | Retourne une nouvelle liste triée à partir des éléments de l'itérable.              |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | Transforme une méthode en méthode statique.                                         |
| <router-link to='/builtin/str'>str()</router-link>                   | Retourne une version str de l'objet.                                                |
| <router-link to='/builtin/sum'>sum()</router-link>                   | Additionne start et les éléments d'un itérable.                                     |
| <router-link to='/builtin/super'>super()</router-link>               | Retourne un objet proxy qui délègue les appels de méthode à un parent ou un voisin. |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | Plutôt que d'être une fonction, est en fait un type de séquence immuable.           |
| <router-link to='/builtin/type'>type()</router-link>                 | Retourne le type d'un objet.                                                        |
| <router-link to='/builtin/vars'>vars()</router-link>                 | Retourne l'attribut dict pour tout autre objet ayant un attribut dict.              |
| <router-link to='/builtin/zip'>zip()</router-link>                   | Itère sur plusieurs itérables en parallèle.                                         |
| <router-link to='/builtin/import'>**import**()</router-link>         | Cette fonction est invoquée par l'instruction import.                               |
