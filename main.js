#! /usr/bin/env node
import inquirer from 'inquirer';
let todolist = [];
const add = () => {
    inquirer.prompt([
        {
            name: 'task',
            type: 'input',
            message: 'What is the task?',
        }
    ]).then((answer) => {
        todolist.push(answer.task);
        main(); // To display the menu again after adding the task
    });
};
const complete = () => {
    inquirer.prompt([
        {
            name: 'task',
            type: 'checkbox',
            message: 'Which task have you completed?',
            choices: todolist,
        }
    ]).then((answers) => {
        main();
    });
};
const remove = () => {
    inquirer.prompt([
        {
            name: 'task',
            type: 'checkbox',
            message: 'Which task would you like to remove?',
            choices: todolist,
        }
    ]).then((answers) => {
        main();
    });
};
const list = () => {
    console.log('Tasks:');
    todolist.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};
const menu = () => {
    return inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Add a task',
                'List all tasks',
                'Mark a task as complete',
                'Remove a task',
                'Quit',
            ],
        }
    ]);
};
const main = () => {
    menu().then((answer) => {
        switch (answer.choice) {
            case 'Add a task':
                add();
                break;
            case 'List all tasks':
                list();
                break;
            case 'Mark a task as complete':
                complete();
                break;
            case 'Remove a task':
                remove();
                break;
            case 'Quit':
                console.log('Goodbye!');
                break;
            default:
                console.log('Invalid choice');
                break;
        }
    });
};
main();
