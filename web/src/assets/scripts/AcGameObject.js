const Ac_Game_Objects = []

export class AcGameObject {
  constructor() {
    Ac_Game_Objects.push(this);
    this.timedelta = 0;
    this.has_called_start = false;
  }

  start() {

  }

  update() {

  }

  on_destory() {

  }

  destory() {
    this.on_destory();

    for (let i in Ac_Game_Objects) {
      const obj = Ac_Game_Objects[i];
      if (obj === this) {
        Ac_Game_Objects.splice(i);
        break;
      }
    }
  }
}

let last_timestamp;
const step = timestamp => {
  for (let obj of Ac_Game_Objects) {
    if (!obj.has_called_start) {
      obj.start();
      obj.has_called_start = true;
    } else {
      obj.timedelta = timestamp - last_timestamp;
      obj.update();
    }
  }

  last_timestamp = timestamp;
  requestAnimationFrame(step);
}

requestAnimationFrame(step);