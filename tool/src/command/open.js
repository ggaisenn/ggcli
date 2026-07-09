import arg from 'arg';
import Logger from '../logger.js';
const logger = Logger('open.js');

export default async function open(config) {
  logger.log("Opening the app..");
  logger.debug('Received configuration in open -', JSON.stringify(config));
}