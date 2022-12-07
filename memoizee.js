import memoize from "memoizee";
import { greeting } from './greeting.js'

const memoizedGreeting = memoize(greeting);

console.log(memoizedGreeting("MoHo"));
console.log(memoizedGreeting("JavaScript"));
console.log(memoizedGreeting("MoHo")); // cached
console.log(memoizedGreeting("JavaScript")); // cached
console.log(memoizedGreeting("MoHo")); // cached

