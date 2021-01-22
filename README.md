# Skeleton Loading for React

## Ideology
The Skeleton component works on the principle of basic shapes. The idea is to use this component to quickly build shapes for a given layout and switch it using loading states. Right now, the component supports `rectangle`, `linear` and `round` shapes.
This is one of the easiest way to approach the issue in the given timeframe. Also, an inherent advantage is that many React developers are familiar with this apprach.

## APIs
### Props
```
{
  /**
  * rect -> rectangular box shape
  * circle -> circular shape
  * text -> linear shape
  */
  type: 'rect' | 'text' | 'circle',  // default is 'rect'

  width: 300 | '100%', // value of width

  height: 300 | '100%', // value of height

  style: {}, // style object for extra styles

}
```

## Example Usage
Here is an example
```
import React from 'react';
import Skeleton from './Skeleton';

const Example = () => {
  return (
    <>
      {loading ? (
        <Skeleton type="rect" width={200} height={200} />
      ) : (
        <div style={{ width: 200, height: 200 }}>
      )}
    </>
  )
}

```