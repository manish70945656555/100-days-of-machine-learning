# V-Taper Home Gym (iPhone web app)

A 6-day home workout plan built for a V-shaped physique using only **dumbbells and an adjustable bench**.
Opens like a native app when added to the iPhone home screen and works offline.

## Weekly plan
Based on the "Aesthetic V-Shape Dumbbell Program" (run for 8–12 weeks).

| Day | Focus | Exercises |
|-----|-------|-----------|
| Mon | Chest + Shoulders + Triceps | 7 |
| Tue | Back + Biceps | 7 |
| Wed | Legs + Core | 8 |
| Thu | V-Taper Special: Shoulders + Upper Chest | 7 |
| Fri | Back Width + Arms (2 supersets) | 8 |
| Sat | Side Delts + Core | 7 |
| Sun | Rest & Recovery (walk, stretch, mobility, sleep) | 4 |

Weekly frequency: chest 2×, back 2×, arms 2×, legs 1×, side delts 3×, core 2×.

## Features
- Big tick button per exercise and tappable set boxes (ticking every set marks the exercise done)
- Animated start/finish photo for each exercise (GIF-style), plus step-by-step instructions and a V-taper cue
- Sets × reps, rest time, and the bench angle for every exercise
- Rest timer that starts automatically after each set (+15 s / Skip), with countdown beeps; supersets skip the rest between paired exercises
- Sound effects for taps, sets, ticks, day complete and timer (speaker button mutes them)
- Weight log (kg) per exercise for progressive overload
- Progress per day and week; ticks reset every Monday, weights are kept
- Dark theme
- Saved on the phone (localStorage); offline via service worker

## Install on iPhone
1. Host this folder on any HTTPS static host. GitHub Pages: repo **Settings → Pages → Deploy from branch**, then open
   `https://<user>.github.io/100-days-of-machine-learning/home-workout-app/`.
2. Open the link in **Safari**, tap **Share → Add to Home Screen**.

Run locally: `python3 -m http.server` inside this folder, then open `http://localhost:8000`.

Exercise photos and instructions: [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (Unlicense / public domain).
