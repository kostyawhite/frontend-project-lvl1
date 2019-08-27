export default (a, b) => {
  if (a === 0) {
    return Math.floor(Math.random() * (b + 1)) + a;
  }
  return Math.floor(Math.random() * b) + a;
};
