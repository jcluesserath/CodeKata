import {DiamondExample} from "./diamondExample";


describe("Print diamond", () => {
  it("should return '   A\\n  B B\\n C   C\\nE     E\\n C   C\\n  B B\\n   A', if E is provided", () => {
    const result = "   A\n  B B\n C   C\nE     E\n C   C\n  B B\n   A";
    const diamondC = new DiamondExample("E");
    expect(diamondC.print()).toEqual(result);
  });
});
