import openPackage from 'open';
import Logger from '../logger.js';
const logger = Logger('open.js');

export default async function open(config) {
  logger.log("Opening the app..");
  logger.debug('Received configuration in open -', JSON.stringify(config));

  const target = config.targetApp;

  if(!target){
    logger.error("No app or url specified by the user exists");
    return;
  }

  try{
    logger.debug(`Attempting to open: ${target}`);
    await openPackage(target);
    logger.log(`Successfully opened the app: ${target}`);
  }catch(e){
    logger.error(`Failed to open the app: ${target}: ${e.message}`);
  }
}