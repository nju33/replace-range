declare module 'replace-range' {
  declare type RangeItem = [number, number, (match: string) => string];
  declare function replaceRange(text: string, items: RangeItem[]): string;

  export = replaceRange;
}