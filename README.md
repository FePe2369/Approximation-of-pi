# Monte Carlo π Approximation

Interactive visualization of the Monte Carlo method for approximating π through random sampling. Built with p5.js.

## How it works

Random points are placed inside a square with an inscribed circle. The areas are in ratio π/4, so the share of points that land inside the circle estimates π:

```
points_inside / total_points ≈ π/4   →   π ≈ 4 × (points_inside / total_points)
```

The more points sampled, the closer the estimate converges to π (law of large numbers).

## Features

- Live π estimate, current error, and inside/outside ratio while sampling
- Adjustable sample size (100 – 100,000) and animation speed
- Pause/resume (Spacebar) and restart (R)
- Color-coded points (inside / outside the circle)

## Running it

Open `index.html` in any modern browser — no build step. p5.js is included in the repo.

Optionally serve it locally:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Typical convergence

| Points  | Typical accuracy |
| ------- | ---------------- |
| 100     | ~2 decimals      |
| 1,000   | ~2–3 decimals    |
| 10,000  | ~3–4 decimals    |
| 100,000 | ~4–5 decimals    |

Results vary between runs because the sampling is random.

## Files

```
index.html   # structure
style.css    # styling and animations
script.js    # simulation logic
p5.js        # p5.js library
```
