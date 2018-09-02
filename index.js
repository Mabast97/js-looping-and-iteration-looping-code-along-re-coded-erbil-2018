function printBadges (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }

  return array;
}

function tailsNeverFails () {
  let tail = 0;

  while (Math.random() >= 0.5) {
    tail++;
  }

  return `You got ${tail} tails in a row!`;
}