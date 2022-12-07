import memoize from 'fast-memoize'
import { greeting } from './greeting.js'

const doSomething = (a, b) => {
  console.log('I am inside function');

  return a+b
 }

const memoizedDoSomething = memoize(doSomething)

console.log(memoizedDoSomething(2,5))
console.log(memoizedDoSomething(2,5)) // cached

const memoizedGreeting = memoize(greeting);

console.log(memoizedGreeting("MoHo"));
console.log(memoizedGreeting("JavaScript"));
console.log(memoizedGreeting("MoHo"));
