# replace-range

## Example

```js
const replaceReange = require('replace-range');

const result = replaceRange('aaabbbcccdddeee', [
  [3, 6, text => `<p>${text}</p>`],
  [9, 12, text => `<i>${text}</i>`],
]);
console.log(result);
// aaa<p>bbb</p>ccc<i>ddd</i>eee
```