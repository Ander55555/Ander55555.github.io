/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 222.6964497475709,
        y: 68.82526771781002,
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 135.24869733279377,
        y: 82.38567769642047,
      }),
      new Costume("costume3", "./Sprite1/costumes/costume3.svg", {
        x: 153.61459654178037,
        y: 65.78359234547767,
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.svg", {
        x: 87.07324944110164,
        y: 66.92728602688686,
      }),
      new Costume("costume5", "./Sprite1/costumes/costume5.svg", {
        x: 137.63130311887033,
        y: 86.82832156231517,
      }),
      new Costume("costume6", "./Sprite1/costumes/costume6.svg", {
        x: 141.493797338129,
        y: 72.67547860077268,
      }),
      new Costume("costume7", "./Sprite1/costumes/costume7.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("costume8", "./Sprite1/costumes/costume8.svg", {
        x: 194.37985682446003,
        y: 159.68304834939588,
      }),
      new Costume("costume9", "./Sprite1/costumes/costume9.svg", {
        x: 180.4659094092741,
        y: 104.8759713849353,
      }),
      new Costume("costume10", "./Sprite1/costumes/costume10.svg", {
        x: 159.56117125572206,
        y: 59.99282541131072,
      }),
      new Costume("costume12", "./Sprite1/costumes/costume12.svg", {
        x: 120.31733271217834,
        y: 61.56047829529666,
      }),
      new Costume("costume11", "./Sprite1/costumes/costume11.svg", {
        x: 135.27778274158675,
        y: 39.03795577277404,
      }),
      new Costume("costume13", "./Sprite1/costumes/costume13.svg", {
        x: 221.46884632013706,
        y: 56.7256422600839,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

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
