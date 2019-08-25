export default class Bark {
  private sound: String;

  constructor(sound: String) {
    this.sound = sound;
  }

  getSound() {
    return this.sound;
  }

  equals(bark: Bark): boolean {
    return bark.sound === this.sound;
  }
}
