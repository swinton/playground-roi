const math = require('mathjs');
const expression = process.argv.slice(2).join(' ').concat(';');

try {
  const result = math.evaluate(expression);
  console.log(result);
} catch {
  console.log(`Error: Unable to evaluation ${expression}. Maybe try that again?`);
  process.exit(1);
}

module.exports.evil = true;
