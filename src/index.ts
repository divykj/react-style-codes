import {
  Dictionary,
  StyleCodeTypes,
  GridElementCode,
  GridElementLocation,
  FlexCommand,
  FlexDirection,
  Size,
  SizingLayoutLocation,
  Style,
  StyleMapper,
} from './types';

type MapIfNaN = (value: string, map: Dictionary<any, any>) => number;

const mapIfNaN: MapIfNaN = (value, map) => (isNaN(Number(value)) ? map[value] : parseInt(value, 10));

type SizingLayoutMaps = {
  sizes: Dictionary<Size, number>;
  locations: Dictionary<SizingLayoutLocation, string>;
};
type MapSizingLayout = (prefix: 'margin' | 'padding', params: string[]) => Style;

const sizingLayoutMaps: SizingLayoutMaps = {
  sizes: {
    n: 0,
    xs: 2,
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
    default: 4,
  },
  locations: {
    a: '',
    h: 'Horizontal',
    v: 'Vertical',
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    default: '',
  },
};

const mapSizingLayout: MapSizingLayout = (prefix, params) => {
  const location: string =
    sizingLayoutMaps.locations[(params.length === 2 ? params[0] : 'default') as SizingLayoutLocation];
  const size: number = mapIfNaN(params[params.length - 1], sizingLayoutMaps.sizes);

  return { [prefix + location]: size };
};

type FlexMaps = {
  commands: Dictionary<FlexCommand, string>;
  defaultValues: Dictionary<FlexCommand, string | number>;
  directions: Dictionary<FlexDirection, string>;
};

const flexMaps: FlexMaps = {
  commands: {
    s: 'Shrink',
    g: 'Grow',
    d: 'Direction',
  },
  defaultValues: {
    s: 1,
    g: 1,
    d: 'column',
  },
  directions: {
    c: 'column',
    r: 'row',
  },
};

const mapFlexLayout: StyleMapper = (params) => {
  if (!params.length) return { flex: 1 };

  const [command, value = null] = params;

  if (value === null && !isNaN(Number(command))) return { flex: parseInt(command, 10) };

  const translatedCommand = flexMaps.commands[command as FlexCommand];
  const translatedValue =
    value === null ? flexMaps.defaultValues[command as FlexCommand] : mapIfNaN(value, flexMaps.directions);

  return { ['flex' + translatedCommand]: translatedValue };
};

type GridMaps = {
  elementCodes: Dictionary<GridElementCode, string[]>;
  marginLocations: Dictionary<GridElementCode, Dictionary<GridElementLocation, string[]>>;
};

const gridMaps: GridMaps = {
  elementCodes: {
    row: ['f-g-1', 'f-d-c'],
    col: ['f-g-1'],
  },
  marginLocations: {
    row: {
      first: ['b'],
      last: ['t'],
      center: ['v'],
      only: [],
    },
    col: {
      first: ['r'],
      last: ['l'],
      center: ['h'],
      only: [],
    },
  },
};

const mapGridLayout: StyleMapper = (params) => {
  if (params.length === 0) return makeStyles(['f-d-r']);

  const [element, second, third] = params;

  const secondInLocation = ['first', 'last', 'only', 'center'].indexOf(second) !== -1;

  const oneParam = params.length === 1;
  const threeParams = params.length === 3;
  const secondParamIsSize = !oneParam && !threeParams && !secondInLocation;
  const secondParamIsLocation = threeParams || (!oneParam && secondInLocation);

  const size = secondParamIsSize ? second : threeParams ? third : 'm';
  const location = secondParamIsLocation ? second : 'center';

  const elementCodes = gridMaps.elementCodes[element as GridElementCode];
  return makeStyles([
    ...elementCodes,
    ...gridMaps.marginLocations[element as GridElementCode][location as GridElementLocation].map(
      (marginLocation) => 'm-' + marginLocation + '-' + size,
    ),
  ]);
};

const mapTypes: Dictionary<StyleCodeTypes, StyleMapper> = {
  m: (params) => mapSizingLayout('margin', params),
  p: (params) => mapSizingLayout('padding', params),
  f: mapFlexLayout,
  g: mapGridLayout,
};

export const makeStyle: (styleCode: string) => Style = (styleCode) => {
  const [type, ...params] = styleCode.split('-');
  return mapTypes[type as StyleCodeTypes](params);
};

export const makeStyles: StyleMapper = (styleCodes) => {
  return styleCodes.reduce((styles, styleCode) => ({ ...styles, ...makeStyle(styleCode) }), {});
};
