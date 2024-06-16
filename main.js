"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let todo = [];
let nextAction = true;
while (nextAction) {
    if (todo.length === 0) {
        let todoItem = await inquirer_1.default.prompt({
            name: "item",
            message: chalk_1.default.yellow("Enter the item you want to input in todo: "),
            type: "input"
        });
        todo.push(todoItem.item);
    }
    let nexttodoItem = await inquirer_1.default.prompt({
        name: "option",
        message: chalk_1.default.blue("Please select what you want to do with the todo list"),
        type: "list",
        choices: [
            chalk_1.default.green("View"),
            chalk_1.default.cyan("Add"),
            chalk_1.default.red("Delete"),
            chalk_1.default.yellow("Exit")
        ]
    });
    if (nexttodoItem.option === chalk_1.default.green("View")) {
        console.log(chalk_1.default.green("Todo items: ") + todo);
    }
    else if (nexttodoItem.option === chalk_1.default.cyan("Add")) {
        let addItem = await inquirer_1.default.prompt({
            name: "item",
            message: chalk_1.default.cyan("Enter the item you want to input in todo: "),
            type: "input"
        });
        todo.push(addItem.item);
        console.log(chalk_1.default.green("Item added successfully."));
    }
    else if (nexttodoItem.option === chalk_1.default.red("Delete")) {
        let indexToDelete = await inquirer_1.default.prompt({
            name: "index",
            message: chalk_1.default.cyan("Enter the index of the item you want to delete in todo: "),
            type: "input"
        });
        const index = parseInt(indexToDelete.index);
        if (!isNaN(index) && index >= 0 && index < todo.length) {
            todo.splice(index, 1);
            console.log(chalk_1.default.green("Item deleted successfully."));
        }
        else {
            console.log(chalk_1.default.red.bold("Please enter a valid index number"));
        }
    }
    else if (nexttodoItem.option === chalk_1.default.yellow("Exit")) {
        nextAction = false;
        console.log(chalk_1.default.yellow("Exiting the program..."));
    }
}
