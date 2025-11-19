---
title: '파이썬 정규 표현식 - 파이썬 치트 시트'
description: '정규 표현식 (regex) 은 텍스트 내 검색 패턴을 지정하는 문자열 시퀀스로, 문자열 검색 알고리즘에 사용됩니다.'
labUrl: 'https://labex.io/ko/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
정규 표현식
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">정규 표현식</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    정규 표현식 (regex 로 약칭) 은 텍스트에서 검색 패턴을 지정하는 문자 시퀀스입니다. [...] 문자열에서 "찾기" 또는 "찾아 바꾸기" 작업이나 입력 유효성 검사를 위해 문자열 검색 알고리즘에서 사용됩니다.
  </base-disclaimer-content>
</base-disclaimer>

1. `import re`를 사용하여 regex 모듈을 가져옵니다.
2. `re.compile()` 함수로 Regex 객체를 생성합니다. (Raw string 을 사용해야 함을 기억하세요.)
3. 검색하려는 문자열을 Regex 객체의 `search()` 메서드에 전달합니다. 이는 `Match` 객체를 반환합니다.
4. Match 객체의 `group()` 메서드를 호출하여 실제 일치하는 텍스트의 문자열을 반환합니다.

Python 의 모든 regex 함수는 re 모듈에 있습니다:

```python
# 정규 표현식 작업을 위한 re 모듈 가져오기
import re
```

## Regex 기호

| 기호                         | 일치하는 항목                                |
| :--------------------------- | :------------------------------------------- |
| `?`                          | 앞선 그룹의 0 개 또는 1 개.                  |
| `*`                          | 앞선 그룹의 0 개 이상.                       |
| `+`                          | 앞선 그룹의 1 개 이상.                       |
| `{n}`                        | 앞선 그룹의 정확히 n 개.                     |
| `{n,}`                       | 앞선 그룹의 n 개 이상.                       |
| `{,m}`                       | 앞선 그룹의 0 개에서 m 개.                   |
| `{n,m}`                      | 앞선 그룹의 최소 n 개에서 최대 m 개.         |
| `{n,m}?` 또는 `*?` 또는 `+?` | 앞선 패턴의 비탐욕적 (non-greedy) 일치 수행. |
| `^spam`                      | 문자열이 spam 으로 시작해야 함을 의미합니다. |
| `spam$`                      | 문자열이 spam 으로 끝나야 함을 의미합니다.   |
| `.`                          | 줄 바꿈 문자를 제외한 모든 문자.             |
| `\d`, `\w`, 및 `\s`          | 각각 숫자, 단어 또는 공백 문자.              |
| `\D`, `\W`, 및 `\S`          | 각각 숫자, 단어 또는 공백이 아닌 모든 것.    |
| `[abc]`                      | 대괄호 사이의 모든 문자 (예: a, b, ).        |
| `[^abc]`                     | 대괄호 사이에 없는 모든 문자.                |

## 일치하는 regex 객체

```python
# re.compile(): 정규 표현식 패턴 객체 생성 (이스케이프를 피하기 위해 raw string r'' 사용)
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # 패턴: 숫자 3 개 - 숫자 3 개 - 숫자 4 개

mo = phone_num_regex.search('My number is 415-555-4242.')  # 패턴 검색

print(f'Phone number found: {mo.group()}')  # group() 은 일치하는 텍스트를 반환
```

```output
Phone number found: 415-555-4242
```

## 괄호를 사용한 그룹화

```python
# 괄호는 그룹을 생성합니다: group(1) 은 첫 번째 그룹을 반환하고, group(2) 는 두 번째 그룹을 반환합니다
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # 괄호 안에 두 개의 그룹
mo = phone_num_regex.search('My number is 415-555-4242.')

mo.group(1)  # 첫 번째 그룹 반환: '415'
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

한 번에 모든 그룹을 검색하려면 `groups()` 메서드를 사용합니다:

```python
# groups(): 모든 그룹의 튜플을 반환
mo.groups()  # ('415', '555-4242') 반환
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

## 파이프를 사용한 여러 그룹

`|` 문자를 사용하여 여러 표현식 중 하나와 일치시키고 싶은 곳 어디에나 사용할 수 있습니다.

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

파이프를 사용하여 정규 표현식의 일부로 여러 패턴 중 하나와 일치시킬 수도 있습니다:

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

## 물음표를 사용한 선택적 일치

`?` 문자는 앞에 오는 그룹을 패턴의 선택적 부분으로 표시합니다.

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

## 별표를 사용한 0 개 이상 일치

`*` (별표 또는 애스터리스크) 는 "0 개 이상 일치"를 의미합니다. 별표 앞에 오는 그룹은 텍스트에서 몇 번이든 나타날 수 있습니다.

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

## 더하기를 사용한 1 개 이상 일치

`+` (또는 더하기) 는 *1 개 이상 일치*를 의미합니다. 더하기 앞에 오는 그룹은 최소한 한 번 이상 나타나야 합니다:

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

## 중괄호를 사용한 특정 반복 일치

정규식에서 그룹을 특정 횟수만큼 반복하고 싶다면, 정규식에서 해당 그룹 뒤에 중괄호 안에 숫자를 붙입니다.

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

숫자 하나 대신, 중괄호 사이에 최소값과 최대값을 지정하여 범위를 지정할 수 있습니다. 예를 들어, 정규식 (Ha){3,5}는 'HaHaHa', 'HaHaHaHa', 'HaHaHaHaHa'와 일치합니다.

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

