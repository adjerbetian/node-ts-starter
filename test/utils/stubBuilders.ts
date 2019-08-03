import { SinonStub } from "sinon";
import { sandbox } from "./sandbox";

// eslint-disable-next-line @typescript-eslint/ban-types
export type Stub<T> = T extends Function ? StubFunction : StubObject<T>;
type StubFunction = SinonStub;
type StubObject<T> = {
    [K in keyof T]: SinonStub;
};

export function buildStubFor<T extends Record<string, boolean>>(
    object: T
): StubObject<T>;
export function buildStubFor(name: string): StubFunction;
export function buildStubFor<T extends Record<string, boolean>>(
    object: T | string
): { [K in keyof T]: SinonStub } | SinonStub {
    if (typeof object === "string") {
        return buildStubForFunction(object);
    } else {
        return buildStubForObject(object);
    }
}

function buildStubForObject<T extends Record<string, boolean>>(
    object: T
): StubObject<T> {
    return Object.fromEntries(
        Object.keys(object).map((key) => [key, buildStubForFunction(key)])
    ) as StubObject<T>;
}

function buildStubForFunction(name: string): SinonStub {
    return sandbox.stub().rejects(`${name} should not have been called`);
}
