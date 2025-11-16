import { acceptHMRUpdate, defineStore } from 'pinia'

interface NavbarNavigationItem {
  name: string
  path: string
  internal?: boolean
}

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navbarNavigation: [] as NavbarNavigationItem[],
    mainNavigation: [
      {
        name: 'Getting Started',
        path: '/',
      }
    ],
    cheatsheetNavigation: [
      {
        name: 'Basics',
        path: '/cheatsheet/basics',
        updated: false,
      },
      {
        name: 'Built-in Functions',
        path: '/cheatsheet/built-in-functions',
        updated: false,
      },
      {
        name: 'Control Flow',
        path: '/cheatsheet/control-flow',
        updated: false,
      },
      {
        name: 'Functions',
        path: '/cheatsheet/functions',
        updated: false,
      },

      {
        name: 'Lists and Tuples',
        path: '/cheatsheet/lists-and-tuples',
        updated: false,
      },
      {
        name: 'Dictionaries',
        path: '/cheatsheet/dictionaries',
        updated: false,
      },
      {
        name: 'Sets',
        path: '/cheatsheet/sets',
        updated: false,
      },
      {
        name: 'Comprehensions',
        path: '/cheatsheet/comprehensions',
        updated: false,
      },
      {
        name: 'Manipulating Strings',
        path: '/cheatsheet/manipulating-strings',
        updated: false,
      },
      {
        name: 'String Formatting',
        path: '/cheatsheet/string-formatting',
        updated: false,
      },
      {
        name: 'Regular Expressions',
        path: '/cheatsheet/regular-expressions',
        updated: false,
      },
      {
        name: 'Files and Directory Paths',
        path: '/cheatsheet/file-directory-path',
        updated: false,
      },
      {
        name: 'Reading and Writing Files',
        path: '/cheatsheet/reading-and-writing-files',
        updated: false,
      },
      {
        name: 'JSON and YAML',
        path: '/cheatsheet/json-yaml',
        updated: false,
      },
      {
        name: 'Exception Handling',
        path: '/cheatsheet/exception-handling',
        updated: false,
      },
      {
        name: 'Debugging',
        path: '/cheatsheet/debugging',
        updated: false,
      },
      {
        name: 'Args and kwargs',
        path: '/cheatsheet/args-and-kwargs',
        updated: false,
      },
      {
        name: 'Decorators',
        path: '/cheatsheet/decorators',
        updated: false,
      },
      {
        name: 'Context Manager',
        path: '/cheatsheet/context-manager',
        updated: false,
      },
      {
        name: 'OOP',
        path: '/cheatsheet/oop-basics',
        updated: false,
      },
      {
        name: 'Dataclasses',
        path: '/cheatsheet/dataclasses',
        updated: false,
      },
      {
        name: 'setup.py',
        path: '/cheatsheet/setup-py',
        updated: false,
      },
      {
        name: 'Main: Top-Level Script',
        path: '/cheatsheet/main',
        updated: false,
      },
      {
        name: 'Virtual Environments',
        path: '/cheatsheet/virtual-environments',
        updated: false,
      },
    ],
    standardLibraryNavigation: [
      {
        name: 'Copy',
        path: '/modules/copy-module',
        updated: false,
      },
      {
        name: 'CSV',
        path: '/modules/csv-module'
      },
      {
        name: 'Datetime',
        path: '/modules/datetime-module',
      },
      {
        name: 'Itertools',
        path: '/modules/itertools-module',
      },
      {
        name: 'JSON',
        path: '/modules/json-module',
      },
      {
        name: 'OS',
        path: '/modules/os-module',
        updated: false,
      },
      {
        name: 'Pathlib',
        path: '/modules/pathlib-module',
      },
      {
        name: 'Random',
        path: '/modules/random-module',
      },
      {
        name: 'Shelve',
        path: '/modules/shelve-module',
      },
      {
        name: 'Zipfile',
        path: '/modules/zipfile-module',
      },
    ],
    builtinNavigation: [
      {
        name: 'abs',
        path: '/builtin/abs',
        updated: false,
      },
      {
        name: 'aiter',
        path: '/builtin/aiter',
        updated: false,
      },
      {
        name: 'all',
        path: '/builtin/all',
        updated: false,
      },
      {
        name: 'any',
        path: '/builtin/any',
        updated: false,
      },
      {
        name: 'ascii',
        path: '/builtin/ascii',
        updated: false,
      },
      {
        name: 'bin',
        path: '/builtin/bin',
        updated: false,
      },
      {
        name: 'bool',
        path: '/builtin/bool',
        updated: false,
      },
      {
        name: 'breakpoint',
        path: '/builtin/breakpoint',
        updated: false,
      },
      {
        name: 'bytearray',
        path: '/builtin/bytearray',
        updated: false,
      },
      {
        name: 'bytes',
        path: '/builtin/bytes',
        updated: false,
      },
      {
        name: 'callable',
        path: '/builtin/callable',
        updated: false,
      },
      {
        name: 'chr',
        path: '/builtin/chr',
        updated: false,
      },
      {
        name: 'classmethod',
        path: '/builtin/classmethod',
        updated: false,
      },
      {
        name: 'compile',
        path: '/builtin/compile',
        updated: false,
      },
      {
        name: 'complex',
        path: '/builtin/complex',
        updated: false,
      },
      {
        name: 'delattr',
        path: '/builtin/delattr',
        updated: false,
      },
      {
        name: 'dict',
        path: '/builtin/dict',
        updated: false,
      },
      {
        name: 'dir',
        path: '/builtin/dir',
        updated: false,
      },
      {
        name: 'divmod',
        path: '/builtin/divmod',
        updated: false,
      },
      {
        name: 'enumerate',
        path: '/builtin/enumerate',
        updated: false,
      },
      {
        name: 'eval',
        path: '/builtin/eval',
        updated: false,
      },
      {
        name: 'exec',
        path: '/builtin/exec',
        updated: false,
      },
      {
        name: 'filter',
        path: '/builtin/filter',
        updated: false,
      },
      {
        name: 'float',
        path: '/builtin/float',
        updated: false,
      },
      {
        name: 'format',
        path: '/builtin/format',
        updated: false,
      },
      {
        name: 'frozenset',
        path: '/builtin/frozenset',
        updated: false,
      },
      {
        name: 'getattr',
        path: '/builtin/getattr',
        updated: false,
      },
      {
        name: 'globals',
        path: '/builtin/globals',
        updated: false,
      },
      {
        name: 'hasattr',
        path: '/builtin/hasattr',
        updated: false,
      },
      {
        name: 'hash',
        path: '/builtin/hash',
        updated: false,
      },
      {
        name: 'help',
        path: '/builtin/help',
        updated: false,
      },
      {
        name: 'hex',
        path: '/builtin/hex',
        updated: false,
      },
      {
        name: 'id',
        path: '/builtin/id',
        updated: false,
      },
      {
        name: 'import',
        path: '/builtin/import',
        updated: false,
      },
      {
        name: 'input',
        path: '/builtin/input',
        updated: false,
      },
      {
        name: 'int',
        path: '/builtin/int',
        updated: false,
      },
      {
        name: 'isinstance',
        path: '/builtin/isinstance',
        updated: false,
      },
      {
        name: 'issubclass',
        path: '/builtin/issubclass',
        updated: false,
      },
      {
        name: 'iter',
        path: '/builtin/iter',
        updated: false,
      },
      {
        name: 'len',
        path: '/builtin/len',
        updated: false,
      },
      {
        name: 'list',
        path: '/builtin/list',
        updated: false,
      },
      {
        name: 'locals',
        path: '/builtin/locals',
        updated: false,
      },
      {
        name: 'map',
        path: '/builtin/map',
        updated: false,
      },
      {
        name: 'max',
        path: '/builtin/max',
        updated: false,
      },
      {
        name: 'memoryview',
        path: '/builtin/memoryview',
        updated: false,
      },
      {
        name: 'min',
        path: '/builtin/min',
        updated: false,
      },
      {
        name: 'next',
        path: '/builtin/next',
        updated: false,
      },
      {
        name: 'object',
        path: '/builtin/object',
        updated: false,
      },
      {
        name: 'oct',
        path: '/builtin/oct',
        updated: false,
      },
      {
        name: 'open',
        path: '/builtin/open',
        updated: false,
      },
      {
        name: 'ord',
        path: '/builtin/ord',
        updated: false,
      },
      {
        name: 'pow',
        path: '/builtin/pow',
        updated: false,
      },
      {
        name: 'print',
        path: '/builtin/print',
        updated: false,
      },
      {
        name: 'property',
        path: '/builtin/property',
        updated: false,
      },
      {
        name: 'range',
        path: '/builtin/range',
        updated: false,
      },
      {
        name: 'repr',
        path: '/builtin/repr',
        updated: false,
      },
      {
        name: 'reversed',
        path: '/builtin/reversed',
        updated: false,
      },
      {
        name: 'round',
        path: '/builtin/round',
        updated: false,
      },
      {
        name: 'set',
        path: '/builtin/set',
        updated: false,
      },
      {
        name: 'setattr',
        path: '/builtin/setattr',
        updated: false,
      },
      {
        name: 'slice',
        path: '/builtin/slice',
        updated: false,
      },
      {
        name: 'sorted',
        path: '/builtin/sorted',
        updated: false,
      },
      {
        name: 'staticmethod',
        path: '/builtin/staticmethod',
        updated: false,
      },
      {
        name: 'str',
        path: '/builtin/str',
        updated: false,
      },
      {
        name: 'sum',
        path: '/builtin/sum',
        updated: false,
      },
      {
        name: 'super',
        path: '/builtin/super',
        updated: false,
      },
      {
        name: 'tuple',
        path: '/builtin/tuple',
        updated: false,
      },
      {
        name: 'type',
        path: '/builtin/type',
        updated: false,
      },
      {
        name: 'vars',
        path: '/builtin/vars',
        updated: false,
      },
      {
        name: 'zip',
        path: '/builtin/zip',
        updated: false,
      },
    ],
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot))
}
