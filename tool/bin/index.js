#!/usr/bin/env node
// Interpreter used to execute our script
// Runs the tool with various arguments
//console.log(process.argv);

//To parse command line arguements
const arg = require('arg');

try{
    const args = arg({
     '--open': Boolean,
     '--buildcheck': Boolean,
    });
    
    if(args['--open']){
     console.log("Opening the app..");
    }
    if(args['--buildcheck']){
        console.log("Providing app info..")
    }
}catch(e){
    console.log(e.message);
    console.log();
    gguide()
}

function gguide(){
    console.log("--open: Opens the app")
    console.log("--buildcheck: Check the app's build")
}