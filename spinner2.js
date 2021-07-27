const spins = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ',];
let time = 0;
for (const spin of spins) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, time);
  time += 100;
}
