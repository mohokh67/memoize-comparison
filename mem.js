import mem from 'mem';
import { greeting } from './greeting.js'
import delay from 'delay';


const memoized = mem(greeting, {maxAge: 7000});

console.log(memoized("MoHo")); // Execute
console.log(memoized("MoHo")); // cached
await delay(3000);
console.log(memoized("JavaScript")); // Execute
console.log(memoized("MoHo")); // cached


