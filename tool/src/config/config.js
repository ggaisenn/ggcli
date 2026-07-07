import chalk from 'chalk';
import {cosmiconfigSync} from 'cosmiconfig';
const configLoad = cosmiconfigSync('tool');
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default async function getConfig() {
    const result = configLoad.search(process.cwd());
    if (result) {
        console.log(chalk.green('Configuration found'));
        return result.config;
    } else {
        console.log(chalk.yellow('Could not find configuration, using Default configuration'));
        return {port: 1234};
    }

}