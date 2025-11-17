---
title: 'Python 내장 함수 - Python 치트 시트'
description: 'Python 인터프리터에는 항상 사용할 수 있는 여러 내장 함수와 유형이 있습니다.'
labUrl: 'https://labex.io/ko/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 내장 함수
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 인터프리터에는 항상 사용할 수 있는 여러 함수와 타입이 내장되어 있습니다.

## Python 내장 함수

| 함수                                                                 | 설명                                                                                     |
| :------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | 숫자의 절댓값을 반환합니다.                                                              |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | 비동기 이터러블에 대한 비동기 이터레이터를 반환합니다.                                   |
| <router-link to='/builtin/all'>all()</router-link>                   | 이터러블의 모든 요소가 참이면 True 를 반환합니다.                                        |
| <router-link to='/builtin/any'>any()</router-link>                   | 이터러블의 요소 중 하나라도 참이면 True 를 반환합니다.                                   |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | 객체의 출력 가능한 표현을 문자열로 반환합니다.                                           |
| <router-link to='/builtin/bin'>bin()</router-link>                   | 정수를 이진 문자열로 변환합니다.                                                         |
| <router-link to='/builtin/bool'>bool()</router-link>                 | 부울 값을 반환합니다.                                                                    |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | 호출 지점에서 디버거로 진입합니다.                                                       |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | 새로운 바이트 배열을 반환합니다.                                                         |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | 새로운 "bytes" 객체를 반환합니다.                                                        |
| <router-link to='/builtin/callable'>callable()</router-link>         | 인수로 전달된 객체가 호출 가능한지 여부를 반환합니다 (호출 가능하면 True, 아니면 False). |
| <router-link to='/builtin/chr'>chr()</router-link>                   | 문자를 나타내는 문자열을 반환합니다.                                                     |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | 메서드를 클래스 메서드로 변환합니다.                                                     |
| <router-link to='/builtin/compile'>compile()</router-link>           | 소스를 코드 또는 AST 객체로 컴파일합니다.                                                |
| <router-link to='/builtin/complex'>complex()</router-link>           | real + imag\*1j 값을 갖는 복소수를 반환합니다.                                           |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | 객체가 허용하는 경우 지정된 속성을 삭제합니다.                                           |
| <router-link to='/builtin/dict'>dict()</router-link>                 | 새 딕셔너리를 생성합니다.                                                                |
| <router-link to='/builtin/dir'>dir()</router-link>                   | 현재 로컬 범위의 이름을 포함하는 목록을 반환합니다.                                      |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | 몫과 나머지를 포함하는 한 쌍의 숫자를 반환합니다.                                        |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | 열거 객체를 반환합니다.                                                                  |
| <router-link to='/builtin/eval'>eval()</router-link>                 | 표현식을 평가하고 실행합니다.                                                            |
| <router-link to='/builtin/exec'>exec()</router-link>                 | 이 함수는 Python 코드를 동적으로 실행하는 것을 지원합니다.                               |
| <router-link to='/builtin/filter'>filter()</router-link>             | 이터러블에서 이터레이터를 구성하고 참인 요소만 반환합니다.                               |
| <router-link to='/builtin/float'>float()</router-link>               | 숫자 또는 문자열에서 부동 소수점 숫자를 반환합니다.                                      |
| <router-link to='/builtin/format'>format()</router-link>             | 값을 "형식화된" 표현으로 변환합니다.                                                     |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | 새로운 frozenset 객체를 반환합니다.                                                      |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | 객체의 지정된 속성 값을 반환합니다.                                                      |
| <router-link to='/builtin/globals'>globals()</router-link>           | 현재 모듈 네임스페이스를 구현하는 딕셔너리를 반환합니다.                                 |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | 객체가 지정된 속성을 가지고 있는지 여부를 반환합니다.                                    |
| <router-link to='/builtin/hash'>hash()</router-link>                 | 객체의 해시 값을 반환합니다.                                                             |
| <router-link to='/builtin/help'>help()</router-link>                 | 내장 도움말 시스템을 호출합니다.                                                         |
| <router-link to='/builtin/hex'>hex()</router-link>                   | 정수를 소문자 16 진수 문자열로 변환합니다.                                               |
| <router-link to='/builtin/id'>id()</router-link>                     | 객체의 "식별자"를 반환합니다.                                                            |
| <router-link to='/builtin/input'>input()</router-link>               | 입력을 받아 문자열로 변환합니다.                                                         |
| <router-link to='/builtin/int'>int()</router-link>                   | 숫자 또는 문자열에서 정수 객체를 구성하여 반환합니다.                                    |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | 인수로 전달된 객체가 객체 인스턴스인지 여부를 반환합니다.                                |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | class 가 classinfo 의 서브클래스인지 여부를 반환합니다.                                  |
| <router-link to='/builtin/iter'>iter()</router-link>                 | 이터레이터 객체를 반환합니다.                                                            |
| <router-link to='/builtin/len'>len()</router-link>                   | 객체의 길이 (항목 수) 를 반환합니다.                                                     |
| <router-link to='/builtin/list'>list()</router-link>                 | 함수가 아니라 가변 시퀀스 타입입니다.                                                    |
| <router-link to='/builtin/locals'>locals()</router-link>             | 현재 로컬 심볼 테이블을 업데이트하고 딕셔너리를 반환합니다.                              |
| <router-link to='/builtin/map'>map()</router-link>                   | 이터러블의 모든 항목에 함수를 적용하는 이터레이터를 반환합니다.                          |
| <router-link to='/builtin/max'>max()</router-link>                   | 이터러블에서 가장 큰 항목을 반환합니다.                                                  |
| <router-link to='/builtin/min'>min()</router-link>                   | 이터러블에서 가장 작은 항목을 반환합니다.                                                |
| <router-link to='/builtin/next'>next()</router-link>                 | 이터레이터에서 다음 항목을 검색합니다.                                                   |
| <router-link to='/builtin/object'>object()</router-link>             | 새로운 특징 없는 객체를 반환합니다.                                                      |
| <router-link to='/builtin/oct'>oct()</router-link>                   | 정수를 8 진수 문자열로 변환합니다.                                                       |
| <router-link to='/builtin/open'>open()</router-link>                 | 파일을 열고 해당 파일 객체를 반환합니다.                                                 |
| <router-link to='/builtin/ord'>ord()</router-link>                   | 문자에 해당하는 유니코드 코드 포인트를 나타내는 정수를 반환합니다.                       |
| <router-link to='/builtin/pow'>pow()</router-link>                   | base 를 exp 거듭제곱한 값을 반환합니다.                                                  |
| <router-link to='/builtin/print'>print()</router-link>               | 텍스트 스트림 파일에 객체를 출력합니다.                                                  |
| <router-link to='/builtin/property'>property()</router-link>         | 속성 속성을 반환합니다.                                                                  |
| <router-link to='/builtin/repr'>repr()</router-link>                 | 객체의 출력 가능한 표현을 포함하는 문자열을 반환합니다.                                  |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | 역방향 이터레이터를 반환합니다.                                                          |
| <router-link to='/builtin/round'>round()</router-link>               | 소수점 이하 ndigits 자릿수로 반올림된 숫자를 반환합니다.                                 |
| <router-link to='/builtin/set'>set()</router-link>                   | 새로운 set 객체를 반환합니다.                                                            |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | 이것은 getattr() 의 대응 함수입니다.                                                     |
| <router-link to='/builtin/slice'>slice()</router-link>               | 인덱스 집합을 나타내는 슬라이스 객체를 반환합니다.                                       |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | 이터러블의 항목들로 새로운 정렬된 리스트를 반환합니다.                                   |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | 메서드를 정적 메서드로 변환합니다.                                                       |
| <router-link to='/builtin/str'>str()</router-link>                   | 객체의 str 버전을 반환합니다.                                                            |
| <router-link to='/builtin/sum'>sum()</router-link>                   | start 와 이터러블의 항목들을 합산합니다.                                                 |
| <router-link to='/builtin/super'>super()</router-link>               | 부모 또는 형제 클래스에 대한 메서드 호출을 위임하는 프록시 객체를 반환합니다.            |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | 함수가 아니라 불변 시퀀스 타입입니다.                                                    |
| <router-link to='/builtin/type'>type()</router-link>                 | 객체의 타입을 반환합니다.                                                                |
| <router-link to='/builtin/vars'>vars()</router-link>                 | dict 속성을 가진 다른 객체에 대해 해당 dict 속성을 반환합니다.                           |
| <router-link to='/builtin/zip'>zip()</router-link>                   | 여러 이터러블을 병렬로 반복합니다.                                                       |
| <router-link to='/builtin/import'>**import**()</router-link>         | 이 함수는 import 문에 의해 호출됩니다.                                                   |
