import chalk from "chalk";
import fs from "fs";

// let tasks=process.argv.slice(2);

// let list=(tasks)=>{
//     for(let i of tasks)
//         console.log(chalk.green(i));
// }

// console.log(chalk.red("Your Tasks"));
// list(tasks);

//let us make a load function which loads the tasks which are currently present from the tasks files to a array task 
 let loadTask = ()=>
 {
    if(!fs.existsSync("tasks.json"))
        return [];
    else
    {
        //let us get the content or data of the file 
        let data = fs.readFileSync("tasks.json","utf-8");

        //first we will pare the given JSON file to text
        data=JSON.parse(data);

        //now we will return this array
        return data;
    }
 }

let task=loadTask();

let add=(str)=>{
    task.push(str);
}

let del=(num)=>{
    task.splice(num,1);
}

let list=(task)=>{
    if(task.length==0)
    {
        console.log(chalk.green("No Tasks"));
    }
    else 
        {
            console.log(chalk.red("Your Tasks"));
        for ( let i of task)
        console.log(chalk.green(i));
        }
}

switch(process.argv[2])
{
    case "add":
        {
            add(process.argv[3]);
            break;
        };

    case "remove":
        {
            del(process.argv[3]);
            break;
        }
    
    case "list":
        {
            list(task);
            break;
        }
}

//now we shall save it also 
let save=(task)=>{
    fs.writeFileSync("tasks.json",JSON.stringify(task));
}

save(task);