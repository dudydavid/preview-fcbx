export interface SessionData {
  session: number;
  deep_focus: number;
  focus_stamina: number;
  bounce_back: number;
  sweet_spot: number;
}

export interface LongitudinalData {
  spark: SessionData[];
  hyperfocuser: SessionData[];
  sprinter: SessionData[];
}

export const LONGITUDINAL_DATA: LongitudinalData = {
  spark: [
    { session: 1, deep_focus: 17.7, focus_stamina: 12.2, bounce_back: 23.3, sweet_spot: 11.0 },
    { session: 2, deep_focus: 16.0, focus_stamina: 10.9, bounce_back: 21.0, sweet_spot: 10.0 },
    { session: 3, deep_focus: 22.0, focus_stamina: 16.0, bounce_back: 28.1, sweet_spot: 12.0 },
    { session: 4, deep_focus: 28.5, focus_stamina: 21.4, bounce_back: 35.7, sweet_spot: 13.0 },
    { session: 5, deep_focus: 20.6, focus_stamina: 15.2, bounce_back: 26.0, sweet_spot: 12.0 },
    { session: 6, deep_focus: 22.3, focus_stamina: 16.7, bounce_back: 27.9, sweet_spot: 12.0 },
    { session: 7, deep_focus: 34.0, focus_stamina: 26.3, bounce_back: 41.8, sweet_spot: 15.0 },
    { session: 8, deep_focus: 31.3, focus_stamina: 24.2, bounce_back: 38.3, sweet_spot: 14.0 },
    { session: 9, deep_focus: 26.2, focus_stamina: 20.3, bounce_back: 32.1, sweet_spot: 14.0 },
    { session: 10, deep_focus: 33.5, focus_stamina: 26.4, bounce_back: 40.6, sweet_spot: 15.0 },
    { session: 11, deep_focus: 29.7, focus_stamina: 23.5, bounce_back: 35.9, sweet_spot: 15.0 },
    { session: 12, deep_focus: 31.4, focus_stamina: 25.0, bounce_back: 37.8, sweet_spot: 15.0 },
    { session: 13, deep_focus: 37.0, focus_stamina: 29.7, bounce_back: 44.4, sweet_spot: 16.0 },
    { session: 14, deep_focus: 26.9, focus_stamina: 21.8, bounce_back: 32.0, sweet_spot: 15.0 },
    { session: 15, deep_focus: 29.7, focus_stamina: 24.1, bounce_back: 35.2, sweet_spot: 15.0 },
    { session: 16, deep_focus: 37.8, focus_stamina: 30.8, bounce_back: 44.7, sweet_spot: 17.0 },
    { session: 17, deep_focus: 37.0, focus_stamina: 30.4, bounce_back: 43.7, sweet_spot: 17.0 },
    { session: 18, deep_focus: 46.0, focus_stamina: 37.8, bounce_back: 54.3, sweet_spot: 19.0 },
    { session: 19, deep_focus: 41.0, focus_stamina: 33.9, bounce_back: 48.1, sweet_spot: 18.0 },
    { session: 20, deep_focus: 40.0, focus_stamina: 33.3, bounce_back: 46.7, sweet_spot: 18.0 },
    { session: 21, deep_focus: 57.5, focus_stamina: 47.5, bounce_back: 67.6, sweet_spot: 22.0 },
    { session: 22, deep_focus: 50.0, focus_stamina: 41.6, bounce_back: 58.3, sweet_spot: 21.0 },
    { session: 23, deep_focus: 53.3, focus_stamina: 44.4, bounce_back: 62.2, sweet_spot: 21.0 },
    { session: 24, deep_focus: 46.8, focus_stamina: 39.4, bounce_back: 54.2, sweet_spot: 20.0 },
    { session: 25, deep_focus: 53.4, focus_stamina: 44.8, bounce_back: 61.9, sweet_spot: 22.0 },
    { session: 26, deep_focus: 58.7, focus_stamina: 49.3, bounce_back: 68.1, sweet_spot: 23.0 },
    { session: 27, deep_focus: 53.5, focus_stamina: 45.3, bounce_back: 61.7, sweet_spot: 22.0 },
    { session: 28, deep_focus: 63.6, focus_stamina: 53.5, bounce_back: 73.7, sweet_spot: 24.0 },
    { session: 29, deep_focus: 60.0, focus_stamina: 50.8, bounce_back: 69.1, sweet_spot: 24.0 },
    { session: 30, deep_focus: 63.4, focus_stamina: 53.7, bounce_back: 73.1, sweet_spot: 25.0 },
  ],
  hyperfocuser: [
    { session: 1, deep_focus: 40.9, focus_stamina: 30.7, bounce_back: 11.1, sweet_spot: 15.0 },
    { session: 2, deep_focus: 38.6, focus_stamina: 29.4, bounce_back: 7.9, sweet_spot: 15.0 },
    { session: 3, deep_focus: 42.3, focus_stamina: 32.7, bounce_back: 11.9, sweet_spot: 16.0 },
    { session: 4, deep_focus: 43.5, focus_stamina: 34.2, bounce_back: 12.9, sweet_spot: 17.0 },
    { session: 5, deep_focus: 50.2, focus_stamina: 40.0, bounce_back: 20.5, sweet_spot: 19.0 },
    { session: 6, deep_focus: 47.5, focus_stamina: 38.3, bounce_back: 16.9, sweet_spot: 19.0 },
    { session: 7, deep_focus: 52.5, focus_stamina: 42.8, bounce_back: 22.4, sweet_spot: 21.0 },
    { session: 8, deep_focus: 59.6, focus_stamina: 48.9, bounce_back: 30.5, sweet_spot: 22.0 },
    { session: 9, deep_focus: 58.8, focus_stamina: 48.7, bounce_back: 29.1, sweet_spot: 23.0 },
    { session: 10, deep_focus: 54.6, focus_stamina: 45.8, bounce_back: 23.7, sweet_spot: 22.0 },
    { session: 11, deep_focus: 56.7, focus_stamina: 48.0, bounce_back: 25.8, sweet_spot: 23.0 },
    { session: 12, deep_focus: 61.3, focus_stamina: 52.1, bounce_back: 30.9, sweet_spot: 25.0 },
    { session: 13, deep_focus: 55.7, focus_stamina: 48.1, bounce_back: 23.7, sweet_spot: 24.0 },
    { session: 14, deep_focus: 60.3, focus_stamina: 52.2, bounce_back: 28.8, sweet_spot: 26.0 },
    { session: 15, deep_focus: 66.8, focus_stamina: 57.9, bounce_back: 36.2, sweet_spot: 27.0 },
    { session: 16, deep_focus: 66.5, focus_stamina: 58.1, bounce_back: 35.3, sweet_spot: 28.0 },
    { session: 17, deep_focus: 75.5, focus_stamina: 65.8, bounce_back: 45.7, sweet_spot: 30.0 },
    { session: 18, deep_focus: 68.3, focus_stamina: 60.5, bounce_back: 36.7, sweet_spot: 29.0 },
    { session: 19, deep_focus: 68.6, focus_stamina: 61.2, bounce_back: 36.6, sweet_spot: 30.0 },
    { session: 20, deep_focus: 71.0, focus_stamina: 63.5, bounce_back: 39.0, sweet_spot: 31.0 },
    { session: 21, deep_focus: 75.9, focus_stamina: 68.0, bounce_back: 44.5, sweet_spot: 32.0 },
    { session: 22, deep_focus: 77.1, focus_stamina: 69.4, bounce_back: 45.5, sweet_spot: 33.0 },
    { session: 23, deep_focus: 87.3, focus_stamina: 78.0, bounce_back: 57.3, sweet_spot: 36.0 },
    { session: 24, deep_focus: 79.8, focus_stamina: 72.5, bounce_back: 48.0, sweet_spot: 35.0 },
    { session: 25, deep_focus: 83.2, focus_stamina: 75.7, bounce_back: 51.6, sweet_spot: 36.0 },
    { session: 26, deep_focus: 87.9, focus_stamina: 79.9, bounce_back: 56.8, sweet_spot: 37.0 },
    { session: 27, deep_focus: 86.2, focus_stamina: 79.0, bounce_back: 54.4, sweet_spot: 37.0 },
    { session: 28, deep_focus: 90.4, focus_stamina: 82.8, bounce_back: 58.9, sweet_spot: 39.0 },
    { session: 29, deep_focus: 91.6, focus_stamina: 84.2, bounce_back: 59.9, sweet_spot: 39.0 },
    { session: 30, deep_focus: 94.9, focus_stamina: 87.3, bounce_back: 63.5, sweet_spot: 41.0 },
  ],
  sprinter: [
    { session: 1, deep_focus: 17.0, focus_stamina: 2.6, bounce_back: 46.4, sweet_spot: 5.0 },
    { session: 2, deep_focus: 26.5, focus_stamina: 10.4, bounce_back: 57.9, sweet_spot: 6.0 },
    { session: 3, deep_focus: 27.4, focus_stamina: 11.4, bounce_back: 59.1, sweet_spot: 7.0 },
    { session: 4, deep_focus: 17.2, focus_stamina: 3.5, bounce_back: 47.0, sweet_spot: 5.0 },
    { session: 5, deep_focus: 19.0, focus_stamina: 5.1, bounce_back: 49.2, sweet_spot: 5.0 },
    { session: 6, deep_focus: 19.2, focus_stamina: 5.5, bounce_back: 49.5, sweet_spot: 5.0 },
    { session: 7, deep_focus: 34.7, focus_stamina: 18.2, bounce_back: 68.2, sweet_spot: 9.0 },
    { session: 8, deep_focus: 28.8, focus_stamina: 13.7, bounce_back: 61.3, sweet_spot: 7.0 },
    { session: 9, deep_focus: 29.4, focus_stamina: 14.5, bounce_back: 62.2, sweet_spot: 8.0 },
    { session: 10, deep_focus: 33.1, focus_stamina: 17.6, bounce_back: 66.6, sweet_spot: 9.0 },
    { session: 11, deep_focus: 28.2, focus_stamina: 14.0, bounce_back: 60.9, sweet_spot: 8.0 },
    { session: 12, deep_focus: 32.6, focus_stamina: 17.7, bounce_back: 66.2, sweet_spot: 9.0 },
    { session: 13, deep_focus: 29.7, focus_stamina: 15.7, bounce_back: 62.9, sweet_spot: 8.0 },
    { session: 14, deep_focus: 38.1, focus_stamina: 22.6, bounce_back: 73.1, sweet_spot: 10.0 },
    { session: 15, deep_focus: 33.1, focus_stamina: 18.9, bounce_back: 67.2, sweet_spot: 9.0 },
    { session: 16, deep_focus: 39.5, focus_stamina: 24.3, bounce_back: 75.0, sweet_spot: 10.0 },
    { session: 17, deep_focus: 43.6, focus_stamina: 27.7, bounce_back: 79.9, sweet_spot: 11.0 },
    { session: 18, deep_focus: 40.0, focus_stamina: 25.1, bounce_back: 75.8, sweet_spot: 11.0 },
    { session: 19, deep_focus: 45.0, focus_stamina: 29.4, bounce_back: 81.9, sweet_spot: 12.0 },
    { session: 20, deep_focus: 38.1, focus_stamina: 24.1, bounce_back: 73.7, sweet_spot: 11.0 },
    { session: 21, deep_focus: 39.4, focus_stamina: 25.3, bounce_back: 75.3, sweet_spot: 11.0 },
    { session: 22, deep_focus: 46.2, focus_stamina: 31.0, bounce_back: 83.6, sweet_spot: 12.0 },
    { session: 23, deep_focus: 45.7, focus_stamina: 30.9, bounce_back: 83.1, sweet_spot: 12.0 },
    { session: 24, deep_focus: 42.1, focus_stamina: 28.2, bounce_back: 78.9, sweet_spot: 12.0 },
    { session: 25, deep_focus: 47.0, focus_stamina: 32.4, bounce_back: 84.9, sweet_spot: 13.0 },
    { session: 26, deep_focus: 55.0, focus_stamina: 39.0, bounce_back: 94.6, sweet_spot: 15.0 },
    { session: 27, deep_focus: 48.6, focus_stamina: 34.1, bounce_back: 87.0, sweet_spot: 13.0 },
    { session: 28, deep_focus: 52.7, focus_stamina: 37.7, bounce_back: 92.0, sweet_spot: 14.0 },
    { session: 29, deep_focus: 52.2, focus_stamina: 37.5, bounce_back: 91.6, sweet_spot: 14.0 },
    { session: 30, deep_focus: 55.8, focus_stamina: 40.6, bounce_back: 95.9, sweet_spot: 15.0 },
  ],
};

