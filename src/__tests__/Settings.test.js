import Settings from '../Settings';

test('should set', () => {
  const settings = new Settings();
  settings.set('difficulty', 'medium');
  expect(settings).toEqual({
    defaultSettings: new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]),
    userSettings: new Map([['difficulty', 'medium']]),
  });
});

test('should get default', () => {
  const settings = new Settings();
  expect(settings.Settings).toEqual(new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]));
});

test('should get actual', () => {
  const settings = new Settings();
  settings.set('difficulty', 'medium');
  expect(settings.Settings).toEqual(new Map([['difficulty', 'medium'], ['theme', 'dark'], ['music', 'trance']]));
});
