function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

let ans = sumVariadicSafe(1, 2, 3);
console.log(ans);