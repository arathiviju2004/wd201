const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
        
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      let overdueList=[];
      all.map((item)=>{
        if (item.dueDate===yesterday){
            overdueList.push(item);
        }
      })
      return overdueList;
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      let duetodayList=[];
      all.map((item)=>{
        if (item.dueDate===today){
            duetodayList.push(item);
        }
      })
      return duetodayList;
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      let dueLaterList=[];
      all.map((item)=>{
        if (item.dueDate===tomorrow){
            dueLaterList.push(item);
        }
      })
      return dueLaterList;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      let str=""
      let n=list.length-1;
      let i=0;
      list.map((item)=>{
        if (item.dueDate===yesterday || item.dueDate===tomorrow ){
            i++;
            if(item.completed===false){
                str=str+"[ ]"+ ` ${item.title}`+` ${item.dueDate}`
            }else{
                str=str+"[x]"+ ` ${item.title}`+` ${item.dueDate}`
            
            }
        
      }else{
        i++;
        if(item.completed===false){
            str=str+"[ ]"+ ` ${item.title}`
        }else{
            str=str+"[x]"+ ` ${item.title}`
        }
      }
      if(i<=n){
      str=str+"\n";}
    })
      
      return str;

    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
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
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
 module.exports=todoList;
