import { log } from "console";
import inquirer from "inquirer";
let todo_list: string[] = [];
let while_condition: boolean = true;
while (while_condition === true) {
  let option = await inquirer.prompt([
    {
      type: "list",
      name: "user_option",
      message: "Select An Option",
      choices: ["Add", "Remove"],
    },
  ]);
  if (option.user_option === "Add") {
    let ans = await inquirer.prompt([
      {
        type: "input",
        name: "usr_ans",
        message: "Write Something To Add In The ToDo List.",
      },
    ]);
    if (ans.user_ans !== " ") {
      todo_list.push(ans.usr_ans);
      console.log(todo_list);
    } else {
      console.log("Please Write Something To Add In The ToDo List");
    }
  } else if (option.user_option === "Remove") {
    let removeOption = await inquirer.prompt([
      {
        type: "list",
        name: "remove_option",
        message: "Selct Option To Be Removed",
        choices: todo_list,
      },
    ]);
    let index_to_remove = todo_list.indexOf(removeOption.remove_option);
    if (index_to_remove >= 0) {
      todo_list.splice(index_to_remove, 1);
      console.log("You removed : ", removeOption.remove_option);
      console.log(todo_list);
    }
  }
  let final_ans = await inquirer.prompt([
    {
        type: "confirm",
        name : "selection",
        message : "Do You Want To Cotinue?",
        default : true

    } 

  ]);
  if (final_ans.selection === false){
    while_condition = false;

  }
}
console.log("Thankyoy For Using ToDo List");

