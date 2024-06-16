import inquirer from "inquirer";
import chalk from "chalk";

let todo: string[] = [];
let nextAction = true;

while (nextAction) {
    if (todo.length === 0) {
        let todoItem = await inquirer.prompt({
            name: "item",
            message: chalk.yellow("Enter the item you want to input in todo: "),
            type: "input"
        });
        todo.push(todoItem.item);
    }

    let nexttodoItem = await inquirer.prompt({
        name: "option",
        message: chalk.blue("Please select what you want to do with the todo list"),
        type: "list",
        choices: [
            chalk.green("View"),
            chalk.cyan("Add"),
            chalk.red("Delete"),
            chalk.yellow("Exit")
        ]
    });

    if (nexttodoItem.option === chalk.green("View")) {
        console.log(chalk.green("Todo items: ") + todo);
    } else if (nexttodoItem.option === chalk.cyan("Add")) {
        let addItem = await inquirer.prompt({
            name: "item",
            message: chalk.cyan("Enter the item you want to input in todo: "),
            type: "input"
        });
        todo.push(addItem.item);
        console.log(chalk.green("Item added successfully."));
    } else if (nexttodoItem.option === chalk.red("Delete")) {
        let indexToDelete = await inquirer.prompt({
            name: "index",
            message: chalk.cyan("Enter the index of the item you want to delete in todo: "),
            type: "input"
        });
        const index = parseInt(indexToDelete.index);
        if (!isNaN(index) && index >= 0 && index < todo.length) {
            todo.splice(index, 1);
            console.log(chalk.green("Item deleted successfully."));
        } else {
            console.log(chalk.red.bold("Please enter a valid index number"));
        }
    } else if (nexttodoItem.option === chalk.yellow("Exit")) {
        nextAction = false;
        console.log(chalk.yellow("Exiting the program..."));
    }
}
