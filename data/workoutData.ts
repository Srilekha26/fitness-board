// src/data/workoutData.ts
import { WorkoutDay } from "../types/workout";

const workoutData: WorkoutDay[] = [
  {
    day: "Day 1 – Legs + Shoulders",
    warmup: [
      { name: "Jumping Jacks", reps: "60s", muscles: "Full Body", gif:"https://liftmanual.com/wp-content/uploads/2023/04/jumping-jack.webp" },
      { name: "Arm Circles ", reps: "60s", muscles: "Shoulders", gif: "https://liftmanual.com/wp-content/uploads/2023/04/arm-circles.webp" },
      { name: "Leg Swings", reps: "60s", muscles: "Hips", gif: "https://liftmanual.com/wp-content/uploads/2023/04/side-to-side-leg-swings.webp" },
      { name: "World's Greatest Stretch", reps: "60s", muscles: "Hips, Thoracic Spine", gif:"https://liftmanual.com/wp-content/uploads/2023/04/worlds-greatest-stretch.webp" }
    ],
    foundational: [
      { name: "Glute Bridge (Weighted)", reps: "15 reps", muscles: "Glutes, Core, Lower Back", gif: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-glute-bridge.webp", purpose: "Activate glutes before squats & lunges" },
    { name: "Wall Slides", reps: "12 reps", muscles: "Shoulders, Scapular Control", purpose: "Improve scapular mobility for pressing overhead", gif: "data:image/jpeg;base64,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" },
      { name: "Bird Dog", reps: "10 reps/side", muscles: "Core, Glutes, Spine Stabilizers", purpose: "Activate deep core stabilizers before compound lifts", gif: "https://liftmanual.com/wp-content/uploads/2023/04/resistance-band-bird-dog.webp" },
      { name: "Lateral Band Walk", reps: "10 steps each side", muscles: "Glute Medius, Hips", purpose: "Strengthen lateral hip stabilizers", gif:"https://liftmanual.com/wp-content/uploads/2023/04/resistance-band-lateral-walk.gif" }
    ],
    blockA: [
      { name: "Goblet Squats", reps: "12 reps", muscles: "Quads, Glutes, Core", gif:"https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-goblet-squat.gif" },
      { name: "Dumbbell Overhead Press", reps: "10 reps", muscles: "Deltoids, Triceps, Core", gif: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-overhead-press.webp" },
      { name: "Romanian Dead lift", reps: "10", muscles: "Glutes, Hamstrings, Thighs, Core", gif: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-romanian-deadlift.gif" }
    ],
    blockB: [
      { name: "Bulgarian Split Squat", reps: "10/leg", muscles: "Quads, Glutes, Balance", gif: "https://liftmanual.com/wp-content/uploads/2023/04/bulgarian-split-squat.webp",  },
      { name: "Arnold Press", reps: "10 reps", muscles: "Deltoids (all heads), Core", gif: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-arnold-press.gif" },
      { name: "Lateral Raises", reps: "12 reps", muscles: "Lateral Deltoids", gif: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-lateral-raise.webp" }
    ],
    finisher: [
      { name: "Hollow Hold", reps: "30s", muscles: "Core", gif: "https://liftmanual.com/wp-content/uploads/2023/04/hollow-hold.webp" },
      { name: "Shoulder Taps", reps: "20 taps", muscles: "Core, Shoulders", gif: "https://liftmanual.com/wp-content/uploads/2023/04/shoulder-tap.webp" },
      { name: "Standing Calf Raises", reps: "20 reps", muscles: "Calves", gif: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-calf-raise.webp" }
    ],
   cooldown: [
    
  {
    name: "Standing Quad Stretch",
    reps: "30s/side",
    muscles: "Quads",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/standing-quadriceps-stretch.webp"
  },
  {
    name: "Arm up rotator cuff stretch",
    reps: "30s/side",
    muscles: "Shoulders",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/arm-up-rotator-stretch.gif"
  },
  {
    name: "Standing Calves Stretch",
    reps: "30s/side",
    muscles: "Calves",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/calves-stretch.webp"
  },
  {
    name: "Downward Dog",
    reps: "30s/side",
    muscles: "Hamstrings",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/downward-facing-dog-adho-mukha-svanasana.webp"
  },
  {
    name: "Standing Shoulder Stretch",
    reps: "30s/side",
    muscles: "Shoulders",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/bent-arm-shoulder-stretch.gif"
  },
  {
  name: "Kneeling Hip Flexor Stretch",
  reps: "30s/side",
  muscles: "Hip Flexors, Quads",
  gif: "https://liftmanual.com/wp-content/uploads/2023/04/kneeling-hip-flexor-stretch.webp"
},
  {
    name: "Forward Fold",
    reps: "45s",
    muscles: "Hamstrings, Lower Back",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/stand-spread-leg-forward-fold.webp"
  },
  {
    name: "Pigeon Stretch",
    reps: "30s/side",
    muscles: "Glutes, Hip Rotators",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/pigeon-hip-stretch.gif"
  },
  {
    name: "Thread the Needle Stretch",
    reps: "45s",
    muscles: "Shoulders",
    gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/09/thread-the-needle-stretch.gif"
  },
  {
    name: "Butterfly Stretch",
    reps: "45s",
    muscles: "Inner thighs",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/butterfly-yoga-pose.webp"
  },
  {
    name: "Child’s Pose",
    reps: "45s",
    muscles: "Lower Back, Hips",
    gif: "https://liftmanual.com/wp-content/uploads/2023/04/child-pose.webp"
  }
]

  },
  {
    day: "Day 2 – Chest + Triceps",
    warmup: [
      { name: "High Knees", reps: "30s", muscles: "Cardio, Core Activation", gif: "https://liftmanual.com/wp-content/uploads/2023/04/high-knee-sprints.webp" },
      { name: "Arm Circles ", reps: "60s", muscles: "Shoulders", gif: "https://liftmanual.com/wp-content/uploads/2023/04/arm-circles.webp" },
      { name: "Bear Crawl", reps: "30s", muscles: " In table top, with kness lifted, begin to move forward by taking a step with your right hand and left foot simultaneously and followed by other set", gif: "https://liftmanual.com/wp-content/uploads/2023/04/bear-crawl.webp",  },
      { name: "Wall Slides", reps: "12 reps", muscles: "Shoulders, Scapular Control", purpose: "Improve scapular mobility for pressing overhead", gif: "data:image/jpeg;base64,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" },
    ],
    foundational: [
      { name: "Wall Angels", reps: "10 reps", muscles: "Upper Back, Shoulder Mobility", purpose: "Prime upper back and scapula for pressing" },
      { name: "Scapular Pushups", reps: "12 reps", muscles: "Serratus, Chest", purpose: "Pre-activate scapular stabilizers" },
      { name: "Dead Bug", reps: "10/side", muscles: "Core, Hip Flexors", purpose: "Stabilize core before pressing" },
      { name: "Chest Opener with Band", reps: "10 reps", muscles: "Chest, Shoulders", purpose: "Mobilize anterior chain" }
    ],
    blockA: [
      { name: "Dumbbell Chest Press", reps: "10 reps", muscles: "Chest, Triceps, Shoulders" },
      { name: "Push-Ups", reps: "12 reps", muscles: "Chest, Triceps, Core" },
      { name: "Dumbbell Floor Press", reps: "10 reps", muscles: "Chest, Triceps" }
    ],
    blockB: [
      { name: "Tricep Kickbacks", reps: "12 reps", muscles: "Triceps" },
      { name: "Incline DB Press", reps: "10 reps", muscles: "Upper Chest, Shoulders" },
      { name: "Overhead Tricep Extension", reps: "12 reps", muscles: "Triceps, Shoulders" }
    ],
    finisher: [
      { name: "Close-Grip Push-ups to Failure", reps: "Max", muscles: "Triceps, Chest" },
      { name: "Triceps Dips on Bench", reps: "15 reps", muscles: "Triceps" }
    ],
    cooldown: [
      { name: "Chest Opener Stretch on Wall", reps: "45s", muscles: "Chest, Shoulders" },
      { name: "Thread the Needle", reps: "45s", muscles: "Upper Back, Rotators" }
    ]
  },
  {
    day: "Day 3 – Back + Biceps",
    warmup: [
      { name: "Arm Circles + Jump Rope", reps: "60s", muscles: "Full Body Warmup" },
      { name: "Cat Cow + Scapular Slides", reps: "30s", muscles: "Spine, Upper Back" }
    ],
    foundational: [
      { name: "YTW Raises", reps: "10 reps", muscles: "Upper Back, Posture", purpose: "Improve scapular posture and mobility" },
      { name: "Hip Hinge Drill", reps: "10 reps", muscles: "Hamstrings, Glutes", purpose: "Preps hinge movement for RDLs" },
      { name: "Band Pull-Aparts", reps: "15 reps", muscles: "Mid Traps, Rhomboids" }
    ],
    blockA: [
      { name: "One Arm DB Row", reps: "10 reps/side", muscles: "Lats, Rhomboids" },
      { name: "Dumbbell RDL", reps: "12 reps", muscles: "Hamstrings, Glutes, Back" },
      { name: "Chest Supported DB Row", reps: "10 reps", muscles: "Upper Back" }
    ],
    blockB: [
      { name: "Hammer Curls", reps: "12 reps", muscles: "Biceps, Forearms" },
      { name: "Reverse Fly", reps: "10 reps", muscles: "Rear Delts, Upper Back" },
      { name: "Concentration Curl", reps: "12 reps", muscles: "Biceps" }
    ],
    finisher: [
      { name: "Renegade Row Hold", reps: "20s", muscles: "Core, Back, Arms" },
      { name: "Bicep Curl to Press", reps: "15 reps", muscles: "Biceps, Shoulders" }
    ],
    cooldown: [
      { name: "Thread the Needle Stretch", reps: "45s", muscles: "Upper Back, Shoulders" },
      { name: "Seated Forward Bend", reps: "45s", muscles: "Hamstrings, Spine" }
    ]
  }
];

export default workoutData;
