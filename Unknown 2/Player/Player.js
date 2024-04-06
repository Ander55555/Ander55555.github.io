/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("soccer ball", "./Player/costumes/soccer ball.svg", {
        x: 19.753620147705078,
        y: 19.753620147705078,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Player/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(-200, 0);
    this.stage.vars.speedY = 0;
    while (true) {
      this.stage.vars.speedY--;
      this.stage.vars.speedX = this.toNumber(this.stage.vars.speedX) * 0.9;
      this.y += this.toNumber(this.stage.vars.speedY);
      yield* this.touchGround(this.compare(this.stage.vars.speedY, 0) > 0);
      if (this.compare(this.stage.vars.walljump, 0) > 0) {
        this.stage.vars.walljump--;
      } else {
        if (
          this.keyPressed("d") ||
          this.keyPressed("right arrow") ||
          (this.mouse.down && this.compare(this.x, this.mouse.x) < 0)
        ) {
          this.stage.vars.speedX += 0.75;
        }
        if (
          this.keyPressed("a") ||
          this.keyPressed("left arrow") ||
          (this.mouse.down && this.compare(this.mouse.x, this.x) < 0)
        ) {
          this.stage.vars.speedX -= 0.75;
        }
      }
      if (
        (this.keyPressed("w") ||
          this.keyPressed("up arrow") ||
          (this.mouse.down && this.compare(this.y, this.mouse.y) < 0)) &&
        this.compare(this.stage.vars.falling, 3) < 0
      ) {
        this.stage.vars.speedY = 15;
      }
      if (this.compare(this.stage.vars.speedX, -0.5) < 0) {
        yield* this.walk(5, this.stage.vars.speedX);
      } else {
        if (this.compare(0.5, this.stage.vars.speedX) < 0) {
          yield* this.walk(5, this.stage.vars.speedX);
        } else {
          null;
        }
      }
      yield;
    }
  }

  *touchGround(up) {
    this.stage.vars.falling++;
    while (!!this.touching(this.sprites["Ground"].andClones())) {
      if (up) {
        this.y -= 1;
      } else {
        this.y += 1;
        this.stage.vars.falling = 0;
      }
      this.stage.vars.speedY = 0;
    }
  }

  *walk(x, speed) {
    this.x += this.toNumber(speed);
    this.stage.vars.slope = 0;
    while (
      !(
        this.toNumber(this.stage.vars.slope) === 8 ||
        !this.touching(this.sprites["Ground"].andClones())
      )
    ) {
      this.y += 1;
      this.stage.vars.slope++;
    }
    if (this.toNumber(this.stage.vars.slope) === 8) {
      this.x += 0 - this.toNumber(speed);
      this.y += 0 - this.toNumber(this.stage.vars.slope);
      if (
        (this.keyPressed("w") ||
          this.keyPressed("up arrow") ||
          (this.mouse.down && this.compare(this.y, this.mouse.y) < 0)) &&
        this.compare(Math.abs(this.toNumber(speed)), 3) > 0
      ) {
        if (this.toNumber(this.stage.vars.walljump) === 0) {
          this.stage.vars.speedX = -2 * this.toNumber(speed);
          this.stage.vars.speedY = 11;
          this.stage.vars.falling = 6;
        } else {
          this.stage.vars.speedX = 0;
        }
      }
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.compare(230, this.x) < 0 ||
        this.touching(this.sprites[undefined].andClones()) ||
        this.touching(this.sprites["Spikes"].andClones())
      ) {
        if (this.compare(230, this.x) < 0) {
          this.stage.vars.level++;
        }
        this.stage.vars.falling = 0;
        this.stage.vars.speedY = 0;
        this.stage.vars.speedX = 0;
        this.stage.vars.walljump = 0;
        this.stage.vars.slope = 0;
        this.goto(-200, 0);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (
        (this.compare(this.mouse.y, this.y) < 0 && this.mouse.down) ||
        this.keyPressed("down arrow") ||
        this.keyPressed("s")
      ) {
        if (this.costumeNumber === 5) {
          this.costume = "C5";
        } else {
          this.costumeNumber++;
        }
      } else {
        if (this.costumeNumber === 1) {
          this.costume = "C";
        } else {
          this.costume = this.costumeNumber - 1;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.direction += this.toNumber(this.stage.vars.speedX) * 2;
      yield;
    }
  }
}
