import openPackage from 'open';
import Logger from '../logger.js';
const logger = Logger('open.js');

export default async function open(config) {
  logger.log("Opening the app..");
  logger.debug('Received configuration in open -', JSON.stringify(config));

  const target = config.targetApp;

  if(!target){
    logger.error("No App or Url specified by the user exists");
    return;
  }

    // To Validate if it's a browser link (URL)
  const isUrl = target.startsWith('http://') || target.startsWith('https://');

  try {
    logger.debug(`Attempting to open: ${target}`);

    if (isUrl) {
      // Basic URL structural validation
      try {
        new URL(target);
      } catch (e) {
        logger.error(`Failed to open: "${target}" is not a valid URL format: "${e.message}"`);
        return;
      }
      await openPackage(target);
      logger.log(`Successfully opened the link: ${target}`);
    }
  } catch(e){
    logger.error(`Failed to open: ${target}: ${e.message}`);
  }
}