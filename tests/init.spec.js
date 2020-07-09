describe('Add two numbers!', () => {
  it('should add two numbers', () => {
    expect(adder(1, 2)).toBe(3);
  });
});

function adder(a, b) {
  return a + b;
}
