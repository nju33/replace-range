import replaceRange from 'replace-range';

replaceRange('aaaa', [[1, 2, () => 'bb']]);
