//I use chatGPT to assist in creating and building this p5 sketch. I have made improvements and adjustments to the code as necessary
// 定义变量
let shapeType, fillColor, borderColor, x, y, size;

// 设置画布大小为整个窗口
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// 主绘制函数
function draw() {
  // 这里不需要绘制任何内容，图形将在鼠标点击时绘制
}

// 鼠标点击事件
function mouseClicked() {
  // 掷骰子来确定图形属性
  rollDice();
  
  // 保证 x 和 y 的和不超过 7
  while (x + y > 7) {
    rollDice();
  }
  
  // 绘制图形
  drawShape();
}

// 掷骰子函数，用于随机确定图形的属性
function rollDice() {
  shapeType = roll(1, 6);
  fillColor = roll(0, 9);
  borderColor = roll(0, 9);
  x = roll(0, 9);
  y = roll(0, 9);
  size = roll(0, 9);
}

// 绘制图形函数
function drawShape() {
  let shapeColor;
  
  // 根据填充颜色的随机值设置填充颜色
  if (fillColor <= 3) {
    shapeColor = color(255, 0, 0); // 红色
  } else if (fillColor <= 7) {
    shapeColor = color(0, 0, 255); // 蓝色
  } else {
    shapeColor = color(0); // 黑色
  }
  
  // 设置边框颜色和宽度
  if (borderColor <= 4) {
    noStroke(); // 无边框
  } else {
    strokeWeight(1); // 设置默认的边框宽度
    stroke(0); // 黑色边框
  }
  
  // 根据图形类型绘制图形
  fill(shapeColor);
  switch(shapeType) {
    case 1:
      ellipse(x * 40, y * 40, size * 10, size * 10); // 圆形
      break;
    case 2:
      rect(x * 40, y * 40, size * 10, size * 10); // 正方形
      break;
    case 3:
      stroke((borderColor <= 3) ? color(255, 0, 0) : (borderColor <= 7 ? color(0, 0, 255) : 0)); // 设置线条颜色
      line(x * 40, y * 40, (x + size) * 40, (y + size) * 40); // 线
      break;
    case 4:
      triangle(x * 40, y * 40, (x + size) * 40, y * 40, x * 40, (y + size) * 40); // 三角形
      break;
    case 5:
      rect(x * 40, y * 40, size * 10 * 2, size * 10); // 矩形
      break;
    case 6:
      ellipse(x * 40, y * 40, size * 10 * 2, size * 10); // 椭圆
      break;
    default:
      break;
  }
}

// 掷骰子函数，用于生成指定范围内的随机数
function roll(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}