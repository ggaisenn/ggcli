import chalk from 'chalk';
import debug from 'debug';

export default function Logger(name){
    return {
        log: (...args) => console.log(chalk.green(...args)),
        warning: (...args) => console.log(chalk.yellow(...args)), 
        highlight: (...args) => console.log(chalk.blue(...args)),
        error: (...args) => console.log(chalk.red(...args)),
        debug: debug(name)
    };
}