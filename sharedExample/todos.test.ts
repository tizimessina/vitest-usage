import { describe, it, expect, beforeEach } from 'vitest';
import { TodoList } from './todos';

describe('TodoList', () => {
  let list: TodoList;

  beforeEach(() => {
    list = new TodoList();
  });

  it('adds a new task', () => {
    const todo = list.add('Learn testing');
    expect(todo).toEqual({ task: 'Learn testing', done: false });
    expect(list.getAll()).toHaveLength(1);
  });

  it('marks a task as complete', () => {
    list.add('Task 1');
    const updated = list.complete(0);
    expect(updated.done).toBe(true);
  });

  it('removes a task', () => {
    list.add('Task 1');
    const removed = list.remove(0);
    expect(removed.task).toBe('Task 1');
    expect(list.getAll()).toHaveLength(0);
  });

  it('throws if task is empty', () => {
    expect(() => list.add('')).toThrow('Task must be a non-empty string');
  });

  it('throws if index is invalid for complete', () => {
    expect(() => list.complete(5)).toThrow('Invalid index');
  });

  it('throws if index is invalid for remove', () => {
    expect(() => list.remove(2)).toThrow('Invalid index');
  });
});
