// 最終課題を制作しよう

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let balls = []; // ボールの配列
let ballCount = 5; // ボールの数
let box;

function setup() {
  createCanvas(windowWidth, windowHeight);
  box = new Box(); //箱
  // ボールの初期位置と設定を行う
  for (let i = 0; i < ballCount; i++) {
    balls.push(new Ball(i)); // 各ボールを順番に作成
  }
}

function draw() {
  background(135,206,250); // 背景を水色に設定
  
  // ボールを順番に描画とアニメーション
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
    box.checkBallInBox(balls[i]);//ボールが箱の中に入ったかチェック
  }
  
  box.display();
}

// Ballクラス：ボールの動きを管理
class Ball {
  constructor(index) {
    this.x = random(50, width - 50); // ボールのX座標（ランダム）
    this.y = -60; // ボールの初期位置（画面外）
    this.diameter = 50; // ボールの直径
    this.speed = 5; // ボールの落下速度
    this.index = index; // ボールのインデックス
    this.isFalling = false; // ボールが落ちているかどうか
    this.targetY = height + this.diameter; // ボールが落ちる最終位置（画面外）
    this.isPrevBallAtBottom = true; // 前のボールが一番下に到達したか
  }

  // ボールを更新する関数
  update() {
    // 前のボールが一番下に到達したら、次のボールが降り始める
    if (this.index === 0 || balls[this.index - 1].isAtBottom()) {
      if (!this.isFalling) {
        this.isFalling = true; // ボールが降り始める
      }
    }

    // ボールが落ちている場合、下に移動する
    if (this.isFalling && this.y < this.targetY) {
      this.y += this.speed; // 速度分だけ落下
    }
  }

  // ボールを画面に描画する関数
  display() {
    fill(255, 140, 0); // ボールの色
    noStroke();
    ellipse(this.x, this.y, this.diameter); // ボールの描画
  }

  // ボールが一番下に到達したかを確認する関数
  isAtBottom() {
    return this.y >= this.targetY;
  }

  reset(){
    this.y = -60;
    this.isFalling = false;
  }
}
// 箱の動きとボールを受け入れる機能を管理
class Box {
  constructor() {
    this.width = 120; // 箱の幅
    this.height = 70; // 箱の高さ
    this.x = width / 2 - this.width / 2; // 初期位置（画面中央）
    this.y = height - this.height - 10; // 画面下部
    this.speed = 5; // 箱の移動速度
  }

  // 箱を描画する関数
  display() {
    fill(150, 75, 0); // 箱の色（茶色）
    noStroke();
    rect(this.x, this.y, this.width, this.height); // 箱の描画
  }

  // 箱を左右に移動する関数
  move(direction) {
    this.x += direction * this.speed; // directionは-1または1
    // 画面の端で箱が出ないように制限
    this.x = constrain(this.x, 0, width - this.width);
  }

  // 箱の中にボールが入ったかをチェックする関数
  checkBallInBox(ball) {
    if (ball.y + ball.diameter / 2 >= this.y && 
        ball.y + ball.diameter / 2 <= this.y + this.height &&
        ball.x >= this.x && ball.x <= this.x + this.width) {
      // ボールが箱に入った場合、ボールをリセット
      ball.reset();
    }
  }
}

// 左右キーで箱を動かす処理
function draw() {
  background(135, 206, 250); // 背景を水色に設定
  
  // ボールを順番に描画とアニメーション
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
    box.checkBallInBox(balls[i]); // ボールが箱に入ったかをチェック
  }

  // 箱の移動
  if (keyIsDown(LEFT_ARROW)) {
    box.move(-1); // 左に移動
  } if (keyIsDown(RIGHT_ARROW)) {
    box.move(1); // 右に移動
  } if (keyIsDown(LEFT_ARROW) && keyIsDown("A".charCodeAt(0))) {
    box.move(-3);
  } if (keyIsDown(RIGHT_ARROW) && keyIsDown("A".charCodeAt(0))){
    box.move(3);
  }

  box.display(); // 箱の描画
}


