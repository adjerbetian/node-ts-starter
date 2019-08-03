import { expect, sandbox } from "@test";
import { getHelloWorld } from "./getHelloWorld";

describe("getHelloWorld", () => {
    it("should work", () => {
        const result = getHelloWorld();

        expect(result).to.equal("Hello World !");
    });
    it("stub", () => {
        const calculator = {
            add(a: number, b: number) {
                return a + b;
            },
        };
        sandbox.stub(calculator, "add").returns(0);

        const result = calculator.add(2, 3);

        expect(result).to.equal(0);
    });
});
