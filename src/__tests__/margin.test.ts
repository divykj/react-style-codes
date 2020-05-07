import { makeStyles } from '../index';

test('margin with size', () => {
  expect(makeStyles(['m-l'])).toEqual({ margin: 12 });
});

test('margin with numerical size', () => {
  expect(makeStyles(['m-6'])).toEqual({ margin: 6 });
});

test('margin with location and size', () => {
  expect(makeStyles(['m-h-xs'])).toEqual({ marginHorizontal: 2 });
});

test('margin with location and numerical size', () => {
  expect(makeStyles(['m-l-20'])).toEqual({ marginLeft: 20 });
});
