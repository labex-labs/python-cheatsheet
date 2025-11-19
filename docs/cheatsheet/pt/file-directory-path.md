---
title: 'Caminhos de Arquivos e Diretórios - Guia Rápido Python'
description: 'Existem dois módulos principais em Python que lidam com a manipulação de caminhos: o módulo os.path e o módulo pathlib.'
labUrl: 'https://labex.io/pt/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Manipulação de Caminhos de Arquivos e Diretórios
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Para um mergulho profundo em operações práticas do sistema de arquivos, confira nossa postagem no blog: <router-link to="/blog/python-pathlib-essentials">10 Operações Essenciais do Sistema de Arquivos que Todo Desenvolvedor Deve Conhecer</router-link>.

Existem dois módulos principais em Python que lidam com a manipulação de caminhos.
Um é o módulo <router-link to="/modules/os-module">os.path</router-link> e o outro é o módulo <router-link to="/modules/pathlib-module">pathlib</router-link>.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Módulo OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> fornece muito mais funcionalidade do que as listadas acima, como obter o nome do arquivo, obter a extensão do arquivo, ler/escrever um arquivo sem abri-lo manualmente, etc. Consulte a <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentação oficial</a> se você pretende saber mais.
  </base-disclaimer-content>
</base-disclaimer>

## Caminhos Linux e Windows

No Windows, os caminhos são escritos usando barras invertidas (`\`) como separador entre
nomes de pastas. Em sistemas operacionais baseados em Unix, como macOS, Linux e BSDs,
a barra normal (`/`) é usada como separador de caminho. Juntar caminhos pode ser
um aborrecimento se o seu código precisar funcionar em diferentes plataformas.

Felizmente, o módulo `pathlib` do Python oferece uma maneira fácil de lidar com isso.

Usando `pathlib` em \*nix:

```python
# pathlib.Path: manipulação de caminho multiplataforma
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # Junta componentes do caminho
```

```output
usr/bin/spam
```

`pathlib` também fornece um atalho para `joinpath` usando o operador `/`:

```python
# Operador Path (/): maneira conveniente de juntar caminhos (multiplataforma)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # Usa o operador / em vez de joinpath()
```

```output
usr/bin/spam
```

Note que o separador de caminho é diferente entre Windows e sistemas operacionais baseados em Unix, é por isso que você deseja usar `pathlib` em vez de
adicionar strings para juntar caminhos.

Juntar caminhos é útil se você precisar criar caminhos de arquivo diferentes sob o mesmo diretório.

Usando `pathlib` em \*nix:

```python
# Path.home(): obtém o diretório inicial do usuário, combina com nomes de arquivos
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # Obtém o caminho do diretório inicial
for filename in my_files:
    print(home / filename)  # Combina o caminho inicial com cada nome de arquivo
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## O diretório de trabalho atual

Você pode obter o diretório de trabalho atual usando `pathlib`:

```python
# Path.cwd(): obtém o diretório de trabalho atual
from pathlib import Path

print(Path.cwd())  # Retorna o diretório de trabalho atual como um objeto Path
```

```output
/home/labex/project
```

## Criação de novas pastas

Usando `pathlib` em \*nix:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

Oh não, recebemos um erro desagradável! O motivo é que o diretório 'delicious' não
existe, então não podemos criar os diretórios 'walnut' e 'waffles' sob ele. Para corrigir isso, faça:

```python
# mkdir(parents=True): cria o diretório e todos os diretórios pais, se necessário
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # Cria diretórios aninhados
```

E tudo fica bem :)

## Caminhos Absolutos vs. Relativos

Existem duas maneiras de especificar um caminho de arquivo.

- Um **caminho absoluto**, que sempre começa com a pasta raiz
- Um **caminho relativo**, que é relativo ao diretório de trabalho atual do programa

Existem também as pastas ponto (`.`) e ponto-ponto (`..`). Estes não são pastas reais, mas nomes especiais que podem ser usados em um caminho. Um único ponto (“ponto”) para um nome de pasta é um atalho para “este diretório”. Dois pontos (“ponto-ponto”) significam “a pasta pai”.

### Manipulação de caminhos absolutos

