let todo = [];
let req = prompt("Enter your request: ");

while(true){
    if(req == 'quit'){
        console.log("Quitting the app.");
        break;
    }

    if(req == 'list'){
        console.log("_____________________");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("_____________________");
    }
    else if(req == 'add'){
        let task = prompt("Enter your task: ");
        todo.push(task);
        console.log("task added");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
    }
    else if(req == 'delete'){
        let ind = prompt("Enter number of task that you want to delete: ");
        todo.splice(ind,1)
        console.log("task deleted");
    }
    else{
        console.error("Wrong Request!");
    }

    req = prompt("Enter your request: ");
}