```output
'HaHaHa'
```

## 탐욕적 (Greedy) 및 비탐욕적 (Non-greedy) 일치

Python 의 정규 표현식은 기본적으로 탐욕적입니다. 모호한 상황에서 가능한 가장 긴 문자열과 일치하려고 합니다. 중괄호의 비탐욕적 버전 (가능한 가장 짧은 문자열과 일치) 은 닫는 중괄호 뒤에 물음표가 붙습니다.

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

## findall() 메서드

`findall()` 메서드는 검색된 문자열에서 일치하는 모든 항목의 문자열 목록을 반환합니다.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # 그룹 없음

phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
```

```output
['415-555-9999', '212-555-0000']
```

## 사용자 정의 문자 클래스 만들기

대괄호를 사용하여 사용자 정의 문자 클래스를 정의할 수 있습니다. 예를 들어, 문자 클래스 *[aeiouAEIOU]*는 모든 모음 (소문자 및 대문자) 과 일치합니다.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
```

```output
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

하이픈 (-) 을 사용하여 문자 또는 숫자의 범위를 포함할 수도 있습니다. 예를 들어, 문자 클래스 *[a-zA-Z0-9]*는 모든 소문자, 대문자 및 숫자와 일치합니다.

문자 클래스의 여는 대괄호 바로 뒤에 캐럿 문자 (`^`) 를 배치하면, 문자 클래스에 포함되지 않은 모든 문자와 일치하는 음수 문자 클래스를 만들 수 있습니다:

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
```

```output
['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', ' ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

## 캐럿 및 달러 기호 문자

- 정규식 시작 부분에 캐럿 기호 `^`를 사용하여 검색 텍스트의 시작 부분에서 일치가 발생해야 함을 나타낼 수 있습니다.

- 마찬가지로, 정규식 끝에 달러 기호 `$`를 두어 문자열이 이 정규식 패턴으로 끝나야 함을 나타낼 수 있습니다.

- 그리고 `^`와 `$`를 함께 사용하여 전체 문자열이 정규식과 일치해야 함을 나타낼 수 있습니다.

정규 표현식 문자열 `r'^Hello'`는 'Hello'로 시작하는 문자열과 일치합니다:

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

정규 표현식 문자열 `r'\d\$'`는 0 에서 9 사이의 숫자 문자로 끝나는 문자열과 일치합니다:

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

## 와일드카드 문자

정규 표현식의 `.` (또는 점) 문자는 줄 바꿈을 제외한 모든 문자와 일치합니다:

```python
at_regex = re.compile(r'.at')

at_regex.findall('The cat in the hat sat on the flat mat.')
```

```output
['cat', 'hat', 'sat', 'lat', 'mat']
```

## 점 - 별표를 사용한 모든 것 일치

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

`.*`는 탐욕적 모드를 사용합니다: 가능한 한 많은 텍스트와 일치하려고 항상 시도합니다. 비탐욕적으로 모든 텍스트와 일치시키려면 점, 별표, 물음표 (`.*?`) 를 사용합니다. 물음표는 Python 에게 비탐욕적으로 일치하도록 지시합니다:

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

## 점 문자를 사용한 줄 바꿈 일치

점 - 별표는 줄 바꿈을 제외한 모든 것을 일치시킵니다. `re.compile()`에 두 번째 인수로 `re.DOTALL`을 전달하면 점 문자가 줄 바꿈 문자를 포함한 모든 문자와 일치하도록 만들 수 있습니다:

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

## 대소문자 구분 없는 일치

정규식을 대소문자 구분 없이 만들려면 `re.compile()`에 두 번째 인수로 `re.IGNORECASE` 또는 `re.I`를 전달할 수 있습니다:

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

## sub() 메서드를 사용한 문자열 대체

Regex 객체의 `sub()` 메서드에는 두 가지 인수가 전달됩니다:

1. 첫 번째 인수는 일치하는 항목을 대체할 문자열입니다.
2. 두 번째 인수는 정규 표현식에 대한 문자열입니다.

`sub()` 메서드는 대체가 적용된 문자열을 반환합니다:

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

```output
'CENSORED gave the secret documents to CENSORED.'
```

## 복잡한 Regex 관리

`re.compile()` 함수에 정규 표현식 문자열 내의 공백과 주석을 무시하도록 지시하려면, `re.VERBOSE` 변수를 `re.compile()`에 두 번째 인수로 전달하여 "자세한 모드 (verbose mode)"를 활성화할 수 있습니다.

이제 다음과 같은 읽기 어려운 정규 표현식 대신:

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

주석이 포함된 여러 줄에 걸쳐 정규 표현식을 다음과 같이 작성할 수 있습니다:

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # 지역 번호
    (\s|-|\.)?                    # 구분자
    \d{3}                         # 처음 3 자리 숫자
    (\s|-|\.)                     # 구분자
    \d{4}                         # 마지막 4 자리 숫자
    (\s*(ext|x|ext.)\s*\d{2,5})?  # 확장 번호
    )''', re.VERBOSE)
```

## 관련 링크

- <router-link to="/cheatsheet/manipulating-strings">문자열 조작</router-link>
- <router-link to="/cheatsheet/string-formatting">문자열 포매팅</router-link>
- <router-link to="/blog/python-data-types">Python 데이터 유형 블로그 게시물</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
