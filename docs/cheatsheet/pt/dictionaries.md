---
title: 'Dicionários Python - Guia Rápido Python'
description: 'Em Python, um dicionário é uma coleção ordenada por inserção (a partir do Python > 3.7) de pares chave-valor.'
labUrl: 'https://labex.io/pt/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Dicionários Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Em Python, um dicionário é uma coleção _ordenada_ (a partir do Python > 3.7) de pares `chave`: `valor`.

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">documentação</a> do Python 3
  </base-disclaimer-title>
  <base-disclaimer-content>
    As principais operações em um dicionário são armazenar um valor com alguma chave e extrair o valor dada a chave. Também é possível excluir um par chave:valor com <code>del</code>.
  </base-disclaimer-content>
</base-disclaimer>

Exemplo de Dicionário:

```python
# Dicionário: coleção de pares chave-valor
meu_gato = {
    'tamanho': 'gordo',          # chave: 'tamanho', valor: 'gordo'
    'cor': 'cinza',         # chave: 'cor', valor: 'cinza'
    'disposicao': 'barulhento'    # chave: 'disposicao', valor: 'barulhento'
}
```

## Definir chave, valor usando o operador de subscrito `[]`

```python
# Adicionar ou atualizar entrada de dicionário usando o operador de subscrito
meu_gato = {
 'tamanho': 'gordo',
 'cor': 'cinza',
 'disposicao': 'barulhento',
}
meu_gato['idade_anos'] = 2  # Adicionar novo par chave-valor
print(meu_gato)
```

Saída:

```plaintext
{'tamanho': 'gordo', 'cor': 'cinza', 'disposicao': 'barulhento', 'idade_anos': 2}
```

## Obter valor usando o operador de subscrito `[]`

Caso a chave não esteja presente no dicionário, um <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a> é levantado.

```python
meu_gato = {
 'tamanho': 'gordo',
 'cor': 'cinza',
 'disposicao': 'barulhento',
}
print(meu_gato['tamanho'])
```

Saída:

```plaintext
gordo
```

```python
print(meu_gato['cor_olho'])
```

Saída:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'cor_olho'
```

## values()

O método `values()` obtém os **valores** do dicionário:

```python
# Iterar sobre os valores do dicionário usando o método .values()
animal_estimacao = {'cor': 'vermelho', 'idade': 42}
for valor in animal_estimacao.values():  # Percorrer todos os valores
    print(valor)
```

Saída:

```plaintext
vermelho
42
```

## keys()

O método `keys()` obtém as **chaves** do dicionário:

```python
# Iterar sobre as chaves do dicionário usando o método .keys()
animal_estimacao = {'cor': 'vermelho', 'idade': 42}
for chave in animal_estimacao.keys():  # Percorrer todas as chaves
    print(chave)
```

Saída:

```plaintext
cor
idade
```

Não há necessidade de usar **.keys()** pois, por padrão, você percorrerá as chaves:

```python
# Iterar diretamente sobre o dicionário percorre as chaves (comportamento padrão)
animal_estimacao = {'cor': 'vermelho', 'idade': 42}
for chave in animal_estimacao:  # Equivalente a for chave in animal_estimacao.keys()
    print(chave)
```

Saída:

```plaintext
cor
idade
```

## items()

O método `items()` obtém os **itens** de um dicionário e os retorna como uma <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>Tupla</router-link>:

```python
animal_estimacao = {'cor': 'vermelho', 'idade': 42}
for item in animal_estimacao.items():
    print(item)
```

Saída:

```plaintext
('cor', 'vermelho')
('idade', 42)
```

Usando os métodos `keys()`, `values()` e `items()`, um loop `for` pode iterar sobre as chaves, valores ou pares chave-valor em um dicionário, respectivamente.

```python
# Iterar sobre pares chave-valor usando o método .items()
animal_estimacao = {'cor': 'vermelho', 'idade': 42}
for chave, valor in animal_estimacao.items():  # Desempacotar tupla em chave e valor
    print(f'Chave: {chave} Valor: {valor}')
```

Saída:

```plaintext
Chave: cor Valor: vermelho
Chave: idade Valor: 42
```

## get()

O método `get()` retorna o valor de um item com a chave fornecida. Se a chave não existir, ele retorna `None`:

```python
# Método .get(): recupera o valor com segurança, retorna None se a chave não existir
esposa = {'nome': 'Rose', 'idade': 33}

