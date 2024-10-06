const todoList=require('../todo');
let {all,markAsComplete,add,overdue,dueToday,dueLater,}=todoList();

describe("TodoList Test Suite",()=>{
    test("Should add new todo", () => {
        let todoItemCount = all.length; // Get the current count of todo items
        add({
            title: "new test code", // Different title to avoid duplication issues
            completed: false,
            dueDate: "2024-10-03"
        });
        expect(all.length).toBe(todoItemCount + 1); // Check if the length increased
    });

    test("Should check mark as complete", () => {
        expect(all[0].completed).toBe(false); // Initially not completed
        markAsComplete(0); // Mark the first todo as complete
        expect(all[0].completed).toBe(true); // Check if it was marked completed
    });
    test("Should check retrieval of overdue",()=>{
        const overdueTasks = overdue();
        expect(overdueTasks.length).toBe(1);
    });
    test("Should check retrieval of dueToday",()=>{
        const dueTodayTasks = dueToday();
        expect(dueTodayTasks.length).toBe(0); 
    });
    test("Should check retrieval of dueLater",()=>{
        const dueLaterTasks = dueLater();
        expect(dueLaterTasks.length).toBe(0); 
    });
});

  
