import { expect } from "@test/unit";
import { getHelloWorld } from "./getHelloWorld";

describe("index", () => {
    it("should work", () => {
        const result = getHelloWorld();

        expect(result).to.equal("Hello World !");
    });
});
