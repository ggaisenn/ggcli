import chalk from 'chalk';


export default async function Logger(name){
    return {
        log: (...args) => console.log(chalk.gray(...args)),
        warning: (...args) => console.log(chalk.yellow(...args)), 
        highlight: (...args) => console.log(chalk.blue(...args)),
        debug: console.log
    };
}