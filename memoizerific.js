import memoizerific from 'memoizerific';
import { greeting } from './greeting.js'


const memoized = memoizerific(3)(greeting)

console.log(memoized("MoHo")); // execute
console.log(memoized("JavaScript")); // execute
console.log(memoized("Typescript")); // execute
console.log(memoized("Node.js")); // execute
console.log(memoized("MoHo")); // execute
console.log(memoized("JavaScript")); // execute
console.log(memoized("MoHo")); // cache
console.log(memoized("MoHo")); // cache

