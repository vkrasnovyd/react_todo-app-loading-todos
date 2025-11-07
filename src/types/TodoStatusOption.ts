export const todoStatusOptions = ['all', 'active', 'completed'] as const;

export type TodoStatusOption = (typeof todoStatusOptions)[number];
