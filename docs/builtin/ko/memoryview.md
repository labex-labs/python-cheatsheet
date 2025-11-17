---
title: 'Python memoryview() 내장 함수 - Python 치트 시트'
description: "주어진 인수로 생성된 '메모리 뷰' 객체를 반환합니다. 자세한 내용은 메모리 뷰를 참조하십시오."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python memoryview() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   주어진 인수로 생성된 "메모리 뷰" 객체를 반환합니다. 자세한 내용은 메모리 뷰를 참조하십시오.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`memoryview()` 함수는 주어진 인수로 메모리 뷰 객체를 생성합니다. 메모리 뷰를 사용하면 복사본을 만들지 않고도 `<router-link to="/builtin/bytes">bytes</router-link>` 또는 `<router-link to="/builtin/bytearray">bytearray</router-link>` 객체와 같은 다른 객체의 메모리에 액세스할 수 있습니다. 이는 메모리 중복을 방지하므로 대용량 데이터에 매우 효율적입니다.

### 예시

`memoryview()`를 사용하는 방법은 다음과 같습니다.

```python
# Create a bytearray
data = bytearray(b'hello world')

# Create a memory view of the data
view = memoryview(data)

# Access the data through the view
print(view[0])  # ASCII for 'h'
print(view[6:11])  # a slice of the memory
print(view[6:11].tobytes())

# You can also modify the underlying data through the view
view[0] = 72  # ASCII for 'H'
print(data)
```

출력:

```plaintext
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## 관련 링크

- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
