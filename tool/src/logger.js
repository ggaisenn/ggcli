import chalk from 'chalk';


export default function Logger(name){
    return {
        log: (...args) => console.log(chalk.gray(...args)),
        warning: (...args) => console.log(chalk.yellow(...args)), 
        highlight: (...args) => console.log(chalk.blue(...args)),
        error: (...args) => console.log(chalk.red(...args)),
        debug: (...args) => console.log(chalk.green(...args))
    };
}