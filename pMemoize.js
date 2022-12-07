import pMemoize from 'p-memoize';
import got from 'got';

const memoizedGot = pMemoize(got);

console.time("firstAttempt");
const data = await memoizedGot('https://www.npmjs.com/package/p-memoize');
console.log(data.statusCode);
console.timeEnd("firstAttempt");



// This call is cached
console.time("secondAttempt");
const newData = await memoizedGot('https://www.npmjs.com/package/p-memoize');
console.log(newData.statusCode);
console.timeEnd("secondAttempt");