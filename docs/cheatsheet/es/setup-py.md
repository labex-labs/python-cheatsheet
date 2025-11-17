---
title: 'Python Setup.py - Hoja de Trucos de Python'
description: 'El script setup es el centro de toda actividad en la construcción, distribución e instalación de módulos usando Distutils. El propósito principal del script setup es describir su distribución de módulos a Distutils para que los diversos comandos que operan sobre sus módulos realicen la acción correcta.'
labUrl: 'https://labex.io/es/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
setup.py de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    Una opinión 'controvertida'
  </base-warning-title>
  <base-warning-content>
    Usar `setup.py` para empaquetar y distribuir tus paquetes de python puede ser bastante desafiante de vez en cuando. Herramientas modernas como <a target="_blank" href="https://python-poetry.org/">Poetry</a> y <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> no solo hacen que el empaquetado sea **mucho más fácil**, sino que también te ayudan a gestionar tus dependencias de una manera muy conveniente. UV es particularmente notable por ser entre 10 y 100 veces más rápido que las herramientas tradicionales.
  </base-warning-content>
</base-warning>

Si deseas más información sobre Poetry, puedes leer los siguientes artículos:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Proyectos de Python con Poetry y VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Proyectos de Python con Poetry y VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Proyectos de Python con Poetry y VSCode. Parte 3</router-link>

Para una guía completa sobre UV, el gestor de paquetes de Python ultrarrápido, lee: <router-link to="/blog/python-uv-package-manager">UV: El gestor de paquetes de Python ultrarrápido</router-link>.

## Introducción

El script de configuración (setup script) es el centro de toda la actividad en la construcción, distribución e instalación de módulos utilizando Distutils. El propósito principal del script de configuración es describir tu distribución de módulos a Distutils, para que los diversos comandos que operan en tus módulos hagan lo correcto.

Para una guía completa sobre el manejo de rutas de archivos y directorios, lo cual es esencial para gestionar estructuras de proyectos, consulta la página de <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>.

El archivo `setup.py` está en el corazón de un proyecto de Python. Describe todos los metadatos sobre tu proyecto. Hay bastantes campos que puedes añadir a un proyecto para darle un rico conjunto de metadatos que describen el proyecto. Sin embargo, solo hay tres campos obligatorios: `name`, `version` y `packages`. El campo `name` debe ser único si deseas publicar tu paquete en el Python Package Index (PyPI). El campo `version` realiza un seguimiento de las diferentes versiones del proyecto. El campo `packages` describe dónde has colocado el código fuente de Python dentro de tu proyecto.

Esto te permite instalar fácilmente paquetes de Python. A menudo es suficiente escribir:

```bash
python setup.py install
```

y el módulo se instalará a sí mismo.

## Ejemplo

Nuestro `setup.py` inicial también incluirá información sobre la licencia y reutilizará el archivo `README.txt` para el campo `long_description`. Se verá así:

```python
# setup.py: define metadatos del paquete para distribución
from distutils.core import setup
setup(
   name='pythonCheatsheet',  # Nombre del paquete (debe ser único en PyPI)
   version='0.1',  # Número de versión
   packages=['pipenv',],  # Lista de paquetes a incluir
   license='MIT',  # Tipo de licencia
   long_description=open('README.txt').read(),  # Leer descripción desde el archivo
)
```

Encuentra más información visitando la [documentación oficial](http://docs.python.org/3.11/install/index.html).

## Enlaces relevantes

- <router-link to="/cheatsheet/virtual-environments">Entornos Virtuales</router-link>
- <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: El gestor de paquetes de Python ultrarrápido</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Proyectos de Python con Poetry y VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Proyectos de Python con Poetry y VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Proyectos de Python con Poetry y VSCode. Parte 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
