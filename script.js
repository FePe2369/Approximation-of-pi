//Variable declaration
let currentPoints = 0;
let isCalculating = true;
let points = 10000;
let pointsInside = 0;
let rad = 400;

function setup() {
  createCanvas(400, 400);
  frameRate(1000);

  // Create and position reset button
  let resetBtn = createButton("Reset");
  resetBtn.position(windowWidth / 2 - 25, height + 280);
  resetBtn.mousePressed(resetSimulation);
}

function resetSimulation() {
  currentPoints = 0;
  pointsInside = 0;
  isCalculating = true;
  background(216, 112, 147);
}

function drawPoint() {
  stroke("purple");
  strokeWeight(5);

  // Generate random coordinates
  let x = random(width);
  let y = random(height);

  point(x, y);

  // Check if point is inside the circle
  let distance = dist(x, y, width / 2, height / 2);

  if (distance <= rad / 2) {
    pointsInside++;
  }
}

function draw() {
  // Draw the circle
  noFill();
  stroke("black");
  strokeWeight(2);
  circle(width / 2, height / 2, rad);

  if (currentPoints < points) {
    // Draw multiple points per frame for faster execution
    for (let i = 0; i < 50 && currentPoints < points; i++) {
      drawPoint();
      currentPoints += 1;
    }
  } else if (isCalculating) {
    // Calculate and display final pi approximation
    let pi = 4 * (pointsInside / points);
    textSize(25);
    fill(255);
    text(
      "Approximation of pi with \n" + points + " points is: " + pi.toFixed(4),
      70,
      200
    );
    isCalculating = false;
  }

  // Display real-time progress and pi calculation
  if (isCalculating && currentPoints > 0) {
    textSize(16);
    fill(255);
    let percentage = ((currentPoints / points) * 100).toFixed(1);
    text("Progress: " + percentage + "%", 10, 20);
    text("Points: " + currentPoints + "/" + points, 10, 40);

    let piCurrent = 4 * (pointsInside / currentPoints);
    text("Current π ≈ " + piCurrent.toFixed(4), 10, 60);
  }
}
