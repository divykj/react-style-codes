import { makeStyles } from '../index';

test('padding with size', () => {
  expect(makeStyles(['p-l'])).toEqual({ padding: 12 });
});

test('padding with numerical size', () => {
  expect(makeStyles(['p-6'])).toEqual({ padding: 6 });
});

test('padding with location and size', () => {
  expect(makeStyles(['p-h-xs'])).toEqual({ paddingHorizontal: 2 });
});

test('padding with location and numerical size', () => {
  expect(makeStyles(['p-l-20'])).toEqual({ paddingLeft: 20 });
});
