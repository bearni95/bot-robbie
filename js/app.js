/*
global.readline = require('readline');
global.prompt = require('prompt');
global.mongoose = require('mongoose') 
require('mongoose-function')(mongoose);
global.fs = require('fs');

var EventEmitter = require('events').EventEmitter;
global.events = new EventEmitter();

global.event_listeners = require('./lib/listeners.js')

global.brain = require('./lib/brain.js');
global.bot = require('./lib/bot.js');

bot.init();

bot.ask();

*/

$(function(){
    app.init();
})

var app = {
    init : function(){
        bot.init();
    }
}

$(function(){
    var parsed = nlp('Hi! This is Bernat the blue guy talking')
    var parsed = nlp('Play "girls just wanna have fun" on youtube')
    console.log('nouns', parsed.nouns().out('array'));
    console.log('verbs', parsed.verbs().out('array'));
    console.log('adjectives', parsed.adjectives().out('array'));
    console.log(parsed.topics().data());
})