/* eslint-disable no-undef */
const todoList = require('../todo');
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
    new Date(dateToday.setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
    new Date(new Date().setDate(new Date().getDate() + 1))
);

describe("TodoList Test Suite", () => {

    test("Should add new todo", () => {
        const todoItemCount = all.length; // Get the current count of todo items
        add({
            title: "new test code", // Different title to avoid duplication issues
            completed: false,
            dueDate: today
        });
        expect(all.length).toBe(todoItemCount + 1); // Check if the length increased
    });

    test("Should check mark as complete", () => {
        expect(all[0].completed).toBe(false); // Initially not completed
        markAsComplete(0); // Mark the first todo as complete
        expect(all[0].completed).toBe(true); // Check if it was marked completed
    });

    test("Should check retrieval of overdue", () => {
        let todoItemCount = overdue().length;
        add({
            title: "test code2",
            completed: false,
            dueDate: yesterday
        });
        expect(overdue().length).toBe(todoItemCount + 1);
    });

    test("Should check retrieval of dueToday", () => {
        let todoItemCount = dueToday().length;
        add({
            title: "test code2",
            completed: false,
            dueDate: today
        });
        expect(dueToday().length).toBe(todoItemCount + 1);
    });

    test("Should check retrieval of dueLater", () => {
        let todoItemCount = dueLater().length;
        add({
            title: "test code2",
            completed: false,
            dueDate: tomorrow
        });
        expect(dueLater().length).toBe(todoItemCount + 1);
    });
});
