# angular-compiler-bundled

## Introduction

This package bundles the `@angular/compiler` package and its dependencies into a single CommonJS (cjs) format file using esbuild, so you can import it via `require` in environments that do not support ES modules, such as compiled [Angular Schematics](https://angular.io/guide/schematics).

## Installation

You can install `angular-compiler-bundled` via npm:

```bash
npm install angular-compiler-bundled
```

## Usage

After installation, you can import the bundled Angular compiler module in your code:

```typescript
import { parseTemplate } from "angular-compiler-bundled";

const ast = parseTemplate(template.content, template.filePath, {
  preserveWhitespaces: true,
  preserveLineEndings: true,
  leadingTriviaChars: [],
});
```

This package also includes some utility functions from the `angular/components` repo that are not exported by the original `@angular/compiler` package:

```typescript
import {
  visitElements,
  replaceStartTag,
  replaceEndTag,
  updateAttribute
} from 'angular-compiler-bundled';
```

## Disclaimer

This package is not officially maintained by the Angular team. I'm assuming they don't provide CommonJS support in the `@angular/compiler` package because that api is not considered public and is subject to change without notice.

I would love to move away from this package as soon as the Angular team provides better utilities for schematics development.
