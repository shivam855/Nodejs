// Events Module
// where we can create, fire, listen for our-own events.

const EventEmitter  = require("events");

const event = new EventEmitter();

// Example 1: Registering for the event to be fired only one time using once.

// event.on("sayHi", () => {
//     console.log("Hey I'm here");
// });

// event.emit("sayHi");

// Example 2: create an event emitter instance and register a couple of callback


// event.on("sayHi", () => {
//     console.log("Hey I'm here");
// });

// event.on("sayHi", () => {
//     console.log("Hey I love to see you");
// });

// event.on("sayHi", () => {
//     console.log("Hey enjoy here");
// });

// event.emit("sayHi");

// Example 3: Registering for the event with callback parameter

event.on("sayHi", (status, msg) => {
        console.log(`status code is ${status} and message is ${msg}`);
    });
    
    event.emit("sayHi", 200, "OK");
    
