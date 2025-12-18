const p = require("prompt-sync")()

let tasks = []
let count = 1

while(true){
    console.log("--------------------To Do List------------------------");
    console.log("0. Quit");
    console.log("1. Display all tasks");
    console.log("2. Add a task");
    console.log("3. Search for a task");
    console.log("4. Update a task");
    console.log("5. Drop a task");
    console.log("6. Marquer une tâche comme terminée");
    console.log("7. Display tasks done / not yet");
    console.log("------------------------------------------------------");
    let choice = Number(p("Donner un nombre : "))
    
    switch(true){
        case choice===0 : process.exit()
        case choice===1 : displayAll(); break
        case choice===2 : addTask(); break
        case choice===3 : searchTask(); break
        case choice===4 : updateTask(); break
        case choice===5 : dropTask(); break
        case choice===6 : ToDone(); break
        case choice===7 : done_Or_NotYet(); break
    }
}

function addTask(){
    let id = count++
    let description = p("Write a description : ")
    const newTask = {
        id : id,
        description : description,
        isDone : false
    }
    if(newTask.isDone === false){
        newTask.isDone = "NOT YET"        
    }
    tasks.push(newTask)
    console.log("Task added successfully.");
}

function displayAll(){
    if(tasks.length>0){
        console.log("------------------------Done---------------------------");
        console.log(tasks.filter((task)=>task.isDone==="DONE"));
        console.log("-----------------------Not yet-----------------------");
        console.log(tasks.filter((task)=>task.isDone==="NOT YET"));
    }else{
        console.log("There is no tasks for the moment !");
    }
}

function searchTask(){
    let title = p("Write the description of the task you want to search : ")
    let result = tasks.find((task)=>task.description===title)
    if(!result){
        console.log("Task not found !");
    }else{
        console.table(result);
    }
}

function updateTask(){
    let id = Number(p("Give the id's task you want to update : "))
    let result = tasks.find((task) => task.id===id)
    if(!result){
        console.log("The task you want to update doesn't exist ! ");
    }else{
        let newDescription = p("Write the new description : ")
        result.description = newDescription
        console.log("Task updated successfully.");        
    }
}

function dropTask(){
    let id = Number(p("Give the id's task you want to drop : "))
    let index = tasks.findIndex((task) => task.id===id)
    if(index === -1){
        console.log("The task you want to drop doesn't exist ! ");
    }else{
        tasks.splice(index, 1)
        console.log("Task deleted successfully.");        
    }
}

function done_Or_NotYet(){
    let choice = p("What tasks you want to display done / not yet : ").toLowerCase()
    if(choice === "done"){
        console.log("---------------------Tasks done----------------------");
        let done = tasks.filter((element) => element.isDone==="DONE")
        console.table(done)
    }else if(choice === "not yet"){
        console.log("---------------------Tasks not yet----------------------");
        let not_yet = tasks.filter((element) => element.isDone==="NOT YET")
        console.table(not_yet)
    }else{
        console.log("Please, write DONE / NOT YET to avoid the conflits");
    }
}

function ToDone(){
    let id = Number(p("Id's task you want to return done : "))
    let result = tasks.find((element) => element.id === id)
    result.isDone = "DONE"
    console.log("Status Changed to DONE");
}