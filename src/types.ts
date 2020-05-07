type Key = string | number;

export type Dictionary<T extends Key, U> = {
  [key in T]: U;
};

export type StyleCodeTypes = 'm' | 'p' | 'f' | 'g';

export type Size = 'n' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'default' | number;
export type SizingLayoutLocation = 'a' | 'h' | 'v' | 't' | 'r' | 'b' | 'l' | 'default';

export type FlexCommand = 's' | 'g' | 'd';
export type FlexDirection = 'r' | 'c';

export type GridElementCode = 'row' | 'col';
export type GridElementLocation = 'first' | 'last' | 'center' | 'only';

export type Style = {
  [key: string]: string | number;
};

export type StyleMapper = (params: string[]) => Style;
