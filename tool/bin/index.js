#!/usr/bin/env node
// Interpreter used to execute our script
// Runs the tool with various arguments
//console.log(process.argv);

//To parse command line arguements
import arg from 'arg';
import openPackage from 'open';
import Logger from '../src/logger.js';
const logger = Logger('index.js');
import open from '../src/command/open.js';
import getConfig from '../src/config/config.js';



try{
    const args = arg({
     '--open': String,
     '--buildcheck': Boolean,
     '--help': Boolean,
    });
    
    if(args['--open']){
        const configData = await getConfig();

        configData.targetApp = args['--open'];

        await open(configData);
    }
    if(args['--buildcheck']){
        logger.debug("Providing app info..")
    }
    if(args['--help']){
        gguide()
    }
}catch(e){
    logger.error(e.message);
    console.log();
    gguide()
}

function gguide(){
    logger.highlight("--open <APP_PATH/URL_LINK>: Opens a specified App or URL in the default browser");
    logger.highlight("--buildcheck: Check the app's build");
    logger.highlight("--help: Show this help message");
}