import DogDoor from "./DogDoor";

export default class Remote {
  constructor(private door: DogDoor) {}

  pressButton() {
    if (this.door.isOpen()) {
      return this.door.close();
    }
    return this.door.doOpen();
  }
}
