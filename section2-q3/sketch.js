// ダーツ

function setup() {
  const green = color(0, 255, 0);　//色の定義
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);　//400*400 のキャンバスの大きさ
  background(255);　//
  stroke(255);　//枠線の色
  strokeWeight(3); //枠線の太さ

  const cx = width / 2; // 中心の設定 (cx, cy)
  const cy = height / 2;　
  const maxR = min(width, height); // 直径の設定　大きさは幅と高さのうち小さい方(maxR) 

  drawCircle(black, maxR);　//いちばん外側の黒い円
  drawArcs(green, red, maxR * 0.8); // 緑と赤の弧

  drawArcs(cream, black, maxR * 0.75);
  drawArcs(green, red, maxR * 0.5);
  drawArcs(cream, black, maxR * 0.45);

  drawCircle(green, maxR * 0.1);
  drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){
  const cx = width / 2; //　中心は(cx,cy)
  const cy = height / 2;
  fill(c);　
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  const cx = width / 2; //中心は(cx,cy)
  const cy = height / 2;
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

