const scrabble = require('@swinton/scrabblescore');
const _ = require('./evil');

(async () => {
  const word = process.argv.slice(2).join("") || 'oxyphenbutazone';
  const score = await scrabble.score(word);

  console.log(`ℹ️ The Scrabble™️ score for "${word}" is: ${score}.`);
})();
