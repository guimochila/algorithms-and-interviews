function sieveOfEratosthenes(num) {
  const primes = new Array(20).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }

  const result = [];

  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}

console.log(sieveOfEratosthenes(20));
