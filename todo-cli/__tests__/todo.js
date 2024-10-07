/* eslint-disable no-undef */
const todoList=require('../todo');
const {all,markAsComplete,add,overdue,dueToday,dueLater}=todoList();

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

describe("TodoList Test Suite",()=>{
   
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
        let todoItemCount=overdue().length;
        add({title:"test code2",
            completed:false,
           dueDate:yesterday
          });
        
        expect(overdue().length).toBe(todoItemCount+1);
    });
    test("Should check retrieval of dueToday",()=>{
        let todoItemCount=dueToday().length;
        add({title:"test code2",
            completed:false,
           dueDate:today
          });
        
        expect(dueToday().length).toBe(todoItemCount+1);
        
    });
    test("Should check retrieval of dueLater",()=>{
        let todoItemCount=dueLater().length;
        add({title:"test code2",
            completed:false,
           dueDate:tomorrow
          });
          
        
        expect(dueLater().length).toBe(todoItemCount+1);
  
    });
});
  
