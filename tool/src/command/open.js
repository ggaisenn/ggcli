import openPackage from 'open';
import commandExists from 'command-exists';
import Logger from '../logger.js';
const logger = Logger('open.js');

export default async function open(config) {
  logger.log("Loading...");
  logger.debug('Received configuration in open -', JSON.stringify(config));

  const target = config.targetApp;

  if(!target){
    logger.error("No App or Url specified by the user exists");
    return;
  }

  try {

     // To Validate if it's a browser link (URL)
    const isUrl = target.startsWith('http://') || target.startsWith('https://');
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
    if(!isUrl){

      const tar = 'https://' + target;

      try {
        new URL(tar);
      } catch (e) {
        logger.error(`Failed to open: "${target}" is not a valid URL format: "${e.message}"`);
        return;
      }
      await openPackage(tar);
      logger.log(`Successfully opened the link: ${target}`);

    }else{
      // To Validate if the local app actually exists on the computer
      const exists = await commandExists(target).catch(() => false);

      if (!exists) {
        logger.error(`Failed to open: "${target}" does not exist on this computer.`);
        return;
      }

      await openPackage('', { app: { name: target } });
      logger.log(`Successfully opened the app: ${target}`);
    }
  } catch(e){
    logger.error(`Failed to open ${target}: ${e.message}`);
  }
}