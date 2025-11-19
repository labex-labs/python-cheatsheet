---
title: 'Expressões Regulares Python - Guia Rápido Python'
description: 'Uma expressão regular (abreviada como regex) é uma sequência de caracteres que especifica um padrão de busca em texto e é usada por algoritmos de pesquisa de strings.'
labUrl: 'https://labex.io/pt/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Expressões Regulares
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">Expressões Regulares</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Uma expressão regular (abreviada como regex [...]) é uma sequência de caracteres que especifica um padrão de busca em texto. [...] usada por algoritmos de busca de strings para operações de "localizar" ou "localizar e substituir" em strings, ou para validação de entrada.
  </base-disclaimer-content>
</base-disclaimer>

1. Importe o módulo regex com `import re`.
2. Crie um objeto Regex com a função `re.compile()`. (Lembre-se de usar uma string bruta/raw string.)
3. Passe a string que você deseja pesquisar para o método `search()` do objeto Regex. Isso retorna um objeto `Match`.
4. Chame o método `group()` do objeto Match para retornar uma string do texto realmente correspondido.

Todas as funções regex em Python estão no módulo re:

```python
# Importa o módulo re para operações de expressão regular
import re
```

## Símbolos Regex

| Símbolo                  | Corresponde a                                                         |
| ------------------------ | --------------------------------------------------------------------- |
| `?`                      | zero ou um do grupo precedente.                                       |
| `*`                      | zero ou mais do grupo precedente.                                     |
| `+`                      | um ou mais do grupo precedente.                                       |
| `{n}`                    | exatamente n do grupo precedente.                                     |
| `{n,}`                   | n ou mais do grupo precedente.                                        |
| `{,m}`                   | 0 a m do grupo precedente.                                            |
| `{n,m}`                  | pelo menos n e no máximo m do p precedente.                           |
| `{n,m}?` ou `*?` ou `+?` | executa uma correspondência não-gulosa (non-greedy) do p precedente.  |
| `^spam`                  | significa que a string deve começar com spam.                         |
| `spam$`                  | significa que a string deve terminar com spam.                        |
| `.`                      | qualquer caractere, exceto caracteres de nova linha.                  |
| `\d`, `\w`, e `\s`       | um dígito, palavra, ou caractere de espaço, respectivamente.          |
| `\D`, `\W`, e `\S`       | qualquer coisa exceto um dígito, palavra, ou espaço, respectivamente. |
| `[abc]`                  | qualquer caractere entre os colchetes (como a, b, ).                  |
| `[^abc]`                 | qualquer caractere que não esteja entre os colchetes.                 |

## Objetos de correspondência Regex

```python
# re.compile(): cria o objeto de padrão regex (use string bruta r'' para evitar escape)
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # Padrão: 3 dígitos-3 dígitos-4 dígitos

mo = phone_num_regex.search('Meu número é 415-555-4242.')  # Procura pelo padrão

print(f'Número de telefone encontrado: {mo.group()}')  # group() retorna o texto correspondido
```

```output
Número de telefone encontrado: 415-555-4242
```

## Agrupamento com parênteses

```python
# Parênteses criam grupos: group(1) retorna o primeiro grupo, group(2) retorna o segundo
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # Dois grupos entre parênteses
mo = phone_num_regex.search('Meu número é 415-555-4242.')

mo.group(1)  # Retorna o primeiro grupo: '415'
```

```output
'415'
```

```python
mo.group(2)
```

```output
'555-4242'
```

```python
mo.group(0)
```

```output
'415-555-4242'
```

```python
mo.group()
```

```output
'415-555-4242'
```

Para recuperar todos os grupos de uma vez, use o método `groups()`:

```python
# groups(): retorna uma tupla de todos os grupos
mo.groups()  # Retorna ('415', '555-4242')
```

```output
('415', '555-4242')
```

```python
area_code, main_number = mo.groups()

print(area_code)
```

```output
415
```

```python
print(main_number)
```

```output
555-4242
```

## Múltiplos grupos com Pipe

Você pode usar o caractere `|` onde quiser para corresponder a uma de muitas expressões.

