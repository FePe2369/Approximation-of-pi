# Monte Carlo π Approximation 🎯

A visual and interactive demonstration of the Monte Carlo method for approximating the value of π using randomly distributed points.

## Overview

This project uses probability and geometry to estimate π by generating random points within a square and determining how many fall inside an inscribed circle. As more points are plotted, the approximation converges closer to the true value of π (3.14159...).

## How It Works

The Monte Carlo method relies on the relationship between the areas of a circle and its bounding square:

- **Circle area**: πr²
- **Square area**: (2r)² = 4r²
- **Area ratio**: πr² / 4r² = π/4

By randomly plotting points and counting how many land inside the circle versus the total, we can estimate this ratio:

```
π ≈ 4 × (Points inside circle / Total points)
```

The more points generated, the more accurate the approximation becomes.

## Features

- **Real-time visualization**: Watch points being plotted and see π converge to its true value
- **Live statistics**: Track progress percentage, point count, and current π approximation
- **Interactive controls**: Reset button to restart the simulation
- **Customizable**: Easily adjust the number of points for different accuracy levels
- **Fast rendering**: Optimized to draw multiple points per frame

## Technologies Used

- **p5.js**: Graphics and canvas rendering
- **JavaScript**: Core logic and calculations
- **HTML5 & CSS3**: Structure and styling
- **Bootstrap 5**: Responsive design framework

## Getting Started

### Prerequisites

None! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Watch the Monte Carlo simulation in action

### Customization

To change the number of sample points, edit the `points` variable in `script.js`:

```javascript
let points = 10000; // Change this value
```

Higher values provide better accuracy but take longer to complete.

## Mathematical Background

The Monte Carlo method is a computational technique that uses random sampling to obtain numerical results. In this case:

1. Random points are uniformly distributed within a square of side 2r
2. Each point is tested to see if it falls within the inscribed circle of radius r
3. The ratio of points inside the circle approximates π/4
4. Multiplying by 4 gives our π approximation

This demonstrates how randomness can be used to solve deterministic mathematical problems.

## Performance

The program is optimized to draw 50 points per frame, balancing visual feedback with speed. With 10,000 points, the simulation completes in just a few seconds while still showing the convergence process.

## License

Feel free to use, modify, and distribute this project for educational purposes.

## Author

**Felipe Pereira**
a.k.a FePe23 :3

Thanks for passing by!! 🎯
