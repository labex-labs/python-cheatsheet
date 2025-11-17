---
title: 'Python JSON et YAML - Aide-mémoire Python'
description: "JSON (JavaScript Object Notation) est un format léger pour stocker et transporter des données. JSON est souvent utilisé lors de l'envoi de données d'un serveur à une page web."
labUrl: 'https://labex.io/fr/labs/python-python-json-and-yaml-633659?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON et YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON signifie JavaScript Object Notation et est un format léger pour stocker et transporter des données. JSON est souvent utilisé lorsque des données sont envoyées d'un serveur à une page web.

```python
# Lire un fichier JSON : json.load() analyse le JSON à partir de l'objet fichier
import json
with open("filename.json", "r") as f:  # Ouvrir le fichier en mode lecture
    content = json.load(f)  # Analyser le JSON et retourner un dict/list Python
```

Écrire un fichier JSON avec :

```python
# Écrire un fichier JSON : json.dump() écrit l'objet Python en JSON
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # Ouvrir le fichier en mode écriture
    json.dump(content, f, indent=2)  # Écrire le JSON avec une indentation de 2 espaces
```

## YAML

Comparé à JSON, YAML permet une maintenabilité humaine bien meilleure et donne la possibilité d'ajouter des commentaires. C'est un choix pratique pour les fichiers de configuration qu'un humain devra éditer.

Il existe deux bibliothèques principales permettant d'accéder aux fichiers YAML :

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

Installez-les en utilisant `pip install` dans votre environnement virtuel.

La première est plus facile à utiliser, mais la seconde, Ruamel, implémente beaucoup mieux la spécification YAML, et permet par exemple de modifier un contenu YAML sans altérer les commentaires.

Ouvrir un fichier YAML avec :

```python
# Lire un fichier YAML en utilisant la bibliothèque ruamel.yaml
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # Créer une instance d'analyseur YAML
    yaml.load(f)  # Analyser le YAML et retourner un dict/list Python
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) est un paquet très pratique, permettant d'abstraire complètement le format de fichier de configuration sous-jacent. Il permet de charger un dictionnaire Python à partir de JSON, YAML, TOML, et autres.

Installez-le avec :

```bash
pip install anyconfig
```

Utilisation :

```python
# anyconfig : charger des fichiers de configuration dans divers formats (JSON, YAML, TOML, etc.)
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # Détecte automatiquement le format
```

## Liens pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Lecture et Écriture de Fichiers</router-link>
- <router-link to="/cheatsheet/dictionaries">Dictionnaires Python</router-link>
- <router-link to="/modules/json-module">Le Module json</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Opérations Essentielles sur le Système de Fichiers que Tout Développeur Devrait Connaître</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
