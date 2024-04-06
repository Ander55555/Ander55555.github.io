/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 392.203857421875,
        y: 319.25,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.vars.speedY = 0;
    this.vars.slope = 0;
    this.vars.falling = 0;
    this.vars.speedX = 8.639846744170099e-8;
    this.vars.walljump = 0;
    this.vars.level = 4;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = this.vars.level;
      yield;
    }
  }
}
