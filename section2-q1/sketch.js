// 小手調べ
function setup(){
  createCanvas(100,100);
  noFill();

  for(let i = 0; i < 5; i++){
    stroke(255, 0, 0);
    ellipse(50, 50, 95 - i * 10); // 赤い円

  for(let i = 0; i < 10; i++)
    stroke(0, 0, 255);
    ellipse(50, 50, 45 - i * 10); // 青い円
    }
  }

