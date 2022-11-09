import Settings from '../Settings';

test('should create class', () => {
  expect(new Settings()).toEqual({
    defaultSettings: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
    userSettings: new Map(),
  });
});
