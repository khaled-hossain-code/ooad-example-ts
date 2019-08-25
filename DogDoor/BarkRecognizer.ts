import DogDoor from "./DogDoor";
import Bark from "./Bark";

export default class BarkRecognizer {
  constructor(private door: DogDoor) {}

  recognize(barkInput: Bark) {
    const allowedBarks: Bark[] = this.door.getAllowedBarks();

    console.log(`BarkRecognizer: Heard a ${barkInput.getSound()}`);

    for (const bark of allowedBarks) {
      if (bark.equals(barkInput)) {
        return this.door.doOpen();
      }
    }

    console.log("This dog is not allowed");
  }
}
