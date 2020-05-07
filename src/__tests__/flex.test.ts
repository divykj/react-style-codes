import { makeStyles } from '../index';

test('default flex', () => {
  expect(makeStyles(['f'])).toEqual({ flex: 1 });
});

test('flex with number', () => {
  expect(makeStyles(['f-6'])).toEqual({ flex: 6 });
});

test('default flex grow', () => {
  expect(makeStyles(['f-g'])).toEqual({ flexGrow: 1 });
});

test('flex grow with number', () => {
  expect(makeStyles(['f-g-2'])).toEqual({ flexGrow: 2 });
});

test('default flex shrink', () => {
  expect(makeStyles(['f-s'])).toEqual({ flexShrink: 1 });
});

test('flex shrink with number', () => {
  expect(makeStyles(['f-s-3'])).toEqual({ flexShrink: 3 });
});

test('default flex direction', () => {
  expect(makeStyles(['f-d'])).toEqual({ flexDirection: 'column' });
});

test('flex direction row', () => {
  expect(makeStyles(['f-d-r'])).toEqual({ flexDirection: 'row' });
});
