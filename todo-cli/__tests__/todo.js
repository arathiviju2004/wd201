const todoList=require('../todo');
const {all,markAsComplete,add,overdue,dueToday,dueLater,}=todoList();

describe("TodoList Test Suite",()=>{
    beforeAll(()=>{
        add({title:"test code",
            completed:false,
           dueDate:new Date().toISOString().slice(0,10)
          });
    })
    test("Should add new todo",()=>{
        const todoItemCount=all.length;
        add({title:"test code",
              completed:false,
             dueDate:new Date().toISOString().slice(0,10)
            });
        expect(all.length).toBe(todoItemCount+1)
    });
    test("Should check mark as complete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });
    test("Should check retrieval of overdue",()=>{
        expect(overdue).toBe(overdue);
    });
    test("Should check retrieval of dueToday",()=>{
        expect(dueToday).toBe(dueToday);
    });
    test("Should check retrieval of dueLater",()=>{
        expect(dueLater).toBe(dueLater);
    });
});