```python
hero_regex = re.compile (r'Batman|Tina Fey')

mo1 = hero_regex.search('Batman and Tina Fey.')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = hero_regex.search('Tina Fey and Batman.')
mo2.group()
```

```output
'Tina Fey'
```

Você também pode usar o pipe para corresponder a um de vários padrões como parte do seu regex:

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')

mo.group()
```

```output
'Batmobile'
```

```python
mo.group(1)
```

```output
'mobile'
```

## Correspondência opcional com o Ponto de Interrogação

O caractere `?` sinaliza o grupo que o precede como uma parte opcional do padrão.

```python
bat_regex = re.compile(r'Bat(wo)?man')

mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```output
'Batwoman'
```

## Correspondência de zero ou mais com o Asterisco

O `*` (asterisco) significa "corresponder zero ou mais". O grupo que precede um asterisco pode ocorrer qualquer número de vezes no texto.

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```output
'Batwoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batwowowowoman')
mo3.group()
```

```output
'Batwowowowoman'
```

## Correspondência de um ou mais com o Mais

O `+` (ou mais) significa _corresponder um ou mais_. O grupo que precede um mais deve aparecer pelo menos uma vez:

```python
bat_regex = re.compile(r'Bat(wo)+man')

mo1 = bat_regex.search('The Adventures of Batwoman')
mo1.group()
```

```output
'Batwoman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwowowowoman')
mo2.group()
```

```output
'Batwowowowoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batman')
mo3 is None
```

```output
True
```

## Correspondência de repetições específicas com Chaves

Se você tem um grupo que deseja repetir um número específico de vezes, siga o grupo no seu regex com um número entre chaves:

```python
ha_regex = re.compile(r'(Ha){3}')

mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

```output
'HaHaHa'
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

```output
True
```

Em vez de um número, você pode especificar um intervalo com um mínimo e um máximo entre as chaves. Por exemplo, o regex (Ha){3,5} corresponderá a 'HaHaHa', 'HaHaHaHa' e 'HaHaHaHaHa'.

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

```output
'HaHaHa'
```

## Correspondência gulosa (Greedy) e não-gulosa (Non-greedy)

As expressões regulares do Python são gulosas por padrão: em situações ambíguas, elas corresponderão à string mais longa possível. A versão não-gulosa das chaves, que corresponde à string mais curta possível, tem a chave de fechamento seguida por um ponto de interrogação.

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')

mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

```output
'HaHaHaHaHa'
```

```python
non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

```output
'HaHaHa'
```

## O método findall()

O método `findall()` retornará as strings de cada correspondência na string pesquisada.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # não tem grupos

phone_num_regex.findall('Celular: 415-555-9999 Trabalho: 212-555-0000')
```

```output
['415-555-9999', '212-555-0000']
```

## Criando suas próprias classes de caracteres

Você pode definir sua própria classe de caracteres usando colchetes. Por exemplo, a classe de caracteres _[aeiouAEIOU]_ corresponderá a qualquer vogal, minúscula ou maiúscula.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop come comida de bebê. COMIDA DE BEBÊ.')
```

```output
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

Você também pode incluir intervalos de letras ou números usando um hífen. Por exemplo, a classe de caracteres _[a-zA-Z0-9]_ corresponderá a todas as letras minúsculas, letras maiúsculas e números.

Ao colocar um acento circunflexo (`^`) logo após o colchete de abertura da classe de caracteres, você pode criar uma classe de caracteres negativa que corresponderá a todos os caracteres que não estão na classe de caracteres:

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop come comida de bebê. COMIDA DE BEBÊ.')
```

```output
['R', 'b', 'c', 'p', ' ', 'c', 'm', ' ', 'd', ' ', 'd', ' ', 'b', 'b', '.', ' ', 'C', 'M', 'D', ' ', 'D', 'B', '.', ' ']
```

## Os caracteres Acento Circunflexo e Sinal de Dólar

- Você também pode usar o símbolo de acento circunflexo `^` no início de um regex para indicar que uma correspondência deve ocorrer no início do texto pesquisado.

- Da mesma forma, você pode colocar um sinal de dólar `$` no final do regex para indicar que a string deve terminar com este padrão regex.

- E você pode usar o `^` e o `$` juntos para indicar que a string inteira deve corresponder ao regex.

A string de expressão regular `r'^Hello'` corresponde a strings que começam com 'Hello':

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

```output
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
```

```python
begins_with_hello.search('He said hello.') is None
```

```output
True
```

A string de expressão regular `r'\d\$'` corresponde a strings que terminam com um caractere numérico de 0 a 9:

```python
whole_string_is_num = re.compile(r'^\d+$')

