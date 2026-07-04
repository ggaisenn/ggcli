import arg from 'arg';
import chalk from 'chalk';

export default async function open(config) {
  console.log(chalk.green("Opening the app.."));
  console.log(chalk.gray('Received configuration in open -'), config);
}