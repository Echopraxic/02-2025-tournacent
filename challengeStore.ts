import { create } from "zustand";
import { useTaskStore } from "./taskStore";

export const useChallengeStore = create(() => ({
  getVerifiedPoints: () =>
    useTaskStore
      .getState()
      .tasks.filter((t: any) => t.status === "verified")
      .reduce((sum: number, t: any) => sum + t.points, 0),

  place: 3,
}));
