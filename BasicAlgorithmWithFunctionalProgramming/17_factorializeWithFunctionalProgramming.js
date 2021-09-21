function factorialize(n) {
    return Array(n)
        .fill(0)
        .map((zero, i) => i + 1)
        .reduce((a, b) => a * b, 1);
}

console.log(factorialize(5));
