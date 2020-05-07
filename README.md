# react-style-codes

![](https://img.shields.io/github/workflow/status/divykj/react-style-codes/Release%20Package?label=build) ![](https://img.shields.io/github/workflow/status/divykj/react-style-codes/Integration%20Test?label=tests) ![](https://img.shields.io/codacy/grade/4dc38bb6a59042be96dc2a71e7cdc0e3) ![](https://img.shields.io/codacy/coverage/4dc38bb6a59042be96dc2a71e7cdc0e3)

![](https://img.shields.io/npm/v/@divykj/react-style-codes) ![](https://img.shields.io/npm/dt/@divykj/react-style-codes) ![](https://img.shields.io/bundlephobia/min/@divykj/react-style-codes) ![](https://img.shields.io/github/languages/top/divykj/react-style-codes)

> Easier react styling using codes.

## Installation

```sh
npm i @divykj/react-style-codes
```

## Usage

React Native:

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { makeStyles } from 'react-style-codes';

const containerStyle = makeStyles(['m-s', 'p-b-6', 'f-g-1']); // {margin: 4(small), paddingBottom: 6, flexGrow: 1}

const App = (props) => (
  <View style={containerStyle}>
    <Text>Hi</Text>
  </View>
);
```

## Documentation

### Functions

- **makeStyle(code)**:
  Takes a code and generates styles.

- **makeStyles(codes)**:
  Takes an array of codes and generates styles.

### Codes

- Padding

  `'p-<location?>-<size>'`

  - **location(optional):** 'a'(default) | 't' | 'r' | 'b' | 'l' | 'h' | 'v'
  - **size:** 'n' | 'xs' | 's' | 'm'(default) | 'l' | 'xl' | number

- Margin

  `'m-<location?>-<size>'`

  - **location(optional):** 'a'(default) | 't' | 'r' | 'b' | 'l' | 'h' | 'v'
  - **size:** 'n' | 'xs' | 's' | 'm'(default) | 'l' | 'xl' | number

- Flex

  `'f-<number?>'`: flex value

  `'f-g-<number?>'`: flexGrow value

  `'f-s-<number?>'`: flexShrink value

  `'f-d-<direction?>'`: flexDirection value

  - **direction(optional):** 'c'(default) | 'r'

- Grid

  Container: `'g'`

  Row: `'g-row-<position?>-<gap?>'`

  Col: `'g-col-<position?>-<gap?>'`

  - **position(optional):** 'first' | 'center'(default) | 'last' | 'only'
  - **gap(optional):** 'n' | 'xs' | 's' | 'm'(default) | 'l' | 'xl' | number
