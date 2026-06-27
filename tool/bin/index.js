#!/usr/bin/env node
// Interpreter used to execute our script
// Runs the tool with various arguments
//console.log(process.argv);

//To parse command line arguements
const arg = require('arg');

const args = arg({
    '--open': Boolean,
    '--buildcheck': Boolean,
});

if(args['--open']){
    console.log("Opening the app..");
}