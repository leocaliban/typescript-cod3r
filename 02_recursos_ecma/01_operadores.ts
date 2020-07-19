// Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers)); // 1034

// Rest
const grupoA: string[] = ['Arsenal', 'Liverpool'];
const grupoB: string[] = ['Real Madri', 'Barcelona'];
const grupoC: string[] = ['Juventus', ...grupoA, ...grupoB];

console.log(grupoC); // [ 'Juventus', 'Arsenal', 'Liverpool', 'Real Madri', 'Barcelona' ]


