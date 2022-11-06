const DefSet = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);

export default class Settings {
  constructor(theme, music, difficulty) {
    this.theme = theme;
    this.music = music;
    this.difficulty = difficulty;
    this.SetOptions = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
    this.userSettings = new Map();
    this.userSettings.set('theme', theme);
    this.userSettings.set('music', music);
    this.userSettings.set('difficulty', difficulty);
    this.defaultSettings = DefSet;
  }

  settings() {
    
  }
}
