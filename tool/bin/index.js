#!/usr/bin/env node
// Interpreter used to execute our script
// Runs the tool with various arguments
//console.log(process.argv);

//To parse command line arguements

import arg from 'arg';
import chalk from 'chalk';

try{
    const args = arg({
     '--open': Boolean,
     '--buildcheck': Boolean,
     '--help': Boolean,
    });
    
    if(args['--open']){
     console.log(chalk.green("Opening the app.."));
    }
    if(args['--buildcheck']){
        console.log(chalk.yellow("Providing app info.."))
    }
    if(args['--help']){
        gguide()
    }
}catch(e){
    console.log(chalk.red(e.message));
    console.log();
    gguide()
}

function gguide(){
    console.log(chalk.blue("--open: Opens the app"));
    console.log(chalk.blue("--buildcheck: Check the app's build"));
    console.log(chalk.blue("--help: Show this help message"));
}