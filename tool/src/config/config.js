import chalk from 'chalk';
import {cosmiconfigSync} from 'cosmiconfig';
const configLoad = cosmiconfigSync('gg-cli');
import { createRequire } from 'module';
import schema from './schema.json';
import Ajv from 'ajv';
const ajv = new Ajv();



const require = createRequire(import.meta.url);

export default async function getConfig() {
    const result = configLoad.search(process.cwd());
    if (result) {
        const isvalid = ajv.validate(schema, result.config);
        if(!isvalid){
            console.log(chalk.red('Invalid configuration'));
            console.log(chalk.red(ajv.errors));
            process.exit(1);
        }
        console.log(chalk.green('Configuration found'));
        return result.config;
    } else {
        console.log(chalk.yellow('Could not find configuration, using Default configuration'));
        return {port: 1234};
    }

}