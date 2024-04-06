/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume16", "./Ground/costumes/costume16.svg", {
        x: 261.32692,
        y: -80.00725283610547,
      }),
      new Costume("costume2", "./Ground/costumes/costume2.svg", {
        x: 261.32692,
        y: -80.00725951571724,
      }),
      new Costume("costume15", "./Ground/costumes/costume15.svg", {
        x: 261.32692,
        y: -80.00725951571724,
      }),
      new Costume("costume12", "./Ground/costumes/costume12.svg", {
        x: 470.71635735436894,
        y: -19.28481484211389,
      }),
      new Costume("costume14", "./Ground/costumes/costume14.svg", {
        x: 261.32692,
        y: -14.865429515717153,
      }),
      new Costume("costume6", "./Ground/costumes/costume6.svg", {
        x: 476.0196023737864,
        y: -77.6205000557062,
      }),
      new Costume("costume3", "./Ground/costumes/costume3.svg", {
        x: 510.49069421359223,
        y: -25.471928585986518,
      }),
      new Costume("costume7", "./Ground/costumes/costume7.svg", {
        x: 261.32692,
        y: 102.96395729004848,
      }),
      new Costume("costume4", "./Ground/costumes/costume4.svg", {
        x: 261.32692,
        y: -80.0072595157173,
      }),
      new Costume("costume5", "./Ground/costumes/costume5.svg", {
        x: 261.32692,
        y: -80.0072595157173,
      }),
      new Costume("costume1", "./Ground/costumes/costume1.svg", {
        x: 708.9496194488847,
        y: -75.85276623161741,
      }),
      new Costume("costume8", "./Ground/costumes/costume8.svg", {
        x: 261.32692088834943,
        y: 193.5059626699028,
      }),
      new Costume("costume9", "./Ground/costumes/costume9.svg", {
        x: 261.32692,
        y: 346.2695209095584,
      }),
    ];

    this.sounds = [new Sound("pop", "./Ground/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = this.stage.vars.level;
      yield;
    }
  }
}
