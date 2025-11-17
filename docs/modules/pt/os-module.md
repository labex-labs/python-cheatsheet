---
title: 'Módulo OS Python - Folha de Dicas Python'
description: 'Este módulo oferece uma forma portátil de usar funcionalidades dependentes do sistema operacional.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo OS Python
</base-title>

Este módulo fornece uma maneira portátil de usar funcionalidades dependentes do sistema operacional.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Módulo OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    O módulo <router-link to="/modules/pathlib-module">pathlib</router-link> fornece muito mais funcionalidades do que as listadas aqui, como obter o nome do arquivo, obter a extensão do arquivo, ler/escrever um arquivo sem abri-lo manualmente, etc. Consulte a <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentação oficial</a> se você pretende saber mais.
    <br>
    Para uma análise mais aprofundada de ambos, consulte a página <router-link to="/cheatsheet/file-directory-path">Caminhos de Arquivos e Diretórios</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Caminhos no Linux e Windows

No Windows, os caminhos são escritos usando barras invertidas (`\`) como separador entre os nomes das pastas. Em sistemas operacionais baseados em Unix, como macOS, Linux e BSDs, a barra normal (`/`) é usada como separador de caminho. Juntar caminhos pode ser um problema se o seu código precisar funcionar em diferentes plataformas.

Felizmente, o Python nos fornece `os.path.join` para lidar com isso.

```python
import os

# Junta componentes de caminho usando o separador correto para o SO
os.path.join('usr', 'bin', 'spam')
```

Saída:

```plaintext
usr\bin\spam
```

Juntar caminhos é útil se você precisar criar diferentes caminhos de arquivo sob o mesmo diretório.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# Junta cada nome de arquivo com o diretório base
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

Saída:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## O diretório de trabalho atual

```python
import os

# Obtém o diretório de trabalho atual
os.getcwd()
```

Saída:

```plaintext
/home/labex/project
```

```python
# Altera o diretório de trabalho atual
os.chdir('/usr/bin')

# Verifica a alteração
os.getcwd()
```

Saída:

```plaintext
/usr/bin
```

## Criação de novas pastas

```python
import os
# Cria diretórios recursivamente (cria todos os diretórios pais se necessário)
os.makedirs('/tmp/delicious/walnut/waffles')
```

## Caminhos Absolutos vs. Relativos

Existem duas maneiras de especificar um caminho de arquivo.

- Um **caminho absoluto**, que sempre começa com a pasta raiz
- Um **caminho relativo**, que é relativo ao diretório de trabalho atual do programa

Existem também as pastas ponto (`.`) e ponto-ponto (`..`). Estas não são pastas reais, mas nomes especiais que podem ser usados em um caminho. Um único ponto (“dot”) para um nome de pasta é um atalho para “este diretório”. Dois pontos (“dot-dot”) significam “a pasta pai”.

### Lidando com caminhos absolutos

Para ver se um caminho é um caminho absoluto:

```python
import os
# Verifica se o caminho é absoluto (começa com a raiz)
os.path.isabs('/')
```

Saída:

```plaintext
True
```

```python
# Caminhos relativos retornam False
os.path.isabs('..')
```

Saída:

```plaintext
False
```

Você também pode extrair um caminho absoluto:

```python
import os
# Obtém o diretório atual primeiro
os.getcwd()
```

Saída:

```plaintext
/home/labex/project
```

```python
# Converte caminho relativo para caminho absoluto
os.path.abspath('..')
```

Saída:

```plaintext
/home
```

### Lidando com caminhos relativos

Você pode obter um caminho relativo de um caminho inicial para outro caminho.

```python
import os
# Obtém o caminho relativo do caminho inicial para o caminho de destino
os.path.relpath('/etc/passwd', '/')
```

Saída:

```plaintext
etc/passwd
```

## Validade de Caminho e Arquivo

### Verificando se um arquivo/diretório existe

```python
import os

# Verifica se o caminho existe (arquivo ou diretório)
os.path.exists('.')
```

Saída:

```plaintext
True
```

```python
os.path.exists('setup.py')
```

Saída:

```plaintext
True
```

```python
os.path.exists('/etc')
```

Saída:

```plaintext
True
```

```python
os.path.exists('nonexistentfile')
```

Saída:

```plaintext
False
```

### Verificando se um caminho é um arquivo

```python
import os

# Verifica se o caminho é um arquivo
os.path.isfile('setup.py')
```

Saída:

```plaintext
True
```

```python
os.path.isfile('/home')
```

Saída:

```plaintext
False
```

```python
os.path.isfile('nonexistentfile')
```

Saída:

```plaintext
False
```

### Verificando se um caminho é um diretório

```python
import os

# Verifica se o caminho é um diretório
os.path.isdir('/')
```

Saída:

```plaintext
True
```

```python
os.path.isdir('setup.py')
```

Saída:

```plaintext
False
```

```python
os.path.isdir('/spam')
```

Saída:

```plaintext
False
```

## Obtendo o tamanho de um arquivo em bytes

```python
import os

# Obtém o tamanho do arquivo em bytes
os.path.getsize('/usr/bin/python3')
```

Saída:

```plaintext
776192
```

## Listando diretórios

```python
import os

# Lista todos os arquivos e diretórios no caminho especificado
os.listdir('/usr/bin')
```

Saída:

```plaintext
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

## Tamanhos de arquivos de diretório

<base-warning>
  <base-warning-title>
    AVISO
  </base-warning-title>
  <base-warning-content>
    Diretórios também têm um tamanho! Portanto, você pode querer verificar se um caminho é um arquivo ou diretório usando os métodos discutidos na seção anterior.
  </base-warning-content>
</base-warning>

```python
import os
total_size = 0

# Calcula o tamanho total de todos os arquivos no diretório
for filename in os.listdir('/usr/bin'):
    # Junta o caminho do diretório com o nome do arquivo e obtém o tamanho
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

Saída:

```plaintext
1117846456
```

## Excluindo arquivos e pastas

- Chamar `os.unlink(path)` excluirá o arquivo no caminho.

- Chamar `os.rmdir(path)` excluirá a pasta no caminho. Esta pasta deve estar vazia de quaisquer arquivos ou pastas.

## Percorrendo uma Árvore de Diretórios

```python
import os

# Percorre a árvore de diretórios recursivamente
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'A pasta atual é {folder_name}')
    # Itera sobre subdiretórios
    for subfolder in subfolders:
        print(f'SUBPASTA DE {folder_name}: {subfolder}')
    # Itera sobre nomes de arquivos
    for filename in filenames:
        print(f'ARQUIVO DENTRO DE {folder_name}: filename{filename}')
    print('')
```

Saída:

```plaintext
A pasta atual é /tmp/delicious
SUBPASTA DE /tmp/delicious: cats
SUBPASTA DE /tmp/delicious: walnut
ARQUIVO DENTRO DE /tmp/delicious: spam.txt

A pasta atual é /tmp/delicious/cats
ARQUIVO DENTRO DE /tmp/delicious/cats: catnames.txt
ARQUIVO DENTRO DE /tmp/delicious/cats: zophie.jpg

A pasta atual é /tmp/delicious/walnut
SUBPASTA DE /tmp/delicious/walnut: waffles

A pasta atual é /tmp/delicious/walnut/waffles
ARQUIVO DENTRO DE /tmp/delicious/walnut/waffles: butter.txt
```

## Links relevantes

- <router-link to="/cheatsheet/file-directory-path">Folha de Cola: Caminho de Arquivo e Diretório</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Folha de Cola: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Essenciais do Pathlib</router-link>
- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