Para ver se um caminho é um caminho absoluto usando `pathlib`:

```python
from pathlib import Path
Path('/').is_absolute()
```

```output
True
```

```python
Path('..').is_absolute()
```

```output
False
```

Você pode extrair um caminho absoluto com `pathlib`:

```python
from pathlib import Path
print(Path.cwd())
```

```output
/home/labex/project
```

```python
print(Path('..').resolve())
```

```output
/home
```

### Manipulação de caminhos relativos

Você pode obter um caminho relativo de um caminho inicial para outro caminho usando `pathlib`:

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## Validade do Caminho e do Arquivo

### Verificando se um arquivo/diretório existe

Usando `pathlib` em \*nix:

```python
from pathlib import Path

Path('.').exists()
```

```output
True
```

```python
Path('setup.py').exists()
```

```output
True
```

```python
Path('/etc').exists()
```

```output
True
```

```python
Path('nonexistentfile').exists()
```

```output
False
```

### Verificando se um caminho é um arquivo

Usando `pathlib` em \*nix:

```python
from pathlib import Path

Path('setup.py').is_file()
```

```output
True
```

```python
Path('/home').is_file()
```

```output
False
```

```python
Path('nonexistentfile').is_file()
```

```output
False
```

### Verificando se um caminho é um diretório

Usando `pathlib` em \*nix:

```python
from pathlib import Path

Path('/').is_dir()
```

```output
True
```

```python
Path('setup.py').is_dir()
```

```output
False
```

```python
Path('/spam').is_dir()
```

```output
False
```

## Obtendo o tamanho de um arquivo em bytes

Usando `pathlib` em \*nix:

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat contém algumas outras informações sobre o arquivo também
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # tamanho em bytes
```

```output
10024
```

## Listando diretórios

Listando o conteúdo do diretório usando `pathlib` em \*nix:

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

```output
...
/usr/bin/tiff2rgba
/usr/bin/iconv
/usr/bin/ldd
/usr/bin/cache_restore
/usr/bin/udiskie
/usr/bin/unix2dos
/usr/bin/t1reencode
/usr/bin/epstopdf
/usr/bin/idle3
...
```

## Tamanhos de arquivos de diretório

<base-warning>
  <base-warning-title>
    AVISO
  </base-warning-title>
  <base-warning-content>
    Os diretórios em si também têm um tamanho! Portanto, você pode querer verificar se um caminho é um arquivo ou diretório usando os métodos nas seções discutidas acima.
  </base-warning-content>
</base-warning>

Usando `pathlib` em \*nix:

```python
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

```output
1903178911
```

## Copiando arquivos e pastas

O módulo `shutil` fornece funções para copiar arquivos, bem como pastas inteiras.

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

```output
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

```output
/tmp/delicious/eggs2.txt
```

Enquanto `shutil.copy()` copiará um único arquivo, `shutil.copytree()` copiará uma pasta inteira e todas as pastas e arquivos contidos nela:

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

```output
/tmp/bacon_backup
```

## Movendo e Renomeando

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs/bacon.txt
```

O caminho de destino também pode especificar um nome de arquivo. No exemplo a seguir, o arquivo de origem é movido e renomeado:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

```output
/tmp/eggs/new_bacon.txt
```

Se não houver pasta eggs, então `move()` renomeará bacon.txt para um arquivo chamado eggs:

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs
```

## Excluindo arquivos e pastas

- Chamar `Path.unlink()` excluirá o arquivo no caminho.
- Chamar `Path.rmdir()` excluirá a pasta no caminho. Esta pasta deve estar vazia de quaisquer arquivos ou pastas.
- Chamar `shutil.rmtree(path)` removerá a pasta no caminho, e todos os arquivos e pastas que ela contém também serão excluídos.

## Percorrendo uma Árvore de Diretórios

O objeto `Path` tem um método `rglob()` para iterar recursivamente sobre arquivos e diretórios.

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

```output
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## Links relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Leitura e Escrita de Arquivos</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operações Essenciais do Sistema de Arquivos que Todo Desenvolvedor Deve Conhecer</router-link>
- <router-link to="/builtin/open">open()</router-link>
