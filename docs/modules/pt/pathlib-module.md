---
title: 'Módulo Pathlib do Python - Folha de Dicas Python'
description: 'O módulo pathlib foi adicionado no Python 3.4, oferecendo uma abordagem orientada a objetos para gerenciar caminhos do sistema de arquivos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Pathlib
</base-title>

Para um mergulho profundo em operações práticas do sistema de arquivos, confira nossa postagem no blog: <router-link to="/blog/python-pathlib-essentials">10 Operações Essenciais do Sistema de Arquivos que Todo Desenvolvedor Deve Conhecer</router-link>.

O módulo `pathlib` foi adicionado no Python 3.4, oferecendo uma maneira orientada a objetos para lidar com caminhos do sistema de arquivos.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Módulo OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> fornece muito mais funcionalidade do que as do <code>os</code> e listadas aqui, como obter o nome do arquivo, obter a extensão do arquivo, ler/escrever um arquivo sem abri-lo manualmente, etc. Consulte a <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentação oficial</a> se você pretende saber mais.
    <br>
    Para uma análise mais aprofundada de ambos, consulte a página <router-link to="/cheatsheet/file-directory-path">Caminhos de Arquivos e Diretórios</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Caminhos Linux e Windows

No Windows, os caminhos são escritos usando barras invertidas (`\`) como separador entre nomes de pastas. Em sistemas operacionais baseados em Unix, como macOS, Linux e BSDs, a barra normal (`/`) é usada como separador de caminho. Juntar caminhos pode ser um problema se o seu código precisar funcionar em diferentes plataformas.

Felizmente, o Python nos fornece `pathlib.Path.joinpath` para lidar com isso facilmente.

```python
from pathlib import Path

# Juntar componentes do caminho
print(Path('usr').joinpath('bin').joinpath('spam'))
```

Saída:

```plaintext
usr/bin/spam
```

`pathlib` também fornece um atalho para joinpath usando o operador `/`:

```python
from pathlib import Path

# Usar o operador / para juntar caminhos
print(Path('usr') / 'bin' / 'spam')
```

Saída:

```plaintext
usr/bin/spam
```

Juntar caminhos é útil se você precisar criar caminhos de arquivo diferentes sob o mesmo diretório.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# Obter o diretório home do usuário
home = Path.home()
# Juntar cada nome de arquivo com o diretório home
for filename in my_files:
    print(home / filename)
```

Saída:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## O diretório de trabalho atual

```python
from pathlib import Path
from os import chdir

# Obter diretório de trabalho atual
print(Path.cwd())
```

Saída:

```plaintext
/home/labex/project
```

```python
# Mudar diretório usando o módulo os
chdir('/usr/lib/python3.10')
# Verificar diretório atual
print(Path.cwd())
```

Saída:

```plaintext
/usr/lib/python3.10
```

## Criando novas pastas

```python
from pathlib import Path
cwd = Path.cwd()
# Criar diretório (falhará se os diretórios pais não existirem)
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

Saída:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

A razão deste erro é que o diretório 'delicious' não existe, então não podemos criar os diretórios 'walnut' e 'waffles' sob ele. Para corrigir isso, faça:

```python
from pathlib import Path
cwd = Path.cwd()
# Criar diretório com todos os diretórios pais
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## Caminhos Absolutos vs. Relativos

Existem duas maneiras de especificar um caminho de arquivo.

- Um **caminho absoluto**, que sempre começa com a pasta raiz
- Um **caminho relativo**, que é relativo ao diretório de trabalho atual do programa

Existem também as pastas ponto (`.`) e ponto-ponto (`..`). Estas não são pastas reais, mas nomes especiais que podem ser usados em um caminho. Um único ponto (“ponto”) para um nome de pasta é um atalho para “este diretório”. Dois pontos (“ponto-ponto”) significam “a pasta pai”.

### Lidando com caminhos absolutos

Para ver se um caminho é um caminho absoluto:

```python
from pathlib import Path
# Verificar se o caminho é absoluto
Path('/').is_absolute()
```

Saída:

```plaintext
True
```

```python
# Caminhos relativos retornam False
Path('..').is_absolute()
```

Saída:

```plaintext
False
```

Você também pode extrair um caminho absoluto:

```python
from pathlib import Path
# Obter diretório atual
print(Path.cwd())
```

Saída:

```plaintext
/home/labex/project
```

```python
# Resolver caminho relativo para caminho absoluto
print(Path('..').resolve())
```

Saída:

```plaintext
/home
```

### Lidando com caminhos relativos

Você pode obter um caminho relativo de um caminho inicial para outro caminho.

```python
from pathlib import Path
# Obter caminho relativo do caminho base
print(Path('/etc/passwd').relative_to('/'))
```

Saída:

```plaintext
etc/passwd
```

## Validade do Caminho e Arquivo

### Verificando se um arquivo/diretório existe

```python
from pathlib import Path

# Verificar se o caminho existe
Path('.').exists()
```

Saída:

```plaintext
True
```

```python
Path('setup.py').exists()
```

Saída:

```plaintext
True
```

```python
Path('/etc').exists()
```

Saída:

```plaintext
True
```

```python
Path('nonexistentfile').exists()
```

Saída:

```plaintext
False
```

### Verificando se um caminho é um arquivo

```python
from pathlib import Path

# Verificar se o caminho é um arquivo
Path('setup.py').is_file()
```

Saída:

```plaintext
True
```

```python
Path('/home').is_file()
```

Saída:

```plaintext
False
```

```python
Path('nonexistentfile').is_file()
```

Saída:

```plaintext
False
```

### Verificando se um caminho é um diretório

```python
from pathlib import Path

# Verificar se o caminho é um diretório
Path('/').is_dir()
```

Saída:

```plaintext
True
```

```python
Path('setup.py').is_dir()
```

Saída:

```plaintext
False
```

```python
Path('/spam').is_dir()
```

Saída:

```plaintext
False
```

## Obtendo o tamanho de um arquivo em bytes

```python
from pathlib import Path

# Obter estatísticas do arquivo
stat = Path('/bin/python3.10').stat()
print(stat) # stat contém algumas outras informações sobre o arquivo também
```

Saída:

```plaintext
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# Acessar tamanho do arquivo do objeto stat
print(stat.st_size) # tamanho em bytes
```

Saída:

```plaintext
10024
```

## Listando diretórios

```python
from pathlib import Path

# Iterar pelo conteúdo do diretório
for f in Path('/usr/bin').iterdir():
    print(f)
```

Saída:

```plaintext
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
    Os próprios diretórios também têm um tamanho! Portanto, você pode querer verificar se um caminho é um arquivo ou diretório usando os métodos discutidos nas seções anteriores.
  </base-warning-content>
</base-warning>

```python
from pathlib import Path

# Calcular o tamanho total de todos os arquivos no diretório
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

Saída:

```plaintext
1903178911
```

## Excluindo arquivos e pastas

- Chamar `Path.unlink()` excluirá o arquivo no caminho.

- Chamar `Path.rmdir()` excluirá a pasta no caminho. Esta pasta deve estar vazia de quaisquer arquivos ou pastas.

## Links relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Folha de Cola: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/modules/os-module">Módulo: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
