/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spikes extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Spikes/costumes/costume2.svg", { x: 0, y: 0 }),
      new Costume("costume6", "./Spikes/costumes/costume6.svg", {
        x: 41.312310465465146,
        y: -28.68768953453457,
      }),
      new Costume("costume7", "./Spikes/costumes/costume7.svg", {
        x: 167.31231,
        y: -27.73273499999999,
      }),
      new Costume("costume9", "./Spikes/costumes/costume9.svg", { x: 0, y: 0 }),
      new Costume("costume3", "./Spikes/costumes/costume3.svg", {
        x: 206,
        y: 26,
      }),
      new Costume("costume4", "./Spikes/costumes/costume4.svg", {
        x: -114.68768999999998,
        y: -105.68768999999998,
      }),
      new Costume("costume5", "./Spikes/costumes/costume5.svg", {
        x: -77.68768999999998,
        y: -39.68769,
      }),
      new Costume("costume8", "./Spikes/costumes/costume8.svg", {
        x: 82.97297066066056,
        y: 94.44744513513486,
      }),
      new Costume("costume10", "./Spikes/costumes/costume10.svg", {
        x: 111.38438207207196,
        y: 1.7687664564565466,
      }),
      new Costume("costume12", "./Spikes/costumes/costume12.svg", {
        x: 111.38438,
        y: -53.78828999999999,
      }),
      new Costume("costume11", "./Spikes/costumes/costume11.svg", {
        x: 344.203857421875,
        y: -178.75,
      }),
      new Costume("costume13", "./Spikes/costumes/costume13.svg", {
        x: 157.38438000000002,
        y: 85.21170999999998,
      }),
      new Costume("costume14", "./Spikes/costumes/costume14.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Spikes/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.level = 1;
    while (true) {
      this.costume = this.stage.vars.level;
      yield;
    }
  }
}
