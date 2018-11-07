const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse a string: abcd', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse a string: "abcd  "', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
