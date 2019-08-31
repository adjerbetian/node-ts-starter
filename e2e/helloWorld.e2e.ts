import { execute, expect } from "@test/e2e";

describe("helloWorld", () => {
    it("should work", async () => {
        const text = await execute("node dist/main.js");

        expect(text).to.equal("Hello World !");
    });
});