whole_string_is_num.search('1234567890')
```

```output
<_sre.SRE_Match object; span=(0, 10), match='1234567890'>
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

```output
True
```

```python
whole_string_is_num.search('12 34567890') is None
```

```output
True
```

## O caractere Curinga

O caractere `.` (ou ponto) em uma expressão regular corresponderá a qualquer caractere, exceto uma nova linha:

```python
at_regex = re.compile(r'.at')

at_regex.findall('O gato no chapéu sentou no tapete plano.')
```

```output
['cat', 'hat', 'sat', 'lat', 'mat']
```

## Correspondência de tudo com Ponto-Asterisco

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

mo = name_regex.search('First Name: Al Last Name: Sweigart')
mo.group(1)
```

```output
'Al'
```

```python
mo.group(2)
```

```output
'Sweigart'
```

O `.*` usa modo guloso: Ele sempre tentará corresponder ao máximo de texto possível. Para corresponder a qualquer texto de forma não-gulosa, use o ponto, asterisco e ponto de interrogação (`.*?`). O ponto de interrogação diz ao Python para corresponder de forma não-gulosa:

```python
non_greedy_regex = re.compile(r'<.*?>')
mo = non_greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```output
'<To serve man>'
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```output
'<To serve man> for dinner.>'
```

## Correspondência de novas linhas com o caractere Ponto

O ponto-asterisco corresponderá a tudo, exceto uma nova linha. Ao passar `re.DOTALL` como o segundo argumento para `re.compile()`, você pode fazer com que o caractere ponto corresponda a todos os caracteres, incluindo o caractere de nova linha:

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```output
'Serve the public trust.'
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```output
'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

## Correspondência sem distinção entre maiúsculas e minúsculas

Para tornar seu regex insensível a maiúsculas e minúsculas, você pode passar `re.IGNORECASE` ou `re.I` como segundo argumento para `re.compile()`:

```python
robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop is part man, part machine, all cop.').group()
```

```output
'Robocop'
```

```python
robocop.search('ROBOCOP protects the innocent.').group()
```

```output
'ROBOCOP'
```

```python
robocop.search('Al, why does your programming book talk about robocop so much?').group()
```

```output
'robocop'
```

## Substituindo strings com o método sub()

O método `sub()` para objetos Regex recebe dois argumentos:

1. O primeiro argumento é uma string para substituir quaisquer correspondências.
1. O segundo é a string para a expressão regular.

O método `sub()` retorna uma string com as substituições aplicadas:

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

```output
'CENSORED gave the secret documents to CENSORED.'
```

## Gerenciando Regexes complexos

Para instruir a função `re.compile()` a ignorar espaços em branco e comentários dentro da string de expressão regular, o "modo verboso" pode ser ativado passando a variável `re.VERBOSE` como o segundo argumento para `re.compile()`.

Agora, em vez de uma expressão regular difícil de ler como esta:

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

você pode espalhar a expressão regular por várias linhas com comentários como este:

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # código de área
    (\s|-|\.)?                    # separador
    \d{3}                         # primeiros 3 dígitos
    (\s|-|\.)                     # separador
    \d{4}                         # últimos 4 dígitos
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extensão
    )''', re.VERBOSE)
```

## Links relevantes

- <router-link to="/cheatsheet/manipulating-strings">Manipulando Strings</router-link>
- <router-link to="/cheatsheet/string-formatting">Formatação de Strings</router-link>
- <router-link to="/blog/python-data-types">Postagem do Blog Tipos de Dados Python</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
