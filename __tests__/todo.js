/* eslint-disable no-undef */
const todoList = require("../todo");
let today = new Date().toLocaleDateString("en-CA");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todo list Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test Case",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("to add new todo", () => {
    let totalItems = all.length;
    add({
      title: "Testing Cases",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(totalItems + 1);
  });
  test("markAsComplete test case", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("todos that are overdue", () => {
    let lists = overdue();
    expect(
      lists.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });
  test("todos that are dueToday", () => {
    let lists = dueToday();
    expect(
      lists.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });
  test("todos that are dueLater", () => {
    let lists = dueLater();
    expect(
      lists.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
