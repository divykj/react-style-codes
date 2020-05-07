import { makeStyles } from '../index';

test('grid container', () => {
  expect(makeStyles(['g'])).toEqual({ flexDirection: 'row' });
});

test('grid row', () => {
  expect(makeStyles(['g-row'])).toEqual({ flexGrow: 1, flexDirection: 'column', marginVertical: 8 });
});

test('grid only row', () => {
  expect(makeStyles(['g-row-only'])).toEqual({ flexGrow: 1, flexDirection: 'column' });
});

test('grid row with location', () => {
  expect(makeStyles(['g-row-first'])).toEqual({ flexGrow: 1, flexDirection: 'column', marginBottom: 8 });
});

test('grid row with size', () => {
  expect(makeStyles(['g-row-xl'])).toEqual({ flexGrow: 1, flexDirection: 'column', marginVertical: 16 });
});

test('grid row with numerical size', () => {
  expect(makeStyles(['g-row-5'])).toEqual({ flexGrow: 1, flexDirection: 'column', marginVertical: 5 });
});

test('grid row with location and size', () => {
  expect(makeStyles(['g-row-last-s'])).toEqual({ flexGrow: 1, flexDirection: 'column', marginTop: 4 });
});

test('grid row with location and numerical size', () => {
  expect(makeStyles(['g-row-only-15'])).toEqual({ flexGrow: 1, flexDirection: 'column' });
});

test('grid column', () => {
  expect(makeStyles(['g-col'])).toEqual({ flexGrow: 1, marginHorizontal: 8 });
});

test('grid only column', () => {
  expect(makeStyles(['g-col-only'])).toEqual({ flexGrow: 1 });
});

test('grid column with location', () => {
  expect(makeStyles(['g-col-center'])).toEqual({ flexGrow: 1, marginHorizontal: 8 });
});

test('grid column with size', () => {
  expect(makeStyles(['g-col-xl'])).toEqual({ flexGrow: 1, marginHorizontal: 16 });
});

test('grid column with numerical size', () => {
  expect(makeStyles(['g-col-5'])).toEqual({ flexGrow: 1, marginHorizontal: 5 });
});

test('grid column with location and size', () => {
  expect(makeStyles(['g-col-last-s'])).toEqual({ flexGrow: 1, marginLeft: 4 });
});

test('grid column with location and numerical size', () => {
  expect(makeStyles(['g-col-only-15'])).toEqual({ flexGrow: 1 });
});
