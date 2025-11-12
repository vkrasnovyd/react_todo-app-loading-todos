export enum TodoStatusOptions {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export const todoStatusOptions = Object.values(TodoStatusOptions);

export type TodoStatusOption = (typeof todoStatusOptions)[number];