export type ChildTypology = keyof LongitudinalData;
export type MetricKey = "deep_focus" | "focus_stamina" | "bounce_back" | "sweet_spot";

export const TYPOLOGY_INFO: Record<ChildTypology, { name: string; label: string; description: string }> = {
  spark: {
    name: "The Spark",
    label: "Quick-Start / Inattentive",
    description:
      "Starts homework with a burst of energy, but loses focus the moment a bird flies by. Struggles to re-engage once the 'spark' is gone.",
  },
  hyperfocuser: {
    name: "The Hyperfocuser",
    label: "The Deep Diver",
    description:
      "Takes forever to 'warm up' and pick up the pencil. But once they are in the zone, they are untouchable. Interruption causes a total session crash.",
  },
  sprinter: {
    name: "The Restless Sprinter",
    label: "High Energy / Frequent Breaks",
    description:
      "Intense focus in short bursts. Needs frequent 'pit stops' (breaks) to stay sane. High recovery power, but a small focus gas tank.",
  },
};

export const METRIC_INFO: Record<MetricKey, { name: string; analogy: string; description: string; color: string }> = {
  deep_focus: {
    name: "Deep Focus Mode",
    analogy: "The Airplane Mode for the Brain",
    description:
      "Measures how deeply your child is 'in the zone,' where learning actually happens.",
    color: "#2563EB",
  },
  focus_stamina: {
    name: "Focus Stamina",
    analogy: "The Focus Gas Tank",
    description:
      "How long your child can keep attention on one task before needing a refill. We grow this tank week by week.",
    color: "#10B981",
  },
  bounce_back: {
    name: "Bounce-Back Power",
    analogy: "The Resilience Muscle",
    description:
      "Distractions happen. This measures how quickly your child ignores a thought and gets right back to work.",
    color: "#F59E0B",
  },
  sweet_spot: {
    name: "The Sweet Spot",
    analogy: "The Perfect Challenge",
    description:
      "Like a video game level—not too easy, not too hard. The exact duration needed to push growth without burnout.",
    color: "#8B5CF6",
  },
};
