import { create } from "zustand";

export type TaskStatus =
  | "incomplete"
  | "completed"
  | "verifying"
  | "verified"
  | "denied";

export const useTaskStore = create((set: any, get: any) => ({
  tasks: [
    {
      id: "1",
      title: "No takeout spending",
      points: 10,
      deadline: Date.now() + 2 * 86400000,
      status: "incomplete" as TaskStatus,
    },
    {
      id: "2",
      title: "Groceries under $75",
      points: 15,
      deadline: Date.now() + 4 * 86400000,
      status: "incomplete" as TaskStatus,
    },
  ],

  completeTask: (id: string) =>
    set((state: any) => ({
      tasks: state.tasks.map((t: any) =>
        t.id === id ? { ...t, status: "completed" } : t
      ),
    })),

  verifyTask: async (id: string) => {
    set((state: any) => ({
      tasks: state.tasks.map((t: any) =>
        t.id === id ? { ...t, status: "verifying" } : t
      ),
    }));

    // MOCK API CALL
    const result = Math.random() > 0.3 ? "verified" : "denied";

    set((state: any) => ({
      tasks: state.tasks.map((t: any) =>
        t.id === id ? { ...t, status: result } : t
      ),
    }));
  },

  nextTask: () =>
    get()
      .tasks.filter((t: any) => t.status === "incomplete")
      .sort((a: any, b: any) => a.deadline - b.deadline)[0],
}));
