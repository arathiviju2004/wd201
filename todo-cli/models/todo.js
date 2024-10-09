
// models/todo.js
'use strict';
const {
  Model,Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");
     

      console.log("Overdue");
      // FILL IN HERE
      const overdueTodos = await this.overdue();
      console.log(overdueTodos.map(todo => todo.displayableString()).join("\n"));
       //await this.overdue();
        
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      const dueTodayTodos = await this.dueToday();
      console.log(dueTodayTodos.map(todo => todo.displayableString()).join("\n"));
      console.log("\n");

      console.log("Due Later");
      // FILL IN HERE
      const dueLaterTodos = await this.dueLater();
      console.log(dueLaterTodos.map(todo => todo.displayableString()).join("\n"));
      
    }
 
    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
      
        try {
          const todos = await Todo.findAll({
            where: {
              dueDate: {
                [Op.lt]: new Date()  // Overdue tasks have a dueDate less than today
              }
            }
          });
          return todos
        } catch (error) {
          console.error(error);
        
    }
    
    }

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      
        try{
            const todos=await Todo.findAll({
              where: {
                dueDate:{
                  [Op.eq]: new Date()
                }                        
              }
            });
            return todos
            
        }catch(error){
            console.error(error);
        
    }
   
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      
        try{
            const todos=await Todo.findAll({
              where: {
                dueDate:{
                  [Op.gt]: new Date()
                }                        
              }
            });
            return todos
            
        }catch(error){
            console.error(error);
        }
    
   
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
      
        try{
            await Todo.update({completed:true},{
                where:{
                    id: id
                }
            });
        }catch(error){
            console.error(error);
        }
    
    
    }

    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return this.dueDate === new Date().toISOString().slice(0, 10)
        ? `${this.id}. ${checkbox} ${this.title}`
        : `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
      
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};