f'O nome da minha esposa é {esposa.get("nome")}'  # Retorna 'Rose'
```

Saída:

```plaintext
'O nome da minha esposa é Rose'
```

```python
f'Ela tem {esposa.get("idade")} anos.'
```

Saída:

```plaintext
'Ela tem 33 anos.'
```

```python
f'Ela é profundamente apaixonada por {esposa.get("marido")}'
```

Saída:

```plaintext
'Ela é profundamente apaixonada por None'
```

Você também pode alterar o valor padrão `None` para um de sua escolha:

```python
esposa = {'nome': 'Rose', 'idade': 33}

f'Ela é profundamente apaixonada por {esposa.get("marido", "amante")}'
```

Saída:

```plaintext
'Ela é profundamente apaixonada por amante'
```

## Adicionar itens com setdefault()

É possível adicionar um item a um dicionário desta forma:

```python
esposa = {'nome': 'Rose', 'idade': 33}
if 'tem_cabelo' not in esposa:
    esposa['tem_cabelo'] = True
```

Usando o método `setdefault`, podemos tornar o mesmo código mais curto:

```python
esposa = {'nome': 'Rose', 'idade': 33}
esposa.setdefault('tem_cabelo', True)
esposa
```

Saída:

```plaintext
{'nome': 'Rose', 'idade': 33, 'tem_cabelo': True}
```

## Removendo Itens

### pop()

O método `pop()` remove e retorna um item com base em uma chave fornecida.

```python
esposa = {'nome': 'Rose', 'idade': 33, 'cabelo': 'castanho'}
esposa.pop('idade')
```

Saída:

```plaintext
33
```

```python
esposa
```

Saída:

```plaintext
{'nome': 'Rose', 'cabelo': 'castanho'}
```

### popitem()

O método `popitem()` remove o último item em um dicionário e o retorna.

```python
esposa = {'nome': 'Rose', 'idade': 33, 'cabelo': 'castanho'}
esposa.popitem()
```

Saída:

```plaintext
('cabelo', 'castanho')
```

```python
esposa
```

Saída:

```plaintext
{'nome': 'Rose', 'idade': 33}
```

### del()

O método `del()` remove um item com base em uma chave fornecida.

```python
esposa = {'nome': 'Rose', 'idade': 33, 'cabelo': 'castanho'}
del esposa['idade']
esposa
```

Saída:

```plaintext
{'nome': 'Rose', 'cabelo': 'castanho'}
```

### clear()

O método `clear()` remove todos os itens em um dicionário.

```python
esposa = {'nome': 'Rose', 'idade': 33, 'cabelo': 'castanho'}
esposa.clear()
esposa
```

Saída:

```plaintext
{}
```

## Verificando chaves em um Dicionário

```python
pessoa = {'nome': 'Rose', 'idade': 33}

'nome' in pessoa.keys()
```

Saída:

```plaintext
True
```

```python
'altura' in pessoa.keys()
```

Saída:

```plaintext
False
```

```python
'pele' in pessoa # Você pode omitir keys()
```

Saída:

```plaintext
False
```

## Verificando valores em um Dicionário

```python
pessoa = {'nome': 'Rose', 'idade': 33}

'Rose' in pessoa.values()
```

Saída:

```plaintext
True
```

```python
33 in pessoa.values()
```

Saída:

```plaintext
True
```

## Impressão Formatada (Pretty Printing)

```python
import pprint

esposa = {'nome': 'Rose', 'idade': 33, 'tem_cabelo': True, 'cor_cabelo': 'castanho', 'altura': 1.6, 'cor_olho': 'castanho'}
pprint.pprint(esposa)
```

Saída:

```plaintext
{'altura': 1.6,
 'cor_cabelo': 'castanho',
 'cor_olho': 'castanho',
 'idade': 33,
 'nome': 'Rose',
 'tem_cabelo': True}
```

## Mesclar dois dicionários

Para Python 3.5+:

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_a, **dict_b}
dict_c
```

Saída:

```plaintext
{'a': 1, 'b': 3, 'c': 4}
```

## Links relevantes

- <router-link to="/blog/python-data-types">Post de Blog Tipos de Dados Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args e \*\*kwargs Facilitados</router-link>
- <router-link to="/cheatsheet/comprehensions">Comprehensions</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args e Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Comprehensions Python Passo a Passo</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
