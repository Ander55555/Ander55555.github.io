import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Ground from "./Ground/Ground.js";
import Spikes from "./Spikes/Spikes.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 85.40324567744055,
    y: -8,
    direction: -139.76109755285918,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 85,
    visible: true,
    layerOrder: 3,
  }),
  Ground: new Ground({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 111.54144074360961,
    visible: true,
    layerOrder: 2,
  }),
  Spikes: new Spikes({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 180,
    visible: true,
    layerOrder: 5,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 60, // Set to 60 to make your project run faster
});
export default project;
