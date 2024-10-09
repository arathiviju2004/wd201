const { request } = require('express')
const express = require('express')
const app = express()

app.get("/todos",(request,response)=>{
    //response.send("helloworld")
    console.log("Todo List")
})

app.post("/todos",(request,response)=>{
    console.log("Creating a todo",request.body)
})
app.put("/todos/:id?markAsCompleted",(request,response)=>{
    console.log("we have to update a todo",request.params.id)
})
app.delete("/todos/:id",(request,response)=>{
    console.log("Delete a todo by id :",request.params.id)
})

app.listen(3000,()=>{
    console.log("started express")
})