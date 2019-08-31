import { execSync } from "child_process";

export * from "./unit";
export * from "./utils/execute";

before(function() {
    this.timeout(10000);
    execSync("npm run build");
});
