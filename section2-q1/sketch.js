// 小手調べ
function setup(){
  createCanvas(100,100);
  noStroke();
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    stroke(255,0,0)
    ellipse(50,50,95)
    ellipse(50,50,85)
    ellipse(50,50,75)
    ellipse(50,50,65)
    ellipse(50,50,55)
  
    stroke(0,0,255)
    ellipse(50,50,45)
    ellipse(50,50,35)
    ellipse(50,50,25)
    ellipse(50,50,15)
    ellipse(50,50,5)
  }
}


  //stroke(255,0,0)
  //ellipse(50, 50, 95 - i * 10); //赤い円、直径を減少
  //stroke(0, 0, 255)
  //ellipse(50, 50, 45 - i * 5);　//青い円
