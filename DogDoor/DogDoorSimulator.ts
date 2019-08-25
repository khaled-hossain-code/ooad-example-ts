import DogDoor from "./DogDoor";
import Bark from "./Bark";
import BarkRecognizer from "./BarkRecognizer";
import Remote from "./Remote";

const door = new DogDoor();
door.addAllowedBark(new Bark("rowlf"));
door.addAllowedBark(new Bark("rooowlf"));
door.addAllowedBark(new Bark("rawlf"));
door.addAllowedBark(new Bark("woof"));

const recognizer:BarkRecognizer = new BarkRecognizer(door);
const remote:Remote = new Remote(door);

console.log("Bruce Starts barking.");
recognizer.recognize(new Bark("rowlf"));

console.log("Bruce has gone outside....");

console.log("Bruce all done...");
console.log("...but he's stuck outside!");

const smallDogBark:Bark = new Bark("yip");
console.log("A small dog starts barking.");

recognizer.recognize(smallDogBark);

console.log("Bruce starts barking.");
recognizer.recognize(new Bark("rooowlf"));

console.log("Bruce back inside")


