//I use chatGPT to assist in creating and building this p5 sketch. I have made improvements and adjustments to the code as necessary
// Draw shape function
function drawShape() {
  let shapeColor;
  
  // Set fill color based on random value
  if (fillColor <= 3) {
    shapeColor = color(255, 0, 0); // Red
  } else if (fillColor <= 7) {
    shapeColor = color(0, 0, 255); // Blue
  } else {
    shapeColor = color(0); // Black
  }
  
  // Set border color and width
  if (borderColor <= 4) {
    noStroke(); // No border
  } else {
    strokeWeight(1); // Set default border width
    stroke(0); // Black border
  }
  
  // Draw shape based on shape type
  fill(shapeColor);
  switch(shapeType) {
    case 1:
      ellipse(x * windowWidth / 10, y * windowHeight / 10, size * windowWidth / 100, size * windowHeight / 100); // Circle
      break;
    case 2:
      rect(x * windowWidth / 10, y * windowHeight / 10, size * windowWidth / 100, size * windowHeight / 100); // Square
      break;
    case 3:
      stroke((borderColor <= 3) ? color(255, 0, 0) : (borderColor <= 7 ? color(0, 0, 255) : 0)); // Set line color
      line(x * windowWidth / 10, y * windowHeight / 10, (x + size) * windowWidth / 10, (y + size) * windowHeight / 10); // Line
      break;
    case 4:
      triangle(x * windowWidth / 10, y * windowHeight / 10, (x + size) * windowWidth / 10, y * windowHeight / 10, x * windowWidth / 10, (y + size) * windowHeight / 10); // Triangle
      break;
    case 5:
      rect(x * windowWidth / 10, y * windowHeight / 10, size * windowWidth / 50, size * windowHeight / 100); // Rectangle
      break;
    case 6:
      ellipse(x * windowWidth / 10, y * windowHeight / 10, size * windowWidth / 50, size * windowHeight / 100); // Ellipse
      break;
    default:
      break;
  }
}
