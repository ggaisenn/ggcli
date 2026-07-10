import Logger from '../logger.js';
const logger = Logger('config.js');
import {cosmiconfigSync} from 'cosmiconfig';
const configLoad = cosmiconfigSync('gg-cli');
import { createRequire } from 'module';
import schema from './schema.json' with { type: 'json' };
import Ajv from 'ajv';
import betterAjvErrors from 'better-ajv-errors';
const ajv = new Ajv();



const require = createRequire(import.meta.url);

export default async function getConfig() {
    const result = configLoad.search(process.cwd());
    if (result) {
        const isvalid = ajv.validate(schema, result.config.default);
        if(!isvalid){
 
            logger.warning('Invalid configuration');
            console.log();
            console.log(betterAjvErrors(schema, result.config.default, ajv.errors));
            console.log();
            process.exit(1);
        }
        logger.debug('Configuration found', JSON.stringify(result.config.default));
        return result.config.default;
    } else {
        logger.debug('Could not find configuration, using Default configuration');
        return {port: 1234};
    }

}