import arg from 'arg';
import Logger from '../logger.js';
const logger = Logger('open.js');

export default async function open(config) {
  logger.debug("Opening the app..");
  logger.log('Received configuration in open -', JSON.stringify(config));
}