const replaceRange = require('./replace-range');

describe('replace-range', () => {
  test('aaabbbcccdddeee into aaa<p>bbb</p>ccc<i>ddd</i>eee', () => {
    const result = replaceRange('aaabbbcccdddeee', [
      [3, 6, text => `<p>${text}</p>`],
      [9, 12, text => `<i>${text}</i>`],
    ]);

    expect(result).toBe('aaa<p>bbb</p>ccc<i>ddd</i>eee');
  })
})