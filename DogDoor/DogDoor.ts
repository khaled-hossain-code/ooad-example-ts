import Bark from "./Bark";

export default class DogDoor {
  private open: boolean = false;
  private barks: Bark[] = [];

  constructor() {}

  addAllowedBark(bark: Bark) {
    this.barks.push(bark);
  }
  doOpen() {
    console.log("The dog door opens.")
    this.open = true;
  }

  close() {
    this.open = false;
  }

  isOpen(): boolean {
    return this.open;
  }

  getAllowedBarks(): Bark[] {
    return this.barks;
  }
}
