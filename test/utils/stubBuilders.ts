import { SinonStub } from "sinon";
import { sandbox } from "@test/unit";

export type Stub<T> = T extends Function ? StubFunction : StubObject<T>;
type StubFunction = SinonStub;
type StubObject<T> = {
    [K in keyof T]: SinonStub;
};

export function buildStubFor<T extends Record<string, boolean>>(object: T): StubObject<T>;
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

function buildStubForObject<T extends Record<string, boolean>>(object: T): StubFunction | StubObject<T> {
    const result: Record<string, SinonStub> = {};
    for (const key in object) {
        // noinspection JSUnfilteredForInLoop
        result[key] = buildStubForFunction(key);
    }
    return result as StubObject<T>;
}

function buildStubForFunction(name: string): SinonStub {
    return sandbox.stub().rejects(`${name} should not have been called`);
}
