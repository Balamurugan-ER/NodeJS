//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo: function (){
        // tasks.tasks.forEach(element => {
        //     if(element.completed === false){
        //         console.log(element.text)
        //     }
        // });
        return this.tasks.filter((tasks)=> tasks.completed === false)
    }
}

console.log(tasks.getTasksToDo())