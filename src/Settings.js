export default class Settings {
  constructor() {
    this.defaultSettings = new Map(
      [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']],
    );
    this.userSettings = new Map();
  }

  set(name, value) {
    this.userSettings.set(name, value);
  }

  get userSettings() {
    if (this.userSettings.size === 0) {
      return this.defaultSettings;
    }
    const actualSettings = new Map(this.defaultSettings);
    for (const [key, value] of actualSettings) {
      if (this.userSettings.has(key)) {
        actualSettings.set(key, value);
      }
    }
    return actualSettings;
  }
}
