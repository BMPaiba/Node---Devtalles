describe("Test in the App File", () => {
  test("Este resultado debe dar 30", () => {
    // 1.  arrange
    const num1 = 10;
    const num2 = 20;
    // 2.  act
    const res = num1 + num2 +5;
    // 3.  assert
    expect(res).toBe(35);
  });
});
