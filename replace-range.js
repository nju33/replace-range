module.exports = (text, items) => {
  const sortedItems = items.sort((a, b) => a[0] - b[0]);

  let result = '';
  let index = 0;
  sortedItems.forEach(item => {
    const relativeIndex = item[0] - index;
    const targetRangeLength = item[1] - item[0];
    result += text.substr(index, relativeIndex);
    index += relativeIndex + targetRangeLength;

    const target = text.slice(item[0], item[1]);
    const replacedText = item[2](target);
    
    result += replacedText;
  });

  result += text.substr(index);

  return result;
};

