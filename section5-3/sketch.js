// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
  const dateNum = dayOfWeek(2024,11,19);
  const dateString = dayOfWeekAsString(dateNum);
  console.log(dateString);
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);　//月の1日の曜日を取得
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
  //4で割り切れる年はうるう年。100で割り切れる年はうるう年ではない。400で割り切れる年はうるう年。
}

function daysInYear(y){
  if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
    daysInYear = 366
    return daysInYear; //うるう年
  } else {
    daysInYear = 365
    return daysInYear; //うるう年でない
  }
  console.log(daysInYear);
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;　//4,6,9,11月は30日
  }
  else{
    return 31;　//それ以外の月は31日
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  if (m < 3) {
    m += 12; //1月→13月、2月→14月
    y--;　//年を1減らす
  }
  let k = y % 100;　//年の下2桁
  let j = Math.floor(y / 100);　//世紀

  let dow = (d + Math.floor((13 * (m + 1)) / 5) + k + Math.floor (k / 4) + Math.floor(j / 4) - 2 * j) % 7;
  return (dow + 7) % 7;　//結果と０(土曜日)から６(金曜日)に変換
}

function dayOfWeekAsString(dow){
  const a = ["土","日", "月", "火", "水", "木", "金",];
  return a[dow];
}



