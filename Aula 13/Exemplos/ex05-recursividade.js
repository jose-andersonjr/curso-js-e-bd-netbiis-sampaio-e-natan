const FATORIAL = (n) => (n <= 1) ? 1 : n * FATORIAL(n-1);
console.log(FATORIAL(5));