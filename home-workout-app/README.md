# V-Taper Home Gym (iPhone web app)

A 6-day home workout plan built for a V-shaped physique using only **dumbbells and an adjustable bench**.
Opens like a native app when added to the iPhone home screen and works offline.

## Weekly plan
| Day | Focus | Exercises |
|-----|-------|-----------|
| Mon | Back width: lats & rear delts | 7 |
| Tue | Shoulders: side delts first | 7 |
| Wed | Upper chest & triceps | 7 |
| Thu | Legs & core | 7 |
| Fri | Back thickness & biceps | 7 |
| Sat | Delts & arms pump | 7 |
| Sun | Rest + optional light core | 6 |

## Features
- Big tick button per exercise and tappable set boxes (ticking every set marks the exercise done)
- Animated start/finish photo for each exercise (GIF-style), plus step-by-step instructions and a V-taper cue
- Sets × reps, rest time, and the bench angle for every exercise
- Rest timer that starts automatically after each set (+15 s / Skip)
- Weight log (kg) per exercise for progressive overload
- Progress per day and week; ticks reset every Monday, weights are kept
- Saved on the phone (localStorage); offline via service worker

## Install on iPhone
1. Host this folder on any HTTPS static host. GitHub Pages: repo **Settings → Pages → Deploy from branch**, then open
   `https://<user>.github.io/100-days-of-machine-learning/home-workout-app/`.
2. Open the link in **Safari**, tap **Share → Add to Home Screen**.

Run locally: `python3 -m http.server` inside this folder, then open `http://localhost:8000`.

Exercise photos and instructions: [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (Unlicense / public domain).
