export function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export const greeting = (name) => {
  sleep(2000)
  console.log(`greeting function run with... ${name}`)
  const now = new Date();
  return `${now.toString()} - Hello ${name}`
}
