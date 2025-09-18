import { AcGameObject } from "./AcGameObject";
import { Wall } from "./Wall";

export class GameMap extends AcGameObject {
  constructor(ctx, parent) {
    super();

    this.ctx = ctx;
    this.parent = parent;
    this.L = 0;

    this.rows = 13;
    this.cols = 13;
    this.walls = [];

    this.inner_walls = 30;
  }

  check_connectivity(g, sx, sy, tx, ty) {
    if (sx == tx && sy == ty) return true;

    g[sx][sy] = true;
    let dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
      let x = dx[i] + sx, y = dy[i] + sy;
      if (!g[x][y] && this.check_connectivity(g, x, y, tx, ty)) {
        return true;
      }
    }

    return false;
  }

  create_walls() {
    const g = [];
    for (let r = 0; r < this.rows; r++) {
      g[r] = [];
      for (let c = 0; c < this.cols; c++) {
        g[r][c] = false;
      }
    }

    for (let r = 0; r < this.rows; r++) {
      g[r][0] = g[r][this.cols - 1] = true;
    }

    for (let c = 0; c < this.cols; c++) {
      g[0][c] = g[this.rows - 1][c] = true;
    }

    for (let i = 0; i < this.inner_walls / 2; i++) {
      for (let j = 0; j < 1000; j++) {
        let r = parseInt(Math.random() * (this.rows - 1));
        let c = parseInt(Math.random() * (this.cols - 1));

        if (g[r][c] || g[c][r]) continue;
        if (r == this.cols - 2 && c == 1 || r == 1 && c == this.cols - 2) continue;

        g[r][c] = g[c][r] = true;
        break;
      }
    }

    const copy_g = JSON.parse(JSON.stringify(g));
    if (!this.check_connectivity(copy_g, this.rows - 2, 1, 1, this.cols - 2)) return false;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (g[r][c]) {
          this.walls.push(new Wall(r, c, this));    //将所有的墙都放在wall中管理
        }
      }
    }

    return true;
  }

  start() {
    for (let i = 0; i < 1000; i++) {
      if (this.create_walls()) break;
    }
  }

  update_size() {
    this.L = Math.min(parseInt(this.parent.clientWidth / this.cols), parseInt(this.parent.clientHeight / this.rows));
    this.ctx.canvas.width = this.L * this.cols;
    this.ctx.canvas.height = this.L * this.rows;
  }

  update() {
    this.update_size();
    this.render();
  }

  destory() {

  }

  on_destory() {

  }

  render() {
    const even_color = "#AAD751", odd_color = "#A2D149";
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if ((r + c) % 2 == 0) this.ctx.fillStyle = even_color;
        else this.ctx.fillStyle = odd_color;

        this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
      }
    }
  }

}