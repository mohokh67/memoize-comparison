import memoizeOne from 'memoize-one';
import { greeting } from './greeting.js'

const memoizedOneGreeting = memoizeOne(greeting);

console.log(memoizedOneGreeting("MoHo")); // execute
console.log(memoizedOneGreeting("MoHo")); // cache
console.log(memoizedOneGreeting("JavaScript")); // execute
console.log(memoizedOneGreeting("MoHo")); // execute
console.log(memoizedOneGreeting("MoHo")); // cache
console.log(memoizedOneGreeting("JavaScript")); // execute
console.log(memoizedOneGreeting("JavaScript")); // cache
console.log(memoizedOneGreeting("MoHo")); // execute

