import { getFoo } from ".";

describe("getFoo", () => {
    it("should return 'bar'", () => {
        expect(getFoo()).toBe("bar");
    });
});