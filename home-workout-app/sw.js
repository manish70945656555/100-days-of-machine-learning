// Offline cache: the whole app and every exercise photo are stored on first visit.
const CACHE = 'vtaper-v4';
const ASSETS = ["./", "index.html", "data.js", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "img/Bent_Over_Two-Dumbbell_Row/0.jpg", "img/Bent_Over_Two-Dumbbell_Row/1.jpg", "img/Concentration_Curls/0.jpg", "img/Concentration_Curls/1.jpg", "img/Dumbbell_Alternate_Bicep_Curl/0.jpg", "img/Dumbbell_Alternate_Bicep_Curl/1.jpg", "img/Dumbbell_Bench_Press/0.jpg", "img/Dumbbell_Bench_Press/1.jpg", "img/Dumbbell_Incline_Row/0.jpg", "img/Dumbbell_Incline_Row/1.jpg", "img/Dumbbell_Lunges/0.jpg", "img/Dumbbell_Lunges/1.jpg", "img/Dumbbell_Lying_Rear_Lateral_Raise/0.jpg", "img/Dumbbell_Lying_Rear_Lateral_Raise/1.jpg", "img/Flat_Bench_Lying_Leg_Raise/0.jpg", "img/Flat_Bench_Lying_Leg_Raise/1.jpg", "img/Front_Dumbbell_Raise/0.jpg", "img/Front_Dumbbell_Raise/1.jpg", "img/Goblet_Squat/0.jpg", "img/Goblet_Squat/1.jpg", "img/Hammer_Curls/0.jpg", "img/Hammer_Curls/1.jpg", "img/Incline_Dumbbell_Curl/0.jpg", "img/Incline_Dumbbell_Curl/1.jpg", "img/Incline_Dumbbell_Flyes/0.jpg", "img/Incline_Dumbbell_Flyes/1.jpg", "img/Incline_Dumbbell_Press/0.jpg", "img/Incline_Dumbbell_Press/1.jpg", "img/Lying_Dumbbell_Tricep_Extension/0.jpg", "img/Lying_Dumbbell_Tricep_Extension/1.jpg", "img/One-Arm_Dumbbell_Row/0.jpg", "img/One-Arm_Dumbbell_Row/1.jpg", "img/One-Arm_Side_Laterals/0.jpg", "img/One-Arm_Side_Laterals/1.jpg", "img/Plank/0.jpg", "img/Plank/1.jpg", "img/Power_Partials/0.jpg", "img/Power_Partials/1.jpg", "img/Reverse_Crunch/0.jpg", "img/Reverse_Crunch/1.jpg", "img/Round_The_World_Shoulder_Stretch/0.jpg", "img/Round_The_World_Shoulder_Stretch/1.jpg", "img/Seated_Bent-Over_Rear_Delt_Raise/0.jpg", "img/Seated_Bent-Over_Rear_Delt_Raise/1.jpg", "img/Seated_Dumbbell_Press/0.jpg", "img/Seated_Dumbbell_Press/1.jpg", "img/Seated_Triceps_Press/0.jpg", "img/Seated_Triceps_Press/1.jpg", "img/Side_Lateral_Raise/0.jpg", "img/Side_Lateral_Raise/1.jpg", "img/Split_Squat_with_Dumbbells/0.jpg", "img/Split_Squat_with_Dumbbells/1.jpg", "img/Standing_Dumbbell_Calf_Raise/0.jpg", "img/Standing_Dumbbell_Calf_Raise/1.jpg", "img/Standing_Dumbbell_Triceps_Extension/0.jpg", "img/Standing_Dumbbell_Triceps_Extension/1.jpg", "img/Stiff-Legged_Dumbbell_Deadlift/0.jpg", "img/Stiff-Legged_Dumbbell_Deadlift/1.jpg", "img/Stomach_Vacuum/0.jpg", "img/Stomach_Vacuum/1.jpg", "img/Straight-Arm_Dumbbell_Pullover/0.jpg", "img/Straight-Arm_Dumbbell_Pullover/1.jpg", "img/Trail_Running_Walking/0.jpg", "img/Trail_Running_Walking/1.jpg", "img/Worlds_Greatest_Stretch/0.jpg", "img/Worlds_Greatest_Stretch/1.jpg"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
    if (res.ok && new URL(e.request.url).origin === location.origin) {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return res;
  }).catch(() => caches.match('index.html'))));
});
