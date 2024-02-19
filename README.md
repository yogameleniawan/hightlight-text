<!--rehype:ignore:start--> 
react-hightlight-text
===
<!--rehype:ignore:end-->

[![npm version](https://img.shields.io/npm/v/react-keywords.svg)](https://www.npmjs.com/package/react-highlight-element)

Highlight a keyword in a piece of text and return a React element.


![image](https://github.com/yogameleniawan/hightlight-text/assets/64576201/5e061f63-ad41-4778-9d5f-6cda6044c07c)


## Installation

```bash
npm i react-highlight-element
```

## Basic Usage

```jsx mdx:preview
import React from 'react';
import HighlightText from 'react-highlight-element';

export default function Demo() {
  return (
    <HighlightText text="This is react component" highlight="react" />
  );
}
```

```jsx mdx:preview
import React, { useState, Fragment } from 'react';
import HighlightText from 'react-highlight-element';

export default function Demo() {
  const [value, setValue] = useState('react');
  return (
    <Fragment>
      <input value={value} onChange={(evn) => setValue(evn.target.value)} />
      <HighlightText text="This is react component" highlight={value} />
    </Fragment>
  );
}
```

### Color

```jsx mdx:preview
import React, { useState, Fragment } from 'react';
import HighlightText from 'react-highlight-element';

export default function Demo() {
  const [value, setValue] = useState('react');
  return (
    <Fragment>
      <input value={value} onChange={(evn) => setValue(evn.target.value)} />
      <HighlightText text="This is react component" highlight={value} color="red" />
    </Fragment>
  );
}
```

### Background Color

```jsx mdx:preview
import React, { useState, Fragment } from 'react';
import HighlightText from 'react-highlight-element';

export default function Demo() {
  const [value, setValue] = useState('react');
  return (
    <Fragment>
      <input value={value} onChange={(evn) => setValue(evn.target.value)} />
      <HighlightText text="This is react component" highlight={value} backgroundColor="white" />
    </Fragment>
  );
}
```

## API

```ts
export interface HighlightTextI {
    text: string,
    highlight: string,
    color?: string,
    backgroundColor?: string
}
```

### License

Licensed under the MIT License.
