import * as sinon from "sinon";

export const sandbox = sinon.createSandbox();
afterEach((): void => sandbox.restore());
